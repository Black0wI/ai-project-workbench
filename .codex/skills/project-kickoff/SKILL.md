---
name: project-kickoff
description: Turn a rough AI product idea into a scoped repository setup, initial spec, risks, and next implementation steps.
---

# Project Kickoff

Use this skill when starting a new project from this template.

## Inputs

- Product idea
- Target users
- Deployment expectations
- Preferred stack, if any
- Known integrations

## Workflow

1. Read `README.md`, `AGENTS.md`, `DESIGN.md`, and `SPECS.md`.
2. Identify assumptions and missing decisions.
3. Create or update the first spec in `docs/specs`.
4. Create ADRs for major stack or architecture decisions.
5. Update `.env.example` with required configuration.
6. Update `Makefile` and scripts with stack-specific commands.

## Output

- Impacted files
- Project assumptions
- Initial spec path
- Required ADRs
- Validation commands
- Next implementation slice

