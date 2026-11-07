import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buttonStyles } from "@/components/ui/Button";
import { getProfileSettings } from "@/lib/profile";
import { absoluteUrl } from "@/lib/site";
import {
  Target,
  Compass,
  ArrowRight,
  ArrowSquareOut as ExternalLink,
  GraduationCap,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About SHIVSASTRA — Mission, Engineering Values & Architecture",
  description:
    "Learn about SHIVSASTRA's mission, engineering approach, and standards. Building high-velocity productivity software and secure Agentic AI systems.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About SHIVSASTRA — Mission, Engineering Values & Architecture",
    description:
      "Learn about SHIVSASTRA's mission, engineering approach, and standards. Building high-velocity productivity software and secure Agentic AI systems.",
    url: absoluteUrl("/about"),
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About SHIVSASTRA",
      },
    ],
  },
};

export default async function AboutPage() {
  const profile = await getProfileSettings();

  return (
    <div className="flex flex-col w-full bg-[#F5F2ED] text-[#1A1D20]">
      {/* 1. WARM EDITORIAL HERO BANNER */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30 overflow-hidden">
        {/* Warm atmospheric light wash */}
        <div className="hero-glow-warm pointer-events-none" />
        <div className="hero-glow-right pointer-events-none" />

        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-mono text-[#565656] hover:text-[#1A1D20] transition-colors">
                Home
              </Link>
              <span className="text-[#C09F80] text-xs font-mono">/</span>
              <span className="text-xs font-mono text-[#76323F] font-semibold">About SHIVSASTRA</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
              Engineering clarity into modern digital systems.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#565656] leading-relaxed">
              SHIVSASTRA is an independent technology company dedicated to creating focused productivity platforms and reliable Agentic AI systems that eliminate operational drag.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 md:p-10 space-y-4 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#D7CEC7] group-hover:border-[#76323F] shadow-[1px_1px_0px_0px_#C09F80] flex items-center justify-center text-[#76323F] transition-colors">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                Our Mission
              </h2>
              <p className="font-sans text-base text-[#565656] leading-relaxed">
                To build high-velocity software tools and automated AI systems that free knowledge workers and growing businesses from repetitive communication overload — with zero compromise on privacy or system transparency.
              </p>
            </div>

            <div className="p-8 md:p-10 space-y-4 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group">
              <div className="w-10 h-10 bg-[#FAF8F5] border border-[#D7CEC7] group-hover:border-[#76323F] shadow-[1px_1px_0px_0px_#C09F80] flex items-center justify-center text-[#76323F] transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="font-display text-2xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                Our Vision
              </h2>
              <p className="font-sans text-base text-[#565656] leading-relaxed">
                A software ecosystem where applications are distraction-free, high-performance, and respect user autonomy. We believe AI should quietly augment human workflow rather than creating chaotic hallucinations.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. ENGINEERING VALUES */}
      <section className="w-full py-20 md:py-28 bg-[#F5F2ED] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="space-y-16">
            <SectionHeader
              badge="Engineering Principles"
              badgeVariant="primary"
              title="How We Architect Software"
              description="Four strict operational rules govern every line of code, SaaS platform, and workflow automation we ship."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 md:p-8 space-y-4 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group">
                <span className="font-mono text-xs font-bold text-[#76323F] uppercase tracking-wider block">
                  Principle 01
                </span>
                <h3 className="font-display text-xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                  AI Extracts. Code Decides.
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Probabilistic models extract user intent and parameters; deterministic backend logic executes business rules, financial math, and database mutations.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-4 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group">
                <span className="font-mono text-xs font-bold text-[#76323F] uppercase tracking-wider block">
                  Principle 02
                </span>
                <h3 className="font-display text-xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                  Total Data Sovereignty
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Client customer records belong to the client. Workflows run in client-owned infrastructure (isolated PostgreSQL, self-hosted n8n). No intermediary storage.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-4 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group">
                <span className="font-mono text-xs font-bold text-[#76323F] uppercase tracking-wider block">
                  Principle 03
                </span>
                <h3 className="font-display text-xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                  High-Performance Velocity
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Inspired by Superhuman and Linear, our interfaces prioritize rapid workflows, sub-second latency, and zero unnecessary visual clutter.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-4 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group">
                <span className="font-mono text-xs font-bold text-[#76323F] uppercase tracking-wider block">
                  Principle 04
                </span>
                <h3 className="font-display text-xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                  Truthful Architecture
                </h3>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Zero fake counters, honest empty states (&ldquo;Inbox Zero&rdquo;), and transparent offline modes. We build software that respects user trust.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. LEADERSHIP & VERIFIED CREDENTIALS */}
      <section className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
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
                <div className="p-6 sm:p-8 space-y-6 bg-[#FAF8F5] border-t-2 border-t-[#76323F] border-x border-b border-[#D7CEC7] shadow-[6px_6px_0px_0px_#C09F80] group">
                  <div className="p-1 border border-[#D7CEC7] bg-[#F5F2ED]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1D20]">
                      <Image
                        src="/images/shivam-shukla.jpg"
                        alt="Shivam Shukla — Founder & AI Systems Architect at SHIVSASTRA"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 400px"
                        priority
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Shivam Shukla
                    </h3>
                    <p className="font-mono text-xs text-[#76323F] uppercase tracking-wider font-semibold">
                      Founder &amp; Principal AI Systems Engineer
                    </p>
                  </div>

                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Background spanning Spring Boot enterprise backends, PostgreSQL concurrency tuning, real-time WebSockets, and production LLM orchestration.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <Link
                      href="/resume"
                      className={buttonStyles({
                        variant: "primary",
                        size: "sm",
                        className: "font-mono text-xs bg-[#76323F] hover:bg-[#5a2530] text-[#FAF8F5] border-none shadow-[2px_2px_0px_0px_#C09F80]",
                      })}
                    >
                      <span>View Verified Resume</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>

                    {profile.githubUrl && (
                      <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyles({
                          variant: "secondary",
                          size: "sm",
                          className: "font-mono text-xs border-[#D7CEC7] bg-[#FAF8F5] text-[#1A1D20] hover:border-[#76323F]",
                        })}
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 ml-1 text-[#76323F]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Verified Education & Experience Timeline */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-normal text-[#1A1D20] flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#76323F]" />
                    <span>Verified Industry Experience</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="p-6 space-y-2 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base font-normal text-[#1A1D20]">
                          AI/ML Intern
                        </span>
                        <span className="font-mono text-xs text-[#565656]">
                          Oct 2026 – Present
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#76323F] font-medium">
                        Nexvia Technologies · Remote
                      </p>
                      <p className="font-sans text-sm text-[#565656] leading-relaxed pt-1">
                        Production AI/ML pipelines, agent orchestration, and automated enterprise software workflows.
                      </p>
                    </div>

                    <div className="p-6 space-y-2 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base font-normal text-[#1A1D20]">
                          Software Engineer Intern
                        </span>
                        <span className="font-mono text-xs text-[#565656]">
                          Jul 2025 – Sep 2025
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#76323F] font-medium">
                        Soft Pro · Noida, India
                      </p>
                      <p className="font-sans text-sm text-[#565656] leading-relaxed pt-1">
                        Engineered stateless RESTful backend services with Java 17, Spring Boot 3, and MySQL. Decreased API response times by ~20% through indexed query optimizations and connection pool tuning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#C09F80]/30">
                  <h3 className="font-display text-xl font-normal text-[#1A1D20] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#76323F]" />
                    <span>Education &amp; Academic Honors</span>
                  </h3>

                  <div className="p-6 space-y-2 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-base font-normal text-[#1A1D20]">
                        B.Tech in Computer Science and Engineering
                      </span>
                      <span className="font-mono text-xs text-[#565656]">
                        2022 – 2026
                      </span>
                    </div>
                    <p className="font-mono text-xs text-[#76323F] font-medium">
                      SRMS CETR (Dr. A.P.J. Abdul Kalam Technical University)
                    </p>
                    <p className="font-sans text-sm text-[#565656] leading-relaxed pt-1">
                      Focused on backend architectures, distributed computing, database management, and application security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 5. CTA BANNER (Grounded Contrast) */}
      <section className="w-full bg-[#1A1D20] text-[#F5F2ED] py-20 border-t border-[#C09F80]/30">
        <SectionContainer>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#F5F2ED]">
              Interested in collaborating with SHIVSASTRA?
            </h2>
            <p className="font-sans text-base text-[#D7CEC7] leading-relaxed">
              Whether you need a custom agent system, an architecture audit, or want to explore our enterprise product licenses, we’d love to connect.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={buttonStyles({
                  variant: "primary",
                  size: "lg",
                })}
              >
                <span>Initiate a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className={buttonStyles({
                  variant: "dark-inverse",
                  size: "lg",
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
