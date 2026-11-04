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
            "w-full rounded-lg bg-white border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-150 resize-y",
            "focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/15",
            "disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed",
            error && "border-rose-400 focus:border-rose-500 focus:ring-rose-500/15",
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
