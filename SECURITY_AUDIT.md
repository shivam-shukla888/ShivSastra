# SHIVSASTRA // SECURITY & APPLICATION DEFENSE AUDIT (PHASE 0)
*Authoritative Audit of Attack Surfaces, Protections, Rate Limits & Cryptography*

---

## 1. Threat Modeling & Attack Surface Overview

| Attack Vector | Surface / Endpoint | Protection Mechanism | Verification Status |
|:---|:---|:---|:---:|
| **Prompt Injection & Model Jailbreaking** | `/api/assistant` | Dual-layer deterministic classification (`classifySafetyIntent` regex interceptor + inert system/user framing delimiters `<visitor_query>`). | Verified via `test-adversarial-prompts.ts` |
| **System Prompt & Secret Exfiltration** | `/api/assistant` | Secret regex suppression (`FORBIDDEN_SECRET_PATTERNS`, `FORBIDDEN_PROMPT_LEAK_PATTERNS`). Intercepts `gsk_`, `.env`, and instruction keywords. | Verified via `test-ai-security.ts` |
| **Malicious Route Exfiltration** | `/api/assistant` | Strict public route allowlist (`isValidPublicRoute`). Strips private paths (`/admin*`, `/api*`, unlisted dynamic slugs) to inert text. | Verified via `test-ai-routes.ts` |
| **Resource Exhaustion (DDoS/Slowloris)** | All APIs | 64KB request body size guard (`MAX_REQUEST_BODY_BYTES`) + 35s client timeout abort controller on Groq requests. | Verified via `test-ai-assistant.ts` |
| **Volumetric API Abuse** | `/api/assistant`, `/contact` | Upstash Redis sliding window limiter (`checkAiRateLimit`) with IP extraction from `CF-Connecting-IP` / `X-Forwarded-For` + SHA-256 IP hashing. In-memory sliding fallback. | Verified via `test-upstash-rate-limit.ts` |
| **Automated Bot Form Spam** | `/contact`, `/services#quote` | Cloudflare Turnstile cryptographic token verification with server-side challenge callback. | Verified via `test-turnstile.ts` |
| **Client-Side Price Tampering** | `/api/store/checkout` | Server-authoritative price lookup from `CANONICAL_STORE_PRODUCTS` / Supabase. Client-supplied price parameters are completely discarded. | Verified via `test-store-checkout.ts` |
| **Payment Forgery & Callback Spoofing** | `/api/store/verify-payment` | Razorpay HMAC SHA-256 signature verification (`crypto.createHmac`) over `orderId + "|" + paymentId`. | Verified via `test-store-payments.ts` |
| **Digital Asset Storage Theft** | `/api/store/download/[orderId]` | Fulfillment tokens cryptographically tied to verified paid orders. Direct storage bucket paths masked behind proxy endpoint. | Verified via `test-store-security.ts` |
| **Unauthorized CMS Access** | `/admin/*` | Cookie-based HTTP-only session auth via Supabase SSR + PostgreSQL Row Level Security (RLS) policies. | Verified via `test-auth.ts` |

---

## 2. Environment Variables & Secret Handling

- **Zero-Exposure Policy**: No API keys or connection strings are ever logged, printed to console, or bundled into client code.
- **Server-Only Isolation**:
  - `GROQ_API_KEY`: Strictly isolated in server-only modules with runtime client-execution guards:
    ```typescript
    if (typeof window !== "undefined") {
      throw new Error("This module cannot be executed on the client");
    }
    ```
  - `SUPABASE_SERVICE_ROLE_KEY`: Restricted to admin backend tasks, never exposed in client context.
  - `RAZORPAY_KEY_SECRET`: Used exclusively in server-side signature verification.
  - `UPSTASH_REDIS_REST_TOKEN`: Restricted to server rate-limit routines.
- **Public Keys**: Only explicitly intended public keys are bundled via `NEXT_PUBLIC_` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `NEXT_PUBLIC_RAZORPAY_KEY_ID`).

---

## 3. Data Sovereignty & Confidentiality Architecture

- **Client Data Isolation**: "AI Extracts. Code Decides." — Visitor conversation logs are not stored in permanent public databases.
- **Security Headers**: Production responses enforce `X-Content-Type-Options: nosniff`, `Cache-Control: no-store, max-age=0` on sensitive routes, and frame-guard protections.
