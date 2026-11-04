"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "JIOSI Inbox", href: "/products/inbox", badge: "Live" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Escape key and prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
          toggleButtonRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1020]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Anchor */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white hover:text-indigo-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="tracking-[0.04em] font-extrabold text-white">JIOSI</span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/15">
            Systems
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-sans">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg font-medium transition-all duration-150 flex items-center gap-2",
                  isActive
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-cyan-300 border border-indigo-400/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://inbox.jiosi.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-150 shadow-sm"
          >
            <span>Launch Inbox</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-sm shadow-indigo-500/20 border border-indigo-400/30 transition-all duration-150"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          ref={toggleButtonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer / Slide-Over Menu */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="lg:hidden fixed inset-x-0 top-16 sm:top-18 bottom-0 bg-[#0B1020]/95 backdrop-blur-xl border-t border-white/10 z-50 flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Menu
              </span>
              <nav className="flex flex-col space-y-1 pt-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl font-medium text-base transition-colors flex items-center justify-between",
                        isActive
                          ? "bg-indigo-600/20 text-white border border-indigo-500/30 font-semibold"
                          : "text-slate-200 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      {item.badge ? (
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                          {item.badge}
                        </span>
                      ) : (
                        <span className="text-slate-500 text-sm">→</span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="https://inbox.jiosi.online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <span>Launch JIOSI Inbox Application</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md shadow-indigo-600/25"
              >
                Discuss an Engineering System →
              </Link>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="font-mono text-xs text-slate-400">
              JIOSI · Modern Digital Systems & AI
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
