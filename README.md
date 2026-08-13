# Empire Wheel

Empire Wheel is a structured humanities learning tool. This repository contains the v0.1 application shell and the emerging Sumer curriculum. Module 1 is an explicitly labeled curriculum draft while its scholarship and evidence are curated and historically reviewed.

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
- `/mesopotamia` — ten-module Sumer curriculum (route name retained for now)
- `/mesopotamia/module-1` — draft Module 1 experience

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
content/              Typed research, sources, and spoke curriculum content
agents/               Contributor role and handoff guides
lib/                  Typed curriculum and competency data
tests/                Unit tests for important application data
product/              Product vision and requirements
```

This initial milestone intentionally has no authentication, database, AI integration, or persisted progress. Historical lesson and primary-source content will be added in a later milestone and should only be published with verified citations.
