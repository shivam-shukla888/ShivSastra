import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { InnerPageEntrance } from "@/components/layout/InnerPageEntrance";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getPublishedProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";
import { ArrowRight, ExternalLink, ShieldCheck, Cpu } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Engineering Portfolio & Case Studies — JIOSI",
  description:
    "Verified software systems, Agentic AI architectures, and production case studies by JIOSI. Featuring JIOSI Inbox, Shivsastra, Yojna Setu, and QuickEats.",
  alternates: {
    canonical: absoluteUrl("/projects"),
  },
  openGraph: {
    title: "Engineering Portfolio & Case Studies — JIOSI",
    description:
      "Verified software systems, Agentic AI architectures, and production case studies by JIOSI.",
    url: absoluteUrl("/projects"),
    type: "website",
    siteName: "JIOSI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Selected Work & Engineering Projects — JIOSI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Portfolio & Case Studies — JIOSI",
    description:
      "Verified software systems, Agentic AI architectures, and production case studies by JIOSI.",
    images: ["/og-image.png"],
  },
};

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900">
      {/* 1. DARK HERO SECTION */}
      <section className="relative w-full bg-[#0B1020] text-white pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial from-indigo-500/20 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />

        <SectionContainer className="relative z-10">
          <InnerPageEntrance delayIndex={0}>
            <div className="space-y-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="cyan" dot size="sm">
                  CASE STUDIES &amp; PORTFOLIO
                </Badge>
                <span className="text-slate-400 text-xs font-mono">
                  VERIFIED PRODUCTION ARCHITECTURES
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Proven Engineering &amp; System Case Studies
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
                Explore our full technical case studies across multi-agent welfare discovery, high-concurrency order processing, full-stack digital publishing, and keyboard-first productivity software.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>0 Fluff Benchmarks</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Deterministic Backends</span>
                </span>
                <span>•</span>
                <span>Full Architectural Monograms</span>
              </div>
            </div>
          </InnerPageEntrance>
        </SectionContainer>
      </section>

      {/* 2. CASE STUDY CARDS LIST */}
      <section className="py-20 md:py-28 bg-[#F5F2ED] border-b border-[#E2E8F0]">
        <SectionContainer>
          <div className="space-y-16">
            <div className="space-y-12">
              {projects.length > 0 ? (
                projects.map((project) => (
                  <Card
                    key={project.id}
                    variant="standard"
                    className="p-6 md:p-10 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Image Thumbnail */}
                      <div className="lg:col-span-5">
                        {project.coverImageUrl ? (
                          <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100 shadow-xs">
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
                          <div className="w-full aspect-[16/10] rounded-xl border border-dashed border-slate-300 bg-slate-100 flex items-center justify-center p-6">
                            <span className="font-mono text-xs text-slate-400">
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
                            <span className="text-xs font-mono text-slate-400">
                              {project.projectYear}
                            </span>
                          )}
                          {project.category && (
                            <span className="text-xs font-sans text-slate-500 font-medium">
                              • {project.category}
                            </span>
                          )}
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                          {project.title}
                        </h2>

                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Tech stack badges */}
                        {project.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 font-medium"
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
                              className: "text-xs font-bold uppercase tracking-wider",
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
                                variant: "outline",
                                size: "md",
                                className: "text-xs font-medium text-slate-700",
                              })}
                            >
                              <span>Inspect Live Deploy</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-400" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-slate-500 font-mono text-sm">
                    No public case studies found.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom CTA to Services */}
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0B1020] to-[#1E293B] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-xl">
                <Badge variant="cyan" dot size="sm">
                  WORK WITH US
                </Badge>
                <h3 className="font-display text-2xl font-bold text-white">
                  Want an equivalent system built for your company?
                </h3>
                <p className="text-slate-300 text-sm">
                  We engineer production-grade Agentic AI and backend systems on client-owned infrastructure.
                </p>
              </div>

              <Link
                href="/services"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "shrink-0 shadow-lg shadow-indigo-500/20",
                })}
              >
                <span>View Service Packages &amp; Pricing</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
