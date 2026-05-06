---
design_system:
  name: "Public Product"
  version: "1.1.0"
  status: "preset"
  format: "DESIGN.md"
  inspiration: "orizon.sx/cyber.html"
  intent: "Dark, premium, trust-focused public product UI inspired by Orizon Cyber: centered hero, glass navigation, pill CTAs, dark translucent cards, and measurable proof."
tokens:
  color:
    background:
      canvas: "#0A0E1A"
      surface: "#111827"
      subtle: "#1E293B"
      inverse: "#FFFFFF"
      glass: "rgba(15, 23, 42, 0.80)"
    text:
      primary: "#FFFFFF"
      secondary: "#CBD5E1"
      muted: "#94A3B8"
      faint: "#64748B"
      inverse: "#0A0E1A"
    brand:
      primary: "#716CB1"
      primary_hover: "#8B86C5"
      secondary: "#C084FC"
      accent: "#38BDF8"
    semantic:
      success: "#34D399"
      warning: "#FBBF24"
      danger: "#F87171"
      info: "#8B86C5"
    border:
      default: "rgba(51, 65, 85, 0.50)"
      strong: "rgba(113, 108, 177, 0.40)"
      focus: "#8B86C5"
      glow: "rgba(113, 108, 177, 0.20)"
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
      "2xl": "30px"
      "3xl": "42px"
      "4xl": "60px"
    weight:
      light: 300
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
      extrabold: 800
      black: 900
    line_height:
      tight: 1.05
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
      20: "80px"
      24: "96px"
  radius:
    sm: "8px"
    md: "12px"
    lg: "16px"
    xl: "24px"
    pill: "999px"
  shadow:
    sm: "0 1px 2px rgba(0, 0, 0, 0.25)"
    md: "0 20px 60px rgba(0, 0, 0, 0.35)"
    glow: "0 16px 48px rgba(113, 108, 177, 0.22)"
  layout:
    content_max_width: "1280px"
    hero_max_width: "896px"
    section_max_width: "1024px"
    app_shell_min_width: "320px"
    sidebar_width: "280px"
  motion:
    duration_fast: "150ms"
    duration_base: "300ms"
    duration_slow: "500ms"
    easing_standard: "cubic-bezier(0.2, 0, 0, 1)"
---

# DESIGN.md

## Design Intent

Build a dark, premium, confidence-led public product experience. The visual language is inspired by Orizon Cyber: deep slate background, violet trust accent, glass navigation, centered hero, rounded pill CTAs, translucent dark cards, and measurable proof points.

Use this preset for public-facing AI, cybersecurity, consulting, infrastructure, developer, or B2B expert-service products that need credibility and conversion without looking like a generic SaaS landing page.

## Product Principles

- Lead with a clear, urgent value proposition.
- Keep the first viewport centered, confident, and uncluttered.
- Use proof sections: expertise, case results, methodology, and focused CTA.
- Show concrete product/service outcomes instead of abstract marketing claims.
- Preserve a premium dark visual system with restrained violet highlights.

## UX Requirements

- Navigation should feel glassy and persistent, with compact links and a clear CTA.
- Hero must include an eyebrow badge, a large headline, supporting copy, and two CTAs.
- Primary CTAs use rounded-pill shapes, violet fill, hover lift, and soft glow.
- Secondary CTAs use transparent surfaces, subtle borders, and clear hover state.
- Cards should be dark translucent surfaces with thin borders and violet hover accents.
- Sections should use generous vertical rhythm and centered headings.
- Forms must use dark inputs, subtle borders, visible focus, and privacy reassurance.

## AI Product Requirements

- AI claims must be tied to operational benefit, evidence, or process quality.
- Generated output examples must not imply guaranteed results.
- High-impact AI actions require review before execution.
- If AI is part of the offer, explain how it improves speed, quality, or cost without overstating autonomy.

## Accessibility

- Maintain strong contrast between white text, slate body text, and dark background.
- Do not rely on violet alone for status or meaning.
- Focus rings use `tokens.color.border.focus`.
- Hero copy must remain readable at mobile widths.
- CTA labels must describe the action clearly.

## Layout Rules

- Use a fixed or sticky top navigation with backdrop blur and a translucent slate background.
- Use centered hero content with max width around `layout.hero_max_width`.
- Use dark radial or vertical gradients sparingly to create depth.
- Use 2xl-style cards for public sections, but avoid nested cards.
- Use responsive grids: one column mobile, two columns tablet, three columns desktop.
- Keep the next section hinted below the hero when viewport height allows.

## Component Rules

### Navigation

- Transparent/dark glass bar with thin bottom border.
- Logo left, compact links center/right, primary CTA as pill.
- Dropdowns use dark glass surfaces and subtle borders.

### Hero

- Eyebrow badge: uppercase, small text, violet border/background.
- Headline: large, bold, white, with one accented phrase in violet.
- Body copy: slate-muted, max width, relaxed line height.
- CTAs: primary filled pill, secondary bordered pill.

### Cards

- Background: dark surface with 50-60% opacity feel.
- Border: slate default, violet accent on hover.
- Radius: `radius.xl`.
- Icon container: violet tinted square with thin border.

### Proof And Results

- Case cards use a small uppercase result badge.
- Add a thin violet gradient line at the top of proof cards.
- Results should be measurable and concrete.

### Process Timeline

- Use numbered circular markers.
- Connect steps with a vertical violet line that fades.
- Keep text compact and action-oriented.

### Forms

- Dark translucent inputs.
- Rounded corners around `radius.md`.
- Violet focus border and ring.
- Include privacy or confidentiality note below submit action.

## Design Review Checklist

- Does the first viewport communicate product/service value clearly?
- Does the page feel premium and trustworthy, not generic?
- Are proof points concrete and measurable?
- Are CTAs clear, visible, and not overwhelming?
- Are dark-mode contrast and focus states accessible?
- Are AI claims grounded in reviewable outcomes?
