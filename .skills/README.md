# SkillKit Manifest Area

This directory is reserved for SkillKit metadata and team skill manifests.

SkillKit is optional for this template. Do not install or sync external skills automatically from bootstrap scripts.

## Recommended Commands

```bash
npx --omit=optional skillkit init
npx --omit=optional skillkit recommend
npx --omit=optional skillkit add <trusted-source>
npx --omit=optional skillkit scan .codex/skills
npx --omit=optional skillkit manifest init
```

## Policy

- Review every external skill before committing it.
- Prefer trusted, pinned sources.
- Keep generated manifests versioned.
- Copy only approved Codex-compatible skills into `.codex/skills`.
- Remove unused skills quickly.
- Do not store secrets, customer data, or proprietary prompts here.
