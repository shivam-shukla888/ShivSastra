import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getProfileSettings } from "@/lib/profile";
import { getPublishedProjects } from "@/lib/projects";
import { HOMEPAGE_SERVICES_PREVIEW } from "@/data/services-data";
import { SITE_URL, serializeJsonLd } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  Lightning as Zap,
  CheckCircle as CheckCircle2,
  ArrowSquareOut as ExternalLink,
  Check,
  CaretRight as ChevronRight,
  GraduationCap,
  Briefcase,
  Code as Code2,
  Flask,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "SHIVSASTRA — Software Engineering & AI Systems Studio | Shivam Shukla",
  description:
    "Explore Shivam Shukla’s AI systems engineering and backend platforms, including JIOSI Inbox, Yojna Setu, and QuickEats. View technical case studies, architecture, and project demos.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "SHIVSASTRA — Software Engineering & AI Systems Studio",
    description:
      "Explore Shivam Shukla’s AI systems engineering and backend platforms, including JIOSI Inbox, Yojna Setu, and QuickEats. View technical case studies, architecture, and project demos.",
    url: SITE_URL,
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHIVSASTRA — Intelligent Software Systems & AI Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIVSASTRA — Intelligent Software Systems & AI Innovation",
    description:
      "SHIVSASTRA builds intelligent software systems, email productivity platforms including JIOSI Inbox, and production agentic AI automation for modern teams.",
    images: ["/og-image.png"],
  },
};

export default async function HomePage() {
  const [profile, allProjects] = await Promise.all([
    getProfileSettings(),
    getPublishedProjects(),
  ]);

  // Featured client projects: strictly showcase exactly 3 projects (JIOSI Inbox, Yojna Setu, QuickEats)
  const clientProjectSlugs = ["inbox", "yojna-setu", "quickeats"];
  const selectedProjects = allProjects
    .filter((p) => clientProjectSlugs.includes(p.slug))
    .sort((a, b) => clientProjectSlugs.indexOf(a.slug) - clientProjectSlugs.indexOf(b.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "SHIVSASTRA",
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
        name: "SHIVSASTRA",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-[#F5F2ED] text-[#1A1D20]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      {/* =======================================================
          SECTION 2: WARM EDITORIAL HERO (Warm Ivory Substrate)
          ======================================================= */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-16 sm:pt-20 md:pt-24 pb-20 md:pb-28 border-b border-[#C09F80]/30 overflow-hidden">
        <SectionContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                <span>SHIVSASTRA · AI Systems &amp; Software Engineering Studio</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
                Engineering production AI systems, software platforms &amp; agentic workflows.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#565656] leading-relaxed max-w-2xl">
                ShivSastra builds enterprise-grade software products, client-owned AI automation kits, and resilient backend architectures with strict data sovereignty, deterministic core logic, and founder engineering oversight by Shivam Shukla.
              </p>

              {/* Primary CTAs — Store and Services First! */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/store"
                  className={buttonStyles({
                    variant: "primary",
                    size: "lg",
                    className: "group font-semibold",
                  })}
                >
                  <span>Explore Store &amp; Kits</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "lg",
                    className: "font-semibold",
                  })}
                >
                  <span>Engineering Services</span>
                  <ChevronRight className="w-4 h-4 text-[#565656]" />
                </Link>

                <Link
                  href="/profile"
                  className="font-mono text-xs uppercase tracking-wider text-[#565656] hover:text-[#76323F] transition-colors text-center py-3 px-2 font-medium"
                >
                  Founder Portfolio →
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#C09F80]/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#565656]">
                <div className="space-y-0.5">
                  <span className="text-[#1A1D20] font-semibold block text-sm font-sans">
                    Client-Owned Deployments
                  </span>
                  <span>Zero intermediary storage</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#1A1D20] font-semibold block text-sm font-sans">
                    Deterministic Core
                  </span>
                  <span>No calculation drift</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#1A1D20] font-semibold block text-sm font-sans">
                    Human-in-the-Loop
                  </span>
                  <span>Approval checkpoints</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#1A1D20] font-semibold block text-sm font-sans">
                    Production Verified
                  </span>
                  <span>Shipped client builds</span>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Product Spotlight Card (JIOSI Inbox) */}
            <div className="lg:col-span-5">
              <div className="border border-[#C09F80] bg-[#FAF8F5] p-4 sm:p-5 shadow-[4px_4px_0px_0px_#D7CEC7] group">
                <div className="p-3 bg-[#F5F2ED] border border-[#C09F80]/40 mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-[#76323F]" />
                    <span className="font-mono text-xs font-bold text-[#1A1D20] tracking-wider uppercase">
                      JIOSI INBOX
                    </span>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded-none bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30">
                      SaaS
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#565656]">
                    AI Email Platform
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#C09F80]/40 bg-[#FAF8F5]">
                  <Image
                    src="/images/products/inbox/inbox-desktop-overview.png"
                    alt="JIOSI Inbox SaaS Platform Interface"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>

                <div className="mt-3 p-3 bg-[#F5F2ED] border border-[#C09F80]/40 flex items-center justify-between text-xs font-mono text-[#565656]">
                  <div className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 bg-[#FAF8F5] text-[#1A1D20] text-[10px] border border-[#C09F80]/40 font-mono">
                      ⌘K
                    </kbd>
                    <span>Omni Search</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 bg-[#FAF8F5] text-[#1A1D20] text-[10px] border border-[#C09F80]/40 font-mono">
                      E
                    </kbd>
                    <span>Archive</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 bg-[#FAF8F5] text-[#1A1D20] text-[10px] border border-[#C09F80]/40 font-mono">
                      S
                    </kbd>
                    <span>Snooze</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-[#C09F80]/30 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#565656]">
                    Spring Boot 3.3.5 · React 18 · Neon Postgres
                  </span>
                  <Link
                    href="/products/inbox"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#76323F] hover:text-[#1A1D20] font-semibold"
                  >
                    <span>Explore Platform</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 3: ENGINEERING PILLARS (Clean Light Canvas)
          ======================================================= */}
      <section className="w-full py-16 md:py-24 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F]">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1A1D20]">
              Engineered for Production Rigour
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#565656]">
              Strict architectural standards ensure deterministic reliability, safety, and business-grade autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
              <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-[#C09F80]/60 flex items-center justify-center text-[#76323F]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-normal text-[#1A1D20]">
                Production Ready
              </h3>
              <p className="font-sans text-sm text-[#565656] leading-relaxed">
                Deterministic business logic handles math and actions, keeping probabilistic LLMs strictly constrained to parameter extraction.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
              <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-[#C09F80]/60 flex items-center justify-center text-[#76323F]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-normal text-[#1A1D20]">
                Data Sovereignty
              </h3>
              <p className="font-sans text-sm text-[#565656] leading-relaxed">
                Customer records stay inside client infrastructure (self-hosted n8n, isolated PostgreSQL). Zero client records stored on our servers.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
              <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-[#C09F80]/60 flex items-center justify-center text-[#76323F]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-normal text-[#1A1D20]">
                Agentic AI
              </h3>
              <p className="font-sans text-sm text-[#565656] leading-relaxed">
                Autonomous workflows with structured JSON schemas, multi-step tool calling, stateful memory, and API spend caps.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
              <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-[#C09F80]/60 flex items-center justify-center text-[#76323F]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-normal text-[#1A1D20]">
                Human-in-the-Loop
              </h3>
              <p className="font-sans text-sm text-[#565656] leading-relaxed">
                High-value financial actions, outbound messages, and contract dispatches pause for human verification before release.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 4: PRODUCT ECOSYSTEM (Warm Ivory Surface)
          ======================================================= */}
      <section id="products" className="w-full py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Product Ecosystem"
              badgeVariant="primary"
              title="Products Built for Real Work"
              description="Standalone productivity platforms, automated agent toolkits, and production blueprints engineered for high-velocity teams."
            />

            {/* Asymmetric Product Showcase: JIOSI Inbox */}
            <div className="border border-[#C09F80] bg-[#FAF8F5] p-8 md:p-12 shadow-[4px_4px_0px_0px_#D7CEC7]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" dot size="md">
                      Flagship Platform
                    </Badge>
                    <span className="text-xs font-mono text-[#565656]">
                      SaaS Product
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1D20] leading-tight">
                    JIOSI Inbox
                  </h3>

                  <p className="font-sans text-base text-[#565656] leading-relaxed">
                    A high-performance AI email productivity platform built with Spring Boot 3.3.5 and React 18. Read less, understand faster, and draft responses with contextual AI assistance without message clutter.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-sm text-[#1A1D20]">
                      <Check className="w-4 h-4 text-[#76323F]" />
                      <span>Instant AI thread summaries &amp; contextual smart replies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#1A1D20]">
                      <Check className="w-4 h-4 text-[#76323F]" />
                      <span>Frictionless email workflows inspired by Superhuman &amp; Linear</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#1A1D20]">
                      <Check className="w-4 h-4 text-[#76323F]" />
                      <span>Multi-tenant workspace isolation &amp; Neon Serverless PostgreSQL</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href="/products/inbox"
                      className={buttonStyles({
                        variant: "primary",
                        size: "md",
                      })}
                    >
                      <span>Explore Inbox</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="https://inbox.jiosi.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({
                        variant: "secondary",
                        size: "md",
                      })}
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-4 h-4 text-[#76323F]" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] overflow-hidden border border-[#C09F80]/50 shadow-[2px_2px_0px_0px_#D7CEC7] group">
                    <Image
                      src="/images/products/inbox/inbox-desktop-overview.png"
                      alt="JIOSI Inbox Application Preview"
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 5: AGENTIC SYSTEMS TOOLKITS */}
            <div className="space-y-8 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-normal text-[#1A1D20]">
                    Production Agent Toolkits
                  </h3>
                  <p className="font-sans text-sm text-[#565656]">
                    Pre-built blueprints, schemas, and automation packages ready to import.
                  </p>
                </div>
                <Link
                  href="/store"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] hover:text-[#1A1D20] transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 md:p-8 space-y-5 flex flex-col justify-between bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="space-y-4">
                    <Badge variant="primary" size="sm">
                      n8n Template
                    </Badge>
                    <h4 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Lead Qualifier Agent Pack
                    </h4>
                    <p className="font-sans text-sm text-[#565656] leading-relaxed">
                      Autonomously engage incoming web and WhatsApp enquiries, score budget and timeline, and sync structured leads into Google Sheets or CRM.
                    </p>
                    <ul className="space-y-2 text-xs font-mono text-[#565656] pt-2 border-t border-[#C09F80]/20">
                      <li className="flex items-center gap-1.5">✓ Self-hosted n8n JSON blueprint</li>
                      <li className="flex items-center gap-1.5">✓ Zero cloud vendor lock-in</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[#C09F80]/20 flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-[#76323F]">₹3,499</span>
                    <Link
                      href="/store/n8n-lead-qualifier-agent-pack"
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Template</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-5 flex flex-col justify-between bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="space-y-4">
                    <Badge variant="neutral" size="sm">
                      Complete Kit
                    </Badge>
                    <h4 className="font-display text-2xl font-normal text-[#1A1D20]">
                      WhatsApp Support Agent Kit
                    </h4>
                    <p className="font-sans text-sm text-[#565656] leading-relaxed">
                      Full-stack conversational agent with knowledge lookup, human escalation triggers, and Twilio/Cloud API integration.
                    </p>
                    <ul className="space-y-2 text-xs font-mono text-[#565656] pt-2 border-t border-[#C09F80]/20">
                      <li className="flex items-center gap-1.5">✓ 24/7 Multi-language support</li>
                      <li className="flex items-center gap-1.5">✓ Human takeover checkpoint</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[#C09F80]/20 flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-[#76323F]">₹3,999</span>
                    <Link
                      href="/store/whatsapp-support-agent-kit"
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Kit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-5 flex flex-col justify-between bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="space-y-4">
                    <Badge variant="warning" size="sm">
                      Bundle Edition
                    </Badge>
                    <h4 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Small Business Agent Bundle
                    </h4>
                    <p className="font-sans text-sm text-[#565656] leading-relaxed">
                      Complete suite combining lead qualification, WhatsApp customer routing, automated CRM follow-up, and prompt guardrail libraries.
                    </p>
                    <ul className="space-y-2 text-xs font-mono text-[#565656] pt-2 border-t border-[#C09F80]/20">
                      <li className="flex items-center gap-1.5">✓ All 5 agent blueprints included</li>
                      <li className="flex items-center gap-1.5">✓ Setup guide &amp; video walkthrough</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[#C09F80]/20 flex items-center justify-between">
                    <span className="font-mono text-base font-bold text-[#76323F]">₹9,999</span>
                    <Link
                      href="/store/small-business-agent-bundle"
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Bundle</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 6: PROJECT SHOWCASE (Clean White Canvas)
          Strictly showcase exactly three client projects:
          1. JIOSI Inbox, 2. Yojna Setu, 3. QuickEats
          ======================================================= */}
      <section id="work" className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C09F80]/30">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] block mb-2">
                  Verified Engineering
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1D20]">
                  Real systems. Measurable impact.
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#565656] mt-2 max-w-2xl">
                  Production systems demonstrating our core ethos: AI Extracts. Code Decides.
                </p>
              </div>
              <Link
                href="/projects"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1.5 self-start md:self-auto shrink-0"
              >
                <span>Explore All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 sm:p-7 space-y-5 flex flex-col justify-between group bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]"
                >
                  <div className="space-y-4">
                    {project.coverImageUrl && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#C09F80]/40 bg-[#FAF8F5]">
                        <Image
                          src={project.coverImageUrl}
                          alt={`${project.title} — Preview`}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                      <span className="text-[#76323F] font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.projectYear && <span>{project.projectYear}</span>}
                    </div>

                    <h3 className="font-display text-2xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                      <Link href={project.slug === "inbox" ? "/products/inbox" : `/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="font-sans text-sm text-[#565656] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="font-mono text-[11px] px-2 py-0.5 bg-[#FAF8F5] text-[#565656] border border-[#C09F80]/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#C09F80]/20 flex items-center justify-between">
                    <Link
                      href={project.slug === "inbox" ? "/products/inbox" : `/projects/${project.slug}`}
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] group-hover:text-[#76323F] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Read Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#565656] hover:text-[#1A1D20] transition-colors inline-flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Studio Engineering Platform Note */}
            <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#C09F80]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[2px_2px_0px_0px_#D7CEC7]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30">
                    Studio Platform
                  </span>
                  <span className="font-mono text-xs text-[#565656]">Self-Engineered Architecture</span>
                </div>
                <p className="font-sans text-sm text-[#1A1D20]">
                  <strong>ShivSastra Digital HQ</strong> — Production web platform engineered with Next.js 16 App Router, TypeScript, and Supabase RLS.
                </p>
              </div>
              <Link
                href="/projects/shivsastra"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] hover:text-[#5A1C29] inline-flex items-center gap-1 shrink-0"
              >
                <span>Read Platform Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 7: SERVICES & TRANSPARENT PACKAGES (Warm Ivory)
          ======================================================= */}
      <section id="services" className="w-full py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C09F80]/30">
              <SectionHeader
                badge="Client Engineering"
                badgeVariant="primary"
                title="Agentic AI Packages & Transparent Pricing"
                description="Purpose-built conversational workflows and multi-agent systems tailored to your business operations."
              />
              <Link
                href="/services"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] hover:text-[#1A1D20] transition-colors inline-flex items-center gap-1.5 self-start md:self-auto shrink-0"
              >
                <span>Compare All Service Deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Packages Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOMEPAGE_SERVICES_PREVIEW.map((item) => (
                <div
                  key={item.id}
                  className="p-6 md:p-8 space-y-6 flex flex-col justify-between relative bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]"
                >
                  <div className="space-y-4">
                    <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F]">
                      {item.id === "starter-agent-setup" && "Entry Workflow"}
                      {item.id === "business-agent-package" && "Most Popular"}
                      {item.id === "full-agentic-system" && "Enterprise Grade"}
                    </div>

                    <h3 className="font-display text-2xl font-normal text-[#1A1D20] leading-snug">
                      {item.title}
                    </h3>

                    <div className="font-display text-3xl font-normal text-[#1A1D20]">
                      {item.startingPrice}
                    </div>

                    {item.id === "starter-agent-setup" && (
                      <div className="p-3 bg-[#FAF8F5] border border-[#C09F80]/50 text-xs text-[#565656] font-sans leading-relaxed">
                        <strong className="font-semibold block font-mono text-[10px] uppercase tracking-wider text-[#76323F]">
                          Evaluation Trial
                        </strong>
                        7-day evaluation period available for qualified small organisations.
                      </div>
                    )}

                    <p className="font-sans text-sm text-[#565656] leading-relaxed">
                      {item.customerOutcome}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 font-mono text-xs text-[#565656]">
                      <ShieldCheck className="w-4 h-4 text-[#76323F]" />
                      <span className="font-medium">Data stays in your control</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C09F80]/20 space-y-3">
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
                </div>
              ))}
            </div>

            {/* Main Security Banner (Grounded Contrast) */}
            <div className="border border-[#C09F80]/40 bg-[#1A1D20] p-8 md:p-10 text-[#F5F2ED] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[4px_4px_0px_0px_#565656]">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C09F80]" />
                  <h3 className="font-display text-2xl font-normal text-[#F5F2ED]">
                    Client-Owned Infrastructure &amp; Rigorous Privacy
                  </h3>
                </div>
                <p className="font-sans text-sm text-[#D7CEC7] leading-relaxed">
                  Data stays in your control • Human approval points included • Zero customer data stored on intermediary servers • Isolated self-hosted instances by design
                </p>
              </div>

              <Link
                href="/contact?subject=Discuss%20Security%20%26%20Requirements"
                className={buttonStyles({
                  variant: "dark-inverse",
                  size: "md",
                  className: "shrink-0 self-start md:self-auto",
                })}
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-[#76323F]" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 8: FOUNDER & VERIFIED CREDENTIALS (Clean White)
          ======================================================= */}
      <section id="credibility" className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-12">
            <SectionHeader
              badge="Engineering Leadership"
              badgeVariant="primary"
              title="Built on Proven Software Engineering"
              description="Founded and led by Shivam Shukla, specializing in distributed backend systems, Spring Boot architectures, and production agentic workflows."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Authentic Founder Photograph */}
              <div className="lg:col-span-5">
                <div className="border border-[#C09F80]/60 bg-[#FAF8F5] p-3 shadow-[4px_4px_0px_0px_#D7CEC7]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C09F80]/40 bg-[#FAF8F5]">
                    <Image
                      src="/images/shivam-shukla.jpg"
                      alt="Shivam Shukla — Founder & AI Systems Architect at SHIVSASTRA"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Shivam Shukla
                    </h3>
                    <p className="font-mono text-xs text-[#76323F] uppercase tracking-wider font-semibold">
                      Founder &amp; Principal AI Systems Engineer
                    </p>
                    <p className="font-sans text-xs text-[#565656] pt-1">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Verified Credentials & Track Record */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 md:p-8 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2 text-[#76323F] font-mono text-xs uppercase tracking-wider font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <h4 className="font-display text-xl font-normal text-[#1A1D20]">
                    B.Tech in Computer Science &amp; Engineering
                  </h4>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    SRMS College of Engineering, Technology &amp; Research (2022–2026). Focused coursework in distributed backend architectures, relational data modeling, REST API security, and AI orchestration.
                  </p>
                </div>

                <div className="p-6 md:p-8 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2 text-[#76323F] font-mono text-xs uppercase tracking-wider font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>Production Experience</span>
                  </div>
                  <h4 className="font-display text-xl font-normal text-[#1A1D20]">
                    Enterprise Backend &amp; Machine Learning
                  </h4>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    AI/ML Intern at Nexvia Technologies; Software Engineer Intern at Soft Pro (Java 17, Spring Boot 3, Hibernate ORM, PostgreSQL connection pooling, and JWT rotation).
                  </p>
                </div>

                <div className="p-6 md:p-8 space-y-3 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#76323F] font-mono text-xs uppercase tracking-wider font-semibold">
                      <Code2 className="w-4 h-4" />
                      <span>Open Source Architecture</span>
                    </div>
                    <h4 className="font-display text-xl font-normal text-[#1A1D20]">
                      Public Monograph &amp; Code Repositories
                    </h4>
                    <p className="font-sans text-sm text-[#565656] leading-relaxed">
                      Explore clean architecture implementations, automated testing suites, and system monographs directly on GitHub (@shivam-shukla888).
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="https://github.com/shivam-shukla888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] hover:text-[#1A1D20] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Visit GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href="/profile"
                      className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Full Profile &amp; Resume</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 8B: ENGINEERING LAB & TECHNICAL NOTES (Third Priority)
          ======================================================= */}
      <section id="lab" className="w-full py-20 md:py-24 bg-[#FAF8F5] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C09F80]/30">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Flask className="w-4 h-4 text-[#76323F]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F]">
                    Third Priority · Engineering Research
                  </span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded-none bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30 font-semibold">
                    Open Lab
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1A1D20]">
                  Engineering Lab &amp; Technical Notes
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#565656] mt-2 max-w-2xl">
                  Experimental software builds, performance benchmarks, and architectural research monographs from the ShivSastra engineering workshop.
                </p>
              </div>
              <Link
                href="/lab"
                className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] hover:text-[#1A1D20] transition-colors inline-flex items-center gap-1.5 self-start md:self-auto shrink-0"
              >
                <span>Explore All Lab Notes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 space-y-4 bg-[#FFFFFF] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                    <span className="text-[#76323F] font-semibold uppercase">BUILD</span>
                    <span>2026</span>
                  </div>
                  <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                    Deterministic Agent Guardrails
                  </h3>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Evaluating schema-constrained structured extraction versus unbounded tool execution in production LLM pipelines.
                  </p>
                </div>
                <Link
                  href="/lab"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] inline-flex items-center gap-1 pt-2 border-t border-[#C09F80]/20"
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 space-y-4 bg-[#FFFFFF] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                    <span className="text-[#76323F] font-semibold uppercase">STACK</span>
                    <span>2026</span>
                  </div>
                  <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                    Sub-50ms PostgreSQL Connection Pooling
                  </h3>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Benchmarking Neon Serverless connection latency with HikariCP on Spring Boot 3 under high-concurrency workloads.
                  </p>
                </div>
                <Link
                  href="/lab"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] inline-flex items-center gap-1 pt-2 border-t border-[#C09F80]/20"
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 space-y-4 bg-[#FFFFFF] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#565656]">
                    <span className="text-[#76323F] font-semibold uppercase">IDEA</span>
                    <span>2026</span>
                  </div>
                  <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                    Stateful Multimodal Agent Protocol
                  </h3>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Architectural design for asynchronous message queue processing with zero client data retention and human approval gates.
                  </p>
                </div>
                <Link
                  href="/lab"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1A1D20] hover:text-[#76323F] inline-flex items-center gap-1 pt-2 border-t border-[#C09F80]/20"
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          SECTION 9: FINAL GROUNDED EDITORIAL CTA
          ======================================================= */}
      <section className="w-full bg-[#1A1D20] text-[#F5F2ED] py-20 md:py-28 relative border-t border-[#C09F80]/30">
        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-none bg-[#C09F80]" />
              <span>Let&apos;s Connect</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#F5F2ED] leading-tight">
              Looking for an AI Systems or Backend Engineer?
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#D7CEC7] leading-relaxed">
              Available for full-time engineering roles, technical architecture consultation, and select client engagements. Replies typically delivered within 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "text-center",
                })}
              >
                <span>Contact Shivam</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>

              <Link
                href="/profile"
                className={buttonStyles({
                  variant: "dark-inverse",
                  size: "lg",
                  className: "text-center",
                })}
              >
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-[#C09F80]" />
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
