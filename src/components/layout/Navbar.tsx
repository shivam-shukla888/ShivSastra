"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  List as Menu,
  X,
  House as Home,
  Stack as Layers,
  Tray as Inbox,
  Cpu,
  CreditCard,
  Code as FolderGit2,
  ShoppingBag,
  Flask as FlaskConical,
  Compass,
  PaperPlaneTilt as Send,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Sparkle as Sparkles,
  CaretRight as ChevronRight,
} from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: string;
  external?: boolean;
}

const DESKTOP_NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "/products", icon: Layers },
  { label: "Services", href: "/services", icon: Cpu },
  { label: "Pricing", href: "/pricing", icon: CreditCard },
  { label: "Projects", href: "/projects", icon: FolderGit2 },
  { label: "Store", href: "/store", icon: ShoppingBag },
  { label: "Lab", href: "/lab", icon: FlaskConical },
  { label: "About", href: "/about", icon: Compass },
  { label: "Contact", href: "/contact", icon: Send },
];

const MOBILE_CATEGORIES: {
  category: string;
  items: NavItem[];
}[] = [
  {
    category: "Core Platforms",
    items: [
      {
        label: "Home",
        href: "/",
        icon: Home,
        description: "Intelligent software systems & AI platform",
      },
      {
        label: "Products",
        href: "/products",
        icon: Layers,
        description: "Standalone software & agent blueprints",
      },
      {
        label: "JIOSI Inbox",
        href: "/products/inbox",
        icon: Inbox,
        description: "Keyboard-first email productivity client",
      },
      {
        label: "Services",
        href: "/services",
        icon: Cpu,
        description: "Production Agentic AI engineering packages",
      },
      {
        label: "Pricing & Plans",
        href: "/pricing",
        icon: CreditCard,
        description: "Transparent pricing & license terms",
      },
      {
        label: "Case Studies",
        href: "/projects",
        icon: FolderGit2,
        description: "Verified engineering architecture builds",
      },
    ],
  },
  {
    category: "Releases & Innovation",
    items: [
      {
        label: "Digital Store",
        href: "/store",
        icon: ShoppingBag,
        description: "n8n workflows, prompt packs & agent kits",
      },
      {
        label: "Architecture Lab",
        href: "/lab",
        icon: FlaskConical,
        description: "Technical experiments & research notes",
      },
      {
        label: "Profile & Portfolio",
        href: "/profile",
        icon: FileText,
        description: "Founder profile, selected work and engineering background",
      },
      {
        label: "About SHIVSASTRA",
        href: "/about",
        icon: Compass,
        description: "Mission, engineering principles & founder",
      },
      {
        label: "Direct Contact",
        href: "/contact",
        icon: Send,
        description: "Architecture reviews & project inquiries",
      },
      {
        label: "Resume & Credentials",
        href: "/resume",
        icon: FileText,
        description: "Verified engineering background",
      },
    ],
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
          {/* Brand Anchor */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-normal tracking-[0.06em] text-[#1A1D20] hover:text-[#76323F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F] py-1 shrink-0 uppercase"
          >
            <span>SHIVSASTRA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-sans" aria-label="Desktop primary navigation">
            {DESKTOP_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-none font-sans text-xs xl:text-sm transition-all duration-150 flex items-center gap-1.5",
                    isActive
                      ? "text-[#76323F] font-semibold bg-[#FAF8F5] border-b-2 border-[#76323F]"
                      : "text-[#565656] hover:text-[#1A1D20] hover:bg-[#FAF8F5]"
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="font-mono text-[9px] uppercase font-medium tracking-wider px-1.5 py-0.2 rounded-none bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://inbox.jiosi.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-none text-[#1A1D20] bg-transparent hover:bg-[#FAF8F5] border border-[#C09F80] hover:border-[#76323F] transition-all duration-150"
            >
              <span>Launch Inbox</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#76323F]" />
            </a>

            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-none text-[#FFFFFF]",
                "bg-[#76323F] hover:bg-[#5A1C29] border border-[#76323F] hover:border-[#C09F80] transition-all duration-150 shadow-none"
              )}
            >
              Book Consult
            </Link>
          </div>

          {/* Mobile Right Action Bar: Search + Store + AI + Menu */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            {/* Quick Store Button */}
            <Link
              href="/store"
              aria-label="Browse digital store releases"
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-none border border-[#C09F80]/40 transition-colors relative",
                pathname.startsWith("/store")
                  ? "text-[#76323F] bg-[#FAF8F5]"
                  : "text-[#565656] hover:text-[#1A1D20] hover:bg-[#FAF8F5]"
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="sr-only">Store</span>
            </Link>

            {/* Quick AI Assistant Trigger */}
            <button
              type="button"
              onClick={handleOpenAssistant}
              aria-label="Ask ShivSastra AI Assistant"
              className="w-10 h-10 flex items-center justify-center rounded-none border border-[#C09F80]/40 text-[#565656] hover:text-[#76323F] hover:bg-[#FAF8F5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#76323F]" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
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
              {/* Categorized Nav Lists */}
              <div className="space-y-6">
                {MOBILE_CATEGORIES.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#565656] font-semibold px-2 block">
                      {group.category}
                    </span>
                    <nav className="space-y-1" aria-label={group.category}>
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive =
                          item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href || pathname.startsWith(item.href + "/");

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "px-3.5 py-3 rounded-none transition-all duration-150 flex items-center justify-between min-h-[48px] group border border-transparent",
                              isActive
                                ? "bg-[#FAF8F5] text-[#76323F] border-[#C09F80]"
                                : "text-[#565656] hover:bg-[#FAF8F5] hover:text-[#1A1D20] hover:border-[#C09F80]/40"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={cn(
                                  "w-9 h-9 rounded-none flex items-center justify-center shrink-0 border transition-colors",
                                  isActive
                                    ? "bg-[#76323F] text-[#FFFFFF] border-[#76323F]"
                                    : "bg-[#FAF8F5] text-[#565656] border-[#C09F80]/40 group-hover:text-[#1A1D20] group-hover:border-[#C09F80]"
                                )}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="flex items-center gap-2">
                                  <span className="font-sans text-sm font-semibold text-[#1A1D20]">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-none bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30">
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
                ))}
              </div>

              {/* Direct Actions Strip */}
              <div className="pt-4 border-t border-[#C09F80]/30 space-y-3">
                <a
                  href="https://inbox.jiosi.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-none text-sm font-semibold text-[#1A1D20] bg-[#FAF8F5] hover:bg-[#F5F2ED] border border-[#C09F80] transition-all min-h-[48px]"
                >
                  <Inbox className="w-4 h-4 text-[#76323F]" />
                  <span>Launch JIOSI Inbox Platform</span>
                  <ArrowUpRight className="w-4 h-4 text-[#76323F]" />
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-none text-sm font-semibold text-[#FFFFFF] bg-[#76323F] hover:bg-[#5A1C29] border border-[#76323F] transition-all min-h-[48px]"
                >
                  <span>Discuss an Engineering System</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="pt-6 pb-8 text-center space-y-1">
                <p className="font-mono text-xs text-[#1A1D20] font-medium">
                  SHIVSASTRA · Intelligent Software &amp; Agentic AI
                </p>
                <p className="font-mono text-[11px] text-[#565656]">
                  Client-Owned Deployments · Zero Intermediary Data Retention
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =======================================================
          MOBILE BOTTOM APPLICATION BAR (sm:hidden, fixed bottom)
          ======================================================= */}
      <nav
        aria-label="Mobile quick navigation bar"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F5F2ED]/95 backdrop-blur-xl border-t border-[#C09F80]/40 px-2 py-1.5 flex items-center justify-around shadow-sm"
        style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
      >
        {/* Tab 1: Home */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-none transition-colors",
            pathname === "/" && !isOpen
              ? "text-[#76323F] font-semibold"
              : "text-[#565656] hover:text-[#1A1D20]"
          )}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="font-mono text-[10px] tracking-tight">Home</span>
        </Link>

        {/* Tab 2: Products */}
        <Link
          href="/products"
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-none transition-colors",
            (pathname === "/products" || pathname.startsWith("/products/")) && !isOpen
              ? "text-[#76323F] font-semibold"
              : "text-[#565656] hover:text-[#1A1D20]"
          )}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span className="font-mono text-[10px] tracking-tight">Products</span>
        </Link>

        {/* Tab 3: Store */}
        <Link
          href="/store"
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-none transition-colors",
            pathname.startsWith("/store") && !isOpen
              ? "text-[#76323F] font-semibold"
              : "text-[#565656] hover:text-[#1A1D20]"
          )}
        >
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          <span className="font-mono text-[10px] tracking-tight">Store</span>
        </Link>

        {/* Tab 4: Services */}
        <Link
          href="/services"
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-none transition-colors",
            pathname.startsWith("/services") && !isOpen
              ? "text-[#76323F] font-semibold"
              : "text-[#565656] hover:text-[#1A1D20]"
          )}
        >
          <Cpu className="w-5 h-5 mb-0.5" />
          <span className="font-mono text-[10px] tracking-tight">Services</span>
        </Link>

        {/* Tab 5: Menu */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open full navigation menu"}
          className={cn(
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-none transition-colors",
            isOpen ? "text-[#76323F] font-semibold" : "text-[#565656] hover:text-[#1A1D20]"
          )}
        >
          {isOpen ? <X className="w-5 h-5 mb-0.5" /> : <Menu className="w-5 h-5 mb-0.5" />}
          <span className="font-mono text-[10px] tracking-tight">
            {isOpen ? "Close" : "Menu"}
          </span>
        </button>
      </nav>
    </>
  );
}
