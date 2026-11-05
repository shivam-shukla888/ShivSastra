# SHIVSASTRA // CONSOLIDATED REDESIGN APPROVAL TRACKER
*One Unified Review & Sign-Off Ledger Across All Pages*

> **MASTER DIRECTIVE CONSOLIDATION**: In accordance with the Master Directive, all page prototypes across the entire website have been unified into **ONE Consolidated Design Review**. 
> Production source code modification begins systematically across all pages immediately upon the user's single consolidated approval.

---

## 1. Consolidated Prototype Register (Stitch MCP Project `14131554366220672556`)

| # | Page / Scope | Viewport | Stitch Screen ID | Status | Key Features & Invariants |
|:---:|:---|:---:|:---:|:---:|:---|
| **00** | **Brandmark** | Vector / SVG | `fea1fbd42cb64e148b7425a37dffddaa` | [x] Ready | Minimal geometric Trishul 'S' monogram in Oxblood (`#76323F`) & Tan (`#C09F80`). |
| **01** | **Homepage (`/`)** | Desktop | `2017524d6ca74abd991d89f082573f68` | [x] Ready | JIOSI Inbox hero flagship, 3 curated projects, services overview, store preview, inverted colophon. |
| **02** | **Homepage (`/`)** | Mobile | `13593cf682cf457f86a06d040a457ce7` | [x] Ready | 4-column responsive reflow, mobile sticky action bar, touch targets ≥ 48px, zero horizontal overflow. |
| **03** | **Homepage (`/`)** | Tablet | `a4f100dde7c04d1ea4eac02d0fef05fe` | [x] Ready | 8-column balanced grid, architectural telemetry annotations, touch-friendly project cards. |
| **04** | **Projects Hub (`/projects`)** | Desktop | `dc522f2f83ce4128a1dcb266150dd878` | [x] Ready | 3 client projects (JIOSI Inbox, Yojna Setu, QuickEats), filter tags, zero fake metrics or RealGuard. |
| **05** | **Flagship Case Study (`/projects/jiosi-inbox`)** | Desktop | `2c8e30b72300496586f97eab92903a58` | [x] Ready | Deep architectural breakdown, interactive triage mock, IMAP→Pydantic→vLLM ASCII flow, telemetry SLA. |
| **06** | **Services & Pricing (`/services`, `/pricing`)** | Desktop | `3c6112b4101b48d88a5d2de3005dd32b` | [x] Ready | Transparent INR packages (Starter ₹22k–35k, Business ₹55k–90k, Bespoke ₹1.2L+), scope cards, SLA. |
| **07** | **Digital Store (`/store`, `/store/[slug]`)** | Desktop | `a0aa14ae0cdc4c4d9b92f07d04c4818e` | [x] Ready | Production agent blueprints, Razorpay modal integration points, license terms, instant checkout. |
| **08** | **Engineering Lab (`/lab`, `/lab/[slug]`)** | Desktop | `d11a9498bd004db1b4f769abec616d61` | [x] Ready | Interactive research monographs, benchmark telemetry, sandbox demos, reproducible specs. |
| **09** | **About & Philosophy (`/about`, `/resume`)** | Desktop | `4bf98ba2813741658ce73e0af360f0ef` | [x] Ready | Atelier thesis, founder engineering trajectory (Shivam Shukla), tech stack matrix, verifiable credentials. |
| **10** | **Contact & Advisory (`/contact`)** | Desktop | `508b9740500544aa9dad486c1ab0dd86` | [x] Ready | Architectural intake terminal, scope selector, timeline/budget chips, 12-hr SLA, Turnstile token bar. |

---

## 2. Global Design System Tokens & Invariants

- **Atmosphere & Surfaces**: Warm Ivory Canvas (`#F5F2ED`), Elevated Card Surface (`#FAF8F5`), Inverted Colophon Ground (`#1A1D20`).
- **Typography**: Playfair Display (Editorial Headlines) + Plus Jakarta Sans (Prose & UI) + JetBrains Mono (Telemetry & Specs).
- **Inks**: Blackboard Ink (`#565656`) for reading comfort, Deep Charcoal (`#1A1D20`) for titles.
- **Accents**: Oxblood (`#76323F`) for primary CTA buttons, Tan (`#C09F80`) and Grain (`#D7CEC7`) for 1px hairline rules.
- **Geometry**: Sharp unrounded corners (`0px` / `rounded-none`).
- **Data Invariant**: Zero fabricated metrics, zero stock photographs, zero unreviewed client projects. Flagship project is JIOSI Inbox.

---

## 3. Implementation Phasing (Post-Approval Sequence)

```
[CONSOLIDATED USER APPROVAL]
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 1: Global Theme, Design Tokens, Header & Footer  │
│ - globals.css tokens, Playfair font, Trishul 'S' logo  │
│ - Shared Navbar.tsx & Footer.tsx with mobile drawer    │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 2: Homepage (`/`) Overhaul                       │
│ - Hero with JIOSI Inbox preview, 3-project grid, SLA   │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 3: Projects Hub & Detail (`/projects/[slug]`)    │
│ - 3 Client projects, authentic screenshots, schematics │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 4: Services & Store Pages                        │
│ - /services matrix, /store catalog & Razorpay modal    │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 5: About, Lab, Contact & Legal Pages             │
│ - /about, /resume, /lab, /contact, /privacy, /terms    │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ BATCH 6: Comprehensive QA, Playwright & Production Rel │
│ - 320px–1920px responsive tests, build verification    │
└────────────────────────────────────────────────────────┘
```
