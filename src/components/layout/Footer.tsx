import React from "react";
import Link from "next/link";
import { SectionContainer } from "./SectionContainer";
import { ArrowUpRight, ShieldCheck, FileText } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1D20] text-[#D7CEC7] border-t border-[#C09F80]/30 pt-16 md:pt-20 pb-12">
      <SectionContainer as="div">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#C09F80]/20">
          {/* Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-2xl font-normal tracking-[0.06em] text-[#F5F2ED] hover:text-[#C09F80] transition-colors uppercase"
            >
              <span>SHIVSASTRA</span>
            </Link>

            <p className="text-sm text-[#D7CEC7] leading-relaxed max-w-sm font-sans">
              Software engineering and AI systems studio founded by Shivam Shukla. Engineering production Agentic AI workflows, high-throughput backend platforms, and client-owned digital assets.
            </p>

            <div className="flex flex-col gap-1 pt-2 font-mono text-xs text-[#C09F80]">
              <span>AI Systems &amp; Software Engineering Studio</span>
              <span className="text-[#565656]">Location: India</span>
            </div>
          </div>

          {/* Priority 1: Store & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold flex items-center gap-2">
              <span>Solutions &amp; Atelier</span>
              <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded-none bg-[#76323F] text-[#FFFFFF]">
                Primary
              </span>
            </h3>
            <ul className="space-y-2 text-sm font-sans text-[#D7CEC7]">
              <li>
                <Link href="/store" className="hover:text-[#F5F2ED] transition-colors font-medium text-[#F5F2ED]">
                  Store Catalogue
                </Link>
              </li>
              <li>
                <Link href="/store/n8n-lead-qualifier-agent-pack" className="hover:text-[#F5F2ED] transition-colors">
                  Lead Qualifier Agent Pack (₹3,499)
                </Link>
              </li>
              <li>
                <Link href="/store/whatsapp-support-agent-kit" className="hover:text-[#F5F2ED] transition-colors">
                  WhatsApp Support Kit (₹3,999)
                </Link>
              </li>
              <li>
                <Link href="/store/small-business-agent-bundle" className="hover:text-[#F5F2ED] transition-colors">
                  Small Business Bundle (₹9,999)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F5F2ED] transition-colors font-medium text-[#F5F2ED]">
                  Engineering Services &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#F5F2ED] transition-colors">
                  Pricing Matrix &amp; Evaluation Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Priority 2: Personal Portfolio */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold">
              Portfolio &amp; Work
            </h3>
            <ul className="space-y-2 text-sm font-sans text-[#D7CEC7]">
              <li>
                <Link href="/profile" className="hover:text-[#F5F2ED] transition-colors font-medium text-[#F5F2ED]">
                  Founder Profile &amp; Bio
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F5F2ED] transition-colors">
                  Case Studies &amp; Builds
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/inbox"
                  className="hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>JIOSI Inbox (SaaS)</span>
                </Link>
              </li>
              <li>
                <Link href="/projects/yojna-setu" className="hover:text-[#F5F2ED] transition-colors">
                  Yojna Setu (Citizen Discovery)
                </Link>
              </li>
              <li>
                <Link href="/projects/quickeats" className="hover:text-[#F5F2ED] transition-colors">
                  QuickEats (Backend Architecture)
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#C09F80]" />
                  <span>Verified Resume (PDF)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Priority 3: Engineering Lab & Connect */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold">
              Lab &amp; Legal
            </h3>
            <ul className="space-y-2 text-sm font-sans text-[#D7CEC7]">
              <li>
                <Link href="/lab" className="hover:text-[#F5F2ED] transition-colors font-medium text-[#F5F2ED]">
                  Engineering Lab
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5F2ED] transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="hover:text-[#F5F2ED] transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#F5F2ED] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#F5F2ED] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7CEC7]/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C09F80]" />
            <span>Deterministic Core · Client-Owned Data · No Calculation Drift</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shivam-shukla888"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#C09F80]" />
            </a>
            <a
              href="https://linkedin.com/in/shivamshukla888"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#C09F80]" />
            </a>
            <span>&copy; {new Date().getFullYear()} SHIVSASTRA. Shivam Shukla.</span>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
