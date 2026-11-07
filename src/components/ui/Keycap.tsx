"use client";

import React, { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export interface KeycapProps {
  keys?: string[];
  shortcut?: "mod+k" | "enter" | "shift+enter" | "esc";
  className?: string;
  size?: "xs" | "sm" | "md";
}

const emptySubscribe = () => () => {};

function getIsMacSnapshot(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform =
    nav.userAgentData?.platform || nav.platform || nav.userAgent || "";
  return /Mac|iPhone|iPad|iPod/i.test(platform);
}

function getIsMacServerSnapshot(): boolean {
  return false;
}

/**
 * Platform-aware Keycap component for SHIVSASTRA.
 * Adheres strictly to the Warm Editorial Luxury design system:
 * - Windows/Linux: Renders "Ctrl + K"
 * - macOS: Renders "⌘ + K"
 * - Zero broken Unicode characters or glyph misalignment
 * - Sharp geometry (zero border-radius), crisp border, and high-contrast typography
 */
export function Keycap({
  keys,
  shortcut,
  className,
  size = "sm",
}: KeycapProps) {
  const isMac = useSyncExternalStore(
    emptySubscribe,
    getIsMacSnapshot,
    getIsMacServerSnapshot
  );

  // Determine key tokens to display
  let displayKeys: string[] = keys || [];
  if (shortcut === "mod+k") {
    displayKeys = isMac ? ["⌘", "K"] : ["Ctrl", "K"];
  } else if (shortcut === "enter") {
    displayKeys = ["Enter"];
  } else if (shortcut === "shift+enter") {
    displayKeys = ["Shift", "Enter"];
  } else if (shortcut === "esc") {
    displayKeys = ["Esc"];
  }

  const sizeClasses = {
    xs: "text-[9px] px-1 py-0.5 min-h-[16px]",
    sm: "text-[10px] px-1.5 py-0.5 min-h-[18px]",
    md: "text-xs px-2 py-0.5 min-h-[22px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-mono font-medium select-none align-middle",
        className
      )}
    >
      {displayKeys.map((k, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <span className="text-[#C09F80] font-normal text-[10px]">+</span>
          )}
          <kbd
            className={cn(
              "inline-flex items-center justify-center font-mono leading-none tracking-wider",
              "bg-[#FAF8F5] text-[#1A1D20] border border-[#C09F80]/60",
              "shadow-[1px_1px_0px_0px_#D7CEC7]",
              sizeClasses[size]
            )}
          >
            {k}
          </kbd>
        </React.Fragment>
      ))}
    </span>
  );
}
