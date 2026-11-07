import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { getPublishedProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowRight,
  ArrowSquareOut as ExternalLink,
  ShieldCheck,
  Cpu,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Engineering Portfolio & Case Studies — SHIVSASTRA",
  description:
    "Verified software systems, Agentic AI architectures, and production case studies by SHIVSASTRA. Featuring JIOSI Inbox, Yojna Setu, and QuickEats.",
  alternates: {
    canonical: absoluteUrl("/projects"),
  },
  openGraph: {
    title: "Engineering Portfolio & Case Studies — SHIVSASTRA",
    description:
      "Verified software systems, Agentic AI architectures, and production case studies by SHIVSASTRA.",
    url: absoluteUrl("/projects"),
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Selected Work & Engineering Projects — SHIVSASTRA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Portfolio & Case Studies — SHIVSASTRA",
    description:
      "Verified software systems, Agentic AI architectures, and production case studies by SHIVSASTRA.",
    images: ["/og-image.png"],
  },
};

export default async function ProjectsPage() {
  const allProjects = await getPublishedProjects();
  // Strictly showcase exactly three client projects: JIOSI Inbox, Yojna Setu, and QuickEats
  const clientProjectSlugs = ["inbox", "yojna-setu", "quickeats"];
  const projects = allProjects
    .filter((p) => clientProjectSlugs.includes(p.slug))
    .sort((a, b) => clientProjectSlugs.indexOf(a.slug) - clientProjectSlugs.indexOf(b.slug));

  return (
    <div className="relative w-full overflow-hidden bg-[#F5F2ED] text-[#1A1D20]">
      {/* 1. WARM EDITORIAL HERO SECTION */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30">
        <SectionContainer className="relative z-10">
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                  <span>CASE STUDIES &amp; ARCHITECTURES</span>
                </div>
                <span className="text-[#565656] text-xs font-mono">
                  VERIFIED PRODUCTION BUILDS
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
                Proven Engineering &amp; System Case Studies
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#565656] leading-relaxed">
                Explore our full technical case studies across multi-agent welfare discovery, high-concurrency order processing, full-stack digital publishing, and intelligent email productivity platforms.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#565656]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#76323F]" />
                  <span>Client-Owned Deployments</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#76323F]" />
                  <span>Deterministic Backends</span>
                </span>
                <span>•</span>
                <span>Architectural Monographs</span>
              </div>
            </div>
          </InnerPageEntrance>
        </SectionContainer>
      </section>

      {/* 2. CASE STUDY CARDS LIST */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <div className="space-y-12">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-6 md:p-10 overflow-hidden bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[4px_4px_0px_0px_#D7CEC7]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Image Thumbnail */}
                      <div className="lg:col-span-5">
                        {project.coverImageUrl ? (
                          <div className="w-full aspect-[16/10] overflow-hidden border border-[#C09F80]/40 relative bg-[#FAF8F5]">
                            <Image
                              src={project.coverImageUrl}
                              alt={project.title}
                              fill
                              unoptimized
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                          </div>
                        ) : (
                          <div className="w-full aspect-[16/10] border border-dashed border-[#C09F80]/50 bg-[#FAF8F5] flex items-center justify-center p-6">
                            <span className="font-mono text-xs text-[#565656]">
                              System Architecture Diagram
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Column */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          {project.editionCode && (
                            <Badge variant="neutral" size="sm">
                              {project.editionCode}
                            </Badge>
                          )}
                          {project.projectYear && (
                            <span className="text-xs font-mono text-[#565656]">
                              {project.projectYear}
                            </span>
                          )}
                          {project.category && (
                            <span className="text-xs font-sans text-[#565656] font-medium">
                              • {project.category}
                            </span>
                          )}
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#1A1D20] leading-tight">
                          {project.title}
                        </h2>

                        <p className="font-sans text-sm sm:text-base text-[#565656] leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Tech stack badges */}
                        {project.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[11px] px-2.5 py-1 bg-[#FAF8F5] text-[#565656] border border-[#C09F80]/40 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          <Link
                            href={project.slug === "inbox" ? "/products/inbox" : `/projects/${project.slug}`}
                            className={buttonStyles({
                              variant: "primary",
                              size: "md",
                            })}
                          >
                            <span>
                              {project.slug === "inbox" ? "View Product Specs" : "Read Architectural Case Study"}
                            </span>
                            <ArrowRight className="w-4 h-4 ml-1.5" />
                          </Link>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={buttonStyles({
                                variant: "secondary",
                                size: "md",
                              })}
                            >
                              <span>Inspect Live Deploy</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#76323F]" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-[#565656] font-mono text-sm">
                    No public case studies found.
                  </p>
                </div>
              )}
            </div>

            {/* 3. STUDIO ENGINEERING PLATFORM (Distinguished from client projects) */}
            <div className="p-8 sm:p-10 border border-[#C09F80] bg-[#FAF8F5] shadow-[4px_4px_0px_0px_#D7CEC7] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#C09F80]/30">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30">
                      Studio Platform
                    </span>
                    <span className="font-mono text-xs text-[#565656]">Self-Engineered Infrastructure</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1A1D20]">
                    ShivSastra — Digital HQ
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/projects/shivsastra"
                    className={buttonStyles({ variant: "primary", size: "md" })}
                  >
                    <span>Read Platform Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                  <a
                    href="https://github.com/shivam-shukla888/ShivSastra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: "secondary", size: "md" })}
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#76323F]" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] overflow-hidden border border-[#C09F80]/50 shadow-[2px_2px_0px_0px_#D7CEC7] bg-[#FAF8F5]">
                    <Image
                      src="/images/projects/shivsastra/shivsastra-desktop-overview.png"
                      alt="ShivSastra Digital HQ Platform Architecture"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <p className="font-sans text-sm sm:text-base text-[#565656] leading-relaxed">
                    Full-stack engineering HQ and personal digital platform engineered with Next.js 16 App Router, TypeScript, and Supabase. Features server-side rendering, cryptographic HMAC-SHA256 Razorpay payment verification, Row-Level Security (RLS), Cloudflare Turnstile anti-spam, and contextual AI assistant.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {["Next.js 16", "TypeScript", "Supabase RLS", "PostgreSQL", "Razorpay HMAC", "Groq Llama 3"].map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-[#F5F2ED] text-[#1A1D20] border border-[#C09F80]/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA (Engineering Portfolio Focus) */}
            <div className="p-8 sm:p-12 border border-[#C09F80]/40 bg-[#1A1D20] text-[#F5F2ED] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#565656]">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40 text-xs font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#C09F80]" />
                  <span>LET&apos;S COLLABORATE</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F2ED]">
                  Looking for an AI Systems or Backend Engineer?
                </h3>
                <p className="text-[#D7CEC7] text-sm">
                  Available for engineering roles, technical architecture consultation, and select client engagements.
                </p>
              </div>

              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "dark-inverse",
                  size: "lg",
                  className: "shrink-0",
                })}
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-[#76323F]" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
