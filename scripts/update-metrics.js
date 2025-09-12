#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const https = require('https');

// Rate limiting helper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch JSON data with retry logic
async function fetchJSON(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'awesome-nodejs-tools-updater' } }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              reject(e);
            }
          });
        }).on('error', reject);
      });
    } catch (error) {
      if (i === retries - 1) throw error;
      await sleep(1000 * (i + 1)); // Exponential backoff
    }
  }
}

// Format large numbers
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

// Get GitHub stars
async function getGitHubStars(owner, repo) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    const data = await fetchJSON(url);
    return data.stargazers_count || 0;
  } catch (error) {
    console.error(`Error fetching GitHub stars for ${owner}/${repo}:`, error.message);
    return null;
  }
}

// Get NPM downloads
async function getNpmDownloads(packageName) {
  try {
    const url = `https://api.npmjs.org/downloads/point/last-week/${packageName}`;
    const data = await fetchJSON(url);
    return data.downloads || 0;
  } catch (error) {
    console.error(`Error fetching NPM downloads for ${packageName}:`, error.message);
    return null;
  }
}

// Parse GitHub URL to get owner and repo
function parseGitHubUrl(url) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/\)]+)/);
  if (match) {
    return { owner: match[1], repo: match[2].replace(/\.git$/, '') };
  }
  return null;
}

// Determine ranking based on stars and downloads
function getRanking(stars, downloads) {
  // Gold: 10k+ stars OR 1M+ downloads
  if (stars >= 10000 || downloads >= 1000000) return '🥇';
  // Silver: 5k+ stars OR 500k+ downloads
  if (stars >= 5000 || downloads >= 500000) return '🥈';
  // Bronze: 1k+ stars OR 100k+ downloads
  if (stars >= 1000 || downloads >= 100000) return '🥉';
  // Notable: Everything else
  return '⭐';
}

// Extract package info from markdown line
function extractPackageInfo(line) {
  // Match pattern: | [emoji] **[Package Name](url)** | stars | downloads | description |
  const match = line.match(/\|\s*([🥇🥈🥉⭐]?)\s*\*\*\[([^\]]+)\]\(([^)]+)\)\*\*\s*\|\s*([^|]+)\|\s*([^|]+)\|([^|]+)\|/);
  if (match) {
    return {
      ranking: match[1].trim(),
      name: match[2].trim(),
      url: match[3].trim(),
      starsText: match[4].trim(),
      downloadsText: match[5].trim(),
      description: match[6].trim()
    };
  }
  return null;
}

// Update README with new metrics
async function updateReadme() {
  const readmePath = path.join(__dirname, '..', 'README.md');
  const content = await fs.readFile(readmePath, 'utf8');
  const lines = content.split('\n');
  
  let updated = false;
  const updatedLines = [];
  let inTable = false;
  let processedPackages = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we're in a table
    if (line.includes('| Package |') && line.includes('| Stars |')) {
      inTable = true;
      updatedLines.push(line);
      continue;
    }
    
    // Check for table separator
    if (line.match(/^\|\s*[-:]+\s*\|/)) {
      updatedLines.push(line);
      continue;
    }
    
    // End of table
    if (inTable && !line.startsWith('|')) {
      inTable = false;
    }
    
    // Process table rows
    if (inTable && line.startsWith('|')) {
      const packageInfo = extractPackageInfo(line);
      
      if (packageInfo) {
        processedPackages++;
        console.log(`Processing ${processedPackages}: ${packageInfo.name}`);
        
        // Parse GitHub URL
        const githubInfo = parseGitHubUrl(packageInfo.url);
        let stars = null;
        let downloads = null;
        
        if (githubInfo) {
          // Get GitHub stars
          stars = await getGitHubStars(githubInfo.owner, githubInfo.repo);
          await sleep(100); // Rate limiting
        }
        
        // Get NPM downloads (use package name from the title)
        const npmName = packageInfo.name.toLowerCase().replace(/\s+/g, '-');
        downloads = await getNpmDownloads(npmName);
        await sleep(100); // Rate limiting
        
        // Update metrics if we got new data
        if (stars !== null || downloads !== null) {
          const newStars = stars !== null ? formatNumber(stars) : packageInfo.starsText;
          const newDownloads = downloads !== null ? formatNumber(downloads) + '/w' : packageInfo.downloadsText;
          
          // Determine new ranking
          const newRanking = getRanking(stars || 0, downloads || 0);
          
          // Reconstruct the line with updated metrics
          const updatedLine = `| ${newRanking} **[${packageInfo.name}](${packageInfo.url})** | ${newStars} | ${newDownloads} | ${packageInfo.description} |`;
          
          if (updatedLine !== line) {
            updated = true;
            console.log(`  Updated: Stars: ${newStars}, Downloads: ${newDownloads}, Ranking: ${newRanking}`);
          }
          
          updatedLines.push(updatedLine);
        } else {
          updatedLines.push(line);
        }
      } else {
        updatedLines.push(line);
      }
    } else {
      updatedLines.push(line);
    }
  }
  
  if (updated) {
    // Add timestamp to README
    const timestamp = new Date().toISOString().split('T')[0];
    const updatedContent = updatedLines.join('\n').replace(
      /Last updated: \d{4}-\d{2}-\d{2}/,
      `Last updated: ${timestamp}`
    );
    
    // If no "Last updated" exists, add it after the header
    const finalContent = updatedContent.includes('Last updated:') 
      ? updatedContent 
      : updatedContent.replace(
          '# 🚀 Awesome Node.js Tools',
          `# 🚀 Awesome Node.js Tools\n\n*Last updated: ${timestamp}*`
        );
    
    await fs.writeFile(readmePath, finalContent);
    console.log(`\n✅ Successfully updated ${processedPackages} packages`);
    return true;
  }
  
  console.log('\n📊 No updates needed - all metrics are current');
  return false;
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting metrics update...\n');
    const updated = await updateReadme();
    process.exit(updated ? 0 : 0);
  } catch (error) {
    console.error('❌ Error updating metrics:', error);
    process.exit(1);
  }
}

main();