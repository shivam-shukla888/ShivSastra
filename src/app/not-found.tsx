import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buttonStyles } from "@/components/ui/Button";
import {
  House,
  Stack,
  Sparkle,
  Tray,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "404 — Page Not Found | SHIVSASTRA",
  description: "The requested route does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center py-24 md:py-36 bg-[#F5F2ED] text-[#1A1D20]">
      <SectionContainer>
        <div className="max-w-2xl mx-auto space-y-8 text-center sm:text-left bg-[#FAF8F5] border border-[#C09F80]/60 p-8 sm:p-12 shadow-[4px_4px_0px_0px_#D7CEC7]">
          {/* Status Flag */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
              <span>404 STATUS</span>
            </div>
            <span className="font-mono text-xs text-[#565656]">
              ROUTE_NOT_LOCATED
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[#1A1D20] leading-tight">
              Page not found.
            </h1>
            <p className="font-sans text-base text-[#565656] leading-relaxed">
              The page you requested doesn&apos;t exist, has been moved, or has been relocated within the SHIVSASTRA digital platform.
            </p>
          </div>

          {/* Navigation Action Anchors */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className={buttonStyles({
                variant: "primary",
                size: "md",
              })}
            >
              <House className="w-4 h-4 mr-1.5" />
              <span>Back Home</span>
            </Link>

            <Link
              href="/products"
              className={buttonStyles({
                variant: "secondary",
                size: "md",
              })}
            >
              <Stack className="w-4 h-4 mr-1.5" />
              <span>Products &amp; Toolkits</span>
            </Link>

            <Link
              href="/services"
              className={buttonStyles({
                variant: "secondary",
                size: "md",
              })}
            >
              <Sparkle className="w-4 h-4 mr-1.5" />
              <span>Services</span>
            </Link>

            <a
              href="https://inbox.jiosi.online"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({
                variant: "outline",
                size: "md",
              })}
            >
              <Tray className="w-4 h-4 mr-1.5 text-[#76323F]" />
              <span>Launch JIOSI Inbox</span>
            </a>
          </div>

          {/* Colophon Note */}
          <div className="pt-8 border-t border-[#C09F80]/20 flex items-center justify-between text-xs font-mono text-[#565656]">
            <span>SHIVSASTRA Studio</span>
            <Link
              href="/contact"
              className="text-[#76323F] hover:text-[#1A1D20] font-semibold inline-flex items-center gap-1"
            >
              <span>Need help? Contact our studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
