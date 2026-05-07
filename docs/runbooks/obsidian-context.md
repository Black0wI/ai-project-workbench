# Obsidian Context Runbook

Use this runbook when using Obsidian as optional local context for a project.

## Rule

Obsidian is auxiliary context. The real vault stays outside the public repository.

Recommended vault path:

```text
/Users/jbm/Documents/Obsidian/Projects/ai-project-workbench
```

Set:

```bash
OBSIDIAN_VAULT_PATH=/Users/jbm/Documents/Obsidian/Projects/ai-project-workbench
```

## Source Of Truth

Official:

- `docs/specs`
- `docs/adr`
- `prompts`
- `DESIGN.md`
- `AGENTS.md`
- `SPECS.md`
- `docs/runbooks`

Auxiliary:

- Obsidian notes
- research drafts
- meeting notes
- prompt experiments
- decision drafts

## Setup

1. Create a private vault outside the repository.
2. Copy `context/obsidian/vault.example` into the vault.
3. Copy templates from `context/obsidian/templates` if useful.
4. Add `OBSIDIAN_VAULT_PATH` to local `.env`.
5. Keep private notes out of Git.

## Export Workflow

```bash
make obsidian-export
make context-check
```

Exports are written to:

```text
context/obsidian/exports/
```

Review exports before promoting content into official docs.

## Promotion Rules

- Decision note -> `docs/adr`
- Spec draft -> `docs/specs`
- Prompt draft -> `prompts`
- Research finding -> relevant spec, ADR, or runbook
- Meeting action -> GitHub issue or spec acceptance criteria

## Safety Rules

- Do not export secrets, tokens, credentials, private keys, or customer data.
- Do not treat Obsidian notes as accepted decisions.
- Convert or remove `[[wiki links]]` before publishing official docs.
- Do not automatically import every note into Codex context.

## Do Not Proceed If

- The vault is inside the public repository.
- Notes contain private or sensitive information.
- Exported content has not been reviewed.
- The promotion target is unclear.

