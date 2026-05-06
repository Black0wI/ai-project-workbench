# ADR 0003: Cloudflare DNS API Management

Status: Accepted
Date: 2026-05-06

## Context

Applications created from this workbench are hosted on AWS, but DNS management is standardized separately. DNS records, validation records, and routing records need to be repeatable, reviewable, and auditable.

## Decision

All project DNS management uses Cloudflare via API.

DNS changes must be proposed and validated by the user before execution. Cloudflare credentials must use least-privilege API tokens scoped to the target zone.

## Consequences

- DNS is not managed manually through provider dashboards as the default workflow.
- Specs and PRs touching domains must document records, proxy mode, TTL, and rollback.
- AWS hosting decisions remain separate from DNS ownership.
- Infrastructure automation may use Cloudflare providers or API scripts, but must not embed credentials.

## Alternatives Considered

- AWS Route 53: rejected because DNS management is standardized on Cloudflare.
- Manual Cloudflare dashboard changes: rejected as the default because they are harder to review and reproduce.
- Cloudflare hosting products by default: rejected because application hosting remains AWS-first.

## Validation

- DNS runbook is followed before changes.
- PRs document user-approved DNS changes.
- Tokens are scoped to the relevant zone.
- Rollback records are defined before execution.

