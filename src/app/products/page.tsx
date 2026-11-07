import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Products & Software Ecosystem — SHIVSASTRA",
  description:
    "Explore SHIVSASTRA's software ecosystem: JIOSI Inbox email productivity SaaS, production n8n AI agent toolkits, and system prompt architectures.",
  alternates: {
    canonical: absoluteUrl("/products"),
  },
  openGraph: {
    title: "Products & Software Ecosystem — SHIVSASTRA",
    description:
      "Explore SHIVSASTRA's software ecosystem: JIOSI Inbox email productivity SaaS, production n8n AI agent toolkits, and system prompt architectures.",
    url: absoluteUrl("/products"),
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHIVSASTRA Products",
      },
    ],
  },
};

const DIGITAL_PRODUCTS = [
  {
    id: "n8n-lead-qualifier",
    title: "n8n Lead Qualifier Agent Pack",
    category: "AI Agent Templates",
    price: "₹3,499",
    status: "Available for Download",
    description:
      "Ready-to-deploy n8n workflow template that autonomously engages, qualifies, and enriches incoming leads before routing them to your CRM or inbox.",
    features: [
      "Production-ready n8n workflow JSON blueprint",
      "Lead scoring logic (budget, timeline, intent)",
      "Google Sheets & CRM bidirectional sync",
      "Rate-limiting and anti-abuse safeguards",
    ],
    slug: "n8n-lead-qualifier-agent-pack",
  },
  {
    id: "whatsapp-support-kit",
    title: "WhatsApp Support Agent Kit",
    category: "Complete Agent Kits",
    price: "₹3,999",
    status: "Available for Download",
    description:
      "Multi-step customer support agent engineered for WhatsApp Business API with human handoff triggers and automated issue resolution.",
    features: [
      "Twilio / WhatsApp Business Cloud API setup",
      "Context-aware FAQs & query routing",
      "Human takeover escalation mechanism",
      "Customer interaction audit log format",
    ],
    slug: "whatsapp-support-agent-kit",
  },
  {
    id: "sales-followup-pack",
    title: "Sales Follow-up Agent Pack",
    category: "AI Agent Templates",
    price: "₹4,499",
    status: "Available for Download",
    description:
      "Automated multi-channel re-engagement sequence with sentiment-aware response scheduling and CRM status updating.",
    features: [
      "Multi-channel cadence logic (Email + WhatsApp)",
      "Sentiment classification and intent scoring",
      "Automated appointment scheduling handoff",
      "Opt-out and suppression list compliance",
    ],
    slug: "sales-followup-agent",
  },
  {
    id: "small-business-bundle",
    title: "Small Business Agent Bundle",
    category: "Bundle Editions",
    price: "₹9,999",
    status: "Available for Download",
    description:
      "Complete operational suite combining lead qualification, WhatsApp customer support, and CRM sync blueprints.",
    features: [
      "All 5 individual agent blueprints included",
      "Comprehensive setup documentation & video guides",
      "Architecture diagram & data flow blueprints",
      "Production reliability retry modules",
    ],
    slug: "small-business-agent-bundle",
  },
  {
    id: "agent-prompt-library",
    title: "Agent System Prompt Library",
    category: "Prompt & Schema Packs",
    price: "₹2,499",
    status: "Available for Download",
    description:
      "Battle-tested system instructions, guardrails, and structured JSON schemas for building dependable, hallucination-free business agents.",
    features: [
      "50+ verified system instructions across industries",
      "Strict zero-leakage anti-jailbreak guardrails",
      "Structured JSON output schemas for tool calling",
      "Tone calibration matrices for customer-facing bots",
    ],
    slug: "agent-system-prompt-library",
  },
  {
    id: "production-readiness-kit",
    title: "Production Readiness & Reliability Kit",
    category: "Developer Toolkits",
    price: "₹1,499",
    status: "Available for Download",
    description:
      "Reliability engineering patterns for n8n and webhook pipelines. Includes automatic retry logic, error notifications, and token compression.",
    features: [
      "Error notification workflows for Telegram/Slack",
      "Webhook idempotency & deduplication nodes",
      "Token usage monitoring and spend caps",
      "Self-hosted Docker Compose deployment recipe",
    ],
    slug: "n8n-production-reliability-kit",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F2ED] text-[#1A1D20]">
      {/* 1. WARM EDITORIAL HERO BANNER */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30 overflow-hidden">
        {/* Warm atmospheric lighting wash */}
        <div className="hero-glow-warm pointer-events-none" />
        <div className="hero-glow-right pointer-events-none" />

        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-mono text-[#565656] hover:text-[#1A1D20] transition-colors">
                Home
              </Link>
              <span className="text-[#C09F80] text-xs font-mono">/</span>
              <span className="text-xs font-mono text-[#76323F] font-semibold">Products</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
              Software Systems &amp; Digital Toolkits
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#565656] leading-relaxed">
              Explore our standalone SaaS productivity applications, production-tested agentic workflow templates, and system prompt architectures.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* 2. FLAGSHIP PRODUCT: JIOSI INBOX */}
      <section className="w-full py-16 md:py-24 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#76323F]">
                01 / Flagship SaaS Application
              </span>
            </div>

            <div className="border-t-2 border-t-[#76323F] border-x border-b border-[#D7CEC7] bg-[#FAF8F5] p-8 md:p-12 shadow-[6px_6px_0px_0px_#C09F80]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" dot size="md">
                      Production Platform
                    </Badge>
                    <span className="text-xs font-mono text-[#565656]">
                      SaaS Client
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1D20]">
                    JIOSI Inbox
                  </h2>

                  <p className="font-sans text-base text-[#565656] leading-relaxed">
                    A distraction-free, high-performance AI email productivity platform engineered with Spring Boot 3.3.5 and React 18. Built for founders, developers, and high-output teams.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#1A1D20]">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#76323F] shrink-0" />
                      <span>Instant AI thread summaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#76323F] shrink-0" />
                      <span>Rapid keyboard navigation &amp; triage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#76323F] shrink-0" />
                      <span>Gmail &amp; Google Workspace sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#76323F] shrink-0" />
                      <span>Neon Serverless PostgreSQL</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/products/inbox"
                      className={buttonStyles({
                        variant: "primary",
                        size: "md",
                        className: "bg-[#76323F] hover:bg-[#5a2530] text-[#FAF8F5] border-none shadow-[2px_2px_0px_0px_#C09F80]",
                      })}
                    >
                      <span>Read Product Overview</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>

                    <a
                      href="https://inbox.jiosi.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({
                        variant: "secondary",
                        size: "md",
                        className: "border-[#D7CEC7] bg-[#FAF8F5] text-[#1A1D20] hover:border-[#76323F]",
                      })}
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-4 h-4 text-[#76323F]" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-1 border border-[#D7CEC7] bg-[#F5F2ED] shadow-[4px_4px_0px_0px_#D7CEC7] group">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1D20]">
                      <Image
                        src="/images/products/inbox/inbox-desktop-overview.png"
                        alt="JIOSI Inbox SaaS Platform Interface"
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. DIGITAL AGENT TEMPLATES & TOOLKITS */}
      <section className="w-full py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-14">
            <div className="flex items-center justify-between pb-6 border-b border-[#C09F80]/30">
              <SectionHeader
                badge="Agent Toolkits"
                badgeVariant="primary"
                title="Production AI Agent Kits &amp; Blueprints"
                description="Battle-tested n8n workflows, prompt packages, and automation templates ready for deployment on your own infrastructure."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DIGITAL_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="p-6 md:p-8 space-y-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#76323F] font-semibold">
                        {product.category}
                      </span>
                      <span className="font-mono text-base font-bold text-[#76323F]">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors leading-snug">
                      <Link
                        href={`/store/${product.slug}`}
                        className="hover:text-[#76323F] transition-colors"
                      >
                        {product.title}
                      </Link>
                    </h3>

                    <p className="font-sans text-sm text-[#565656] leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-2 text-xs font-mono text-[#565656] pt-3 border-t border-[#D7CEC7]">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#D7CEC7] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#565656]">
                      <ShieldCheck className="w-4 h-4 text-[#76323F]" />
                      <span>Zero vendor lock-in</span>
                    </div>

                    <Link
                      href={`/store/${product.slug}`}
                      className={buttonStyles({
                        variant: "primary",
                        size: "sm",
                        className: "bg-[#76323F] hover:bg-[#5a2530] text-[#FAF8F5] border-none shadow-[2px_2px_0px_0px_#C09F80]",
                      })}
                    >
                      <span>Details &amp; Checkout</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. CUSTOM ENGINEERING CTA (Grounded Contrast) */}
      <section className="w-full bg-[#1A1D20] text-[#F5F2ED] py-20 border-t border-[#C09F80]/30">
        <SectionContainer>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#F5F2ED]">
              Need a tailored system engineered for your operations?
            </h2>
            <p className="font-sans text-base text-[#D7CEC7] leading-relaxed">
              We design, build, and deploy custom multi-agent workflows, API integrations, and internal tools with guaranteed data privacy.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                })}
              >
                <span>View Service Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "dark-inverse",
                  size: "lg",
                })}
              >
                <span>Request Custom Architecture</span>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
