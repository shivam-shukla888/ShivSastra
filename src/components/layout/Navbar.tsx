"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  Layers,
  Inbox,
  Cpu,
  CreditCard,
  FolderGit2,
  ShoppingBag,
  FlaskConical,
  Compass,
  Send,
  FileText,
  ShieldCheck,
  Search,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

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
  { label: "JIOSI Inbox", href: "/products/inbox", icon: Inbox, badge: "Live" },
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
        badge: "Live",
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
        label: "About JIOSI",
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
      {
        label: "Admin Console",
        href: "/admin",
        icon: ShieldCheck,
        description: "System management portal",
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  // Open drawer with search focus
  const handleOpenSearch = () => {
    setIsOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 150);
  };

  // Trigger floating AI assistant
  const handleOpenAssistant = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-ai-assistant"));
    }
  };

  // Filter mobile menu items by search query
  const filteredCategories = useMemo(() => {
    if (!mobileSearchQuery.trim()) {
      return MOBILE_CATEGORIES;
    }
    const q = mobileSearchQuery.toLowerCase().trim();
    return MOBILE_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [mobileSearchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      setIsOpen(false);
      router.push(`/store?search=${encodeURIComponent(mobileSearchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#0B1020]/95 backdrop-blur-md border-b border-white/10 transition-colors">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Anchor */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white hover:text-indigo-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg py-1 shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30 shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="tracking-[0.04em] font-extrabold text-white">JIOSI</span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/15">
              Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-sm font-sans" aria-label="Desktop primary navigation">
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
                    "px-3 py-1.5 rounded-lg font-medium text-xs xl:text-sm transition-all duration-150 flex items-center gap-1.5",
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-cyan-300 border border-indigo-400/30">
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-150 shadow-sm"
            >
              <span>Launch Inbox</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>

            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-lg text-white",
                "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400",
                "shadow-sm shadow-indigo-500/20 border border-indigo-400/30 transition-all duration-150"
              )}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Right Action Bar: Search + Store + AI + Menu */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={handleOpenSearch}
              aria-label="Search catalog and case studies"
              className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Store Button */}
            <Link
              href="/store"
              aria-label="Browse digital store releases"
              className={cn(
                "w-11 h-11 flex items-center justify-center rounded-lg transition-colors relative",
                pathname.startsWith("/store")
                  ? "text-cyan-400 bg-white/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="sr-only">Store</span>
            </Link>

            {/* Quick AI Assistant Trigger */}
            <button
              type="button"
              onClick={handleOpenAssistant}
              aria-label="Ask ShivSastra AI Assistant"
              className="w-11 h-11 flex items-center justify-center rounded-lg text-cyan-300 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 text-slate-200 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0B1020]/98 backdrop-blur-2xl border-t border-white/10 z-50 flex flex-col justify-between overflow-y-auto"
          >
            <div className="p-5 sm:p-6 space-y-6 max-w-xl mx-auto w-full">
              {/* Search Field inside Drawer */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={mobileSearchQuery}
                  onChange={(e) => setMobileSearchQuery(e.target.value)}
                  placeholder="Search products, services, case studies..."
                  aria-label="Search within navigation"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors min-h-[44px]"
                />
                {mobileSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setMobileSearchQuery("")}
                    aria-label="Clear search"
                    className="w-10 h-10 flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>

              {/* Categorized Nav Lists with Verified Lucide Icons */}
              <div className="space-y-6">
                {filteredCategories.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold px-2 block">
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
                              "px-3.5 py-3 rounded-xl transition-all duration-150 flex items-center justify-between min-h-[48px] group",
                              isActive
                                ? "bg-indigo-600/20 text-white border border-indigo-500/30"
                                : "text-slate-200 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={cn(
                                  "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors",
                                  isActive
                                    ? "bg-indigo-600 text-white border-indigo-400/40"
                                    : "bg-white/5 text-slate-300 border-white/10 group-hover:text-white group-hover:bg-white/10"
                                )}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <div className="flex items-center gap-2">
                                  <span className="font-sans text-sm font-semibold text-white">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <p className="font-sans text-xs text-slate-400 line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <ChevronRight
                              className={cn(
                                "w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5",
                                isActive ? "text-cyan-300" : "text-slate-500"
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
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="https://inbox.jiosi.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all min-h-[48px]"
                >
                  <Inbox className="w-4 h-4 text-cyan-400" />
                  <span>Launch JIOSI Inbox Platform</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md shadow-indigo-600/25 min-h-[48px]"
                >
                  <span>Discuss an Engineering System</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="pt-6 pb-8 text-center space-y-1">
                <p className="font-mono text-xs text-slate-400">
                  JIOSI · Intelligent Software & Agentic AI
                </p>
                <p className="font-mono text-[11px] text-slate-500">
                  Bareilly, UP, India · 100% Data Sovereignty
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =======================================================
          MOBILE BOTTOM APPLICATION BAR (sm:hidden, fixed bottom)
          Provides authentic mobile application UX with quick icon navigation
          ======================================================= */}
      <nav
        aria-label="Mobile quick navigation bar"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1020]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 flex items-center justify-around shadow-2xl"
        style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
      >
        {/* Tab 1: Home */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-lg transition-colors",
            pathname === "/" && !isOpen
              ? "text-cyan-300 font-semibold"
              : "text-slate-400 hover:text-white"
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
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-lg transition-colors",
            (pathname === "/products" || pathname.startsWith("/products/")) && !isOpen
              ? "text-cyan-300 font-semibold"
              : "text-slate-400 hover:text-white"
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
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-lg transition-colors",
            pathname.startsWith("/store") && !isOpen
              ? "text-cyan-300 font-semibold"
              : "text-slate-400 hover:text-white"
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
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-lg transition-colors",
            pathname.startsWith("/services") && !isOpen
              ? "text-cyan-300 font-semibold"
              : "text-slate-400 hover:text-white"
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
            "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-lg transition-colors",
            isOpen ? "text-cyan-300 font-semibold" : "text-slate-400 hover:text-white"
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
