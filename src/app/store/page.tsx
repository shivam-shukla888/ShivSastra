import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageBackground } from "@/components/ui/PageBackground";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import {
  getPublishedStoreProducts,
  getStoreCategoryCounts,
} from "@/lib/products";
import { StoreCatalogView } from "@/components/store/StoreCatalogView";

import { absoluteUrl, serializeJsonLd } from "@/lib/site";

export const revalidate = 60;

export const metadata = {
  title: "Store — Agentic AI Templates, Kits & Digital Tools",
  description:
    "Browse production-tested n8n agent templates, WhatsApp support kits, system prompt libraries, and automation kits by Shivam Shukla.",
  alternates: {
    canonical: absoluteUrl("/store"),
  },
  openGraph: {
    title: "Store — Agentic AI Templates, Kits & Digital Tools | Shivam Shukla",
    description:
      "Browse production-tested n8n agent templates, WhatsApp support kits, system prompt libraries, and automation kits by Shivam Shukla.",
    url: absoluteUrl("/store"),
    type: "website",
    siteName: "ShivSastra",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShivSastra Store — Agentic AI Templates & Kits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Store — Agentic AI Templates, Kits & Digital Tools | Shivam Shukla",
    description:
      "Browse production-tested n8n agent templates, WhatsApp support kits, system prompt libraries, and automation kits by Shivam Shukla.",
    images: ["/og-image.png"],
  },
};

export default async function StorePage() {
  const [products, categoryCounts] = await Promise.all([
    getPublishedStoreProducts(),
    getStoreCategoryCounts(),
  ]);

  const storeJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SHIVSASTRA Store — Agentic AI Templates & Kits",
    description:
      "Browse production-tested n8n agent templates, WhatsApp support kits, system prompt libraries, and automation kits by Shivam Shukla.",
    url: absoluteUrl("/store"),
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
          name: "Store",
          item: absoluteUrl("/store"),
        },
      ],
    },
  };

  return (
    <div className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(storeJsonLd) }}
      />
      <PageBackground
        src="/images/backgrounds/store.webp"
        opacity={0.24}
        position="top"
      />
      <SectionContainer>
        <div className="space-y-16">
          {/* Header Metadata Block */}
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-4 pb-8 border-b border-[var(--color-hairline)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-secondary)]">
                <Link href="/" className="hover:text-[var(--color-ink-primary)]">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[var(--color-accent)] font-medium">Store</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                    Store
                  </h1>
                  <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                    Production-ready agentic AI templates, complete deployment kits, and system prompt packs. Immediate access upon checkout.
                  </p>
                </div>
                <div className="font-mono text-xs text-[var(--color-ink-secondary)] shrink-0">
                  {categoryCounts.purchasable > 0 ? (
                    <>
                      <span className="text-[var(--color-accent)] font-semibold">
                        {categoryCounts.purchasable}
                      </span>{" "}
                      {categoryCounts.purchasable === 1 ? "agent product available" : "agent products available"}
                    </>
                  ) : (
                    <span className="text-[var(--color-ink-secondary)]">
                      {categoryCounts.total} products available
                    </span>
                  )}
                </div>
              </div>
            </div>
          </InnerPageEntrance>

          {/* 3 Category Spotlight Cards */}
          <InnerPageEntrance delayIndex={1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1. AI Agent Templates */}
              <Link
                href="/store/agent-templates"
                className="border border-[#C09F80]/60 bg-[#FAF8F5] p-6 md:p-8 space-y-4 hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] shadow-[3px_3px_0px_0px_#D7CEC7] transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                    <span className="text-[#76323F] uppercase tracking-wider font-semibold">
                      Workflows
                    </span>
                    <span>
                      {categoryCounts.agent_templates} {categoryCounts.agent_templates === 1 ? "template" : "templates"}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                    AI Agent Templates
                  </h2>
                  <p className="font-sans text-xs text-[#565656] leading-relaxed">
                    Production n8n and Make workflows for lead qualification, sales follow-up, and execution reliability.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#C09F80]/30 flex items-center justify-between font-mono text-xs text-[#1A1D20] group-hover:text-[#76323F]">
                  <span>Browse Templates</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* 2. Complete Agent Kits */}
              <Link
                href="/store/agent-kits"
                className="border border-[#C09F80]/60 bg-[#FAF8F5] p-6 md:p-8 space-y-4 hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] shadow-[3px_3px_0px_0px_#D7CEC7] transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                    <span className="text-[#76323F] uppercase tracking-wider font-semibold">
                      Full Kits
                    </span>
                    <span>
                      {categoryCounts.agent_kits} {categoryCounts.agent_kits === 1 ? "kit" : "kits"}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                    Complete Agent Kits
                  </h2>
                  <p className="font-sans text-xs text-[#565656] leading-relaxed">
                    End-to-end agent solutions including WhatsApp support systems and comprehensive small business bundles.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#C09F80]/30 flex items-center justify-between font-mono text-xs text-[#1A1D20] group-hover:text-[#76323F]">
                  <span>Browse Kits</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* 3. Prompt + System Instruction Packs */}
              <Link
                href="/store/prompt-packs"
                className="border border-[#C09F80]/60 bg-[#FAF8F5] p-6 md:p-8 space-y-4 hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] shadow-[3px_3px_0px_0px_#D7CEC7] transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                    <span className="text-[#76323F] uppercase tracking-wider font-semibold">
                      Prompts &amp; Schemas
                    </span>
                    <span>
                      {categoryCounts.prompt_packs} {categoryCounts.prompt_packs === 1 ? "pack" : "packs"}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                    Prompt + System Instruction Packs
                  </h2>
                  <p className="font-sans text-xs text-[#565656] leading-relaxed">
                    Battle-tested system prompts, reasoning instructions, guardrails, and JSON schemas for production agents.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#C09F80]/30 flex items-center justify-between font-mono text-xs text-[#1A1D20] group-hover:text-[#76323F]">
                  <span>Browse Prompt Packs</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </InnerPageEntrance>

          {/* Main Security Banner */}
          <InnerPageEntrance delayIndex={2}>
            <div className="p-6 md:p-8 border border-[#76323F]/40 bg-[#FAF8F5] space-y-3 shadow-[3px_3px_0px_0px_#D7CEC7]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#76323F] inline-block" />
                <h2 className="font-display text-xl sm:text-2xl text-[#1A1D20] font-normal">
                  We prioritize security
                </h2>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#1A1D20] leading-relaxed font-medium">
                Data stays in your control • Human approval points included • No customer data stored on my servers • Built for production reliability
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-3 border-t border-[#C09F80]/40 font-mono text-xs text-[#565656]">
                <div>
                  <span className="text-[#76323F] font-bold">✓</span> Data In Your Control
                </div>
                <div>
                  <span className="text-[#76323F] font-bold">✓</span> Human Approval Points
                </div>
                <div>
                  <span className="text-[#76323F] font-bold">✓</span> Zero Customer Data Stored
                </div>
                <div>
                  <span className="text-[#76323F] font-bold">✓</span> Production-Grade Safeguards
                </div>
              </div>
            </div>
          </InnerPageEntrance>

          {/* Full Interactive Catalog View */}
          <InnerPageEntrance delayIndex={3}>
            <div className="space-y-8 pt-6">
              <div className="space-y-1">
                <h2 className="font-display text-3xl font-normal text-[var(--color-ink-primary)]">
                  All Digital Agent Products
                </h2>
              </div>

              <StoreCatalogView
                initialProducts={products}
                categoryCounts={categoryCounts}
                activeCategory="all"
                showCategoryTabs={true}
              />
            </div>
          </InnerPageEntrance>

          {/* Custom Services Bridge Banner */}
          <InnerPageEntrance delayIndex={4}>
            <div className="p-8 border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)] inline-block" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] font-semibold">
                    Need Custom Agent Implementation?
                  </span>
                </div>
                <h3 className="font-display text-2xl font-normal text-[var(--color-ink-primary)]">
                  Custom Agentic AI Systems &amp; Implementation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                  Looking for bespoke agent implementation rather than ready-made templates?
                  I offer tailored client services including Starter Agent Setup (₹22,000 – ₹35,000 with a 7-day evaluation period), Business Agent Packages (₹55,000 – ₹90,000), and Full Agentic Systems (₹1,10,000 – ₹1,80,000) with production safeguards and strict data privacy guarantees.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider px-5 py-3 border border-[var(--color-ink-primary)] text-[var(--color-ink-primary)] hover:bg-[var(--color-ink-primary)] hover:text-[var(--color-canvas-primary)] transition-colors self-start md:self-auto shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
              >
                Explore Service Packages →
              </Link>
            </div>
          </InnerPageEntrance>

          {/* Back Link */}
          <InnerPageEntrance delayIndex={5}>
            <div className="pt-6 border-t border-[var(--color-hairline)]">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink-primary)]"
              >
                <span>← Back to Home</span>
              </Link>
            </div>
          </InnerPageEntrance>
        </div>
      </SectionContainer>
    </div>
  );
}
