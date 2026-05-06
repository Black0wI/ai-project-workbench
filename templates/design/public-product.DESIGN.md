---
design_system:
  name: "Public Product"
  version: "1.0.0"
  status: "preset"
  format: "DESIGN.md"
  intent: "Polished public-facing SaaS or product UI with a clear first-screen value proposition and usable product surface."
tokens:
  color:
    background:
      canvas: "#FAFAFB"
      surface: "#FFFFFF"
      subtle: "#F0F3F7"
      inverse: "#111827"
    text:
      primary: "#111827"
      secondary: "#4B5563"
      muted: "#6B7280"
      inverse: "#FFFFFF"
    brand:
      primary: "#1D4ED8"
      primary_hover: "#1E40AF"
      secondary: "#0F766E"
      accent: "#EA580C"
    semantic:
      success: "#15803D"
      warning: "#B45309"
      danger: "#B91C1C"
      info: "#1D4ED8"
    border:
      default: "#DDE3EC"
      strong: "#AEB8C8"
      focus: "#1D4ED8"
  typography:
    font_family:
      sans: "Inter, ui-sans-serif, system-ui, sans-serif"
      mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    scale:
      xs: "12px"
      sm: "14px"
      base: "16px"
      lg: "18px"
      xl: "22px"
      "2xl": "30px"
      "3xl": "42px"
      "4xl": "56px"
    weight:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
    line_height:
      tight: 1.1
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
      16: "64px"
      24: "96px"
  radius:
    sm: "4px"
    md: "6px"
    lg: "8px"
    pill: "999px"
  shadow:
    sm: "0 1px 2px rgba(17, 24, 39, 0.06)"
    md: "0 12px 36px rgba(17, 24, 39, 0.10)"
  layout:
    content_max_width: "1180px"
    app_shell_min_width: "320px"
    sidebar_width: "280px"
  motion:
    duration_fast: "140ms"
    duration_base: "220ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a polished public product experience that communicates value quickly while still exposing the real usable product. Avoid empty marketing-only screens.

## Product Principles

- First viewport must identify the product and primary offer.
- Show the product or real workflow early.
- Use strong copy hierarchy, not decorative clutter.
- Keep conversion paths clear.

## UX Requirements

- Primary CTA must be visible without overwhelming the page.
- Product screenshots or real states should be inspectable.
- Auth, trial, or onboarding flows need clear expectations.

## AI Product Requirements

- AI capabilities should be explained through actual user outcomes.
- Generated output examples must not imply guaranteed results.
- High-impact AI actions still require review.

## Accessibility

- Hero text must remain readable on all viewports.
- CTAs need clear labels and focus states.

## Layout Rules

- For landing pages, avoid split card hero layouts when a real product visual is available.
- Keep a hint of the next section visible below first viewport where possible.
- Use cards for feature items, testimonials, pricing tiers, or repeated content.

## Component Rules

- Navigation: minimal, clear, and responsive.
- Pricing: show limits and constraints plainly.
- Forms: reduce fields and state what happens next.

## Design Review Checklist

- Is the product identity obvious immediately?
- Is the real product visible early?
- Are claims specific and credible?
- Does the page remain usable on mobile?

