import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  SERVICE_PACKAGES,
  SERVICE_PROCESS_STEPS,
  SERVICE_FAQS,
} from "@/data/services-data";
import {
  absoluteUrl,
  serializeJsonLd,
  VERIFIED_CONTACT_EMAIL,
} from "@/lib/site";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Lock,
  Workflow,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Agentic AI Services & Workflow Automation — JIOSI",
  description:
    "Production Agentic AI systems, workflow automations, and multi-agent architectures for growing businesses. Built on client-controlled infrastructure with deterministic safeguards and complete data sovereignty.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "Agentic AI Services & Workflow Automation — JIOSI",
    description:
      "Production Agentic AI systems, workflow automations, and multi-agent architectures for growing businesses. Built on client-controlled infrastructure with deterministic safeguards and complete data sovereignty.",
    url: absoluteUrl("/services"),
    type: "website",
    siteName: "JIOSI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentic AI Services & Workflow Automation — JIOSI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Services & Workflow Automation — JIOSI",
    description:
      "Production Agentic AI systems, workflow automations, and multi-agent architectures for growing businesses. Built on client-controlled infrastructure with deterministic safeguards and complete data sovereignty.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/services#webpage"),
        url: absoluteUrl("/services"),
        name: "Agentic AI Services & Workflow Automation — JIOSI",
        description:
          "Production Agentic AI systems, custom workflows, and multi-agent architectures for growing businesses. Built with strict data sovereignty and defensive engineering.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: absoluteUrl("/services"),
            },
          ],
        },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/services#packages"),
        name: "Agentic AI Service Packages",
        itemListElement: SERVICE_PACKAGES.map((pkg, index) => {
          const match = pkg.startingPrice.match(/₹([\d,]+)/);
          const numericPrice = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;

          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: pkg.title,
              description: pkg.plainEnglishOutcome || pkg.summary,
              provider: {
                "@type": "Organization",
                name: "JIOSI",
                url: absoluteUrl("/"),
              },
              offers: numericPrice
                ? {
                    "@type": "Offer",
                    price: String(numericPrice),
                    priceCurrency: "INR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: String(numericPrice),
                      priceCurrency: "INR",
                      description: pkg.startingPrice,
                    },
                  }
                : {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    description: pkg.startingPrice,
                  },
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/services#faq"),
        mainEntity: SERVICE_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesJsonLd) }}
      />

      {/* 1. DARK HERO SECTION */}
      <section className="relative w-full bg-[#0B1020] text-white pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial from-indigo-500/20 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-80 h-80 bg-radial from-cyan-500/15 to-transparent blur-2xl pointer-events-none" />

        <SectionContainer className="relative z-10">
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="cyan" dot size="sm">
                  PRODUCTION AGENTIC AI
                </Badge>
                <span className="text-slate-400 text-xs font-mono">
                  CUSTOM SYSTEMS &amp; WORKFLOW AUTOMATION
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Production Agentic AI Systems for Growing Businesses
                </h1>
                <p className="font-sans text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                  We design, build, and deploy custom intelligent agents that automate lead qualification, customer inquiries, and multi-step back-office operations. Engineered with strict deterministic guardrails, human approval checkpoints, and complete client data sovereignty.
                </p>
              </div>

              {/* 4 Value Pillars */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300 font-mono uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>7-Day Trial</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Evaluate in your live staging workflow before final settlement.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-300 font-mono uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Reliable Ops</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Built-in retry queues, rate limits, and fallback logic.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 font-mono uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Zero Data Leak</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Runs on your infrastructure. Zero customer records on our servers.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-300 font-mono uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>5–8 Day Delivery</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Rapid turnaround with clear blueprints and complete documentation.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#packages"
                  className={buttonStyles({
                    variant: "primary",
                    size: "lg",
                    className: "shadow-lg shadow-indigo-500/20",
                  })}
                >
                  <span>Explore Service Packages</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href="#quote"
                  className={buttonStyles({
                    variant: "glass",
                    size: "lg",
                    className: "text-white border-white/20 hover:bg-white/10",
                  })}
                >
                  <span>Discuss Your Requirements</span>
                </a>
                <Link
                  href="/products"
                  className={buttonStyles({
                    variant: "ghost",
                    size: "lg",
                    className: "text-slate-300 hover:text-white hover:bg-white/5",
                  })}
                >
                  <span>Browse Prebuilt Digital Kits →</span>
                </Link>
              </div>
            </div>
          </InnerPageEntrance>
        </SectionContainer>
      </section>

      {/* 2. SECURITY ASSURANCE BANNER */}
      <section className="relative z-20 -mt-8">
        <SectionContainer>
          <div className="bg-gradient-to-r from-[#111A2E] to-[#1E293B] border border-indigo-500/30 rounded-2xl p-6 md:p-8 text-white shadow-xl shadow-slate-900/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-display font-bold text-lg md:text-xl text-white">
                    We Prioritize Security
                  </span>
                  <Badge variant="success" size="sm">
                    Production Hardened
                  </Badge>
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Data stays in your control • Human approval points included • No customer data stored on our servers • Enterprise-grade isolation by design
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300 shrink-0">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Client-Owned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Human Gateways</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Host Logs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Strict Rate Limits</span>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. THREE CORE SERVICE PACKAGES */}
      <section id="packages" className="py-20 md:py-28 bg-slate-50 scroll-mt-16">
        <SectionContainer>
          <div className="space-y-16">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Defined Deliverables"
                title="Transparent Service Packages"
                subtitle="Every engagement starts with defined deliverables, deterministic safeguards, and fixed timelines. Choose the tier that matches your operational needs."
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SERVICE_PACKAGES.map((pkg) => {
                const isStarter = pkg.id === "starter-agent-setup";
                const isBusiness = pkg.id === "business-agent-package";

                return (
                  <Card
                    key={pkg.id}
                    variant={isBusiness ? "elevated" : "standard"}
                    className={`flex flex-col justify-between relative p-6 md:p-8 ${
                      isBusiness ? "ring-2 ring-indigo-500 shadow-xl" : ""
                    }`}
                  >
                    {isBusiness && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <Badge variant="primary" size="sm" className="shadow-md">
                          MOST POPULAR FOR GROWING TEAMS
                        </Badge>
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Header meta */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                        <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                          {pkg.code}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Est. {pkg.turnaround}</span>
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="space-y-2">
                        <h2 className="font-display text-2xl font-bold text-slate-900">
                          {pkg.title}
                        </h2>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl font-extrabold text-slate-900">
                            {pkg.startingPrice}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-sans">
                          {pkg.pricingNote}
                        </p>
                      </div>

                      {/* 7-DAY FREE TRIAL HIGHLIGHT ON STARTER */}
                      {isStarter && (
                        <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <Badge variant="cyan" dot size="sm">
                              EVALUATION PROGRAM
                            </Badge>
                          </div>
                          <p className="font-sans text-xs font-bold text-indigo-900 leading-snug">
                            7-Day Free Trial for Small Organisations
                          </p>
                          <p className="font-sans text-[11px] text-indigo-700 leading-relaxed">
                            Test with real customer inquiries in staging before final payment. Zero upfront lock-in.
                          </p>
                        </div>
                      )}

                      {/* Plain English Outcome */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                          Core Business Outcome
                        </span>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {pkg.plainEnglishOutcome}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="space-y-3 pt-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold block">
                          Included Deliverables
                        </span>
                        <ul className="space-y-2.5">
                          {pkg.deliverables.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Scope */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                          Technical Safeguards
                        </span>
                        <ul className="space-y-1.5">
                          {pkg.technicalScope.slice(0, 3).map((scope, idx) => (
                            <li
                              key={idx}
                              className="text-[11px] text-slate-500 flex items-center gap-1.5"
                            >
                              <span className="text-indigo-500 font-bold">•</span>
                              <span className="truncate">{scope}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-8 mt-6 border-t border-slate-100 space-y-3">
                      <Link
                        href={`/contact?subject=${encodeURIComponent(
                          pkg.contactSubject
                        )}#quote`}
                        className={buttonStyles({
                          variant: isBusiness ? "primary" : "secondary",
                          size: "lg",
                          className: "w-full justify-center text-xs font-bold uppercase tracking-wider",
                        })}
                      >
                        <span>
                          {isStarter
                            ? "Start with 7-Day Free Trial"
                            : "Discuss This Package"}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>

                      <p className="text-[11px] text-center text-slate-400 font-mono">
                        {pkg.idealFor}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. VERIFIED CASE STUDIES & PROOF */}
      <section id="proof" className="py-20 md:py-28 bg-white border-y border-slate-200 scroll-mt-16">
        <SectionContainer>
          <div className="space-y-16">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Engineering Proof"
                title="Verified Systems in Production"
                subtitle="We do not build speculative toys. Every architecture pattern we deploy is stress-tested against real users, compliance standards, and deterministic edge cases."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1: Yojna Setu */}
              <Card variant="standard" className="p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="cyan" size="sm">
                      GOVERNMENT WELFARE AI
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">
                      Deterministic Engine
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Yojna Setu: Multilingual Welfare Discovery
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    A conversational WhatsApp welfare eligibility platform. Multilingual LLMs extract applicant demographic profiles naturally, while a deterministic Java rules engine evaluates eligibility across 82 normalized government programs with zero hallucinations.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 font-mono text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="text-indigo-600 font-bold block text-base">82 Schemes</span>
                      <span className="text-slate-500 text-[11px]">Normalized Rules</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="text-emerald-600 font-bold block text-base">42/42 Tests</span>
                      <span className="text-slate-500 text-[11px]">0 Critical Findings</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/projects/yojna-setu"
                    className={buttonStyles({
                      variant: "outline",
                      size: "md",
                      className: "w-full justify-center text-xs font-semibold",
                    })}
                  >
                    <span>See How We Built Similar Systems (Case Study)</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </Card>

              {/* Case Study 2: RealGuard */}
              <Card variant="standard" className="p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary" size="sm">
                      PROPTECH COMPLIANCE
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">
                      Verification Pipeline
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    RealGuard: Real Estate Valuation &amp; Verification
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    An automated property due-diligence system. Ingests legal documents and ownership deeds via OCR, performs RERA registry lookup, and cross-references bank valuation heuristics to detect fraudulent title transfers before settlement.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 font-mono text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="text-indigo-600 font-bold block text-base">RERA Cross-Check</span>
                      <span className="text-slate-500 text-[11px]">Deterministic Query</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="text-emerald-600 font-bold block text-base">&lt; 3.2s</span>
                      <span className="text-slate-500 text-[11px]">Audit Report Gen</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/projects/realguard"
                    className={buttonStyles({
                      variant: "outline",
                      size: "md",
                      className: "w-full justify-center text-xs font-semibold",
                    })}
                  >
                    <span>Inspect RealGuard Architecture (Case Study)</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 5. 5-STEP DELIVERY PROCESS */}
      <section className="py-20 md:py-28 bg-slate-50">
        <SectionContainer>
          <div className="space-y-16">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Structured Process"
                title="How We Engineer Your Agent System"
                subtitle="From day one scoping to final deployment, every phase delivers concrete artifacts with zero ambiguity."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {SERVICE_PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {step.step}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Deliverable
                    </span>
                    <span className="text-xs font-semibold text-slate-800 font-mono block">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 6. TECHNICAL CAPABILITIES & SECURITY CONTROLS */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <SectionContainer>
          <div className="space-y-16">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Technical Governance"
                title="Built for Production, Not Prototyping"
                subtitle="We engineer defensive systems that protect your brand reputation, prevent unauthorized mutations, and guarantee deterministic predictability."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="standard" className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  Deterministic Logic Engines
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Natural language is used strictly for intake extraction. Calculations, permissions, and database writes are governed by typed, deterministic business logic.
                </p>
              </Card>

              <Card variant="standard" className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  Human-in-the-Loop Checkpoints
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-stakes actions (refunds, contracts, payments, database updates) pause for human team approval via Telegram, WhatsApp, or Slack before execution.
                </p>
              </Card>

              <Card variant="standard" className="p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  Client-Owned Infrastructure
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your agents run on your private cloud, self-hosted n8n instance, or designated API accounts. We never store customer logs or credentials on third-party servers.
                </p>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <SectionContainer>
          <div className="max-w-4xl mx-auto space-y-12">
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about working together, intellectual property, timelines, and the 7-day evaluation."
            />

            <div className="divide-y divide-slate-200">
              {SERVICE_FAQS.map((faq, idx) => (
                <div key={idx} className="py-6 space-y-2">
                  <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 8. INBOUND CONSULTATION FORM SECTION */}
      <section id="quote" className="py-20 md:py-28 bg-white border-t border-slate-200 scroll-mt-16">
        <SectionContainer>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="cyan" dot size="sm">
                GET IN TOUCH
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Request an Agent System Architecture Review
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Describe your current workflow, inquiry volume, or integration requirements. We review every submission within 24 hours with an initial feasibility assessment.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              <ContactForm defaultSubject="Starter Agent Setup (7-Day Evaluation)" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 pt-4">
              <span>Direct: {VERIFIED_CONTACT_EMAIL}</span>
              <span>•</span>
              <span>Turnaround: 24 Business Hours</span>
              <span>•</span>
              <span>NDAs Signed on Request</span>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
