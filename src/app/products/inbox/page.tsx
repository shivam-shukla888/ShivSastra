import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonStyles } from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowUpRight,
  Layers,
  Database,
  Server,
  Mail,
  Keyboard,
  Sparkles,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "JIOSI Inbox — High-Velocity AI Email Productivity Platform",
  description:
    "JIOSI Inbox is an opinionated, keyboard-first email client built with Spring Boot 3.3.5 and React 18. AI thread summaries, instant search, and zero distraction.",
  alternates: {
    canonical: absoluteUrl("/products/inbox"),
  },
  openGraph: {
    title: "JIOSI Inbox — High-Velocity AI Email Productivity Platform",
    description:
      "JIOSI Inbox is an opinionated, keyboard-first email client built with Spring Boot 3.3.5 and React 18. AI thread summaries, instant search, and zero distraction.",
    url: absoluteUrl("/products/inbox"),
    type: "website",
    siteName: "JIOSI",
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
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* =======================================================
          1. DARK NAVY HERO WITH LIVE APPLICATION CTA
          ======================================================= */}
      <section className="relative w-full bg-[#0B1020] text-white pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none opacity-40">
          <div className="w-full h-full bg-gradient-to-b from-indigo-500/30 via-cyan-500/10 to-transparent blur-3xl" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Link href="/products" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                Products
              </Link>
              <span className="text-slate-600 text-xs font-mono">/</span>
              <span className="text-xs font-mono text-cyan-300 font-semibold">JIOSI Inbox</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-300 border border-white/15 text-xs font-mono font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Production Preview v0.1 · Active Deployment</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your inbox, intelligently managed.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Read less. Understand faster. Respond smarter. An opinionated, keyboard-first email productivity client inspired by Superhuman and Linear.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://inbox.jiosi.online"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "font-semibold shadow-xl shadow-indigo-600/30",
                })}
              >
                <span>Launch JIOSI Inbox Web App</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </a>

              <a
                href="#features"
                className={buttonStyles({
                  variant: "glass",
                  size: "lg",
                  className: "text-slate-200 hover:text-white border-white/20",
                })}
              >
                <span>Explore Architecture &amp; Features ↓</span>
              </a>
            </div>

            <p className="font-mono text-xs text-slate-400 pt-2">
              Hosted at <span className="text-slate-200">inbox.jiosi.online</span> · Multi-tenant HMAC security · Neon PostgreSQL
            </p>
          </div>

          {/* Large Hero Product Visual */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/5 border border-white/15 shadow-2xl backdrop-blur-xl">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950">
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

      {/* =======================================================
          2. CORE FEATURES BREAKDOWN
          ======================================================= */}
      <section id="features" className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Key Capabilities"
              badgeVariant="primary"
              title="Built for High-Output Knowledge Workers"
              description="Engineered to eliminate cognitive overload, reduce message triage time, and protect mental focus."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Instant AI Summaries
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Long email threads are synthesized into bulleted executive summaries, extracting action items, deadlines, and key decisions instantly.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                  <Keyboard className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Keyboard-First Triage
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Navigate, star, archive, snooze, and reply at the speed of thought. Built with frictionless shortcuts (`⌘K`, `E`, `S`, `J`/`K`) so hands never leave the keys.
                </p>
              </Card>

              <Card className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Google Workspace Sync
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Seamless synchronization with Gmail and Google Workspace accounts via OAuth 2.0 PKCE with granular scope permissions.
                </p>
              </Card>
            </div>

            {/* Additional Secondary Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Honest Empty States
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  True &ldquo;Inbox Zero&rdquo; recognition without disguising stale demo data as real customer messages.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Multi-Tenant Isolation
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Strict workspace-level authorization interceptors ensure zero cross-tenant data leakage.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Sub-Second Search
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Instant Omni-search across all senders, subject lines, labels, and thread bodies.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h4 className="font-display text-base font-bold text-slate-900">
                  Offline Detection
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Graceful network degradation with visual alerts and offline action queuing.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          3. PRODUCTION BACKEND ARCHITECTURE
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-slate-50 border-b border-slate-200">
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
                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      Spring Boot 3.3.5 Backend (Java 21 LTS)
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Stateless RESTful microservice with Spring Security, HMAC-SHA256 bearer tokens, and strict `SecurityInterceptor` workspace boundary validation.
                  </p>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      Neon Serverless PostgreSQL 16
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Uses PgBouncer connection pooling for runtime traffic and direct unpooled connections for Flyway schema migrations with advisory lock safety.
                  </p>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      React 18 + TypeScript Client
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Optimistic mutations with immediate visual feedback, responsive single-panel mobile flow, and 3-panel collapsible desktop layout.
                  </p>
                </Card>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#0B1020] text-slate-300 font-mono text-xs border border-white/10 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-white font-semibold">Architecture Topology</span>
                    <span className="text-cyan-400">Target: inbox.jiosi.online</span>
                  </div>

                  <div className="space-y-1 text-slate-400">
                    <p className="text-white">Client: React 18 + TypeScript (Port 3000 / 5173)</p>
                    <p className="pl-4">├── Authorization: Bearer &lt;HMAC-SHA256 Token&gt;</p>
                    <p className="pl-4">├── X-Workspace-Id: &lt;UUID&gt;</p>
                    <p className="pl-4">└── Centralized API Client (Axios)</p>
                    <p className="text-white pt-2">Backend: Spring Boot 3.3.5 (Port 8080)</p>
                    <p className="pl-4">├── SecurityInterceptor (401 / 403 Guards)</p>
                    <p className="pl-4">├── REST Controllers: Threads, Drafts, Workspaces</p>
                    <p className="pl-4">└── Flyway DDL Migrations (V1, V2, V3)</p>
                    <p className="text-white pt-2">Database: Neon PostgreSQL 16</p>
                    <p className="pl-4">└── PgBouncer Pooler (prepareThreshold=0)</p>
                  </div>

                  <div className="pt-2 text-[11px] text-emerald-400 border-t border-white/10">
                    ✓ 0 Cross-Tenant Data Leaks · All automated tests passing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          4. SCREENSHOTS GALLERY
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-14">
            <SectionHeader
              badge="Interface Tour"
              badgeVariant="cyan"
              title="Designed for Deep Work"
              description="Take a closer look at the actual views and workflows within JIOSI Inbox."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                  <Image
                    src="/images/products/inbox/inbox-threads-view.png"
                    alt="JIOSI Inbox Thread List and Triage View"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Thread List &amp; Quick Actions
                  </h4>
                  <p className="font-sans text-xs text-slate-600">
                    Dense, high-contrast message listing with immediate star, snooze, and archive triggers.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                  <Image
                    src="/images/products/inbox/inbox-detail-view.png"
                    alt="JIOSI Inbox Message Inspector View"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Contextual Message Inspector
                  </h4>
                  <p className="font-sans text-xs text-slate-600">
                    Clean reading pane with inline markdown support, quick reply composer, and attachment preview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          5. CTA TO ACTUAL APPLICATION
          ======================================================= */}
      <section className="w-full bg-[#0B1020] text-white py-20 border-t border-white/10">
        <SectionContainer>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Immediate Use</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Experience JIOSI Inbox Today
            </h2>

            <p className="font-sans text-base text-slate-300 leading-relaxed">
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
                  className: "font-semibold shadow-xl shadow-indigo-600/30",
                })}
              >
                <span>Launch App (inbox.jiosi.online)</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </a>

              <Link
                href="/contact?subject=JIOSI%20Inbox%20Enterprise%20Inquiry"
                className={buttonStyles({
                  variant: "glass",
                  size: "lg",
                  className: "text-slate-200 hover:text-white border-white/20",
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
