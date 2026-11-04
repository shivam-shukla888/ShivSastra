import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full rounded-lg bg-white border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150",
              "focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/15",
              "disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed",
              icon ? "pl-10" : "",
              error && "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-rose-600 font-sans">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
