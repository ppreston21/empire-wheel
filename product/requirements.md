# Empire Wheel product requirements

This document defines testable product behavior. The vision explains **why**;
the backlog sequences **when**; module briefs define **what is taught**.

## 1. Product invariants

### R-001 — Historical integrity

- Every published historical claim must be traceable to a reviewed source.
- The product must never invent quotations, translations, object identifiers,
  dates, scholars, or bibliography.
- Unverified material must be visibly labeled `draft`, `candidate`, or
  `placeholder` and must not be presented as evidence.

### R-001a — Review lifecycle and release boundary

- `candidate` is a discovery state for research notes only. Candidate material
  must never enter learner-facing or release-capable content.
- `source-checked` means identity, stable locator, access, and basic metadata
  have been verified. Source-checked evidence may be rendered in an explicitly
  non-release development state so an independent historical reviewer can
  inspect the exact learner experience.
- `historically-reviewed` means the exact learner-facing claims, evidence use,
  interpretation, and presentation of uncertainty have been independently
  approved. Only historically reviewed historical content may be released.
- Historical review is a release gate, not a prerequisite for development
  implementation. Development rendering does not authorize publication or
  promotion of review state.

### R-002 — Evidence is not interpretation

Every evidence object must separately state (a) what the object or record is,
(b) what can be directly observed, (c) a source and stable locator, and (d) one
or more interpretations. Uncertainty and disagreement must remain visible.

### R-003 — Curriculum is separate from presentation

Historical prose, citations, learning objectives, and exercises live in typed
content files. React components render those objects and must not become the
canonical source of curriculum content.

### R-004 — External resources

An external resource requires a title, creator or institution, resource type,
URL, learner purpose, expected time, access status, and verification date.
Candidates with unchecked links may appear in research notes, but not in the
learner experience.

## 2. Information architecture

The hierarchy is **Wheel → Spoke → Module → Activity → Study item**. A handoff
connects adjacent spokes and is taught as history, not used as empty navigation.

### R-010 — Wheel

The wheel exposes nineteen chronological spokes, identifies the active spoke,
and communicates progress without implying that only one society mattered at a
given time.

### R-011 — Spoke

A spoke contains a central question, chronological and geographic scope,
hegemonic thesis, inheritance, handoff, ten named modules, and progress.

### R-012 — Module

A complete module is a 2–5 hour guided experience using the sequence **Orient →
Learn → Read → See/Watch → Explore → Examine → Argue → Review → Study**. A mode
may be omitted only when the module brief explains why.

## 3. Module content and experience

### R-020 — Orient and learn

The opening states a central question, 3–5 assessable objectives, period,
places, estimated time, relevance to the spoke, and a concise sourced narrative.

### R-021 — Read, watch, and see

Resources explain why they were selected and what the learner should notice.
Images include rights/credit metadata and meaningful alternative text. Video
includes creator, duration, and a non-video fallback.

### R-022 — Explore

Maps and system models distinguish known data, reconstruction, and uncertainty;
they include a legend, source note, and an explicit inquiry task.

### R-023 — Examine

A release-ready evidence lab contains at least three historically reviewed
evidence objects across more than one evidence type. Guided questions move from
observation to contextualization and then interpretation without revealing a
preferred answer first. Before release, source-checked evidence objects may be
rendered in an explicitly non-release development state for inspection by the
historical reviewer; candidate objects may not be rendered.

### R-024 — Argue and review

The learner makes a claim using named evidence and acknowledges a limitation or
counterinterpretation. Feedback evaluates historical accuracy, evidence use,
reasoning, and inference. Mock or automated feedback is labeled clearly.

### R-025 — Study

The module produces a persistent guide containing chronology, terms, people,
places, evidence, major claims, debates, and review questions.

## 4. Content objects

Typed content must support narrative sections, external resources, media,
evidence objects, maps, timelines, images, system models, exercises, and study
items. Each content object carries a review state: `draft`, `source-checked`, or
`historically-reviewed`. Source-checked objects are development-review inputs,
not publishable content; release-capable collections must fail closed unless
their historical content is historically reviewed.

## 5. Progress and mastery

- Activity completion is browser-local for v0.1 and must be described as such.
- Module completion requires the core evidence activity and argument, not merely
  scrolling or opening a page.
- Spoke and wheel progress derive from module completion.
- Completing a module means the learner can answer its objectives; completion
  and mastery are related but not synonymous.

## 6. Sumer v0.1 release gate

The release includes the named ten-module Sumer curriculum, a complete and
historically reviewed Module 1, and clearly labeled previews for Modules 2–10.
Module 1 is releasable only when:

1. every learner-facing historical claim has a source record;
2. external links and access have been checked;
3. at least three evidence objects and one visual geography activity pass
   historical review;
4. the full learning loop and study guide are present;
5. tests, lint, build, accessibility review, and a visual review pass.

## 7. Out of scope for v0.1

Authentication, payments, databases, server persistence, live AI services,
queues, microservices, social features, and full curricula for Spokes 2–19 are
out of scope unless a later requirement explicitly adds them.
