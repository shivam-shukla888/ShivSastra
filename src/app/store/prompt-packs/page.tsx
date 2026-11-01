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
import { absoluteUrl } from "@/lib/site";

export const revalidate = 60;

export const metadata = {
  title: "Prompt + System Instruction Packs — Store",
  description:
    "Battle-tested system prompts, reasoning instructions, guardrails, and JSON schemas for production agents by Shivam Shukla.",
  alternates: {
    canonical: absoluteUrl("/store/prompt-packs"),
  },
  openGraph: {
    title: "Prompt + System Instruction Packs — Store | Shivam Shukla",
    description:
      "Battle-tested system prompts, reasoning instructions, guardrails, and JSON schemas for production agents by Shivam Shukla.",
    url: absoluteUrl("/store/prompt-packs"),
    type: "website",
    siteName: "ShivSastra",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prompt + System Instruction Packs — ShivSastra Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt + System Instruction Packs — Store | Shivam Shukla",
    description:
      "Battle-tested system prompts, reasoning instructions, guardrails, and JSON schemas for production agents by Shivam Shukla.",
    images: ["/og-image.png"],
  },
};

export default async function PromptPacksStorePage() {
  const [products, categoryCounts] = await Promise.all([
    getPublishedStoreProducts({ category: "prompt_packs" }),
    getStoreCategoryCounts(),
  ]);

  return (
    <div className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      <PageBackground
        src="/images/backgrounds/store.webp"
        opacity={0.24}
        position="top"
      />
      <SectionContainer>
        <div className="space-y-12">
          {/* Header Metadata Block */}
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-4 pb-8 border-b border-[var(--color-hairline)]">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-ink-secondary)]">
                <Link href="/store" className="hover:text-[var(--color-ink-primary)]">
                  Store
                </Link>
                <span>/</span>
                <span className="text-[var(--color-accent)] font-medium">Prompt + System Instruction Packs</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[var(--color-ink-primary)]">
                    Prompt + System Instruction Packs
                  </h1>
                  <p className="font-sans text-sm md:text-base text-[var(--color-ink-secondary)] leading-relaxed">
                    Battle-tested system prompts, reasoning instructions, guardrails, and JSON schemas for production agents.
                  </p>
                </div>
                <div className="font-mono text-xs text-[var(--color-ink-secondary)] shrink-0">
                  <span className="text-[var(--color-accent)] font-semibold">
                    {categoryCounts.prompt_packs} {categoryCounts.prompt_packs === 1 ? "pack" : "packs"} available
                  </span>
                </div>
              </div>
            </div>
          </InnerPageEntrance>

          {/* Catalog View */}
          <InnerPageEntrance delayIndex={1}>
            <StoreCatalogView
              initialProducts={products}
              categoryCounts={categoryCounts}
              activeCategory="prompt_packs"
              showCategoryTabs={false}
            />
          </InnerPageEntrance>

          {/* Navigation Links */}
          <InnerPageEntrance delayIndex={2}>
            <div className="pt-6 border-t border-[var(--color-hairline)] flex items-center justify-between">
              <Link
                href="/store"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)] transition-colors"
              >
                <span>← All Products</span>
              </Link>
              <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-ink-secondary)]">
                <Link href="/store/agent-templates" className="hover:text-[var(--color-ink-primary)]">
                  ← AI Agent Templates
                </Link>
                <Link href="/store/agent-kits" className="hover:text-[var(--color-ink-primary)]">
                  Complete Agent Kits →
                </Link>
              </div>
            </div>
          </InnerPageEntrance>
        </div>
      </SectionContainer>
    </div>
  );
}

