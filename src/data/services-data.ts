export interface ServicePackage {
  id: string;
  code: string;
  title: string;
  category: string;
  startingPrice: string;
  pricingNote: string;
  idealFor: string;
  turnaround: string;
  revisions: string;
  summary: string;
  plainEnglishOutcome: string;
  technicalScope: string[];
  deliverables: string[];
  exclusions: string[];
  proofProject?: {
    title: string;
    slug: string;
    description: string;
    ctaLabel?: string;
  };
  contactSubject: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface TechnicalCapability {
  id: string;
  category: string;
  verificationBadge: "Built & Verified in Production" | "Implemented & Verified in Staging" | "Architecture Prototype";
  technologies: string[];
  summary: string;
  capabilities: string[];
  evidence: {
    title: string;
    slug?: string;
    description: string;
  };
}

export interface WebsiteEngineeringArea {
  id: string;
  title: string;
  badge: string;
  summary: string;
  highlights: string[];
  transparencyNote: string;
}

export interface HomepageServicePreview {
  id: string;
  title: string;
  customerOutcome: string;
  startingPrice: string;
  targetHref: string;
}

/**
 * Security Banner constants for all Agentic AI deployments.
 */
export const SECURITY_BANNER_HEADING = "We prioritize security";
export const SECURITY_BANNER_BODY =
  "Data stays in your control • Human approval points included • No customer data stored on my servers • Free-tier safe by design";
export const SECURITY_SHORT = "We prioritize security";

/** Backward compatibility alias */
export const SECURITY_PROMISE = SECURITY_BANNER_BODY;

export const HOMEPAGE_SERVICES_PREVIEW: HomepageServicePreview[] = [
  {
    id: "starter-agent-setup",
    title: "Starter Agent Setup",
    customerOutcome: "Deploy 1 focused agent (Lead Qualifier, Support, or Enquiry Handler) connected to WhatsApp or web chat with free-tier safety.",
    startingPrice: "₹22,000 – ₹35,000",
    targetHref: "/services#starter-agent-setup",
  },
  {
    id: "business-agent-package",
    title: "Business Agent Package",
    customerOutcome: "1–2 production agents with multi-step reasoning, tool calling, CRM/Sheets integration, and human approval checkpoints.",
    startingPrice: "₹55,000 – ₹90,000",
    targetHref: "/services#business-agent-package",
  },
  {
    id: "full-agentic-system",
    title: "Full Agentic System",
    customerOutcome: "Multi-agent system with custom tools, memory, monitoring, production self-hosted n8n setup, and 60 days of support.",
    startingPrice: "₹1,10,000 – ₹1,80,000",
    targetHref: "/services#full-agentic-system",
  },
];

export const TECHNICAL_CAPABILITIES: TechnicalCapability[] = [
  {
    id: "agentic-ai-orchestration",
    category: "Agentic AI Orchestration & Tool Calling",
    verificationBadge: "Built & Verified in Production",
    technologies: ["n8n (Self-Hosted)", "Make", "Groq SDK (Llama 3.3)", "OpenAI API", "Python"],
    summary:
      "Production-grade agentic workflows with multi-step reasoning, deterministic tool execution, and stateful memory pipelines.",
    capabilities: [
      "Multi-step agent reasoning with structured tool calling and schema validation",
      "Decoupled architecture: LLMs reason and extract intent, deterministic code executes operations",
      "Self-hosted n8n workflow deployment on isolated client infrastructure",
      "Human-in-the-loop checkpoints before any high-stakes or irreversible actions",
      "Rate-limiting and token-consumption guardrails for free-tier optimization",
    ],
    evidence: {
      title: "RealGuard & Yojna Setu",
      slug: "realguard",
      description: "Live conversational WhatsApp assistant and multilingual welfare scheme discovery engine.",
    },
  },
  {
    id: "backend-integrations",
    category: "Backend & CRM Integrations",
    verificationBadge: "Built & Verified in Production",
    technologies: ["WhatsApp Cloud API", "Twilio", "PostgreSQL", "Google Sheets API", "REST APIs", "Spring Boot 3"],
    summary:
      "Robust data synchronization connecting conversational agents to CRMs, Google Sheets, email providers, and webhooks.",
    capabilities: [
      "WhatsApp Business and web chat bidirectional messaging pipelines",
      "CRM and Google Sheets synchronization with deduplication and idempotency guards",
      "Stateless RESTful API endpoint development following clean architecture",
      "Webhook listeners with timing-safe HMAC signature verification",
      "Zero client customer data stored on intermediary developer infrastructure",
    ],
    evidence: {
      title: "RealGuard CRM Pipeline",
      slug: "realguard",
      description: "WhatsApp real estate workflow connecting lead intake to deterministic EMI calculations and CRM logging.",
    },
  },
  {
    id: "security-guardrails",
    category: "Security, Privacy & Data Control",
    verificationBadge: "Built & Verified in Production",
    technologies: ["Human Approval Nodes", "Data Boundary Isolation", "HMAC-SHA256", "Rate Limiting"],
    summary:
      "Defensive engineering ensuring client data stays under client ownership with strict human oversight.",
    capabilities: [
      "Strict data boundary: Zero client customer data stored on developer servers",
      "Mandatory human approval checkpoints for sensitive business workflows",
      "Defensive prompt engineering preventing prompt injection and unauthorized execution",
      "Token throttles and rate-limiting to prevent unexpected third-party API spend",
      "Complete code and workflow handover to client-owned repositories and servers",
    ],
    evidence: {
      title: "ShivSastra Security Architecture",
      slug: "shivsastra",
      description: "Automated test suites, server-authoritative validation, and cryptographic webhook verification.",
    },
  },
  {
    id: "web-engineering",
    category: "Web & Interface Engineering",
    verificationBadge: "Built & Verified in Production",
    technologies: ["React 19", "Next.js 16 (App Router)", "TypeScript", "Tailwind CSS"],
    summary:
      "Modern, responsive web applications and chat interfaces engineered for performance, clean typography, and zero layout shift.",
    capabilities: [
      "Responsive user interfaces tested across viewports with zero horizontal overflow",
      "Web chat widgets embedded seamlessly into client websites",
      "Strict TypeScript type-safety across all components, actions, and validation schemas",
      "Semantic HTML5 structure and accessible ARIA attributes with keyboard focus rings",
    ],
    evidence: {
      title: "ShivSastra Platform",
      slug: "shivsastra",
      description: "Production Next.js 16 App Router application with sub-second load times and zero layout shift.",
    },
  },
];

export const WEBSITE_ENGINEERING_SHOWCASE: WebsiteEngineeringArea[] = [
  {
    id: "security-hygiene",
    title: "Application Security & Data Boundaries",
    badge: "Verified in Test Suite",
    summary:
      "Security is engineered defensively at the architectural level: zero client data storage on external servers, strict schema validation, and human approval checkpoints.",
    highlights: [
      "Data Sovereignty: Client customer data stays strictly on client-owned accounts (n8n, Google Sheets, CRM)",
      "Human-in-the-Loop: Critical workflows pause for human approval before sending external messages or executing updates",
      "Rate Limiting & Safety: Built-in guards prevent runaway API calls and protect free-tier quotas",
      "Cryptographic Verification: Timing-safe HMAC-SHA256 verification on incoming webhooks",
      "Automated Security Suite: 25-point automated test suite verifying access controls and tamper rejection",
    ],
    transparencyNote:
      "Note: These measures represent defensive engineering best practices ensuring strict data boundaries and operational reliability.",
  },
  {
    id: "technical-seo",
    title: "SEO & Search Engine Discoverability",
    badge: "Verified in Code",
    summary:
      "This platform implements production-grade technical SEO to ensure clean crawlability and structured discovery by search engines and LLMs.",
    highlights: [
      "Dynamic XML Sitemap: Auto-generated at /sitemap.xml with accurate change frequencies",
      "Search Engine Directives: Configured robots.txt with crawler directives",
      "Canonical URL Integrity: Absolute self-referencing canonical URLs on every public route",
      "Social Sharing Metadata: Dynamic Open Graph 1200x630 cards and Twitter Summary Large Cards",
      "Structured Data / JSON-LD: Schema.org graphs for WebPage, Service packages, and FAQPage",
      "AI Discoverability: Curated /llms.txt manifest providing clear context for modern AI search assistants",
    ],
    transparencyNote:
      "Note: Sitemap accessibility and metadata correctness provide discovery pathways for search engines.",
  },
  {
    id: "performance-accessibility",
    title: "Performance, Layout Stability & Accessibility",
    badge: "Verified in Build",
    summary:
      "A fast, responsive user experience built with semantic HTML, native browser capabilities, and lightweight styling.",
    highlights: [
      "Responsive Layout: Fluid layouts tested across 320px to 1440px+ viewports with zero horizontal overflow",
      "Layout Stability: Zero Cumulative Layout Shift (CLS) through explicit dimensions and font display strategies",
      "Accessible Interactions: Semantic HTML5 landmarks, descriptive alt text on all images, and visible keyboard focus rings",
      "Static Pre-rendering: Next.js 16 App Router with Turbopack generating static HTML with Incremental Static Regeneration",
    ],
    transparencyNote:
      "Note: Performance observations are based on local Next.js production builds and clean code architecture.",
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "starter-agent-setup",
    code: "AGT-01",
    title: "Starter Agent Setup",
    category: "Agentic AI Setup",
    startingPrice: "₹22,000 – ₹35,000",
    pricingNote: "Fixed-scope engagement based on channel and simple tools. Includes 7-Day Free Trial for Small Organisations.",
    idealFor: "Small businesses, clinics, agencies, and lean teams wanting an automated lead qualifier, enquiry handler, or basic support agent.",
    turnaround: "5–8 days",
    revisions: "1 round of workflow tuning & prompt refinement",
    summary:
      "1 focused agent (Lead Qualifier or Basic Support or Enquiry Handler) connected to WhatsApp or website chat with simple tools and free-tier safety.",
    plainEnglishOutcome:
      "Deploy 1 focused agent that qualifies incoming leads or answers routine enquiries 24/7 over WhatsApp or web chat, logging data straight to Google Sheets or email.",
    technicalScope: [
      "1 focused agent (Lead Qualifier or Basic Support or Enquiry Handler)",
      "WhatsApp or website chat connection",
      "Simple tools (Google Sheet / Email)",
      "Rate limiting for free-tier safety",
      "Setup on n8n self-hosted or Make free tier",
      "Complete documentation + 7-Day Free Trial for Small Organisations",
    ],
    deliverables: [
      "1 focused agent (Lead Qualifier or Basic Support or Enquiry Handler)",
      "WhatsApp or website chat connection",
      "Simple tools (Google Sheet / Email)",
      "Rate limiting for free-tier safety",
      "Setup on n8n self-hosted or Make free tier",
      "Documentation + 7-Day Free Trial for Small Organisations",
    ],
    exclusions: [
      "Multi-agent collaboration or autonomous complex decision-making (available in Business / Full)",
      "Third-party messaging/LLM token fees (paid directly to Meta, Twilio, OpenAI, or Groq)",
    ],
    proofProject: {
      title: "RealGuard",
      slug: "realguard",
      description: "WhatsApp conversational workflow connecting customer chat to deterministic calculations and CRM logging.",
      ctaLabel: "See how I built similar systems",
    },
    contactSubject: "Start with 7-Day Free Trial (Starter Agent Setup)",
  },
  {
    id: "business-agent-package",
    code: "AGT-02",
    title: "Business Agent Package",
    category: "Production Agentic Systems",
    startingPrice: "₹55,000 – ₹90,000",
    pricingNote: "Scope-based pricing covering 1–2 production agents, CRM/Sheets integration, human approval points, and 30 days support.",
    idealFor: "Growing businesses wanting multi-step reasoning, external tool calling, CRM synchronization, and human approval checkpoints.",
    turnaround: "10–15 days",
    revisions: "2 rounds of prompt refinement & integration reviews",
    summary:
      "1–2 production agents (Lead Qualifier + Support/Follow-up) with multi-step reasoning, tool calling, human approval points, and 30 days support.",
    plainEnglishOutcome:
      "Deploy 1–2 production agents that reason through multi-step customer inquiries, call external tools, sync with your CRM or Sheets, and pause for human approval on high-value actions.",
    technicalScope: [
      "1–2 production agents (Lead Qualifier + Support/Follow-up)",
      "Multi-step reasoning + tool calling",
      "WhatsApp + CRM/Sheet integration",
      "Human approval points",
      "Error handling + logging",
      "Free-tier optimised architecture",
      "30 days support",
    ],
    deliverables: [
      "1–2 production agents (Lead Qualifier + Support/Follow-up)",
      "Multi-step reasoning + tool calling",
      "WhatsApp + CRM/Sheet integration",
      "Human approval points",
      "Error handling + logging",
      "Free-tier optimised",
      "30 days support",
    ],
    exclusions: [
      "Irreversible autonomous financial transactions without human sign-off",
      "Third-party provider API fees (billed directly to client-owned accounts)",
    ],
    proofProject: {
      title: "Yojna Setu",
      slug: "yojna-setu",
      description: "Conversational Groq LLM profile extraction coupled with a deterministic eligibility evaluation engine.",
      ctaLabel: "See how I built similar systems",
    },
    contactSubject: "Business Agent Package Quote",
  },
  {
    id: "full-agentic-system",
    code: "AGT-03",
    title: "Full Agentic System",
    category: "Enterprise Multi-Agent Architecture",
    startingPrice: "₹1,10,000 – ₹1,80,000",
    pricingNote: "Comprehensive architecture covering multi-agent orchestration, custom tools, memory, monitoring, and 60 days support.",
    idealFor: "Organizations requiring multi-agent systems with custom tools, long-term memory, observability, and robust security controls.",
    turnaround: "18–25 days",
    revisions: "Staged integration testing & end-to-end acceptance review",
    summary:
      "Multi-agent system with custom tools, memory, monitoring, self-hosted n8n production setup, advanced security controls, and 60 days support.",
    plainEnglishOutcome:
      "Deploy an end-to-end multi-agent system on self-hosted n8n with custom tools, memory, live monitoring, strict security controls, and 60 days of active support.",
    technicalScope: [
      "Multi-agent system architecture",
      "Custom tools + memory",
      "Monitoring and operational observability",
      "Self-hosted n8n production setup",
      "Advanced security controls",
      "60 days support",
    ],
    deliverables: [
      "Multi-agent system",
      "Custom tools + memory",
      "Monitoring",
      "Self-hosted n8n production setup",
      "Advanced security controls",
      "60 days support",
    ],
    exclusions: [
      "Client cloud hosting infrastructure costs (AWS/GCP/DigitalOcean/Hetzner)",
      "Unsanctioned autonomous credential delegation",
    ],
    proofProject: {
      title: "Yojna Setu & RealGuard",
      slug: "yojna-setu",
      description: "Multi-agent reasoning, natural language profile extraction, and deterministic rules-engine workflows.",
      ctaLabel: "See how I built similar systems",
    },
    contactSubject: "Full Agentic System Quote",
  },
];

export const SERVICE_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Scope & Agent Definition",
    description:
      "We define the exact role of your agent (Lead Qualifier, Support, or Multi-Agent System), target channels (WhatsApp or web), and required tool connections.",
    deliverable: "Agent architecture specification & fixed quote",
  },
  {
    step: "02",
    title: "Free-Tier & Security Setup",
    description:
      "We configure your environment on self-hosted n8n or Make free tier. All credentials remain in your control; zero client customer data is stored on developer servers.",
    deliverable: "Isolated workflow environment + security boundaries",
  },
  {
    step: "03",
    title: "Workflow Build & Tool Calling",
    description:
      "We build multi-step reasoning workflows, connect tools (Google Sheets, CRM, Email), and insert mandatory human approval points for high-stakes actions.",
    deliverable: "Working agent workflows with error handling",
  },
  {
    step: "04",
    title: "Testing & 7-Day Free Trial",
    description:
      "We test conversational edge cases and rate limits together. Small organisations activate their 7-day free trial to evaluate real customer interactions risk-free.",
    deliverable: "Verified agent running in staging/trial",
  },
  {
    step: "05",
    title: "Production Handover & Support",
    description:
      "Full handover of workflows, documentation, and credentials to your team, backed by 30 to 60 days of post-launch operational support.",
    deliverable: "Production deployment + support coverage",
  },
];

export const SERVICE_FAQS: ServiceFaq[] = [
  {
    question: "What is your Security Promise regarding customer data?",
    answer:
      "We prioritize security. Data stays in your control • Human approval points included • No customer data stored on my servers • Free-tier safe by design. All workflows run on your own self-hosted n8n instance or your own accounts.",
  },
  {
    question: "How does the 7-day free trial work for small organisations?",
    answer:
      "For small organisations opting for the Starter Agent Setup, we deploy the agent in your staging or pilot environment for 7 days at zero upfront risk. You test it with real inquiries and verify its accuracy before final settlement.",
  },
  {
    question: "What does 'free-tier optimised' mean?",
    answer:
      "Third-party AI costs can add up if workflows are poorly designed. We optimize prompt sizes, implement execution batching, configure webhook deduplication, and enforce rate limits so you can operate comfortably within n8n and Make free tiers without surprise cloud bills.",
  },
  {
    question: "How do human approval points work?",
    answer:
      "For sensitive actions—such as sending follow-up quotes, updating CRM deal stages, or handling complex customer complaints—the agent drafts the action and pauses for a human team member to review and approve via WhatsApp, Slack, or email before execution.",
  },
  {
    question: "Who owns the agent code, workflows, and prompts?",
    answer:
      "You retain 100% ownership of all workflows, prompt libraries, and configuration files. They are deployed directly into your own infrastructure or accounts with zero vendor lock-in.",
  },
  {
    question: "What real-world proof do you have of agentic implementations?",
    answer:
      "See our active case studies: Yojna Setu (multilingual conversational scheme extraction combined with deterministic rules) and RealGuard (WhatsApp real-estate automation assistant connecting chat to deterministic EMI calculations and CRM logging).",
  },
  {
    question: "How do we get started?",
    answer:
      "Use the Request a Quote form below, email directly at theshivamshukla.4uu@gmail.com, or reach out on Contra or LinkedIn. We review your requirements and provide an itemized proposal within 24 hours.",
  },
];
