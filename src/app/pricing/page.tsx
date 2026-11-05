import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { absoluteUrl, serializeJsonLd } from "@/lib/site";
import {
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Plans — Transparent Agentic AI & Software | SHIVSASTRA",
  description:
    "Transparent pricing for SHIVSASTRA Agentic AI systems, workflow automation packages, and digital developer toolkits. Built with human-in-the-loop safeguards and 7-day evaluations.",
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
  openGraph: {
    title: "Pricing & Plans — SHIVSASTRA",
    description:
      "Transparent pricing for SHIVSASTRA Agentic AI systems, workflow automation packages, and digital developer toolkits.",
    url: absoluteUrl("/pricing"),
    type: "website",
    siteName: "SHIVSASTRA",
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
    slug: "n8n-production-reliability-kit",
    tag: "Architecture",
    desc: "Essential reliability nodes: webhook deduplication, token throttles, retry queues, and local state adapters.",
  },
];

export default function PricingPage() {
  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pricing & Plans — SHIVSASTRA",
    description: "Transparent pricing for SHIVSASTRA Agentic AI systems and software.",
    url: absoluteUrl("/pricing"),
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#F5F2ED] text-[#1A1D20]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pricingJsonLd) }}
      />

      {/* 1. WARM EDITORIAL HERO SECTION */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30">
        <SectionContainer className="relative z-10">
          <InnerPageEntrance delayIndex={0}>
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                <span>SIMPLE &amp; TRANSPARENT</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
                Predictable Pricing. Zero Speculation.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#565656] leading-relaxed">
                Whether you need a fully managed Agentic AI implementation or instant-access production workflow templates, our pricing is scoped, transparent, and bound by clear deliverables.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#services"
                  className={buttonStyles({
                    variant: "primary",
                    size: "md",
                  })}
                >
                  Custom AI Agent Packages ↓
                </a>
                <a
                  href="#products"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "md",
                  })}
                >
                  Digital Product Licenses ↓
                </a>
              </div>
            </div>
          </InnerPageEntrance>
        </SectionContainer>
      </section>

      {/* 2. SECURITY & GUARANTEE BANNER (Grounded Contrast) */}
      <section className="relative z-20 -mt-6">
        <SectionContainer>
          <div className="bg-[#1A1D20] border border-[#C09F80]/40 p-6 md:p-8 text-[#F5F2ED] shadow-[4px_4px_0px_0px_#565656]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C09F80]" />
                  <span className="font-display text-lg text-[#F5F2ED]">
                    Client-Owned Infrastructure &amp; Rigorous Privacy
                  </span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40">
                    Client Sovereignty
                  </span>
                </div>
                <p className="font-sans text-sm text-[#D7CEC7]">
                  Data stays in your control • Human approval points included • Zero customer data stored on intermediary servers • Enterprise-grade isolation by design
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-xs uppercase px-2.5 py-1 bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40">
                  7-Day Evaluation Included
                </span>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. CUSTOM AGENTIC AI SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30 scroll-mt-16">
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
              <div className="p-8 flex flex-col justify-between space-y-6 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#C09F80]/20">
                    <span className="font-mono text-xs font-bold text-[#76323F] bg-[#FAF8F5] border border-[#C09F80]/40 px-2.5 py-1">
                      AGT-01
                    </span>
                    <span className="text-xs text-[#565656] font-mono">5–8 Days</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Starter Agent Setup
                    </h2>
                    <div className="font-display text-3xl font-normal text-[#1A1D20]">
                      ₹22,000 – ₹35,000
                    </div>
                    <p className="text-xs text-[#565656]">
                      Single milestone, evaluated in staging before final payment.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F5] border border-[#C09F80]/50 space-y-1">
                    <span className="font-sans text-xs font-bold text-[#1A1D20] block">
                      7-Day Free Trial for Small Organisations
                    </span>
                    <p className="font-sans text-[11px] text-[#565656]">
                      Evaluate with real customer inquiries in staging/pilot before final settlement.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#565656]">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>1 focused production agent (Lead Qualifier or Support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>WhatsApp or Webchat interface connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>Google Sheets / CRM webhook integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>Rate limiting &amp; anomaly protection</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#C09F80]/20">
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
              </div>

              {/* Package 2: Business */}
              <div className="p-8 flex flex-col justify-between space-y-6 bg-[#FAF8F5] border border-[#76323F] shadow-[4px_4px_0px_0px_#76323F] relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 bg-[#76323F] text-[#FFFFFF] border border-[#76323F]">
                    RECOMMENDED FOR GROWING BUSINESSES
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#C09F80]/20">
                    <span className="font-mono text-xs font-bold text-[#76323F] bg-[#FAF8F5] border border-[#C09F80]/40 px-2.5 py-1">
                      AGT-02
                    </span>
                    <span className="text-xs text-[#565656] font-mono">10–15 Days</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Business Agent Package
                    </h2>
                    <div className="font-display text-3xl font-normal text-[#1A1D20]">
                      ₹55,000 – ₹90,000
                    </div>
                    <p className="text-xs text-[#565656]">
                      50% deposit upon kickoff, balance upon verified staging sign-off.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#565656]">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>1–2 multi-step production agents (Qualifier + Support/Follow-up)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>External API tool-calling &amp; database sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>Human approval checkpoints for sensitive actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>14 days post-deployment monitoring &amp; adjustments</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#C09F80]/20">
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
              </div>

              {/* Package 3: Full */}
              <div className="p-8 flex flex-col justify-between space-y-6 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#C09F80]/20">
                    <span className="font-mono text-xs font-bold text-[#76323F] bg-[#FAF8F5] border border-[#C09F80]/40 px-2.5 py-1">
                      AGT-03
                    </span>
                    <span className="text-xs text-[#565656] font-mono">3–5 Weeks</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Full Agentic System
                    </h2>
                    <div className="font-display text-3xl font-normal text-[#1A1D20]">
                      ₹1,10,000 – ₹1,80,000
                    </div>
                    <p className="text-xs text-[#565656]">
                      Structured milestone deliverables with dedicated architecture sprint.
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#565656]">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>Complete multi-agent workflow orchestration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>Supervisor agent coordinating specialized sub-agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>Full audit logging &amp; failover mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                      <span>30 days dedicated warranty &amp; prompt retraining</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#C09F80]/20">
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
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. DIGITAL PRODUCT LICENSES */}
      <section id="products" className="py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30 scroll-mt-16">
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
                  variant: "secondary",
                  size: "md",
                  className: "shrink-0",
                })}
              >
                <span>Browse Full Store Catalog</span>
                <ArrowRight className="w-4 h-4 ml-1 text-[#76323F]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIGITAL_PRODUCTS.map((product) => (
                <div
                  key={product.slug}
                  className="bg-[#FAF8F5] border border-[#C09F80]/60 p-6 flex flex-col justify-between space-y-4 shadow-[2px_2px_0px_0px_#D7CEC7]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#76323F] font-semibold uppercase tracking-wider">
                        {product.tag}
                      </span>
                      <span className="font-mono font-bold text-base text-[#1A1D20]">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-normal text-[#1A1D20]">
                      {product.title}
                    </h3>

                    <p className="text-xs text-[#565656] leading-relaxed font-sans">
                      {product.desc}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#565656] font-mono pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#76323F]" />
                      <span>Client-owned deployment</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C09F80]/20 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#565656] uppercase tracking-wider">
                      Instant Access
                    </span>
                    <Link
                      href={`/store/${product.slug}`}
                      className={buttonStyles({
                        variant: "primary",
                        size: "sm",
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

      {/* 5. JIOSI INBOX SAAS PRICING PREVIEW (Grounded Contrast) */}
      <section className="py-20 md:py-28 bg-[#1A1D20] text-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-none bg-[#C09F80]" />
                <span>FLAGSHIP PRODUCT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#F5F2ED]">
                JIOSI Inbox Cloud &amp; Community Edition
              </h2>
              <p className="text-[#D7CEC7] text-sm md:text-base leading-relaxed">
                The high-performance keyboard-first email client for power users and founders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Community */}
              <div className="bg-[#FAF8F5]/5 border border-[#C09F80]/30 p-8 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#C09F80] font-bold uppercase tracking-wider">
                    Community Edition
                  </span>
                  <div className="font-display text-3xl font-normal text-[#F5F2ED]">
                    Free / Open Source
                  </div>
                  <p className="text-xs text-[#D7CEC7]">
                    Self-host on your own infrastructure with Spring Boot &amp; PostgreSQL.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#D7CEC7]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C09F80]" />
                    <span>Sub-50ms thread triage &amp; navigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C09F80]" />
                    <span>Command palette (⌘K) &amp; single-key hotkeys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C09F80]" />
                    <span>Local encryption &amp; private credential storage</span>
                  </li>
                </ul>

                <a
                  href="https://inbox.jiosi.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "dark-inverse",
                    size: "md",
                    className: "w-full justify-center",
                  })}
                >
                  <span>Launch Web Client</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-[#76323F]" />
                </a>
              </div>

              {/* Cloud Pro */}
              <div className="bg-[#FAF8F5]/5 border border-[#C09F80]/50 p-8 space-y-6 relative">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C09F80] font-bold uppercase tracking-wider">
                      Managed Cloud Pro
                    </span>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40">
                      Early Access
                    </span>
                  </div>
                  <div className="font-display text-3xl font-normal text-[#F5F2ED]">
                    Priority Preview
                  </div>
                  <p className="text-xs text-[#D7CEC7]">
                    Zero-maintenance managed infrastructure with AI thread summarization.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#D7CEC7]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C09F80]" />
                    <span>Deterministic priority triage &amp; VIP filters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C09F80]" />
                    <span>Real-time webhook sync &amp; multi-account switching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C09F80]" />
                    <span>AI auto-drafting with human review gates</span>
                  </li>
                </ul>

                <Link
                  href="/products/inbox"
                  className={buttonStyles({
                    variant: "primary",
                    size: "md",
                    className: "w-full justify-center",
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
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <SectionContainer>
          <div className="max-w-3xl mx-auto space-y-12">
            <SectionHeader
              badge="Pricing FAQ"
              title="Common Questions on Rates &amp; Terms"
              subtitle="Clear guidelines on billing milestones, intellectual property, and revisions."
            />

            <div className="space-y-6 divide-y divide-[#C09F80]/30 border-y border-[#C09F80]/30">
              <div className="pt-6 space-y-2">
                <h4 className="font-display font-normal text-base sm:text-lg text-[#1A1D20]">
                  How does the 7-Day Free Trial on Starter Agent Setup work?
                </h4>
                <p className="text-xs sm:text-sm text-[#565656] leading-relaxed font-sans">
                  We deploy your scoped lead qualifier or support agent to your staging/pilot channel. You and your team evaluate its live responses and data capture for 7 full calendar days. If it meets your criteria, we finalize settlement and hand over all workflow credentials. If you decide not to proceed, you pay nothing.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="font-display font-normal text-base sm:text-lg text-[#1A1D20]">
                  Who owns the intellectual property and code?
                </h4>
                <p className="text-xs sm:text-sm text-[#565656] leading-relaxed font-sans">
                  You do. Upon project completion and payment settlement, 100% of custom workflow JSONs, system prompts, API integrations, and documentation belong exclusively to your organization.
                </p>
              </div>

              <div className="pt-6 space-y-2">
                <h4 className="font-display font-normal text-base sm:text-lg text-[#1A1D20]">
                  What ongoing costs are required to run the agents?
                </h4>
                <p className="text-xs sm:text-sm text-[#565656] leading-relaxed font-sans">
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
