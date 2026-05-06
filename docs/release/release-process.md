# Release Process

Use this process when publishing template versions.

## Versioning

Use semantic versioning:

```text
vMAJOR.MINOR.PATCH
```

- `MAJOR`: breaking template structure or policy changes.
- `MINOR`: new templates, runbooks, checklists, or workflows.
- `PATCH`: corrections, wording, and low-risk maintenance.

## Release Checklist

- [ ] `make check` passes.
- [ ] `make skills-scan` passes.
- [ ] `CHANGELOG.md` is updated.
- [ ] New docs are linked from `README.md`.
- [ ] Breaking changes are called out.
- [ ] Tag and release are user-approved.

## Commands

```bash
git tag v0.1.0
git push origin v0.1.0
```

Create GitHub Releases only after user validation.

