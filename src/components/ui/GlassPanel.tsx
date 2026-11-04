import React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light";
  glow?: boolean;
}

export function GlassPanel({
  variant = "dark",
  glow = false,
  className,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        variant === "dark"
          ? "bg-[#111A2E]/70 backdrop-blur-xl border border-white/10 text-white"
          : "bg-white/80 backdrop-blur-xl border border-slate-200/80 text-slate-900 shadow-sm",
        glow && "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:from-indigo-500/20 before:to-violet-500/20 before:blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
