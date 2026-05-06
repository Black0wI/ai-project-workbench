# Eval Harness

This directory defines stack-agnostic eval cases for prompts, agents, and AI-assisted workflows.

The template intentionally does not ship a mandatory eval runner. Derived projects should add a runner that fits their stack while preserving the case format.

## Structure

```text
evals/
├── README.md
└── cases/
    └── *.yaml
```

## Case Format

```yaml
id: project-planner-basic
feature: project-planning
priority: high
input:
  user_request: "..."
expected:
  must_include:
    - "Assumptions"
    - "Impacted files"
failure_conditions:
  - "Proposes unvalidated infrastructure implementation"
```

## Eval Requirements

- Cover happy paths, edge cases, and known failure modes.
- Include cases for prompt injection when tools or external content are involved.
- Include regression cases before large prompt rewrites.
- Keep sensitive or customer data out of eval fixtures.

