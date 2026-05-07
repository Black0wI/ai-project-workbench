# ADR 0008: Optional Obsidian Context

Status: Accepted
Date: 2026-05-07

## Context

Projects created from this workbench may benefit from a richer local knowledge workspace for research, meetings, exploratory notes, prompt drafts, and product context.

The repository is public and should not contain private notes, customer data, secrets, or raw personal context.

## Decision

Support Obsidian as an optional local context system.

The real Obsidian vault lives outside the repository. This repository contains only example structure, templates, reviewed exports, scripts, and governance.

Official project truth remains in versioned repository files such as specs, ADRs, prompts, `DESIGN.md`, `AGENTS.md`, and runbooks.

## Consequences

- Obsidian can be used for thinking and research without polluting the public repo.
- Context promoted from Obsidian must be reviewed and sanitized.
- Obsidian wiki links should not leak into official docs unless intentionally documented.
- Notes are not accepted decisions until promoted into an ADR, spec, or official file.

## Alternatives Considered

- Store the full vault in the repository: rejected because the repository is public.
- Ignore Obsidian entirely: rejected because local context can improve project quality.
- Make Obsidian mandatory: rejected because the workbench should remain stack- and tool-agnostic.

## Validation

- `OBSIDIAN_VAULT_PATH` points outside the repository.
- `make context-check` passes.
- Exports are reviewed before promotion.
- No secrets or private notes are committed.

