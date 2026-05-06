# Design System Management Runbook

Use this runbook before creating, changing, or importing design rules.

## Rule

`DESIGN.md` is the design source of truth for agents and humans. Keep it versioned, reviewable, and specific enough to guide implementation.

## When To Update DESIGN.md

- Brand colors, typography, spacing, radii, shadows, or motion change.
- A new reusable component pattern is introduced.
- AI output presentation rules change.
- Accessibility requirements change.
- A project imports or exports a design system from Stitch or another tool.

## Workflow

1. Read the existing `DESIGN.md`.
2. Identify whether the change affects tokens, rationale, or both.
3. Update YAML front matter for exact token values.
4. Update Markdown sections for usage rules and intent.
5. Validate that UI implementation maps tokens to the selected stack.
6. Review changes with `docs/checklists/design-review.md`.

## Importing From Stitch

If Stitch generates a DESIGN.md:

- Review token names before replacing the repository file.
- Preserve project-specific AI product, accessibility, and implementation rules.
- Do not blindly overwrite established constraints.
- Commit imported changes through a pull request.

## Proposal Format

For design system changes, propose:

| Area | Current | Proposed | Reason | Impact |
| --- | --- | --- | --- | --- |
| Color |  |  |  |  |
| Typography |  |  |  |  |
| Component |  |  |  |  |

User validation: Pending when the change affects brand or major UX direction.

## Do Not Proceed If

- The requested UI conflicts with `DESIGN.md` and no override is approved.
- Token changes are broad but the product/brand direction is unclear.
- Generated design output cannot be mapped to production components.

