import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonStyles } from "@/components/ui/Button";
import { getProfileSettings } from "@/lib/profile";
import { absoluteUrl } from "@/lib/site";
import {
  Target,
  Compass,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About JIOSI — Mission, Engineering Values & Architecture",
  description:
    "Learn about JIOSI's mission, engineering approach, and standards. Building high-velocity productivity software and secure Agentic AI systems.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About JIOSI — Mission, Engineering Values & Architecture",
    description:
      "Learn about JIOSI's mission, engineering approach, and standards. Building high-velocity productivity software and secure Agentic AI systems.",
    url: absoluteUrl("/about"),
    type: "website",
    siteName: "JIOSI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About JIOSI",
      },
    ],
  },
};

export default async function AboutPage() {
  const profile = await getProfileSettings();

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* =======================================================
          1. DARK NAVY HERO BANNER
          ======================================================= */}
      <section className="relative w-full bg-[#0B1020] text-white pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-indigo-500/20 via-violet-500/10 to-transparent blur-3xl" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-600 text-xs font-mono">/</span>
              <span className="text-xs font-mono text-cyan-300 font-semibold">About JIOSI</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering clarity into modern digital systems.
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
              JIOSI is an independent technology company dedicated to creating focused productivity platforms and reliable Agentic AI systems that eliminate operational drag.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          2. MISSION & VISION
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 md:p-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Our Mission
              </h2>
              <p className="font-sans text-base text-slate-600 leading-relaxed">
                To build high-velocity software tools and automated AI systems that free knowledge workers and growing businesses from repetitive communication overload — with zero compromise on privacy or system transparency.
              </p>
            </Card>

            <Card className="p-8 md:p-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Our Vision
              </h2>
              <p className="font-sans text-base text-slate-600 leading-relaxed">
                A software ecosystem where applications are distraction-free, keyboard-first, and respect user autonomy. We believe AI should quietly augment human workflow rather than creating chaotic hallucinations.
              </p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          3. ENGINEERING VALUES & THE JIOSI ETHOS
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Engineering Principles"
              badgeVariant="primary"
              title="How We Architect Software"
              description="Four strict operational rules govern every line of code, SaaS platform, and workflow automation we ship."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 md:p-8 space-y-4">
                <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                  Principle 01
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  AI Extracts. Code Decides.
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Probabilistic models extract user intent and parameters; deterministic backend logic executes business rules, financial math, and database mutations.
                </p>
              </Card>

              <Card className="p-6 md:p-8 space-y-4">
                <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                  Principle 02
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Total Data Sovereignty
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Client customer records belong to the client. Workflows run in client-owned infrastructure (isolated PostgreSQL, self-hosted n8n). No intermediary storage.
                </p>
              </Card>

              <Card className="p-6 md:p-8 space-y-4">
                <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                  Principle 03
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Keyboard-First Velocity
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Inspired by Superhuman and Linear, our interfaces prioritize rapid keyboard navigation, sub-second latency, and zero unnecessary visual clutter.
                </p>
              </Card>

              <Card className="p-6 md:p-8 space-y-4">
                <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                  Principle 04
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Truthful Architecture
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Zero fake counters, honest empty states (&ldquo;Inbox Zero&rdquo;), and transparent offline modes. We build software that respects user trust.
                </p>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          4. LEADERSHIP & VERIFIED CREDENTIALS
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Leadership & Engineering"
              badgeVariant="primary"
              title="Built on Proven Software Engineering"
              description="Founded and engineered by Shivam Shukla, specializing in distributed backend systems, Spring Boot architectures, and production agentic workflows."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Founder Profile Card */}
              <div className="lg:col-span-5">
                <Card className="p-6 sm:p-8 space-y-6">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <Image
                      src="/images/shivam-shukla.jpg"
                      alt="Shivam Shukla — Founder & AI Systems Architect at JIOSI"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 400px"
                      priority
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Shivam Shukla
                    </h3>
                    <p className="font-mono text-xs text-indigo-600 uppercase tracking-wider font-semibold">
                      Founder &amp; Principal AI Systems Engineer
                    </p>
                  </div>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Background spanning Spring Boot enterprise backends, PostgreSQL concurrency tuning, real-time WebSockets, and production LLM orchestration.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <Link
                      href="/resume"
                      className={buttonStyles({
                        variant: "secondary",
                        size: "sm",
                        className: "font-mono text-xs",
                      })}
                    >
                      <span>View Verified Resume</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {profile.githubUrl && (
                      <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyles({
                          variant: "ghost",
                          size: "sm",
                          className: "font-mono text-xs",
                        })}
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </Card>
              </div>

              {/* Verified Education & Experience Timeline */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-600" />
                    <span>Verified Industry Experience</span>
                  </h3>

                  <div className="space-y-4">
                    <Card className="p-6 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base font-bold text-slate-900">
                          AI/ML Intern
                        </span>
                        <span className="font-mono text-xs text-slate-500">
                          Oct 2026 – Present
                        </span>
                      </div>
                      <p className="font-mono text-xs text-indigo-600 font-medium">
                        Nexvia Technologies · Remote
                      </p>
                      <p className="font-sans text-sm text-slate-600 leading-relaxed pt-1">
                        Production AI/ML pipelines, agent orchestration, and automated enterprise software workflows.
                      </p>
                    </Card>

                    <Card className="p-6 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base font-bold text-slate-900">
                          Software Engineer Intern
                        </span>
                        <span className="font-mono text-xs text-slate-500">
                          Jul 2025 – Sep 2025
                        </span>
                      </div>
                      <p className="font-mono text-xs text-indigo-600 font-medium">
                        Soft Pro · Noida, India
                      </p>
                      <p className="font-sans text-sm text-slate-600 leading-relaxed pt-1">
                        Engineered stateless RESTful backend services with Java 17, Spring Boot 3, and MySQL. Decreased API response times by ~20% through indexed query optimizations and connection pool tuning.
                      </p>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                    <span>Education &amp; Academic Honors</span>
                  </h3>

                  <Card className="p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-base font-bold text-slate-900">
                        B.Tech in Computer Science and Engineering
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        2022 – 2026
                      </span>
                    </div>
                    <p className="font-mono text-xs text-indigo-600 font-medium">
                      SRMS CETR (Dr. A.P.J. Abdul Kalam Technical University)
                    </p>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed pt-1">
                      Focused on backend architectures, distributed computing, database management, and application security.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          5. CTA BANNER
          ======================================================= */}
      <section className="w-full bg-[#0B1020] text-white py-20 border-t border-white/10">
        <SectionContainer>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Interested in collaborating with JIOSI?
            </h2>
            <p className="font-sans text-base text-slate-300 leading-relaxed">
              Whether you need a custom agent system, an architecture audit, or want to explore our enterprise product licenses, we’d love to connect.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                  className: "font-semibold shadow-xl shadow-indigo-600/30",
                })}
              >
                <span>Initiate a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className={buttonStyles({
                  variant: "glass",
                  size: "lg",
                  className: "text-slate-200 hover:text-white border-white/20",
                })}
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
