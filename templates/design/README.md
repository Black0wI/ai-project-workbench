# DESIGN.md Presets

Ready-to-use `DESIGN.md` presets live here.

The root `DESIGN.md` is the active design contract. Presets are copied into the root only when selected for a derived project.

## Presets

| Preset | Best for |
| --- | --- |
| `saas-ops.DESIGN.md` | SaaS operations, CRM, backoffice, workflow tools |
| `ai-dashboard.DESIGN.md` | AI analytics, evals, agents, observability |
| `developer-tool.DESIGN.md` | API consoles, devtools, technical products |
| `public-product.DESIGN.md` | Public SaaS/product experiences |
| `internal-admin.DESIGN.md` | Dense internal admin systems |

## Usage

```bash
make design-templates
make apply-design DESIGN=templates/design/saas-ops.DESIGN.md
```

Applying a preset creates a timestamped backup of the current root `DESIGN.md`.

## Rules

- Review the preset before applying it.
- Apply only one active design contract at a time.
- Update tokens after applying to match the actual product brand.
- Validate UI changes with `docs/checklists/design-review.md`.

