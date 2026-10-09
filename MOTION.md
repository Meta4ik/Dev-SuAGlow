# SuA K-Glow Motion & Animation Architecture Guide

This guide documents the motion stack installed in the repository for **Codex**, **IDEs** (VS Code, Cursor, Antigravity), and human developers.

---

## 1. Installed Libraries

The project dependencies are recorded in [`package.json`](file:///Users/mw/Sites/SuAGlow/dev-site/package.json) and installed in `node_modules/`:
- **`gsap@^3.15.0`** (`node_modules/gsap`): Industry-standard timeline and scroll-trigger animation engine.
- **`lenis@^1.3.26`** (`node_modules/lenis`): Smooth momentum scrolling physics engine.
- **`motion.js`** ([`motion.js`](file:///Users/mw/Sites/SuAGlow/dev-site/motion.js)): Reusable vanilla helper library exposing `window.SuAMotion`.
- **`motion.css`** ([`motion.css`](file:///Users/mw/Sites/SuAGlow/dev-site/motion.css)): Reusable CSS animations (shimmer foil, spotlights, 3D tilt, split-sliders).

---

## 2. Interactive Reference & Showcase

The live interactive reference showcasing every effect is available at:
👉 **[`dev-tools/motion-showcase.html`](file:///Users/mw/Sites/SuAGlow/dev-site/dev-tools/motion-showcase.html)** (Served locally at `http://localhost:8088/dev-tools/motion-showcase.html`).

---

## 3. How to Use Effects on Any Treatment Page

To add motion effects to any page (e.g., `dep.html`, `korean-scalp-hair-rejuvenation.html`, `glass-skin-hydration-glow.html`):

### Step 1: Include the Scripts in `<head>` or before `</body>`
```html
<!-- Styles -->
<link rel="stylesheet" href="motion.css">

<!-- GSAP + ScrollTrigger + Lenis -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js"></script>

<!-- SuA Motion Engine -->
<script src="motion.js"></script>
```

### Step 2: Use the Plug-and-Play HTML Classes & Attributes

#### A. Lenis Smooth Momentum Scrolling
Add one line to initialize smooth scroll on the page:
```javascript
<script>
  document.addEventListener("DOMContentLoaded", () => {
    SuAMotion.initSmoothScroll({ duration: 1.2 });
  });
</script>
```

#### B. Metallic Foil Shimmering Text (`ShinyText` from React Bits)
```html
<h1 class="shiny-text font-serif text-5xl">
  Korean Glass Skin Protocol
</h1>
```

#### C. Radial Cursor Spotlight Card (`SpotlightCard` from React Bits)
```html
<div class="spotlight-card p-8">
  <h3 class="text-white text-xl font-bold">LDM Triple Ultrasound</h3>
  <p class="text-white/70">Cellular collagen activation...</p>
</div>
```
*(Automatically tracks mouse coordinates via `motion.js`)*

#### D. 3D Perspective Tilt Card (`TiltedCard` from React Bits)
```html
<div class="tilt-card-container">
  <div class="tilt-card p-8">
    <div class="tilt-card-glare"></div>
    <h3>3D Gyro Interactive Card</h3>
  </div>
</div>
```

#### E. Magnetic VIP Button (`Magnet` from React Bits)
```html
<button data-magnetic class="px-8 py-4 rounded-full bg-[#e5b869] text-black font-bold">
  Reserve VIP Consultation &rarr;
</button>
```

#### F. Animated Rolling Numbers (`Counter` from React Bits / GSAP)
```html
<div id="statsSection">
  <span class="counter-number" data-target="99.4">0</span>%
  <span class="counter-number" data-target="5240">0</span>+
</div>
```

#### G. Before & After Split-Screen Comparison Slider
```html
<div id="baSlider" class="ba-slider-container w-full h-[450px]">
  <!-- After Image (Full background) -->
  <img src="assets/after.jpg" class="w-full h-full object-cover">
  
  <!-- Before Image (Clipped by polygon) -->
  <div class="ba-before-image">
    <img src="assets/before.jpg" class="w-full h-full object-cover">
  </div>
  
  <!-- Handle -->
  <div id="baHandle" class="absolute top-0 bottom-0 w-1 bg-[#e5b869]"></div>
</div>
```

#### H. Scroll-Driven Read-Along Text Highlighter
```html
<div id="readAlongContainer">
  <p id="manifestoParagraph" class="text-3xl font-serif">
    Your text illuminates word by word as the user scrolls past.
  </p>
</div>
```

---

## 4. IDE & Codex Autocomplete Support

- Because `gsap` and `lenis` are declared in `package.json` with TypeScript typings (`d.ts`), IDEs and Codex will provide code completions, parameter suggestions, and JSDoc documentation automatically.
- `motion.js` is written as a Universal Module (UMD) with full JSDoc annotations, so `SuAMotion.` methods autocomplete in modern code editors.
