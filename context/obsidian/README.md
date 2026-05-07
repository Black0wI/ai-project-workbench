# Optional Obsidian Context

This directory provides an optional Obsidian workflow for local context management.

The real vault should live outside this public repository, for example:

```text
/Users/jbm/Documents/Obsidian/Projects/ai-project-workbench
```

Use this repository only for:

- Example vault structure
- Note templates
- Reviewed exports
- Integration scripts

## Recommended Setup

1. Create a private Obsidian vault outside the repository.
2. Copy `context/obsidian/vault.example` into that vault.
3. Copy note templates from `context/obsidian/templates` if useful.
4. Set:

   ```bash
   OBSIDIAN_VAULT_PATH=/Users/jbm/Documents/Obsidian/Projects/ai-project-workbench
   ```

5. Export only reviewed notes into `context/obsidian/exports`.

## Source Of Truth

- Obsidian is for thinking, research, meetings, and local context.
- `docs/specs`, `docs/adr`, `prompts`, `DESIGN.md`, `SPECS.md`, and `AGENTS.md` remain official.
- A note is not an accepted decision until it is promoted into an ADR, spec, or other official file.

