import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { ContactForm } from "@/components/contact/ContactForm";
import { buttonStyles } from "@/components/ui/Button";
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
  Check,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Agentic AI Services & Workflow Automation — SHIVSASTRA",
  description:
    "Production Agentic AI systems, workflow automations, and multi-agent architectures for growing businesses. Built on client-controlled infrastructure with deterministic safeguards and complete data sovereignty.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "Agentic AI Services & Workflow Automation — SHIVSASTRA",
    description:
      "Production Agentic AI systems, workflow automations, and multi-agent architectures for growing businesses. Built on client-controlled infrastructure with deterministic safeguards and complete data sovereignty.",
    url: absoluteUrl("/services"),
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentic AI Services & Workflow Automation — SHIVSASTRA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Services & Workflow Automation — SHIVSASTRA",
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
        name: "Agentic AI Services & Workflow Automation — SHIVSASTRA",
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
                name: "SHIVSASTRA",
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
    <div className="relative w-full overflow-hidden bg-[#F5F2ED] text-[#1A1D20]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesJsonLd) }}
      />

      {/* 1. WARM EDITORIAL HERO SECTION */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30">
        <SectionContainer className="relative z-10">
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                  <span>PRODUCTION AGENTIC AI</span>
                </div>
                <span className="text-[#565656] text-xs font-mono">
                  CUSTOM SYSTEMS &amp; WORKFLOW AUTOMATION
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
                  Production Agentic AI Systems for Growing Businesses
                </h1>
                <p className="font-sans text-base sm:text-lg md:text-xl text-[#565656] leading-relaxed max-w-3xl">
                  We design, build, and deploy custom intelligent agents that automate lead qualification, customer inquiries, and multi-step back-office operations. Engineered with strict deterministic guardrails, human approval checkpoints, and complete client data sovereignty.
                </p>
              </div>

              {/* 4 Value Pillars */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#C09F80]/30">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#76323F] font-mono uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>7-Day Trial</span>
                  </div>
                  <p className="text-xs text-[#565656]">
                    Evaluate in your live staging workflow before final settlement.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#76323F] font-mono uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Reliable Ops</span>
                  </div>
                  <p className="text-xs text-[#565656]">
                    Built-in retry queues, rate limits, and fallback logic.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#76323F] font-mono uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Zero Data Leak</span>
                  </div>
                  <p className="text-xs text-[#565656]">
                    Runs on your infrastructure. Zero customer records on our servers.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#76323F] font-mono uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>5–8 Day Delivery</span>
                  </div>
                  <p className="text-xs text-[#565656]">
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
                  })}
                >
                  <span>Explore Service Packages</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href="#quote"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  <span>Discuss Your Requirements</span>
                </a>
                <Link
                  href="/store"
                  className={buttonStyles({
                    variant: "ghost",
                    size: "lg",
                    className: "text-[#565656] hover:text-[#1A1D20]",
                  })}
                >
                  <span>Browse Digital Store →</span>
                </Link>
              </div>
            </div>
          </InnerPageEntrance>
        </SectionContainer>
      </section>

      {/* 2. SECURITY ASSURANCE BANNER (Grounded Contrast) */}
      <section className="relative z-20 -mt-6">
        <SectionContainer>
          <div className="bg-[#1A1D20] border border-[#C09F80]/40 p-6 md:p-8 text-[#F5F2ED] shadow-[4px_4px_0px_0px_#565656]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C09F80]" />
                  <span className="font-display text-lg md:text-xl text-[#F5F2ED]">
                    Client-Owned Infrastructure &amp; Rigorous Privacy
                  </span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40">
                    Production Hardened
                  </span>
                </div>
                <p className="font-sans text-sm text-[#D7CEC7] leading-relaxed">
                  Data stays in your control • Human approval points included • Zero customer data stored on intermediary servers • Isolated instances by design
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-[#D7CEC7] shrink-0">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C09F80]" />
                  <span>Client-Owned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C09F80]" />
                  <span>Human Gateways</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C09F80]" />
                  <span>Zero Host Logs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C09F80]" />
                  <span>Strict Rate Limits</span>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. THREE CORE SERVICE PACKAGES */}
      <section id="packages" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30 scroll-mt-16">
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
                  <div
                    key={pkg.id}
                    className={`flex flex-col justify-between relative p-6 md:p-8 bg-[#FAF8F5] border ${
                      isBusiness
                        ? "border-[#76323F] shadow-[4px_4px_0px_0px_#76323F]"
                        : "border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]"
                    }`}
                  >
                    {isBusiness && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 bg-[#76323F] text-[#FFFFFF] border border-[#76323F]">
                          MOST POPULAR FOR GROWING TEAMS
                        </span>
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Header meta */}
                      <div className="flex items-center justify-between pb-4 border-b border-[#C09F80]/20">
                        <span className="font-mono text-xs font-bold text-[#76323F] bg-[#FAF8F5] border border-[#C09F80]/40 px-2.5 py-1">
                          {pkg.code}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#565656] font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Est. {pkg.turnaround}</span>
                        </div>
                      </div>

                      {/* Title & Price */}
                      <div className="space-y-2">
                        <h2 className="font-display text-2xl font-normal text-[#1A1D20]">
                          {pkg.title}
                        </h2>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl font-normal text-[#1A1D20]">
                            {pkg.startingPrice}
                          </span>
                        </div>
                        <p className="text-xs text-[#565656] font-sans">
                          {pkg.pricingNote}
                        </p>
                      </div>

                      {/* 7-DAY FREE TRIAL HIGHLIGHT ON STARTER */}
                      {isStarter && (
                        <div className="p-3.5 bg-[#FAF8F5] border border-[#C09F80]/50 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30">
                              EVALUATION PROGRAM
                            </span>
                          </div>
                          <p className="font-sans text-xs font-bold text-[#1A1D20] leading-snug">
                            7-Day Free Trial for Small Organisations
                          </p>
                          <p className="font-sans text-[11px] text-[#565656] leading-relaxed">
                            Test with real customer inquiries in staging before final payment. Zero upfront lock-in.
                          </p>
                        </div>
                      )}

                      {/* Plain English Outcome */}
                      <div className="p-4 bg-[#F5F2ED] border border-[#C09F80]/30 space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#565656] font-semibold block">
                          Core Business Outcome
                        </span>
                        <p className="text-xs text-[#1A1D20] font-medium leading-relaxed">
                          {pkg.plainEnglishOutcome}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="space-y-3 pt-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#565656] font-semibold block">
                          Included Deliverables
                        </span>
                        <ul className="space-y-2">
                          {pkg.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#565656]">
                              <Check className="w-3.5 h-3.5 text-[#76323F] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#C09F80]/20 mt-6">
                      <Link
                        href={`/contact?subject=${encodeURIComponent(pkg.title)}`}
                        className={buttonStyles({
                          variant: isBusiness ? "primary" : "secondary",
                          size: "md",
                          className: "w-full justify-between font-semibold",
                        })}
                      >
                        <span>Select Package</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. PROCESS WORKFLOW */}
      <section className="py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <div className="max-w-3xl">
              <SectionHeader
                badge="Engineering Lifecycle"
                title="How We Build & Deploy"
                subtitle="A transparent four-phase process ensuring zero disruption, high predictability, and robust verification before production launch."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {SERVICE_PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#C09F80]/20">
                      <span className="font-mono text-xs font-bold text-[#76323F]">
                        {step.step}
                      </span>
                      <span className="text-xs text-[#565656] font-mono">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-normal text-[#1A1D20] leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs text-[#565656] leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#C09F80]/20">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#565656] block mb-1">
                      Deliverable
                    </span>
                    <span className="text-xs font-semibold text-[#1A1D20] font-mono block">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 5. TECHNICAL CAPABILITIES & SECURITY CONTROLS */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
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
              <div className="p-6 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/40 flex items-center justify-center">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-normal text-[#1A1D20]">
                  Deterministic Logic Engines
                </h4>
                <p className="text-xs text-[#565656] leading-relaxed">
                  Natural language is used strictly for intake extraction. Calculations, permissions, and database writes are governed by typed, deterministic business logic.
                </p>
              </div>

              <div className="p-6 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/40 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-normal text-[#1A1D20]">
                  Human-in-the-Loop Checkpoints
                </h4>
                <p className="text-xs text-[#565656] leading-relaxed">
                  High-stakes actions (refunds, contracts, payments, database updates) pause for human team approval via Telegram, WhatsApp, or Slack before execution.
                </p>
              </div>

              <div className="p-6 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/40 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-normal text-[#1A1D20]">
                  Client-Owned Infrastructure
                </h4>
                <p className="text-xs text-[#565656] leading-relaxed">
                  Your agents run on your private cloud, self-hosted n8n instance, or designated API accounts. We never store customer logs or credentials on third-party servers.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="max-w-4xl mx-auto space-y-12">
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about working together, intellectual property, timelines, and the 7-day evaluation."
            />

            <div className="divide-y divide-[#C09F80]/30 border-y border-[#C09F80]/30">
              {SERVICE_FAQS.map((faq, idx) => (
                <div key={idx} className="py-6 space-y-2">
                  <h4 className="font-display text-base sm:text-lg font-normal text-[#1A1D20]">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-[#565656] leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 7. INBOUND CONSULTATION FORM SECTION */}
      <section id="quote" className="py-20 md:py-28 bg-[#FFFFFF] scroll-mt-16">
        <SectionContainer>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1A1D20] tracking-tight">
                Request an Agent System Architecture Review
              </h2>
              <p className="text-[#565656] text-sm md:text-base leading-relaxed">
                Describe your current workflow, inquiry volume, or integration requirements. We review every submission within 24 hours with an initial feasibility assessment.
              </p>
            </div>

            <div className="bg-[#FAF8F5] border border-[#C09F80]/60 p-6 sm:p-10 shadow-[4px_4px_0px_0px_#D7CEC7]">
              <ContactForm defaultSubject="Starter Agent Setup (7-Day Evaluation)" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#565656] pt-4">
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
