import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "dark" | "dark-inverse" | "glass" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export interface ButtonStylesProps {
  variant?: "primary" | "secondary" | "accent" | "dark" | "dark-inverse" | "glass" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStylesProps = {}) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-150 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F] focus-visible:ring-offset-1 active:scale-[0.99] motion-reduce:active:scale-100 rounded-none gap-2";

  const variantStyles = {
    primary:
      "bg-[#76323F] hover:bg-[#1A1D20] text-[#F5F2ED] border border-[#76323F] hover:border-[#C09F80] font-mono text-xs uppercase tracking-wider font-semibold shadow-none",
    secondary:
      "bg-[#FAF8F5] text-[#1A1D20] border border-[#C09F80] hover:bg-[#F5F2ED] hover:border-[#76323F] shadow-none",
    accent:
      "bg-[#76323F] hover:bg-[#5A1C29] text-[#F5F2ED] border border-[#76323F] font-mono text-xs uppercase tracking-wider shadow-none",
    dark:
      "bg-[#1A1D20] text-[#F5F2ED] hover:bg-[#252A35] border border-[#565656]/60 shadow-none",
    "dark-inverse":
      "bg-[#F5F2ED] text-[#1A1D20] hover:bg-[#FAF8F5] border border-[#C09F80] shadow-none",
    glass:
      "bg-[#1A1D20]/90 backdrop-blur-md text-[#F5F2ED] hover:bg-[#1A1D20] border border-[#C09F80]/40 shadow-none",
    ghost:
      "bg-transparent text-[#565656] hover:text-[#1A1D20] hover:bg-[#FAF8F5] border border-transparent",
    outline:
      "bg-transparent text-[#1A1D20] border border-[#C09F80] hover:bg-[#FAF8F5] hover:border-[#76323F]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs h-8",
    md: "px-5 py-2.5 text-xs sm:text-sm h-10",
    lg: "px-7 py-3.5 text-sm sm:text-base h-12 font-semibold",
  };

  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
