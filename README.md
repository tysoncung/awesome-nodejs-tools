# Awesome Node.js Tools 🚀 [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> A curated, categorized, and ranked collection of Node.js tools, libraries, and resources

This repository contains a comprehensive list of Node.js packages ranked by popularity, maintenance, and community adoption. Rankings are based on GitHub stars, npm downloads, and recent activity.

## 📊 Ranking Methodology

Tools are ranked using these metrics:
- ⭐ **GitHub Stars** - Community interest
- 📦 **NPM Weekly Downloads** - Actual usage
- 🔄 **Recent Updates** - Active maintenance
- 🏆 **Industry Adoption** - Used by major companies

Rankings: 🥇 Top Choice | 🥈 Excellent | 🥉 Good | ⭐ Notable

---

## 📑 Table of Contents

- [🌐 Web Frameworks](#web-frameworks)
- [🗄️ Database](#database)
  - [Drivers](#drivers)
  - [ORMs](#orms)
  - [Query Builders](#query-builders)
  - [Migration Tools](#migration-tools)
- [🔐 Authentication & Authorization](#authentication--authorization)
- [🛡️ Security](#security)
- [📡 Real-time & WebSockets](#real-time--websockets)
- [🧪 Testing](#testing)
  - [Test Runners](#test-runners)
  - [Assertion Libraries](#assertion-libraries)
  - [Mocking](#mocking)
  - [E2E Testing](#e2e-testing)
- [📝 Logging](#logging)
- [⚡ Performance & Optimization](#performance--optimization)
- [🏗️ Build Tools & Bundlers](#build-tools--bundlers)
- [🎨 Template Engines](#template-engines)
- [📧 Email](#email)
- [🖼️ Image Processing](#image-processing)
- [📄 File System & Uploads](#file-system--uploads)
- [🔄 Process Management](#process-management)
- [📅 Date & Time](#date--time)
- [✅ Validation](#validation)
- [🔧 CLI Tools](#cli-tools)
- [🌍 HTTP Clients](#http-clients)
- [📊 Data Processing](#data-processing)
- [🗜️ Compression](#compression)
- [🔑 Crypto](#crypto)
- [📱 Mobile Development](#mobile-development)
- [🤖 Machine Learning & AI](#machine-learning--ai)
- [📈 Monitoring & APM](#monitoring--apm)
- [🚀 Deployment & DevOps](#deployment--devops)
- [📚 Documentation](#documentation)
- [🎮 Game Development](#game-development)
- [💰 Payment Processing](#payment-processing)
- [🗺️ Geocoding & Maps](#geocoding--maps)
- [📹 Media Processing](#media-processing)
- [🔍 Search](#search)
- [📦 Package Management](#package-management)
- [🧰 Utility Libraries](#utility-libraries)

---

## 🌐 Web Frameworks

### Full-Stack Frameworks

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Next.js](https://github.com/vercel/next.js)** | 118k+ | 5.5M+ | The React Framework for Production |
| 🥇 **[Express](https://github.com/expressjs/express)** | 63k+ | 28M+ | Fast, unopinionated, minimalist web framework |
| 🥈 **[Nest](https://github.com/nestjs/nest)** | 64k+ | 3M+ | Progressive Node.js framework for enterprise |
| 🥈 **[Nuxt.js](https://github.com/nuxt/nuxt)** | 51k+ | 800k+ | The Intuitive Vue Framework |
| 🥉 **[Fastify](https://github.com/fastify/fastify)** | 30k+ | 1.5M+ | Fast and low overhead web framework |
| 🥉 **[Remix](https://github.com/remix-run/remix)** | 27k+ | 300k+ | Full stack web framework |
| 🥇 **[Koa](https://github.com/koajs/koa)** | 35.6k | 4.9M/w | Next generation web framework |
| 🥇 **[Hapi](https://github.com/hapijs/hapi)** | 14.7k | 47.6k/w | The simple, secure framework |
| 🥇 **[AdonisJS](https://github.com/adonisjs/core)** | 18.2k | 0/w | Fully featured web framework |
| 🥇 **[Sails.js](https://github.com/balderdashy/sails)** | 22.9k | 0/w | Realtime MVC Framework |
| 🥇 **[Meteor](https://github.com/meteor/meteor)** | 44.7k | 2.2k/w | Full-stack JavaScript platform |
| 🥈 **[LoopBack](https://github.com/loopbackio/loopback-next)** | 5.1k | 19.5k/w | Highly extensible Node.js framework |

### Microframeworks

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Hono](https://github.com/honojs/hono)** | 15k+ | 400k+ | Ultrafast web framework for Cloudflare Workers |
| 🥈 **[Polka](https://github.com/lukeed/polka)** | 5k+ | 200k+ | Micro web server |
| 🥇 **[Micro](https://github.com/vercel/micro)** | 10.6k | 1.2M/w | Asynchronous HTTP microservices |

---

## 🗄️ Database

### Drivers

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[mongodb](https://github.com/mongodb/node-mongodb-native)** | 10k+ | 6M+ | Official MongoDB driver |
| 🥇 **[redis](https://github.com/redis/node-redis)** | 16k+ | 3M+ | Redis client for Node.js |
| 🥇 **[pg](https://github.com/brianc/node-postgres)** | 11k+ | 7M+ | PostgreSQL client |
| 🥈 **[mysql2](https://github.com/sidorares/node-mysql2)** | 3.8k+ | 5M+ | Fast MySQL driver |
| 🥇 **[sqlite3](https://github.com/TryGhost/node-sqlite3)** | 6.4k | 1.7M/w | SQLite3 bindings |
| 🥉 **[cassandra-driver](https://github.com/datastax/nodejs-driver)** | 1.3k | 112.4k/w | DataStax Cassandra driver |

### ORMs

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Prisma](https://github.com/prisma/prisma)** | 36k+ | 2M+ | Next-generation ORM |
| 🥇 **[TypeORM](https://github.com/typeorm/typeorm)** | 33k+ | 1.5M+ | ORM for TypeScript and JavaScript |
| 🥈 **[Sequelize](https://github.com/sequelize/sequelize)** | 29k+ | 1.8M+ | Feature-rich ORM |
| 🥈 **[Mongoose](https://github.com/Automattic/mongoose)** | 26k+ | 2.5M+ | MongoDB object modeling |
| 🥉 **[Drizzle](https://github.com/drizzle-team/drizzle-orm)** | 19k+ | 200k+ | TypeScript ORM with SQL-like experience |
| 🥈 **[MikroORM](https://github.com/mikro-orm/mikro-orm)** | 8.5k | 0/w | TypeScript ORM based on Data Mapper |
| 🥈 **[Objection.js](https://github.com/Vincit/objection.js)** | 7.3k | 0/w | SQL-friendly ORM |
| 🥈 **[Waterline](https://github.com/balderdashy/waterline)** | 5.4k | 31.0k/w | Datastore-agnostic ORM |

### Query Builders

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Knex.js](https://github.com/knex/knex)** | 18k+ | 2M+ | SQL query builder |
| 🥈 **[Kysely](https://github.com/kysely-org/kysely)** | 9k+ | 150k+ | Type-safe SQL query builder |
| 🥉 **[Slonik](https://github.com/gajus/slonik)** | 4.8k | 71.3k/w | PostgreSQL client with strict types |

---

## 🔐 Authentication & Authorization

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Passport](https://github.com/jaredhanson/passport)** | 22k+ | 2.5M+ | Simple, unobtrusive authentication |
| 🥇 **[NextAuth.js](https://github.com/nextauthjs/next-auth)** | 21k+ | 900k+ | Authentication for Next.js |
| 🥇 **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)** | 17k+ | 10M+ | JWT implementation |
| 🥈 **[Lucia](https://github.com/lucia-auth/lucia)** | 7k+ | 30k+ | Simple and flexible auth library |
| 🥈 **[node-jose](https://github.com/cisco/node-jose)** | 700+ | 1M+ | JavaScript Object Signing and Encryption |
| 🥉 **[express-jwt](https://github.com/auth0/express-jwt)** | 4.4k+ | 700k+ | JWT authentication middleware |
| 🥉 **[Grant](https://github.com/simov/grant)** | 4.2k | 275.2k/w | OAuth Proxy |
| 🥉 **[Permit](https://github.com/ianstormtaylor/permit)** | 1.7k | 427/w | Unopinionated auth library |

---

## 🛡️ Security

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[helmet](https://github.com/helmetjs/helmet)** | 10k+ | 3M+ | Secure Express apps with HTTP headers |
| 🥇 **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** | 7.5k+ | 7M+ | Password hashing library |
| 🥇 **[cors](https://github.com/expressjs/cors)** | 6k+ | 12M+ | CORS middleware |
| 🥈 **[express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)** | 2.8k+ | 1.5M+ | Rate limiting middleware |
| 🥈 **[argon2](https://github.com/ranisalt/node-argon2)** | 1.8k+ | 500k+ | Argon2 password hashing |
| 🥉 **[express-validator](https://github.com/express-validator/express-validator)** | 6k+ | 900k+ | Middleware for validation |
| 🥇 **[node-forge](https://github.com/digitalbazaar/forge)** | 5.2k | 23.6M/w | TLS and cryptography library |
| 🥈 **[speakeasy](https://github.com/speakeasyjs/speakeasy)** | 2.8k | 609.8k/w | Two-factor authentication |

---

## 📡 Real-time & WebSockets

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Socket.IO](https://github.com/socketio/socket.io)** | 59k+ | 4M+ | Real-time bidirectional communication |
| 🥇 **[ws](https://github.com/websockets/ws)** | 21k+ | 45M+ | Simple WebSocket client and server |
| 🥈 **[Pusher](https://github.com/pusher/pusher-js)** | 2k+ | 300k+ | Real-time communication service |
| 🥉 **[uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)** | 6.5k+ | 100k+ | Highly scalable WebSocket server |
| 🥉 **[Primus](https://github.com/primus/primus)** | 4.5k | 7.8k/w | Abstraction layer for real-time frameworks |
| 🥇 **[SockJS](https://github.com/sockjs/sockjs-node)** | 2.1k | 12.4M/w | WebSocket emulation |

---

## 🧪 Testing

### Test Runners

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Jest](https://github.com/facebook/jest)** | 43k+ | 20M+ | Delightful JavaScript testing |
| 🥇 **[Vitest](https://github.com/vitest-dev/vitest)** | 11k+ | 3M+ | Blazing fast unit test framework |
| 🥈 **[Mocha](https://github.com/mochajs/mocha)** | 22k+ | 6M+ | Feature-rich JavaScript test framework |
| 🥉 **[AVA](https://github.com/avajs/ava)** | 20k+ | 300k+ | Test runner with concurrent tests |
| 🥈 **[Tap](https://github.com/tapjs/node-tap)** | 0 | 538.0k/w | Test Anything Protocol library |
| 🥇 **[Jasmine](https://github.com/jasmine/jasmine-npm)** | 381 | 1.3M/w | Behavior-driven testing framework |

### Assertion Libraries

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Chai](https://github.com/chaijs/chai)** | 8k+ | 6M+ | BDD/TDD assertion library |
| 🥈 **[expect](https://github.com/facebook/jest/tree/main/packages/expect)** | - | 20M+ | Jest's assertion library |
| 🥉 **[Should.js](https://github.com/shouldjs/should.js)** | 1.9k | 0/w | BDD style assertions |

### Mocking

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Sinon](https://github.com/sinonjs/sinon)** | 9.5k+ | 4M+ | Test spies, stubs and mocks |
| 🥈 **[Nock](https://github.com/nock/nock)** | 12k+ | 2M+ | HTTP mocking library |
| 🥉 **[MSW](https://github.com/mswjs/msw)** | 14k+ | 2M+ | Mock Service Worker |
| 🥉 **[Mockery](https://github.com/mfncooper/mockery)** | 1.1k | 149.7k/w | Mock require statements |

### E2E Testing

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Playwright](https://github.com/microsoft/playwright)** | 61k+ | 2.5M+ | Cross-browser automation |
| 🥇 **[Cypress](https://github.com/cypress-io/cypress)** | 46k+ | 5M+ | Fast, easy and reliable testing |
| 🥈 **[Puppeteer](https://github.com/puppeteer/puppeteer)** | 86k+ | 3M+ | Headless Chrome automation |
| 🥉 **[WebdriverIO](https://github.com/webdriverio/webdriverio)** | 8.7k+ | 1M+ | Next-gen browser automation |
| 🥇 **[Nightwatch](https://github.com/nightwatchjs/nightwatch)** | 11.9k | 144.0k/w | E2E testing framework |

---

## 📝 Logging

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Winston](https://github.com/winstonjs/winston)** | 22k+ | 10M+ | Universal logging library |
| 🥇 **[Pino](https://github.com/pinojs/pino)** | 13k+ | 3M+ | Super fast logger |
| 🥈 **[Bunyan](https://github.com/trentm/node-bunyan)** | 7k+ | 1M+ | JSON logging library |
| 🥈 **[debug](https://github.com/debug-js/debug)** | 11k+ | 100M+ | Tiny debugging utility |
| 🥉 **[Morgan](https://github.com/expressjs/morgan)** | 7.7k+ | 4M+ | HTTP request logger middleware |
| 🥇 **[Log4js](https://github.com/log4js-node/log4js-node)** | 5.8k | 6.2M/w | Logging framework |
| 🥇 **[Signale](https://github.com/klaudiosinani/signale)** | 9.0k | 2.1M/w | Hackable console logger |

---

## ⚡ Performance & Optimization

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Cluster](https://nodejs.org/api/cluster.html)** | Built-in | - | Multi-core scaling |
| 🥇 **[PM2](https://github.com/Unitech/pm2)** | 40k+ | 2.5M+ | Process manager with load balancer |
| 🥈 **[node-cache](https://github.com/node-cache/node-cache)** | 2.2k+ | 1.5M+ | Simple caching module |
| 🥈 **[lru-cache](https://github.com/isaacs/node-lru-cache)** | 5k+ | 40M+ | LRU cache implementation |
| 🥉 **[bullmq](https://github.com/taskforcesh/bullmq)** | 5k+ | 400k+ | Queue library based on Redis |
| 🥉 **[bee-queue](https://github.com/bee-queue/bee-queue)** | 3.7k+ | 60k+ | Simple, fast job queue |
| 🥇 **[bottleneck](https://github.com/SGrondin/bottleneck)** | 1.9k | 4.4M/w | Rate limiter |
| 🥇 **[p-limit](https://github.com/sindresorhus/p-limit)** | 2.5k | 158.5M/w | Run multiple promises with limited concurrency |

---

## 🏗️ Build Tools & Bundlers

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Vite](https://github.com/vitejs/vite)** | 64k+ | 8M+ | Next generation frontend tooling |
| 🥇 **[Webpack](https://github.com/webpack/webpack)** | 64k+ | 25M+ | Module bundler |
| 🥇 **[esbuild](https://github.com/evanw/esbuild)** | 37k+ | 7M+ | Extremely fast bundler |
| 🥈 **[Rollup](https://github.com/rollup/rollup)** | 24k+ | 8M+ | Module bundler for JavaScript |
| 🥈 **[Parcel](https://github.com/parcel-bundler/parcel)** | 43k+ | 300k+ | Zero configuration build tool |
| 🥈 **[Turbopack](https://github.com/vercel/turbo)** | 25k+ | 100k+ | Rust-based bundler |
| 🥉 **[SWC](https://github.com/swc-project/swc)** | 30k+ | 3M+ | Super-fast TypeScript/JavaScript compiler |
| 🥇 **[Gulp](https://github.com/gulpjs/gulp)** | 33.1k | 1.7M/w | Streaming build system |
| 🥇 **[tsup](https://github.com/egoist/tsup)** | 10.8k | 2.1M/w | Bundle TypeScript libraries |

---

## 🎨 Template Engines

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[EJS](https://github.com/mde/ejs)** | 7.5k+ | 10M+ | Embedded JavaScript templates |
| 🥇 **[Pug](https://github.com/pugjs/pug)** | 21k+ | 1.5M+ | High-performance template engine |
| 🥈 **[Handlebars](https://github.com/handlebars-lang/handlebars.js)** | 17k+ | 7M+ | Semantic templates |
| 🥉 **[Nunjucks](https://github.com/mozilla/nunjucks)** | 8.4k+ | 500k+ | Powerful templating by Mozilla |
| 🥇 **[Mustache](https://github.com/janl/mustache.js)** | 16.7k | 7.5M/w | Logic-less templates |
| 🥈 **[doT](https://github.com/olado/doT)** | 5.0k | 566.9k/w | Fast templating |

---

## 📧 Email

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Nodemailer](https://github.com/nodemailer/nodemailer)** | 16k+ | 3M+ | Send emails easily |
| 🥇 **[SendGrid](https://github.com/sendgrid/sendgrid-nodejs)** | 3.5k+ | 600k+ | SendGrid API client |
| 🥈 **[Resend](https://github.com/resendlabs/resend-node)** | 2k+ | 100k+ | Modern email API |
| 🥈 **[MJML](https://github.com/mjmlio/mjml)** | 16k+ | 200k+ | Responsive email framework |
| 🥉 **[Email Templates](https://github.com/forwardemail/email-templates)** | 3.6k+ | 50k+ | Create, preview, and send emails |
| 🥉 **[Mailgun-js](https://github.com/mailgun/mailgun-js)** | 0 | 115.3k/w | Mailgun API client |

---

## 🖼️ Image Processing

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Sharp](https://github.com/lovell/sharp)** | 28k+ | 6M+ | High performance image processing |
| 🥇 **[Jimp](https://github.com/jimp-dev/jimp)** | 13k+ | 1M+ | Image processing in pure JavaScript |
| 🥈 **[GraphicsMagick](https://github.com/aheckmann/gm)** | 6.9k+ | 150k+ | GraphicsMagick and ImageMagick bindings |
| 🥉 **[Canvas](https://github.com/Automattic/node-canvas)** | 10k+ | 500k+ | Cairo-backed Canvas implementation |
| 🥈 **[ImageMin](https://github.com/imagemin/imagemin)** | 5.7k | 993.1k/w | Image optimization |
| 🥇 **[qrcode](https://github.com/soldair/node-qrcode)** | 7.9k | 4.1M/w | QR code generator |

---

## 📄 File System & Uploads

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Multer](https://github.com/expressjs/multer)** | 11k+ | 3M+ | Multipart/form-data handling |
| 🥇 **[fs-extra](https://github.com/jprichardson/node-fs-extra)** | 9.3k+ | 40M+ | Extra file system methods |
| 🥈 **[Formidable](https://github.com/node-formidable/formidable)** | 7k+ | 7M+ | Form data parser |
| 🥈 **[chokidar](https://github.com/paulmillr/chokidar)** | 10k+ | 30M+ | File system watcher |
| 🥉 **[rimraf](https://github.com/isaacs/rimraf)** | 5.5k+ | 50M+ | Deep deletion module |
| 🥇 **[glob](https://github.com/isaacs/node-glob)** | 8.6k | 211.0M/w | Match files using patterns |
| 🥇 **[make-dir](https://github.com/sindresorhus/make-dir)** | 477 | 87.8M/w | Make directories and parents |

---

## 🔄 Process Management

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[PM2](https://github.com/Unitech/pm2)** | 40k+ | 2.5M+ | Production process manager |
| 🥇 **[Nodemon](https://github.com/remy/nodemon)** | 26k+ | 5M+ | Auto-restart on file changes |
| 🥈 **[Forever](https://github.com/foreversd/forever)** | 13k+ | 200k+ | Keep scripts running continuously |
| 🥉 **[cross-env](https://github.com/kentcdodds/cross-env)** | 6.2k+ | 10M+ | Cross-platform environment variables |
| 🥇 **[concurrently](https://github.com/open-cli-tools/concurrently)** | 7.5k | 8.5M/w | Run commands concurrently |
| 🥇 **[dotenv](https://github.com/motdotla/dotenv)** | 20.0k | 65.4M/w | Load environment variables from .env |

---

## 📅 Date & Time

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[date-fns](https://github.com/date-fns/date-fns)** | 33k+ | 20M+ | Modern JavaScript date utility |
| 🥇 **[Day.js](https://github.com/iamkun/dayjs)** | 45k+ | 15M+ | 2kB immutable date-time library |
| 🥇 **[Luxon](https://github.com/moment/luxon)** | 14k+ | 10M+ | Modern dates and times |
| 🥈 **[Moment.js](https://github.com/moment/moment)** | 47k+ | 15M+ | Parse, validate, manipulate dates (legacy) |
| 🥇 **[date-fns-tz](https://github.com/marnusw/date-fns-tz)** | 1.2k | 4.8M/w | Timezone support for date-fns |
| 🥇 **[node-cron](https://github.com/node-cron/node-cron)** | 3.2k | 1.6M/w | Task scheduler |

---

## ✅ Validation

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Zod](https://github.com/colinhacks/zod)** | 30k+ | 8M+ | TypeScript-first schema validation |
| 🥇 **[Joi](https://github.com/hapijs/joi)** | 20k+ | 6M+ | Object schema validation |
| 🥇 **[Yup](https://github.com/jquense/yup)** | 22k+ | 5M+ | JavaScript schema builder |
| 🥈 **[Ajv](https://github.com/ajv-validator/ajv)** | 13k+ | 50M+ | JSON schema validator |
| 🥈 **[Validator.js](https://github.com/validatorjs/validator.js)** | 22k+ | 10M+ | String validation and sanitization |
| 🥉 **[class-validator](https://github.com/typestack/class-validator)** | 10k+ | 4M+ | Decorator-based validation |
| 🥇 **[express-validator](https://github.com/express-validator/express-validator)** | 6.2k | 1.1M/w | Express middleware for validation |

---

## 🔧 CLI Tools

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Commander.js](https://github.com/tj/commander.js)** | 26k+ | 70M+ | Node.js command-line interfaces |
| 🥇 **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)** | 19k+ | 20M+ | Interactive command line prompts |
| 🥇 **[chalk](https://github.com/chalk/chalk)** | 21k+ | 200M+ | Terminal string styling |
| 🥈 **[yargs](https://github.com/yargs/yargs)** | 11k+ | 50M+ | Command line argument parser |
| 🥈 **[ora](https://github.com/sindresorhus/ora)** | 9k+ | 20M+ | Elegant terminal spinner |
| 🥉 **[blessed](https://github.com/chjj/blessed)** | 11k+ | 200k+ | Terminal interface library |
| 🥇 **[ink](https://github.com/vadimdemedes/ink)** | 31.3k | 1.8M/w | React for CLI |
| 🥇 **[figlet](https://github.com/patorjk/figlet.js)** | 2.8k | 2.4M/w | ASCII art text |
| 🥇 **[cli-table3](https://github.com/cli-table/cli-table3)** | 581 | 18.2M/w | Pretty unicode tables |

---

## 🌍 HTTP Clients

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Axios](https://github.com/axios/axios)** | 103k+ | 50M+ | Promise based HTTP client |
| 🥇 **[Got](https://github.com/sindresorhus/got)** | 14k+ | 20M+ | Human-friendly HTTP request library |
| 🥇 **[node-fetch](https://github.com/node-fetch/node-fetch)** | 8.5k+ | 60M+ | Fetch API for Node.js |
| 🥈 **[Undici](https://github.com/nodejs/undici)** | 5.5k+ | 15M+ | Fast HTTP/1.1 client |
| 🥈 **[Ky](https://github.com/sindresorhus/ky)** | 11k+ | 500k+ | Tiny and elegant HTTP client |
| 🥉 **[Superagent](https://github.com/visionmedia/superagent)** | 16k+ | 5M+ | Progressive HTTP client |
| 🥇 **[Request](https://github.com/request/request)** | 25.6k | 13.7M/w | Simplified HTTP client (deprecated) |
| 🥇 **[Needle](https://github.com/tomas/needle)** | 1.6k | 9.0M/w | Streamable HTTP client |

---

## 📊 Data Processing

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Lodash](https://github.com/lodash/lodash)** | 59k+ | 50M+ | Utility library |
| 🥇 **[Ramda](https://github.com/ramda/ramda)** | 23k+ | 5M+ | Functional programming library |
| 🥈 **[CSV-parse](https://github.com/adaltas/node-csv)** | 3.8k+ | 5M+ | CSV parsing |
| 🥈 **[xlsx](https://github.com/SheetJS/sheetjs)** | 34k+ | 2M+ | Spreadsheet parser and writer |
| 🥉 **[PapaParse](https://github.com/mholt/PapaParse)** | 12k+ | 1M+ | Fast CSV parser |
| 🥉 **[JSONStream](https://github.com/dominictarr/JSONStream)** | 1.9k | 5.9k/w | Streaming JSON parser |
| 🥇 **[xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)** | 5.0k | 24.2M/w | XML to JavaScript converter |

---

## 🗜️ Compression

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[compression](https://github.com/expressjs/compression)** | 2.7k+ | 8M+ | Compression middleware |
| 🥈 **[archiver](https://github.com/archiverjs/node-archiver)** | 2.7k+ | 3M+ | Create archives (zip, tar) |
| 🥈 **[node-tar](https://github.com/npm/node-tar)** | 800+ | 40M+ | Tar implementation |
| 🥉 **[adm-zip](https://github.com/cthackers/adm-zip)** | 2k+ | 4M+ | ZIP archive manager |
| 🥇 **[pako](https://github.com/nodeca/pako)** | 5.9k | 35.0M/w | Zlib port to JavaScript |

---

## 🔑 Crypto

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** | 7.5k+ | 7M+ | Password hashing |
| 🥇 **[uuid](https://github.com/uuidjs/uuid)** | 14k+ | 100M+ | UUID generation |
| 🥈 **[crypto-js](https://github.com/brix/crypto-js)** | 15k+ | 6M+ | Crypto standards library |
| 🥈 **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)** | 17k+ | 10M+ | JWT implementation |
| 🥉 **[nanoid](https://github.com/ai/nanoid)** | 23k+ | 30M+ | Secure URL-safe ID generator |
| 🥉 **[argon2](https://github.com/ranisalt/node-argon2)** | 2.0k | 433.3k/w | Argon2 password hashing |

---

## 📱 Mobile Development

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[React Native](https://github.com/facebook/react-native)** | 115k+ | 1M+ | Build mobile apps with React |
| 🥇 **[Expo](https://github.com/expo/expo)** | 28k+ | 600k+ | Platform for React Native |
| 🥈 **[Ionic](https://github.com/ionic-team/ionic-framework)** | 50k+ | 200k+ | Cross-platform mobile development |
| 🥉 **[NativeScript](https://github.com/NativeScript/NativeScript)** | 23k+ | 50k+ | Native mobile apps with JavaScript |
| 🥇 **[Capacitor](https://github.com/ionic-team/capacitor)** | 13.9k | 1.1k/w | Cross-platform native runtime |

---

## 🤖 Machine Learning & AI

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[TensorFlow.js](https://github.com/tensorflow/tfjs)** | 18k+ | 200k+ | Machine learning in JavaScript |
| 🥇 **[OpenAI](https://github.com/openai/openai-node)** | 6k+ | 500k+ | OpenAI API client |
| 🥈 **[LangChain.js](https://github.com/langchain-ai/langchainjs)** | 10k+ | 200k+ | Build LLM applications |
| 🥈 **[Brain.js](https://github.com/BrainJS/brain.js)** | 14k+ | 50k+ | Neural networks in JavaScript |
| 🥉 **[ML.js](https://github.com/mljs/ml)** | 2.5k+ | 20k+ | Machine learning library |
| 🥇 **[Natural](https://github.com/NaturalNode/natural)** | 10.8k | 204.8k/w | Natural language processing |
| 🥈 **[Synaptic](https://github.com/cazala/synaptic)** | 6.9k | 926/w | Neural network library |

---

## 📈 Monitoring & APM

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Sentry](https://github.com/getsentry/sentry-javascript)** | 7.5k+ | 5M+ | Error tracking and monitoring |
| 🥇 **[New Relic](https://github.com/newrelic/node-newrelic)** | 2.3k+ | 400k+ | Application performance monitoring |
| 🥈 **[OpenTelemetry](https://github.com/open-telemetry/opentelemetry-js)** | 2.4k+ | 2M+ | Observability framework |
| 🥈 **[Elastic APM](https://github.com/elastic/apm-agent-nodejs)** | 570+ | 200k+ | Application performance monitoring |
| 🥉 **[AppSignal](https://github.com/appsignal/appsignal-nodejs)** | 20+ | 5k+ | APM and error tracking |
| 🥈 **[Clinic.js](https://github.com/clinicjs/node-clinic)** | 5.9k | 0/w | Performance profiling |

---

## 🚀 Deployment & DevOps

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Docker](https://github.com/docker/docker)** | 70k+ | - | Containerization platform |
| 🥇 **[Serverless](https://github.com/serverless/serverless)** | 46k+ | 1M+ | Serverless framework |
| 🥈 **[Pulumi](https://github.com/pulumi/pulumi)** | 19k+ | 200k+ | Infrastructure as code |
| 🥈 **[AWS CDK](https://github.com/aws/aws-cdk)** | 11k+ | 1M+ | Cloud Development Kit |
| 🥉 **[Terraform CDK](https://github.com/hashicorp/terraform-cdk)** | 4.7k+ | 50k+ | CDK for Terraform |
| 🥇 **[SST](https://github.com/sst/sst)** | 24.5k | 185.4k/w | Build full-stack apps on AWS |
| 🥉 **[Claudia.js](https://github.com/claudiajs/claudia)** | 3.9k | 0/w | Deploy to AWS Lambda |

---

## 💰 Payment Processing

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Stripe](https://github.com/stripe/stripe-node)** | 3.5k+ | 1M+ | Stripe API client |
| 🥈 **[PayPal SDK](https://github.com/paypal/PayPal-node-SDK)** | 900+ | 100k+ | PayPal REST SDK |
| 🥉 **[Square](https://github.com/square/square-nodejs-sdk)** | 80+ | 20k+ | Square API client |
| 🥉 **[Braintree](https://github.com/braintree/braintree_node)** | 332 | 141.9k/w | Braintree SDK |
| ⭐ **[Razorpay](https://github.com/razorpay/razorpay-node)** | 219 | 98.3k/w | Razorpay API client |

---

## 🧰 Utility Libraries

| Package | Stars | Downloads/Week | Description |
|---------|-------|----------------|-------------|
| 🥇 **[Lodash](https://github.com/lodash/lodash)** | 59k+ | 50M+ | Utility functions |
| 🥇 **[Underscore](https://github.com/jashkenas/underscore)** | 27k+ | 10M+ | Functional programming helpers |
| 🥈 **[RxJS](https://github.com/ReactiveX/rxjs)** | 30k+ | 35M+ | Reactive programming |
| 🥈 **[Async](https://github.com/caolan/async)** | 28k+ | 40M+ | Async utilities |
| 🥉 **[p-queue](https://github.com/sindresorhus/p-queue)** | 3k+ | 10M+ | Promise queue |
| 🥇 **[ms](https://github.com/vercel/ms)** | 0 | 281.0M/w | Time conversion utility |
| 🥇 **[bytes](https://github.com/visionmedia/bytes.js)** | 0 | 57.8M/w | Byte size conversion |

---

## 📚 Resources

### Learning
- [Node.js Official Docs](https://nodejs.org/docs)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com/)
- [You Don't Know Node](https://github.com/azat-co/you-dont-know-node)

### Community
- [Node.js Reddit](https://reddit.com/r/node)
- [Node.js Discord](https://discord.gg/nodejs)
- [Stack Overflow Node.js](https://stackoverflow.com/questions/tagged/node.js)

---

## 🌟 Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new tools or updating rankings.

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

⭐ If you find this repository helpful, please star it!

