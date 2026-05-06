# Design Template Selection Runbook

Use this runbook when choosing or applying a ready-made `DESIGN.md` preset.

## Rule

The root `DESIGN.md` is the active design contract. Presets in `templates/design` are inactive until explicitly applied.

## Available Presets

| Preset | Best for |
| --- | --- |
| `saas-ops.DESIGN.md` | SaaS operations, CRM, workflow tools |
| `ai-dashboard.DESIGN.md` | AI analytics, evals, agents, observability |
| `developer-tool.DESIGN.md` | API consoles, technical tools, SDK workflows |
| `public-product.DESIGN.md` | Public product and SaaS landing/product experiences |
| `internal-admin.DESIGN.md` | Dense internal admin systems |

## Selection Criteria

- User type
- Primary workflow
- Data density
- Public vs internal audience
- AI output review needs
- Brand maturity
- Accessibility and responsiveness needs

## Workflow

1. List available presets:

   ```bash
   make design-templates
   ```

2. Generate and inspect previews:

   ```bash
   make design-previews
   ```

   Open `templates/design/previews/index.html`.

3. Review the candidate preset.
4. Confirm the choice with the user when brand or major UX direction is affected.
5. Apply the preset:

   ```bash
   make apply-design DESIGN=templates/design/saas-ops.DESIGN.md
   ```

6. Update token values for the actual product brand.
7. Review with `docs/checklists/design-review.md`.

## Safety Notes

- Applying a preset backs up the current `DESIGN.md`.
- Do not apply multiple presets at once.
- Do not blindly replace project-specific accessibility, AI, or workflow rules.
