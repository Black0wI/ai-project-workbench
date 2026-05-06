---
design_system:
  name: "SaaS Ops"
  version: "1.0.0"
  status: "preset"
  format: "DESIGN.md"
  intent: "Dense, calm, operational UI for SaaS workflows, CRM, backoffice, and admin products."
tokens:
  color:
    background:
      canvas: "#F6F7F9"
      surface: "#FFFFFF"
      subtle: "#ECEFF3"
      inverse: "#172033"
    text:
      primary: "#172033"
      secondary: "#4C5565"
      muted: "#707A8C"
      inverse: "#FFFFFF"
    brand:
      primary: "#2454D6"
      primary_hover: "#1E45B5"
      secondary: "#0F9F8E"
      accent: "#E39A18"
    semantic:
      success: "#168A4A"
      warning: "#B56A00"
      danger: "#C8362B"
      info: "#2454D6"
    border:
      default: "#D7DDE7"
      strong: "#AEB8C8"
      focus: "#2454D6"
  typography:
    font_family:
      sans: "Inter, ui-sans-serif, system-ui, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    scale:
      xs: "12px"
      sm: "13px"
      base: "14px"
      lg: "16px"
      xl: "18px"
      "2xl": "22px"
      "3xl": "28px"
    weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
    line_height:
      tight: 1.25
      normal: 1.45
      relaxed: 1.6
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
  radius:
    sm: "4px"
    md: "6px"
    lg: "8px"
    pill: "999px"
  shadow:
    sm: "0 1px 2px rgba(23, 32, 51, 0.06)"
    md: "0 8px 24px rgba(23, 32, 51, 0.08)"
  layout:
    content_max_width: "1280px"
    app_shell_min_width: "320px"
    sidebar_width: "272px"
  motion:
    duration_fast: "100ms"
    duration_base: "160ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a quiet, efficient SaaS operations interface. Prioritize scanning, comparison, repeated actions, and clear status over expressive brand moments.

## Product Principles

- Put the core workflow on the first screen.
- Optimize for repeat use by trained users.
- Prefer compact controls and clear hierarchy.
- Make status, ownership, and next action obvious.
- Avoid oversized hero layouts and decorative panels.

## UX Requirements

- Tables, filters, search, bulk actions, and saved views must feel first-class.
- Mutating actions need clear success/error feedback.
- Destructive actions need confirmation or undo.
- Long-running AI actions need progress and persisted results.

## AI Product Requirements

- AI recommendations must include source/context when decisions matter.
- Let users accept, edit, reject, or regenerate generated output.
- Never execute irreversible workflow actions without confirmation.

## Accessibility

- Keyboard navigation for table rows, filters, and actions.
- Visible focus rings.
- Sufficient contrast on status badges.

## Layout Rules

- Use dense but breathable spacing.
- Prefer sidebars, split panes, tables, and inspector panels.
- Keep cards for repeated entities and modals.
- Avoid nested cards.

## Component Rules

- Buttons: primary for main workflow action only.
- Tables: support sorting, filtering, pagination, empty states, and bulk selection where relevant.
- Forms: inline validation and clear save/cancel states.
- Status: use label + color, never color alone.

## Design Review Checklist

- Is the main operational task immediately visible?
- Can users scan many records quickly?
- Are AI suggestions reviewable before execution?
- Are filters, empty states, and errors handled?

