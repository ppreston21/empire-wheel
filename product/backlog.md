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

### EW-017b — Make contributor roles autonomy-ready ✅

**Why:** Role descriptions need deterministic inputs, procedures, outputs,
write boundaries, and review handoffs before an orchestrator can safely delegate
development and curriculum work.

**Acceptance criteria**

- [x] Define an orchestrator, independent product QA, and the required delivery
      sequence without adding runtime infrastructure.
- [x] Standardize bounded task briefs, agent status, validation evidence, and
      handoff reports.
- [x] Give every specialist an executable procedure and explicit approval
      boundary.
- [x] Define safe parallelism, shared-file ownership, stop conditions, and final
      ticket-completion gates.

### EW-018 — Replace the placeholder with an evidence lab

Delivery is sequential. Source-checked evidence may enter an explicitly
non-release development implementation so the historical reviewer can inspect
the exact rendered experience; it is not thereby approved for release.

**Acquisition**

- [ ] Select at least three exact objects across at least two of site, artifact,
      text, map, dataset, or scholarship evidence types.
- [ ] Verify identity, stable collection/catalogue locator, access, and basic
      source metadata so every selected object reaches `source-checked`.
- [ ] Keep candidates in research notes; do not pass them to implementation.

**Implementation**

- [ ] Implement the evidence lab with source-checked objects in an explicitly
      non-release development state.
- [ ] Separate observation, context, interpretation, and uncertainty.
- [ ] Revise the argument prompt to require named evidence and a limitation.
- [ ] Record rights/credit metadata for every image, scan, map, or other medium
      reproduced inside Empire Wheel. If reproduction permission is not
      verified, use only verified metadata, description, citation, and an
      external locator; do not reproduce the protected medium.

**Historical review**

- [ ] Independently review the exact rendered evidence objects, learner-facing
      claims, evidence use, interpretations, and treatment of uncertainty.
- [ ] Correct review findings and resubmit the rendered experience as needed.
- [ ] Only the independent historical reviewer may promote approved objects and
      claims to `historically-reviewed`.

**Completion**

- [ ] Confirm all required evidence objects and learner-facing historical claims
      are `historically-reviewed`.
- [ ] Pass tests, lint, build, accessibility review, visual review, and product
      QA before marking EW-018 complete or making the evidence lab release-ready.

### EW-018a — Turn the reading list into a guided reading experience

**Why:** Sending learners to an entire book-length PDF makes the scholarship
technically available but does not make the important argument readable or the
activity resilient when an external document moves.

**Depends on:** EW-018. The reading guide may introduce context, but it must not
replace the named evidence or do the evidence-lab reasoning for the learner.

**Acceptance criteria**

- [ ] For each assigned reading, identify a historically reviewed excerpt or
      chapter with exact page/section locators, a realistic reading time, and a
      short explanation of how it bears on the module's central question.
- [ ] Provide an in-app reading guide that distinguishes the author's argument,
      evidence to notice, vocabulary or context, and questions or limitations;
      every historical claim in the guide remains traceable to a checked source.
- [ ] Prefer a stable HTML chapter or bounded document link when one exists;
      when only a long PDF is available, link to the exact reading location and
      retain its full bibliographic citation and institutional landing page.
- [ ] Give every external reading a useful unavailable-link fallback containing
      the citation, assigned locator, learner task, and enough guidance to
      continue the module without implying that the source itself was read.
- [ ] Pass independent historical review, keyboard and small-viewport review,
      tests, lint, build, and representative desktop and mobile screenshot
      review.

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
