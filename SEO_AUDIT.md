# SHIVSASTRA // SEO & METADATA AUDIT (PHASE 0)
*Audit of Search Engine Visibility, Structured Data, OpenGraph & Indexing Directives*

---

## 1. Metadata & OpenGraph Baseline

- **Base Metadata**: Implemented in `src/app/layout.tsx` with dynamic fallback to `https://www.jiosi.online` or `https://shivsastra.com`.
- **Title Template**: `%s | SHIVSASTRA — Production Agentic AI Systems & Engineering Studio`.
- **OpenGraph Assets**:
  - `opengraph-image.tsx`: Dynamic ImageResponse generation displaying the studio identity.
  - Static fallback: `/public/og-image.png`.
- **Twitter Cards**: Configured with `summary_large_image` linking to verified creator handle.

---

## 2. Structured Data (JSON-LD) Inventory

| Schema Type | Location | Coverage & Fields |
|:---|:---|:---|
| `Organization` | `layout.tsx` | Legal studio identity, founder name, official URLs, verified social profiles. |
| `WebSite` | `layout.tsx` | Site name, search action URL, publisher entity. |
| `Product` | `/store/[slug]/page.tsx` | Canonical store items: name, description, price (INR), SKU/release code, availability (`InStock`). |
| `Article` | `/projects/[slug]/page.tsx` | Case study monographs: headline, datePublished, author, techStack tags. |
| `FAQPage` | `/services/page.tsx` | Scoped services FAQ items structured for Google search rich snippets. |

---

## 3. Indexing Directives (`robots.txt` & `sitemap.xml`)

- **Robots Configuration** (`src/app/robots.ts`):
  - `User-Agent: *`
  - `Allow: /`
  - `Disallow: /admin/`
  - `Disallow: /admin/*`
  - `Disallow: /api/`
  - `Disallow: /api/*`
  - `Sitemap: https://www.jiosi.online/sitemap.xml`
- **Sitemap Generator** (`src/app/sitemap.ts`):
  - Automatically queries published projects, services, store products, and lab entries.
  - Dynamically injects all 37 canonical public URLs with appropriate `changeFrequency` and `priority` (Home: 1.0, Projects/Store/Services: 0.8, Lab/About: 0.6).
- **Redirects**: `/privacy-policy` permanently redirects (308) to canonical `/privacy`.

