# SHIVSASTRA // DESIGN SYSTEM SPECIFICATION
*Warm Editorial Luxury | Technology Publishing | Accessible UI Tokens*

---

## 1. Color Palette Tokens

```css
:root {
  /* Warm Editorial Luxury Canvas */
  --color-canvas-primary: #F5F2ED;    /* Warm Ivory main background */
  --color-canvas-secondary: #EBE6DF;  /* Soft Warm Gray surface */
  --color-canvas-grain: #D7CEC7;      /* Grain texture & secondary card tint */
  
  /* Ink & Typography */
  --color-ink-primary: #1A1D20;        /* Deep Charcoal for headlines */
  --color-ink-secondary: #565656;      /* Blackboard for body & subheadings */
  --color-ink-tertiary: #7D7D7D;       /* Muted gray for captions & timestamps */
  
  /* Brand Accents & Actions */
  --color-accent: #76323F;             /* Oxblood primary button & key highlight */
  --color-accent-hover: #5E2631;       /* Deepened Oxblood on interactive hover */
  --color-accent-subtle: #76323F15;    /* Tinted Oxblood wash for badges */
  
  /* Structure, Borders & Hairlines */
  --color-border-tan: #C09F80;         /* Tan decorative accent hairlines */
  --color-border-subtle: #E2DBD2;      /* Soft beige container border */
  --color-hairline: #D9D2C7;           /* Minimal structural divider line */

  /* Contrast / Terminal Surfaces */
  --color-surface-dark: #1F2226;       /* Contrast dark terminal container */
  --color-surface-dark-border: #33383F;/* Border for code and dark cards */
}
```

### Prohibited Colors (Strict Enforcement)
- No bright saturated orange (`#FF6B00`, `#FF5722`)
- No electric neon blue (`#0066FF`, `#3B82F6`, `#2563EB`)
- No cyberpunk violet/purple (`#8B5CF6`, `#7C3AED`)
- No pitch black `#000000` text on harsh bright white `#FFFFFF`

---

## 2. Typography Scale

```css
/* Font Families */
--font-display: "Playfair Display", Georgia, serif;
--font-sans: "Inter", "Manrope", -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
```

| Element | Font Family | Size | Weight | Line Height | Tracking |
|:---|:---|:---|:---:|:---:|:---:|
| **Hero Title** | Display Serif | `text-4xl sm:text-6xl` | 600 | 1.1 | `-0.02em` |
| **Section Heading** | Display Serif | `text-2xl sm:text-3xl` | 600 | 1.2 | `-0.01em` |
| **Subsection Title** | Display Serif | `text-xl sm:text-2xl` | 500 | 1.25 | `normal` |
| **Body Large** | Sans-Serif | `text-base sm:text-lg` | 400 | 1.6 | `normal` |
| **Body Standard** | Sans-Serif | `text-sm sm:text-base` | 400 | 1.55 | `normal` |
| **UI Labels / Tabs** | Sans-Serif | `text-xs sm:text-sm` | 500 | 1.4 | `0.02em` |
| **Micro Badges / Codes**| Monospace | `text-[10px] sm:text-xs`| 500 | 1.2 | `0.08em` |

---

## 3. Brand Identity & Logo Mark

- **Symbol**: Minimal geometric Trishul-inspired monogram in the shape of a modern architectural 'S'.
  - 3 clean vertical hairlines converging into a central curved cross-section.
  - Rendered in Oxblood (`#76323F`) on Warm Ivory surfaces or Grain (`#D7CEC7`) on dark surfaces.
  - Zero heavy illustration, zero deity drawings, zero ornamentation. Pure technological elegance.
- **Wordmark**: `SHIVSASTRA` set in uppercase Playfair Display with `tracking-[0.15em]` paired with a clean monospace subtext `STUDIO // LAB`.

---

## 4. UI Components & Surfaces

### 4.1. Editorial Card Primitive
- Background: Warm Ivory (`#F5F2ED`) or Grain (`#D7CEC7` with 30% opacity).
- Border: `1px solid var(--color-border-subtle)` (`#E2DBD2`), with Tan (`#C09F80`) active hover highlight.
- Padding: Generous internal padding (`p-6 sm:p-8`).
- Elevation: Flat architectural plane; zero heavy multi-colored drop-shadows.

### 4.2. Action Buttons (Primary / Secondary)
- **Primary Action**: Solid Oxblood (`#76323F`), white text (`#FFFFFF`), `font-medium`, `text-xs sm:text-sm`, hover state deepens to `#5E2631`.
- **Secondary Action**: Warm Ivory background, Tan hairline border (`1px solid #C09F80`), Blackboard text (`#565656`), hover state adds subtle grain tint.
- **Touch Target**: Minimum height 44px on mobile viewports.

