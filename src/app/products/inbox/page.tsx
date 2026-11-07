import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowUpRight,
  Stack as Layers,
  Database,
  HardDrives as Server,
  EnvelopeSimple as Mail,
  Keyboard,
  Sparkle as Sparkles,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "JIOSI Inbox — High-Velocity AI Email Productivity Platform",
  description:
    "JIOSI Inbox is a high-performance AI email productivity platform built with Spring Boot 3.3.5 and React 18. AI thread summaries, instant search, and zero distraction.",
  alternates: {
    canonical: absoluteUrl("/products/inbox"),
  },
  openGraph: {
    title: "JIOSI Inbox — High-Velocity AI Email Productivity Platform",
    description:
      "JIOSI Inbox is a high-performance AI email productivity platform built with Spring Boot 3.3.5 and React 18. AI thread summaries, instant search, and zero distraction.",
    url: absoluteUrl("/products/inbox"),
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/images/products/inbox/inbox-desktop-overview.png",
        width: 1200,
        height: 750,
        alt: "JIOSI Inbox Platform Interface",
      },
    ],
  },
};

export default function JiosiInboxProductPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F2ED] text-[#1A1D20]">
      {/* 1. WARM EDITORIAL HERO BANNER */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30 overflow-hidden">
        {/* Warm atmospheric light wash */}
        <div className="hero-glow-warm pointer-events-none" />
        <div className="hero-glow-right pointer-events-none" />

        <SectionContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Link href="/products" className="text-xs font-mono text-[#565656] hover:text-[#1A1D20] transition-colors">
                Products
              </Link>
              <span className="text-[#C09F80] text-xs font-mono">/</span>
              <span className="text-xs font-mono text-[#76323F] font-semibold">JIOSI Inbox</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium shadow-[1px_1px_0px_0px_#C09F80]">
              <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
              <span>Production Platform · Active Deployment</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
              Your inbox, intelligently managed.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#565656] leading-relaxed max-w-2xl mx-auto">
              Read less. Understand faster. Respond smarter. An AI-powered email productivity platform engineered for speed, focus, and intelligent assistance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://inbox.jiosi.online"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "bg-[#76323F] hover:bg-[#5a2530] text-[#FAF8F5] border-none shadow-[2px_2px_0px_0px_#C09F80]",
                })}
              >
                <span>Launch JIOSI Inbox Web App</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#features"
                className={buttonStyles({
                  variant: "secondary",
                  size: "lg",
                  className: "border-[#D7CEC7] bg-[#FAF8F5] text-[#1A1D20] hover:border-[#76323F]",
                })}
              >
                <span>Explore Architecture &amp; Features ↓</span>
              </a>
            </div>

            <p className="font-mono text-xs text-[#565656] pt-2">
              Hosted at <span className="text-[#1A1D20] font-medium">inbox.jiosi.online</span> · Multi-tenant HMAC security · Neon PostgreSQL
            </p>
          </div>

          {/* Large Hero Product Visual with Luxury Double Hairline Frame */}
          <div className="mt-14 max-w-5xl mx-auto border-t-2 border-t-[#76323F] border-x border-b border-[#D7CEC7] bg-[#FAF8F5] p-3 sm:p-4 shadow-[6px_6px_0px_0px_#C09F80] group">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#D7CEC7] bg-[#1A1D20]">
              <Image
                src="/images/products/inbox/inbox-desktop-overview.png"
                alt="JIOSI Inbox Full Desktop Interface"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 2. CORE FEATURES BREAKDOWN */}
      <section id="features" className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Key Capabilities"
              badgeVariant="primary"
              title="Built for High-Output Knowledge Workers"
              description="Engineered to eliminate cognitive overload, reduce message processing time, and protect mental focus."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/40 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                  Instant AI Summaries
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Long email threads are synthesized into bulleted executive summaries, extracting action items, deadlines, and key decisions instantly.
                </p>
              </div>

              <div className="p-8 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/40 flex items-center justify-center">
                  <Keyboard className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                  Rapid Keyboard Workflows
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Navigate, star, archive, snooze, and reply at the speed of thought. Built with frictionless triage hotkeys so hands never leave the keys.
                </p>
              </div>

              <div className="p-8 space-y-4 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                <div className="w-10 h-10 bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/40 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                  Google Workspace Sync
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Seamless synchronization with Gmail and Google Workspace accounts via OAuth 2.0 PKCE with granular scope permissions.
                </p>
              </div>
            </div>

            {/* Additional Secondary Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 bg-[#FAF8F5] border border-[#C09F80]/40 space-y-2">
                <h4 className="font-display text-base font-normal text-[#1A1D20]">
                  Honest Empty States
                </h4>
                <p className="font-sans text-xs text-[#565656] leading-relaxed">
                  True &ldquo;Inbox Zero&rdquo; recognition without disguising stale demo data as real customer messages.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#C09F80]/40 space-y-2">
                <h4 className="font-display text-base font-normal text-[#1A1D20]">
                  Multi-Tenant Isolation
                </h4>
                <p className="font-sans text-xs text-[#565656] leading-relaxed">
                  Strict workspace-level authorization interceptors ensure zero cross-tenant data leakage.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#C09F80]/40 space-y-2">
                <h4 className="font-display text-base font-normal text-[#1A1D20]">
                  Sub-Second Search
                </h4>
                <p className="font-sans text-xs text-[#565656] leading-relaxed">
                  Instant Omni-search across all senders, subject lines, labels, and thread bodies.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#C09F80]/40 space-y-2">
                <h4 className="font-display text-base font-normal text-[#1A1D20]">
                  Offline Detection
                </h4>
                <p className="font-sans text-xs text-[#565656] leading-relaxed">
                  Graceful network degradation with visual alerts and offline action queuing.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. PRODUCTION BACKEND ARCHITECTURE */}
      <section className="w-full py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="System Specifications"
              badgeVariant="primary"
              title="Engineered for Concurrency &amp; Security"
              description="A breakdown of the verified technology stack powering JIOSI Inbox in production."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-[#76323F]" />
                    <h4 className="font-display text-lg font-normal text-[#1A1D20]">
                      Spring Boot 3.3.5 Backend (Java 21 LTS)
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Stateless RESTful microservice with Spring Security, HMAC-SHA256 bearer tokens, and strict workspace boundary validation.
                  </p>
                </div>

                <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#76323F]" />
                    <h4 className="font-display text-lg font-normal text-[#1A1D20]">
                      Neon Serverless PostgreSQL 16
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Uses PgBouncer connection pooling for runtime traffic and direct unpooled connections for Flyway schema migrations with advisory lock safety.
                  </p>
                </div>

                <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#76323F]" />
                    <h4 className="font-display text-lg font-normal text-[#1A1D20]">
                      React 18 + TypeScript Client
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Optimistic mutations with immediate visual feedback, responsive single-panel mobile flow, and 3-panel collapsible desktop layout.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 bg-[#1A1D20] text-[#D7CEC7] font-mono text-xs border border-[#C09F80]/40 space-y-4 shadow-[4px_4px_0px_0px_#565656]">
                  <div className="flex items-center justify-between pb-3 border-b border-[#C09F80]/20">
                    <span className="text-[#F5F2ED] font-semibold">Architecture Topology</span>
                    <span className="text-[#C09F80]">Target: inbox.jiosi.online</span>
                  </div>

                  <div className="space-y-1 text-[#D7CEC7]">
                    <p className="text-[#F5F2ED]">Client: React 18 + TypeScript</p>
                    <p className="pl-4">├── Authorization: Bearer &lt;HMAC-SHA256 Token&gt;</p>
                    <p className="pl-4">├── X-Workspace-Id: &lt;UUID&gt;</p>
                    <p className="pl-4">└── Centralized API Client</p>
                    <p className="text-[#F5F2ED] pt-2">Backend: Spring Boot 3.3.5 (Java 21)</p>
                    <p className="pl-4">├── SecurityInterceptor (401 / 403 Guards)</p>
                    <p className="pl-4">├── REST Controllers: Threads, Drafts, Workspaces</p>
                    <p className="pl-4">└── Flyway DDL Migrations</p>
                    <p className="text-[#F5F2ED] pt-2">Database: Neon PostgreSQL 16</p>
                    <p className="pl-4">└── PgBouncer Pooler</p>
                  </div>

                  <div className="pt-2 text-[11px] text-[#C09F80] border-t border-[#C09F80]/20">
                    ✓ Verified Architecture · Shipped Platform
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. SCREENSHOTS GALLERY */}
      <section className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-14">
            <SectionHeader
              badge="Interface Tour"
              badgeVariant="primary"
              title="Designed for Deep Work"
              description="Take a closer look at the actual views and workflows within JIOSI Inbox."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden border border-[#C09F80]/50 shadow-[2px_2px_0px_0px_#D7CEC7] bg-[#FAF8F5]">
                  <Image
                    src="/images/products/inbox/inbox-threads-view.png"
                    alt="JIOSI Inbox Thread List and Action View"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-normal text-[#1A1D20]">
                    Thread List &amp; Quick Actions
                  </h4>
                  <p className="font-sans text-xs text-[#565656]">
                    Dense, high-contrast message listing with immediate star, snooze, and archive triggers.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden border border-[#C09F80]/50 shadow-[2px_2px_0px_0px_#D7CEC7] bg-[#FAF8F5]">
                  <Image
                    src="/images/products/inbox/inbox-detail-view.png"
                    alt="JIOSI Inbox Message Inspector View"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-normal text-[#1A1D20]">
                    Contextual Message Inspector
                  </h4>
                  <p className="font-sans text-xs text-[#565656]">
                    Clean reading pane with inline markdown support, quick reply composer, and attachment preview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 5. CTA TO ACTUAL APPLICATION (Grounded Contrast) */}
      <section className="w-full bg-[#1A1D20] text-[#F5F2ED] py-20 border-t border-[#C09F80]/30">
        <SectionContainer>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Immediate Use</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#F5F2ED]">
              Experience JIOSI Inbox Today
            </h2>

            <p className="font-sans text-base text-[#D7CEC7] leading-relaxed">
              Step into high-velocity email management. Open the web app or request an enterprise workspace deployment.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://inbox.jiosi.online"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                })}
              >
                <span>Launch App (inbox.jiosi.online)</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>

              <Link
                href="/contact?subject=JIOSI%20Inbox%20Enterprise%20Inquiry"
                className={buttonStyles({
                  variant: "dark-inverse",
                  size: "lg",
                })}
              >
                <span>Inquire About Enterprise Deployment</span>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
