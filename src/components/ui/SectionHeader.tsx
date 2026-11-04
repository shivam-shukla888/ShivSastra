import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "primary" | "cyan" | "glass" | "success";
  title: React.ReactNode;
  description?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "primary",
  title,
  description,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";
  const descContent = description || subtitle;

  return (
    <div
      className={cn(
        "space-y-3.5 max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider",
              badgeVariant === "primary" && "bg-indigo-50 text-indigo-700 border border-indigo-200/80",
              badgeVariant === "cyan" && "bg-cyan-50 text-cyan-700 border border-cyan-200/80",
              badgeVariant === "glass" && "bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md",
              badgeVariant === "success" && "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {descContent && (
        <p
          className={cn(
            "font-sans text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {descContent}
        </p>
      )}
    </div>
  );
}
