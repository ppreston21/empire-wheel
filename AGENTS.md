# AGENTS.md

Before making changes, read:

- product/vision.md
- product/requirements.md
- docs/architecture.md

## Development Principles

Prefer the simplest implementation that satisfies the product
requirements.

Do not introduce infrastructure unless it is required.

Avoid premature abstraction.

Do not add authentication, payments, databases, queues,
microservices, or unrelated functionality unless explicitly requested.

Product Director
│
├── Curriculum Architect
│   └── defines what the learner should understand
│
├── Research Curator
│   └── finds scholarship, evidence, media and citations
│
├── Learning Experience Designer
│   └── converts material into Read / See / Explore / Examine / Argue
│
├── Requirements Agent
│   └── turns the module design into acceptance criteria + EW tickets
│
├── Implementation Agent
│   └── builds the feature
│
├── Historical Reviewer
│   └── checks factual/evidentiary integrity
│
└── Product QA Agent
    └── tests acceptance criteria, UX and regressions

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

## Code

Use TypeScript.

Favor simple readable components.

Add tests for important logic.

Run tests and linting before declaring work complete.
