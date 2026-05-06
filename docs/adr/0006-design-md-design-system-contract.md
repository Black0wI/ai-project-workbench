# ADR 0006: DESIGN.md Design System Contract

Status: Accepted
Date: 2026-05-06

## Context

AI coding agents often generate generic and inconsistent interfaces unless design context is explicit and versioned. Projects created from this workbench need a reusable design source of truth that is readable by humans and agents.

Google Stitch introduced the DESIGN.md convention: a Markdown design system file with structured design tokens and human-readable rationale. This fits the repository model because it can be versioned on GitHub and consumed by Codex without requiring a specific design tool.

## Decision

Use root-level `DESIGN.md` as the canonical design system contract.

The file should include YAML front matter for machine-readable tokens and Markdown sections for design intent, UX rules, components, AI product behavior, accessibility, and review expectations.

## Consequences

- UI work must read `DESIGN.md` before implementation.
- Derived projects should update tokens and rationale to match their brand.
- Design changes become reviewable in GitHub.
- Stitch can be used to generate or refine DESIGN.md, but the repository file remains the source of truth.

## Alternatives Considered

- Narrative-only design guidelines: rejected because agents need exact token values.
- Figma-only design source of truth: useful for visual design, but not enough for repository-native agent context.
- Framework-specific theme files only: rejected because the template is stack-agnostic.

## Validation

- `DESIGN.md` contains structured front matter.
- UI PRs reference design impact when relevant.
- Token changes are intentional and reviewed.
- Generated UI follows the design system instead of default framework styling.

