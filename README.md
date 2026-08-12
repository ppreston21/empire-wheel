# Empire Wheel

Empire Wheel is a structured humanities learning tool. This repository contains the v0.1 application shell: a competency dashboard, the Ancient Mesopotamia curriculum, and the placeholder for its first module.

## Local setup

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The main routes are:

- `/` — competency overview
- `/mesopotamia` — ten-module curriculum
- `/mesopotamia/module-1` — Module 1 placeholder

## Quality checks

```bash
npm run lint
npm test
npm run build
```

## Project structure

```text
app/                  Next.js App Router pages and global styles
components/           Shared interface components
lib/                  Typed curriculum and competency data
tests/                Unit tests for important application data
product/              Product vision and requirements
```

This initial milestone intentionally has no authentication, database, AI integration, or persisted progress. Historical lesson and primary-source content will be added in a later milestone and should only be published with verified citations.
