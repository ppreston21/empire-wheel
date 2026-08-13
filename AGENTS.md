# Empire Wheel agent operating policy

This file is the repository-wide entry point for human and autonomous
contributors. Detailed role prompts, handoff contracts, and execution recipes
live in [`agents/README.md`](agents/README.md).

## Start every task

1. Read `product/vision.md`, `product/requirements.md`, and
   `docs/architecture.md`.
2. Read the active `EW-*` ticket in `product/backlog.md`.
3. For curriculum or historical work, also read the applicable brief under
   `product/spokes/` and the role guide(s) in `agents/`.
4. Confirm the ticket has testable acceptance criteria and that required inputs
   exist. If not, stop at the appropriate planning or research handoff rather
   than inventing them.
5. Check `git status` before editing. Do not overwrite unrelated work.

## Authority and document ownership

- `product/vision.md` owns durable purpose and curriculum thesis.
- `product/requirements.md` owns testable invariants and release gates.
- `product/backlog.md` owns ordered delivery work and acceptance criteria.
- `product/spokes/` owns civilization and module learning designs.
- `docs/architecture.md` owns implementation boundaries and decisions.
- `agents/` owns role procedures, artifact contracts, and review handoffs.

Do not turn the vision into a task list, the backlog into a second vision, or a
role guide into product requirements.

## Autonomy model

An orchestrator may delegate bounded tasks to specialized agents using the
workflow in `agents/README.md`. Agents may work concurrently only when their
write scopes do not overlap and their inputs are already approved. Each agent
must:

- receive one role, one objective, explicit inputs, an allowed write scope, and
  a definition of done;
- inspect current repository state before editing and stay inside that scope;
- return the handoff report defined in `agents/README.md`;
- distinguish completed work, blocked work, and recommendations;
- never approve its own historical accuracy or final product quality; and
- never commit, merge, open a pull request, or mark a ticket complete unless the
  orchestrator explicitly assigns that authority.

One contributor may perform multiple roles sequentially, but historical review
and product QA remain separate decisions with fresh review passes.

## Source integrity: non-negotiable

- Never fabricate primary sources, quotations, translations, artifacts,
  identifiers, dates, scholars, bibliography, rights statements, or links.
- Historical claims must come from provided or verified sources. If verification
  is unavailable, use clearly labeled placeholder content outside publishable
  learner UI.
- `candidate` means discovered but unchecked and is restricted to research
  notes. `source-checked` means identity, locator, access, and metadata were
  checked. `historically-reviewed` means claims and use were independently
  reviewed in context and may be published.
- Search snippets, generated summaries, and unsourced prose are not sources.
- Record the verification date for web resources. Keep observation distinct
  from interpretation and state uncertainty rather than smoothing it away.

## Implementation rules

- Prefer the simplest implementation satisfying the product requirements.
- Use TypeScript and keep typed curriculum content separate from presentation.
- Favor readable components and add tests for important logic.
- Do not introduce authentication, payments, databases, queues, microservices,
  or unrelated infrastructure unless a requirement explicitly requests it.
- Do not commit generated dependencies, build output, screenshots, or local
  environment files unless a ticket explicitly requires a tracked artifact.
- Never expose unchecked candidates in learner-facing UI.

## Completion gates

Before claiming completion:

1. Map every acceptance criterion to evidence in the handoff report.
2. Run the relevant tests, lint, and build.
3. For perceptible UI work, run the app and capture a representative desktop
   screenshot; also capture mobile when responsive behavior changes.
4. Run accessibility and product QA. Run independent historical QA whenever
   historical claims, evidence, maps, captions, or curriculum change.
5. Update ticket state only when every criterion and applicable review passes.

If a gate cannot run, report the exact command, failure, and limitation. A
partial result is a handoff, not a completed ticket.

## Development versus publication

Historical review is a release gate, not an implementation prerequisite.

- `candidate` material remains restricted to research notes.
- `source-checked` material may be implemented in development so reviewers can
  inspect the exact rendered experience.
- Development content using `source-checked` material must remain visibly
  non-release and must not be promoted to production.
- `historically-reviewed` status is required before learner release.
- Implementers may not promote their own content to `historically-reviewed`.
