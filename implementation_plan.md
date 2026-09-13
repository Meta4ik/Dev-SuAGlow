# Implementation Plan: SuA Glow Glass Skin Membership ($199/mo)

We checked your email and located the email thread with subject **"SuA Glow Membership Draft"** sent by **Kameron Allen** (August 28, 2026) and reviewed by **Sophia**, with the attachment **`SuA Glow Membership August 28 2026.docx`**. 

We extracted the full document into [SuA Glow Membership August 28 2026.txt](file:///Users/mw/Sites/SuAGlow/dev-site/kam_doc_updates/SuA%20Glow%20Membership%20August%2028%202026.txt).

---

## Executive Summary of Email & Membership Details

- **Program Name**: **The SuA Glow Glass Skin Method™** ($199/month)
- **Taglines**: 
  - *"K-Beauty Is All About the Layers. So Is Your Facial."*
  - *"Five Layers. One Ritual. Very K-Beauty."*
  - *"Consistency over correction. Skin quality over quick fixes. Personalization over one-size-fits-all. Layers, layers, layers."*
- **The Monthly 5-Layer Glass Skin Ritual**:
  1. **Layer 01 · The Dewy Prep**: Aquafacial (*Cleanse • Exfoliate • Hydrate*)
  2. **Layer 02 · The Skin Booster**: Needle-Free Skin Booster Infusion (*Infuse • Target • Glow*)
  3. **Layer 03 · The Water Drop Lift**: LDM Multi-Frequency Ultrasound (*Calm • Support • Refine*)
  4. **Layer 04 · The Red-Light Finish**: Red Light Therapy (*Calm • Reset • Finish*)
  5. **Layer 05 · Glow From Within**: Glutathione IV Push (*Antioxidant • Refresh • Glow Support*) — provided when medically appropriate
- **The Seoul Glow Drop**: Rotating monthly K-Beauty discovery, masks, or seasonal finishing touches (*Discover • Try • Glow*)
- **VIP Member Perks**:
  - 20% savings on eligible services + skincare
  - Priority booking
  - Member-only event access
  - First access to select new Korean-inspired treatments
- **Supervising Physician**: Adam Yang, MD
- **SEO Title**: `Korean Glass Skin Membership Dallas | SuA Glow`
- **SEO H1**: `Korean Glass Skin Membership | $199/Month`
- **Email Thread Status**:
  - Kameron noted: Development priority after IV Therapy, September Promotions, and Scalp & Hair Rejuvenation.
  - Sophia responded: *"Looks good! Love it. Marcus would it be possible to change my photo 😅Dr. Yang looks good"*.

---

## User Review Required

> [!IMPORTANT]
> **Implementation Scope**:
> 1. **Dedicated Landing Page ([`memberships.html`](file:///Users/mw/Sites/SuAGlow/dev-site/memberships.html))**: A comprehensive, high-converting inner page matching `DESIGN.md` guidelines (`pt-[250px]`, dark hero, glow cards, interactive 5-layer visualizer, Seoul Glow Drop feature, pricing card, FAQ accordion, medical disclaimers).
> 2. **Homepage Feature Section ([`index.html`](file:///Users/mw/Sites/SuAGlow/dev-site/index.html))**: A dedicated membership banner / card section on the homepage highlighting the $199/month club and 5-layer method.
> 3. **Navigation Integration**: Link `Memberships` in the primary navigation header ([`navbar.js`](file:///Users/mw/Sites/SuAGlow/dev-site/navbar.js) / [`navbar.html`](file:///Users/mw/Sites/SuAGlow/dev-site/navbar.html)) and footer ([`footer.js`](file:///Users/mw/Sites/SuAGlow/dev-site/footer.js)).

---

## Proposed Changes

### 1. Dedicated Membership Page
#### [NEW] [`memberships.html`](file:///Users/mw/Sites/SuAGlow/dev-site/memberships.html)
- **Standard Inner Hero Section**:
  - `data-nav-theme="dark"`, `pt-[250px]`, `pb-32`
  - Pill badge: `THE SuA Glow GLASS SKIN METHOD™ · $199/MONTH`
  - H1: `Korean Glass Skin Membership`
  - Subtitle: *"K-Beauty Is All About the Layers. So Is Your Facial. A provider-curated monthly skin ritual in Carrollton, serving Dallas–Fort Worth."*
  - CTA: `JOIN THE GLASS SKIN CLUB →`
- **Philosophy / K-Beauty Difference Section**:
  - "Why Five Layers?" & "Glass Skin Is a Practice, Not a Quick Fix"
  - Editorial typography highlighting consistency and skin quality.
- **The 5-Layer Interactive Ritual Cards**:
  - Structured step cards (Dewy Prep, Needle-Free Booster, LDM Ultrasound, Red Light, Glutathione IV) with signature gold accent glow borders (`--glow-color: #AA987C`).
- **The Seoul Glow Drop Spotlight**:
  - Premium showcase card highlighting rotating monthly K-Beauty discoveries.
- **Membership Inclusions & VIP Perks Pricing Card**:
  - Clear breakdown of everything included for $199/mo + the 4 member benefits (20% off, priority booking, events, first access).
- **FAQ Accordion & Medical Disclaimer**:
  - 3 target questions from draft copy, Dr. Adam Yang MD oversight badge, clinical candidacy note.

---

### 2. Homepage Spotlight Section
#### [MODIFY] [`index.html`](file:///Users/mw/Sites/SuAGlow/dev-site/index.html)
- Add a high-visibility Glass Skin Membership teaser section that guides homepage visitors to `memberships.html`.

---

### 3. Navigation & Site Links
#### [MODIFY] [`navbar.js`](file:///Users/mw/Sites/SuAGlow/dev-site/navbar.js) & [`navbar.html`](file:///Users/mw/Sites/SuAGlow/dev-site/navbar.html)
- Add `Memberships` to top-level desktop menu and mobile drawer.

#### [MODIFY] [`footer.js`](file:///Users/mw/Sites/SuAGlow/dev-site/footer.js)
- Include `Memberships` in footer navigation lists.

#### [MODIFY] [`dev-tools/tracker-data.json`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/tracker-data.json)
- Update Issue #3 status to reflect build progress.

---

## Verification Plan

### Automated / Syntax Check
- Verify all HTML tags, script loads, Lucide icons, and Tailwind utility classes.
- Validate local asset links and responsive styles.

### Manual Verification
- Test desktop and mobile drawer navigation.
- Verify accordions, glow animations, and contrast ratios meet `DESIGN.md` standards.
