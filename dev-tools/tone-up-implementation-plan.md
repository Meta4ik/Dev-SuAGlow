# Tone-Up Layout Redesign Implementation Plan

This plan details the process for refactoring the `tone-up-facial.html` layout styles to match the structure and aesthetics of the `ldm-water-drop-lifting.html` page, as requested.

## User Review Required

> [!WARNING]  
> **Structural Refactor**: This will significantly alter the layout of `tone-up-facial.html`. While the content and copy will remain the same, the container styles, grid layouts, animation classes (`animate-on-scroll`), and image treatments will be aligned to mirror the LDM page perfectly.

## Proposed Changes

We will refactor each section in `tone-up-facial.html` to adopt the layout styles of `ldm-water-drop-lifting.html`:

### `tone-up-facial.html`

#### [MODIFY] tone-up-facial.html

**Section 1: Hero (`#hero`)**
- Implement the exact padding, margin, and grid structure from the LDM hero.
- Adopt the same image shadow treatments (`shadow-[0_20px_50px_rgba(0,0,0,0.4)]`, `shadow-2xl`, `border border-white/10`) for the right-side collage.
- Ensure `animate-on-scroll fade-right/fade-left` classes are applied to the text and image columns respectively.

**Section 2: The K-Beauty Approach (`#k-beauty-approach`)**
- Refactor to match LDM's `#philosophy` section layout.
- Wrap the image in the LDM specific container: `rounded-3xl overflow-hidden shadow-2xl bg-white p-4 border border-light-gray/50`.
- Apply `animate-on-scroll fade-right` to the image column and `fade-left` to the text column.

**Section 3: What Is Tone Up (`#what-is-tone-up`)**
- Refactor to match LDM's `#water-drop-lifting` section layout.
- The top header will be centered using `text-center max-w-3xl mx-auto space-y-4 animate-on-scroll fade-up`.
- The 2-column content will use `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`.
- Reformat the "Think:" list to use the `ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-charcoal/80"` structure from LDM.

**Section 4: Comparison Table & Additional Content**
- Ensure container widths (`max-w-7xl mx-auto`) and padding (`py-24 px-6 md:px-12`) exactly match the LDM container standards.
- Add `animate-on-scroll` classes to blocks that lack them.

## Verification Plan

### Automated Tests
- Run `npm run build` to compile the Tailwind CSS with the newly applied classes.

### Manual Verification
- Render the page locally in a browser.
- Verify scroll animations trigger correctly.
- Verify the layout visually mimics the LDM page's structure and rhythm.
