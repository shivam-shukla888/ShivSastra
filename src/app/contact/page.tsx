import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { getProfileSettings } from "@/lib/profile";
import { absoluteUrl } from "@/lib/site";
import {
  EnvelopeSimple as Mail,
  Clock,
  ShieldCheck,
  ArrowSquareOut as ExternalLink,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact SHIVSASTRA — Project Inquiries & Architecture Advisory",
  description:
    "Direct engineering inquiry channel for SHIVSASTRA systems, JIOSI Inbox enterprise deployments, and custom Agentic AI workflows.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact SHIVSASTRA — Project Inquiries & Architecture Advisory",
    description:
      "Direct engineering inquiry channel for SHIVSASTRA systems, JIOSI Inbox enterprise deployments, and custom Agentic AI workflows.",
    url: absoluteUrl("/contact"),
    type: "website",
    siteName: "SHIVSASTRA",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact SHIVSASTRA",
      },
    ],
  },
};

export default async function ContactPage() {
  const profile = await getProfileSettings();

  return (
    <div className="flex flex-col w-full bg-[#F5F2ED] text-[#1A1D20]">
      {/* 1. WARM EDITORIAL HERO BANNER */}
      <section className="relative w-full bg-[#F5F2ED] text-[#1A1D20] pt-20 md:pt-28 pb-16 md:pb-24 border-b border-[#C09F80]/30">
        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-mono text-[#565656] hover:text-[#1A1D20] transition-colors">
                Home
              </Link>
              <span className="text-[#C09F80] text-xs font-mono">/</span>
              <span className="text-xs font-mono text-[#76323F] font-semibold">Contact</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1D20] leading-[1.08]">
              Start an engineering conversation.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#565656] leading-relaxed">
              Whether you need to automate incoming leads, deploy custom multi-agent reasoning pipelines, or inquire about JIOSI Inbox enterprise licensing — we respond within 24 hours.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* 2. CONTACT FORM & DIRECT CHANNELS */}
      <section className="w-full py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Guarantees */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <Badge variant="primary" size="sm">
                  Direct Channel
                </Badge>
                <h2 className="font-display text-3xl font-normal text-[#1A1D20]">
                  Let&apos;s Discuss Your System
                </h2>
                <p className="font-sans text-sm text-[#565656] leading-relaxed">
                  Every project starts with a direct, written architecture review. Tell us what you are building, your timeline, and your stack.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 space-y-2 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2.5 text-[#76323F] font-mono text-xs uppercase tracking-wider font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Response Time Guarantee</span>
                  </div>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Direct reply from our engineering team within 24 hours.
                  </p>
                </div>

                <div className="p-6 space-y-2 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                  <div className="flex items-center gap-2.5 text-[#76323F] font-mono text-xs uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Strict Data Sovereignty</span>
                  </div>
                  <p className="font-sans text-sm text-[#565656] leading-relaxed">
                    Inquiries are transmitted directly over encrypted TLS. We never sell, share, or disclose client contact data.
                  </p>
                </div>

                {profile.email && (
                  <div className="p-6 space-y-2 bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[2px_2px_0px_0px_#D7CEC7]">
                    <div className="flex items-center gap-2.5 text-[#76323F] font-mono text-xs uppercase tracking-wider font-semibold">
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-sm text-[#1A1D20] hover:text-[#76323F] transition-colors font-medium block"
                    >
                      {profile.email}
                    </a>
                  </div>
                )}
              </div>

              {/* Verified External Profiles */}
              <div className="pt-2 border-t border-[#C09F80]/30 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#565656] font-semibold block">
                  Verified Engineering Profiles
                </span>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  {profile.githubUrl && (
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {profile.linkedinUrl && (
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {profile.contraUrl && (
                    <a
                      href={profile.contraUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A1D20] hover:text-[#76323F] transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Contra</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 border border-[#C09F80]/60 bg-[#FAF8F5] shadow-[4px_4px_0px_0px_#D7CEC7]">
                <div className="space-y-6">
                  <div className="space-y-1 pb-4 border-b border-[#C09F80]/30">
                    <h3 className="font-display text-2xl font-normal text-[#1A1D20]">
                      Send a Message
                    </h3>
                    <p className="font-sans text-xs text-[#565656]">
                      Protected by Cloudflare Turnstile bot defense. Zero spam.
                    </p>
                  </div>

                  <ContactForm variant="light" />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
