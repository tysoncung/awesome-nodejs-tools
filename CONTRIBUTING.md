# Contributing to Awesome Node.js Tools

Thank you for your interest in contributing to this curated list of Node.js tools and libraries!

## How to Contribute

### Adding a New Package

Before adding a new package, please ensure it meets our inclusion criteria:

#### Inclusion Criteria
- ✅ **Active Maintenance**: Last update within 6 months
- ✅ **Documentation**: Clear README and API documentation
- ✅ **Stability**: At least v1.0.0 or 6+ months old
- ✅ **Community**: Minimum 100 GitHub stars OR 10k weekly downloads
- ✅ **Purpose**: Solves a real problem, not duplicate functionality
- ✅ **License**: Open source license (MIT, Apache, BSD, etc.)

### Package Format

Add packages using this format in the appropriate table:

```markdown
| 🥇 **[Package Name](github-url)** | Stars | Downloads | Description |
```

### Ranking System

Rankings are determined by:

#### 🥇 Top Choice (Gold)
- 10k+ GitHub stars OR 1M+ weekly downloads
- Active maintenance (commits within last month)
- Industry standard or widely adopted
- Excellent documentation

#### 🥈 Excellent (Silver)
- 5k+ GitHub stars OR 500k+ weekly downloads
- Regular updates (within 3 months)
- Strong community support
- Good documentation

#### 🥉 Good (Bronze)
- 1k+ GitHub stars OR 100k+ weekly downloads
- Updates within 6 months
- Growing adoption
- Basic documentation

#### ⭐ Notable
- Unique functionality
- Promising new tools
- Niche but valuable
- Minimum viable metrics

### Updating Rankings

Rankings should be updated based on:
1. Current GitHub stars (check repository)
2. NPM weekly downloads (check npmjs.com)
3. Recent activity (last commit/release)
4. Major version releases
5. Industry adoption changes

## Pull Request Process

### 1. Fork and Clone
```bash
git fork https://github.com/tysoncung/awesome-nodejs-tools
git clone https://github.com/YOUR-USERNAME/awesome-nodejs-tools
```

### 2. Create Feature Branch
```bash
git checkout -b add-package-name
# or
git checkout -b update-category-name
```

### 3. Make Changes
- Add package in correct category
- Include all required metrics
- Maintain alphabetical order within ranking tiers
- Update table formatting

### 4. Verify Data
- Check GitHub stars: `https://github.com/owner/repo`
- Check NPM downloads: `https://www.npmjs.com/package/package-name`
- Verify last update date
- Test all links

### 5. Commit Changes
```bash
git add README.md
git commit -m "Add [Package] to [Category]"
# or
git commit -m "Update rankings in [Category]"
```

### 6. Submit PR
- Clear PR title
- Description of changes
- Metrics verification
- Link to package

## Categories

### Adding New Categories

New categories require:
- Minimum 10 packages
- Clear scope definition
- No overlap with existing categories
- Discussion in issue first

### Category Order

Categories are ordered by development workflow:
1. Core (frameworks, databases)
2. Features (auth, realtime, etc.)
3. Development (testing, building)
4. Operations (monitoring, deployment)
5. Utilities

## What We're Looking For

### High Priority
- 🚀 New frameworks/tools with rapid adoption
- 📈 Significant ranking changes (stars/downloads)
- 🆕 Emerging categories
- 🔧 Missing essential tools
- 📊 Metrics updates

### Always Welcome
- Bug fixes (broken links, typos)
- Better descriptions (concise, clear)
- Missing popular packages
- Outdated metrics updates
- Dead project removal

## Guidelines

### Do's
✅ Research thoroughly before adding
✅ Verify all metrics are current
✅ Check for duplicates
✅ Test all links work
✅ Keep descriptions concise (5-10 words)
✅ Include both new and established tools
✅ Update rankings based on data

### Don'ts
❌ Add packages you maintain without disclosure
❌ Add packages below minimum criteria
❌ Include deprecated/abandoned projects
❌ Add duplicate functionality
❌ Use marketing language
❌ Manipulate rankings without data

## Metrics Verification

### GitHub Stars
```bash
# Check via API
curl https://api.github.com/repos/OWNER/REPO | jq .stargazers_count
```

### NPM Downloads
```bash
# Check via API
curl https://api.npmjs.org/downloads/point/last-week/PACKAGE | jq .downloads
```

### Last Update
- Check GitHub repository "last commit"
- Check NPM "last publish"
- Use most recent of the two

## Maintenance Tasks

### Monthly Updates
- Update download numbers
- Update star counts
- Check for new releases
- Remove deprecated packages

### Quarterly Reviews
- Re-evaluate rankings
- Add trending packages
- Archive outdated tools
- Category reorganization

## Code of Conduct

- Be respectful and constructive
- No spam or excessive self-promotion
- Focus on helping the community
- Provide objective assessments
- Welcome newcomers

## Recognition

Contributors are recognized through:
- GitHub contributors list
- Special mentions for significant updates
- Community kudos for maintenance work

## Questions?

- Open an issue for discussion
- Tag @tysoncung for urgent matters
- Check existing issues first
- Join discussions in PRs

Thank you for helping maintain this resource for the Node.js community! 🚀