import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { absoluteUrl, serializeJsonLd } from "@/lib/site";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Plans — Transparent Agentic AI & Software | JIOSI",
  description:
    "Transparent pricing for JIOSI Agentic AI systems, workflow automation packages, and digital developer toolkits. Built with human-in-the-loop safeguards and 7-day evaluations.",
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
  openGraph: {
    title: "Pricing & Plans — JIOSI",
    description:
      "Transparent pricing for JIOSI Agentic AI systems, workflow automation packages, and digital developer toolkits.",
    url: absoluteUrl("/pricing"),
    type: "website",
    siteName: "JIOSI",
  },
};

const DIGITAL_PRODUCTS = [
  {
    title: "n8n Lead Qualifier Agent Pack",
    price: "₹3,499",
    slug: "n8n-lead-qualifier-agent",
    tag: "Workflow Pack",
    desc: "Autonomous conversational qualifier with structured CRM payload routing and anti-loop safeguards.",
  },
  {
    title: "WhatsApp Support Agent Kit",
    price: "₹3,999",
    slug: "whatsapp-support-agent-kit",
    tag: "Customer Ops",
    desc: "24/7 automated tier-1 customer inquiries, business hour routing, and human escalation triggers.",
  },
  {
    title: "Sales Follow-up Agent Pack",
    price: "₹4,499",
    slug: "sales-followup-agent",
    tag: "Revenue Ops",
    desc: "Automated multi-channel re-engagement sequence with sentiment-aware response scheduling.",
  },
  {
    title: "Small Business Agent Bundle",
    price: "₹9,999",
    slug: "small-business-agent-bundle",
    tag: "All-in-One",
    desc: "Full operational stack: Lead Qualifier + WhatsApp Support + CRM Sync + Production Reliability nodes.",
  },
  {
    title: "Agent System Prompt Library",
    price: "₹2,499",
    slug: "agent-system-prompt-library",
    tag: "Prompts & Rules",
    desc: "40+ production-tested system prompts with strict JSON schema outputs and hallucination defenses.",
  },
  {
    title: "n8n Production Reliability Kit",
    price: "₹1,499",
    slug: "n8n-free-tier-survival-kit",
    tag: "Architecture",
    desc: "Essential reliability nodes: webhook deduplication, token throttles, retry queues, and local state adapters.",
  },
];

export default function PricingPage() {
  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pricing & Plans — JIOSI",
    description: "Transparent pricing for JIOSI Agentic AI systems and software.",
    url: absoluteUrl("/pricing"),
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pricingJsonLd) }}
      />

      {/* 1. DARK HERO SECTION */}
      <section className="relative w-full bg-[#0B1020] text-white pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial from-indigo-500/20 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />

        <SectionContainer className="relative z-10">
          <InnerPageEntrance delayIndex={0}>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="cyan" dot size="sm">
                  SIMPLE &amp; TRANSPARENT
                </Badge>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Predictable Pricing. Zero Speculation.
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
                Whether you need a fully managed Agentic AI implementation or instant-access production workflow templates, our pricing is scoped, transparent, and bound by clear deliverables.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#services"
                  className={buttonStyles({
                    variant: "primary",
                    size: "md",
                    className: "shadow-lg shadow-indigo-500/20",
                  })}
                >
                  Custom AI Agent Packages ↓
                </a>
                <a
                  href="#products"
                  className={buttonStyles({
                    variant: "glass",
                    size: "md",
                    className: "text-white border-white/20 hover:bg-white/10",
                  })}
                >
                  Digital Product Licenses ↓
                </a>
              </div>
            </div>
          </InnerPageEntrance>
        </SectionContainer>
      </section>

      {/* 2. SECURITY & GUARANTEE BANNER */}
      <section className="relative z-20 -mt-8">
        <SectionContainer>
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1E293B] border border-indigo-500/30 rounded-2xl p-6 md:p-8 text-white shadow-xl shadow-slate-900/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-display font-bold text-lg text-white">
                    We Prioritize Security
                  </span>
                  <Badge variant="success" size="sm">
                    Client Sovereignty
                  </Badge>
                </div>
                <p className="font-sans text-sm text-slate-300">
                  Data stays in your control • Human approval points included • No customer data stored on our servers • Enterprise-grade isolation by design
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Badge variant="cyan" dot size="md">
                  7-Day Evaluation Included
                </Badge>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. CUSTOM AGENTIC AI SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-slate-50 scroll-mt-16">
        <SectionContainer>
          <div className="space-y-16">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Custom Implementations"
                title="Production Agentic AI Service Packages"
                subtitle="End-to-end engineering from system blueprint to live production deployment on your infrastructure."
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Package 1: Starter */}
              <Card variant="standard" className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      AGT-01
                    </span>
                    <span className="text-xs text-slate-500 font-mono">5–8 Days</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      Starter Agent Setup
                    </h2>
                    <div className="font-display text-3xl font-extrabold text-slate-900">
                      ₹22,000 – ₹35,000
                    </div>
                    <p className="text-xs text-slate-500">
                      Single milestone, evaluated in staging before final payment.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-1">
                    <span className="font-sans text-xs font-bold text-indigo-900 block">
                      7-Day Free Trial for Small Organisations
                    </span>
                    <p className="font-sans text-[11px] text-indigo-700">
                      Evaluate with real customer inquiries in staging/pilot before final settlement.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>1 focused production agent (Lead Qualifier or Support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>WhatsApp or Webchat interface connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Google Sheets / CRM webhook integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Rate limiting &amp; anomaly protection</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href="/contact?subject=Starter%20Agent%20Setup%20(7-Day%20Trial)#quote"
                    className={buttonStyles({
                      variant: "secondary",
                      size: "lg",
                      className: "w-full justify-center text-xs font-bold uppercase tracking-wider",
                    })}
                  >
                    <span>Start with 7-Day Free Trial</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </Card>

              {/* Package 2: Business */}
              <Card
                variant="elevated"
                className="p-8 flex flex-col justify-between space-y-6 ring-2 ring-indigo-500 shadow-xl relative"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="sm" className="shadow-md">
                    RECOMMENDED FOR GROWING BUSINESSES
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      AGT-02
                    </span>
                    <span className="text-xs text-slate-500 font-mono">10–15 Days</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      Business Agent Package
                    </h2>
                    <div className="font-display text-3xl font-extrabold text-slate-900">
                      ₹55,000 – ₹90,000
                    </div>
                    <p className="text-xs text-slate-500">
                      50% deposit upon kickoff, balance upon verified staging sign-off.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>1–2 multi-step production agents (Qualifier + Support/Follow-up)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>External API tool-calling &amp; database sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Human approval checkpoints for sensitive actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>14 days post-deployment monitoring &amp; adjustments</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href="/contact?subject=Business%20Agent%20Package%20Inquiry#quote"
                    className={buttonStyles({
                      variant: "primary",
                      size: "lg",
                      className: "w-full justify-center text-xs font-bold uppercase tracking-wider",
                    })}
                  >
                    <span>Discuss Business Package</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </Card>

              {/* Package 3: Full */}
              <Card variant="standard" className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      AGT-03
                    </span>
                    <span className="text-xs text-slate-500 font-mono">3–5 Weeks</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-bold text-slate-900">
                      Full Agentic System
                    </h2>
                    <div className="font-display text-3xl font-extrabold text-slate-900">
                      ₹1,10,000 – ₹1,80,000
                    </div>
                    <p className="text-xs text-slate-500">
                      Structured milestone deliverables with dedicated architecture sprint.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Complete multi-agent workflow orchestration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Supervisor agent coordinating specialized sub-agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Full audit logging &amp; failover mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>30 days dedicated warranty &amp; prompt retraining</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href="/contact?subject=Full%20Agentic%20System%20Consultation#quote"
                    className={buttonStyles({
                      variant: "secondary",
                      size: "lg",
                      className: "w-full justify-center text-xs font-bold uppercase tracking-wider",
                    })}
                  >
                    <span>Request Architecture Review</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. DIGITAL PRODUCT LICENSES */}
      <section id="products" className="py-20 md:py-28 bg-white border-t border-slate-200 scroll-mt-16">
        <SectionContainer>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SectionHeader
                  badge="Digital Toolkits"
                  title="Self-Hosted Agent Licenses"
                  subtitle="Production-tested n8n JSON templates, prompt libraries, and architecture kits. Download immediately upon secure Razorpay checkout."
                />
              </div>

              <Link
                href="/store"
                className={buttonStyles({
                  variant: "outline",
                  size: "md",
                  className: "shrink-0",
                })}
              >
                <span>Browse Full Store Catalog</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIGITAL_PRODUCTS.map((product) => (
                <div
                  key={product.slug}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-indigo-600 font-semibold uppercase tracking-wider">
                        {product.tag}
                      </span>
                      <span className="font-display font-extrabold text-lg text-slate-900">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {product.desc}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium font-mono pt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>We prioritize security</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Instant Access
                    </span>
                    <Link
                      href={`/store/${product.slug}`}
                      className={buttonStyles({
                        variant: "primary",
                        size: "sm",
                        className: "text-xs font-semibold",
                      })}
                    >
                      <span>Buy License</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 5. JIOSI INBOX SAAS PRICING PREVIEW */}
      <section className="py-20 md:py-28 bg-slate-900 text-white border-t border-slate-800">
        <SectionContainer>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <Badge variant="cyan" dot size="sm">
                FLAGSHIP PRODUCT
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                JIOSI Inbox Cloud &amp; Community Edition
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                The high-performance keyboard-first email client for power users and founders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Community */}
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">
                    Community Edition
                  </span>
                  <div className="font-display text-3xl font-extrabold text-white">
                    Free / Open Source
                  </div>
                  <p className="text-xs text-slate-400">
                    Self-host on your own infrastructure with Spring Boot &amp; PostgreSQL.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Sub-50ms thread triage &amp; navigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Command palette (⌘K) &amp; single-key hotkeys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Local encryption &amp; private credential storage</span>
                  </li>
                </ul>

                <a
                  href="https://inbox.jiosi.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "glass",
                    size: "md",
                    className: "w-full justify-center text-white border-white/20 hover:bg-white/10",
                  })}
                >
                  <span>Launch Web Client</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>

              {/* Cloud Pro */}
              <div className="bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-indigo-500/40 rounded-2xl p-8 space-y-6 relative">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider">
                      Managed Cloud Pro
                    </span>
                    <Badge variant="primary" size="sm">
                      Coming Soon
                    </Badge>
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    Early Access
                  </div>
                  <p className="text-xs text-slate-400">
                    Zero-maintenance managed infrastructure with AI thread summarization.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Deterministic priority triage &amp; VIP filters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Real-time webhook sync &amp; multi-account switching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>AI auto-drafting with human review gates</span>
                  </li>
                </ul>

                <Link
                  href="/products/inbox"
                  className={buttonStyles({
                    variant: "primary",
                    size: "md",
                    className: "w-full justify-center shadow-lg shadow-indigo-500/20",
                  })}
                >
                  <span>Read Product Overview</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 6. FAQ & CONSULTATION CTA */}
      <section className="py-20 md:py-28 bg-white">
        <SectionContainer>
          <div className="max-w-3xl mx-auto space-y-12">
            <SectionHeader
              badge="Pricing FAQ"
              title="Common Questions on Rates &amp; Terms"
              subtitle="Clear guidelines on billing milestones, intellectual property, and revisions."
            />

            <div className="space-y-6 divide-y divide-slate-100">
              <div className="pt-6 space-y-2">
                <h4 className="font-display font-bold text-base text-slate-900">
                  How does the 7-Day Free Trial on Starter Agent Setup work?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  We deploy your scoped lead qualifier or support agent to your staging/pilot channel. You and your team evaluate its live responses and data capture for 7 full calendar days. If it meets your criteria, we finalize settlement and hand over all workflow credentials. If you decide not to proceed, you pay nothing.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="font-display font-bold text-base text-slate-900">
                  Who owns the intellectual property and code?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  You do. Upon project completion and payment settlement, 100% of custom workflow JSONs, system prompts, API integrations, and documentation belong exclusively to your organization.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="font-display font-bold text-base text-slate-900">
                  What ongoing costs are required to run the agents?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Our systems are engineered for operational frugality. If you self-host n8n on a $5/mo VPS, your only operational costs are nominal model inference tokens (e.g. Groq, OpenAI, or Anthropic API fees, typically $5–$25/month for moderate business volumes).
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "shadow-lg shadow-indigo-500/20",
                })}
              >
                <span>Request Custom Pricing Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
