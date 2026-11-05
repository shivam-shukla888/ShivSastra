import React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light";
  glow?: boolean;
}

export function GlassPanel({
  variant = "light",
  className,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-none overflow-hidden transition-all duration-200",
        variant === "dark"
          ? "bg-[#1A1D20] border border-[#C09F80]/40 text-[#F5F2ED]"
          : "bg-[#FAF8F5] border border-[#C09F80]/60 text-[#1A1D20] shadow-[2px_2px_0px_0px_#D7CEC7]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
