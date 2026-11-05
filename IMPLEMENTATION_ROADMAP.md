# SHIVSASTRA // IMPLEMENTATION ROADMAP & DEPENDENCY MAP
*Sequential Page-by-Page Delivery Schedule & Architectural Dependencies*

---

## 1. Page Implementation Sequence

In compliance with the Master Directive, every page follows the strict lifecycle:
`PROTOTYPE -> USER APPROVAL -> IMPLEMENTATION -> FUNCTIONAL TEST -> RESPONSIVE TEST -> LIGHTHOUSE/QA -> COMMIT`

| Stage | Sequence | Target Route(s) | Primary Deliverables | Status |
|:---:|:---:|:---|:---|:---:|
| **Phase 0** | **Step 0** | Full Architecture | 12 Project Audit Documents, Design System, Testing Baseline, Asset Inventory. | **COMPLETED** |
| **Phase 1** | **Step 1** | `/` (Homepage) | Hero *"Build. Explore. Ship in Public."*, Flagship JIOSI Inbox real software preview, 4-project grid, 3-service summary, 3 store kits, Founder bio, Dark footer. | **AWAITING APPROVAL** |
| **Phase 2** | **Step 2** | `/projects`, `/projects/[slug]` | 4 Flagship Projects (**JIOSI Inbox**, **Shivsastra**, **Yojna Setu**, **QuickEats**), Architecture Monographs, verified test metrics, RealGuard purged. | **QUEUED** |
| **Phase 3** | **Step 3** | `/services`, `/services/[slug]`, `/pricing` | 3 Scoped Agentic Packages (Starter, Business, Full), 5-step lifecycle, transparent pricing, quote form, Turnstile. | **QUEUED** |
| **Phase 4** | **Step 4** | `/store`, `/store/[slug]`, Category routes | 6 Canonical digital releases, category filters, product details, Razorpay checkout modal, HMAC verification. | **QUEUED** |
| **Phase 5** | **Step 5** | `/about`, `/resume` | Engineering philosophy (*"AI Extracts. Code Decides"*), verified timeline, academic credentials, verified social links. | **QUEUED** |
| **Phase 6** | **Step 6** | `/lab`, `/lab/[slug]` | Personal sandbox monographs, interactive code architecture prototypes, clear distinction of experimental vs production. | **QUEUED** |
| **Phase 7** | **Step 7** | `/contact`, `/privacy`, `/terms`, `/refunds`, `404` | Inquiry intake form, Turnstile bot defense, data sovereignty statements, error boundaries. | **QUEUED** |
| **Phase 8** | **Step 8** | Final Release & QA | Cross-browser verification, mobile 320px–430px audit, Lighthouse targets, production build, final verification report. | **QUEUED** |

---

## 2. Page & Component Dependency Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              ROOT LAYOUT                                    │
│  - Playfair Display + Inter/Manrope + JetBrains Mono Fonts                  │
│  - globals.css (Warm Editorial Luxury CSS Variables)                        │
│  - Header (Trishul 'S' Mark + Nav + Contact CTA)                            │
│  - Footer (Dark Charcoal Surface #1A1D20 + Legal Links + Sovereignty Text)  │
│  - MobileBottomBar (Home, Work, Store, Services, Lab - 5 Tabs)              │
│  - ShivSastraAssistant (AI Companion Mascot, Floating Pill)                 │
└──────┬───────────────────────────────────────────────────────────────┬──────┘
       │                                                               │
       ▼                                                               ▼
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│          PUBLIC PAGES                │     │         ADMIN & API LAYER            │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ 1. Homepage (/)                      │     │ 1. API: /api/assistant               │
│    ├── HeroSection (JIOSI Inbox)     │     │    ├── Groq LLM (gpt-oss-120b)       │
│    ├── FeaturedProjects (4 Projects) │     │    ├── Safety Guard (Zero-LLM regex) │
│    ├── ServicesPreview (3 Packages)  │     │    ├── Rate Limit (Upstash/Memory)   │
│    └── StorePreview (3 Toolkits)     │     │    └── Table-to-Bullet Transformer   │
│                                      │     │                                      │
│ 2. Projects Hub (/projects)          │     │ 2. API: /api/store/*                 │
│    ├── ProjectsGrid                  │     │    ├── Checkout (Authoritative price)│
│    └── [slug] (Monographs)           │     │    ├── Verify (HMAC SHA-256)         │
│                                      │     │    └── Secure Download Bridge        │
│ 3. Services Hub (/services)          │     │                                      │
│    ├── PackageCards (AGT 01-03)      │     │ 3. Admin CMS (/admin/*)              │
│    └── QuoteForm (Turnstile Guard)   │     │    ├── Supabase SSR Session Auth     │
│                                      │     │    └── PostgreSQL RLS Policies       │
│ 4. Store Hub (/store)                │     │                                      │
│    ├── StoreCatalogView              │     │ 4. Contact Action                    │
│    ├── CategoryPills                 │     │    ├── Turnstile Validation          │
│    └── [slug] (Checkout Modal)       │     │    └── Resend / Database Archival    │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```
