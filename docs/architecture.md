# Application architecture

Empire Wheel v0.1 is a single Next.js application using the App Router, TypeScript, and Tailwind CSS. It is intentionally static at this milestone.

## Boundaries

- `app/` owns routes, metadata, layouts, and global styling.
- `components/` contains reusable presentation components such as the competency wheel.
- `content/` contains typed curriculum content organized by field and module,
  such as `content/mesopotamia/module-01.ts`. Historical prose and exercises
  belong in content files, not hardcoded in React components.
- `lib/` contains framework-independent curriculum indexes, progress helpers,
  and deterministic mock-review logic.
- `components/` may contain client-side lesson and progress interactions while
  route files remain responsible for page composition.
- `tests/` verifies important data constraints from the product requirements.

There is no server-side persistence or external service integration. When interactive progress is introduced, it may initially use browser storage as permitted by the v0.1 requirements. Historical content and primary sources must be reviewed and cited before being added.

Module 1 progress is a single browser-local completion flag. Reviewer output is
clearly identified as mocked and is generated locally; no AI service is called.

## Content lifecycle

Module briefs and source-acquisition notes live under `product/spokes/`. They are
planning artifacts, not learner content. Runtime content in `content/` carries
a review state through the typed content model introduced by EW-016. Only
source-checked, historically reviewed material may be presented as published
evidence; unchecked candidates remain in planning documents.

`content/types.ts` defines source metadata and review states. Learner-facing
collections pass through `lib/publication.ts`, which fails closed for drafts,
missing source records, and candidate sources. Historically reviewed evidence
is also required to name at least one checked source and a stable locator.

The current Module 1 content predates that lifecycle and is explicitly labeled
as an editorial draft. Do not expand its React component with additional
hardcoded prose while the content schema is being revised.
