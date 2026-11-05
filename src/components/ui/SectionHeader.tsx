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
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-none font-mono text-xs font-semibold uppercase tracking-wider",
              badgeVariant === "primary" && "bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30",
              badgeVariant === "cyan" && "bg-[#FAF8F5] text-[#1A1D20] border border-[#C09F80]/60",
              badgeVariant === "glass" && "bg-[#FAF8F5]/10 text-[#F5F2ED] border border-[#C09F80]/40",
              badgeVariant === "success" && "bg-[#FAF8F5] text-[#565656] border border-[#C09F80]/60"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-none bg-current shrink-0" aria-hidden="true" />
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.12]",
          isDark ? "text-[#F5F2ED]" : "text-[#1A1D20]"
        )}
      >
        {title}
      </h2>

      {descContent && (
        <p
          className={cn(
            "font-sans text-base sm:text-lg leading-relaxed",
            isDark ? "text-[#D7CEC7]" : "text-[#565656]"
          )}
        >
          {descContent}
        </p>
      )}
    </div>
  );
}
