"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  List as Menu,
  X,
  ShoppingBagOpen,
  Briefcase,
  User,
  Flask,
  PaperPlaneTilt as Send,
  FileText,
  ArrowUpRight,
  CaretRight as ChevronRight,
} from "@phosphor-icons/react";
import { HamsterMascot } from "@/components/ai/HamsterMascot";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  isPrimaryBusiness?: boolean;
  badge?: string;
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    label: "Store",
    href: "/store",
    icon: ShoppingBagOpen,
    description: "Production agent kits, templates & blueprints",
    isPrimaryBusiness: true,
    badge: "KITS",
  },
  {
    label: "Services",
    href: "/services",
    icon: Briefcase,
    description: "Client engineering, custom workflows & AI systems",
    isPrimaryBusiness: true,
    badge: "ATELIER",
  },
  {
    label: "Portfolio",
    href: "/profile",
    icon: User,
    description: "Founder background, verified skills & case studies",
  },
  {
    label: "Lab",
    href: "/lab",
    icon: Flask,
    description: "Technical research, architecture monographs & benchmarks",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Send,
    description: "Enquiries, service scoping & technical collaboration",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile drawer on escape and prevent background scrolling
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

  // Trigger floating AI assistant
  const handleOpenAssistant = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-ai-assistant"));
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#F5F2ED]/95 backdrop-blur-md border-b border-[#C09F80]/40 text-[#1A1D20] transition-colors">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Anchor: Accessible Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-normal tracking-[0.06em] text-[#1A1D20] hover:text-[#76323F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F] py-1 shrink-0 uppercase"
          >
            <span>SHIVSASTRA</span>
          </Link>

          {/* Desktop Navigation: Store | Services | Portfolio | Lab | Contact */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-sans"
            aria-label="Desktop primary navigation"
          >
            {PRIMARY_NAV_ITEMS.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              // Add a subtle divider between primary business solutions (Store, Services) and secondary items
              const showDivider = idx === 2;

              return (
                <React.Fragment key={item.href}>
                  {showDivider && (
                    <div
                      className="h-4 w-px bg-[#C09F80]/40 mx-1.5 self-center"
                      aria-hidden="true"
                    />
                  )}
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3.5 py-1.5 rounded-none font-sans text-xs xl:text-sm transition-all duration-150 flex items-center gap-1.5",
                      item.isPrimaryBusiness ? "font-semibold tracking-tight" : "font-normal",
                      isActive
                        ? "text-[#76323F] font-semibold bg-[#FAF8F5] border-b-2 border-[#76323F]"
                        : item.isPrimaryBusiness
                        ? "text-[#1A1D20] hover:text-[#76323F] hover:bg-[#FAF8F5]"
                        : "text-[#565656] hover:text-[#1A1D20] hover:bg-[#FAF8F5]"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className={cn(
                          "font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-none border font-bold",
                          isActive
                            ? "bg-[#76323F] text-[#FAF8F5] border-[#76323F]"
                            : "bg-[#76323F]/10 text-[#76323F] border-[#76323F]/30"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </React.Fragment>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Resume & Primary Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-none text-[#1A1D20] bg-transparent hover:bg-[#FAF8F5] border border-[#C09F80] hover:border-[#76323F] transition-all duration-150"
            >
              <FileText className="w-3.5 h-3.5 text-[#76323F]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#565656]" />
            </Link>

            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-none text-[#FFFFFF]",
                "bg-[#76323F] hover:bg-[#5A1C29] border border-[#76323F] hover:border-[#C09F80] transition-all duration-150 shadow-none"
              )}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Right Action Bar: Quick Hamster Assistant + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleOpenAssistant}
              aria-label="Ask ShivSastra Assistant"
              className="h-10 px-2.5 flex items-center gap-1.5 rounded-none border border-[#C09F80]/50 bg-[#FAF8F5] text-[#1A1D20] hover:border-[#76323F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F] transition-colors"
            >
              <HamsterMascot size={20} />
              <span className="font-mono text-[11px] font-semibold text-[#76323F] hidden xs:inline">
                Ask
              </span>
            </button>

            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              className="w-10 h-10 flex items-center justify-center rounded-none border border-[#C09F80]/50 text-[#1A1D20] hover:bg-[#FAF8F5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F] transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Slide-Over Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#F5F2ED] border-t border-[#C09F80]/40 z-50 flex flex-col justify-between overflow-y-auto"
          >
            <div className="p-5 sm:p-6 space-y-6 max-w-xl mx-auto w-full">
              {/* Priority 1: Primary Business Solutions */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#76323F] font-semibold px-2 block">
                  Solutions &amp; Atelier
                </span>
                <nav className="space-y-1.5" aria-label="Primary business links">
                  {PRIMARY_NAV_ITEMS.filter((i) => i.isPrimaryBusiness).map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-3.5 py-3 rounded-none transition-all duration-150 flex items-center justify-between min-h-[48px] group border",
                          isActive
                            ? "bg-[#FAF8F5] text-[#76323F] border-[#76323F]"
                            : "bg-[#FAF8F5]/60 text-[#1A1D20] border-[#C09F80]/50 hover:bg-[#FAF8F5] hover:border-[#76323F]"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "w-9 h-9 rounded-none flex items-center justify-center shrink-0 border transition-colors",
                              isActive
                                ? "bg-[#76323F] text-[#FFFFFF] border-[#76323F]"
                                : "bg-[#FAF8F5] text-[#76323F] border-[#C09F80]/60 group-hover:bg-[#76323F] group-hover:text-[#FFFFFF]"
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <span className="font-sans text-sm font-bold text-[#1A1D20]">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded-none bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30 font-semibold">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="font-sans text-xs text-[#565656] line-clamp-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5",
                            isActive ? "text-[#76323F]" : "text-[#C09F80]"
                          )}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Priority 2 & 3: Portfolio & Lab */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#565656] font-semibold px-2 block">
                  Portfolio &amp; Engineering
                </span>
                <nav className="space-y-1.5" aria-label="Secondary links">
                  {PRIMARY_NAV_ITEMS.filter((i) => !i.isPrimaryBusiness).map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-3.5 py-2.5 rounded-none transition-all duration-150 flex items-center justify-between min-h-[44px] group border border-transparent",
                          isActive
                            ? "bg-[#FAF8F5] text-[#76323F] border-[#C09F80]"
                            : "text-[#565656] hover:bg-[#FAF8F5] hover:text-[#1A1D20] hover:border-[#C09F80]/40"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-none flex items-center justify-center shrink-0 border transition-colors",
                              isActive
                                ? "bg-[#76323F] text-[#FFFFFF] border-[#76323F]"
                                : "bg-[#FAF8F5] text-[#565656] border-[#C09F80]/40 group-hover:text-[#1A1D20] group-hover:border-[#C09F80]"
                            )}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-left">
                            <span className="font-sans text-sm font-semibold text-[#1A1D20] block">
                              {item.label}
                            </span>
                            {item.description && (
                              <p className="font-sans text-xs text-[#565656] line-clamp-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5",
                            isActive ? "text-[#76323F]" : "text-[#C09F80]"
                          )}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Direct Portfolio & Service Actions */}
              <div className="pt-4 border-t border-[#C09F80]/30 space-y-3">
                <Link
                  href="/resume"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-none text-sm font-mono text-[#1A1D20] bg-[#FAF8F5] hover:bg-[#F5F2ED] border border-[#C09F80] transition-all min-h-[48px]"
                >
                  <FileText className="w-4 h-4 text-[#76323F]" />
                  <span>View Verified Resume</span>
                  <ArrowUpRight className="w-4 h-4 text-[#565656]" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-none text-sm font-semibold text-[#FFFFFF] bg-[#76323F] hover:bg-[#5A1C29] border border-[#76323F] transition-all min-h-[48px]"
                >
                  <span>Connect / Get in Touch</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    handleOpenAssistant();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-none text-sm font-mono text-[#1A1D20] bg-[#FAF8F5] border border-[#C09F80]/50 hover:border-[#76323F] transition-all min-h-[48px]"
                >
                  <HamsterMascot size={20} />
                  <span>Ask ShivSastra (AI Assistant)</span>
                </button>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="pt-4 pb-8 text-center space-y-1">
                <p className="font-mono text-xs text-[#1A1D20] font-semibold">
                  SHIVSASTRA · Shivam Shukla
                </p>
                <p className="font-mono text-[11px] text-[#565656]">
                  AI Systems &amp; Software Engineering Studio
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =======================================================
          MOBILE BOTTOM APPLICATION BAR (sm:hidden, fixed bottom)
          Clean 5 Destinations: Store | Services | Portfolio | Lab | Contact
          ======================================================= */}
      <nav
        aria-label="Mobile quick navigation bar"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F5F2ED]/95 backdrop-blur-xl border-t border-[#C09F80]/40 px-1 py-1 flex items-center justify-around shadow-sm"
        style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
      >
        {PRIMARY_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex flex-col items-center justify-center min-w-[50px] min-h-[48px] px-1 py-1 rounded-none transition-colors",
                isActive && !isOpen
                  ? "text-[#76323F] font-semibold"
                  : item.isPrimaryBusiness
                  ? "text-[#1A1D20] font-medium"
                  : "text-[#565656] hover:text-[#1A1D20]"
              )}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="font-mono text-[10px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
