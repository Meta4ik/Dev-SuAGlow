# Google Ads & Scalp Reset Campaign Tracking Integration

This plan sets up Google Ads conversion tracking and Google Tag (`gtag.js`) infrastructure across the SuA Glow website, specifically configured for the **Korean Scalp & Hair Rejuvenation ("Scalp Reset")** campaign staged in [internal/google-ads/index.html](file:///Users/mw/Sites/SuAGlow/dev-site/internal/google-ads/index.html).

## User Review Required

> [!IMPORTANT]
> The tracking script will be initialized with a configurable setup object. You can replace the placeholder Google Ads Conversion ID (`AW-XXXXXXXXXX`) and Conversion Labels in [google-tag.js](file:///Users/mw/Sites/SuAGlow/dev-site/google-tag.js) at any time.

---

## Proposed Changes

### Tracking Architecture & Script Infrastructure

#### [NEW] [`google-tag.js`](file:///Users/mw/Sites/SuAGlow/dev-site/google-tag.js)
Create a centralized, lightweight tracking manager that:
- Injects the official Google Tag (`gtag.js`) into the `<head>` asynchronously.
- Stores centralized configuration for:
  - `GOOGLE_ADS_ID` (e.g., `AW-XXXXXXXXXX`)
  - `GA4_MEASUREMENT_ID` (e.g., `G-XXXXXXXXXX`)
  - Conversion Labels for key events (`booking_click`, `phone_call`, `form_submit`, `scalp_reset_lead`).
- Automatically attaches event listeners to:
  1. **Aesthetic Record / Boulevard Booking Links**: Captures all clicks on `suaglow.myaestheticrecord.com/online-booking/` and sends `conversion` + `book_appointment` events.
  2. **Click-to-Call Buttons**: Captures all `tel:4699368888` taps/clicks and fires `phone_call_lead` conversions.
  3. **Form Submissions**: Captures contact and consultation form submissions.
- Exposes helper methods `window.trackGoogleAdsConversion(action, params)` for custom button/interactive tracking.

---

### Core Scripts & Integration

#### [MODIFY] [`script.js`](file:///Users/mw/Sites/SuAGlow/dev-site/script.js)
- Ensure auto-initialization from `google-tag.js` triggers cleanly on DOM load without delaying page render or Core Web Vitals.

#### [MODIFY] [`korean-scalp-hair-rejuvenation.html`](file:///Users/mw/Sites/SuAGlow/dev-site/korean-scalp-hair-rejuvenation.html)
- Include `<script src="google-tag.js"></script>` in `<head>`.
- Add explicit tracking attributes (e.g., `data-track-conversion="scalp_reset_booking"`) to the hero and section consultation buttons.

---

### Conversion Destination & URL Routing

#### [NEW] [`thank-you.html`](file:///Users/mw/Sites/SuAGlow/dev-site/thank-you.html)
- Create a dedicated, beautifully styled SuA Glow "Thank You / Confirmation" page for destination-based conversion tracking (e.g., after contact/consultation form submissions).
- Fires `conversion` event on page load for form submission tracking.

#### [MODIFY] [`vercel.json`](file:///Users/mw/Sites/SuAGlow/dev-site/vercel.json)
- Add rewrite rule so that `/scalp-reset` cleanly routes to `/korean-scalp-hair-rejuvenation.html` as referenced in the Google Ads staging doc.

---

## Verification Plan

### Automated / Browser Verification
- Load `korean-scalp-hair-rejuvenation.html` and `thank-you.html` locally to verify `gtag` initialization, `window.dataLayer`, and script syntax.
- Simulate clicks on:
  - Scalp booking button (`suaglow.myaestheticrecord.com`) -> Verify console / `dataLayer` logs event `conversion` with parameters.
  - Phone link (`tel:4699368888`) -> Verify `phone_call_lead` conversion triggers.
- Check that no console errors are thrown and no layout/styling regressions occur.
