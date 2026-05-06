---
name: spec-writer
description: Create or tighten feature specs with goals, non-goals, acceptance criteria, AI behavior, contracts, and rollout notes.
---

# Spec Writer

Use this skill when a feature or workflow needs a clear implementation contract.

## Workflow

1. Read `SPECS.md`.
2. Check existing specs in `docs/specs`.
3. Draft or update a spec using `docs/specs/000-template.md`.
4. Make acceptance criteria testable.
5. Add AI-specific sections for prompts, tools, evals, and safety when relevant.
6. Flag ADRs required by architectural decisions.

## Quality Bar

- Goals and non-goals are explicit.
- Requirements are testable.
- Security and privacy are addressed.
- Rollout and rollback are defined when relevant.
- The spec is concise enough to guide implementation.

