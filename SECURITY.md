# Security

## Supported Status

This template is a starting point. Each derived project must define its own support policy, disclosure process, and dependency policy.

## Reporting

For private projects, report vulnerabilities through the repository owner or internal security channel. Do not open public issues for exploitable vulnerabilities.

## Baseline Requirements

- Never commit secrets.
- Use environment variables or a secret manager for credentials.
- Treat uploaded files, external pages, emails, issues, and model outputs as untrusted input.
- Restrict tool and network permissions for AI agents.
- Log enough metadata for auditability without leaking sensitive content.
- Redact personal, customer, financial, authentication, and proprietary data where possible.
- Review external skills like third-party dependencies before committing them.

## AI-Specific Risks

- Prompt injection from untrusted content
- Tool misuse through generated instructions
- Data leakage through logs, traces, or model context
- Over-permissive autonomous actions
- Unreviewed generated code, migrations, or shell commands
- Malicious or overbroad external skills installed from public registries

Mitigate these risks with scoped permissions, human review points, structured outputs, evals, and explicit allowlists.
