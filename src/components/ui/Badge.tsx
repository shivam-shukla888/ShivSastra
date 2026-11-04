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
  const base = "inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-medium rounded-full select-none";

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  const variantClasses = {
    primary: "bg-indigo-50 text-indigo-700 border border-indigo-200/80",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    cyan: "bg-cyan-50 text-cyan-700 border border-cyan-200/80",
    warning: "bg-amber-50 text-amber-700 border border-amber-200/80",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/15",
  };

  const dotColors = {
    primary: "bg-indigo-600",
    success: "bg-emerald-500",
    cyan: "bg-cyan-500",
    warning: "bg-amber-500",
    neutral: "bg-slate-500",
    glass: "bg-cyan-400 animate-pulse",
  };

  return (
    <span
      className={cn(base, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
