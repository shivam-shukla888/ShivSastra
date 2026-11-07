"use client";

import React from "react";

interface HamsterMascotProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

/**
 * Adorable, distinctive Hamster Cartoon Mascot for "Ask ShivSastra".
 * Designed in Warm Editorial Luxury tones: Caramel Tan (#C09F80 / #BF8A5E),
 * Warm Cream (#FAF8F5), Soft Dark Charcoal (#1A1D20), and subtle blush (#F4ACB7).
 */
export function HamsterMascot({
  className = "",
  size = 24,
  animated = true,
}: HamsterMascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 inline-block align-middle ${animated ? "hamster-mascot-svg" : ""} ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Soft shadow under paws */}
        <radialGradient id="hamsterPawsShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#565656" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#565656" stopOpacity="0" />
        </radialGradient>
      </defs>

      <style>{`
        @keyframes hamster-ear-twitch {
          0%, 90%, 100% { transform: rotate(0deg); }
          93% { transform: rotate(-4deg); }
          96% { transform: rotate(3deg); }
        }
        @keyframes hamster-breath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02) translateY(-0.5px); }
        }
        .hamster-mascot-svg {
          transform-origin: center bottom;
        }
        @media (prefers-reduced-motion: no-preference) {
          .hamster-mascot-svg:hover {
            animation: hamster-breath 2s ease-in-out infinite;
          }
          .hamster-mascot-svg:hover .hamster-left-ear {
            animation: hamster-ear-twitch 3s ease-in-out infinite;
            transform-origin: 18px 20px;
          }
          .hamster-mascot-svg:hover .hamster-right-ear {
            animation: hamster-ear-twitch 3s ease-in-out infinite 0.15s;
            transform-origin: 46px 20px;
          }
        }
      `}</style>

      {/* Ground subtle glow */}
      <ellipse cx="32" cy="59" rx="20" ry="3" fill="url(#hamsterPawsShadow)" />

      {/* Left Ear */}
      <g className="hamster-left-ear">
        <circle cx="18" cy="18" r="8" fill="#BF8A5E" />
        <circle cx="18" cy="18" r="5" fill="#F4ACB7" opacity="0.9" />
      </g>

      {/* Right Ear */}
      <g className="hamster-right-ear">
        <circle cx="46" cy="18" r="8" fill="#BF8A5E" />
        <circle cx="46" cy="18" r="5" fill="#F4ACB7" opacity="0.9" />
      </g>

      {/* Main Body & Head Shape (Chubby, warm, rounded) */}
      <path
        d="M20 28 C20 18, 44 18, 44 28 C48 30, 52 35, 52 44 C52 53, 44 57, 32 57 C20 57, 12 53, 12 44 C12 35, 16 30, 20 28 Z"
        fill="#C09F80"
      />

      {/* Fluffy Cream Cheeks & Tummy */}
      <path
        d="M24 35 C28 33, 36 33, 40 35 C47 38, 48 48, 44 53 C38 56, 26 56, 20 53 C16 48, 17 38, 24 35 Z"
        fill="#FAF8F5"
      />

      {/* Cheerful Soft Blush Marks */}
      <ellipse cx="19" cy="42" rx="3.5" ry="2.2" fill="#F4ACB7" opacity="0.65" />
      <ellipse cx="45" cy="42" rx="3.5" ry="2.2" fill="#F4ACB7" opacity="0.65" />

      {/* Left Eye (Expressive, shiny dark charcoal) */}
      <circle cx="25" cy="34" r="3.2" fill="#1A1D20" />
      <circle cx="24" cy="33" r="1.1" fill="#FFFFFF" />
      <circle cx="26.2" cy="35.2" r="0.5" fill="#FFFFFF" />

      {/* Right Eye (Expressive, shiny dark charcoal) */}
      <circle cx="39" cy="34" r="3.2" fill="#1A1D20" />
      <circle cx="38" cy="33" r="1.1" fill="#FFFFFF" />
      <circle cx="40.2" cy="35.2" r="0.5" fill="#FFFFFF" />

      {/* Cute Button Nose */}
      <path
        d="M30.8 38 C31.4 37.3, 32.6 37.3, 33.2 38 L32 39.4 Z"
        fill="#76323F"
      />

      {/* Adorable Hamster Mouth ('w' shape) */}
      <path
        d="M30 40.5 Q32 42.5 32 40.5 Q32 42.5 34 40.5"
        stroke="#6F4E37"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Tiny Hamster Paws held cutely together */}
      <circle cx="28" cy="47" r="2.4" fill="#FAF8F5" stroke="#C09F80" strokeWidth="0.8" />
      <circle cx="36" cy="47" r="2.4" fill="#FAF8F5" stroke="#C09F80" strokeWidth="0.8" />

      {/* Tiny little feet at the bottom */}
      <ellipse cx="23" cy="56.5" rx="3" ry="1.6" fill="#BF8A5E" />
      <ellipse cx="41" cy="56.5" rx="3" ry="1.6" fill="#BF8A5E" />
    </svg>
  );
}

