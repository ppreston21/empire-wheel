# Empire Wheel backlog

The backlog is ordered by learner value and dependency. A ticket is **done**
only when its acceptance criteria, tests, and relevant review pass. Product
requirements use `R-*`; delivery tickets use `EW-*`.

## Now — make Sumer Module 1 credible

### EW-016 — Source ledger and publication states ✅

**Why:** Module 1 cannot grow safely while draft claims and reviewed evidence
share one undifferentiated content model.

**Acceptance criteria**

- [x] Typed source records implement the metadata in R-004.
- [x] Content objects carry `draft`, `source-checked`, or
      `historically-reviewed` state.
- [x] Learner routes exclude unchecked candidates by default.
- [x] Tests reject a publishable evidence object without source and locator.

### EW-017 — Curate the Module 1 reading and media set ✅

**Why:** The current module has no meaningful encounter with scholarship.

**Acceptance criteria**

- [x] Select 2–3 accessible scholarly readings and at most two media resources.
- [x] Record author/institution, purpose, time, access, URL, and verification date.
- [x] A historical reviewer checks bibliography, links, and module fit.
- [x] Each card tells the learner what question to bring to the resource.

### EW-017a — Establish contributor roles and content ownership ✅

**Why:** Curriculum work needs explicit research, review, and implementation
handoffs, while runtime content should identify Sumer as a spoke rather than
using Mesopotamia as if it were a civilization.

**Acceptance criteria**

- [x] Add focused role guides under `agents/` with inputs, outputs, and review
      boundaries.
- [x] Organize `content/` around `research`, `sources`, shared `modules`, and
      spoke-owned runtime curriculum.
- [x] Move Module 1 from `content/mesopotamia` to the Sumer spoke without
      changing the current public route.
- [x] Keep typed content separate from presentation and preserve all checks.

### EW-018 — Replace the placeholder with an evidence lab

**Acceptance criteria**

- [ ] Include at least three reviewed objects across site, artifact, text, map,
      dataset, or scholarship types.
- [ ] Separate observation, context, interpretation, and uncertainty.
- [ ] Use stable collection/catalogue locators and rights metadata.
- [ ] Revise the argument prompt to require named evidence and a limitation.

### EW-019 — Build southern Mesopotamia visual geography

**Acceptance criteria**

- [ ] Orient the learner to alluvium, waterways, Ubaid/Uruk sites, and changing
      settlement scale without presenting reconstructed ancient channels as fact.
- [ ] Include legend, dates, source note, uncertainty, alt text, and inquiry task.
- [ ] Work at small and large viewports and pass keyboard review.

### EW-020 — Complete the Module 1 learning loop

**Acceptance criteria**

- [ ] Implement all activities specified in `product/spokes/sumer/module-01.md`.
- [ ] Add the study guide and activity-based completion.
- [ ] Confirm a realistic 2–5 hour learner path.
- [ ] Pass historical QA, product QA, screenshot review, tests, lint, and build.

## Next — establish the reusable Sumer spoke

### EW-021 — Reconcile the wheel and Sumer spoke navigation

- [ ] Replace the legacy eighteen-field competency model with nineteen historical
      spokes from the vision.
- [ ] Show the ten named Sumer modules and Sumer → Akkad handoff.
- [ ] Preserve clear v0.1 locking and progress behavior.

### EW-022 — Reusable resource and evidence components

- [ ] Render source state, citation, access, learner purpose, and rights metadata.
- [ ] Support readable fallback behavior for unavailable embeds.

### EW-023 — Reusable exploration frame

- [ ] Support maps, plans, annotated images, and system models with a common
      legend/source/uncertainty/inquiry grammar.

### EW-024 — Module 2 brief: The Urban Revolution

- [ ] Produce the module brief, source ledger, experience sequence, and 2–5
      implementation tickets before UI work begins.

## Later

- [ ] EW-025 Modules 3–9 briefs and delivery, one experience slice at a time.
- [ ] EW-026 Module 10 and the Sumer → Akkad handoff experience.
- [ ] EW-027 Sumer spoke study and comparison experience.
- [ ] EW-028 Historical and product QA for the complete Sumer spoke.
- [ ] EW-029 Define the Akkad spoke only after the Sumer content model is proven.

## Completed baseline (requires audit against current requirements)

- [x] EW-001 Application shell and initial visual language.
- [x] EW-002 Legacy competency wheel and curriculum navigation.
- [x] EW-011 Initial Module 1 content model.
- [x] EW-012 Initial Module 1 lesson UI.
- [x] EW-013 Placeholder source-analysis exercise.
- [x] EW-014 Clearly labeled deterministic mock reviewer.
- [x] EW-015 Browser-local Module 1 completion flag.

These tickets document shipped work, not current release readiness. EW-002 and
EW-011–015 predate the updated vision and are superseded where the `Now` tickets
set stronger criteria.
