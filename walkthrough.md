# Walkthrough - Google Ads & Scalp Reset Campaign Integration

We have integrated Google Ads tracking and refreshed all visual assets in the Google Ads staging hub with the authentic clinical hair loss assets from [`assets/google-ads-sua/hair/`](file:///Users/mw/Sites/SuAGlow/dev-site/assets/google-ads-sua/hair).

## Key Updates Made

### 1. New Hair Creative Assets Loaded into Google Ads Hub
Updated [`internal/google-ads/index.html`](file:///Users/mw/Sites/SuAGlow/dev-site/internal/google-ads/index.html) across all Ad Groups and galleries:
- **Ad Group 1 (Combined Demographic / Hair Loss & Rejuvenation)**:
  - Primary Visual: `BA Hiar Loss 1 Curly Hair.png` (Clinical Before & After)
  - Thumbnails: `BA Side Profile.png` & `Caucasian Hair Loss.png`
- **Ad Group 2 (Women's Thinning & Parting Focus)**:
  - Primary Visual: `Asian woman mature hair loss.png` (Mature Female Hair Loss & Parting)
  - Thumbnails: `Woman Blonde Asian Hair Loss seen on brush.png` (Excessive Shedding) & `Hair Loss of Top.png` (Crown Thinning)
- **Ad Group 3 (Men's Hairline & Crown Focus)**:
  - Primary Visual: `Male looking at Hair Loss.png` (Male Hairline & Crown Concern)
  - Thumbnails: `BA Side Profile.png` (Density Results) & `Hair Loss of Top.png` (Vertex Support)
- **1:1 Image Gallery Grid**:
  - Featured all 7 new high-resolution hair assets with colored accent borders, descriptive filenames, and full-resolution popup previews.
- **Interactive JavaScript Visual Angle Switcher (`adGroupVersions`)**:
  - Configured all 12 rotating visual angles across the 3 Ad Groups to load the new hair assets dynamically upon switching.

### 2. Live Target Landing Page Alignment
- Destination URLs across all 3 Ad Groups, SERP previews, and one-click copy blocks now point directly to `https://suaglow.com/korean-scalp-hair-rejuvenation.html`.

### 3. Tracking Script & Conversion Hub
- Created [`google-tag.js`](file:///Users/mw/Sites/SuAGlow/dev-site/google-tag.js) with automated conversion listeners for Aesthetic Record booking clicks, phone calls (`tel:`), and form inquiries.
- Created [`thank-you.html`](file:///Users/mw/Sites/SuAGlow/dev-site/thank-you.html) for destination conversion tracking.
- Configured clean URL rewrites in [`vercel.json`](file:///Users/mw/Sites/SuAGlow/dev-site/vercel.json).

---

## Verification
- `npm run build` executed cleanly.
- Verified image rendering and responsive layouts in [`internal/google-ads/index.html`](file:///Users/mw/Sites/SuAGlow/dev-site/internal/google-ads/index.html).
