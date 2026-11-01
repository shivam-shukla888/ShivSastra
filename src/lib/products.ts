import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { absoluteUrl } from "@/lib/site";

export type ProductType =
  | "digital_download"
  | "code_license"
  | "template"
  | "monograph";

export type StoreCategory =
  | "agent_templates"
  | "agent_kits"
  | "prompt_packs"
  | "design"
  | "ai_agents"
  | "digital_products";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductRow {
  id: string;
  slug: string;
  release_code: string | null;
  title: string;
  short_description: string | null;
  description: string | null;
  price_in_cents: number | null;
  currency: string | null;
  category: StoreCategory;
  product_type: ProductType;
  features: string[] | null;
  requirements: string | null;
  faq: FaqItem[] | null;
  preview_image_url: string | null;
  is_available: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

/**
 * Publicly exposed product data.
 * CRITICAL SECURITY GUARANTEE: storageAssetPath is strictly omitted.
 */
export interface ProductDisplayData {
  id: string;
  slug: string;
  releaseCode: string | null;
  title: string;
  shortDescription: string | null;
  description: string | null;
  priceInCents: number | null;
  currency: string | null;
  category: StoreCategory;
  productType: ProductType;
  features: string[];
  requirements: string | null;
  faq: FaqItem[];
  previewImageUrl: string | null;
  isAvailable: boolean;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  formattedPrice: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  authorName: string;
  authorTitle: string | null;
  rating: number;
  content: string;
  isVerifiedPurchase?: boolean;
  createdAt: string;
}

export interface CategoryCounts {
  agent_templates: number;
  agent_kits: number;
  prompt_packs: number;
  design: number;
  ai_agents: number;
  digital_products: number;
  total: number;
  purchasable: number;
  upcoming: number;
  caseStudy: number;
}

/**
 * Checks whether a product item is actually available for commercial checkout.
 */
export function isProductPurchasable(product: ProductDisplayData): boolean {
  return Boolean(
    product.isAvailable &&
      Number.isInteger(product.priceInCents) &&
      (product.priceInCents ?? 0) >= 100 &&
      typeof product.currency === "string" &&
      product.currency.trim().length > 0
  );
}

/**
 * Resolves the catalog presentation type: purchasable product, engineering case study, or upcoming/discontinued release.
 */
export function getProductCatalogType(
  product: ProductDisplayData
): "purchasable" | "case_study" | "upcoming" | "discontinued" {
  if (isProductPurchasable(product)) return "purchasable";
  if (product.slug === "yojna-setu" || product.formattedPrice === "Case Study") {
    return "case_study";
  }
  if (!product.isAvailable || product.formattedPrice === "Discontinued") {
    return "discontinued";
  }
  return "upcoming";
}

/**
 * Deterministic price formatting helper.
 * Derives output strictly from priceInCents and currency without inventing pricing.
 * Falls back to [PRODUCT PRICE PENDING] if price is null or invalid.
 */
export function formatPrice(
  priceInCents: number | null | undefined,
  currency: string | null | undefined
): string {
  if (
    priceInCents === null ||
    priceInCents === undefined ||
    typeof priceInCents !== "number" ||
    priceInCents < 0
  ) {
    return "[PRODUCT PRICE PENDING]";
  }

  const curr = (currency || "INR").toUpperCase().trim();
  const amount = (priceInCents / 100).toFixed(2);

  switch (curr) {
    case "INR":
      return `â‚¹${amount}`;
    case "USD":
      return `$${amount}`;
    case "EUR":
      return `â‚¬${amount}`;
    case "GBP":
      return `Â£${amount}`;
    default:
      return `${curr} ${amount}`;
  }
}

/**
 * Maps raw database product row to camelCase public ProductDisplayData representation.
 * Explicitly sanitizes and formats pricing.
 */
function mapProduct(row: ProductRow): ProductDisplayData {
  return {
    id: row.id,
    slug: row.slug,
    releaseCode: row.release_code,
    title: row.title,
    shortDescription: row.short_description,
    description: row.description,
    priceInCents: row.price_in_cents,
    currency: row.currency,
    category: row.category || "agent_templates",
    productType: row.product_type || "digital_download",
    features: Array.isArray(row.features) ? row.features : [],
    requirements: row.requirements,
    faq: Array.isArray(row.faq) ? row.faq : [],
    previewImageUrl: row.preview_image_url,
    isAvailable: row.is_available,
    isFeatured: Boolean(row.is_featured),
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    formattedPrice: formatPrice(row.price_in_cents, row.currency),
  };
}

/**
 * Returns a server-side Supabase client for reading active store products.
 * Credentials remain isolated on the server.
 */
function getProductsQueryClient(): SupabaseClient | null {
  const serverClient = getSupabaseServerClient();
  if (serverClient) {
    return serverClient;
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  if (url && anonKey) {
    return createClient(url, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return null;
}

const PUBLIC_PRODUCT_COLUMNS =
  "id, slug, release_code, title, short_description, description, price_in_cents, currency, category, product_type, features, requirements, faq, preview_image_url, is_available, is_featured, sort_order, created_at, updated_at";

export interface StoreProductsOptions {
  limit?: number;
  category?: StoreCategory;
  isFeatured?: boolean;
  search?: string;
  sort?: "newest" | "price_asc" | "price_desc" | "featured";
}

/* =======================================================================
   NEW AGENTIC AI DIGITAL PRODUCTS (Authoritative Catalog)
   ======================================================================= */

export const N8N_LEAD_QUALIFIER_ITEM: ProductDisplayData = {
  id: "847291a2-1111-4000-8000-000000000001",
  slug: "n8n-lead-qualifier-agent-pack",
  releaseCode: "AGT-LQP",
  title: "n8n Lead Qualifier Agent Pack",
  shortDescription:
    "Ready-to-deploy n8n workflow template that autonomously engages, qualifies, and enriches incoming leads before routing them to your CRM or inbox.",
  description:
    "A production-tested n8n agent workflow built for self-hosted or cloud n8n setups. Features structured JSON schema extraction, scoring logic, rate-limit guardrails, and automated notifications to Google Sheets or Slack.",
  priceInCents: 349900,
  currency: "INR",
  category: "agent_templates",
  productType: "template",
  features: [
    "Production n8n JSON workflow ready for 1-click import",
    "Structured criteria scoring for high-intent leads",
    "Rate limiting and token-consumption guardrails",
    "Google Sheets & email notification nodes included",
    "Production-ready for self-hosted n8n or cloud orchestration",
  ],
  requirements: "n8n (self-hosted v1.0+ or n8n Cloud), Groq or OpenAI API key",
  faq: [
    {
      question: "Can I run this on self-hosted infrastructure?",
      answer:
        "Yes. The workflow is optimized for minimal execution overhead and high token efficiency, running reliably on self-hosted Docker n8n or cloud environments.",
    },
    {
      question: "What is included in the download?",
      answer:
        "You receive the complete n8n workflow JSON export, environment configuration guide, schema definitions, and a step-by-step setup walkthrough.",
    },
  ],
  previewImageUrl: "/images/backgrounds/store.webp",
  isAvailable: true,
  isFeatured: true,
  sortOrder: 1,
  createdAt: "2026-11-01T12:00:00Z",
  updatedAt: "2026-11-01T12:00:00Z",
  formattedPrice: "₹3499.00",
};

export const WHATSAPP_SUPPORT_KIT_ITEM: ProductDisplayData = {
  id: "847291a2-1111-4000-8000-000000000002",
  slug: "whatsapp-support-agent-kit",
  releaseCode: "AGT-WSK",
  title: "WhatsApp Support Agent Kit",
  shortDescription:
    "Complete conversational support agent kit connecting WhatsApp messaging to knowledge retrieval, FAQ resolution, and live-agent escalation.",
  description:
    "An end-to-end kit for deploying a 24/7 customer support agent over WhatsApp. Connects directly to webhook gateways, answers recurring inquiries accurately with deterministic fallbacks, and triggers human takeover whenever required.",
  priceInCents: 399900,
  currency: "INR",
  category: "agent_kits",
  productType: "code_license",
  features: [
    "WhatsApp webhook integration blueprints (Meta Cloud API / Twilio)",
    "Contextual FAQ knowledge retrieval with fallback parsing",
    "Human-in-the-loop escalation trigger for sensitive queries",
    "Session memory management and conversation state tracking",
    "Zero customer data stored on third-party servers",
  ],
  requirements: "WhatsApp Business API or Twilio WhatsApp sandbox, Node.js 18+ or n8n v1.0+",
  faq: [
    {
      question: "Which WhatsApp messaging gateways are supported?",
      answer:
        "You can connect either official Meta Cloud API or Twilio WhatsApp messaging pipelines with standard webhook endpoints.",
    },
    {
      question: "How does human escalation work?",
      answer:
        "When a customer requests a representative or sentiment triggers an alert, the agent halts automated replies and routes the chat directly to your team.",
    },
  ],
  previewImageUrl: "/images/projects/realguard/evidence-realguard-whatsapp.png",
  isAvailable: true,
  isFeatured: true,
  sortOrder: 2,
  createdAt: "2026-11-01T12:00:00Z",
  updatedAt: "2026-11-01T12:00:00Z",
  formattedPrice: "₹3999.00",
};

export const SALES_FOLLOWUP_AGENT_ITEM: ProductDisplayData = {
  id: "847291a2-1111-4000-8000-000000000003",
  slug: "sales-followup-agent-pack",
  releaseCode: "AGT-SFP",
  title: "Sales Follow-up Agent Pack",
  shortDescription:
    "Intelligent follow-up automation system that monitors deal stages, drafts tailored check-ins, and re-engages stalled prospects automatically.",
  description:
    "Automate thoughtful, persistent sales follow-ups without sounding generic. This agent tracks interaction history, generates hyper-relevant check-in messages based on client objections, and schedules timed touchpoints across email or messaging.",
  priceInCents: 449900,
  currency: "INR",
  category: "agent_templates",
  productType: "template",
  features: [
    "Dynamic follow-up cadences with objection-handling logic",
    "Multi-channel trigger templates for email, WhatsApp, and CRM",
    "CRM stage sync (HubSpot, Notion, Airtable, or Google Sheets)",
    "Anti-spam throttle ensuring safe delivery cadences",
    "Human approval checkpoints before high-value emails dispatch",
  ],
  requirements: "n8n or Make, connected CRM or Google Sheet, SMTP or Resend/SendGrid credentials",
  faq: [
    {
      question: "Can I review messages before they send?",
      answer:
        "Yes. Human approval points can be toggled on so messages are queued as drafts until you approve them.",
    },
  ],
  previewImageUrl: "/images/backgrounds/store.webp",
  isAvailable: true,
  isFeatured: false,
  sortOrder: 3,
  createdAt: "2026-11-01T12:00:00Z",
  updatedAt: "2026-11-01T12:00:00Z",
  formattedPrice: "₹4499.00",
};

export const SMALL_BUSINESS_BUNDLE_ITEM: ProductDisplayData = {
  id: "847291a2-1111-4000-8000-000000000004",
  slug: "small-business-agent-bundle",
  releaseCode: "AGT-SBB",
  title: "Small Business Agent Bundle",
  shortDescription:
    "The complete agentic toolkit for small business: Lead Qualifier, WhatsApp Support Kit, Sales Follow-up Pack, and Prompt Library in one bundle.",
  description:
    "Comprehensive agentic AI bundle designed specifically for small businesses wanting an all-in-one automation stack. Includes the Lead Qualifier Pack, WhatsApp Support Kit, Sales Follow-up Pack, Prompt Library, and Production Reliability Kit.",
  priceInCents: 999900,
  currency: "INR",
  category: "agent_kits",
  productType: "code_license",
  features: [
    "All 5 individual agent templates, kits, and prompt libraries included",
    "Unified architecture blueprint connecting leads, support, and sales",
    "Pre-configured n8n and Make workflows with step-by-step guides",
    "Self-hosting deployment guide for 100% data ownership",
    "Over 30% savings compared to buying individual packs",
  ],
  requirements: "Self-hosted server (Docker/VPS) or cloud accounts (n8n, Make, Groq/OpenAI)",
  faq: [
    {
      question: "Is this suitable for non-technical small business owners?",
      answer:
        "The bundle includes detailed setup walkthroughs, pre-built JSON templates, and clear configuration checklists designed for straightforward deployment.",
    },
  ],
  previewImageUrl: "/images/backgrounds/store.webp",
  isAvailable: true,
  isFeatured: true,
  sortOrder: 4,
  createdAt: "2026-11-01T12:00:00Z",
  updatedAt: "2026-11-01T12:00:00Z",
  formattedPrice: "₹9999.00",
};

export const AGENT_PROMPT_LIBRARY_ITEM: ProductDisplayData = {
  id: "847291a2-1111-4000-8000-000000000005",
  slug: "agent-system-prompt-library",
  releaseCode: "AGT-SPL",
  title: "Agent System Prompt Library",
  shortDescription:
    "Curated collection of 50+ battle-tested system instructions, guardrails, reasoning scaffolds, and schema templates for production AI agents.",
  description:
    "Stop wrestling with hallucinating models. This library contains battle-tested system instructions and steering prompts engineered for precision, JSON schema compliance, role adherence, and defensive prompt injection resistance.",
  priceInCents: 249900,
  currency: "INR",
  category: "prompt_packs",
  productType: "digital_download",
  features: [
    "50+ production-verified agent system prompts across 10 business domains",
    "Strict JSON schema output steering prompts with fallback clauses",
    "Defensive guardrail instructions preventing prompt injection and jailbreaks",
    "Tested with Groq (Llama 3.3), OpenAI (GPT-4o), and Anthropic (Claude 3.5)",
    "Markdown and JSON format for direct copy-paste into your agent pipelines",
  ],
  requirements: "Compatible with any LLM provider (OpenAI, Anthropic, Groq, Google Gemini, Ollama)",
  faq: [
    {
      question: "How do these prompts differ from generic prompt collections?",
      answer:
        "These are structured engineering system instructions designed for autonomous agents that call tools and return strict JSON, not chat personas or creative writing prompts.",
    },
  ],
  previewImageUrl: "/images/backgrounds/store.webp",
  isAvailable: true,
  isFeatured: false,
  sortOrder: 5,
  createdAt: "2026-11-01T12:00:00Z",
  updatedAt: "2026-11-01T12:00:00Z",
  formattedPrice: "₹2499.00",
};

export const N8N_FREE_TIER_KIT_ITEM: ProductDisplayData = {
  id: "847291a2-1111-4000-8000-000000000006",
  slug: "n8n-free-tier-survival-kit",
  releaseCode: "AGT-PRK",
  title: "n8n Production Reliability Kit",
  shortDescription:
    "Essential reliability patterns, execution-saving sub-workflows, rate-limiting handlers, and local storage adapters for production n8n agents.",
  description:
    "A specialized engineering toolkit for deploying resilient AI agents on n8n. Includes execution batching patterns, webhook deduplication, token throttles, retry handlers, and local caching adapters to ensure uninterrupted uptime and predictable operating costs.",
  priceInCents: 149900,
  currency: "INR",
  category: "agent_templates",
  productType: "template",
  features: [
    "Execution batching & queueing nodes for high-throughput stability",
    "Webhook deduplication and retry handlers to prevent execution burning",
    "Token-saving prompt compression patterns",
    "Local SQLite and Google Sheets state management templates",
    "Production self-hosting checklist and environment hardening guide",
  ],
  requirements: "n8n (self-hosted or n8n Cloud), Node.js / Docker",
  faq: [
    {
      question: "Does this help reduce OpenAI/Groq API bills?",
      answer:
        "Yes. The included compression and caching nodes drastically reduce redundant LLM calls, lowering inference token usage by up to 60%.",
    },
  ],
  previewImageUrl: "/images/backgrounds/store.webp",
  isAvailable: true,
  isFeatured: false,
  sortOrder: 6,
  createdAt: "2026-11-01T12:00:00Z",
  updatedAt: "2026-11-01T12:00:00Z",
  formattedPrice: "₹1499.00",
};

/* =======================================================================
   LEGACY / DISCONTINUED ITEMS (Preserved for tests & backward compatibility)
   ======================================================================= */

export const YOJNA_SETU_STORE_ITEM: ProductDisplayData = {
  id: "yojna-setu-agent",
  slug: "yojna-setu",
  releaseCode: "YS-V2",
  title: "Yojna Setu",
  shortDescription:
    "A WhatsApp AI agent for welfare-scheme discovery. Users talk naturally â€” AI extracts demographic profile attributes, while deterministic Java rules evaluate eligibility over 82 normalized schemes.",
  description:
    "A WhatsApp AI agent for welfare-scheme discovery. Users describe themselves in natural language in conversational Hindi or English â€” AI extracts demographic attributes, then deterministic Java rules evaluate eligibility over 82 normalized schemes.",
  priceInCents: null,
  currency: null,
  category: "ai_agents",
  productType: "code_license",
  features: [
    "82 normalized schemes (63 Central, 11 State, 8 Philanthropic)",
    "42/42 automated tests passing Â· 0 Critical findings",
    "Deterministic Java eligibility engine with indexed queries",
    "Interactive product case study & architecture monograph",
  ],
  requirements: "Java 21, Spring Boot 3.2, PostgreSQL 17, Groq Cloud, Twilio",
  faq: [
    {
      question: "Is this a purchasable store product?",
      answer:
        "No. Yojna Setu is an open architectural case study and agent engineering showcase, not a commercial paid product.",
    },
  ],
  previewImageUrl: "/images/projects/yojna-setu/evidence-whatsapp-discovery.png",
  isAvailable: false,
  isFeatured: false,
  sortOrder: 10,
  createdAt: "2026-09-25T12:00:00Z",
  updatedAt: "2026-09-25T12:00:00Z",
  formattedPrice: "Case Study",
};

export const SPRING_BOOT_STARTER_ITEM: ProductDisplayData = {
  id: "a9eac140-877c-4e98-9b6a-87c6712e4f03",
  slug: "spring-boot-starter",
  releaseCode: "SB3-KIT",
  title: "Spring Boot 3 API Boilerplate",
  shortDescription:
    "Structured backend starter featuring Spring Boot 3, Spring Security 6, JWT rotation, database migrations, rate limiting, and clean MVC architecture.",
  description:
    "A clean architectural starter kit for Java & Spring Boot developers. Note: This item has been discontinued in favor of our dedicated Agentic AI systems.",
  priceInCents: null,
  currency: null,
  category: "digital_products",
  productType: "template",
  features: [
    "Spring Boot 3.2+ with Java 17/21 baseline",
    "Stateless Spring Security 6 with JWT refresh token rotation",
    "Hibernate ORM entity mappings & PostgreSQL configuration",
    "Automated unit & integration test suites with mock frameworks",
  ],
  requirements: "Java 17+, Maven 3.8+, Docker (optional)",
  faq: [
    {
      question: "What is the status of this boilerplate?",
      answer:
        "Discontinued. Focus has shifted fully to Agentic AI systems and templates.",
    },
  ],
  previewImageUrl: "/images/quickeats.svg",
  isAvailable: false,
  isFeatured: false,
  sortOrder: 11,
  createdAt: "2026-09-26T12:00:00Z",
  updatedAt: "2026-09-26T12:00:00Z",
  formattedPrice: "Discontinued",
};

export const EDITORIAL_PORTFOLIO_ITEM: ProductDisplayData = {
  id: "editorial-portfolio-template",
  slug: "editorial-portfolio",
  releaseCode: "PF-KIT",
  title: "Editorial Developer Portfolio Kit",
  shortDescription:
    "A typographic, Swiss-inspired Next.js portfolio template built with Tailwind CSS, micro-interactions, accessible components, and zero AI fluff.",
  description:
    "Handcrafted portfolio template engineered with Next.js App Router, Tailwind CSS, Motion spring interactions, and zero-compromise accessibility. Note: This item has been discontinued in favor of our dedicated Agentic AI systems.",
  priceInCents: null,
  currency: null,
  category: "design",
  productType: "template",
  features: [
    "Next.js App Router with React 19 & TypeScript",
    "Swiss editorial typography & dark mode palette",
    "Subtle spring-damped micro-interactions with reduced-motion support",
    "Semantic HTML layout structure with zero layout shift",
  ],
  requirements: "Node.js 18+, Next.js 15/16",
  faq: [
    {
      question: "What is the status of this template?",
      answer:
        "Discontinued. Focus has shifted fully to Agentic AI systems and templates.",
    },
  ],
  previewImageUrl: "/images/backgrounds/store-design.webp",
  isAvailable: false,
  isFeatured: false,
  sortOrder: 12,
  createdAt: "2026-09-26T12:00:00Z",
  updatedAt: "2026-09-26T12:00:00Z",
  formattedPrice: "Discontinued",
};

/**
 * Authoritative canonical store items.
 * Single source of truth for products represented inside the store.
 */
export const CANONICAL_STORE_PRODUCTS: ProductDisplayData[] = [
  N8N_LEAD_QUALIFIER_ITEM,
  WHATSAPP_SUPPORT_KIT_ITEM,
  SALES_FOLLOWUP_AGENT_ITEM,
  SMALL_BUSINESS_BUNDLE_ITEM,
  AGENT_PROMPT_LIBRARY_ITEM,
  N8N_FREE_TIER_KIT_ITEM,
  YOJNA_SETU_STORE_ITEM,
  SPRING_BOOT_STARTER_ITEM,
  EDITORIAL_PORTFOLIO_ITEM,
];

/**
 * Fetches available products ordered deterministically.
 * Merges canonical store items with live Supabase database products.
 * Queries the public view or public columns strictly; never selects storage_asset_path.
 * Gracefully degrades to canonical items if Supabase is unconfigured or unreachable.
 */
export async function getPublishedStoreProducts(
  options?: StoreProductsOptions
): Promise<ProductDisplayData[]> {
  let products: ProductDisplayData[] = [];

  try {
    const client = getProductsQueryClient();
    if (client) {
      const { data, error } = await client
        .from("public_products")
        .select(PUBLIC_PRODUCT_COLUMNS)
        .eq("is_available", true);

      if (!error && data && Array.isArray(data)) {
        products = (data as unknown as ProductRow[]).map(mapProduct);
      } else {
        const fallback = await client
          .from("products")
          .select(PUBLIC_PRODUCT_COLUMNS)
          .eq("is_available", true);

        if (!fallback.error && fallback.data && Array.isArray(fallback.data)) {
          products = (fallback.data as unknown as ProductRow[]).map(mapProduct);
        }
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[STORE EXCEPTION] ${message}`);
  }

  // Merge canonical store items ensuring single source of truth
  for (const canonical of CANONICAL_STORE_PRODUCTS) {
    if (
      canonical.isAvailable &&
      !products.some((p) => p.slug === canonical.slug || p.id === canonical.id)
    ) {
      products.push(canonical);
    }
  }

  // Filter by category
  if (options?.category) {
    products = products.filter((p) => p.category === options.category);
  }

  // Filter by isFeatured
  if (options?.isFeatured) {
    products = products.filter((p) => p.isFeatured);
  }

  // Filter by search query
  if (options?.search && options.search.trim()) {
    const term = options.search.trim().toLowerCase();
    products = products.filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(term);
      const descMatch = p.description?.toLowerCase().includes(term) ?? false;
      const shortDescMatch =
        p.shortDescription?.toLowerCase().includes(term) ?? false;
      const codeMatch = p.releaseCode?.toLowerCase().includes(term) ?? false;
      return titleMatch || descMatch || shortDescMatch || codeMatch;
    });
  }

  // Deterministic sorting
  switch (options?.sort) {
    case "price_asc":
      products.sort((a, b) => (a.priceInCents ?? 0) - (b.priceInCents ?? 0));
      break;
    case "price_desc":
      products.sort((a, b) => (b.priceInCents ?? 0) - (a.priceInCents ?? 0));
      break;
    case "featured":
      products.sort((a, b) => {
        if (a.isFeatured === b.isFeatured) {
          return a.sortOrder - b.sortOrder;
        }
        return a.isFeatured ? -1 : 1;
      });
      break;
    case "newest":
    default:
      products.sort((a, b) => {
        if (a.sortOrder !== b.sortOrder) {
          return a.sortOrder - b.sortOrder;
        }
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      break;
  }

  // Limit
  if (options?.limit && options.limit > 0) {
    products = products.slice(0, options.limit);
  }

  return products;
}

/**
 * Resolves a single available product by its slug.
 * Returns canonical or database product.
 */
export async function getPublishedStoreProductBySlug(
  slug: string
): Promise<ProductDisplayData | null> {
  if (!slug || typeof slug !== "string") {
    return null;
  }

  const trimmedSlug = slug.trim();
  const canonical = CANONICAL_STORE_PRODUCTS.find(
    (p) => p.slug === trimmedSlug
  );
  if (canonical) {
    return canonical;
  }

  try {
    const client = getProductsQueryClient();
    if (!client) {
      return null;
    }

    const { data, error } = await client
      .from("public_products")
      .select(PUBLIC_PRODUCT_COLUMNS)
      .eq("slug", trimmedSlug)
      .eq("is_available", true)
      .maybeSingle();

    if (error || !data) {
      const fallbackResult = await client
        .from("products")
        .select(PUBLIC_PRODUCT_COLUMNS)
        .eq("slug", trimmedSlug)
        .eq("is_available", true)
        .maybeSingle();

      if (fallbackResult.error || !fallbackResult.data) {
        if (fallbackResult.error) {
          console.error(
            `[STORE DATA] Slug query failed: ${
              fallbackResult.error.code || fallbackResult.error.message
            }`
          );
        }
        return null;
      }
      return mapProduct(fallbackResult.data as unknown as ProductRow);
    }

    return mapProduct(data as unknown as ProductRow);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[STORE EXCEPTION] ${message}`);
    return null;
  }
}

/**
 * Resolves a single available product by its UUID or identifier.
 * Returns canonical or database product.
 */
export async function getPublishedStoreProductById(
  id: string
): Promise<ProductDisplayData | null> {
  if (!id || typeof id !== "string") {
    return null;
  }

  const trimmedId = id.trim();
  const canonical = CANONICAL_STORE_PRODUCTS.find(
    (p) => p.id === trimmedId || p.slug === trimmedId
  );
  if (canonical) {
    return canonical;
  }

  try {
    const client = getProductsQueryClient();
    if (!client) {
      return null;
    }

    // Try finding by UUID id first
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(trimmedId);

    if (isUuid) {
      const { data, error } = await client
        .from("public_products")
        .select(PUBLIC_PRODUCT_COLUMNS)
        .eq("id", trimmedId)
        .eq("is_available", true)
        .maybeSingle();

      if (!error && data) {
        return mapProduct(data as unknown as ProductRow);
      }

      const fallbackResult = await client
        .from("products")
        .select(PUBLIC_PRODUCT_COLUMNS)
        .eq("id", trimmedId)
        .eq("is_available", true)
        .maybeSingle();

      if (!fallbackResult.error && fallbackResult.data) {
        return mapProduct(fallbackResult.data as unknown as ProductRow);
      }
    }

    // Fallback search by slug if identifier was provided as slug
    return getPublishedStoreProductBySlug(trimmedId);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[STORE EXCEPTION] ${message}`);
    return null;
  }
}

/**
 * Computes live category counts and total available product counts.
 * Derives counts directly from the authoritative store product catalog.
 */
export async function getStoreCategoryCounts(): Promise<CategoryCounts> {
  try {
    const products = await getPublishedStoreProducts();
    const purchasable = products.filter(isProductPurchasable).length;
    const caseStudy = products.filter(
      (p) => !isProductPurchasable(p) && (p.slug === "yojna-setu" || p.formattedPrice === "Case Study")
    ).length;
    const upcoming = products.length - purchasable - caseStudy;

    return {
      agent_templates: products.filter((p) => p.category === "agent_templates").length,
      agent_kits: products.filter((p) => p.category === "agent_kits").length,
      prompt_packs: products.filter((p) => p.category === "prompt_packs").length,
      design: products.filter((p) => p.category === "design").length,
      ai_agents: products.filter((p) => p.category === "ai_agents").length,
      digital_products: products.filter((p) => p.category === "digital_products").length,
      total: products.length,
      purchasable,
      upcoming,
      caseStudy,
    };
  } catch (err) {
    console.error("[STORE COUNTS EXCEPTION]", err);
    return {
      agent_templates: 0,
      agent_kits: 0,
      prompt_packs: 0,
      design: 0,
      ai_agents: 0,
      digital_products: 0,
      total: 0,
      purchasable: 0,
      upcoming: 0,
      caseStudy: 0,
    };
  }
}

/**
 * Fetches published reviews for a given product id.
 * Strictly checks is_published = true.
 */
export async function getPublishedProductReviews(
  productId: string
): Promise<ProductReview[]> {
  if (!productId) return [];

  try {
    const client = getProductsQueryClient();
    if (!client) return [];

    const { data, error } = await client
      .from("product_reviews")
      .select("id, product_id, reviewer_name, review_title, rating, review_body, is_verified_purchase, created_at")
      .eq("product_id", productId)
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error || !data) {
      return [];
    }

    return (data as Array<{
      id: string;
      product_id: string;
      reviewer_name: string;
      review_title: string | null;
      rating: number;
      review_body: string;
      is_verified_purchase: boolean;
      created_at: string;
    }>).map((r) => ({
      id: r.id,
      productId: r.product_id,
      authorName: r.reviewer_name,
      authorTitle: r.review_title,
      rating: r.rating,
      content: r.review_body,
      isVerifiedPurchase: r.is_verified_purchase,
      createdAt: r.created_at,
    }));
  } catch (err) {
    console.error("[STORE REVIEWS EXCEPTION]", err);
    return [];
  }
}

/**
 * Generates Schema.org Product structured data strictly for purchasable commercial products.
 *
 * Requirements:
 * - Must be available (isAvailable === true).
 * - Must have an integer priceInCents of at least 100 paise and valid currency.
 * - Non-commercial showcases and upcoming/discontinued releases strictly
 *   return null to prevent misleading Google rich-results warnings or false InStock claims.
 */
export function getProductStructuredData(
  product: ProductDisplayData,
  categoryName: string,
  reviews: ProductReview[] = []
): Record<string, unknown> | null {
  if (!isProductPurchasable(product)) {
    return null;
  }

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDescription || product.description || undefined,
    image: product.previewImageUrl ? absoluteUrl(product.previewImageUrl) : undefined,
    category: categoryName,
    offers: {
      "@type": "Offer",
      price: (product.priceInCents! / 100).toFixed(2),
      priceCurrency: product.currency!.toUpperCase(),
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/store/${product.slug}`),
    },
  };

  if (reviews.length > 0) {
    structuredData.review = reviews.map((rev) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.rating,
      },
      author: {
        "@type": "Person",
        name: rev.authorName,
      },
      reviewBody: rev.content,
    }));
  }

  return structuredData;
}
