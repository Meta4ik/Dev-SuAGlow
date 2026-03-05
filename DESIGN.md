# SuA Glow Design System

## Overview
SuA Glow is a premium medical‑aesthetic brand that blends Korean‑beauty precision with a modern, glass‑morphism aesthetic. The visual language emphasizes a **luminescent glow**, subtle luxury, and clean, high‑contrast interactions.

## Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| **Gold Glow** | `#AA987C` | Primary accent, interactive borders, glow‑card highlights |
| **Taupe** | `#8F857B` | Secondary accent, muted text, supporting UI elements |
| **Blue‑Gray** | `#9DAFB6` | Backgrounds for dark sections, secondary cards |
| **Teal** | `#14B8A6` | Call‑to‑action highlights, icons |
| **Near Black** | `#111111` | Primary text on light backgrounds |
| **White** | `#FFFFFF` | Main background for dark mode sections |

## Typography
- **Primary Font:** *Inter* – clean, geometric sans‑serif for headings and body text.
- **Secondary Font:** *Roboto* – used sparingly for form inputs and captions.
- **Heading Scale:**
  - `h1`: 3rem, weight 700, tracking -0.02em
  - `h2`: 2.25rem, weight 600
  - `h3`: 1.5rem, weight 600
- **Body Text:** 1rem, weight 400, line‑height 1.6, color `text-charcoal/70` on light backgrounds and `text-white/70` on dark backgrounds.

## Page Templates

### Standard Inner-Page Hero
Every non-home page uses this hero pattern. Copy exactly — do not change padding, alignment, or structure.

```html
<section id="hero" data-nav-theme="dark"
    class="relative min-h-[50vh] flex items-start justify-center text-center px-8 pt-[250px] overflow-hidden bg-near-black pb-32">
    <div class="absolute inset-0 z-0 opacity-40">
        <!-- Background: <img>, <video>, or gradient div -->
    </div>
    <div class="relative z-10 max-w-4xl animate-on-scroll fade-up">
        <span class="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] tracking-[0.3em] uppercase text-white/90 font-bold mb-8">
            Eyebrow Label
        </span>
        <h1 class="heading-wide text-4xl md:text-6xl text-white mb-6 uppercase tracking-[0.15em]">
            Page Title
        </h1>
        <p class="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Supporting subtitle text.
        </p>
    </div>
</section>
```

**Key rules:**
- `pt-[250px]` — accounts for fixed navbar height; do not reduce
- `items-start` + `text-center` — content anchors to top, centered
- `pb-32` — consistent bottom breathing room
- Always set `data-nav-theme="dark"` so the navbar renders white text over the dark hero
- Wrap background media in `absolute inset-0 z-0` with an opacity layer; content lives in `relative z-10`

---

## Core Components
### Glow Card (`.glow-card`)
- **Structure:** `<div class="product-card glow-card ...">`
- **Features:** Animated rotating border using `--glow-color`, hover pauses animation and intensifies glow.
- **Variants:** Apply `style="--glow-color: <hex>;"` to switch colors (Gold, Taupe, Blue‑Gray, Teal).
- **Accessibility:** Ensure sufficient contrast (white text on dark card, black on light card).

### Buttons
- **Primary:** `bg-[#AA987C] text-white hover:bg-[#8F857B] transition-colors`
- **Secondary:** `border-[#AA987C] text-[#AA987C] hover:bg-[#AA987C]/10`
- **Shape:** Pill‑rounded (`rounded-full`) with 40px radius for a soft, approachable feel.

### Navigation Icon
- Added to the top‑right of the navbar: `<i data-lucide="swatch-book" class="w-4 h-4"></i>` linking to the style guide.

## Layout & Spacing
- **Grid System:** Tailwind `grid-cols-1 md:grid-cols-2` for responsive card layouts.
- **Spacing:** 1.5rem (`p-6`) around sections, 0.75rem (`gap-3`) between color swatches.
- **Responsive Breakpoints:** Mobile (`sm:`), Tablet (`md:`), Desktop (`lg:`).

## Interaction Patterns
- **Hover Glow:** Cards pause rotation on hover, increasing opacity of the border.
- **Animated Scroll:** Sections use `animate-on-scroll fade-up` for subtle entrance effects.
- **Micro‑animations:** Icons and buttons use `transition-all` with `duration-300` for smooth feedback.

## Usage Guidelines
1. **Consistency:** Always use the predefined color variables via `--glow-color` for any new card.
2. **Accessibility:** Verify contrast ratios meet WCAG AA at minimum.
3. **Brand Voice:** Keep copy concise, luxurious, and focused on “glow” and “radiance”.
4. **Documentation:** Reference this `DESIGN.md` whenever adding new UI components to keep the system coherent.

---
*Generated for the SuA Glow website to serve as a single source of truth for designers and developers.*
