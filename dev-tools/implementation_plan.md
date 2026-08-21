# Implementation Plan: New Treatment Pages (Collagen Stimulation & Tone-Up)

We will create two new pages to represent the new treatments:
1. **Collagen Stimulation Facial** (`collagen-stimulation-facial.html`)
2. **Tone-Up Facial** (`tone-up-facial.html`)

We will follow the exact styling, font pairings, section layouts, and navigation structure from the reference pages (`oligio-x.html`, `ldm-water-drop-lifting.html`, and `medical-weight-loss-dallas.html`). 

---

## User Review Required

> [!IMPORTANT]
> **Key Decisions & Layout Rules:**
> 1. **Image Assets**: The extracted images from the DOCX files will be placed into their respective folders (`assets/collagen-stimulation/` and `assets/tone-up/`). 
> 2. **Global Delegation & Telephone Number**: The user requested:
>    - "Medical Delegation - move this to near top across all subpages please!"
>    - "Ready for Your Glow? Marcus – I think we add telephone number in all subpages globally."
>    We will implement these sections in the new pages. Since modifying *all* existing subpages is out of scope for the immediate creation of these two pages, we will implement this layout rule for the two new pages first.
> 3. **Navigation Integration**: We will update both `navbar.js` and `navbar.html` to change "Soon" links for Collagen Stimulation and Tone Up to point to our two new pages.

---

## Proposed Changes

### [New Pages]

#### [NEW] [collagen-stimulation-facial.html](file:///Users/mw/Sites/SuAGlow/dev-site/collagen-stimulation-facial.html)
- **Title**: *Collagen Stimulation & Acne Scar Treatment Dallas | Korean Skin Booster | SuA Glow*
- **SEO Elements**: Includes the precise keywords and meta description specified in the document.
- **Header/Hero**: A dark theme hero section matching the Oligio X / LDM style:
  - Background image: `assets/collagen-stimulation/image1.jpeg` (using a dark tint/overlay).
  - Floating circle badge on the right.
- **Medical Delegation Section**: Placed prominently near the top of the page.
- **Section 1: Why K-Beauty Thinks Beyond Volume**: A clean layout featuring `assets/collagen-stimulation/image2.jpeg` or a styled checklist card.
- **Section 2: Why Korean Aesthetics Invests in Collagen Early**: Responsive text block + structural details.
- **Section 3: Build Your Collagen & Skin Quality Plan**: Side-by-side grid showcasing treatment options (Skin Boosters, Microneedling, LDM).
- **Section 4: Bridal / Event Glow Timeline**: Uses `assets/collagen-stimulation/image4.png` for layout planning.
- **Section 5: Seoul Standard™ Comparison Chart**: Interactive treatment comparison table using `assets/collagen-stimulation/image5.png` and `image6.png` as visual references.
- **FAQ Section**: Dropdown Accordion using `<details>` markup, matching Oligio X style.
- **CTA Section**: Consistent dark theme footer CTA with telephone number `972-665-8737` prominent.

#### [NEW] [tone-up-facial.html](file:///Users/mw/Sites/SuAGlow/dev-site/tone-up-facial.html)
- **Title**: *Korean Tone-Up Facial Dallas | Brightening Facial | Korean Glass Skin Treatment | SuA Glow*
- **SEO Elements**: Meta description and keywords fully integrated.
- **Header/Hero**: Dark theme hero section:
  - Background image: `assets/tone-up/image1.jpeg` (with dark overlay).
- **Medical Delegation Section**: Placed prominently near the top.
- **Section 1: Why Tone-Up is the Secret to Luminous Glass Skin**: Grid featuring `assets/tone-up/image2.jpeg` and `image3.png` (Rejuran Tone Up product showcase).
- **Section 2: Why SuA Glow is Obsessed with Glow**: Clean, minimalist editorial layout.
- **Section 3: Treatment Comparison**: Renders the dynamic comparison grid (`image5.png` reference).
- **Section 4: Gallery / Treatment Steps**: Renders a beautiful grid or slider of the various treatment steps (`image8.jpeg` through `image20.jpeg`).
- **Transparency & Disclaimers**: Rendered in a clean, light-grey section.
- **FAQ Section**: Accordion layout with the specific FAQs from the DOCX.
- **CTA Section**: Standardized footer CTA with contact info.

---

### [Navigation & Components]

#### [MODIFY] [navbar.js](file:///Users/mw/Sites/SuAGlow/dev-site/navbar.js)
- Update desktop mega menu:
  - Change "Collagen Stimulation" link to `collagen-stimulation-facial.html`.
  - Change "Tone Up" link to `tone-up-facial.html` and remove the "Soon" badge.
- Update mobile menu:
  - Replace the links and remove the "Soon" badges.

#### [MODIFY] [navbar.html](file:///Users/mw/Sites/SuAGlow/dev-site/navbar.html)
- Sync desktop mega menu and mobile menu links with `navbar.js` to ensure the backup file remains accurate.

---

## Verification Plan

### Manual Verification
1. Open local server at `http://localhost:8000/collagen-stimulation-facial.html` and verify styling, layout, image loading, and responsive behavior.
2. Open `http://localhost:8000/tone-up-facial.html` and verify the same.
3. Test the navbar dropdown menu on both desktop and mobile to ensure clicking the updated links goes to the correct new pages.
4. Verify that Lucide icons render correctly.
