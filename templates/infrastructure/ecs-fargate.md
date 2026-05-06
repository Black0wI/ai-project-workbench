# ECS Fargate Template Notes

Use for containerized services that need custom runtimes, longer requests, or more predictable execution than Lambda.

## Good Fit

- Containerized APIs
- Long-running services
- Custom system dependencies
- Predictable traffic

## Watch Outs

- Always-on cost
- Load balancer cost
- Networking complexity
- Deployment rollback

## Common Services

- ECS Fargate
- ECR
- ALB
- CloudWatch Logs
- AWS Secrets Manager
- RDS PostgreSQL when relational persistence is required

## Validation Required

- User-approved AWS option matrix
- Cost profile and always-on justification
- Rollback path

