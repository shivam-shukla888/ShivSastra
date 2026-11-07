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
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-2xl font-normal tracking-[0.06em] text-[#F5F2ED] hover:text-[#C09F80] transition-colors uppercase"
            >
              <span>SHIVSASTRA</span>
            </Link>

            <p className="text-sm text-[#D7CEC7] leading-relaxed max-w-sm font-sans">
              Personal engineering portfolio of Shivam Shukla. Engineering production Agentic AI workflows, high-throughput backend systems, and secure web platforms.
            </p>

            <div className="flex flex-col gap-1 pt-2 font-mono text-xs text-[#C09F80]">
              <span>AI Systems &amp; Backend Software Engineering</span>
              <span className="text-[#565656]">Location: India</span>
            </div>
          </div>

          {/* Column 1: Portfolio Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold">
              Portfolio
            </h3>
            <ul className="space-y-2 text-sm font-sans text-[#D7CEC7]">
              <li>
                <Link href="/" className="hover:text-[#F5F2ED] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-[#F5F2ED] transition-colors">
                  Profile &amp; Bio
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F5F2ED] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#C09F80]" />
                  <span>Resume (PDF)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F5F2ED] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Featured Systems */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold">
              Featured Systems
            </h3>
            <ul className="space-y-2 text-sm font-sans text-[#D7CEC7]">
              <li>
                <Link
                  href="/projects/inbox"
                  className="hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1.5 font-medium text-[#F5F2ED]"
                >
                  <span>JIOSI Inbox</span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded-none bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40">
                    SaaS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects/yojna-setu" className="hover:text-[#F5F2ED] transition-colors">
                  Yojna Setu (Citizen Schemes)
                </Link>
              </li>
              <li>
                <Link href="/projects/quickeats" className="hover:text-[#F5F2ED] transition-colors">
                  QuickEats (Backend Architecture)
                </Link>
              </li>
              <li>
                <Link href="/projects/shivsastra" className="hover:text-[#F5F2ED] transition-colors">
                  ShivSastra Digital HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Profiles */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F2ED] font-semibold">
              Connect
            </h3>
            <ul className="space-y-2 text-sm font-sans text-[#D7CEC7]">
              <li className="flex items-center gap-1.5 text-xs text-[#F5F2ED]">
                <ShieldCheck className="w-4 h-4 text-[#C09F80] shrink-0" />
                <span>Deterministic Core</span>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/shivam-shukla888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-none bg-[#FAF8F5]/5 hover:bg-[#FAF8F5]/15 border border-[#C09F80]/30 flex items-center justify-center text-[#D7CEC7] hover:text-[#F5F2ED] transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivam-shukla-186276374/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-none bg-[#FAF8F5]/5 hover:bg-[#FAF8F5]/15 border border-[#C09F80]/30 flex items-center justify-center text-[#D7CEC7] hover:text-[#F5F2ED] transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7CEC7]/80">
          <p>© 2026 SHIVSASTRA · Shivam Shukla. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F5F2ED] transition-colors underline underline-offset-4 decoration-[#C09F80]/40">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F5F2ED] transition-colors underline underline-offset-4 decoration-[#C09F80]/40">
              Terms of Service
            </Link>
            <Link href="/refunds" className="hover:text-[#F5F2ED] transition-colors underline underline-offset-4 decoration-[#C09F80]/40">
              Refunds Policy
            </Link>
            <a
              href="https://inbox.jiosi.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C09F80] hover:text-[#F5F2ED] transition-colors inline-flex items-center gap-1"
            >
              <span>Launch JIOSI Inbox</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
