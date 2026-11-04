import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { getProfileSettings } from "@/lib/profile";
import { absoluteUrl } from "@/lib/site";
import {
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact JIOSI — Project Inquiries & Architecture Advisory",
  description:
    "Direct engineering inquiry channel for JIOSI systems, JIOSI Inbox enterprise deployments, and custom Agentic AI workflows.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact JIOSI — Project Inquiries & Architecture Advisory",
    description:
      "Direct engineering inquiry channel for JIOSI systems, JIOSI Inbox enterprise deployments, and custom Agentic AI workflows.",
    url: absoluteUrl("/contact"),
    type: "website",
    siteName: "JIOSI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact JIOSI",
      },
    ],
  },
};

export default async function ContactPage() {
  const profile = await getProfileSettings();

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* =======================================================
          1. DARK NAVY HERO BANNER
          ======================================================= */}
      <section className="relative w-full bg-[#0B1020] text-white pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-30">
          <div className="w-full h-full bg-gradient-to-b from-indigo-500/20 via-cyan-500/10 to-transparent blur-3xl" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-600 text-xs font-mono">/</span>
              <span className="text-xs font-mono text-cyan-300 font-semibold">Contact</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Start an engineering conversation.
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need to automate incoming leads, deploy custom multi-agent reasoning pipelines, or inquire about JIOSI Inbox enterprise licensing — we respond within 24 hours.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* =======================================================
          2. CONTACT FORM & DIRECT CHANNELS
          ======================================================= */}
      <section className="w-full py-20 md:py-28 bg-white border-b border-slate-200">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Guarantees */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <Badge variant="primary" size="sm">
                  Direct Channel
                </Badge>
                <h2 className="font-display text-3xl font-bold text-slate-900">
                  Let&apos;s Discuss Your System
                </h2>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  Every project starts with a direct, written architecture review. Tell us what you are building, your timeline, and your stack.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-6 space-y-2">
                  <div className="flex items-center gap-2.5 text-indigo-600 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Response Time Guarantee</span>
                  </div>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed">
                    Direct reply from our engineering team within 24 hours.
                  </p>
                </Card>

                <Card className="p-6 space-y-2">
                  <div className="flex items-center gap-2.5 text-emerald-600 font-mono text-xs uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Strict Data Sovereignty</span>
                  </div>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed">
                    Inquiries are transmitted directly over encrypted TLS. We never sell, share, or disclose client contact data.
                  </p>
                </Card>

                {profile.email && (
                  <Card className="p-6 space-y-2">
                    <div className="flex items-center gap-2.5 text-indigo-600 font-mono text-xs uppercase tracking-wider font-semibold">
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-sm text-slate-900 hover:text-indigo-600 transition-colors font-medium block"
                    >
                      {profile.email}
                    </a>
                  </Card>
                )}
              </div>

              {/* Verified External Profiles */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                  Verified Engineering Profiles
                </span>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  {profile.githubUrl && (
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 font-semibold"
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
                      className="text-slate-700 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 font-semibold"
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
                      className="text-slate-700 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 font-semibold"
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
              <Card className="p-8 sm:p-10 shadow-lg border-slate-200 bg-white">
                <div className="space-y-6">
                  <div className="space-y-1 pb-4 border-b border-slate-100">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Send a Message
                    </h3>
                    <p className="font-sans text-xs text-slate-500">
                      Protected by Cloudflare Turnstile bot defense. Zero spam.
                    </p>
                  </div>

                  <ContactForm variant="light" />
                </div>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
