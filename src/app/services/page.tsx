import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageBackground } from "@/components/ui/PageBackground";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { ContactForm } from "@/components/contact/ContactForm";
import { getPublishedServices } from "@/lib/services";
import {
  SERVICE_PACKAGES,
  SERVICE_PROCESS_STEPS,
  SERVICE_FAQS,
  TECHNICAL_CAPABILITIES,
  WEBSITE_ENGINEERING_SHOWCASE,
} from "@/data/services-data";
import {
  absoluteUrl,
  serializeJsonLd,
  VERIFIED_CONTACT_EMAIL,
} from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Agentic AI Services & Workflow Automation — Shivam Shukla",
  description:
    "Production Agentic AI systems, custom workflows, and multi-agent architectures for growing businesses by Shivam Shukla. Built with deterministic safeguards and complete data sovereignty.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "Agentic AI Services & Workflow Automation — Shivam Shukla",
    description:
      "Production Agentic AI systems, custom workflows, and multi-agent architectures for growing businesses by Shivam Shukla. Built with deterministic safeguards and complete data sovereignty.",
    url: absoluteUrl("/services"),
    type: "website",
    siteName: "ShivSastra",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agentic AI Services & Workflow Automation — Shivam Shukla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI Services & Workflow Automation — Shivam Shukla",
    description:
      "Production Agentic AI systems, custom workflows, and multi-agent architectures for growing businesses by Shivam Shukla. Built with deterministic safeguards and complete data sovereignty.",
    images: ["/og-image.png"],
  },
};

export default async function ServicesPage() {
  const dynamicServices = await getPublishedServices();

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/services#webpage"),
        url: absoluteUrl("/services"),
        name: "Agentic AI Services & Workflow Automation — Shivam Shukla",
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
                "@type": "Person",
                name: "Shivam Shukla",
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
    <div className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesJsonLd) }}
      />
      <PageBackground
        src="/images/backgrounds/services.webp"
        opacity={0.25}
        position="top"
      />
      <SectionContainer>
        <div className="space-y-16 md:space-y-24">
          {/* 1. HERO: What I build, who I help, and primary CTAs */}
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-6 pb-10 border-b border-[var(--color-hairline)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] inline-block" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                    Agentic AI Systems &amp; Automation
                  </span>
                </div>
                <Link
                  href="/store"
                  className="font-mono text-xs text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
                >
                  <span>Prefer ready-made agent kits? Browse the Store</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="space-y-3 max-w-4xl">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--color-ink-primary)] leading-[1.08]">
                  Agentic AI Services &amp; Production Agent Systems
                </h1>
                <p className="font-sans text-base sm:text-lg md:text-xl text-[var(--color-ink-secondary)] leading-relaxed">
                  Practical agentic AI engineering for growing businesses, founders, and lean teams. From focused lead qualifiers and WhatsApp support agents to full multi-agent orchestration—built on client-controlled infrastructure with human approval checkpoints, zero customer data retention on my servers, and verified business outcomes.
                </p>
              </div>

              {/* 4 Value Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[var(--color-hairline)]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                    Evaluation Period
                  </span>
                  <p className="font-sans text-xs text-[var(--color-ink-secondary)]">
                    Evaluate in your real workflow before final settlement.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                    Production Reliability
                  </span>
                  <p className="font-sans text-xs text-[var(--color-ink-secondary)]">
                    Engineered with rate limiting, error handling, and fail-safes.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                    Data Security
                  </span>
                  <p className="font-sans text-xs text-[var(--color-ink-secondary)]">
                    Data stays in your control; zero customer data on my servers.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                    Fast Turnaround
                  </span>
                  <p className="font-sans text-xs text-[var(--color-ink-secondary)]">
                    Starter setup in 5–8 days with complete documentation.
                  </p>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#starter-agent-setup"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider px-5 py-3 bg-[var(--color-ink-primary)] text-[var(--color-canvas-primary)] hover:bg-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink-primary)] font-semibold"
                >
                  Discuss Your Requirements ↓
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider px-5 py-3 border border-[var(--color-hairline)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-primary)] hover:bg-[var(--color-canvas-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
                >
                  View All Packages &amp; Pricing ↓
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider px-5 py-3 border border-[var(--color-hairline)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-primary)] hover:bg-[var(--color-canvas-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
                >
                  Request a Quote ↓
                </a>
                <a
                  href="#proof"
                  className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider px-4 py-3 border border-transparent text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
                >
                  Case Studies &amp; Proof ↓
                </a>
              </div>
            </div>
          </InnerPageEntrance>

          {/* MAIN SECURITY BANNER */}
          <InnerPageEntrance delayIndex={1}>
            <div className="p-6 md:p-8 border border-[var(--color-accent)]/40 bg-[var(--color-canvas-secondary)] relative space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--color-accent)] inline-block" />
                <h2 className="font-display text-xl sm:text-2xl text-[var(--color-ink-primary)] font-normal">
                  We prioritize security
                </h2>
              </div>
              <p className="font-sans text-base sm:text-lg text-[var(--color-ink-primary)] leading-relaxed font-medium">
                Data stays in your control • Human approval points included • No customer data stored on my servers • Built for production reliability
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-3 border-t border-[var(--color-hairline)] font-mono text-xs text-[var(--color-ink-secondary)]">
                <div>
                  <span className="text-[var(--color-accent)] font-bold">✓</span> Data In Your Control
                </div>
                <div>
                  <span className="text-[var(--color-accent)] font-bold">✓</span> Human Approval Points
                </div>
                <div>
                  <span className="text-[var(--color-accent)] font-bold">✓</span> Zero Customer Data Stored
                </div>
                <div>
                  <span className="text-[var(--color-accent)] font-bold">✓</span> Production-Grade Safeguards
                </div>
              </div>
            </div>
          </InnerPageEntrance>

          {/* 2. THREE AGENTIC SERVICE CARDS with Progressive Disclosure */}
          <InnerPageEntrance delayIndex={2}>
            <section id="packages" className="space-y-8 scroll-mt-20">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                    Scoped Agentic Packages
                  </span>
                  <span className="text-xs font-mono text-[var(--color-ink-secondary)]">
                    (3 Core Offers)
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                  Defined Deliverables &amp; Transparent Pricing
                </h2>
                <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                  Every engagement starts with defined outcomes, production safeguards, and clear turnaround.
                  Click &ldquo;View details&rdquo; on any card to inspect deliverables, technical scope, and boundaries.
                </p>
              </div>

              {/* 3 Service Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {SERVICE_PACKAGES.map((pkg) => (
                  <article
                    key={pkg.id}
                    id={pkg.id}
                    className="p-6 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] flex flex-col justify-between space-y-4 hover:border-[var(--color-ink-primary)] transition-colors scroll-mt-24"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-hairline)] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                          {pkg.code}
                        </span>
                        <span className="text-[var(--color-hairline)] select-none">|</span>
                        <span className="font-mono text-xs text-[var(--color-ink-secondary)]">
                          {pkg.category}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[var(--color-ink-secondary)] bg-[var(--color-canvas-primary)] px-2 py-0.5 border border-[var(--color-hairline)]">
                        Est. {pkg.turnaround}
                      </span>
                    </div>

                    {/* Service Name & Starting Price */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-display text-2xl font-normal text-[var(--color-ink-primary)] leading-tight">
                          {pkg.title}
                        </h3>
                        <div className="font-mono text-xl font-semibold text-[var(--color-accent)]">
                          {pkg.startingPrice}
                        </div>
                      </div>

                      {/* Evaluation Period Note for Starter Agent Setup */}
                      {pkg.id === "starter-agent-setup" && (
                        <div className="p-3 border border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] text-[var(--color-ink-primary)] space-y-1">
                          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                            <span className="w-1.5 h-1.5 bg-[var(--color-accent)] inline-block" />
                            <span>Evaluation Period</span>
                          </div>
                          <p className="font-sans text-xs font-semibold text-[var(--color-ink-primary)] leading-snug">
                            7-Day Evaluation Period for Small Organisations
                          </p>
                          <p className="font-sans text-[11px] text-[var(--color-ink-secondary)] leading-tight">
                            Evaluate with real customer inquiries in staging/pilot before final settlement.
                          </p>
                        </div>
                      )}

                      {/* One Plain-English Sentence */}
                      <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-primary)] leading-relaxed font-medium">
                        {pkg.plainEnglishOutcome}
                      </p>

                      {/* Pricing Scope Note */}
                      <p className="font-sans text-xs text-[var(--color-ink-secondary)] italic">
                        {pkg.pricingNote}
                      </p>

                      {/* Security Short Promise */}
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-ink-primary)] pt-1">
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold select-none">🔒</span>
                        <span className="font-medium">We prioritize security</span>
                      </div>

                      {/* Key Scope Highlights on Card Face */}
                      <div className="space-y-1.5 pt-2 border-t border-[var(--color-hairline)]">
                        <ul className="space-y-1 list-none font-sans text-xs text-[var(--color-ink-primary)]">
                          {pkg.deliverables.slice(0, 3).map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-[var(--color-accent)] font-bold select-none shrink-0">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-hairline)]">
                      <a
                        href={`/contact?subject=${encodeURIComponent(pkg.contactSubject)}`}
                        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-4 py-2 bg-[var(--color-ink-primary)] text-[var(--color-canvas-primary)] hover:bg-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)] font-semibold"
                      >
                        <span>{pkg.id === "starter-agent-setup" ? "Request Proposal" : "Request Quote"}</span>
                        <span>→</span>
                      </a>
                      <span className="font-mono text-[11px] text-[var(--color-ink-secondary)]">
                        {pkg.revisions}
                      </span>
                    </div>

                    {/* Progressive Disclosure: Semantic Native <details> */}
                    <details className="group border-t border-[var(--color-hairline)] pt-3 focus-within:outline-none">
                      <summary className="flex items-center justify-between cursor-pointer list-none py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)] select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]">
                        <span className="font-semibold">
                          <span className="group-open:hidden">View details (deliverables, scope)</span>
                          <span className="hidden group-open:inline">Hide details</span>
                        </span>
                        <span className="font-mono text-sm font-semibold transition-transform duration-200 group-open:rotate-180 select-none">
                          ↓
                        </span>
                      </summary>

                      <div className="pt-4 pb-1 space-y-4">
                        {/* Summary / Who It's For */}
                        <div className="p-3 bg-[var(--color-canvas-primary)] border border-[var(--color-hairline)] space-y-1">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                            Ideal For
                          </span>
                          <p className="font-sans text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                            {pkg.idealFor}
                          </p>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="space-y-2 pt-1">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-primary)] font-semibold block">
                            What&apos;s Included (Deliverables)
                          </span>
                          <ul className="space-y-1.5 list-none">
                            {pkg.deliverables.map((item, dIdx) => (
                              <li
                                key={dIdx}
                                className="flex items-start gap-2.5 font-sans text-xs text-[var(--color-ink-primary)] leading-relaxed"
                              >
                                <span className="text-[var(--color-accent)] font-bold select-none shrink-0">
                                  ✓
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technical Scope & Stack */}
                        <div className="space-y-1.5 pt-2 border-t border-[var(--color-hairline)]">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                            Technical Scope
                          </span>
                          <ul className="space-y-1 list-none font-sans text-xs text-[var(--color-ink-secondary)]">
                            {pkg.technicalScope.map((tech, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <span className="text-[var(--color-accent)] select-none shrink-0">—</span>
                                <span>{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Turnaround & Support */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[var(--color-hairline)] text-xs font-sans">
                          <div className="p-2.5 bg-[var(--color-canvas-primary)] border border-[var(--color-hairline)]">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-secondary)] block">
                              Turnaround Estimate
                            </span>
                            <span className="text-[var(--color-ink-primary)] font-medium">
                              {pkg.turnaround}
                            </span>
                          </div>
                          <div className="p-2.5 bg-[var(--color-canvas-primary)] border border-[var(--color-hairline)]">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-secondary)] block">
                              Revision / Support
                            </span>
                            <span className="text-[var(--color-ink-primary)] font-medium">
                              {pkg.revisions}
                            </span>
                          </div>
                        </div>

                        {/* Exclusions */}
                        <div className="space-y-1.5 pt-2 border-t border-[var(--color-hairline)]">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-secondary)] font-semibold block">
                            Exclusions &amp; Boundaries
                          </span>
                          <ul className="space-y-1 list-none">
                            {pkg.exclusions.map((item, eIdx) => (
                              <li
                                key={eIdx}
                                className="flex items-start gap-2 font-sans text-[11px] text-[var(--color-ink-secondary)] leading-relaxed"
                              >
                                <span className="text-[var(--color-ink-secondary)] select-none shrink-0">
                                  ✕
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Case Study Evidence Link */}
                        {pkg.proofProject && (
                          <div className="pt-2 border-t border-[var(--color-hairline)]">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold block mb-1">
                              Agentic Proof Case Study
                            </span>
                            <Link
                              href={`/projects/${pkg.proofProject.slug}`}
                              className="font-sans text-xs text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1 group font-medium"
                            >
                              <span className="underline underline-offset-2">
                                {pkg.proofProject.title} — See how I built similar systems
                              </span>
                              <span className="transition-transform duration-150 group-hover:translate-x-1">
                                →
                              </span>
                            </Link>
                            <p className="font-sans text-[11px] text-[var(--color-ink-secondary)] mt-0.5">
                              {pkg.proofProject.description}
                            </p>
                          </div>
                        )}

                        {/* Expanded Direct CTA */}
                        <div className="pt-3 border-t border-[var(--color-hairline)] flex items-center justify-between gap-3">
                          <span className="font-mono text-[11px] text-[var(--color-ink-secondary)]">
                            Written scope agreed upfront
                          </span>
                          <a
                            href={`/contact?subject=${encodeURIComponent(pkg.contactSubject)}`}
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-[var(--color-ink-primary)] text-[var(--color-ink-primary)] hover:bg-[var(--color-ink-primary)] hover:text-[var(--color-canvas-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
                          >
                            <span>Request Quote ({pkg.code})</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    </details>
                  </article>
                ))}
              </div>

              {/* Dynamic Database Services (if present from Supabase) */}
              {dynamicServices.length > 0 && (
                <div className="pt-6 border-t border-[var(--color-hairline)] space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                      Advisory &amp; Retainer Engagements
                    </span>
                    <h3 className="font-display text-2xl font-normal text-[var(--color-ink-primary)]">
                      Extended Consulting Services
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-hairline)] border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)]">
                    {dynamicServices.map((service) => (
                      <div key={service.id} className="p-6 space-y-4 flex flex-col justify-between">
                        <div className="space-y-2">
                          {service.programCode && (
                            <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider block">
                              {service.programCode}
                            </span>
                          )}
                          <h4 className="font-display text-xl font-normal text-[var(--color-ink-primary)]">
                            {service.title}
                          </h4>
                          <p className="font-sans text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                            {service.summary}
                          </p>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="font-mono text-xs text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1"
                        >
                          <span>View engagement details</span>
                          <span>→</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </InnerPageEntrance>

          {/* 3. WORK PROCESS */}
          <InnerPageEntrance delayIndex={3}>
            <section id="process" className="space-y-6 scroll-mt-20">
              <div className="space-y-2 max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                  Simple 5-Step Process
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                  How We Deploy: From Scope to Handover
                </h2>
                <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                  A predictable, security-first workflow designed to eliminate surprise cloud fees, protect your customer data, and deliver production-ready agents.
                </p>
              </div>

              {/* 5-Step Process Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {SERVICE_PROCESS_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                        {step.step}
                      </span>
                      <h3 className="font-display text-base font-normal text-[var(--color-ink-primary)]">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[var(--color-hairline)]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] block">
                        Deliverable
                      </span>
                      <span className="font-sans text-[11px] text-[var(--color-ink-primary)] font-medium">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </InnerPageEntrance>

          {/* 4. RELEVANT AGENTIC CASE STUDIES & PROOF */}
          <InnerPageEntrance delayIndex={4}>
            <section id="proof" className="space-y-6 scroll-mt-20">
              <div className="space-y-2 max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                  Verified Agentic Case Studies
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                  Proof of Real Agentic Work
                </h2>
                <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                  Real agentic systems in production. Inspect actual architecture case studies, conversational workflows, and deterministic rules engines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Proof 1: Yojna Setu */}
                <Link
                  href="/projects/yojna-setu"
                  className="p-6 border-2 border-[var(--color-accent)]/50 bg-[var(--color-canvas-secondary)] space-y-3 hover:border-[var(--color-accent)] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--color-ink-secondary)]">
                      <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                        Multi-Step Reasoning &amp; Rules Engine
                      </span>
                      <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 border border-[var(--color-accent)]/30">
                        Primary Agentic Case Study
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-normal text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      Yojna Setu
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                      Multilingual welfare scheme discovery platform combining Groq LLM profile extraction with a deterministic Java eligibility engine across 82 schemes with 42/42 automated tests.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-hairline)] flex items-center justify-between font-mono text-xs text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)]">
                    <span className="font-semibold">See how I built similar systems</span>
                    <span>→</span>
                  </div>
                </Link>

                {/* Proof 2: RealGuard */}
                <Link
                  href="/projects/realguard"
                  className="p-6 border-2 border-[var(--color-accent)]/50 bg-[var(--color-canvas-secondary)] space-y-3 hover:border-[var(--color-accent)] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--color-ink-secondary)]">
                      <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                        WhatsApp Agent &amp; CRM Pipeline
                      </span>
                      <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 border border-[var(--color-accent)]/30">
                        Primary Agentic Case Study
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-normal text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      RealGuard
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                      Production conversational real estate assistant connecting WhatsApp messaging to verified business logic, deterministic EMI calculations, CRM persistence, and human takeover points.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-hairline)] flex items-center justify-between font-mono text-xs text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)]">
                    <span className="font-semibold">See how I built similar systems</span>
                    <span>→</span>
                  </div>
                </Link>

                {/* Proof 3: QuickEats */}
                <Link
                  href="/projects/quickeats"
                  className="p-6 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] space-y-3 hover:border-[var(--color-ink-primary)] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--color-ink-secondary)]">
                      <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                        Backend Engineering &amp; Security
                      </span>
                      <span>Spring Boot 3</span>
                    </div>
                    <h3 className="font-display text-xl font-normal text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      QuickEats
                    </h3>
                    <p className="font-sans text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                      Real-time ordering backend engineered with Spring Boot 3.2.3, Java 17, STOMP WebSockets, authoritative server-side price recalculation, and 71 verified @Test methods.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-hairline)] flex items-center justify-between font-mono text-xs text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)]">
                    <span>View Project Proof</span>
                    <span>→</span>
                  </div>
                </Link>

                {/* Proof 4: ShivSastra Platform */}
                <Link
                  href="/projects/shivsastra"
                  className="p-6 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] space-y-3 hover:border-[var(--color-ink-primary)] transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--color-ink-secondary)]">
                      <span className="text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                        Defensive Engineering &amp; SEO
                      </span>
                      <span>Live Platform</span>
                    </div>
                    <h3 className="font-display text-xl font-normal text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      ShivSastra Platform
                    </h3>
                    <p className="font-sans text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                      Production Next.js 16 App Router application with Turbopack, Razorpay payment verification, Supabase Row-Level Security, and 25-point automated security suite.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-hairline)] flex items-center justify-between font-mono text-xs text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)]">
                    <span>View Platform Case Study</span>
                    <span>→</span>
                  </div>
                </Link>
              </div>
            </section>
          </InnerPageEntrance>

          {/* 5. TECHNICAL CAPABILITIES & STANDARDS */}
          <InnerPageEntrance delayIndex={5}>
            <section id="capabilities" className="space-y-6 scroll-mt-20">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                    Technical Stack &amp; Standards
                  </span>
                  <span className="text-xs font-mono text-[var(--color-ink-secondary)]">
                    (Verified Against Code)
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                  Engineering Stack &amp; Quality Standards
                </h2>
                <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                  For technical buyers and business leads: every tool, model, and workflow pattern is verified against active production code and security boundaries.
                </p>
              </div>

              {/* 2-Column Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1: Core Technologies */}
                <div className="p-6 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                      Core Agentic Stack
                    </span>
                    <h3 className="font-display text-xl font-normal text-[var(--color-ink-primary)]">
                      Orchestration, Models &amp; Integrations
                    </h3>
                    <ul className="space-y-2.5 font-sans text-xs text-[var(--color-ink-primary)] list-none">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">—</span>
                        <span><strong>Workflow Orchestration:</strong> Self-hosted n8n (Docker / VPS), cloud orchestrators, and custom Node.js/Python micro-services.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">—</span>
                        <span><strong>Inference Engines:</strong> Groq SDK (Llama 3.3 70B), OpenAI API (GPT-4o), Anthropic, with strict JSON schema outputs.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">—</span>
                        <span><strong>Data Connections:</strong> WhatsApp Cloud API, Twilio, Google Sheets API, PostgreSQL, and custom REST webhooks.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-hairline)] font-mono text-xs text-[var(--color-ink-secondary)] flex items-center justify-between">
                    <span>Evidence in:</span>
                    <div className="flex gap-3">
                      <Link href="/projects/realguard" className="text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] underline underline-offset-2">RealGuard</Link>
                      <Link href="/projects/yojna-setu" className="text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] underline underline-offset-2">Yojna Setu</Link>
                      <Link href="/projects/shivsastra" className="text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] underline underline-offset-2">ShivSastra</Link>
                    </div>
                  </div>
                </div>

                {/* Column 2: Defensive Engineering Standards */}
                <div className="p-6 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                      Defensive Engineering Standards
                    </span>
                    <h3 className="font-display text-xl font-normal text-[var(--color-ink-primary)]">
                      Privacy, Human Oversight &amp; Limits
                    </h3>
                    <ul className="space-y-2.5 font-sans text-xs text-[var(--color-ink-primary)] list-none">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">✓</span>
                        <span><strong>Zero Customer Data Retention:</strong> Workflows deploy directly into client-controlled servers and accounts.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">✓</span>
                        <span><strong>Human Approval Points:</strong> Critical workflows require staff confirmation before irreversible actions.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">✓</span>
                        <span><strong>Rate Limiting & Safety:</strong> Execution throttles and deduplication nodes prevent runaway API spend and protect infrastructure.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[var(--color-accent)] font-bold select-none shrink-0">✓</span>
                        <span><strong>Cryptographic Webhooks:</strong> Timing-safe HMAC-SHA256 signature verification on messaging callbacks.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-hairline)] font-mono text-xs text-[var(--color-ink-secondary)] flex items-center justify-between">
                    <span>Privacy Guarantee:</span>
                    <span className="font-semibold text-[var(--color-ink-primary)]">100% Client Data Sovereignty</span>
                  </div>
                </div>
              </div>

              {/* Accessible Disclosure for Full Deep-Dive */}
              <details className="group border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] p-5 focus-within:outline-none">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none font-mono text-xs uppercase tracking-wider text-[var(--color-ink-secondary)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]">
                  <span className="font-semibold">
                    <span className="group-open:hidden">Inspect in-depth capability breakdowns &amp; defensive standards (SEO, Security, Performance)</span>
                    <span className="hidden group-open:inline">Hide in-depth engineering breakdowns</span>
                  </span>
                  <span className="font-mono text-sm font-semibold transition-transform duration-200 group-open:rotate-180 select-none">
                    ↓
                  </span>
                </summary>

                <div className="pt-6 space-y-8">
                  {/* Detailed 4-Card Capabilities Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TECHNICAL_CAPABILITIES.map((cap) => (
                      <div
                        key={cap.id}
                        className="p-5 border border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-hairline)] pb-2">
                            <span className="font-display text-base font-normal text-[var(--color-ink-primary)]">
                              {cap.category}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] text-[var(--color-accent)] font-semibold">
                              {cap.verificationBadge}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {cap.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-mono text-[11px] px-2 py-0.5 bg-[var(--color-canvas-secondary)] border border-[var(--color-hairline)] text-[var(--color-ink-secondary)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <p className="font-sans text-xs text-[var(--color-ink-primary)] leading-relaxed">
                            {cap.summary}
                          </p>

                          <ul className="space-y-1 list-none">
                            {cap.capabilities.map((item, cIdx) => (
                              <li
                                key={cIdx}
                                className="flex items-start gap-2 font-sans text-[11px] text-[var(--color-ink-secondary)] leading-relaxed"
                              >
                                <span className="text-[var(--color-accent)] select-none shrink-0">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2 border-t border-[var(--color-hairline)]">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-ink-primary)] font-semibold block mb-0.5">
                            Demonstrated In
                          </span>
                          {cap.evidence.slug ? (
                            <Link
                              href={`/projects/${cap.evidence.slug}`}
                              className="font-sans text-xs text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1 group"
                            >
                              <span className="underline underline-offset-2 font-medium">
                                {cap.evidence.title}
                              </span>
                              <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                            </Link>
                          ) : (
                            <span className="font-sans text-xs text-[var(--color-ink-primary)] font-medium">
                              {cap.evidence.title}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Engineering Showcase */}
                  <div className="space-y-3 pt-4 border-t border-[var(--color-hairline)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                      Live Defensive Standards on ShivSastra
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {WEBSITE_ENGINEERING_SHOWCASE.map((showcase) => (
                        <div
                          key={showcase.id}
                          className="p-4 border border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] space-y-2 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                              {showcase.badge}
                            </span>
                            <h4 className="font-display text-sm font-normal text-[var(--color-ink-primary)]">
                              {showcase.title}
                            </h4>
                            <p className="font-sans text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                              {showcase.summary}
                            </p>
                            <ul className="space-y-1 pt-1 list-none">
                              {showcase.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-1.5 font-sans text-[11px] text-[var(--color-ink-primary)] leading-relaxed"
                                >
                                  <span className="text-[var(--color-accent)] font-bold select-none shrink-0">✓</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2 border-t border-[var(--color-hairline)] mt-2">
                            <p className="font-sans text-[10px] text-[var(--color-ink-secondary)] leading-relaxed italic">
                              {showcase.transparencyNote}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </section>
          </InnerPageEntrance>

          {/* 6. FAQ SECTION */}
          <InnerPageEntrance delayIndex={6}>
            <section id="faq" className="space-y-6 scroll-mt-20">
              <div className="space-y-2 max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                  Frequently Asked Questions
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                  Clear Answers Before You Reach Out
                </h2>
                <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                  Honest clarity on pricing, evaluation terms, data security, human approval points, and operational safeguards.
                </p>
              </div>

              {/* Accessible Native Accordion */}
              <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
                {SERVICE_FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group py-4 focus-within:outline-none"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none text-left select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]">
                      <span className="font-display text-base sm:text-lg font-normal text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <span className="font-mono text-base text-[var(--color-accent)] transition-transform duration-200 group-open:rotate-45 select-none shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="pt-3 pb-1 pr-6">
                      <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </InnerPageEntrance>

          {/* 7. REQUEST A QUOTE FORM & VERIFIED CONTACT LINKS */}
          <InnerPageEntrance delayIndex={7}>
            <section
              id="quote"
              className="p-6 sm:p-10 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] space-y-8 scroll-mt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Contact Intro & Channels */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold block">
                      Direct Engagement
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                      Request an Agent Quote
                    </h2>
                    <p className="font-sans text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                      Need a Lead Qualifier, WhatsApp Support Agent, or a custom Multi-Agent system?
                      Send a brief outline of your business workflow. I&apos;ll review your requirements and reply within 24 hours with a transparent estimate.
                    </p>
                  </div>

                  {/* Verified Contact Details */}
                  <div className="space-y-3 pt-4 border-t border-[var(--color-hairline)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ink-primary)] font-semibold block">
                      Verified Contact Channels
                    </span>
                    <div className="space-y-2 font-mono text-xs text-[var(--color-ink-secondary)]">
                      <div>
                        <span className="text-[var(--color-ink-primary)] font-medium">Email: </span>
                        <a
                          href={`mailto:${VERIFIED_CONTACT_EMAIL}`}
                          className="hover:text-[var(--color-accent)] underline underline-offset-2 transition-colors"
                        >
                          {VERIFIED_CONTACT_EMAIL}
                        </a>
                      </div>
                      <div>
                        <span className="text-[var(--color-ink-primary)] font-medium">Contra: </span>
                        <a
                          href="https://contra.com/shivam_shukla_7duxsdr7/work"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--color-accent)] underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
                        >
                          <span>contra.com/shivam_shukla_7duxsdr7</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      </div>
                      <div>
                        <span className="text-[var(--color-ink-primary)] font-medium">LinkedIn: </span>
                        <a
                          href="https://www.linkedin.com/in/shivam-shukla-186276374/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--color-accent)] underline underline-offset-2 transition-colors inline-flex items-center gap-0.5"
                        >
                          <span>shivam-shukla-186276374</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Service SLA Commitment */}
                  <div className="p-4 bg-[var(--color-canvas-primary)] border border-[var(--color-hairline)] space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold block">
                      Data Privacy &amp; Trial Guarantee
                    </span>
                    <p className="font-sans text-xs text-[var(--color-ink-secondary)]">
                      Zero client customer data is stored on my servers. Small organisations qualify for a 7-day evaluation period on the Starter Agent Setup.
                    </p>
                  </div>
                </div>

                {/* Direct Enquiry Form (Client Component) */}
                <div className="lg:col-span-7 bg-[var(--color-canvas-primary)] p-6 sm:p-8 border border-[var(--color-hairline)]">
                  <div className="mb-6 space-y-1">
                    <h3 className="font-display text-xl font-normal text-[var(--color-ink-primary)]">
                      Project Scope &amp; Workflow Outline
                    </h3>
                    <p className="font-sans text-xs text-[var(--color-ink-secondary)]">
                      Fill out the form below for an itemized estimate.
                    </p>
                  </div>

                  <ContactForm
                    variant="light"
                    labels={{
                      name: "Your Name or Company",
                      email: "Your Work Email",
                      brief: "Agent role (Lead Qualifier, Support), channel (WhatsApp / Web), tools needed (Sheets, CRM)...",
                      submit: "Send Quote Request →",
                    }}
                  />
                </div>
              </div>
            </section>
          </InnerPageEntrance>

          {/* 8. FOOTER CROSS-LINKS */}
          <InnerPageEntrance delayIndex={8}>
            <div className="pt-6 border-t border-[var(--color-hairline)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--color-ink-secondary)]">
              <Link
                href="/"
                className="hover:text-[var(--color-ink-primary)] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
              >
                <span>← Back to Home</span>
              </Link>
              <div className="flex items-center gap-4">
                <span>Looking for instant digital agent kits?</span>
                <Link
                  href="/store"
                  className="text-[var(--color-ink-primary)] hover:text-[var(--color-accent)] transition-colors underline underline-offset-4"
                >
                  Browse Store →
                </Link>
              </div>
            </div>
          </InnerPageEntrance>
        </div>
      </SectionContainer>
    </div>
  );
}
