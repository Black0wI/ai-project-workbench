# Skill Review Checklist

Use this before committing external or generated skills.

- [ ] Source repository is trusted enough for project use.
- [ ] License is compatible with the project.
- [ ] Skill purpose is clear and useful.
- [ ] Instructions do not override repository rules in `AGENTS.md`.
- [ ] Instructions do not request secrets, tokens, private files, or hidden context.
- [ ] Instructions do not encourage unsafe shell commands.
- [ ] Instructions do not fetch or execute remote content without explicit review.
- [ ] Tool permissions are scoped and justified.
- [ ] Skill is compatible with Codex `SKILL.md` format.
- [ ] `make skills-scan` passes.
- [ ] Skill is documented in the PR.
