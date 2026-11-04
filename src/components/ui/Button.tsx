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
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:active:scale-100 rounded-lg gap-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-sm shadow-indigo-500/25 border border-indigo-500/30",
    secondary:
      "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-sm",
    accent:
      "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-sm shadow-violet-500/25 border border-violet-500/30",
    dark:
      "bg-[#0B1020] text-white hover:bg-[#111A2E] border border-white/10 shadow-sm",
    "dark-inverse":
      "bg-white text-slate-950 hover:bg-slate-100 border border-transparent shadow-sm",
    glass:
      "bg-white/10 backdrop-blur-md text-white hover:bg-white/15 border border-white/15 shadow-sm",
    ghost:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent",
    outline:
      "bg-transparent text-indigo-600 border border-indigo-200 hover:bg-indigo-50/60 hover:border-indigo-300",
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
