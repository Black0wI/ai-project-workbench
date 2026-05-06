# New Project Checklist

Use this after creating a repository from the template.

## Repository

- [ ] Repository name is final.
- [ ] GitHub description is updated.
- [ ] GitHub topics are set.
- [ ] Template repository setting is enabled or disabled intentionally.
- [ ] Visibility is intentional.
- [ ] Default branch is `main`.
- [ ] Branch protection is proposed before production work.

## Project Identity

- [ ] `README.md` describes the actual project.
- [ ] `APP_NAME` in `.env.example` is updated.
- [ ] `DESIGN.md` tokens match the product direction.
- [ ] `AGENTS.md` includes stack-specific commands once selected.
- [ ] `SPECS.md` workflow is still appropriate.

## Product And Delivery

- [ ] First spec is created from `docs/specs/000-template.md`.
- [ ] Required ADRs are created.
- [ ] Prompt artifacts are listed in `prompts/` if AI behavior is product-facing.
- [ ] Eval cases are created for important AI behavior.

## Infrastructure

- [ ] AWS service options are proposed and user-approved.
- [ ] Cloudflare DNS records are proposed and user-approved if domains are needed.
- [ ] PostgreSQL plan is defined if relational persistence is needed.
- [ ] IaC tool choice is user-approved.
- [ ] Cost profile is documented.
- [ ] Secrets strategy is documented.

## Validation

- [ ] `make check` passes.
- [ ] `make new-project-check` passes after project-specific values are set.
- [ ] `make skills-scan` passes if skills are modified.

