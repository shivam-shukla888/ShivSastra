import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "cyan" | "warning" | "neutral" | "glass";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  variant = "primary",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-medium rounded-none select-none";

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  const variantClasses = {
    primary: "bg-[#76323F]/10 text-[#76323F] border border-[#76323F]/30",
    success: "bg-[#2E6B4D]/10 text-[#2E6B4D] border border-[#2E6B4D]/30",
    cyan: "bg-[#C09F80]/15 text-[#1A1D20] border border-[#C09F80]/40",
    warning: "bg-[#9E6B24]/10 text-[#9E6B24] border border-[#9E6B24]/30",
    neutral: "bg-[#FAF8F5] text-[#565656] border border-[#C09F80]/60",
    glass: "bg-[#1A1D20] text-[#F5F2ED] border border-[#565656]/50",
  };

  const dotColors = {
    primary: "bg-[#76323F]",
    success: "bg-[#2E6B4D]",
    cyan: "bg-[#C09F80]",
    warning: "bg-[#9E6B24]",
    neutral: "bg-[#565656]",
    glass: "bg-[#C09F80]",
  };

  return (
    <span
      className={cn(base, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-none shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
