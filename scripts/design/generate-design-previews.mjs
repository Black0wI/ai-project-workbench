import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
const designDir = path.join(rootDir, "templates/design");
const previewDir = path.join(designDir, "previews");

const presets = [
  {
    slug: "saas-ops",
    file: "saas-ops.DESIGN.md",
    title: "SaaS Ops",
    subtitle: "Operations workspace for CRM, workflow, and backoffice teams.",
    nav: ["Pipeline", "Accounts", "Tasks", "Reports"],
    metrics: [
      ["Open deals", "128", "+12%"],
      ["SLA risk", "7", "-3"],
      ["AI drafts", "34", "+8"],
    ],
    columns: ["Account", "Owner", "Status", "Next action"],
    rows: [
      ["Northstar Labs", "Maya", "Review", "Approve AI summary"],
      ["Aster Finance", "Jon", "At risk", "Escalate renewal"],
      ["Helio Systems", "Sam", "Active", "Send follow-up"],
    ],
    panelTitle: "AI Recommendation",
    panelBody: "Prioritize Aster Finance. Contract activity dropped 42% and the renewal window closes in 9 days.",
  },
  {
    slug: "ai-dashboard",
    file: "ai-dashboard.DESIGN.md",
    title: "AI Dashboard",
    subtitle: "Trace, eval, quality, latency, and cost monitoring for AI systems.",
    nav: ["Overview", "Traces", "Evals", "Prompts"],
    metrics: [
      ["Eval pass rate", "94.2%", "+2.1%"],
      ["Avg latency", "1.8s", "-240ms"],
      ["Cost / 1k", "$0.42", "-8%"],
    ],
    columns: ["Trace", "Model", "Eval", "Latency"],
    rows: [
      ["triage-8841", "gpt-5.4", "Pass", "1.6s"],
      ["summary-2210", "gpt-5.4", "Warn", "2.2s"],
      ["route-1092", "gpt-5.4-mini", "Pass", "840ms"],
    ],
    panelTitle: "Trace Evidence",
    panelBody: "Prompt v12 improved grounding on support triage cases while reducing tool retries by 18%.",
  },
  {
    slug: "developer-tool",
    file: "developer-tool.DESIGN.md",
    title: "Developer Tool",
    subtitle: "Technical console for APIs, SDKs, logs, config, and generated code review.",
    nav: ["Console", "API Keys", "Logs", "Docs"],
    metrics: [
      ["Requests", "42k", "+18%"],
      ["Errors", "0.12%", "-0.04%"],
      ["Deploys", "16", "+4"],
    ],
    columns: ["Endpoint", "Method", "Status", "P95"],
    rows: [
      ["/v1/agents/run", "POST", "200", "480ms"],
      ["/v1/evals", "POST", "202", "620ms"],
      ["/v1/traces/:id", "GET", "200", "90ms"],
    ],
    panelTitle: "Generated Config",
    panelBody: "Review the proposed webhook config before applying. Secrets are masked and environment scoped.",
  },
  {
    slug: "public-product",
    file: "public-product.DESIGN.md",
    title: "Public Product",
    subtitle: "Dark premium public product experience inspired by Orizon Cyber visual codes.",
    nav: ["Expertise", "Results", "Method", "Contact"],
    variant: "public-product",
    previewTokens: {
      canvas: "#0A0E1A",
      surface: "#111827",
      subtle: "#1E293B",
      inverse: "#FFFFFF",
      primaryText: "#FFFFFF",
      secondaryText: "#CBD5E1",
      mutedText: "#94A3B8",
      brandPrimary: "#716CB1",
      brandHover: "#8B86C5",
      brandSecondary: "#C084FC",
      brandAccent: "#38BDF8",
      success: "#34D399",
      warning: "#FBBF24",
      danger: "#F87171",
      border: "rgba(51, 65, 85, 0.50)",
      borderStrong: "rgba(113, 108, 177, 0.40)",
      fontSans: "Inter, ui-sans-serif, system-ui, sans-serif",
      fontMono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
      radius: "24px",
      sidebar: "280px",
    },
    metrics: [
      ["Tasks automated", "2.4M", "+31%"],
      ["Teams onboarded", "840", "+76"],
      ["Time saved", "18h", "weekly"],
    ],
    columns: ["Workflow", "Before", "After", "Impact"],
    rows: [
      ["Lead research", "Manual", "AI-assisted", "4x faster"],
      ["Support triage", "Reactive", "Prioritized", "38% faster"],
      ["Reporting", "Weekly", "Live", "Always current"],
    ],
    panelTitle: "Product Preview",
    panelBody: "A real workflow preview appears above the fold so users can inspect the product before signing up.",
  },
  {
    slug: "internal-admin",
    file: "internal-admin.DESIGN.md",
    title: "Internal Admin",
    subtitle: "Mission-control internal admin UI inspired by World Monitor.",
    nav: ["Global", "Signals", "Assets", "Audit"],
    variant: "internal-admin",
    previewTokens: {
      canvas: "#0A0A0A",
      surface: "#141414",
      subtle: "#1E1E1E",
      inverse: "#E8E8E8",
      primaryText: "#E8E8E8",
      secondaryText: "#C8C8C8",
      mutedText: "#8A8A8A",
      brandPrimary: "#16A34A",
      brandHover: "#22C55E",
      brandSecondary: "#4ADE80",
      brandAccent: "#9AE6B4",
      success: "#22C55E",
      warning: "#FACC15",
      danger: "#EF4444",
      border: "#2A2A2A",
      borderStrong: "#3A3A3A",
      fontSans: "SF Mono, Monaco, Cascadia Code, Fira Code, ui-monospace, monospace",
      fontMono: "SF Mono, Monaco, Cascadia Code, Fira Code, ui-monospace, monospace",
      radius: "0px",
      sidebar: "280px",
    },
    metrics: [
      ["Pending reviews", "23", "-5"],
      ["Permission alerts", "4", "+1"],
      ["Audit events", "1,284", "24h"],
    ],
    columns: ["Record", "Permission", "Risk", "Action"],
    rows: [
      ["User 1842", "Billing admin", "Medium", "Review access"],
      ["Team Cortex", "Export data", "High", "Require approval"],
      ["Case 8841", "Support view", "Low", "Archive"],
    ],
    panelTitle: "Privileged Action",
    panelBody: "AI can draft the access change, but the exact diff must be confirmed before applying.",
  },
];

function extractFrontMatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error("Missing YAML front matter");
  return match[1];
}

function getValue(yaml, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = yaml.match(new RegExp(`${escaped}:\\s+"?([^"\\n]+)"?`));
  return match?.[1]?.trim();
}

function readTokens(yaml) {
  return {
    canvas: getValue(yaml, "canvas") ?? "#F7F8FA",
    surface: getValue(yaml, "surface") ?? "#FFFFFF",
    subtle: getValue(yaml, "subtle") ?? "#EEF1F5",
    inverse: getValue(yaml, "inverse") ?? "#111827",
    primaryText: getValue(yaml, "primary") ?? "#111827",
    secondaryText: getValue(yaml, "secondary") ?? "#4B5563",
    mutedText: getValue(yaml, "muted") ?? "#6B7280",
    brandPrimary: getValue(yaml, "primary_hover") ? getValue(yaml, "primary") : "#2563EB",
    brandHover: getValue(yaml, "primary_hover") ?? "#1D4ED8",
    brandSecondary: getValue(yaml, "secondary") ?? "#14B8A6",
    brandAccent: getValue(yaml, "accent") ?? "#F59E0B",
    success: getValue(yaml, "success") ?? "#16A34A",
    warning: getValue(yaml, "warning") ?? "#D97706",
    danger: getValue(yaml, "danger") ?? "#DC2626",
    border: getValue(yaml, "default") ?? "#D8DEE8",
    borderStrong: getValue(yaml, "strong") ?? "#AEB8C8",
    fontSans: getValue(yaml, "sans") ?? "Inter, ui-sans-serif, system-ui, sans-serif",
    fontMono: getValue(yaml, "mono") ?? "JetBrains Mono, ui-monospace, monospace",
    radius: getValue(yaml, "lg") ?? "8px",
    sidebar: getValue(yaml, "sidebar_width") ?? "280px",
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function previewHtml(preset, tokens) {
  if (preset.variant === "public-product") {
    return publicProductPreviewHtml(preset, tokens);
  }
  if (preset.variant === "internal-admin") {
    return internalAdminPreviewHtml(preset, tokens);
  }

  const nav = preset.nav.map((item, index) => `<a class="${index === 0 ? "active" : ""}" href="#">${escapeHtml(item)}</a>`).join("");
  const metrics = preset.metrics
    .map(([label, value, delta]) => `<section class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><em>${escapeHtml(delta)}</em></section>`)
    .join("");
  const headerCells = preset.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("");
  const rows = preset.rows
    .map((row, rowIndex) => `<tr>${row.map((cell, cellIndex) => {
      const className = cellIndex === 2 ? ` class="status status-${rowIndex}"` : "";
      return `<td${className}>${escapeHtml(cell)}</td>`;
    }).join("")}</tr>`)
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(preset.title)} DESIGN.md Preview</title>
  <style>
    :root {
      --canvas: ${tokens.canvas};
      --surface: ${tokens.surface};
      --subtle: ${tokens.subtle};
      --inverse: ${tokens.inverse};
      --text: ${tokens.primaryText};
      --text-secondary: ${tokens.secondaryText};
      --text-muted: ${tokens.mutedText};
      --primary: ${tokens.brandPrimary};
      --primary-hover: ${tokens.brandHover};
      --secondary: ${tokens.brandSecondary};
      --accent: ${tokens.brandAccent};
      --success: ${tokens.success};
      --warning: ${tokens.warning};
      --danger: ${tokens.danger};
      --border: ${tokens.border};
      --border-strong: ${tokens.borderStrong};
      --radius: ${tokens.radius};
      --sidebar: ${tokens.sidebar};
      --font-sans: ${tokens.fontSans};
      --font-mono: ${tokens.fontMono};
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--canvas);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.5;
    }
    .preview-shell {
      min-height: 100vh;
      display: grid;
      grid-template-columns: minmax(220px, var(--sidebar)) 1fr;
    }
    aside {
      background: var(--inverse);
      color: white;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .brand {
      display: flex;
      gap: 12px;
      align-items: center;
      font-weight: 700;
    }
    .brand-mark {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: var(--primary);
      display: grid;
      place-items: center;
      color: white;
      font-weight: 800;
    }
    nav {
      display: grid;
      gap: 6px;
    }
    nav a {
      color: rgba(255,255,255,.78);
      text-decoration: none;
      padding: 10px 12px;
      border-radius: 6px;
      font-size: 14px;
    }
    nav a.active {
      background: rgba(255,255,255,.12);
      color: white;
    }
    main {
      padding: 28px;
      display: grid;
      gap: 24px;
    }
    .topbar {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: flex-start;
    }
    h1 {
      margin: 0;
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.1;
      letter-spacing: 0;
    }
    .subtitle {
      margin: 8px 0 0;
      color: var(--text-secondary);
      max-width: 720px;
    }
    .actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
    button {
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 10px 14px;
      background: var(--surface);
      color: var(--text);
      font: inherit;
      font-weight: 600;
    }
    button.primary {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
    }
    .metrics {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }
    .metric, .panel, .table-wrap, .tokens {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: 0 8px 24px rgba(17,24,39,.06);
    }
    .metric {
      padding: 18px;
      display: grid;
      gap: 4px;
    }
    .metric span {
      color: var(--text-muted);
      font-size: 13px;
    }
    .metric strong {
      font-size: 30px;
      line-height: 1.1;
    }
    .metric em {
      color: var(--secondary);
      font-style: normal;
      font-size: 13px;
      font-weight: 700;
    }
    .content-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.5fr) minmax(280px, .8fr);
      gap: 18px;
      align-items: start;
    }
    .table-wrap {
      overflow: hidden;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }
    th, td {
      padding: 14px 16px;
      text-align: left;
      border-bottom: 1px solid var(--border);
      white-space: nowrap;
    }
    th {
      background: var(--subtle);
      color: var(--text-secondary);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .04em;
    }
    tr:last-child td { border-bottom: 0; }
    .status {
      font-weight: 700;
    }
    .status-0 { color: var(--primary); }
    .status-1 { color: var(--warning); }
    .status-2 { color: var(--success); }
    .panel {
      padding: 20px;
      display: grid;
      gap: 14px;
    }
    .panel h2, .tokens h2 {
      margin: 0;
      font-size: 18px;
    }
    .panel p {
      margin: 0;
      color: var(--text-secondary);
    }
    .ai-box {
      border: 1px solid var(--border);
      background: var(--subtle);
      border-radius: 8px;
      padding: 14px;
    }
    .tokens {
      padding: 18px;
    }
    .swatches {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 10px;
      margin-top: 12px;
    }
    .swatch {
      min-height: 64px;
      border-radius: 8px;
      border: 1px solid var(--border);
      display: flex;
      align-items: end;
      padding: 8px;
      font-size: 11px;
      color: white;
      font-family: var(--font-mono);
      overflow-wrap: anywhere;
    }
    .swatch.light { color: var(--text); }
    footer {
      color: var(--text-muted);
      font-size: 13px;
    }
    @media (max-width: 860px) {
      .preview-shell { grid-template-columns: 1fr; }
      aside { position: static; }
      .topbar, .content-grid { grid-template-columns: 1fr; display: grid; }
      .actions { justify-content: start; }
      .metrics, .swatches { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      table { min-width: 620px; }
      .table-wrap { overflow-x: auto; }
    }
  </style>
</head>
<body>
  <div class="preview-shell">
    <aside>
      <div class="brand"><div class="brand-mark">AI</div><span>${escapeHtml(preset.title)}</span></div>
      <nav>${nav}</nav>
    </aside>
    <main>
      <section class="topbar">
        <div>
          <h1>${escapeHtml(preset.title)}</h1>
          <p class="subtitle">${escapeHtml(preset.subtitle)}</p>
        </div>
        <div class="actions">
          <button>Export</button>
          <button class="primary">Review AI Output</button>
        </div>
      </section>
      <section class="metrics">${metrics}</section>
      <section class="content-grid">
        <div class="table-wrap">
          <table>
            <thead><tr>${headerCells}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <aside class="panel">
          <h2>${escapeHtml(preset.panelTitle)}</h2>
          <div class="ai-box">
            <p>${escapeHtml(preset.panelBody)}</p>
          </div>
          <button class="primary">Accept after review</button>
          <button>Regenerate</button>
        </aside>
      </section>
      <section class="tokens">
        <h2>Token Preview</h2>
        <div class="swatches">
          <div class="swatch light" style="background: var(--surface)">surface</div>
          <div class="swatch light" style="background: var(--subtle)">subtle</div>
          <div class="swatch" style="background: var(--inverse)">inverse</div>
          <div class="swatch" style="background: var(--primary)">primary</div>
          <div class="swatch" style="background: var(--secondary)">secondary</div>
          <div class="swatch" style="background: var(--accent)">accent</div>
          <div class="swatch" style="background: var(--success)">success</div>
          <div class="swatch" style="background: var(--danger)">danger</div>
        </div>
      </section>
      <footer>Preview generated from <code>templates/design/${escapeHtml(preset.file)}</code>. Apply with <code>make apply-design DESIGN=templates/design/${escapeHtml(preset.file)}</code>.</footer>
    </main>
  </div>
</body>
</html>`;
}

function internalAdminPreviewHtml(preset, tokens) {
  const panels = [
    ["CONFLICT FEED", "18", [["CRITICAL", "Border incident escalated", "2m"], ["ELEVATED", "Protest route changed", "9m"], ["INFO", "New source confirmed", "14m"]]],
    ["INFRASTRUCTURE", "42", [["WARNING", "Power outage cluster", "4m"], ["LIVE", "Undersea cable stable", "11m"], ["INFO", "Port delay decreasing", "21m"]]],
    ["AI BRIEF", "07", [["LIVE", "Daily synthesis ready", "now"], ["WARNING", "Low confidence item", "6m"], ["INFO", "435 sources scanned", "now"]]],
    ["PERMISSIONS", "04", [["CRITICAL", "Export role pending", "3m"], ["WARNING", "Token rotation due", "1h"], ["LIVE", "Audit trail synced", "now"]]],
    ["MARKETS", "31", [["ELEVATED", "Oil volatility spike", "12m"], ["INFO", "Crypto volume flat", "18m"], ["LIVE", "Commodities updated", "now"]]],
    ["AUDIT LOG", "128", [["LIVE", "Policy diff reviewed", "1m"], ["INFO", "User session closed", "5m"], ["WARNING", "Failed login burst", "19m"]]],
  ];
  const panelHtml = panels.map(([title, count, rows]) => `
    <section class="panel">
      <header class="panel-header"><strong>${title}</strong><span>${count}</span></header>
      <div class="panel-body">
        ${rows.map(([severity, label, time]) => `<div class="signal ${severity.toLowerCase()}"><span>${severity}</span><p>${label}</p><time>${time}</time></div>`).join("")}
        <div class="skeleton-line w85"></div>
        <div class="skeleton-line w60"></div>
      </div>
    </section>`).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(preset.title)} DESIGN.md Preview</title>
  <style>
    :root {
      --bg: ${tokens.canvas};
      --surface: ${tokens.surface};
      --subtle: ${tokens.subtle};
      --text: ${tokens.primaryText};
      --text-secondary: ${tokens.secondaryText};
      --text-muted: ${tokens.mutedText};
      --green: ${tokens.brandPrimary};
      --green-hot: ${tokens.brandHover};
      --accent: ${tokens.brandSecondary};
      --yellow: ${tokens.warning};
      --red: ${tokens.danger};
      --orange: #f97316;
      --blue: #38bdf8;
      --border: ${tokens.border};
      --border-strong: ${tokens.borderStrong};
      --font: ${tokens.fontMono};
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      height: 100vh;
      overflow: hidden;
      background: var(--bg);
      color: var(--text);
      font-family: var(--font);
      font-size: 12px;
      line-height: 1.45;
    }
    .shell {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: var(--bg);
    }
    .topbar {
      height: 40px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
    }
    .top-left, .top-right {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
    .product {
      font-weight: 700;
      color: var(--text);
      letter-spacing: .02em;
      white-space: nowrap;
    }
    .pill {
      height: 24px;
      display: inline-flex;
      align-items: center;
      padding: 0 8px;
      border: 1px solid var(--border);
      background: var(--subtle);
      color: var(--text-muted);
      border-radius: 4px;
      font-size: 10px;
      white-space: nowrap;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 16px rgba(34,197,94,.7);
      animation: pulse 1.8s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: .55; transform: scale(1.12); }
    }
    .main {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .map {
      height: 50vh;
      min-height: 240px;
      border: 1px solid var(--border);
      background: #020a08;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }
    .map-bar {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 10px;
    }
    .map-body {
      flex: 1;
      position: relative;
      overflow: hidden;
      background:
        radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10,42,32,.72) 0%, rgba(2,10,8,1) 70%),
        linear-gradient(rgba(34,197,94,.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,197,94,.07) 1px, transparent 1px);
      background-size: auto, 48px 48px, 48px 48px;
    }
    .map-body::before {
      content: "";
      position: absolute;
      inset: 10% 16%;
      border: 1px solid rgba(34,197,94,.22);
      border-radius: 50%;
      transform: rotate(-8deg);
      box-shadow: inset 0 0 60px rgba(34,197,94,.06), 0 0 60px rgba(34,197,94,.05);
    }
    .track {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green-hot);
      box-shadow: 0 0 16px rgba(34,197,94,.8);
    }
    .track.red { background: var(--red); box-shadow: 0 0 16px rgba(239,68,68,.8); }
    .track.yellow { background: var(--yellow); box-shadow: 0 0 16px rgba(250,204,21,.8); }
    .track.one { left: 32%; top: 44%; }
    .track.two { left: 61%; top: 38%; }
    .track.three { left: 48%; top: 62%; }
    .legend {
      position: absolute;
      right: 12px;
      bottom: 12px;
      display: grid;
      gap: 6px;
      padding: 10px;
      background: rgba(20,20,20,.84);
      border: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 10px;
    }
    .legend div { display: flex; align-items: center; gap: 6px; }
    .panels {
      flex: 1;
      overflow: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 4px;
      padding: 4px;
      align-content: start;
      background: var(--bg);
    }
    .panel {
      min-height: 300px;
      background: var(--surface);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
    }
    .panel-header {
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      border-bottom: 1px solid #1a1a1a;
    }
    .panel-header strong {
      font-size: 11px;
      letter-spacing: .05em;
    }
    .panel-header span {
      font-variant-numeric: tabular-nums;
      color: var(--accent);
      border: 1px solid var(--border);
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 10px;
    }
    .panel-body {
      flex: 1;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .signal {
      display: grid;
      grid-template-columns: 72px minmax(0, 1fr) 34px;
      gap: 8px;
      align-items: baseline;
      padding: 7px 8px;
      background: rgba(255,255,255,.025);
      border-left: 3px solid var(--border-strong);
    }
    .signal span {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .04em;
    }
    .signal p {
      margin: 0;
      color: var(--text-secondary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .signal time {
      color: var(--text-muted);
      font-size: 10px;
      text-align: right;
    }
    .signal.critical { border-left-color: var(--red); }
    .signal.critical span { color: var(--red); }
    .signal.warning { border-left-color: var(--yellow); }
    .signal.warning span { color: var(--yellow); }
    .signal.elevated { border-left-color: var(--orange); }
    .signal.elevated span { color: var(--orange); }
    .signal.live { border-left-color: var(--green); }
    .signal.live span { color: var(--green-hot); }
    .signal.info { border-left-color: var(--blue); }
    .signal.info span { color: var(--blue); }
    .skeleton-line {
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(90deg, rgba(255,255,255,.05) 25%, rgba(255,255,255,.10) 50%, rgba(255,255,255,.05) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .w85 { width: 85%; }
    .w60 { width: 60%; }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    footer {
      height: 28px;
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 10px;
      background: var(--surface);
    }
    code { color: var(--accent); }
    @media (max-width: 760px) {
      body { overflow: auto; height: auto; }
      .shell { min-height: 100vh; height: auto; }
      .topbar { height: auto; align-items: flex-start; gap: 8px; }
      .top-right { display: none; }
      .map { height: 360px; }
      .panels { overflow: visible; grid-template-columns: 1fr; }
      footer { height: auto; padding: 10px; text-align: center; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <header class="topbar">
      <div class="top-left">
        <strong class="product">WORLD ADMIN</strong>
        <span class="pill">GLOBAL</span>
        <span class="dot" aria-label="Live"></span>
        <span class="pill">21 LANG</span>
      </div>
      <div class="top-right">
        <span class="pill">SEARCH</span>
        <span class="pill">SETTINGS</span>
        <span class="pill">PRO</span>
      </div>
    </header>
    <main class="main">
      <section class="map">
        <div class="map-bar"><span>MAP / LIVE LAYERS</span><span>435 SOURCES · 45 LAYERS · UPDATED NOW</span></div>
        <div class="map-body">
          <span class="track one"></span>
          <span class="track red two"></span>
          <span class="track yellow three"></span>
          <div class="legend">
            <div><span class="dot"></span> live normal</div>
            <div><span class="dot" style="background:var(--yellow)"></span> elevated</div>
            <div><span class="dot" style="background:var(--red)"></span> critical</div>
          </div>
        </div>
      </section>
      <section class="panels">${panelHtml}</section>
    </main>
    <footer>Preview generated from <code>templates/design/${escapeHtml(preset.file)}</code>. Apply with <code>make apply-design DESIGN=templates/design/${escapeHtml(preset.file)}</code>.</footer>
  </div>
</body>
</html>`;
}

function publicProductPreviewHtml(preset, tokens) {
  const nav = preset.nav.map((item) => `<a href="#">${escapeHtml(item)}</a>`).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(preset.title)} DESIGN.md Preview</title>
  <style>
    :root {
      --canvas: ${tokens.canvas};
      --surface: ${tokens.surface};
      --subtle: ${tokens.subtle};
      --text: ${tokens.primaryText};
      --text-secondary: ${tokens.secondaryText};
      --text-muted: ${tokens.mutedText};
      --primary: ${tokens.brandPrimary};
      --primary-hover: ${tokens.brandHover};
      --secondary: ${tokens.brandSecondary};
      --accent: ${tokens.brandAccent};
      --success: ${tokens.success};
      --warning: ${tokens.warning};
      --danger: ${tokens.danger};
      --border: ${tokens.border};
      --border-strong: ${tokens.borderStrong};
      --radius: ${tokens.radius};
      --font-sans: ${tokens.fontSans};
      --font-mono: ${tokens.fontMono};
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--canvas);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.5;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 50% 0%, rgba(113,108,177,.18), transparent 36rem),
        linear-gradient(180deg, rgba(113,108,177,.05), transparent 26rem);
    }
    .nav {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(15, 23, 42, .80);
      backdrop-filter: blur(16px) saturate(180%);
      border-bottom: 1px solid rgba(51, 65, 85, .5);
    }
    .nav-inner {
      max-width: 1280px;
      height: 80px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      color: white;
      text-decoration: none;
    }
    .logo-mark {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      background: rgba(113,108,177,.18);
      border: 1px solid rgba(113,108,177,.3);
      color: var(--secondary);
      font-weight: 900;
    }
    .logo span span { color: var(--secondary); }
    .links {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 14px;
      border-radius: 10px;
    }
    .links a:hover {
      color: white;
      background: rgba(255,255,255,.05);
    }
    .nav-cta, .primary-cta {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-height: 44px;
      padding: 0 22px;
      border-radius: 999px;
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      text-decoration: none;
      font-size: 14px;
      font-weight: 800;
      box-shadow: 0 16px 48px rgba(113,108,177,.22);
    }
    .primary-cta:hover, .nav-cta:hover {
      background: var(--primary-hover);
      transform: translateY(-1px);
    }
    .secondary-cta {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-height: 52px;
      padding: 0 28px;
      border-radius: 999px;
      border: 1px solid rgba(100,116,139,.5);
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      background: transparent;
    }
    .secondary-cta:hover {
      border-color: rgba(113,108,177,.5);
      color: white;
    }
    .hero {
      position: relative;
      max-width: 896px;
      margin: 0 auto;
      padding: 88px 24px 80px;
      text-align: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 999px;
      background: rgba(113,108,177,.10);
      border: 1px solid rgba(113,108,177,.22);
      color: var(--primary-hover);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--primary-hover);
      box-shadow: 0 0 24px rgba(139,134,197,.8);
    }
    h1 {
      margin: 0;
      font-size: clamp(42px, 7vw, 72px);
      line-height: 1.04;
      letter-spacing: 0;
      font-weight: 800;
    }
    h1 span { color: var(--primary-hover); }
    .hero p {
      max-width: 680px;
      margin: 24px auto 0;
      color: var(--text-muted);
      font-size: 18px;
      line-height: 1.7;
    }
    .hero-actions {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 34px;
      flex-wrap: wrap;
    }
    .primary-cta { min-height: 52px; padding: 0 30px; }
    .section {
      position: relative;
      max-width: 1024px;
      margin: 0 auto;
      padding: 72px 24px;
    }
    .section-header {
      text-align: center;
      max-width: 640px;
      margin: 0 auto 44px;
    }
    h2 {
      margin: 0 0 12px;
      font-size: clamp(28px, 4vw, 38px);
      line-height: 1.15;
      letter-spacing: 0;
    }
    .section-header p {
      color: var(--text-muted);
      margin: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }
    .card {
      position: relative;
      padding: 24px;
      border-radius: 24px;
      background: rgba(15, 23, 42, .58);
      border: 1px solid rgba(51, 65, 85, .45);
      box-shadow: 0 20px 60px rgba(0,0,0,.22);
    }
    .card:hover {
      border-color: rgba(113,108,177,.38);
    }
    .icon {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      background: rgba(113,108,177,.12);
      border: 1px solid rgba(113,108,177,.24);
      color: var(--primary-hover);
      margin-bottom: 18px;
      font-weight: 900;
    }
    .card h3 {
      margin: 0 0 10px;
      font-size: 16px;
    }
    .card p {
      margin: 0;
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.65;
    }
    .result-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 24px;
      right: 24px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(139,134,197,.8), transparent);
    }
    .result-badge {
      display: inline-flex;
      padding: 5px 10px;
      border-radius: 999px;
      background: rgba(113,108,177,.10);
      border: 1px solid rgba(113,108,177,.22);
      color: var(--primary-hover);
      font-size: 11px;
      font-weight: 900;
      letter-spacing: .06em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }
    .cta-panel {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 32px;
      align-items: center;
      padding: 40px;
      border-radius: 24px;
      background: rgba(15, 23, 42, .66);
      border: 1px solid rgba(113,108,177,.22);
      overflow: hidden;
    }
    .cta-panel h2 { margin-bottom: 12px; }
    .cta-panel p {
      color: var(--text-muted);
      margin: 0;
    }
    .tokens {
      max-width: 1024px;
      margin: 0 auto;
      padding: 48px 24px 84px;
    }
    .swatches {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 12px;
    }
    .swatch {
      min-height: 72px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,.08);
      padding: 10px;
      display: flex;
      align-items: end;
      color: white;
      font-family: var(--font-mono);
      font-size: 11px;
    }
    footer {
      border-top: 1px solid rgba(51,65,85,.5);
      color: var(--text-muted);
      padding: 28px 24px;
      text-align: center;
      font-size: 13px;
    }
    code {
      color: var(--text-secondary);
      font-family: var(--font-mono);
    }
    @media (max-width: 860px) {
      .nav-inner { height: auto; padding: 16px 20px; align-items: flex-start; }
      .links { display: none; }
      .nav-cta { display: none; }
      .hero { padding-top: 64px; }
      .grid { grid-template-columns: 1fr; }
      .cta-panel { grid-template-columns: 1fr; padding: 28px; }
      .swatches { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  </style>
</head>
<body>
  <header class="nav">
    <div class="nav-inner">
      <a class="logo" href="#"><span class="logo-mark">O</span><span>Orizon<span>.sx</span></span></a>
      <nav class="links">${nav}</nav>
      <a class="nav-cta" href="#">Talk to an expert</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="badge"><span class="badge-dot"></span> Secure AI Product</div>
      <h1>Your digital trust <span>cannot wait.</span></h1>
      <p>Launch a public product experience that feels expert, resilient, and premium. The interface foregrounds proof, methodology, and human review for high-impact AI workflows.</p>
      <div class="hero-actions">
        <a class="primary-cta" href="#">Start a confidential review</a>
        <a class="secondary-cta" href="#">Explore the method</a>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>Expertise with visible proof</h2>
        <p>Use translucent cards, compact icons, and concrete outcomes to support a premium public product narrative.</p>
      </div>
      <div class="grid">
        <article class="card"><div class="icon">01</div><h3>Secure by design</h3><p>Design workflows around trust, review, consent, and operational resilience from the first screen.</p></article>
        <article class="card"><div class="icon">02</div><h3>AI-assisted delivery</h3><p>Explain how AI improves speed or quality while keeping consequential actions under human control.</p></article>
        <article class="card"><div class="icon">03</div><h3>Measurable outcomes</h3><p>Pair public claims with case metrics, result badges, and a clear path to contact or onboarding.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>Results that feel concrete</h2>
        <p>Proof cards use small uppercase badges, subtle violet lines, and concise narrative.</p>
      </div>
      <div class="grid">
        <article class="card result-card"><span class="result-badge">0 incidents</span><h3>Resilient launch</h3><p>Risk-focused onboarding reduced exposed surfaces before the first production release.</p></article>
        <article class="card result-card"><span class="result-badge">ISO ready</span><h3>Audit preparation</h3><p>Controls, evidence, and owner responsibilities were mapped into a reviewable action plan.</p></article>
        <article class="card result-card"><span class="result-badge">72h recovery</span><h3>Incident response</h3><p>Priority remediation restored critical workflows while preserving audit and learning context.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="cta-panel">
        <div>
          <div class="badge">In 2 days</div>
          <h2>Run a focused product trust audit</h2>
          <p>Review UX, AI claims, data handling, DNS, deployment, and recovery paths before public launch.</p>
        </div>
        <a class="primary-cta" href="#">Request audit</a>
      </div>
    </section>

    <section class="tokens">
      <div class="swatches">
        <div class="swatch" style="background: var(--canvas)">canvas</div>
        <div class="swatch" style="background: var(--surface)">surface</div>
        <div class="swatch" style="background: var(--primary)">primary</div>
        <div class="swatch" style="background: var(--primary-hover)">hover</div>
        <div class="swatch" style="background: var(--secondary)">secondary</div>
        <div class="swatch" style="background: var(--accent)">accent</div>
      </div>
    </section>
  </main>

  <footer>Preview generated from <code>templates/design/${escapeHtml(preset.file)}</code>. Apply with <code>make apply-design DESIGN=templates/design/${escapeHtml(preset.file)}</code>.</footer>
</body>
</html>`;
}

function indexHtml() {
  const links = presets
    .map((preset) => `<li><a href="./${preset.slug}.html">${preset.title}</a><span>${preset.subtitle}</span></li>`)
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DESIGN.md Preset Previews</title>
  <style>
    body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, sans-serif; background: #f7f8fa; color: #111827; }
    main { max-width: 920px; margin: 0 auto; padding: 48px 20px; }
    h1 { font-size: 42px; line-height: 1.1; margin: 0 0 12px; letter-spacing: 0; }
    p { color: #4b5563; font-size: 18px; margin: 0 0 28px; }
    ul { list-style: none; padding: 0; display: grid; gap: 12px; }
    li { background: white; border: 1px solid #d8dee8; border-radius: 8px; padding: 18px; display: grid; gap: 6px; }
    a { color: #2563eb; font-size: 18px; font-weight: 700; text-decoration: none; }
    span { color: #6b7280; }
    code { background: #eef1f5; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <main>
    <h1>DESIGN.md Preset Previews</h1>
    <p>Static previews for the ready-to-use design presets in <code>templates/design</code>.</p>
    <ul>${links}</ul>
  </main>
</body>
</html>`;
}

await mkdir(previewDir, { recursive: true });

for (const preset of presets) {
  const markdown = await readFile(path.join(designDir, preset.file), "utf8");
  const tokens = { ...readTokens(extractFrontMatter(markdown)), ...preset.previewTokens };
  await writeFile(path.join(previewDir, `${preset.slug}.html`), previewHtml(preset, tokens));
}

await writeFile(path.join(previewDir, "index.html"), indexHtml());
console.log(`Generated ${presets.length} design previews in ${path.relative(rootDir, previewDir)}`);
