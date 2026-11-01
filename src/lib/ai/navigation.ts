/**
 * ShivSastra AI — Route Registry & Safe Navigation Allowlist
 * 
 * Centralized, server-controlled navigation map for the public ShivSastra website.
 * Enforces strict route-allowlisting, dynamic slug validation, URL normalization,
 * safe anchor verification, and rejects all admin (/admin*), API (/api*), protocol-relative (//*), and malformed paths.
 */

import { getPublishedProjects } from "@/lib/projects";
import { getPublishedServices } from "@/lib/services";
import { getPublishedStoreProducts } from "@/lib/products";
import { getPublishedLabEntries } from "@/lib/lab";

/**
 * 1. Verified Static Public Routes
 * The definitive allowlist of top-level and category public pages in the App Router.
 */
export const STATIC_PUBLIC_ROUTES = [
  "/",
  "/about",
  "/projects",
  "/services",
  "/store",
  "/store/agent-templates",
  "/store/agent-kits",
  "/store/prompt-packs",
  "/store/design",
  "/store/ai-agents",
  "/store/digital-products",
  "/contact",
  "/lab",
  "/resume",
  "/privacy",
] as const;

export type StaticPublicRoute = (typeof STATIC_PUBLIC_ROUTES)[number];

export interface NavigationDestination {
  label: string;
  href: StaticPublicRoute;
  description: string;
}

/**
 * Controlled Public Navigation Map
 */
export const PUBLIC_NAVIGATION: Record<string, NavigationDestination> = {
  home: {
    label: "Home",
    href: "/",
    description: "Overview, ethos, and production Agentic AI systems for growing businesses",
  },
  about: {
    label: "About",
    href: "/about",
    description: "Background, AI Systems engineering philosophy, and verified public profiles",
  },
  projects: {
    label: "Projects",
    href: "/projects",
    description: "Published client case studies, engineering builds, and open-source software",
  },
  services: {
    label: "Services",
    href: "/services",
    description: "Production agent setups, business workflows, and full multi-agent architecture",
  },
  store: {
    label: "Store",
    href: "/store",
    description: "Production agent templates, complete deployment kits, and prompt libraries",
  },
  storeAgentTemplates: {
    label: "AI Agent Templates",
    href: "/store/agent-templates",
    description: "Production n8n and Make workflows for lead qualification and sales follow-up",
  },
  storeAgentKits: {
    label: "Complete Agent Kits",
    href: "/store/agent-kits",
    description: "Full-stack agent licenses and messaging integration blueprints",
  },
  storePromptPacks: {
    label: "Prompt Packs",
    href: "/store/prompt-packs",
    description: "Battle-tested system instructions, guardrails, and JSON schemas",
  },
  storeDesign: {
    label: "Design Store",
    href: "/store/design",
    description: "Design systems and typography collections",
  },
  storeAiAgents: {
    label: "AI Agents Store",
    href: "/store/ai-agents",
    description: "Conversational AI workflows and agent architectures",
  },
  storeDigitalProducts: {
    label: "Digital Products Store",
    href: "/store/digital-products",
    description: "Developer toolkits and boilerplates",
  },
  contact: {
    label: "Contact",
    href: "/contact",
    description: "Inquiries, scope outlines, and direct communication",
  },
  lab: {
    label: "Lab",
    href: "/lab",
    description: "Personal sandbox entries, research notes, and architectural experiments",
  },
  resume: {
    label: "Resume",
    href: "/resume",
    description: "Verified engineering credentials, timeline, and resume document",
  },
  privacy: {
    label: "Privacy",
    href: "/privacy",
    description: "Public privacy policy and infrastructure memorandum",
  },
};

/**
 * 2. URL Cleaning & Normalization
 * Removes zero-width characters, trailing punctuation, trailing slashes,
 * and whitespace that can cause Next.js router 404s.
 */
export function normalizeHref(rawHref: string): string {
  if (!rawHref || typeof rawHref !== "string") return "";

  // Remove zero-width characters and control characters
  let href = rawHref.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F]/g, "").trim();

  // Decode URI if safe, handling malformed sequences gracefully
  try {
    if (!/%2f%2f/i.test(href) && !/%5c/i.test(href)) {
      href = decodeURI(href);
    }
  } catch {
    // Keep raw string if malformed URI sequence
  }

  // Remove surrounding quotes, backticks, brackets, parentheses, angle brackets
  href = href.replace(/^["'`(<[]+|["'`)(>\]]+$/g, "").trim();

  // Remove trailing punctuation (. , : ; ! ? ← ↗)
  href = href.replace(/[.,:;!?←↗]+$/g, "").trim();

  // Normalize duplicate slashes at the start and trailing slashes
  if (href.startsWith("/")) {
    href = href.replace(/^\/+/, "/");
    if (href.length > 1 && href.endsWith("/")) {
      href = href.slice(0, -1);
    }
  }

  return href;
}

/**
 * 3. Safe Internal Link Policy & Allowlist Validation
 * Returns true ONLY if the normalized path is a verified public route.
 * Supports safe hash anchors on valid base routes (e.g. /services#starter-agent-setup, /services#quote).
 */
export function isValidPublicRoute(
  rawHref: string,
  dynamicRoutes?: Iterable<string>
): boolean {
  if (!rawHref || typeof rawHref !== "string") return false;

  // Reject backslashes or raw protocol attempts
  if (rawHref.includes("\\")) {
    return false;
  }

  const normalized = normalizeHref(rawHref);
  const lower = normalized.toLowerCase();

  // Reject protocol indicators, pseudo-schemes, and protocol-relative URLs
  if (
    lower.startsWith("//") ||
    lower.includes("javascript:") ||
    lower.includes("data:") ||
    lower.includes("vbscript:") ||
    lower.includes("file:") ||
    lower.includes("mailto:") ||
    lower.includes("http:") ||
    lower.includes("https:")
  ) {
    return false;
  }

  // Reject URL-encoded bypasses
  if (
    /%2f%2f/i.test(lower) ||
    /%5c/i.test(lower) ||
    /%2e%2e/i.test(lower) ||
    /%00/i.test(lower)
  ) {
    return false;
  }

  // Must be a clean relative path starting with /
  if (!normalized.startsWith("/") || normalized.startsWith("//")) {
    return false;
  }

  // Strictly reject private admin and internal API routes
  if (
    normalized === "/admin" ||
    normalized.startsWith("/admin/") ||
    normalized.startsWith("/admin#") ||
    normalized === "/api" ||
    normalized.startsWith("/api/") ||
    normalized.startsWith("/api#") ||
    normalized.includes("/admin") ||
    normalized.includes("/api")
  ) {
    return false;
  }

  // Parse path and optional hash anchor
  const hashIndex = normalized.indexOf("#");
  const basePath = hashIndex !== -1 ? normalized.slice(0, hashIndex) : normalized;
  const hash = hashIndex !== -1 ? normalized.slice(hashIndex + 1) : null;

  // If hash is present, must be safe alphanumeric with hyphen or underscore
  if (hash !== null && !/^[a-zA-Z0-9_-]+$/.test(hash)) {
    return false;
  }

  // Reject directory traversal segments
  const segments = basePath.split("/");
  if (segments.some((s) => s === ".." || s === ".")) {
    return false;
  }

  // Allowlist match: Static public routes (with or without safe hash anchor)
  if ((STATIC_PUBLIC_ROUTES as readonly string[]).includes(basePath)) {
    return true;
  }

  // Allowlist match: Verified dynamic public routes (with or without safe hash anchor)
  if (dynamicRoutes) {
    for (const route of dynamicRoutes) {
      if (normalizeHref(route) === basePath) {
        return true;
      }
    }
  }

  return false;
}

/**
 * 4. Dynamic Route Retrieval
 * Fetches only published and active project, service, store product, and lab entry slugs.
 */
export async function getPublishedDynamicRoutes(): Promise<string[]> {
  try {
    const [projects, services, products, labEntries] = await Promise.all([
      getPublishedProjects(),
      getPublishedServices(),
      getPublishedStoreProducts(),
      getPublishedLabEntries(),
    ]);

    const routes: string[] = [];

    projects.forEach((p) => {
      if (p.slug && typeof p.slug === "string" && p.slug.trim().length > 0) {
        routes.push(`/projects/${p.slug.trim()}`);
      }
    });

    services.forEach((s) => {
      if (s.isActive && s.slug && typeof s.slug === "string" && s.slug.trim().length > 0) {
        routes.push(`/services/${s.slug.trim()}`);
      }
    });

    products.forEach((st) => {
      if (st.slug && typeof st.slug === "string" && st.slug.trim().length > 0) {
        routes.push(`/store/${st.slug.trim()}`);
      }
    });

    labEntries.forEach((l) => {
      if (l.slug && typeof l.slug === "string" && l.slug.trim().length > 0) {
        routes.push(`/lab/${l.slug.trim()}`);
      }
    });

    return routes;
  } catch (err) {
    console.error("[AI NAVIGATION] Error loading dynamic routes:", err);
    return [];
  }
}
