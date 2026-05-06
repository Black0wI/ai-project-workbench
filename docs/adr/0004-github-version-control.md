# ADR 0004: GitHub Version Control

Status: Accepted
Date: 2026-05-06

## Context

Projects created from this workbench need a consistent source control, collaboration, and review workflow. The repository template already includes GitHub issue, pull request, and CI scaffolding.

## Decision

GitHub is the canonical version control and collaboration platform for all projects created from this workbench.

Repository governance, branch protection, releases, and GitHub Actions should be proposed and validated by the user before being applied.

## Consequences

- GitHub is the source of truth for remote repositories.
- Pull requests are the default review mechanism.
- Issues, specs, and ADRs should be linked from PRs when relevant.
- Branch protection and required checks are expected for production projects.
- Releases and tags require explicit user validation.

## Alternatives Considered

- GitLab or Bitbucket: rejected because the operating constraint is GitHub.
- Local-only Git repositories: rejected because collaboration and version history must be centralized.
- Direct commits to `main`: rejected as a default for production projects.

## Validation

- Repository remote points to GitHub.
- PR template is used for changes.
- Required checks are configured when a concrete stack is selected.
- Branch protection is documented during project hardening.

