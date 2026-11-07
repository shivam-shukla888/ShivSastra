import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glass" | "dark" | "bordered" | "standard" | "featured";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hoverEffect = true, className, children, ...props }, ref) => {
    const base = "rounded-none transition-all duration-200 ease-out";

    const variantClasses: Record<string, string> = {
      default: "bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[3px_3px_0px_0px_#D7CEC7]",
      standard: "bg-[#FAF8F5] border border-[#C09F80]/60 shadow-[3px_3px_0px_0px_#D7CEC7]",
      elevated: "bg-[#FAF8F5] border border-[#C09F80] shadow-[4px_4px_0px_0px_#C09F80]",
      featured: "bg-[#FAF8F5] border border-[#C09F80] border-t-2 border-t-[#76323F] shadow-[4px_4px_0px_0px_#D7CEC7]",
      glass: "bg-[#FAF8F5]/95 backdrop-blur-md border border-[#C09F80] shadow-[3px_3px_0px_0px_#D7CEC7]",
      dark: "bg-[#1A1D20] border border-[#565656]/50 text-[#F5F2ED] shadow-[3px_3px_0px_0px_#1A1D20]",
      bordered: "bg-transparent border border-[#C09F80]",
    };

    const hoverClasses = hoverEffect
      ? variant === "dark"
        ? "hover:border-[#C09F80]"
        : "hover:border-[#76323F] hover:shadow-[4px_4px_0px_0px_#C09F80]"
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
