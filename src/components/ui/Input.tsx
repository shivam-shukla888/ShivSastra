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
              "w-full rounded-none bg-[#FAF8F5] border border-[#C09F80] px-3.5 py-2.5 text-sm text-[#1A1D20] placeholder:text-[#565656]/70 transition-all duration-150",
              "focus:outline-none focus:border-[#76323F] focus:ring-1 focus:ring-[#76323F]",
              "disabled:bg-[#F5F2ED] disabled:text-[#565656] disabled:cursor-not-allowed",
              icon ? "pl-10" : "",
              error && "border-[#76323F] focus:border-[#76323F] focus:ring-[#76323F]",
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
