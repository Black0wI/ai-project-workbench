# Prompt Library

Versioned prompt artifacts live here.

Use this directory for prompts that are part of product behavior, agent workflows, evals, or repeatable internal operations. Do not store secrets, private customer data, or one-off chat transcripts here.

## Naming

```text
<domain>/<prompt-name>.md
```

Examples:

- `support/classify-ticket.md`
- `agents/project-planner.md`
- `content/summarize-document.md`

## Required Metadata

Each prompt should include:

- Name
- Owner
- Version
- Status
- Purpose
- Inputs
- Output contract
- Safety notes
- Eval coverage

Start from `templates/prompt.md`.

