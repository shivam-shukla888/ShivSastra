import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getProfileSettings } from "@/lib/profile";
import { getPublishedProjects } from "@/lib/projects";
import { HOMEPAGE_SERVICES_PREVIEW } from "@/data/services-data";
import { SITE_URL, serializeJsonLd } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Inbox,
  Lock,
  Zap,
  CheckCircle2,
  ExternalLink,
  Check,
  ChevronRight,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "JIOSI — Intelligent Software Systems & AI Innovation",
  description:
    "JIOSI builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "JIOSI — Intelligent Software Systems & AI Innovation",
    description:
      "JIOSI builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
    url: SITE_URL,
    type: "website",
    siteName: "JIOSI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JIOSI — Intelligent Software Systems & AI Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JIOSI — Intelligent Software Systems & AI Innovation",
    description:
      "JIOSI builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
    images: ["/og-image.png"],
  },
};

export default async function HomePage() {
  const [profile, allProjects] = await Promise.all([
    getProfileSettings(),
    getPublishedProjects(),
  ]);

  const selectedProjects = allProjects.slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "JIOSI",
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        description:
          "Intelligent software systems, email productivity platforms (JIOSI Inbox), and production agentic AI systems.",
        sameAs: [
          profile.contraUrl,
          profile.linkedinUrl,
          profile.githubUrl,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "JIOSI",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      {/* =======================================================
          1. DARK NAVY HERO SECTION WITH PRODUCT SPOTLIGHT
          ======================================================= */}
      <section className="relative w-full bg-[#0B1020] text-white pt-16 sm:pt-20 md:pt-24 pb-20 md:pb-28 overflow-hidden border-b border-white/10">
        {/* Subtle Ambient Indigo/Violet Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none opacity-40">
          <div className="w-full h-full bg-gradient-to-b from-indigo-500/25 via-violet-500/10 to-transparent blur-3xl" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-300 border border-white/15 text-xs font-mono font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Next-Generation Software Systems</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Intelligent software systems for modern teams.
              </h1>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                From our flagship email productivity platform <strong className="text-white font-semibold">JIOSI Inbox</strong> to custom production <strong className="text-white font-semibold">Agentic AI systems</strong> for growing businesses — engineered with deterministic safeguards, speed, and strict data sovereignty.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/products/inbox"
                  className={buttonStyles({
                    variant: "primary",
                    size: "lg",
                    className: "shadow-lg shadow-indigo-600/30 group",
                  })}
                >
                  <Inbox className="w-4 h-4 text-cyan-300" />
                  <span>Discover JIOSI Inbox</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className={buttonStyles({
                    variant: "glass",
                    size: "lg",
                    className: "text-slate-200 hover:text-white border-white/20",
                  })}
                >
                  <span>Discuss an AI System</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                <a
                  href="#services"
                  className="font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors text-center py-3 px-2"
                >
                  View Packages ↓
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
                <div className="space-y-0.5">
                  <span className="text-white font-semibold block text-sm font-sans">
                    100% Data Sovereignty
                  </span>
                  <span>Zero data retention</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold block text-sm font-sans">
                    Deterministic Core
                  </span>
                  <span>No calculation drift</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold block text-sm font-sans">
                    Human-in-the-Loop
                  </span>
                  <span>Approval checkpoints</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-semibold block text-sm font-sans">
                    Production Verified
                  </span>
                  <span>Real case studies</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Product Showcase Card (JIOSI Inbox) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/15 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl shadow-indigo-950/50 group">
                {/* Floating Top Pill */}
                <div className="p-3 bg-[#111A2E]/90 rounded-xl border border-white/10 mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                      JIOSI INBOX
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                      SaaS
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    Keyboard-First Triage
                  </span>
                </div>

                {/* Real Application Screenshot */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                  <Image
                    src="/images/products/inbox/inbox-desktop-overview.png"
                    alt="JIOSI Inbox SaaS Platform Interface"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Action Overlay on Screenshot */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-xs text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      AI Summaries · Instant Search
                    </span>
                    <Link
                      href="/products/inbox"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Keyboard Shortcuts Strip */}
                <div className="mt-2 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] border border-white/15">
                      ⌘K
                    </kbd>
                    <span>Omni Search</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] border border-white/15">
                      E
                    </kbd>
                    <span>Archive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] border border-white/15">
                      S
                    </kbd>
                    <span>Snooze</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          2. CORE VALUE PILLARS (Clean Cloud White Section)
          ======================================================= */}
      <section className="w-full py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <SectionContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Production Reliability
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Deterministic business logic handles math and actions, keeping probabilistic LLMs strictly constrained to parameter extraction.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                100% Data Sovereignty
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Customer data stays inside client infrastructure (self-hosted n8n, isolated PostgreSQL). No client records stored on our servers.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Human-in-the-Loop
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                High-value financial actions, outbound messages, and contract dispatches pause for human verification before release.
              </p>
            </Card>

            <Card variant="default" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Fast Turnaround
              </h3>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                Engineered for rapid deployment: Starter workflows ready in 5–8 days, full multi-agent platforms in 18–25 days.
              </p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          3. PRODUCT ECOSYSTEM SHOWCASE (JIOSI Products)
          ======================================================= */}
      <section id="products" className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Product Ecosystem"
              badgeVariant="primary"
              title="Modern Software & AI Products"
              description="Explore our standalone SaaS platforms, automated agent toolkits, and production blueprints engineered for high-velocity teams."
            />

            {/* Featured Product 1: JIOSI Inbox Banner Card */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-[#111A2E] to-[#0B1020] text-white p-8 md:p-12 overflow-hidden relative shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan" dot size="md">
                      Flagship Product
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      SaaS Platform
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                    JIOSI Inbox
                  </h3>

                  <p className="font-sans text-base text-slate-300 leading-relaxed">
                    An opinionated, keyboard-first email productivity client built with Spring Boot 3.3.5 and React 18. Read less, understand faster, and respond with contextual AI assistance without message clutter.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span>Instant AI thread summaries &amp; contextual smart replies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span>Keyboard-first triage inspired by Superhuman &amp; Linear</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span>Multi-tenant workspace isolation &amp; Neon Serverless PostgreSQL</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/products/inbox"
                      className={buttonStyles({
                        variant: "primary",
                        size: "md",
                        className: "font-semibold shadow-md shadow-indigo-600/30",
                      })}
                    >
                      <span>Product Overview &amp; Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="https://inbox.jiosi.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({
                        variant: "glass",
                        size: "md",
                        className: "text-slate-200 hover:text-white",
                      })}
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/15 shadow-2xl group">
                    <Image
                      src="/images/products/inbox/inbox-desktop-overview.png"
                      alt="JIOSI Inbox Application Preview"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid: Agent Toolkits & Store Packs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 md:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <Badge variant="primary" size="sm">
                    n8n Template
                  </Badge>
                  <h4 className="font-display text-2xl font-bold text-slate-900">
                    Lead Qualifier Agent Pack
                  </h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Autonomously engage incoming web and WhatsApp enquiries, score budget and timeline, and sync structured leads into Google Sheets or CRM.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1.5">✓ Self-hosted n8n JSON blueprint</li>
                    <li className="flex items-center gap-1.5">✓ Zero cloud vendor lock-in</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-indigo-600">₹3,499</span>
                  <Link
                    href="/store/n8n-lead-qualifier-agent-pack"
                    className="font-sans text-xs font-semibold text-slate-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Template</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>

              <Card className="p-6 md:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <Badge variant="cyan" size="sm">
                    Complete Kit
                  </Badge>
                  <h4 className="font-display text-2xl font-bold text-slate-900">
                    WhatsApp Support Agent Kit
                  </h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Full-stack conversational agent with knowledge lookup, human escalation triggers, and Twilio/Cloud API integration.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1.5">✓ 24/7 Multi-language support</li>
                    <li className="flex items-center gap-1.5">✓ Human takeover checkpoint</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-indigo-600">₹3,999</span>
                  <Link
                    href="/store/whatsapp-support-agent-kit"
                    className="font-sans text-xs font-semibold text-slate-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Kit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>

              <Card className="p-6 md:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <Badge variant="warning" size="sm">
                    Bundle Edition
                  </Badge>
                  <h4 className="font-display text-2xl font-bold text-slate-900">
                    Small Business Agent Bundle
                  </h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Complete suite combining lead qualification, WhatsApp triage, automated CRM follow-up, and prompt guardrail libraries.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-1.5">✓ All 5 agent blueprints included</li>
                    <li className="flex items-center gap-1.5">✓ Setup guide &amp; video walkthrough</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-indigo-600">₹9,999</span>
                  <Link
                    href="/store/small-business-agent-bundle"
                    className="font-sans text-xs font-semibold text-slate-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Bundle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span>Browse Entire Product &amp; Toolkit Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          4. VERIFIED ENGINEERING CASE STUDIES (Proof of Work)
          ======================================================= */}
      <section id="work" className="w-full py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <SectionHeader
                badge="Verified Architecture"
                badgeVariant="success"
                title="Engineering Case Studies"
                description="Real-world production builds demonstrating our core ethos: AI Extracts. Code Decides."
              />
              <Link
                href="/projects"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5 self-start md:self-auto shrink-0"
              >
                <span>Explore All Builds</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedProjects.map((project) => (
                <Card
                  key={project.id}
                  className="p-6 sm:p-8 space-y-5 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Visual Preview */}
                    {project.coverImageUrl && (
                      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                        <Image
                          src={project.coverImageUrl}
                          alt={`${project.title} — Preview`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span className="text-indigo-600 font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.projectYear && <span>{project.projectYear}</span>}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>

                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Read Technical Monograph</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          5. CLIENT SERVICES & PACKAGES SECTION
          ======================================================= */}
      <section id="services" className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
              <SectionHeader
                badge="Client Engineering"
                badgeVariant="primary"
                title="Agentic AI Packages & Transparent Pricing"
                description="Purpose-built conversational workflows and multi-agent systems tailored to your business operations."
              />
              <Link
                href="/services"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1.5 self-start md:self-auto shrink-0"
              >
                <span>Compare All Service Deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Packages Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOMEPAGE_SERVICES_PREVIEW.map((item) => (
                <Card
                  key={item.id}
                  className="p-6 md:p-8 space-y-6 flex flex-col justify-between relative"
                >
                  <div className="space-y-4">
                    <div className="font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600">
                      {item.id === "starter-agent-setup" && "Entry Workflow"}
                      {item.id === "business-agent-package" && "Most Popular"}
                      {item.id === "full-agentic-system" && "Enterprise Grade"}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <div className="font-display text-3xl font-extrabold text-slate-900">
                      {item.startingPrice}
                    </div>

                    {item.id === "starter-agent-setup" && (
                      <div className="p-3 rounded-lg bg-indigo-50/80 border border-indigo-100 text-xs text-indigo-900 font-sans leading-relaxed">
                        <strong className="font-semibold block font-mono text-[10px] uppercase tracking-wider text-indigo-700">
                          Evaluation Trial
                        </strong>
                        7-day evaluation period available for qualified small organisations.
                      </div>
                    )}

                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {item.customerOutcome}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 font-mono text-xs text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="font-medium">Data stays in your control</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <Link
                      href={item.targetHref}
                      className={buttonStyles({
                        variant: item.id === "business-agent-package" ? "primary" : "secondary",
                        size: "md",
                        className: "w-full justify-between font-semibold",
                      })}
                    >
                      <span>View Scope &amp; Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {/* Main Security Banner */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-[#111A2E] to-slate-900 p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    We Prioritize Security &amp; Privacy
                  </h3>
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Data stays in your control • Human approval points included • No customer data stored on our servers • Enterprise-grade isolation by design
                </p>
              </div>

              <Link
                href="/contact?subject=Discuss%20Security%20%26%20Requirements"
                className={buttonStyles({
                  variant: "glass",
                  size: "md",
                  className: "text-white border-white/20 hover:bg-white/15 shrink-0 self-start md:self-auto",
                })}
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          6. CREDIBILITY & FOUNDER VERIFICATION
          ======================================================= */}
      <section id="credibility" className="w-full py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-12">
            <SectionHeader
              badge="Engineering Foundation"
              badgeVariant="primary"
              title="Verified Background & Standards"
              description="Backed by academic rigour, verified software engineering internships, and open-source contributions."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600 block">
                  Education
                </span>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  B.Tech in Computer Science
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  SRMS College of Engineering, Technology &amp; Research (2022–2026). Specialised in distributed backend architectures, REST API security, and AI orchestration.
                </p>
              </Card>

              <Card className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600 block">
                  Industry Experience
                </span>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  Production Engineering
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  AI/ML Intern at Nexvia Technologies; Software Engineer Intern at Soft Pro (Java 17, Spring Boot 3, Hibernate ORM, MySQL performance tuning).
                </p>
              </Card>

              <Card className="p-6 md:p-8 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600 block">
                    Source Code
                  </span>
                  <h4 className="font-display text-xl font-bold text-slate-900">
                    Open Source Repositories
                  </h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Explore clean architecture, test automation suites, and system monographs on GitHub (@shivam-shukla888).
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://github.com/shivam-shukla888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Visit GitHub Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          7. HIGH-CONVERSION CTA BANNER
          ======================================================= */}
      <section className="w-full bg-[#0B1020] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-violet-900/20 to-cyan-900/10 pointer-events-none" />

        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Badge variant="cyan" dot size="md">
              Start Building
            </Badge>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to deploy intelligent software for your organization?
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
              Every client engagement begins with an architecture brief, fixed scope, and guaranteed data sovereignty. Replies delivered within 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "font-semibold shadow-xl shadow-indigo-600/30 text-center",
                })}
              >
                <span>Request a Project Proposal</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/products/inbox"
                className={buttonStyles({
                  variant: "glass",
                  size: "lg",
                  className: "text-slate-200 hover:text-white border-white/20 text-center",
                })}
              >
                <span>Explore JIOSI Inbox</span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-1" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
