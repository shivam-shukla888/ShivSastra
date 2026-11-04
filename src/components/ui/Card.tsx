import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glass" | "dark" | "bordered" | "standard";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hoverEffect = true, className, children, ...props }, ref) => {
    const base = "rounded-xl transition-all duration-300";

    const variantClasses: Record<string, string> = {
      default: "bg-white border border-slate-200 shadow-sm",
      standard: "bg-white border border-slate-200 shadow-sm",
      elevated: "bg-white border border-slate-200 shadow-md shadow-slate-200/50",
      glass: "bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm",
      dark: "bg-[#111A2E]/90 backdrop-blur-md border border-white/10 text-white shadow-xl",
      bordered: "bg-transparent border border-slate-200",
    };

    const hoverClasses = hoverEffect
      ? variant === "dark"
        ? "hover:border-indigo-400/40 hover:-translate-y-1 hover:shadow-indigo-500/10 motion-reduce:hover:translate-y-0"
        : "hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 motion-reduce:hover:translate-y-0"
      : "";

    return (
      <div
        ref={ref}
        className={cn(base, variantClasses[variant] || variantClasses.default, hoverClasses, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
