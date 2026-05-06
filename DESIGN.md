---
design_system:
  name: "AI Project Workbench"
  version: "1.0.0"
  status: "template"
  format: "DESIGN.md"
  intent: "Agent-readable design system guidance for AI-first applications."

tokens:
  color:
    background:
      canvas: "#F7F8FA"
      surface: "#FFFFFF"
      subtle: "#EEF1F5"
      inverse: "#111827"
    text:
      primary: "#111827"
      secondary: "#4B5563"
      muted: "#6B7280"
      inverse: "#FFFFFF"
    brand:
      primary: "#2563EB"
      primary_hover: "#1D4ED8"
      secondary: "#14B8A6"
      accent: "#F59E0B"
    semantic:
      success: "#16A34A"
      warning: "#D97706"
      danger: "#DC2626"
      info: "#2563EB"
    border:
      default: "#D8DEE8"
      strong: "#AEB8C8"
      focus: "#2563EB"
  typography:
    font_family:
      sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    scale:
      xs: "12px"
      sm: "14px"
      base: "16px"
      lg: "18px"
      xl: "20px"
      "2xl": "24px"
      "3xl": "30px"
      "4xl": "36px"
    weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
    line_height:
      tight: 1.2
      normal: 1.5
      relaxed: 1.65
  spacing:
    unit: "4px"
    scale:
      1: "4px"
      2: "8px"
      3: "12px"
      4: "16px"
      5: "20px"
      6: "24px"
      8: "32px"
      10: "40px"
      12: "48px"
      16: "64px"
  radius:
    sm: "4px"
    md: "6px"
    lg: "8px"
    pill: "999px"
  shadow:
    sm: "0 1px 2px rgba(17, 24, 39, 0.06)"
    md: "0 8px 24px rgba(17, 24, 39, 0.08)"
  layout:
    content_max_width: "1200px"
    app_shell_min_width: "320px"
    sidebar_width: "280px"
  motion:
    duration_fast: "120ms"
    duration_base: "180ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

Design system contract for projects created from this template.

This file follows the DESIGN.md convention introduced by Google Stitch: structured design tokens in YAML front matter, followed by human-readable design rationale and implementation rules. It is meant to be read by humans, Codex, and other AI coding/design agents.

## Design Intent

Build clear, trustworthy, work-focused AI products. Interfaces should feel calm, precise, and operational rather than decorative. Favor clarity, state visibility, and fast decision-making.

This template does not impose a final brand identity. Derived projects should replace the token values above with their own brand system while preserving the structure.

## Product Principles

- Start with the actual user workflow, not a marketing page.
- Make the primary task visible in the first screen.
- Prefer dense, scannable operational interfaces for internal tools.
- Prefer clear state, clear errors, and recoverable actions.
- Avoid decorative UI that does not help the user decide or act.

## UX Requirements

- Every core workflow must define loading, empty, error, success, and permission states.
- User actions that mutate data must provide clear feedback.
- Destructive actions need confirmation or an undo path.
- Long-running AI tasks need progress, cancellation, and result persistence.
- AI-generated output must be reviewable before high-impact execution.

## AI Product Requirements

- Show source/context where trust matters.
- Distinguish generated content from user-authored content.
- Expose confidence, assumptions, or limitations when relevant.
- Provide retry, edit, and regenerate paths for AI outputs.
- Avoid silent automation for irreversible actions.

## Accessibility

- Keyboard navigation for primary flows.
- Visible focus states using the `tokens.color.border.focus` value or a project equivalent.
- Semantic labels for controls.
- Color contrast suitable for production use.
- No information conveyed by color alone.

## Layout Rules

- Use stable dimensions for toolbars, icon buttons, tables, boards, counters, and fixed-format controls.
- Keep page sections full-width or naturally constrained; avoid nested cards.
- Use cards only for repeated items, modals, and genuinely framed tools.
- Make data-heavy interfaces scannable with aligned columns, consistent spacing, and restrained visual weight.
- Verify responsive behavior at mobile, tablet, and desktop widths.
- Do not let dynamic text resize fixed controls or overlap neighboring content.

## Component Rules

### Buttons

- Primary buttons use the brand primary color.
- Secondary buttons use neutral surfaces and visible borders.
- Destructive buttons use semantic danger.
- Icon buttons should use a recognizable icon with an accessible label or tooltip.

### Forms

- Inputs need labels, helper/error text states, and visible focus.
- Validation errors should be specific and actionable.
- Required fields should be clear without relying only on color.

### Tables And Lists

- Tables should support realistic data density.
- Empty states should give the next useful action.
- Bulk actions require selection state and clear confirmation for destructive operations.

### AI Output Panels

- Generated content must be visually distinguishable from user input.
- Include source/context links where trust matters.
- Provide edit, retry, regenerate, or accept flows depending on impact.
- High-impact actions require human confirmation before execution.

## Frontend Implementation Defaults

When a frontend stack is selected:

- Map front matter tokens to the project token layer or theme config.
- Use the existing component system if one exists.
- Use icons for common toolbar actions.
- Keep motion subtle and purposeful.
- Do not introduce one-off colors, spacing, shadows, or radii when a token exists.

## Design Review Checklist

- Is the primary user job obvious?
- Are all expected states designed?
- Is generated AI content clearly attributable?
- Does the layout scale to realistic data?
- Is the interface accessible without a mouse?
- Does the UI fit the product domain?
- Are token changes intentional and documented?
