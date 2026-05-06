---
design_system:
  name: "Internal Admin"
  version: "1.1.0"
  status: "preset"
  format: "DESIGN.md"
  inspiration: "worldmonitor.app"
  intent: "Mission-control internal admin UI inspired by World Monitor: dark real-time dashboard, dense panels, map-first layout, terminal typography, and status-driven operations."
tokens:
  color:
    background:
      canvas: "#0A0A0A"
      surface: "#141414"
      subtle: "#1E1E1E"
      map: "#020A08"
      map_glow: "#0A2A20"
      inverse: "#E8E8E8"
    text:
      primary: "#E8E8E8"
      secondary: "#C8C8C8"
      muted: "#8A8A8A"
      faint: "#5F5F5F"
      inverse: "#0A0A0A"
    brand:
      primary: "#16A34A"
      primary_hover: "#22C55E"
      secondary: "#4ADE80"
      accent: "#9AE6B4"
    semantic:
      live: "#16A34A"
      success: "#22C55E"
      warning: "#FACC15"
      danger: "#EF4444"
      critical: "#FF3B30"
      info: "#38BDF8"
      elevated: "#F97316"
    border:
      default: "#2A2A2A"
      subtle: "#1A1A1A"
      strong: "#3A3A3A"
      focus: "#22C55E"
  typography:
    font_family:
      sans: "SF Mono, Monaco, Cascadia Code, Fira Code, DejaVu Sans Mono, Liberation Mono, ui-monospace, monospace"
      mono: "SF Mono, Monaco, Cascadia Code, Fira Code, DejaVu Sans Mono, Liberation Mono, ui-monospace, monospace"
    scale:
      xs: "10px"
      sm: "11px"
      base: "12px"
      lg: "14px"
      xl: "16px"
      "2xl": "20px"
      "3xl": "24px"
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
      5: "20px"
      6: "24px"
      8: "32px"
  radius:
    sm: "0px"
    md: "2px"
    lg: "4px"
    pill: "4px"
  shadow:
    sm: "none"
    md: "none"
    glow: "0 0 20px rgba(34, 197, 94, 0.12)"
  layout:
    content_max_width: "none"
    app_shell_min_width: "320px"
    header_height: "40px"
    map_height: "50vh"
    panel_min_width: "280px"
    panel_height: "320px"
  motion:
    duration_fast: "80ms"
    duration_base: "150ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a real-time internal command center inspired by World Monitor: high-density intelligence panels, dark operational surfaces, map-first situational awareness, compact mono typography, status dots, and fast scanning.

Use this preset for internal admin systems where operators monitor many live signals: incidents, infrastructure, risk, support operations, logistics, security events, audits, permissions, or AI agent activity.

## Product Principles

- Prioritize live situational awareness over visual polish.
- Put the global/current state first: map, timeline, critical queue, or incident board.
- Optimize for dense scanning, not storytelling.
- Use status, severity, recency, and source metadata everywhere.
- Keep layouts stable during live updates.
- Prefer compact panels over large cards.

## UX Requirements

- Header must be compact, around `layout.header_height`.
- Main screen should combine a primary live surface and a grid of panels.
- Panels need titles, counters, timestamps, refresh/error states, and source metadata.
- Critical items need severity color, text label, and clear action.
- Real-time loading states should use skeletons or shimmer without layout shift.
- Filters, regions, languages, variants, and settings should be compact controls.
- Bulk or privileged admin actions require preview and confirmation.

## AI Product Requirements

- AI synthesis panels must show source count, freshness, model/prompt version when relevant, and confidence or caveats.
- Generated operational summaries must link back to underlying items.
- AI must not auto-execute admin actions without human confirmation.
- Logs should capture AI-assisted actions while avoiding sensitive data leakage.

## Accessibility

- Dense panels remain keyboard navigable.
- Do not rely on red/green alone; pair severity colors with labels.
- Focus states use `tokens.color.border.focus`.
- Live regions should not spam screen readers; summarize updates.
- Text must remain readable at small sizes.

## Layout Rules

- Use a full-height application shell.
- Header: 40px, dark surface, thin bottom border, compact controls.
- Primary live area: map/board/timeline with dark green/black depth.
- Panels grid: auto-fill columns with minimum width around `layout.panel_min_width`.
- Panel borders are square or near-square; avoid soft marketing cards.
- Panel headers are compact and separate from body with thin borders.
- Use tabular numbers for counts, prices, latency, risk scores, and timestamps.

## Component Rules

### Header

- Left: product/module name, region selector, live status dot.
- Right: search, settings, account, upgrade/role indicator.
- Use compact pills and no oversized buttons.

### Map Or Situation Board

- Dark base with subtle green radial glow.
- Include a thin toolbar above the map.
- Use overlays for selected region, live layers, or severity legend.

### Panels

- Background: `tokens.color.background.surface`.
- Border: `tokens.color.border.default`.
- Header height around 36px.
- Body uses small text and tight spacing.
- Lists and tables use thin dividers and hover states.

### Severity

- Critical: red.
- Elevated: orange.
- Warning: yellow.
- Live/normal: green.
- Info: blue.
- Every colored indicator must include a text label.

### Admin Actions

- Destructive or privileged changes require confirmation.
- Show before/after diff for permission and configuration changes.
- Audit trails should be discoverable from the affected record.

## Design Review Checklist

- Does the first screen show live operational state?
- Are panels dense but readable?
- Are severity, source, freshness, and action visible?
- Does live loading avoid layout shift?
- Are privileged actions protected?
- Can users trace AI summaries back to source items?
