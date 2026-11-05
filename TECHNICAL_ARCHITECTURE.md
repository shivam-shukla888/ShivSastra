# SHIVSASTRA // TECHNICAL ARCHITECTURE (PHASE 0)
*System Structure, Data Flows, Directory Topology & Security Boundaries*

---

## 1. Directory Topology

```
c:\Users\thesh\OneDrive\Desktop\ShivaShastra
├── .next/                         # Compiled Turbopack production build output
├── public/                        # Static assets (favicons, images, manifests)
│   ├── favicon.ico
│   ├── icon.png
│   ├── logo.png
│   └── og-image.png
├── scripts/                       # 25+ automated integration & security test suites
├── src/
│   ├── app/                       # Next.js 16 App Router
│   │   ├── (public)/              # Core public routes
│   │   │   ├── about/             # /about route
│   │   │   ├── contact/           # /contact route
│   │   │   ├── lab/               # /lab & /lab/[slug] routes
│   │   │   ├── pricing/           # /pricing route
│   │   │   ├── privacy/           # /privacy route
│   │   │   ├── products/          # /products & /products/inbox routes
│   │   │   ├── projects/          # /projects & /projects/[slug] routes
│   │   │   ├── refunds/           # /refunds route
│   │   │   ├── resume/            # /resume route
│   │   │   ├── services/          # /services & /services/[slug] routes
│   │   │   ├── store/             # /store & /store/[slug] & category routes
│   │   │   └── terms/             # /terms route
│   │   ├── admin/                 # Protected admin CMS routes
│   │   ├── api/                   # Server API route handlers
│   │   │   ├── assistant/         # Groq LLM assistant endpoint
│   │   │   ├── store/             # Checkout, payment verify, download endpoints
│   │   │   └── webhooks/          # Razorpay payment webhooks
│   │   ├── layout.tsx             # Root layout with fonts, header, footer, mascot
│   │   ├── page.tsx               # Homepage entry point
│   │   └── globals.css            # Tailwind CSS v4 tokens and theme variables
│   ├── components/                # Modular React UI components
│   │   ├── ai/                    # AI Assistant, SafeMarkdown, Mascot
│   │   ├── common/                # Shared layout components (Header, Footer, MobileBottomBar)
│   │   ├── home/                  # Homepage section components
│   │   ├── projects/              # Project cards, case study monographs
│   │   ├── store/                 # Store catalog, product cards, checkout modals
│   │   └── ui/                    # Reusable primitives (Buttons, Badges, Modals)
│   ├── data/                      # Canonical static data fallbacks (services, projects, store)
│   └── lib/                       # Core business logic and integrations
│       ├── ai/                    # Groq SDK, knowledge aggregation, safety, navigation
│       ├── payments/              # Razorpay order generation and verification
│       ├── supabase/              # Supabase client (client, server, admin)
│       ├── rate-limit.ts          # Upstash Redis & in-memory sliding window
│       └── validations/           # Zod schema definitions
├── next.config.ts                 # Next.js compiler settings and redirects
├── package.json                   # Dependencies and npm run scripts
└── tsconfig.json                  # TypeScript compiler settings
```

---

## 2. Request Lifecycle & Security Boundaries

```
[ Visitor / Client ]
        │
        ▼ (HTTPS)
[ Cloudflare Edge / Vercel Ingress ]
        │
        ├── Turnstile Bot Verification (Forms)
        └── Client IP Header Normalization
        │
        ▼
[ Next.js 16 Middleware & App Router ]
        │
        ├── Static Route Cache (SSG) ──> Prerendered HTML/RSC Payload
        │
        └── Dynamic Route / API Handler
                │
                ├── 1. Request Body Size Guard (<= 64KB)
                ├── 2. Upstash Distributed Rate Limiting (Sliding Window)
                ├── 3. Zod Strict Schema Validation
                ├── 4. Deterministic AI Safety Classification (Zero-LLM)
                ├── 5. Supabase RLS Session Check (Admin Routes)
                └── 6. Cryptographic Signature Check (Razorpay Webhooks/Verify)
```

---

## 3. Data Storage & State Architecture

1. **Database**: Supabase PostgreSQL with Row Level Security (RLS) tables:
   - `profiles`: Authoritative biographical data, links, bio.
   - `projects`: Portfolio case studies, live links, github links, tech tags.
   - `services`: Advisory packages, pricing, scopes.
   - `products`: Digital store items, release codes, asset bucket paths.
   - `lab_entries`: Research monographs and code snippets.
   - `orders`: Transaction records, payment statuses, fulfillment tokens.
   - `contact_submissions`: Archived visitor inquiries.
2. **Caching Strategy**:
   - In-memory 60-second TTL cache on `getPublicKnowledgeContext()` for AI Assistant inference efficiency.
   - Next.js 1-minute `revalidate` on dynamic catalog pages, 1-hour `revalidate` on sitemaps.

