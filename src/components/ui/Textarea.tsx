import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <textarea
          ref={ref}
          className={cn(
            "w-full rounded-none bg-[#FAF8F5] border border-[#C09F80] px-3.5 py-2.5 text-sm text-[#1A1D20] placeholder:text-[#565656]/70 transition-all duration-150 resize-y",
            "focus:outline-none focus:border-[#76323F] focus:ring-1 focus:ring-[#76323F]",
            "disabled:bg-[#F5F2ED] disabled:text-[#565656] disabled:cursor-not-allowed",
            error && "border-[#76323F] focus:border-[#76323F] focus:ring-[#76323F]",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-rose-600 font-sans">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
