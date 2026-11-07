import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PageBackground } from "@/components/ui/PageBackground";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { getPublishedLabEntries } from "@/lib/lab";
import {
  Flask as FlaskConical,
  ArrowRight,
  ArrowLeft,
} from "@phosphor-icons/react/dist/ssr";

import { absoluteUrl } from "@/lib/site";

export const revalidate = 60;

export const metadata = {
  title: "Lab — Experiments & Technical Notes",
  description: "Personal sandbox for experimental ideas, software builds, and technical notes.",
  alternates: {
    canonical: absoluteUrl("/lab"),
  },
  openGraph: {
    title: "Lab — Shivam Shukla",
    description: "Personal sandbox for experimental ideas, software builds, and technical notes.",
    url: absoluteUrl("/lab"),
    type: "website",
    siteName: "ShivSastra",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Personal Lab & Sandbox — Shivam Shukla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lab — Shivam Shukla",
    description: "Personal sandbox for experimental ideas, software builds, and technical notes.",
    images: ["/og-image.png"],
  },
};

export default async function LabPage() {
  const entries = await getPublishedLabEntries();

  return (
    <div className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden bg-[#F5F2ED] text-[#1A1D20]">
      {/* Warm atmospheric light wash */}
      <div className="hero-glow-warm pointer-events-none" />
      <div className="hero-glow-right pointer-events-none" />

      <PageBackground
        src="/images/backgrounds/lab.webp"
        opacity={0.18}
        position="top"
      />
      <SectionContainer className="relative z-10">
        <div className="max-w-3xl space-y-10">
          {/* Header Block */}
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#FAF8F5] flex items-center justify-center text-[#76323F] border border-[#C09F80]/50 shadow-[1px_1px_0px_0px_#C09F80]">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[#1A1D20]">
                  Architecture Lab
                </h1>
              </div>

              <div className="p-6 border border-[#D7CEC7] bg-[#FAF8F5] space-y-2 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <p className="font-sans text-sm text-[#1A1D20] font-semibold">
                  Experiments &amp; Technical Prototypes
                </p>
                <p className="font-sans text-xs text-[#565656] leading-relaxed">
                  A personal sandbox for experimental ideas, software builds, and technical notes by Shivam Shukla.
                </p>
              </div>
            </div>
          </InnerPageEntrance>

          {/* Catalog Entries or Editorial Placeholder */}
          <InnerPageEntrance delayIndex={1}>
            <div>
              {entries.length === 0 ? (
                <div className="p-8 border border-[#D7CEC7] bg-[#FAF8F5] space-y-4 shadow-[4px_4px_0px_0px_#D7CEC7]">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#76323F] font-semibold block">
                      Active Development
                    </span>
                    <h2 className="font-display text-2xl text-[#1A1D20]">
                      Current Engineering Experiments
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-[#565656] leading-relaxed">
                      I am packaging sandbox experiments around Groq LLM tool-calling pipelines, STOMP WebSocket ordering states, and deterministic rules engines. Standalone technical notes and benchmarks will be published here as they pass validation.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#D7CEC7] flex flex-wrap items-center gap-4 text-xs font-mono">
                    <Link
                      href="/projects"
                      className="text-[#76323F] hover:text-[#5a2530] font-semibold underline underline-offset-4"
                    >
                      Explore Shipped Case Studies
                    </Link>
                    <Link
                      href="/projects/yojna-setu"
                      className="text-[#565656] hover:text-[#1A1D20]"
                    >
                      Yojna Setu Architecture →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="divide-y divide-[#D7CEC7] border-y border-[#D7CEC7]">
                  {entries.map((entry) => (
                    <article key={entry.id} className="py-8 space-y-4 group">
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-[#76323F] uppercase tracking-[0.12em] font-semibold">
                            {entry.category}
                          </span>
                          <span className="text-[#D7CEC7]">•</span>
                          <span className="text-[#565656] uppercase tracking-[0.08em]">
                            {entry.status}
                          </span>
                        </div>
                        {entry.publishedAt && (
                          <time
                            dateTime={entry.publishedAt}
                            className="text-[#565656]"
                          >
                            {new Date(entry.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        )}
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                        <Link href={`/lab/${entry.slug}`} className="block">
                          {entry.title}
                        </Link>
                      </h2>

                      {entry.contentMarkdown && (
                        <p className="font-sans text-sm text-[#565656] line-clamp-3 leading-relaxed">
                          {entry.contentMarkdown.split("\n\n")[0].replace(/^#+\s*/, "")}
                        </p>
                      )}

                      {entry.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 border border-[#D7CEC7] text-[#565656] bg-[#FAF8F5]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-2">
                        <Link
                          href={`/lab/${entry.slug}`}
                          className="inline-flex items-center gap-1.5 font-sans font-medium text-xs text-[#1A1D20] group-hover:text-[#76323F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F]"
                        >
                          <span>Read Entry</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </InnerPageEntrance>

          {/* Navigation Return */}
          <InnerPageEntrance delayIndex={2}>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-sans text-xs text-[#565656] hover:text-[#76323F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </InnerPageEntrance>
        </div>
      </SectionContainer>
    </div>
  );
}
