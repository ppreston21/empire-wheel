# Empire Wheel autonomous contributor system

These files are operational prompts for creating bounded specialist agents.
They describe repository contributors, not agents embedded in the product.
`AGENTS.md` is the controlling repository policy; these guides define how work
is delegated and handed off.

## Roles

| Role | Use when | Primary artifact | May approve |
| --- | --- | --- | --- |
| [Orchestrator](orchestrator.md) | selecting and sequencing work | task briefs and integrated result | workflow completion only |
| [Curriculum architect](curriculum-architect.md) | defining a spoke or module experience | module brief or brief revision | learning-design handoff |
| [Research curator](research-curator.md) | finding and checking historical sources | source ledger | source-checked state only |
| [Media curator](media-curator.md) | finding maps, images, video, and datasets | media ledger | metadata handoff only |
| [Historical reviewer](historical-reviewer.md) | evaluating historical publishability | historical QA report | historically-reviewed state |
| [Requirements writer](requirements-writer.md) | slicing an approved experience into work | `EW-*` tickets | acceptance-criteria readiness |
| [Implementation](implementation.md) | changing application code or typed content | code, tests, and build evidence | implementation handoff only |
| [Product QA](product-qa.md) | independently checking behavior and accessibility | product QA report | product-quality gate |

## Required delivery sequence

```text
Orchestrator
  -> Curriculum architect (when the brief is missing or incomplete)
  -> Research curator + Media curator (parallel only with separate files)
  -> Source-check handoff
  -> Requirements writer
  -> Implementation
  -> Historical reviewer (for the exact rendered learner-facing result)
  -> Product QA
  -> Orchestrator integration and completion decision
```

Source checking verifies identity, locator, access, and basic metadata; it does
not approve publication. Source-checked material may enter an explicitly
non-release development implementation for historical inspection. Only the
independent historical reviewer may promote the rendered content to
`historically-reviewed`, and that approval remains mandatory before release.

For code-only work with no historical or curriculum impact, the orchestrator may
use `Requirements writer -> Implementation -> Product QA`. It must document why
the omitted roles are not applicable. No agent may skip a product requirement
or release gate.

## Standard task brief

The orchestrator gives every agent a brief in this form:

```md
Role: <one role guide>
Objective: <one bounded outcome>
Ticket: <EW-id and acceptance criteria>
Read: <required files and approved upstream artifacts>
Write scope: <exact files or directories; no overlap with parallel agents>
Do not: <task-specific exclusions>
Validate: <commands or review checklist>
Done when: <observable conditions>
Return: use the standard handoff report
```

If an agent cannot identify the ticket, required inputs, or non-overlapping
write scope, it should return `BLOCKED` without editing.

## Standard handoff report

Every agent returns:

```md
Status: READY_FOR_REVIEW | CHANGES_REQUESTED | BLOCKED
Role: <role>
Ticket: <EW-id>
Summary:
- <completed outcome>
Files changed:
- <path>: <reason>
Acceptance evidence:
- <criterion>: <file, line, test, or review evidence>
Validation:
- <exact command/check>: PASS | FAIL | NOT_RUN — <reason>
Source decisions:
- <candidate/source-checked/historically-reviewed changes, or N/A>
Risks and unresolved items:
- <item, owner, and required next action, or None>
Recommended next role: <one role>
```

`READY_FOR_REVIEW` means the assigned role's work is complete, not that the
ticket is complete. `BLOCKED` must name the missing input or decision; agents
must not fill gaps with assumptions.

## Artifact and write-scope rules

- Unchecked research belongs in `content/research/` and never in runtime UI.
- Checked source metadata belongs in `content/sources/`.
- Typed learner content belongs under `content/spokes/` only after publication
  gates permit its state.
- Planning changes belong in `product/`; implementation decisions belong in
  `docs/architecture.md`; presentation belongs in `app/` and `components/`.
- Parallel agents must not edit the same file. The orchestrator owns shared-file
  integration and resolves conflicts after specialist handoffs.
- Review agents should not rewrite the artifact they review. They report
  findings; the producing role makes corrections and resubmits.

## Stop conditions

Stop and hand back control when:

- a requested historical statement lacks a verified source;
- rights, stable locator, or identity cannot be checked;
- acceptance criteria conflict with product requirements or architecture;
- required review is not independent;
- unrelated working-tree changes overlap the assigned scope; or
- completing the task would require unrequested infrastructure or scope.

The orchestrator can re-brief, narrow scope, or route findings to the correct
role. It must never reinterpret a blocked handoff as approval.
