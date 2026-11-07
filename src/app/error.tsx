"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button, buttonStyles } from "@/components/ui/Button";
import { ArrowsClockwise, House, EnvelopeSimple } from "@phosphor-icons/react";

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
    <div className="w-full min-h-[80vh] flex items-center py-24 md:py-36 bg-[#F5F2ED] text-[#1A1D20]">
      <SectionContainer>
        <div className="max-w-2xl mx-auto space-y-8 text-center sm:text-left bg-[#FAF8F5] border border-[#C09F80]/60 p-8 sm:p-12 shadow-[4px_4px_0px_0px_#D7CEC7]">
          {/* Status Flag */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
              <span>500 ERROR</span>
            </div>
            <span className="font-mono text-xs text-[#565656]">
              RUNTIME_FAULT_RECOVERABLE
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[#1A1D20] leading-tight">
              An unexpected error occurred.
            </h1>
            <p className="font-sans text-base text-[#565656] leading-relaxed">
              Our defensive error boundary caught a runtime fault. No customer data or sensitive records were compromised.
            </p>
          </div>

          {/* Action Controls */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => reset()}
            >
              <ArrowsClockwise className="w-4 h-4 mr-1.5" />
              <span>Retry Request</span>
            </Button>

            <Link
              href="/"
              className={buttonStyles({
                variant: "secondary",
                size: "md",
              })}
            >
              <House className="w-4 h-4 mr-1.5" />
              <span>Back Home</span>
            </Link>

            <Link
              href="/contact"
              className={buttonStyles({
                variant: "outline",
                size: "md",
              })}
            >
              <EnvelopeSimple className="w-4 h-4 mr-1.5" />
              <span>Report Issue</span>
            </Link>
          </div>

          {/* Reference Colophon */}
          <div className="pt-8 border-t border-[#C09F80]/20 flex items-center justify-between text-xs font-mono text-[#565656]">
            <span>
              Status: 500
              {error.digest ? ` • Ref: ${error.digest.slice(0, 8)}` : ""}
            </span>
            <span>SHIVSASTRA Platform Resilience</span>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
