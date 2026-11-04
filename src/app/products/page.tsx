import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonStyles } from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Products & Software Ecosystem — JIOSI",
  description:
    "Explore JIOSI's software ecosystem: JIOSI Inbox email productivity SaaS, production n8n AI agent toolkits, and system prompt architectures.",
  alternates: {
    canonical: absoluteUrl("/products"),
  },
  openGraph: {
    title: "Products & Software Ecosystem — JIOSI",
    description:
      "Explore JIOSI's software ecosystem: JIOSI Inbox email productivity SaaS, production n8n AI agent toolkits, and system prompt architectures.",
    url: absoluteUrl("/products"),
    type: "website",
    siteName: "JIOSI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JIOSI Products",
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
    badgeVariant: "primary" as const,
    description:
      "Ready-to-deploy n8n workflow template that autonomously engages, qualifies, and enriches incoming leads before routing them to your CRM or inbox.",
    features: [
      "Production-ready n8n workflow JSON blueprint",
      "Lead scoring logic (budget, timeline, intent)",
      "Google Sheets & CRM bidirectional sync",
      "Rate-limiting and anti-abuse safeguards",
    ],
    slug: "n8n-lead-qualifier-agent-pack",
    image: "/images/backgrounds/store.webp",
  },
  {
    id: "whatsapp-support-kit",
    title: "WhatsApp Support Agent Kit",
    category: "Complete Agent Kits",
    price: "₹3,999",
    status: "Available for Download",
    badgeVariant: "cyan" as const,
    description:
      "Multi-step customer support agent engineered for WhatsApp Business API with human handoff triggers and automated issue resolution.",
    features: [
      "Twilio / WhatsApp Business Cloud API setup",
      "Context-aware FAQs & query routing",
      "Human takeover escalation mechanism",
      "Customer interaction audit log format",
    ],
    slug: "whatsapp-support-agent-kit",
    image: "/images/projects/yojna-setu/evidence-whatsapp-discovery.png",
  },
  {
    id: "sales-followup-pack",
    title: "Sales Follow-up Agent Pack",
    category: "AI Agent Templates",
    price: "₹4,499",
    status: "Available for Download",
    badgeVariant: "primary" as const,
    description:
      "Intelligent lead nurture and re-engagement agent that detects response sentiment, schedules follow-ups, and keeps pipelines moving.",
    features: [
      "Multi-day re-engagement scheduling",
      "Sentiment classification and objection detection",
      "Google Calendar & CRM meeting sync",
      "Human approval check before discount offers",
    ],
    slug: "sales-followup-agent-pack",
    image: "/images/backgrounds/store.webp",
  },
  {
    id: "small-business-bundle",
    title: "Small Business Agent Bundle",
    category: "Complete Agent Kits",
    price: "₹9,999",
    status: "Available for Download",
    badgeVariant: "warning" as const,
    description:
      "All-in-one automation suite for small businesses. Includes Lead Qualifier, WhatsApp Support, Sales Follow-up, and complete documentation.",
    features: [
      "All 5 production agent templates included",
      "Comprehensive deployment & environment guide",
      "Pre-configured webhook security listeners",
      "Priority email setup assistance",
    ],
    slug: "small-business-agent-bundle",
    image: "/images/backgrounds/store.webp",
  },
  {
    id: "agent-prompt-library",
    title: "Agent System Prompt Library",
    category: "Prompt & Schema Packs",
    price: "₹2,499",
    status: "Available for Download",
    badgeVariant: "neutral" as const,
    description:
      "Battle-tested system instructions, guardrails, and structured JSON schemas for building dependable, hallucination-free business agents.",
    features: [
      "50+ verified system instructions across industries",
      "Strict zero-leakage anti-jailbreak guardrails",
      "Structured JSON output schemas for tool calling",
      "Tone calibration matrices for customer-facing bots",
    ],
    slug: "agent-system-prompt-library",
    image: "/images/backgrounds/store.webp",
  },
  {
    id: "production-readiness-kit",
    title: "Production Readiness & Reliability Kit",
    category: "Developer Toolkits",
    price: "₹1,499",
    status: "Available for Download",
    badgeVariant: "neutral" as const,
    description:
      "Reliability engineering patterns for n8n and webhook pipelines. Includes automatic retry logic, error notifications, and token compression.",
    features: [
      "Error notification workflows for Telegram/Slack",
      "Webhook idempotency & deduplication nodes",
      "Token usage monitoring and spend caps",
      "Self-hosted Docker Compose deployment recipe",
    ],
    slug: "n8n-free-tier-kit",
    image: "/images/backgrounds/store.webp",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* =======================================================
          1. DARK NAVY HERO BANNER
          ======================================================= */}
      <section className="relative w-full bg-[#0B1020] text-white pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-indigo-500/20 via-violet-500/10 to-transparent blur-3xl" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-600 text-xs font-mono">/</span>
              <span className="text-xs font-mono text-cyan-300 font-semibold">Products</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Software Systems &amp; Digital Toolkits
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our standalone SaaS productivity applications, production-tested agentic workflow templates, and system prompt architectures.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          2. FLAGSHIP PRODUCT: JIOSI INBOX
          ======================================================= */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-indigo-600">
                01 / Flagship SaaS Application
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-950 via-[#111A2E] to-[#0B1020] text-white p-8 md:p-12 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan" dot size="md">
                      Production Preview
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      v0.1.0 · Active Beta
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    JIOSI Inbox
                  </h2>

                  <p className="font-sans text-base text-slate-300 leading-relaxed">
                    A distraction-free, keyboard-first email productivity platform engineered with Spring Boot 3.3.5 and React 18. Built for founders, developers, and high-output teams.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Instant AI thread summaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Keyboard-first triage (⌘K, E, S)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Gmail &amp; Google Workspace sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Neon Serverless PostgreSQL</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/products/inbox"
                      className={buttonStyles({
                        variant: "primary",
                        size: "md",
                        className: "font-semibold shadow-md shadow-indigo-600/30",
                      })}
                    >
                      <span>Read Product Overview</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="https://inbox.jiosi.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({
                        variant: "glass",
                        size: "md",
                        className: "text-slate-200 hover:text-white",
                      })}
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/15 shadow-2xl group">
                    <Image
                      src="/images/products/inbox/inbox-desktop-overview.png"
                      alt="JIOSI Inbox SaaS Platform Interface"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          3. DIGITAL AGENT TEMPLATES & TOOLKITS
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-14">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <SectionHeader
                badge="Agent Toolkits"
                badgeVariant="primary"
                title="Production AI Agent Kits & Blueprints"
                description="Battle-tested n8n workflows, prompt packages, and automation templates ready for deployment on your own infrastructure."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DIGITAL_PRODUCTS.map((product) => (
                <Card
                  key={product.id}
                  className="p-6 md:p-8 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-indigo-600 font-semibold">
                        {product.category}
                      </span>
                      <span className="font-mono text-base font-extrabold text-slate-900">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">
                      <Link
                        href={`/store/${product.slug}`}
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {product.title}
                      </Link>
                    </h3>

                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-2 text-xs font-mono text-slate-600 pt-3 border-t border-slate-100">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Zero vendor lock-in</span>
                    </div>

                    <Link
                      href={`/store/${product.slug}`}
                      className={buttonStyles({
                        variant: "secondary",
                        size: "sm",
                        className: "font-semibold text-xs",
                      })}
                    >
                      <span>Details &amp; Checkout</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          4. CUSTOM ENGINEERING CTA
          ======================================================= */}
      <section className="w-full bg-[#0B1020] text-white py-20 border-t border-white/10">
        <SectionContainer>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need a tailored system engineered for your operations?
            </h2>
            <p className="font-sans text-base text-slate-300 leading-relaxed">
              We design, build, and deploy custom multi-agent workflows, API integrations, and internal tools with guaranteed data privacy.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "font-semibold shadow-xl shadow-indigo-600/30",
                })}
              >
                <span>View Service Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "glass",
                  size: "lg",
                  className: "text-slate-200 hover:text-white border-white/20",
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
