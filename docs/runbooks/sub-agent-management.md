# Sub-Agent Management Runbook

Use this runbook when work may benefit from delegation to sub-agents.

## Rule

Use sub-agents for bounded, parallelizable work. Do not use them to avoid understanding the task. The main agent remains responsible for integration, review, validation, and final delivery.

## Good Fits

- Independent codebase exploration questions
- Isolated implementation slices with disjoint file ownership
- Parallel documentation updates
- Verification work that can run while implementation continues
- Focused review of a risky area

## Poor Fits

- Ambiguous product decisions
- Work on the immediate critical path
- Tasks that require constant coordination
- Multiple agents editing the same files
- Secret handling or credentialed external operations
- Broad unscoped refactors

## Delegation Requirements

Every delegated task must include:

- Goal
- Context
- Exact scope
- File/module ownership
- Non-goals
- Expected output
- Validation expectation
- Safety constraints

For implementation workers, state clearly that they are not alone in the codebase and must not revert edits made by others.

## Ownership Rules

- Prefer disjoint file sets.
- Avoid overlapping writes unless explicitly coordinated.
- Read-only explorers can inspect broadly.
- Workers should edit only owned files unless they need to coordinate with the main agent.
- The main agent reviews and integrates all results.

## Security Rules

- Do not delegate secrets, tokens, credentials, or private customer data.
- Do not ask sub-agents to apply AWS infrastructure, Cloudflare DNS, GitHub releases, or production-impacting changes without user validation.
- External skills remain third-party dependencies and must be reviewed before use.

## Workflow

1. Decide whether delegation actually reduces risk or time.
2. Identify the immediate critical path and keep it with the main agent when needed.
3. Split side work into bounded tasks.
4. Assign ownership and expected output.
5. Continue non-overlapping local work while sub-agents run.
6. Review returned results.
7. Integrate changes.
8. Run validation.
9. Summarize what was delegated and what was accepted.

## Delegation Prompt Shape

```text
Goal:
Context:
Owned files/modules:
Non-goals:
Constraints:
Validation:
Expected final response:
```

## Do Not Proceed If

- The task is unclear enough that delegation would amplify confusion.
- Ownership cannot be defined.
- The delegated work would block the main agent immediately.
- The result cannot be reviewed safely.

