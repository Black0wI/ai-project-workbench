# ADR 0002: AWS-First Hosting

Status: Accepted
Date: 2026-05-06

## Context

Projects created from this workbench will be deployed on AWS. The application stack remains flexible, but deployment choices must be made within AWS services.

Different workloads may fit different AWS products:

- Lambda and API Gateway for event-driven or low-idle serverless workloads
- ECS Fargate for containerized services with predictable runtime requirements
- App Runner for simple containerized web services
- S3 and CloudFront for static frontends
- RDS, Aurora Serverless, DynamoDB, S3, SQS, EventBridge, and Redis-compatible services depending on data and workflow needs

Cost effectiveness is a primary selection criterion, but operational complexity, security, scalability, and developer experience must also be considered.

## Decision

All deployable applications created from this workbench default to AWS hosting.

The specific AWS service mix must be proposed as an option matrix and validated by the user before infrastructure implementation.

## Consequences

- Infrastructure docs and specs must include AWS service choices.
- Agents must not assume a single default platform such as Lambda or ECS Fargate.
- Cost profile must be part of every deployment recommendation.
- Infrastructure implementation waits for explicit user validation.
- Stack-specific templates can still be added as long as they target AWS.

## Alternatives Considered

- Cloud-agnostic hosting: rejected because the operating constraint is AWS.
- Single default AWS product: rejected because workloads vary too much.
- Cost-only selection: rejected because security, operations, and scalability also matter.

## Validation

- Specs include AWS deployment options when infrastructure is in scope.
- ADRs record major service selections.
- PRs touching infrastructure reference user-approved decisions.
- Production readiness checks include cost and AWS fit.

