# Skill Management Runbook

Use this runbook when adding, updating, reviewing, or removing agent skills.

## Position

SkillKit is useful for discovering, translating, scanning, and managing skills across agents. It is not a trusted execution boundary. Treat external skills like third-party dependencies that can influence agent behavior.

## Install Strategy

Use `npx` by default so the template does not force a global dependency:

```bash
npx --omit=optional skillkit --help
```

Use a global install only for active maintainers who manage skills frequently:

```bash
npm install -g skillkit --omit=optional
```

## Add A Skill

1. Find a candidate skill:

   ```bash
   npx --omit=optional skillkit recommend
   npx --omit=optional skillkit find "<topic>"
   ```

2. Inspect source repository, license, maintainers, and recent activity.
3. Install from a trusted source only:

   ```bash
   npx --omit=optional skillkit add <source>
   ```

4. Scan installed skills:

   ```bash
   make skills-scan
   ```

5. Review content manually using `docs/checklists/skill-review.md`.
6. Commit only approved files and manifest changes.

## Update Skills

```bash
npx --omit=optional skillkit check
npx --omit=optional skillkit update
make skills-scan
```

Review diffs before committing. Do not accept broad rewrites without understanding behavior changes.

## Remove Skills

```bash
npx --omit=optional skillkit remove <skill-name>
make skills-scan
```

Remove stale references from specs, runbooks, and `AGENTS.md`.

## Prohibited Defaults

- No automatic install in `scripts/bootstrap.sh`.
- No unreviewed sync to every supported agent.
- No skills that fetch remote instructions at runtime without review.
- No embedded secrets, private URLs, customer data, or proprietary prompt content.

## PR Requirements

Every PR adding or changing skills must include:

- Source URL
- License
- Reason for inclusion
- Manual review notes
- `make skills-scan` result
