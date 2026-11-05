# SHIVSASTRA // CONSOLIDATED REDESIGN APPROVAL TRACKER
*One Unified Review & Sign-Off Ledger Across All 18 Prototype Screens*

> **MASTER DIRECTIVE CONSOLIDATION**: All 18 page prototypes across the entire website have been validated and unified into **ONE Consolidated Design Review**.
> Backend preservation is treated strictly as an **engineering implementation requirement** to be demonstrated via automated regression testing upon approval.

---

## 1. Consolidated Prototype Register (Stitch MCP Project `14131554366220672556`)
*Exactly 18 Validated Screens (1 Brandmark + 10 Desktop + 1 Tablet + 6 Mobile)*

| # | Route / Scope | Viewport | Stitch Screen ID | Direct Preview Link | Architectural Invariants & Validated Scope |
|:---:|:---|:---:|:---:|:---|:---|
| **01** | **Brandmark** | Vector / SVG | `fea1fbd42cb64e148b7425a37dffddaa` | [View Brandmark](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/128a88b6f6c74b768e8daca3a7727178:download) | Minimal geometric Trishul 'S' monogram in Oxblood (`#76323F`) & Tan (`#C09F80`). |
| **02** | **Homepage (`/`)** | Desktop | `2017524d6ca74abd991d89f082573f68` | [View Desktop Home](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/a3c2f938a1f5423ba057d577e84124a2:download) | JIOSI Inbox hero showcase, 3 client projects, services overview, store preview, inverted colophon. |
| **03** | **Homepage (`/`)** | Tablet | `a4f100dde7c04d1ea4eac02d0fef05fe` | [View Tablet Home](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/d113ecbba0b0444d83fe38eccd59779f:download) | 8-column architectural layout, touch-friendly project cards, clean top navigation. |
| **04** | **Homepage (`/`)** | Mobile | `13593cf682cf457f86a06d040a457ce7` | [View Mobile Home](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/028021ace6ca4fe085b4f8bedc020b5a:download) | 4-column responsive reflow, responsive top bar, 48px touch targets, zero sticky bottom bar clutter. |
| **05** | **Projects Hub (`/projects`)** | Desktop | `dc522f2f83ce4128a1dcb266150dd878` | [View Projects Hub](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/8e57085758944363b98fbf9a81f73075:download) | Exactly 3 client projects (JIOSI Inbox, Yojna Setu, QuickEats), category filtering, zero fake metrics. |
| **06** | **Flagship Case Study (`/projects/jiosi-inbox`)** | Desktop | `2c8e30b72300496586f97eab92903a58` | [View Case Study](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/1b93cbc660d14cc6b28e12a06fddf11e:download) | Deep technical brief, IMAP→Pydantic→vLLM ASCII flow, authentic software screenshots, zero synthetic claims. |
| **07** | **Flagship Case Study (`/projects/jiosi-inbox`)** | Mobile | `b92d9c0e14344f48b8b3a38281edcf83` | [View Mobile Case Study](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/461bd5bd851b40b2ae9193682ed8932d:download) | Stacked terminal triage console, monospace pipeline diagram, mobile-optimized reading typography. |
| **08** | **Services & Pricing (`/services`, `/pricing`)** | Desktop | `3c6112b4101b48d88a5d2de3005dd32b` | [View Services Hub](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/ead0c41026e14bfe96169ed9e2b71f23:download) | Transparent INR packages (Starter ₹22k–35k, Business ₹55k–90k, Full ₹1.1L–1.8L), deliverables, scope notes. |
| **09** | **Services & Pricing (`/services`)** | Mobile | `c7525973305041c5b89ffd823d2a38f4` | [View Mobile Services](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/2b022cf6ebd24873a6882b9744fe6cb3:download) | Stacked package cards, pricing scope directive, 5-step lifecycle, responsive top header. |
| **10** | **Digital Store Catalog (`/store`)** | Desktop | `a0aa14ae0cdc4c4d9b92f07d04c4818e` | [View Store Catalog](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/17086bd204a140ef8e5cad8e0c9e8a77:download) | Production agent toolkits, category filters, perpetual license terms, code previews. |
| **11** | **Store Product Detail (`/store/[slug]`)** | Desktop | `375f66c37d2b4e9696d477bd993564b3` | [View Product Detail](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/fda486f615524b34bb488def1be42324:download) | n8n Lead Qualifier dossier, JSON node inspector, verified ₹3,499 price, instant Razorpay download wiring. |
| **12** | **Store Product Detail (`/store/[slug]`)** | Mobile | `b7a422f42b21451ea8b0a69f7536b9fb` | [View Mobile Product Detail](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/56d13aa212554550891f4735c1d979bf:download) | Mobile-stacked purchase card, ₹3,499 verified price, Docker/JSON inclusions, Razorpay flow. |
| **13** | **Engineering Lab Sandbox (`/lab`)** | Desktop | `d11a9498bd004db1b4f769abec616d61` | [View Lab Sandbox](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/6dcc55fa3c96476a88687607a75d1743:download) | Interactive research monographs, benchmark telemetry, sandbox demos, reproducible specs. |
| **14** | **Lab Monograph Detail (`/lab/[slug]`)** | Desktop | `66587184d47140ef9f17c82dd757a3e8` | [View Monograph Detail](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/f8a1ff0cebff49299fc560b7aaf1f065:download) | Dual-Phase evaluation paper, Python/Rust code block, trade-off matrix, verifiable staging harness. |
| **15** | **About Studio & Philosophy (`/about`, `/resume`)** | Desktop | `4bf98ba2813741658ce73e0af360f0ef` | [View About Studio](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/1ec94e102f6646f889f541d8e59d766b:download) | Atelier thesis, founder trajectory (Shivam Shukla), verified stack matrix, engineering credentials. |
| **16** | **Consultation & Advisory (`/contact`)** | Desktop | `508b9740500544aa9dad486c1ab0dd86` | [View Contact Page](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/5b22a38749c5403592fa9dc777b97d7e:download) | Architectural intake console, scope chips, budget tiers, Turnstile verification indicator. |
| **17** | **Consultation & Advisory (`/contact`)** | Mobile | `6836edffe5e44d3b92f3c536f55e5d82` | [View Mobile Contact Page](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/382ca1f01a334473b523bb2f3fc47a48:download) | Mobile scoping console, one-tap email copy, stacked budget chips, Turnstile badge, no bottom bar. |
| **18** | **Legal Documents (`/privacy`, `/terms`, `/refunds`)** | Desktop | `290442e350694669b60a2fc15c35f613` | [View Legal Template](https://stitch.googleapis.com/v1/projects/14131554366220672556/files/18033106f59d4adb95076a96fa1e6de1:download) | Sticky chapter navigation, data boundaries, client account isolation, Razorpay terms, zero synthetic claims. |

---

## 2. Design System Tokens & Brand Invariants

- **Atmosphere & Surfaces**: Warm Ivory Canvas (`#F5F2ED`), Elevated Card Surface (`#FAF8F5`), Inverted Colophon Ground (`#1A1D20`).
- **Typography**: Playfair Display (Editorial Headlines) + Plus Jakarta Sans (Prose & UI) + JetBrains Mono (Telemetry & Specs).
- **Inks**: Blackboard Ink (`#565656`) for reading comfort, Deep Charcoal (`#1A1D20`) for titles.
- **Accents**: Oxblood (`#76323F`) for primary CTA buttons, Tan (`#C09F80`) and Grain (`#D7CEC7`) for 1px hairline rules.
- **Geometry**: Sharp unrounded corners (`0px` / `rounded-none`).
- **Data Invariant**: Exactly 3 client projects (JIOSI Inbox, Yojna Setu, QuickEats). RealGuard permanently purged. Shivsastra presented exclusively as the studio atelier.

---

## 3. Implementation Phasing & Regression Testing Plan (Post-Approval Sequence)

```
[CONSOLIDATED USER APPROVAL]
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 1: Global Tokens, Font System, Header & Footer   │
│ • globals.css variables, Playfair Display integration  │
│ • Trishul 'S' SVG monogram, clean responsive Navbar    │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 2: Homepage (`/`) Transformation                 │
│ • JIOSI Inbox hero showcase & real UI screenshots      │
│ • 3-project showcase, services cards, store preview    │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 3: Projects Hub & Flagship Case Study            │
│ • /projects catalog with 3 projects & filter system    │
│ • /projects/jiosi-inbox with ASCII architecture flow   │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 4: Services & Store Pages                        │
│ • /services INR pricing matrix, scope cards, and SLA   │
│ • /store catalog, product cards, Razorpay modal wiring │
│ • /store/[slug] product detail & verified ₹3,499 price │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 5: About, Lab, Contact & Legal Pages             │
│ • /about, /resume, /lab, /lab/[slug] monograph         │
│ • /contact, /privacy, /terms, /refunds                 │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 6: Automated Regression Suite & Release          │
│ • Run scripts/test-store-structured-data.ts            │
│ • Run scripts/verify-rendered-jsonld.js                │
│ • Razorpay signature & webhook HMAC verification test  │
│ • Playwright 320px–1920px responsive tests             │
│ • Build verification, git push, and live verification  │
└────────────────────────────────────────────────────────┘
```
