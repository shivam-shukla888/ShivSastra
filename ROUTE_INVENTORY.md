# SHIVSASTRA // ROUTE INVENTORY (42 ROUTES)
*Comprehensive Architectural Mapping of All Pages, Layouts, API Handlers & Middlewares*

---

## 1. Public Facing Routes (25 Routes)

| Route Path | Type | Purpose & Description | Primary Components | Data Dependencies |
|:---|:---:|:---|:---|:---|
| `/` | Static (SSG) | Studio Homepage: Hero *"Build. Explore. Ship in Public."*, Flagship JIOSI Inbox Preview, Projects Grid, Services Summary, Store Highlights, Founder Bio. | `HeroSection`, `FeaturedProjects`, `ServicesPreview`, `StorePreview`, `AboutSummary` | Supabase / Static fallback data |
| `/about` | Static (SSG) | Engineering Philosophy (*"AI Extracts. Code Decides"*), Founder Journey, Experience, Tech Stack. | `AboutView`, `TimelineView`, `ExperienceGrid` | `getProfileSettings()` |
| `/products` | Static (SSG) | Digital Products Hub: Direct directory of software products and platforms. | `ProductsCatalog`, `ProductCard` | `getPublishedStoreProducts()` |
| `/products/inbox` | Static (SSG) | Flagship Product Showcase for JIOSI Inbox: Real screenshots, technical architecture, feature breakdown. | `InboxHero`, `InboxFeatureGrid`, `InboxSpecs` | Static product monograph |
| `/projects` | Static (SSG) | Studio Project Portfolio: The 4 flagship projects (**JIOSI Inbox**, **Shivsastra**, **Yojna Setu**, **QuickEats**). | `ProjectsGrid`, `ProjectCard`, `FilterPills` | `getPublishedProjects()` |
| `/projects/[slug]` | SSG (Dynamic) | Detailed case study monographs for individual projects with architecture breakdowns and metrics. | `ProjectMonograph`, `ArchitectureDiagram`, `TechBadges` | `getPublishedProjects()`, `getProjectBySlug()` |
| `/services` | Static (SSG) | Agentic AI Services Directory: Starter (₹22k–₹35k), Business (₹55k–₹90k), Full (₹1.1L–₹1.8L) + Quote Form. | `ServicesCatalog`, `PackageCard`, `QuoteForm`, `ProcessLifecycle` | `getPublishedServices()` |
| `/services/[slug]` | SSG (Dynamic) | Scoped advisory services and targeted implementation specifications. | `ServiceDetailView`, `ScopeDeliverables` | `getServiceBySlug()` |
| `/pricing` | Static (SSG) | Transparent pricing matrix, comparison breakdowns, deliverables, turnaround schedules. | `PricingTable`, `ComparisonGrid`, `FaqAccordion` | `SERVICE_PACKAGES` |
| `/store` | Static (SSG) | Digital Developer Store: Agent Kits, n8n Templates, Prompt Packs with category filtering. | `StoreCatalogView`, `ProductCard`, `CartDrawer` | `getPublishedStoreProducts()` |
| `/store/[slug]` | SSG (Dynamic) | Product detail page with feature breakdown, technical requirements, instant checkout trigger. | `ProductDetailView`, `CheckoutModal`, `FeatureList` | `getProductBySlug()` |
| `/store/agent-templates` | Static (SSG) | Filtered store category: Production n8n workflows for lead qualification and follow-up. | `StoreCatalogView` (Filtered) | `getPublishedStoreProducts()` |
| `/store/agent-kits` | Static (SSG) | Filtered store category: Full-stack agent licenses with messaging integrations. | `StoreCatalogView` (Filtered) | `getPublishedStoreProducts()` |
| `/store/prompt-packs` | Static (SSG) | Filtered store category: Battle-tested system instructions, guardrails, JSON schemas. | `StoreCatalogView` (Filtered) | `getPublishedStoreProducts()` |
| `/store/ai-agents` | Static (SSG) | Category alias route for agent implementations. | `StoreCatalogView` (Filtered) | `getPublishedStoreProducts()` |
| `/store/design` | Static (SSG) | Category alias route for design assets and systems. | `StoreCatalogView` (Filtered) | `getPublishedStoreProducts()` |
| `/store/digital-products` | Static (SSG) | Category alias route for all digital toolkits. | `StoreCatalogView` (Filtered) | `getPublishedStoreProducts()` |
| `/lab` | Static (SSG) | Engineering Sandbox & Research Notes: Technical explorations, algorithmic prototypes. | `LabGrid`, `LabCard`, `CategoryFilters` | `getPublishedLabEntries()` |
| `/lab/[slug]` | SSG (Dynamic) | In-depth engineering write-up and interactive code prototype. | `LabMonograph`, `CodeViewer` | `getLabEntryBySlug()` |
| `/contact` | Static (SSG) | Direct studio inquiry intake form with Turnstile bot protection and direct contact channels. | `ContactForm`, `SocialLinks`, `TurnstileWidget` | Server Action `submitContactForm()` |
| `/resume` | Static (SSG) | Web resume displaying verified credentials, academic qualifications, and engineering impact. | `ResumeView`, `SkillsGrid`, `Timeline` | Static profile dataset |
| `/privacy` | Static (SSG) | Studio Privacy Policy: Client data sovereignty, zero-leakage guarantee. | `LegalDocumentView` | Static legal text |
| `/privacy-policy` | Redirect (308) | Permanent redirect canonicalizing to `/privacy`. | `next.config.ts` redirect | None |
| `/terms` | Static (SSG) | Commercial terms of service for software sales and advisory contracts. | `LegalDocumentView` | Static legal text |
| `/refunds` | Static (SSG) | Digital product refund terms and replacement policy. | `LegalDocumentView` | Static legal text |

---

## 2. Admin & Content Management Routes (11 Routes)

| Route Path | Type | Purpose & Access Control | Data Source / Action |
|:---|:---:|:---|:---|
| `/admin` | Dynamic (SSR) | Admin dashboard home displaying store order summaries, inquiries, and recent activity. | Supabase SSR (Auth Session Guard) |
| `/admin/login` | Dynamic (SSR) | Administrative login with email/password authentication via Supabase Auth. | `signInWithPassword()` |
| `/admin/contact` | Dynamic (SSR) | Inquiry intake management: view, filter, and archive visitor contact submissions. | `getContactSubmissions()` |
| `/admin/orders` | Dynamic (SSR) | Store order ledger: view transactions, payment IDs, customer emails, fulfillment statuses. | `getStoreOrders()` |
| `/admin/profile` | Dynamic (SSR) | Studio profile configuration: manage biography, social links, resume information. | `updateProfileSettings()` |
| `/admin/projects` | Dynamic (SSR) | Project management: list all drafts and published portfolio case studies. | `getAllProjects()` |
| `/admin/projects/new` | Dynamic (SSR) | Create new project case study with tech stack tags, live URLs, and hero screenshots. | `createProject()` |
| `/admin/projects/[id]/edit` | Dynamic (SSR) | Edit existing project details, publishing status, and architecture write-ups. | `updateProject()` |
| `/admin/services` | Dynamic (SSR) | Manage advisory service listings and custom package descriptions. | `getAllServices()` |
| `/admin/services/new` | Dynamic (SSR) | Create a new advisory service offering. | `createService()` |
| `/admin/services/[id]/edit` | Dynamic (SSR) | Edit service offerings, deliverables, and turnaround schedules. | `updateService()` |
| `/admin/store` | Dynamic (SSR) | Manage store releases, digital downloads, prices, and stock statuses. | `getAllProducts()` |
| `/admin/store/new` | Dynamic (SSR) | Create new store product with file upload and release code. | `createProduct()` |
| `/admin/store/[id]/edit` | Dynamic (SSR) | Edit digital store products, pricing notes, and features. | `updateProduct()` |
| `/admin/lab` | Dynamic (SSR) | Manage engineering lab entries and technical notes. | `getAllLabEntries()` |
| `/admin/lab/new` | Dynamic (SSR) | Create new research note or experimental sandbox entry. | `createLabEntry()` |
| `/admin/lab/[id]/edit` | Dynamic (SSR) | Edit lab exploration write-ups, tags, and code samples. | `updateLabEntry()` |

---

## 3. Server API Handlers (6 Endpoints)

| Endpoint | Method | Security Controls | Responsibility |
|:---|:---:|:---|:---|
| `/api/assistant` | `POST` | Sliding window IP rate limit (Upstash/Memory), 64KB size guard, Zod validation, Prompt Injection Guard, Secret/Leak sanitization, Table-to-Bullet transformer. | Powers the public ShivSastra AI Assistant. Grounded strictly in verified public studio context. |
| `/api/store/checkout` | `POST` | Zod validation, server-authoritative price calculation, Razorpay order generation. | Initiates Razorpay digital checkout for canonical store items. |
| `/api/store/verify-payment` | `POST` | HMAC SHA-256 cryptographic signature verification, database transaction commit, order record creation. | Verifies Razorpay checkout completion and triggers download entitlement. |
| `/api/store/download/[orderId]` | `GET` | Cryptographic signature verification, order fulfillment authorization. | Serves digital product downloads securely without exposing bucket paths. |
| `/api/store/test-refund` | `POST` | Admin authentication guard, Razorpay refund API bridge. | Processes authorized payment refunds for digital orders. |
| `/api/webhooks/razorpay` | `POST` | Razorpay webhook signature validation, idempotency guard. | Asynchronously processes payment captures and updates ledger state. |

