---
design_system:
  name: "AI Dashboard"
  version: "1.0.0"
  status: "preset"
  format: "DESIGN.md"
  intent: "Analytical UI for AI agents, evals, traces, quality monitoring, and workflow observability."
tokens:
  color:
    background:
      canvas: "#F8FAFC"
      surface: "#FFFFFF"
      subtle: "#EEF4F8"
      inverse: "#102033"
    text:
      primary: "#102033"
      secondary: "#43566B"
      muted: "#6C7C8F"
      inverse: "#FFFFFF"
    brand:
      primary: "#0F6CBD"
      primary_hover: "#0B5799"
      secondary: "#1BA784"
      accent: "#C27803"
    semantic:
      success: "#168A4A"
      warning: "#C27803"
      danger: "#C2412D"
      info: "#0F6CBD"
    border:
      default: "#D6E0EA"
      strong: "#9FB0C3"
      focus: "#0F6CBD"
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
      "2xl": "24px"
      "3xl": "32px"
    weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
    line_height:
      tight: 1.2
      normal: 1.45
      relaxed: 1.6
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
    sm: "0 1px 2px rgba(16, 32, 51, 0.06)"
    md: "0 10px 28px rgba(16, 32, 51, 0.08)"
  layout:
    content_max_width: "1440px"
    app_shell_min_width: "320px"
    sidebar_width: "300px"
  motion:
    duration_fast: "120ms"
    duration_base: "180ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a trustworthy AI monitoring and analytics interface. Emphasize traceability, evaluation quality, source context, and operational confidence.

## Product Principles

- Make model behavior inspectable.
- Show quality, latency, cost, and failure signals together.
- Prefer evidence over decoration.
- Keep drill-down paths fast and predictable.

## UX Requirements

- Dashboards must link summary metrics to underlying traces or examples.
- Empty states should guide users to collect data or run evals.
- Error states should preserve debugging context.
- Filters and time ranges must be persistent where useful.

## AI Product Requirements

- Show prompt version, model, tools, latency, cost, and eval result when available.
- Treat generated output as inspectable evidence, not magic.
- Provide compare views for prompt/model/eval changes.

## Accessibility

- Charts need textual summaries.
- Status indicators need text labels.
- Keyboard access for trace navigation.

## Layout Rules

- Use metric strips, charts, trace tables, and detail drawers.
- Keep high-cardinality data in tables, not oversized cards.
- Avoid visual noise around critical quality signals.

## Component Rules

- Metrics: include label, value, delta, and time window.
- Traces: show input, output, tools, timing, and errors.
- Evals: show pass/fail, rubric, examples, and regression status.

## Design Review Checklist

- Can users trace a metric back to examples?
- Are model and prompt versions visible?
- Are failures actionable?
- Are cost and quality visible together?

