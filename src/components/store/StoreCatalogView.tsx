"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type {
  ProductDisplayData,
  CategoryCounts,
  StoreCategory,
} from "@/lib/products";
import { buttonStyles } from "@/components/ui/Button";
import {
  MagnifyingGlass as Search,
  X,
  SlidersHorizontal,
  ArrowsDownUp as ArrowUpDown,
  Lock,
  Check,
  ShoppingBag,
  ArrowRight,
} from "@phosphor-icons/react";

interface StoreCatalogViewProps {
  initialProducts: ProductDisplayData[];
  categoryCounts: CategoryCounts;
  activeCategory?: StoreCategory | "all";
  showCategoryTabs?: boolean;
}

const CATEGORY_LABELS: Record<StoreCategory, string> = {
  agent_templates: "AI Agent Templates",
  agent_kits: "Complete Agent Kits",
  prompt_packs: "Prompt + System Instruction Packs",
  design: "Design & Templates",
  ai_agents: "AI Agents",
  digital_products: "Digital Products",
};

const CATEGORY_HREFS: Record<StoreCategory, string> = {
  agent_templates: "/store/agent-templates",
  agent_kits: "/store/agent-kits",
  prompt_packs: "/store/prompt-packs",
  design: "/store/design",
  ai_agents: "/store/ai-agents",
  digital_products: "/store/digital-products",
};

export function StoreCatalogView({
  initialProducts,
  categoryCounts,
  activeCategory = "all",
  showCategoryTabs = true,
}: StoreCatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState<
    "newest" | "price_asc" | "price_desc" | "featured"
  >("newest");
  const [selectedCategory, setSelectedCategory] = useState<
    StoreCategory | "all"
  >(activeCategory);

  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

    // Filter by category if "all" is not selected
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const descMatch = p.description?.toLowerCase().includes(q) ?? false;
        const shortDescMatch =
          p.shortDescription?.toLowerCase().includes(q) ?? false;
        const codeMatch = p.releaseCode?.toLowerCase().includes(q) ?? false;
        return titleMatch || descMatch || shortDescMatch || codeMatch;
      });
    }

    // Sort list
    switch (selectedSort) {
      case "price_asc":
        list.sort((a, b) => (a.priceInCents ?? 0) - (b.priceInCents ?? 0));
        break;
      case "price_desc":
        list.sort((a, b) => (b.priceInCents ?? 0) - (a.priceInCents ?? 0));
        break;
      case "featured":
        list.sort((a, b) => {
          if (a.isFeatured === b.isFeatured) {
            return a.sortOrder - b.sortOrder;
          }
          return a.isFeatured ? -1 : 1;
        });
        break;
      case "newest":
      default:
        list.sort((a, b) => {
          if (a.sortOrder !== b.sortOrder) {
            return a.sortOrder - b.sortOrder;
          }
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        break;
    }

    return list;
  }, [initialProducts, selectedCategory, searchQuery, selectedSort]);

  return (
    <div className="space-y-8">
      {/* Controls Bar: Category Filter Pills + Search + Sort */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[var(--color-hairline)]">
        {showCategoryTabs && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 no-scrollbar flex-nowrap sm:flex-wrap" role="group" aria-label="Filter products by category">
            <button
              type="button"
              aria-pressed={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                selectedCategory === "all"
                  ? "border-[var(--color-ink-primary)] bg-[var(--color-ink-primary)] text-[var(--color-canvas-primary)] font-semibold"
                  : "border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] text-[var(--color-ink-secondary)] hover:border-[var(--color-ink-primary)]"
              }`}
            >
              <SlidersHorizontal className="w-3 h-3 inline-block mr-1.5 shrink-0" />
              <span>All ({categoryCounts.total})</span>
            </button>
            <button
              type="button"
              aria-pressed={selectedCategory === "agent_templates"}
              onClick={() => setSelectedCategory("agent_templates")}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                selectedCategory === "agent_templates"
                  ? "border-[var(--color-ink-primary)] bg-[var(--color-ink-primary)] text-[var(--color-canvas-primary)] font-semibold"
                  : "border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] text-[var(--color-ink-secondary)] hover:border-[var(--color-ink-primary)]"
              }`}
            >
              AI Agent Templates ({categoryCounts.agent_templates})
            </button>
            <button
              type="button"
              aria-pressed={selectedCategory === "agent_kits"}
              onClick={() => setSelectedCategory("agent_kits")}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                selectedCategory === "agent_kits"
                  ? "border-[var(--color-ink-primary)] bg-[var(--color-ink-primary)] text-[var(--color-canvas-primary)] font-semibold"
                  : "border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] text-[var(--color-ink-secondary)] hover:border-[var(--color-ink-primary)]"
              }`}
            >
              Complete Agent Kits ({categoryCounts.agent_kits})
            </button>
            <button
              type="button"
              aria-pressed={selectedCategory === "prompt_packs"}
              onClick={() => setSelectedCategory("prompt_packs")}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border ${
                selectedCategory === "prompt_packs"
                  ? "border-[var(--color-ink-primary)] bg-[var(--color-ink-primary)] text-[var(--color-canvas-primary)] font-semibold"
                  : "border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] text-[var(--color-ink-secondary)] hover:border-[var(--color-ink-primary)]"
              }`}
            >
              Prompt + System Instruction Packs ({categoryCounts.prompt_packs})
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Search Input with Verified Lucide Search Icon */}
          <div className="relative flex-1 sm:min-w-[240px]">
            <Search className="w-4 h-4 text-[var(--color-ink-secondary)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search agent packs, kits..."
              aria-label="Search products"
              className="w-full pl-10 pr-10 py-2.5 bg-[var(--color-canvas-primary)] border border-[var(--color-hairline)] rounded-none font-mono text-xs text-[var(--color-ink-primary)] focus:outline-none focus:border-[var(--color-accent)] focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] placeholder:text-[var(--color-ink-secondary)]/50 min-h-[44px]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="w-10 h-10 flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink-primary)]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector with Verified Lucide Sort Icon */}
          <div className="relative sm:min-w-[190px]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[var(--color-ink-secondary)] pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedSort}
              onChange={(e) =>
                setSelectedSort(
                  e.target.value as "newest" | "price_asc" | "price_desc" | "featured"
                )
              }
              aria-label="Sort products"
              className="w-full pl-9 pr-8 py-2.5 bg-[var(--color-canvas-primary)] border border-[var(--color-hairline)] rounded-none font-mono text-xs text-[var(--color-ink-primary)] focus:outline-none focus:border-[var(--color-accent)] focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] min-h-[44px] appearance-none"
            >
              <option value="newest">Sort: Newest First</option>
              <option value="featured">Sort: Featured Items</option>
              {categoryCounts.purchasable > 0 && (
                <>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const categoryLabel =
              CATEGORY_LABELS[product.category] || "Agentic Tool";
            const categoryHref =
              CATEGORY_HREFS[product.category] || "/store";

            const productHref = `/store/${product.slug}`;
            const isCaseStudy =
              product.slug === "yojna-setu" ||
              product.formattedPrice === "Case Study";
            const isDiscontinued =
              !product.isAvailable || product.formattedPrice === "Discontinued";
            const isUpcoming =
              !isCaseStudy &&
              !isDiscontinued &&
              (!Number.isInteger(product.priceInCents) ||
                (product.priceInCents ?? 0) < 100 ||
                !product.currency?.trim());

            const actionHref = isCaseStudy
              ? "/projects/yojna-setu"
              : productHref;

            return (
              <article
                key={product.id}
                className="border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] p-6 md:p-8 flex flex-col justify-between hover:border-[var(--color-ink-primary)] hover:-translate-y-[2px] transition-[border-color,transform] duration-200 ease-out group motion-reduce:hover:translate-y-0"
              >
                <div className="space-y-4">
                  {/* Preview Image or Graphic Frame */}
                  {product.previewImageUrl ? (
                    <Link
                      href={actionHref}
                      className="w-full aspect-[16/10] border border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] overflow-hidden relative block"
                    >
                      <Image
                        src={product.previewImageUrl}
                        alt={product.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300 motion-reduce:group-hover:scale-100"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </Link>
                  ) : (
                    <div className="w-full aspect-[16/10] border border-[var(--color-hairline)] bg-[var(--color-canvas-primary)] p-4 flex flex-col justify-between relative">
                      <span className="font-mono text-[10px] text-[var(--color-ink-secondary)] uppercase tracking-wider">
                        {product.releaseCode || "EDITION"}
                      </span>
                      <span className="font-mono text-xs text-[var(--color-accent)] font-medium">
                        {categoryLabel}
                      </span>
                    </div>
                  )}

                  {/* Badges / Header Info */}
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-ink-secondary)]">
                    <Link
                      href={categoryHref}
                      className="hover:text-[var(--color-accent)] transition-colors uppercase tracking-wider text-[11px]"
                    >
                      {categoryLabel}
                    </Link>
                    {isCaseStudy ? (
                      <span className="font-mono text-xs text-[#565656] font-medium">
                        Open Case Study
                      </span>
                    ) : isDiscontinued ? (
                      <span className="font-mono text-xs text-[#9E2A2B] font-semibold uppercase tracking-wider">
                        Discontinued
                      </span>
                    ) : isUpcoming ? (
                      <span className="font-mono text-xs text-[#9E6B24] font-medium">
                        In Development
                      </span>
                    ) : (
                      <span className="text-[#76323F] font-semibold text-sm">
                        {product.formattedPrice}
                      </span>
                    )}
                  </div>

                  {/* Title & Classification Badge */}
                  <div className="space-y-1.5">
                    <div>
                      {isCaseStudy ? (
                        <span className="inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#C09F80]/50 bg-[#FAF8F5] text-[#565656]">
                          Architecture Case Study
                        </span>
                      ) : isDiscontinued ? (
                        <span className="inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#9E2A2B]/30 bg-[#9E2A2B]/10 text-[#9E2A2B] font-semibold">
                          Discontinued
                        </span>
                      ) : isUpcoming ? (
                        <span className="inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#9E6B24]/30 bg-[#9E6B24]/10 text-[#9E6B24]">
                          Upcoming Release
                        </span>
                      ) : (
                        <span className="inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[#2E6B4D]/30 bg-[#2E6B4D]/10 text-[#2E6B4D] font-medium">
                          Available for Download
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-2xl font-normal text-[var(--color-ink-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      <Link href={actionHref}>{product.title}</Link>
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-[var(--color-ink-secondary)] leading-relaxed">
                    {product.shortDescription ||
                      product.description ||
                      "Digital release by Shivam Shukla."}
                  </p>

                  {/* Required Digital Product Value Points */}
                  <div className="pt-2.5 pb-1 space-y-1 border-t border-[var(--color-hairline)] font-mono text-xs text-[var(--color-ink-primary)]">
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#76323F] shrink-0" />
                      <span className="font-medium">We prioritize security</span>
                    </div>
                  </div>

                  {/* Features snippets */}
                  {product.features && product.features.length > 0 && (
                    <ul className="pt-2 space-y-1 border-t border-[var(--color-hairline)]">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <li
                          key={idx}
                          className="font-sans text-xs text-[var(--color-ink-secondary)] flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-[var(--color-hairline)] mt-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] text-[var(--color-ink-secondary)] uppercase tracking-wider">
                    {isCaseStudy
                      ? "Engineering Monograph"
                      : isDiscontinued
                      ? "Discontinued"
                      : isUpcoming
                      ? "In Development"
                      : (product.productType || "digital_download").replace(/_/g, " ")}
                  </span>
                  <Link
                    href={actionHref}
                    className={buttonStyles({
                      variant: isCaseStudy || isDiscontinued ? "secondary" : "primary",
                      size: "sm",
                      className: "font-mono uppercase tracking-wider text-xs group/btn min-h-[44px] flex items-center gap-1.5",
                    })}
                  >
                    {!isCaseStudy && !isDiscontinued && !isUpcoming && (
                      <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                    )}
                    <span>
                      {isCaseStudy
                        ? "Read Case Study"
                        : isDiscontinued
                        ? "View Details"
                        : isUpcoming
                        ? "View Release Info"
                        : "Buy Now"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Refined Editorial Empty State */
        <div className="border border-[var(--color-hairline)] bg-[var(--color-canvas-secondary)] p-12 md:p-16 text-center space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-display text-2xl md:text-3xl text-[var(--color-ink-primary)]">
              {searchQuery || selectedCategory !== "all"
                ? "No matching products found."
                : "New agent packs are on the way."}
            </h3>
            <p className="font-sans text-sm text-[var(--color-ink-secondary)] leading-relaxed max-w-md mx-auto">
              {searchQuery || selectedCategory !== "all"
                ? "No products match your current search or filter. Try clearing filters to see everything."
                : "I'm adding new agent templates, kits, and prompt packs here regularly."}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {searchQuery || selectedCategory !== "all" ? (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className={buttonStyles({
                  variant: "secondary",
                  size: "md",
                  className: "font-mono text-xs uppercase tracking-wider",
                })}
              >
                Reset Filters
              </button>
            ) : null}

            <Link
              href="/contact"
              className={buttonStyles({
                variant: "primary",
                size: "md",
                className: "font-mono text-xs uppercase tracking-wider",
              })}
            >
              Ask About Custom Agent Work →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
