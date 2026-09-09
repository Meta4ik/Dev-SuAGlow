# Implementation Plan: Korean Scalp & Hair Rejuvenation Page Redesign & Copy Updates

Update [korean-scalp-hair-rejuvenation.html](file:///Users/mw/Sites/SuAGlow/dev-site/korean-scalp-hair-rejuvenation.html) based on the 11-page client feedback PDF. The changes include SEO/GEO metadata optimization, copy refinements across all sections, structural layout streamlining (removing redundant cards/icons, simplifying process flows), an edgier aesthetic for the K-Beauty Difference section, and an AI-inspired layout refresh for the "Why SuA Glow" value pillars with authentic DEP device imagery.

## User Review Required

> [!IMPORTANT]
> **Key Structural & Visual Decisions from Feedback Document:**
> 1. **5 Focus Steps reduced to 4 numbered items** (Page 2 & 3): Replaced icon cards with clean numbered steps (01 to 04) and updated copy.
> 2. **Removal of "The SuA Glow Scalp Method" block from Section `method`** (Page 5 & 10): Its image (`scalp_analysis_consultation.jpg`) is repurposed into the "What to Expect at Your Scalp Appointment" section, transforming that section into a modern two-column split card.
> 3. **Needle-Free Infusion Section Refresh** (Page 6 & 7): Enlarged hero image, updated device handle to DEP, replaced 3 bottom feature cards with an elegant single horizontal line (`HYDRATE · INFUSE · SUPPORT`), and simplified the right-hand expectations panel by removing the support bullet list.
> 4. **AI-Inspired Design for Value Pillars** (Page 11): Redesigned the "Why SuA Glow / What Makes It K-Beauty?" section with top model banner framing and arch-top image cards (first card text-only, third card featuring the DEP handle).

---

## Detailed Section-by-Section Plan (Mapped to PDF Pages 1–11)

### Page 1: Hero Section & SEO/GEO Metadata
- **Title Tag**: Update to `Korean Scalp & Hair Rejuvenation in Carrollton, TX | SuA Glow`
- **Meta Description**: Update to `Discover Korean-inspired scalp & hair rejuvenation at SuA Glow in Carrollton, TX. Personalized, physician-guided care for scalp health, visible thinning and hair-density concerns.`
- **Hero H1**: Keep `Korean Scalp & Hair Rejuvenation` cleanly structured.
- **Hero Body Copy**:
  - Replace subtext with:
    - `"K-Beauty starts with skin. At SuA Glow, that includes the scalp."`
    - `"Personalized, physician-guided scalp & hair wellness for visible thinning, hair-density concerns and scalp health—with Korean-inspired care and advanced aesthetic technology in Carrollton, TX."`

---

### Pages 2 & 3: What Can Korean Scalp & Hair Care Target? (`#scalp-reset-focus`)
- **Section Heading & Subtitle**:
  - Title: `YOUR SCALP & HAIR RESET PERSONALIZED`
  - Subtitle: `Your plan may focus on scalp health, visible thinning, hair density and long-term scalp + hair wellness.`
- **Left Photo Card**:
  - Remove badge: `TARGETED SCALP PROTOCOLS`
  - Eyebrow: `PERSONALIZED ASSESSMENT`
  - Heading: `START WITH THE SCALP.`
  - Subtext: `Density. Scalp condition. History. Goals.`
- **Right Column Steps**:
  - Convert from 5 icon cards to **4 numbered steps** (removing SVG icon boxes, using sleek numeric labels `01`–`04`):
    - **01 — SCALP HEALTH**: `Dryness · Oiliness · Flaking · Buildup` | Tag: `BALANCE · CONDITION · SUPPORT`
    - **02 — HAIR DENSITY & THINNING**: `Less fullness · Wider-looking part · Density changes` | Tag: `ASSESS · TARGET · TRACK`
    - **03 — SCALP NOURISHMENT**: `Hydration · Conditioning · Targeted topical care` | Tag: `NOURISH · CONDITION · SUPPORT`
    - **04 — PROACTIVE + LONG-TERM CARE**: `Consistent scalp care that evolves with you.` | Tag: `MONITOR · ADJUST · MAINTAIN`
- **Bottom CTA Banner**:
  - Heading: `NOT SURE WHERE YOU FIT?`
  - Subtext: `That's what the consultation is for.`
  - Button: `BOOK YOUR SCALP CONSULTATION →`
  - Remove redundant helper text under the button (`Start with a personalized scalp consultation.`).

---

### Page 4: What is Korean Scalp Care? (`#what-is`)
- **Eyebrow**: `WHAT IS KOREAN SCALP CARE?`
- **Heading**:
  ```
  THINK SKINCARE.
  JUST A LITTLE HIGHER.
  ```
- **Lead Paragraph**: `Korean scalp care is a skin-first approach to scalp and hair wellness—starting with scalp condition, visible hair-density concerns and your individual goals.`
- **White Box Simplification**:
  - Title: `We look at the whole picture.`
  - Remove detailed sub-paragraphs under each item; keep clean titles:
    - `Scalp Condition`
    - `Hair + Part`
    - `Treatment History – etc.`
- **Remove Paragraph**: Delete the text between the white box and the dark protocol box (`"From there, an individualized Korean-inspired scalp strategy..."`).
- **Black Protocol Box**:
  - Simplify header & punchline:
    ```
    K-BEAUTY CHANGED SKINCARE.
    NOW THINK SCALP.
    ```
- **Right Image Card**:
  - Update floating overlay card text:
    ```
    SKIN-FIRST THINKING
    START WITH THE SCALP.
    Then build the plan.
    ```

---

### Page 5: The K-Beauty Difference & Method Refactor (`#method`)
- **Top Dark Glass Card ("K-Beauty Difference") — Make Design Edgier**:
  - Eyebrow: `THE K-BEAUTY DIFFERENCE`
  - Heading: `K-BEAUTY CHANGED SKINCARE. NOW THINK SCALP.`
  - Subtitle: `No miracle step. No one-size-fits-all routine. That's very K-Beauty.`
  - 3 Edgier Cards with subtle glow/texture backgrounds and micro-interactions:
    - **Card 01 (PREVENTION)**: `DON'T WAIT FOR THE SOS.` | `K-Beauty thinks ahead.` | `THINK AHEAD →`
    - **Card 02 (LAYERING)**: `ONE MIRACLE STEP? ANIYO.` | `Thoughtful care is personalized.` | `LAYER SMARTER →`
    - **Card 03 (CONSISTENCY)**: `THE GLOW IS IN THE ROUTINE.` | `Thoughtful care doesn't end after one visit.` | `KEEP GOING →`
  - Bottom Bar: `SKIN-FIRST · SCALP-FIRST · VERY K-BEAUTY`
- **Bottom Block ("The SuA Glow Scalp Method™")**:
  - Remove the entire 4-step method block from this section (per instructions on Pages 5 and 10). The image (`assets/scalp_analysis_consultation.jpg`) is moved to Section `#process`.

---

### Pages 6 & 7: Needle-Free Scalp Infusion (`#needle-free`)
- **Eyebrow**: Change to `NEEDLE-FREE SCALP INFUSION`
- **Heading**:
  ```
  SCALP INFUSION.
  MINUS THE NEEDLES
  ```
- **Subtitle**: `Advanced Korean-inspired topical scalp care & hair rejuvenation. Delivered without scalp injections.`
- **Hero Image Card**:
  - Make hero image visually prominent with larger height/aspect ratio.
  - Ensure the device handle clearly represents the authentic DEP handpiece (`assets/dep_scalp_man_treatment.jpg` or DEP handle reference).
  - Update pill badge: `TOPICAL CARE · NEEDLE-FREE DELIVERY`
- **Bottom Feature Cards**:
  - Delete the three bottom cards (`CLEANER DELIVERY`, `TARGETED CARE`, `VISIBLE IMPROVEMENT`).
  - Replace the row with one clean, elegant horizontal line:
    ```
    HYDRATE  —  INFUSE  —  SUPPORT
    ```
- **Right Panel Simplification**:
  - Header: `REALISTIC EXPECTATIONS`
  - `WHAT IT IS`: `Needle-free topical scalp care incorporated into a personalized aesthetic treatment plan.`
  - `AND WHAT IT ISN'T`: `A guaranteed hair-growth treatment or a replacement for medically indicated hair-loss evaluation or treatment.`
  - Remove the bulleted list box (`THIS TREATMENT MAY SUPPORT:...`).

---

### Page 8: Candidacy & Concerns (`#concerns` - Top Half)
- **Section Heading**:
  - Title: `IS KOREAN SCALP & HAIR REJUVENATION FOR ME?` (removing `"JUST A REASON TO CHECK IN"`)
  - Subtitle: `Korean Scalp & Hair Rejuvenation at SuA Glow is personalized for women and men with scalp, visible thinning or hair-density concerns.`
- **3 Concern Cards**:
  - Remove numbers `01`, `02`, `03` from cards for a cleaner luxury editorial feel.
- **Bottom Callout Boxes**:
  - Remove the two separate bottom cards.
  - Consolidate into a single refined callout:
    - **Title**: `NOT SURE IF IT'S “BAD ENOUGH”?`
    - **Body**: `You don't need to diagnose it yourself. Start with an assessment.`
    - **Small print**: `Hair thinning, shedding and density changes can have different causes. Additional medical or dermatologic evaluation may be recommended when appropriate.`
    - **CTA Button**: `BOOK YOUR SCALP CONSULTATION →`

---

### Page 9: Medical Safety & Triage (`#concerns` - Bottom Half)
- **Left Column**:
  - Title: `WHEN IS AESTHETIC CARE NOT ENOUGH?`
  - Body: `Hair thinning and shedding can have many causes. Sudden, significant, patchy, persistent or symptomatic changes may warrant medical or dermatologic evaluation before aesthetic scalp treatment.`
  - Korean callout retained: `매우 중요해요 · THIS PART MATTERS.`
  - Bottom CTA block:
    ```
    KNOWING WHEN NOT TO TREAT
    IS PART OF THOUGHTFUL CARE.
    START WITH A SCALP CONSULTATION →
    We'll help determine the appropriate next step.
    ```
- **Right Column Updates**:
  - **SUDDEN CHANGE**: `Rapid or significant thinning or shedding.`
  - **PATCHY OR PERSISTENT**: `Changes that warrant a closer look.`
  - **SCALP SYMPTOMS**: `Irritation, discomfort or other scalp concerns.`
  - **HEALTH + HISTORY**: `Medication, nutritional, hormonal or other health factors.`

---

### Page 10: What to Expect At Your Scalp Appointment (`#process`)
- **Two-Column Split Layout**:
  - Left column: Re-use the consultation image `assets/scalp_analysis_consultation.jpg` in a tall luxury rounded card.
  - Right column: Display the 3 appointment timeline steps:
    - **01 BEFORE**: `START WITH YOUR SCALP.` — `We'll review your concerns, relevant history and goals before recommending your plan.`
    - **02 DURING**: `SETTLE IN. SCALP CARE STARTS.` — `Your personalized treatment plan is performed with care. Sensations and treatment time vary by treatment.`
    - **03 AFTER**: `BACK TO YOUR DAY.` — `You'll receive aftercare guidance and recommendations based on your treatment.`

---

### Page 11: What Makes It K-Beauty? / Value Pillars (`#why-sua-glow`)
- **Header & Framing**:
  - Eyebrow: `WHAT MAKES IT K-BEAUTY?`
  - Title: `THE SUA GLOW DIFFERENCE` / `KOREAN-INSPIRED. MEDICALLY GUIDED. VERY SUA GLOW.`
  - Incorporate the dual model visual (using `assets/korean_scalp_hero_bg.jpg` elements / framing) in the section header area.
- **4 Cards (AI-Inspired Arch-Top Design)**:
  - **Card 1: Korean Aesthetics Expertise** — Text-only card with luxury typography and badge (per feedback: *"Get rid of image in first card image"*).
  - **Card 2: Personalized—Not Pre-Packaged** — Elegant arch-top photo showing personalized care.
  - **Card 3: Needle-Free Scalp Infusion** — Arch-top photo showing DEP device handle on scalp (`assets/dep_scalp_man_treatment.jpg` which features the DEP handpiece).
  - **Card 4: Medical Oversight Matters** — Arch-top photo showing medical consultation/oversight.

---

## Verification Plan

### Automated Verification
- Check HTML syntax and closing tags for all modified sections in `korean-scalp-hair-rejuvenation.html`.
- Verify search index in [search-index.js](file:///Users/mw/Sites/SuAGlow/dev-site/search-index.js).

### Manual / Browser Verification
- Open [korean-scalp-hair-rejuvenation.html](file:///Users/mw/Sites/SuAGlow/dev-site/korean-scalp-hair-rejuvenation.html) locally via browser.
- Verify desktop and mobile responsiveness of all modified sections:
  - Hero section text & SEO tags
  - 4 numbered focus steps in Section 2
  - Simplified checklist in Section 3
  - Edgier K-Beauty Difference 3 cards in Section 4
  - Single horizontal line (`HYDRATE · INFUSE · SUPPORT`) and DEP image in Section 5
  - Refined candidacy cards & triage in Section 6
  - Two-column split layout for "What to Expect at Your Scalp Appointment" in Section 7
  - Dual-model banner and arch-top 4 cards in Section 8
- Ensure all booking CTA buttons link properly to `https://suaglow.myaestheticrecord.com/online-booking/`.
