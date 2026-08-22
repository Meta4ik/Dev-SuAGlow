# Tone-Up Facial Page Implementation Plan

This plan details the process for completely rebuilding `tone-up-facial.html` to perfectly match the provided mockups from scratch using HTML and Tailwind CSS.

## User Review Required

> [!WARNING]  
> **Image Assets Mapping**: The mockups contain several high-quality model photos and the Rejuran Tone-up product box/vial. I will use existing images from `assets/tone-up/` or placeholders where the exact image is not definitively known. Please confirm if there are specific filenames I should map to each section, or if you will swap in the final assets later.
> 
> **Custom Icons**: The mockups contain numerous custom line-art icons (e.g. sun/radiance, droplet, DNA strand, molecule, waves). I will use Lucide icons as approximations to ensure it can be built immediately with native UI elements, unless you have SVG exports for these specific icons.

## Open Questions
1. **Navigation Menu**: Should the rebuilt page use the standard `id="nav-placeholder"` injection or should I implement any specific transparent-to-solid navbar behavior for this dark hero section?
2. **Footer**: Should the standard footer be injected at the bottom?

## Proposed Changes

We will restructure `tone-up-facial.html` into four distinct sections as defined by the mockups. All text will be native HTML text (no text-in-images), and styling will utilize our Tailwind config (`dist/output.css`).

### `tone-up-facial.html`

#### [MODIFY] tone-up-facial.html
The file will be completely overhauled.

**Section 1: Hero**
- Background: Very dark charcoal/black (`#0A0A0A` approximation) with a subtle radial glow behind the model.
- Left column:
  - Top Badge: "K-BEAUTY • TONE-UP • RADIANCE" with lines on sides.
  - H1: "KOREAN GLASS SKIN TONE-UP FACIAL" in primary serif font.
  - Subhead: "DULL SKIN? TURN THE LIGHTS ON." in sans-serif uppercase.
  - Description text.
  - Features Grid: 5 columns with line-icons and uppercase labels.
  - Script typography: "Not lighter. Brighter." (Using a cursive/handwritten font or italicized serif if custom font unavailable).
  - CTA Button: Dusty rose background (`#BA8781` approximation) with arrow.
- Center/Right:
  - Background model image (will use `assets/tone-up/image1.jpeg` or similar).
  - Floating Badge: Circular "KOREAN INSPIRED PHYSICIAN GUIDED".
  - Floating Rejuran product image (absolute positioned over the bottom).
  - Right Floating Panel: White translucent or solid card listing TONE, CLARITY, LUMINOSITY, RADIANCE and "POWERED BY Rejuran Healing Essence Tone-Up Booster".

**Section 2: The K-Beauty Approach**
- Background: Soft off-white/cream.
- Left column: Large rounded model portrait (will use `assets/tone-up/image18.jpeg` or similar) with an overlapping bottom banner "TONE-UP • RADIANCE • CLARITY".
- Right column:
  - Pill Badge: "THE K-BEAUTY APPROACH".
  - H2: "KOREAN GLASS SKIN TONE-UP FACIAL"
  - Italic subhead: "Not Lighter. Brighter. Reveal Your Natural Radiance." in dusty rose.
  - Description paragraphs with highlighted "SuA Glow" and "Rejuran".
  - Card: "KOREAN-INSPIRED. PHYSICIAN-GUIDED. RESULTS YOU CAN SEE." containing a 2x3 grid of icons and feature texts (e.g. Brighten & Even Tone, Glow & Luminosity).

**Section 3: Comparison Table**
- Layout: Top block contains text on the left (H2: "How Does The Tone-Up Facial Compare To Other Korean Glass Skin Treatments?") and a model image on the right.
- Table: A CSS Grid or native `<table>` to recreate the comparison chart.
  - Columns: "IF YOU WANT...", "RECOMMENDED TREATMENT", "FOCUS".
  - The Tone-up row will be highlighted with a dusty rose background.
  - Other rows (Hydration, PDRN, Collagen, LDM) will have distinct pastel icon backgrounds.
- Footer block: Dusty rose bottom border with script text "Your Skin, Your Journey." and SuA Glow logo.

**Section 4: Transparency Matters**
- Background: Cream-to-rose subtle gradient.
- Left column: "N. Transparency Matters" header followed by a vertical list of 5 disclaimer/regulatory points, each with a rounded icon badge.
  - Final item emphasizes "Treatment results vary by individual. No outcome can be guaranteed." in red/rose italics.
- Right column: Large model portrait with an overlapping white card: "Our commitment is to clear communication...".

## Verification Plan

### Automated Tests
- Build CSS using Tailwind (`npm run build:css` if applicable) to ensure all ad-hoc utility classes are generated.

### Manual Verification
- Render the page locally in a browser.
- Verify all text is selectable and correctly matches the copy in the mockups.
- Verify responsive stacking (Grid/Flexbox layout adjustments) for mobile screens, ensuring the complex desktop layout degrades gracefully into a single column.
- Visually compare the layout, spacing, colors, and typography hierarchy against the provided screenshots.
