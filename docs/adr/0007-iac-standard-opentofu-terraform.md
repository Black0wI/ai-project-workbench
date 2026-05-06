# ADR 0007: OpenTofu/Terraform As Default IaC

Status: Accepted
Date: 2026-05-06

## Context

Projects created from this workbench deploy to AWS, manage DNS through Cloudflare API, and need reviewable infrastructure changes. The template remains stack-agnostic, so infrastructure tooling should be broadly applicable.

## Decision

Use OpenTofu/Terraform-compatible infrastructure as the default IaC stance for generic infrastructure.

SST may be proposed for TypeScript-heavy serverless applications when it materially improves developer experience and remains cost-effective. Any IaC choice must be proposed and validated by the user before implementation.

## Consequences

- Infrastructure changes should be reviewable in GitHub.
- AWS and Cloudflare providers can be managed consistently.
- State backend, locking, and secrets handling must be documented before production use.
- Stack-specific IaC alternatives require explicit rationale.

## Alternatives Considered

- AWS CDK: strong AWS-native option, but language/runtime-specific.
- SST: excellent for some serverless TypeScript projects, but not generic enough as the default.
- Pulumi: powerful, but introduces language-specific runtime choices.
- Manual console setup: rejected as the default because changes are not reproducible.

## Validation

- Infrastructure specs include IaC tool choice.
- User validates IaC choice before implementation.
- State, secrets, and rollback are documented.
- Cost and AWS service choices are reviewed.

