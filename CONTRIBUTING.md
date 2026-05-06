# Contributing

## Working Agreement

- Start from an issue or spec.
- Keep pull requests small and reviewable.
- Update docs when behavior or architecture changes.
- Add validation proportional to risk.
- Do not commit secrets, customer data, or generated private artifacts.

## Local Flow

```bash
make bootstrap
make check
```

Add stack-specific setup, lint, test, and build commands as the project evolves.

## Branches And Commits

- GitHub is the canonical remote for source control.
- Work from branches and open pull requests for reviewable changes.
- Keep `main` deployable.
- Use short descriptive branch names.
- Prefer focused commits.
- Reference specs, issues, or ADRs when relevant.
- Avoid force-pushing shared branches unless explicitly approved.

## Pull Request Expectations

- Link the issue or spec.
- Describe validation performed.
- Call out security, privacy, AI behavior, or migration risks.
- Keep unrelated refactors out of feature PRs.
- Confirm GitHub checks pass before merge.
