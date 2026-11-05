"use client";

import React, { useActionState, useState, useRef, useEffect, useCallback } from "react";
import Script from "next/script";
import Link from "next/link";
import { submitContactInquiry } from "@/app/actions/contact";
import { initialContactState } from "@/lib/validations/contact";
import { CheckCircle2, Send, AlertCircle, RefreshCw, User, Mail, MessageSquare } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          action?: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          size?: "normal" | "compact" | "flexible";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface ContactFormProps {
  variant?: "dark" | "light";
  defaultSubject?: string;
  labels?: {
    name?: string;
    email?: string;
    brief?: string;
    submit?: string;
  };
  className?: string;
}

export function ContactForm({
  variant = "light",
  defaultSubject,
  labels = {
    name: "Your Name",
    email: "Email Address",
    brief: "Project Brief or System Requirements",
    submit: "Send Inquiry",
  },
  className,
}: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitContactInquiry,
    initialContactState
  );

  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const isDark = variant === "dark";

  // Explicit Turnstile Rendering
  const renderTurnstile = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      !siteKey
    ) {
      return;
    }

    if (widgetIdRef.current) {
      return;
    }

    try {
      const widgetId = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        action: "contact",
        theme: isDark ? "dark" : "light",
        callback: (token: string) => {
          setTurnstileToken(token);
        },
        "expired-callback": () => {
          setTurnstileToken("");
        },
        "error-callback": () => {
          setTurnstileToken("");
        },
      });
      widgetIdRef.current = widgetId;
    } catch {
      // Container may have already been rendered
    }
  }, [siteKey, isDark]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      renderTurnstile();
    }
  }, [renderTurnstile]);

  // Reset challenge on verification/submission errors
  useEffect(() => {
    if (
      state.status === "verification_error" ||
      state.status === "validation_error" ||
      state.status === "server_error"
    ) {
      if (
        typeof window !== "undefined" &&
        window.turnstile &&
        widgetIdRef.current
      ) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  }, [state.status]);

  // Cleanup widget on unmount
  useEffect(() => {
    return () => {
      if (
        typeof window !== "undefined" &&
        window.turnstile &&
        widgetIdRef.current
      ) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore unmount error
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  // Successful submission state
  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`p-8 md:p-10 rounded-2xl border ${
          isDark
            ? "border-emerald-500/30 bg-[#111A2E]/90 text-white"
            : "border-emerald-200 bg-emerald-50/60 text-slate-900"
        } space-y-4`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-bold block">
              Inquiry Dispatched
            </span>
            <p className="font-display text-2xl font-bold">
              {state.message || "Thank you for getting in touch. Your message has been received."}
            </p>
          </div>
        </div>

        <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          We&apos;ll review your requirements and respond within 24 hours with an architecture scope and timeline.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#76323F] hover:text-[#1A1D20] transition-colors cursor-pointer"
          >
            <span>Send Another Inquiry</span>
            <span>→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className={`space-y-6 ${className || ""}`}>
      {defaultSubject && (
        <input type="hidden" name="subject" value={defaultSubject} />
      )}
      {/* Global Status Banner */}
      {(state.status === "rate_limited" ||
        state.status === "server_error" ||
        state.status === "verification_error") && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl border border-rose-300 bg-rose-50 text-rose-800 text-sm space-y-1 flex items-start gap-2.5"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold uppercase tracking-wider text-xs block">[Notice]</span>
            <p>{state.message}</p>
          </div>
        </div>
      )}

      {/* Honeypot field */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="hp_website">Leave this field blank</label>
        <input
          type="text"
          id="hp_website"
          name="hp_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Two-Column Grid for Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1A1D20]"
          >
            <span className="inline-flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#76323F]" /><span>{labels.name}</span></span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            disabled={isPending}
            placeholder="Your Name"
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C09F80] text-[#1A1D20] placeholder-[#565656]/70 text-sm rounded-none focus:outline-none focus:border-[#76323F] focus:ring-1 focus:ring-[#76323F] disabled:opacity-50 transition-all"
          />
          {state.errors?.name && (
            <p id="name-error" role="alert" className="font-mono text-xs text-[#76323F] pt-1">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1A1D20]"
          >
            <span className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#76323F]" /><span>{labels.email}</span></span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            disabled={isPending}
            placeholder="your.email@company.com"
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C09F80] text-[#1A1D20] placeholder-[#565656]/70 text-sm rounded-none focus:outline-none focus:border-[#76323F] focus:ring-1 focus:ring-[#76323F] disabled:opacity-50 transition-all"
          />
          {state.errors?.email && (
            <p id="email-error" role="alert" className="font-mono text-xs text-[#76323F] pt-1">
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      {/* Inquiry Brief Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-brief"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1A1D20]"
        >
          <span className="inline-flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-[#76323F]" /><span>{labels.brief}</span></span>
        </label>
        <textarea
          id="contact-brief"
          name="brief"
          required
          rows={5}
          disabled={isPending}
          placeholder="Briefly describe your workflow automation needs, timeline, or product inquiry..."
          aria-invalid={!!state.errors?.brief}
          aria-describedby={state.errors?.brief ? "brief-error" : undefined}
          className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C09F80] text-[#1A1D20] placeholder-[#565656]/70 text-sm rounded-none focus:outline-none focus:border-[#76323F] focus:ring-1 focus:ring-[#76323F] disabled:opacity-50 resize-y transition-all"
        />
        {state.errors?.brief && (
          <p id="brief-error" role="alert" className="font-mono text-xs text-[#76323F] pt-1">
            {state.errors.brief[0]}
          </p>
        )}
      </div>

      {/* Cloudflare Turnstile CAPTCHA container */}
      <div className="space-y-1.5">
        {siteKey ? (
          <>
            <Script
              src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
              strategy="lazyOnload"
              onLoad={renderTurnstile}
            />
            <div
              ref={turnstileContainerRef}
              className="min-h-[65px] flex items-center"
              aria-label="Human verification widget"
            />
            <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />
            {state.errors?.turnstile && (
              <p role="alert" className="font-mono text-xs text-[#76323F] pt-1">
                {state.errors.turnstile[0]}
              </p>
            )}
          </>
        ) : (
          <p className="font-mono text-xs text-[#565656]">
            [Dev mode: Turnstile key not configured]
          </p>
        )}
      </div>

      {/* Submit Button & Privacy Statement */}
      <div className="pt-2 space-y-4">
        <button
          type="submit"
          disabled={isPending || (Boolean(siteKey) && !turnstileToken)}
          className="w-full sm:w-auto px-8 py-3.5 rounded-none font-mono text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] bg-[#76323F] hover:bg-[#5A1C29] border border-[#76323F] hover:border-[#C09F80] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center gap-2 shadow-none"
        >
          {isPending ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>{labels.submit}</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>

        <p className="text-xs font-sans text-[#565656] leading-relaxed">
          By submitting this form, you agree to our{" "}
          <Link href="/privacy" className="text-[#76323F] underline hover:text-[#1A1D20]">
            Privacy Policy
          </Link>
          . No customer data is shared with third parties or stored on intermediary servers.
        </p>
      </div>
    </form>
  );
}
