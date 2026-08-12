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

## Product Priority

The user experience matters more than architectural sophistication.

Empire Wheel should feel like a serious humanities research tool,
not a generic AI chatbot.

## Source Integrity

Never fabricate primary sources, citations, translations,
historical documents, scholars, or bibliographic information.

Mock data must be explicitly labeled as mock data.

## Code

Use TypeScript.

Favor simple readable components.

Add tests for important logic.

Run tests and linting before declaring work complete.
