# Implementation

## Purpose

Build the active EW ticket with the simplest readable TypeScript implementation
that satisfies its acceptance criteria.

## Inputs

- active ticket and applicable module brief
- historically reviewed content and checked source metadata
- `docs/architecture.md` and existing typed content contracts

## Outputs

- typed curriculum under `content/`, separate from React presentation
- focused components and tests for important logic
- lint, test, build, accessibility, and historical/product QA results
- desktop screenshot for perceptible UI changes, plus mobile when responsive
  behavior changes

## Procedure

1. Map every acceptance criterion to an intended file change or validation step
   before editing.
2. Confirm all learner-facing historical inputs have the state required by the
   publication boundary. Return `BLOCKED` rather than substituting prose.
3. Implement the smallest typed change inside the assigned write scope and add
   focused tests for important logic and publication constraints.
4. Run relevant focused tests, then the repository test, lint, and build scripts.
5. For UI changes, exercise the route with keyboard interaction and capture the
   required untracked screenshots at representative viewports.
6. Return the standard handoff report with exact commands, results, file paths,
   and criterion evidence for historical review and product QA.

## Boundary

Do not publish candidates, hardcode canonical curriculum in components, add
unrequested infrastructure, or change ticket state until every gate passes.
