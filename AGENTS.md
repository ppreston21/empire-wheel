# Empire Wheel contributor guide

Before making changes, read:

- product/vision.md
- product/requirements.md
- docs/architecture.md

For curriculum work, also read the relevant brief under `product/spokes/` and
the active tickets in `product/backlog.md`.

## Document ownership

- `product/vision.md` — durable product purpose and curriculum thesis.
- `product/requirements.md` — testable product invariants and release gates.
- `product/backlog.md` — ordered delivery work and acceptance criteria.
- `product/spokes/` — civilization and module learning designs.
- `docs/architecture.md` — implementation boundaries and technical decisions.

Do not turn the vision into a task list or the backlog into a second vision.

## Development Principles

Prefer the simplest implementation that satisfies the product
requirements.

Do not introduce infrastructure unless it is required.

Avoid premature abstraction.

Do not add authentication, payments, databases, queues,
microservices, or unrelated functionality unless explicitly requested.

PRODUCT OWNER
        │
        ▼
Civilization Architect
Creates the 10-module structure for one spoke
        │
        ▼
Module Architect
Defines a 2–5 hour module
        │
        ├───────────────┐
        ▼               ▼
Research Agent      Media/Visual Agent
scholarship         maps/video/images/data
sources
        │               │
        └───────┬───────┘
                ▼
Experience Designer
arranges Read / Watch / Explore / Evidence / Argue
                │
                ▼
Requirements Agent
creates EW tickets + acceptance criteria
                │
                ▼
Codex Builder
                │
                ▼
Historical QA + Product QA

One person or agent may perform more than one role, but preserve the review
boundaries. Research supplies sources; experience design turns them into
learning; historical QA decides whether historical content is publishable.

## Required workflow

1. Confirm the applicable module brief and active EW ticket.
2. Research into a source ledger; keep unchecked candidates out of learner UI.
3. Define the smallest coherent experience and acceptance criteria.
4. Build with typed content separate from presentation.
5. Run tests and lint. For perceptible UI work, run the app and capture a
   screenshot at a representative desktop size (and mobile when responsive
   behavior changes).
6. Run historical QA for content and product QA for behavior and accessibility.
7. Update ticket state only when every acceptance criterion passes.

## Product Priority

The user experience matters more than architectural sophistication.

Empire Wheel should feel like a serious humanities research tool,
not a generic AI chatbot.

MODULE SPEC
     ↓
NEXT EXPERIENCE
     ↓
2–5 EW TICKETS
     ↓
BUILD
     ↓
SCREENSHOT / TEST
     ↓
REVIEW
     ↓
MERGE
     ↓
NEXT EXPERIENCE

## Source Integrity

Never fabricate primary sources, citations, translations,
historical documents, scholars, or bibliographic information.

Mock data must be explicitly labeled as mock data.

Historical claims must come from provided or verified sources.
Do not fabricate quotations, translations, artifact IDs, dates, or
citations. If source verification is unavailable, use explicitly
labeled placeholder content.

### Source states

- **candidate** — discovered but not yet checked; research notes only.
- **source-checked** — identity, URL/locator, access, and metadata checked.
- **historically-reviewed** — claims and use reviewed in context; publishable.

Search snippets, generated summaries, and unsourced prose are not sources.
Record the date a web resource was checked. Keep observation distinct from
interpretation, and name uncertainty rather than smoothing it away.

## Code

Use TypeScript.

Favor simple readable components.

Add tests for important logic.

Run tests and linting before declaring work complete.

Do not commit generated dependencies, build output, screenshots, or local
environment files unless a ticket explicitly requires a tracked artifact.
