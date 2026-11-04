import React from "react";
import Link from "next/link";
import { SectionContainer } from "./SectionContainer";
import { Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0B1020] text-slate-300 border-t border-white/10 pt-16 md:pt-20 pb-12">
      <SectionContainer as="div">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-white group"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="tracking-[0.04em] font-extrabold text-white">JIOSI</span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-sans">
              Intelligent software systems, email productivity platforms, and production-grade Agentic AI for forward-thinking businesses.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Products
            </h3>
            <ul className="space-y-2 text-sm font-sans text-slate-400">
              <li>
                <Link
                  href="/products/inbox"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium text-slate-200"
                >
                  <span>JIOSI Inbox</span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded bg-indigo-500/20 text-cyan-300 border border-indigo-400/30">
                    SaaS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Directory
                </Link>
              </li>
              <li>
                <Link href="/store/agent-templates" className="hover:text-white transition-colors">
                  Agent Templates
                </Link>
              </li>
              <li>
                <Link href="/store/agent-kits" className="hover:text-white transition-colors">
                  Complete Agent Kits
                </Link>
              </li>
              <li>
                <Link href="/store/prompt-packs" className="hover:text-white transition-colors">
                  Prompt Libraries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Solutions
            </h3>
            <ul className="space-y-2 text-sm font-sans text-slate-400">
              <li>
                <Link href="/services#starter-agent-setup" className="hover:text-white transition-colors">
                  Starter Agent Setup
                </Link>
              </li>
              <li>
                <Link href="/services#business-agent-package" className="hover:text-white transition-colors">
                  Business Agent Package
                </Link>
              </li>
              <li>
                <Link href="/services#full-agentic-system" className="hover:text-white transition-colors">
                  Full Agentic System
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link href="/services#quote" className="hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Company
            </h3>
            <ul className="space-y-2 text-sm font-sans text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About JIOSI
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Verified Case Studies
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-white transition-colors">
                  Architecture Lab
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors">
                  Credentials &amp; Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Verification */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Security
            </h3>
            <ul className="space-y-2 text-sm font-sans text-slate-400">
              <li className="flex items-center gap-1.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Data Sovereignty</span>
              </li>
              <li className="text-xs text-slate-400">
                Zero client customer data stored on intermediary servers.
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/shivam-shukla888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivam-shukla-186276374/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 JIOSI. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/refunds" className="hover:text-slate-200 transition-colors">
              Refunds Policy
            </Link>
            <a
              href="https://inbox.jiosi.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
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
