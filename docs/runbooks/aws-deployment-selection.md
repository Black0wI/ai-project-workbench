# AWS Deployment Selection Runbook

Use this runbook before implementing infrastructure or deployment code.

## Rule

Production hosting is AWS-first. Select the AWS service mix based on workload needs and cost effectiveness, then get user validation before implementation.

## Required Inputs

- Application type: API, web app, worker, scheduler, AI agent, static site, batch job
- Expected traffic and concurrency
- Request duration and background processing needs
- State and storage requirements
- Database needs
- File upload or asset delivery needs
- Latency requirements
- Compliance or data residency needs
- Budget sensitivity
- Team operations capacity

## Common AWS Options

| Workload | Likely fit | Notes |
| --- | --- | --- |
| Static frontend | S3 + CloudFront | Very cost-effective for static assets |
| SSR frontend | Lambda, CloudFront, or ECS/App Runner | Depends on framework and runtime limits |
| Small API with variable traffic | Lambda + API Gateway | Strong pay-per-use fit |
| Long-running API or custom runtime | ECS Fargate + ALB | Better for containers and predictable services |
| Simple containerized app | App Runner | Lower ops than ECS, less flexible |
| Async jobs | SQS + Lambda or ECS workers | Depends on duration and dependencies |
| Event workflows | EventBridge + Lambda | Good for decoupled automation |
| Relational database | RDS PostgreSQL or Aurora PostgreSQL | PostgreSQL is the standard relational engine |
| Key-value / serverless data | DynamoDB | Use only for non-relational access patterns with known keys |
| Cache / queues | ElastiCache or SQS | Avoid cache unless it solves measured need |

## Proposal Format

Before coding infrastructure, propose:

| Option | AWS services | Cost profile | Operational complexity | Strengths | Risks |
| --- | --- | --- | --- | --- | --- |
| A |  |  |  |  |  |
| B |  |  |  |  |  |

Recommended option:

Reason:

User validation: Pending

## Cost-Effective Defaults

- Prefer pay-per-use for unknown or spiky workloads.
- Avoid always-on databases, containers, or caches until justified.
- Use managed services before self-managed infrastructure.
- Right-size environments separately for dev, staging, and production.
- Add budget alerts and cost tags when infrastructure is introduced.
- Revisit architecture when usage patterns become measurable.

## Do Not Proceed If

- The AWS service choice has not been validated by the user.
- Expected traffic or runtime profile is unknown and materially affects cost.
- The architecture introduces always-on cost without justification.
- Security boundaries or secret management are unclear.
