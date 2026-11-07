"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { SafeMarkdown } from "./SafeMarkdown";
import { X } from "@phosphor-icons/react";
import { HamsterMascot } from "./HamsterMascot";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "What systems & technologies does Shivam build?",
  "How is JIOSI Inbox architected?",
  "Tell me about Yojna Setu's multi-agent design.",
  "How does QuickEats ensure backend security?",
  "How can I get in touch with Shivam?",
];

export function ShivSastraAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "error" | "rate_limited"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messageIdCounter = useRef(0);

  // Scoped internal scroll: strictly scroll messagesContainerRef, NEVER hijacking window or document scroll
  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, status, isOpen, scrollToBottom]);

  // Global shortcut listener: Ctrl+K (Windows/Linux) or Cmd+K (macOS) to toggle assistant
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        const activeEl = document.activeElement;
        const isInput =
          activeEl &&
          (activeEl.tagName === "INPUT" ||
            activeEl.tagName === "TEXTAREA" ||
            (activeEl as HTMLElement).isContentEditable);

        // Allow toggling if outside inputs, or if focus is inside the assistant itself
        if (isInput && !dialogRef.current?.contains(activeEl)) {
          return;
        }

        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Listen for open-ai-assistant custom event (from mobile header Sparkles icon or drawer)
  useEffect(() => {
    const handleOpenAi = () => setIsOpen(true);
    window.addEventListener("open-ai-assistant", handleOpenAi);
    return () => window.removeEventListener("open-ai-assistant", handleOpenAi);
  }, []);

  const wasOpenRef = useRef(false);

  // Focus management and Escape key handling
  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      const timer = setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
          return;
        }

        if (e.key === "Tab" && dialogRef.current) {
          const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else if (wasOpenRef.current) {
      // Return focus to trigger button when closed
      triggerButtonRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend ?? inputValue).trim();
    if (!text || status === "sending") return;

    messageIdCounter.current += 1;
    const userMessage: Message = {
      id: `user-${messageIdCounter.current}`,
      role: "user",
      content: text,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setStatus("sending");
    setErrorMessage(null);

    // Prepare client-side conversation history (max 12 turns)
    const historyPayload = messages.slice(-12).map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          conversation: historyPayload,
        }),
      });

      if (res.status === 429) {
        setStatus("rate_limited");
        setErrorMessage(
          "Transmission limit reached. Please wait a few moments before sending another message."
        );
        return;
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          errorData.error ||
            "Unable to retrieve response from ShivSastra AI. Please try again."
        );
        return;
      }

      const data = await res.json();
      messageIdCounter.current += 1;
      const assistantMessage: Message = {
        id: `assistant-${messageIdCounter.current}`,
        role: "assistant",
        content: data.answer || "I don't have that information published on ShivSastra yet.",
      };

      setMessages([...newMessages, assistantMessage]);
      setStatus("idle");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection interrupted. Please verify your connection and try again."
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setStatus("idle");
    setErrorMessage(null);
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <>
      {/* 
        Single Viewport Anchor Container:
        - Deterministically positioned at bottom-right
        - On mobile: bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] right-4, guaranteeing clearance over the 56px bottom navigation bar
        - On desktop: bottom-6 right-6
        - pointer-events-none ensures user can interact with page content behind transparent bounds
      */}
      <div
        className="fixed z-50 pointer-events-none select-none flex flex-col items-end bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] right-4 lg:bottom-6 lg:right-6"
        aria-live="polite"
      >
        {/* Architectural Chat Panel (rendered cleanly directly above the launcher) */}
        {isOpen && (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="shivsastra-ai-title"
            id="shivsastra-ai-dialog"
            className={cn(
              "pointer-events-auto flex flex-col mb-3",
              "w-[calc(100vw-2rem)] sm:w-[420px] max-w-[440px]",
              "h-[520px] max-h-[calc(100dvh-9rem)] sm:max-h-[min(560px,calc(100dvh-6rem))]",
              "bg-[#FAF8F5]/96 backdrop-blur-xl border border-[#C09F80]",
              "shadow-[6px_6px_0px_0px_#C09F80,0_16px_40px_rgba(26,29,32,0.14)]"
            )}
          >
            {/* Panel Header */}
            <header className="px-4 py-3 border-b border-[#C09F80]/50 bg-[#F5F2ED]/90 backdrop-blur-md flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <HamsterMascot size={28} />
                <div>
                  <h2
                    id="shivsastra-ai-title"
                    className="font-display text-sm sm:text-base text-[#1A1D20] font-semibold tracking-tight"
                  >
                    Ask ShivSastra
                  </h2>
                  <p className="font-mono text-[9px] sm:text-[10px] text-[#76323F] uppercase tracking-wider font-medium">
                    Portfolio &amp; Systems Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={clearChat}
                    className="text-[10px] font-mono text-[#565656] hover:text-[#1A1D20] px-2 py-1 border border-transparent hover:border-[#C09F80]/60 transition-colors"
                    title="Clear conversation"
                  >
                    Reset
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Assistant"
                  className="w-7 h-7 flex items-center justify-center border border-[#C09F80]/60 text-[#565656] hover:border-[#1A1D20] hover:text-[#1A1D20] bg-[#FAF8F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </header>

            {/* Panel Messages Area (Scoped internal scroll) */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 overscroll-contain"
            >
              {/* Initial State */}
              {messages.length === 0 && (
                <div className="py-2 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#76323F] font-semibold block">
                      Ask a Question
                    </span>
                    <p className="font-display text-sm italic text-[#1A1D20]">
                      Ask about Shivam&apos;s architecture, systems engineering, or background.
                    </p>
                    <p className="text-xs text-[#565656] leading-relaxed pt-1">
                      Grounded in verified SHIVSASTRA systems and engineering work.
                    </p>
                  </div>

                  <div className="pt-2 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#565656] block">
                      Suggested Inquiries
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {SUGGESTED_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => handleSendMessage(prompt)}
                          className="text-left px-3 py-2 text-xs font-sans bg-[#F5F2ED] hover:bg-[#FAF8F5] text-[#1A1D20] border border-[#C09F80]/40 hover:border-[#76323F] transition-colors duration-150 flex items-center justify-between group"
                        >
                          <span className="line-clamp-2">{prompt}</span>
                          <span className="text-[11px] font-mono text-[#76323F] opacity-70 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                            →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Conversation Flow */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "space-y-1",
                    msg.role === "user" ? "ml-6" : "mr-2"
                  )}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#565656] uppercase tracking-wider">
                    {msg.role === "user" ? (
                      <span className="ml-auto">Visitor</span>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 bg-[#76323F] inline-block" />
                        <span>Assistant</span>
                      </>
                    )}
                  </div>

                  <div
                    className={cn(
                      "p-3 border",
                      msg.role === "user"
                        ? "bg-[#F5F2ED] border-[#C09F80]/60 text-[#1A1D20]"
                        : "bg-[#FFFFFF] border-[#C09F80]/60"
                    )}
                  >
                    {msg.role === "user" ? (
                      <p className="text-xs font-sans whitespace-pre-wrap leading-relaxed">
                        {msg.content}
                      </p>
                    ) : (
                      <SafeMarkdown content={msg.content} />
                    )}
                  </div>
                </div>
              ))}

              {/* Sending State Indicator */}
              {status === "sending" && (
                <div className="space-y-1 mr-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#76323F] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#76323F] inline-block animate-pulse" />
                    <span>Thinking...</span>
                  </div>
                  <div className="p-3 bg-[#FFFFFF] border border-[#C09F80]/60">
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-1.5 h-1.5 bg-[#565656]/50 animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-[#565656]/50 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-[#565656]/50 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Error & Rate Limit Alerts */}
              {errorMessage && (
                <div
                  role="alert"
                  className="p-3 bg-[#F5F2ED] border border-[#76323F] text-xs text-[#1A1D20] space-y-1"
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#76323F] font-semibold">
                    {status === "rate_limited" ? "Rate Limited" : "Notice"}
                  </div>
                  <p>{errorMessage}</p>
                </div>
              )}
            </div>

            {/* Panel Input Area */}
            <footer className="p-3 border-t border-[#C09F80]/50 bg-[#F5F2ED]/90 backdrop-blur-md shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="space-y-2"
              >
                <div className="relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question about my work..."
                    maxLength={2000}
                    rows={2}
                    disabled={status === "sending"}
                    aria-label="Your question for ShivSastra AI"
                    className={cn(
                      "w-full p-2.5 text-xs font-sans resize-none",
                      "bg-[#FFFFFF] border border-[#C09F80]/60",
                      "text-[#1A1D20] placeholder:text-[#565656]/70",
                      "focus:border-[#76323F] focus-visible:outline-none",
                      "disabled:opacity-50"
                    )}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#565656]">
                  <span className="text-[10px] text-[#565656]">Grounded in verified portfolio data</span>
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || status === "sending"}
                    className={cn(
                      "px-3 py-1.5 border border-[#C09F80]/60 font-mono text-[10px] uppercase tracking-wider",
                      "transition-colors duration-150 font-semibold",
                      inputValue.trim() && status !== "sending"
                        ? "bg-[#76323F] text-[#FAF8F5] border-[#76323F] hover:bg-[#5A1C29] cursor-pointer"
                        : "opacity-40 cursor-not-allowed bg-[#FAF8F5] text-[#565656]"
                    )}
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </footer>
          </div>
        )}

        {/* 
          Launcher Trigger Button:
          - Always visible and consistently anchored at viewport bottom-right
          - Unified across desktop and mobile
          - Clean, minimal, premium without keyboard badge clutter
          - Does not cause layout shifts
        */}
        <div className="pointer-events-auto">
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="shivsastra-ai-dialog"
            aria-label={isOpen ? "Close Ask ShivSastra Assistant" : "Ask ShivSastra"}
            className={cn(
              "group relative flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-none",
              "bg-[#1A1D20] text-[#F5F2ED] border border-[#C09F80]/70",
              "hover:border-[#76323F] hover:bg-[#25282B] transition-all duration-150",
              "shadow-[3px_3px_0px_0px_#C09F80,0_8px_24px_rgba(26,29,32,0.12)] cursor-pointer select-none",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#76323F]"
            )}
          >
            <HamsterMascot size={20} />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
              {isOpen ? "Close Assistant" : "Ask ShivSastra"}
            </span>
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-none transition-colors",
                isOpen ? "bg-[#C09F80]" : "bg-[#76323F]"
              )}
            />
          </button>
        </div>
      </div>
    </>
  );
}
