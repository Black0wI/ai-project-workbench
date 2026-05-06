# GitHub Versioning Runbook

Use this runbook before repository setup, branch policy changes, release setup, tags, or GitHub automation.

## Rule

Version control is managed on GitHub. GitHub is the canonical remote for source code, issues, pull requests, checks, and releases.

## Repository Setup

Recommended baseline:

- Default branch: `main`
- Pull requests for reviewable changes
- GitHub Actions for checks
- Branch protection before production use
- Secret scanning enabled in GitHub settings where available
- Repository template enabled for reusable starters

## Branch Strategy

Use a simple branch strategy unless the project needs more:

| Branch | Purpose |
| --- | --- |
| `main` | Stable, deployable branch |
| `feature/<short-name>` | Feature work |
| `fix/<short-name>` | Bug fixes |
| `chore/<short-name>` | Maintenance |

Avoid long-lived environment branches until deployment needs justify them.

## Pull Request Requirements

- Link issue, spec, or ADR where relevant.
- Describe validation.
- Call out AWS, Cloudflare DNS, AI, security, or migration impact.
- Keep unrelated refactors separate.
- Wait for required checks before merge.

## Branch Protection Proposal

Before enabling branch protection, propose:

| Rule | Recommended setting | Reason |
| --- | --- | --- |
| Require pull request | Yes | Reviewable changes |
| Required checks | `make check` plus stack checks | Prevent broken merges |
| Require linear history | Optional | Simpler history |
| Require signed commits | Optional | Stronger provenance |
| Restrict force pushes | Yes | Protect shared history |

User validation: Pending

## Releases And Tags

Do not create releases or tags without user validation.

Recommended tag format once releases are needed:

```text
vMAJOR.MINOR.PATCH
```

Use release notes that summarize:

- User-facing changes
- Migration steps
- Infrastructure changes
- Rollback notes

## Do Not Proceed If

- GitHub remote is not confirmed.
- Branch protection changes are not user-approved.
- Release/tag intent is unclear.
- Required checks are failing.

