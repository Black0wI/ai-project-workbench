---
design_system:
  name: "Developer Tool"
  version: "1.0.0"
  status: "preset"
  format: "DESIGN.md"
  intent: "Technical UI for API consoles, developer tools, SDK workflows, and configuration-heavy products."
tokens:
  color:
    background:
      canvas: "#F7F9FB"
      surface: "#FFFFFF"
      subtle: "#EEF2F6"
      inverse: "#101827"
    text:
      primary: "#101827"
      secondary: "#465568"
      muted: "#68778A"
      inverse: "#FFFFFF"
    brand:
      primary: "#3157D5"
      primary_hover: "#2947B3"
      secondary: "#0EA5A3"
      accent: "#7C3AED"
    semantic:
      success: "#138A4D"
      warning: "#B7791F"
      danger: "#C53030"
      info: "#3157D5"
    border:
      default: "#D9E1EA"
      strong: "#A7B4C4"
      focus: "#3157D5"
  typography:
    font_family:
      sans: "Inter, ui-sans-serif, system-ui, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    scale:
      xs: "12px"
      sm: "13px"
      base: "14px"
      lg: "16px"
      xl: "20px"
      "2xl": "26px"
      "3xl": "34px"
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
      6: "24px"
      8: "32px"
      12: "48px"
  radius:
    sm: "4px"
    md: "6px"
    lg: "8px"
    pill: "999px"
  shadow:
    sm: "0 1px 2px rgba(16, 24, 39, 0.06)"
    md: "0 8px 24px rgba(16, 24, 39, 0.08)"
  layout:
    content_max_width: "1320px"
    app_shell_min_width: "320px"
    sidebar_width: "300px"
  motion:
    duration_fast: "100ms"
    duration_base: "160ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a precise developer product UI. Prioritize code, configuration, diagnostics, documentation, and fast copy/test loops.

## Product Principles

- Make examples executable or copyable.
- Keep configuration state explicit.
- Surface errors with technical detail and remediation.
- Prefer split views for docs plus console workflows.

## UX Requirements

- API keys and secrets must be masked by default.
- Code samples need language tabs when relevant.
- Copy actions need immediate feedback.
- Dangerous configuration changes need confirmation.

## AI Product Requirements

- AI-generated code/config must be reviewable.
- Include assumptions, dependencies, and target runtime.
- Never silently apply credentials or deployment changes.

## Accessibility

- Code blocks need readable contrast and keyboard-copy actions.
- Focus management must work in panels and command palettes.

## Layout Rules

- Use resizable panels, side navigation, code blocks, logs, and inspectors.
- Keep technical metadata visible but compact.
- Avoid marketing-style hero layouts inside tools.

## Component Rules

- Code blocks: include copy button, filename/language, and wrapping behavior.
- Logs: support filtering and severity labels.
- Forms: support advanced fields without overwhelming the primary path.

## Design Review Checklist

- Can a developer complete the primary loop quickly?
- Are secrets protected?
- Are errors actionable?
- Are generated configs reviewable?

