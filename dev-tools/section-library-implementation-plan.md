# Plan: Injectable HTML Section Library & Interactive Section Viewer

This plan outlines the architecture, implementation, and tooling to convert all SuA Glow content section patterns into a reusable library of **injectable HTML/JS sections**, along with an **interactive visual section library viewer** where you can preview, customize, and copy all sections.

---

## 1. Overview & Goals

1. **Standardized Section Library**:
   - Extract and standardize every section pattern catalogued in [`dev-tools/section_compendium.md`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/section_compendium.md) and [`dev-tools/content-styles.html`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/content-styles.html).
   - Package them into clean, modular HTML templates and parameter-injectable JavaScript renderers (supporting customizable slots like `{{TITLE}}`, `{{IMAGE}}`, `{{BENEFITS}}`, `{{FAQS}}`).

2. **Interactive Visual Section Viewer (`dev-tools/section-library.html`)**:
   - A dedicated interactive dev portal page showcasing **live, rendered previews** of all sections styled with the exact SuA Glow Tailwind classes, fonts, animations, and Lucide icons.
   - **Features**:
     - **Category Filter & Search**: Quickly navigate through Heroes, Explanations, Benefits, Timelines, Social Proof, FAQs, Philosophies, and Hubs.
     - **Viewport Switcher**: Preview sections in Desktop, Tablet, and Mobile views.
     - **1-Click Copy**: Copy pure static HTML or JavaScript injection code.
     - **Live Content Customizer**: Edit title, text, and images directly in a sidebar/modal and see the preview update in real-time.
     - **Standard Flow Page Builder**: Assemble a full treatment page following the **Standard Flow Blueprint** with 1-click export of a complete HTML page boilerplate.

---

## 2. Section Catalog & Modular Architecture

We will organize the sections into `components/sections/` and a unified script `components/section-library.js`:

| Category | Section ID | Description / Use Case |
| :--- | :--- | :--- |
| **1. Hero & Intro** | `hero-center` | Centered Hero with dark gradient, badge, headline, and dual CTAs |
| | `hero-left` | Left-aligned Hero with background imagery |
| | `hero-utility` | Minimalist Hero for legal and utility pages (`page-hero`) |
| | `hero-split` | Half-text, half-image split hero layout |
| **2. Explanations** | `what-is-standard` | 2-column explanation with philosophy subtext, bullet lists, and image card |
| | `how-it-works` | Step-by-step technological process explanation |
| | `treatment-areas` | Targetable facial and body zones with visual badge cards |
| | `treatment-modes` | Ultrasound / energy / frequency mode specification cards |
| **3. Benefits & Expectations** | `treatment-benefits` | 3/4-column icon-driven benefits grid |
| | `expect-timeline` | Step-by-step patient experience journey (Prep -> Procedure -> Recovery) |
| | `why-sua` | SuA Glow value proposition / differentiator banner |
| **4. Social Proof & Results** | `before-after-gallery` | Before & After photo comparison grid with disclaimer |
| | `testimonials-carousel` | Patient glow stories and review cards with 5-star badges |
| | `clinical-cases` | Scientific evidence and clinical case breakdown |
| **5. Guides & FAQs** | `faq-accordion` | Interactive collapsible FAQ accordion with search/filter |
| | `treatment-guide` | Pre & post-treatment aftercare instruction cards |
| | `cta-booking-banner` | High-converting consultation booking callout section |
| | `financing-widget` | Payment plan and financing banner |
| **6. Philosophy & Trust** | `philosophy-block` | Seoul aesthetic philosophy editorial section |
| | `medical-oversight` | Sophia Yang, PA-C & Dr. Adam Yang MD physician oversight badge banner |
| | `k-beauty-approach` | Korean beauty cellular health & natural harmony block |
| **7. Hubs & Category Grids** | `treatment-hub-grid` | Responsive cards grid linking out to individual treatment pages |

---

## 3. Implementation Details

### File Additions & Updates

#### `[NEW]` [components/section-library.js](file:///Users/mw/Sites/SuAGlow/dev-site/components/section-library.js)
- Contains dictionary of all template definitions with metadata, default props, and HTML generator functions:
  ```javascript
  export const SECTION_LIBRARY = {
    'hero-center': {
      name: 'Standard Centered Hero',
      category: 'hero',
      defaultProps: { ... },
      render: (props) => `...`
    },
    'what-is-standard': { ... },
    // ... all sections
  };
  ```
- Exposes helper methods:
  - `renderSection(id, props)`: Returns ready-to-inject HTML string.
  - `injectSection(targetElement, id, props)`: Injects section and initializes any required Lucide icons or event listeners.
  - `generatePageTemplate(sectionList, globalProps)`: Generates complete HTML boilerplate for a new page.

#### `[NEW]` [components/sections/](file:///Users/mw/Sites/SuAGlow/dev-site/components/sections/)
- Individual raw HTML snippets for direct copy-pasting or server-side includes:
  - `hero-center.html`
  - `what-is-standard.html`
  - `treatment-benefits.html`
  - `expect-timeline.html`
  - `why-sua.html`
  - `faq-accordion.html`
  - `medical-oversight.html`
  - `cta-banner.html`
  - `treatment-areas.html`
  - `before-after-gallery.html`
  - `treatment-hub-grid.html`

#### `[NEW]` [dev-tools/section-library.html](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/section-library.html)
- Interactive visual explorer featuring:
  - **Sidebar Navigation**: Filter by category, search by name, or jump directly to any section.
  - **Main Canvas**: Live rendered preview in high-fidelity with toggle for Desktop (100%), Tablet (768px), and Mobile (375px) viewports.
  - **Actions Toolbar**:
    - **Copy HTML**: Copy formatted HTML with placeholder comments.
    - **Copy JS Injection**: Copy `injectSection()` code.
    - **Customize**: Sidebar form to live-edit headlines, body copy, and image URLs.
  - **Page Builder Tab**:
    - Select standard blueprint: `[Hero] -> [What Is] -> [Benefits] -> [Expectations] -> [Why SuA] -> [Medical Oversight] -> [FAQ] -> [CTA]`.
    - 1-Click "Download / Copy Page HTML" to generate an entire new treatment page instantly.

#### `[MODIFY]` [dev-tools/dev.html](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/dev.html) & [dev-tools/content-styles.html](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/content-styles.html)
- Add quick-access cards and navigation links to the new **Interactive Section Library**.

---

## 4. Verification Plan

### Manual Verification
1. **Interactive Viewer Testing**:
   - Open [`dev-tools/section-library.html`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/section-library.html) in the browser.
   - Test category filtering, search, and responsive viewport switcher (Desktop / Tablet / Mobile).
   - Test live content customization and ensure previews update seamlessly.
   - Verify "Copy HTML" and "Copy JS" buttons copy valid code to the clipboard.
2. **Page Generator Testing**:
   - Use the **Standard Flow Page Builder** to generate a test page snippet.
   - Verify that all Lucide icons and Tailwind styles render properly without broken classes.
3. **Cross-Link Testing**:
   - Verify navigation links from [`dev-tools/dev.html`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/dev.html) and [`dev-tools/content-styles.html`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/content-styles.html) work cleanly.
