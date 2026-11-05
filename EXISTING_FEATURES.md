# SHIVSASTRA // EXISTING FEATURES & SUBSYSTEM AUDIT
*Exhaustive Inventory of Functional Capabilities, Business Logic & Security Controls*

---

## 1. Public Interactive Features

### 1.1. ShivSastra AI Assistant (`src/components/ai/ShivSastraAssistant.tsx`)
- **Companion Mascot**: Wandering desktop mascot with subtle animation states; compact floating pill on mobile.
- **Context Grounding**: Gathers public-only context (`src/lib/ai/knowledge.ts`) from profile, services, projects, store, and lab.
- **Safety Interception**: Deterministic zero-LLM regex classification (`src/lib/ai/safety.ts`) intercepts prompt injection, violence, abuse, and illegal actions.
- **Sanitization Pipeline**: Blocks simulated secrets (`gsk_`, `.env`), internal prompts, script injections, and auto-converts raw markdown tables to human-friendly bullet cards.
- **Multi-lingual Adaptation**: Answers natively in clean English or natural, polite Hinglish.

### 1.2. Digital Developer Store (`src/app/store/`)
- **Canonical Catalog**: 6 curated, production-tested agent kits, n8n automation blueprints, and prompt packs.
- **Zero Free-Tier Clutter**: Purged outdated free-tier templates, portfolio kits, and boilerplate.
- **Dynamic Category Filtering**: Category pills with active tab counters and responsive pill overflow.
- **Product Monograph Pages**: In-depth feature breakdown, technical requirements, and checkout triggers.

### 1.3. E-Commerce Checkout & Fulfillment (`src/app/api/store/`)
- **Server-Authoritative Pricing**: Client-submitted prices are discarded; prices are looked up directly from `CANONICAL_STORE_PRODUCTS` / Supabase.
- **Razorpay Integration**: Server creates native Razorpay orders with INR currency tokens.
- **Cryptographic Verification**: `verify-payment` verifies HMAC SHA-256 signatures before provisioning download entitlements.
- **Secure Download Bridge**: Downloads served via `/api/store/download/[orderId]` with cryptographically signed tokens.

### 1.4. Engineering Project Showcase (`src/app/projects/`)
- **Flagship Focus**: Exactly 4 projects showcased:
  1. **JIOSI Inbox**: Autonomous Email Intelligence (Flagship).
  2. **Shivsastra Platform**: Production Digital Studio & Architecture Monograph.
  3. **Yojna Setu**: Multilingual Citizen Welfare Scheme Discovery Agent (42 passing tests).
  4. **QuickEats**: Real-time Order Orchestration Engine (71 passing tests).
- **Strict RealGuard Removal**: All references to RealGuard purged from public view.

### 1.5. Scoped Agentic Services (`src/app/services/`)
- **Transparent Packages**:
  - **Starter Agent Setup** (`AGT-01`): ₹22,000–₹35,000 (1 focused agent, WhatsApp/web, 5–8 days).
  - **Business Agent Package** (`AGT-02`): ₹55,000–₹90,000 (1–2 agents, multi-step reasoning, CRM sync, 10–15 days).
  - **Full Agentic System** (`AGT-03`): ₹1,10,000–₹1,80,000 (multi-agent system, persistent memory, monitoring, 18–25 days).
- **Client Data Sovereignty Guarantee**: "Data stays in your control • Human approval points included • No customer data stored on developer servers".

### 1.6. Personal Engineering Lab (`src/app/lab/`)
- Research notes, architectural prototypes, distributed systems experiments, and interactive sandbox write-ups.

---

## 2. Administrative Subsystems (`src/app/admin/`)

- **Supabase Authentication**: Cookie-based server sessions via `@supabase/ssr`.
- **Role & RLS Protection**: Row Level Security policies enforce read-only public access and authenticated-only write/update/delete.
- **Content Management**:
  - Projects: Create, edit, publish/draft toggle, technology tags.
  - Services: Create, edit deliverables, turnaround schedules.
  - Store: Manage products, prices, release codes, asset files.
  - Lab: Create, edit research monographs and experiment notes.
  - Inquiries: View, filter, and archive visitor contact submissions.
  - Orders: Transaction ledger with Razorpay payment verification references.

---

## 3. Bot Defense & Resilience Subsystems

- **Cloudflare Turnstile**: Zero-friction bot protection on inquiry and quote intake forms.
- **Distributed Rate Limiting**: Upstash Redis sliding-window limiter on `/api/assistant` and sensitive mutation routes, with graceful in-memory fallback.
- **Resource Exhaustion Defense**: Strict 64KB request body limits and timeout abort guards on all external API requests.

