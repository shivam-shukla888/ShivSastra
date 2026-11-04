import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { ArrowRight, Home, Layers, Sparkles, Inbox } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | JIOSI",
  description: "The requested route does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center py-24 md:py-36 bg-slate-50">
      <SectionContainer>
        <div className="max-w-2xl mx-auto space-y-8 text-center sm:text-left bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-900/5">
          {/* Status Flag */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Badge variant="cyan" dot size="sm">
              404 STATUS
            </Badge>
            <span className="font-mono text-xs text-slate-400">
              ROUTE_NOT_LOCATED
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Page not found.
            </h1>
            <p className="font-sans text-base text-slate-600 leading-relaxed">
              The page you requested doesn&apos;t exist, has been moved, or has been updated under the new JIOSI platform.
            </p>
          </div>

          {/* Navigation Action Anchors */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className={buttonStyles({
                variant: "primary",
                size: "md",
                className: "shadow-md shadow-indigo-500/15",
              })}
            >
              <Home className="w-4 h-4 mr-1.5" />
              <span>Back Home</span>
            </Link>

            <Link
              href="/products"
              className={buttonStyles({
                variant: "secondary",
                size: "md",
              })}
            >
              <Layers className="w-4 h-4 mr-1.5" />
              <span>Products &amp; Toolkits</span>
            </Link>

            <Link
              href="/services"
              className={buttonStyles({
                variant: "secondary",
                size: "md",
              })}
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
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
              <Inbox className="w-4 h-4 mr-1.5 text-indigo-500" />
              <span>Launch JIOSI Inbox</span>
            </a>
          </div>

          {/* Colophon Note */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>JIOSI Cloud Network</span>
            <Link
              href="/contact"
              className="text-indigo-600 hover:text-indigo-700 font-semibold inline-flex items-center gap-1"
            >
              <span>Need help? Contact support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
