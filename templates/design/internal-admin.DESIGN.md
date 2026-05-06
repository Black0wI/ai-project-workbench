---
design_system:
  name: "Internal Admin"
  version: "1.0.0"
  status: "preset"
  format: "DESIGN.md"
  intent: "High-density internal admin UI for permissions, records, operations, and support workflows."
tokens:
  color:
    background:
      canvas: "#F5F6F8"
      surface: "#FFFFFF"
      subtle: "#EDEFF3"
      inverse: "#151B26"
    text:
      primary: "#151B26"
      secondary: "#454F5F"
      muted: "#697386"
      inverse: "#FFFFFF"
    brand:
      primary: "#334EAC"
      primary_hover: "#293F8F"
      secondary: "#217C6F"
      accent: "#A45D00"
    semantic:
      success: "#237A45"
      warning: "#A45D00"
      danger: "#B42318"
      info: "#334EAC"
    border:
      default: "#D5DAE3"
      strong: "#A8B0BF"
      focus: "#334EAC"
  typography:
    font_family:
      sans: "Inter, ui-sans-serif, system-ui, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    scale:
      xs: "11px"
      sm: "12px"
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
  radius:
    sm: "4px"
    md: "6px"
    lg: "8px"
    pill: "999px"
  shadow:
    sm: "0 1px 2px rgba(21, 27, 38, 0.06)"
    md: "0 8px 22px rgba(21, 27, 38, 0.08)"
  layout:
    content_max_width: "1440px"
    app_shell_min_width: "320px"
    sidebar_width: "260px"
  motion:
    duration_fast: "80ms"
    duration_base: "140ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a practical internal admin interface for high-volume operational work. Optimize for permissions, auditability, correctness, and speed.

## Product Principles

- Prioritize data visibility and precise actions.
- Make permissions and audit trails visible.
- Reduce irreversible mistakes.
- Prefer stable layouts over expressive motion.

## UX Requirements

- Every destructive or privileged action needs confirmation.
- Audit-relevant changes need clear before/after visibility.
- Permission errors must explain what access is missing.
- Bulk actions need preview and result summaries.

## AI Product Requirements

- AI can assist, summarize, and draft, but privileged actions require confirmation.
- Generated admin changes must show exact diff before apply.
- Logs should capture AI-assisted actions without leaking sensitive data.

## Accessibility

- Dense tables remain keyboard navigable.
- Focus order follows operational flow.
- Status and permission states use text plus color.

## Layout Rules

- Use navigation, tables, drawers, modals, and audit panels.
- Keep controls close to affected data.
- Avoid decorative or marketing-oriented sections.

## Component Rules

- Tables: compact density, sticky headers where useful, column alignment.
- Drawers: use for details and audit history.
- Modals: use for confirmation, not general navigation.

## Design Review Checklist

- Are dangerous actions protected?
- Are permissions understandable?
- Can users recover from mistakes?
- Are audit details discoverable?

