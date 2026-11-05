# SHIVSASTRA // TESTING BASELINE & VERIFICATION PROTOCOL (PHASE 0)
*Audit of Automated Test Suites, Assertions & Verification Protocols*

---

## 1. Automated Test Script Inventory

The repository maintains 25+ specialized TypeScript verification scripts located in `scripts/`:

| Test Suite Script | Scope & Assertions |
|:---|:---|
| `scripts/test-ai-assistant.ts` | 13 test cases: Zod body validation, IP rate limiting, prompt injection defense, secret leakage interception, Groq error recovery. |
| `scripts/test-ai-safety.ts` | Regex safety classification: prompt injection overrides, abusive language, illegal acts, educational exceptions. |
| `scripts/test-ai-routes.ts` | Public route allowlist checking: prevents navigation leaks to private or non-existent URLs. |
| `scripts/test-ai-security.ts` | Evaluates adversarial jailbreaks, markdown exfiltration, and prompt extraction attempts. |
| `scripts/test-store-checkout.ts` | E-commerce checkout flow: server price recalculation, order creation, currency enforcement. |
| `scripts/test-store-payments.ts` | Cryptographic signature validation: HMAC SHA-256 calculation for Razorpay verification. |
| `scripts/test-store-security.ts` | Unauthorized download prevention, asset path masking, expired token rejection. |
| `scripts/test-store-v2.ts` | Store catalog integrity: validates canonical products, slugs, pricing formats, feature lists. |
| `scripts/test-turnstile.ts` | Cloudflare Turnstile token validation and error handling simulation. |
| `scripts/test-upstash-rate-limit.ts` | Sliding window rate limiter behavior, key hashing, and in-memory fallback durability. |
| `scripts/test-production-hardening.ts` | Production readiness check: security headers, no-store directives, X-Content-Type-Options. |

---

## 2. Verification Protocol for Each Redesign Phase

For every page redesigned in subsequent phases, the following verification checklist must be passed:
1. **Zero ESLint Warnings/Errors**: `npm run lint` exits with code 0.
2. **Clean Next.js Turbopack Build**: `npm run build` generates all static and dynamic routes.
3. **Responsive Visual Verification**: Verified on 375px (mobile), 768px (tablet), and 1440px (desktop).
4. **Interactive Component Verification**: All buttons, links, forms, and triggers respond without console errors.
5. **Brand System Compliance**: Strict adherence to the warm editorial luxury color tokens, typography, and minimal Trishul monogram.

