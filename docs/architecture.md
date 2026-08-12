# Application architecture

Empire Wheel v0.1 is a single Next.js application using the App Router, TypeScript, and Tailwind CSS. It is intentionally static at this milestone.

## Boundaries

- `app/` owns routes, metadata, layouts, and global styling.
- `components/` contains reusable presentation components such as the competency wheel.
- `lib/` contains typed, framework-independent curriculum data.
- `tests/` verifies important data constraints from the product requirements.

There is no server-side persistence or external service integration. When interactive progress is introduced, it may initially use browser storage as permitted by the v0.1 requirements. Historical content and primary sources must be reviewed and cited before being added.
