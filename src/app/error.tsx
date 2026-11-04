"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonStyles } from "@/components/ui/Button";
import { RefreshCw, Home, Mail } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Runtime exception captured:", error);
    }
  }, [error]);

  return (
    <div className="w-full min-h-[80vh] flex items-center py-24 md:py-36 bg-slate-50">
      <SectionContainer>
        <div className="max-w-2xl mx-auto space-y-8 text-center sm:text-left bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-900/5">
          {/* Status Flag */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Badge variant="warning" dot size="sm">
              500 ERROR
            </Badge>
            <span className="font-mono text-xs text-slate-400">
              RUNTIME_FAULT_RECOVERABLE
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              An unexpected error occurred.
            </h1>
            <p className="font-sans text-base text-slate-600 leading-relaxed">
              Our defensive error boundary caught a runtime fault. No customer data or sensitive records were compromised.
            </p>
          </div>

          {/* Action Controls */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => reset()}
              className="shadow-md shadow-indigo-500/15"
            >
              <RefreshCw className="w-4 h-4 mr-1.5" />
              <span>Retry Request</span>
            </Button>

            <Link
              href="/"
              className={buttonStyles({
                variant: "secondary",
                size: "md",
              })}
            >
              <Home className="w-4 h-4 mr-1.5" />
              <span>Back Home</span>
            </Link>

            <Link
              href="/contact"
              className={buttonStyles({
                variant: "outline",
                size: "md",
              })}
            >
              <Mail className="w-4 h-4 mr-1.5" />
              <span>Report Issue</span>
            </Link>
          </div>

          {/* Reference Colophon */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>
              Status: 500
              {error.digest ? ` • Ref: ${error.digest.slice(0, 8)}` : ""}
            </span>
            <span className="text-slate-400">JIOSI Platform Resilience</span>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
