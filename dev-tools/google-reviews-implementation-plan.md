# Google Reviews API Integration

This plan outlines the steps to implement Option 1: fetching and rendering Google Reviews using the Google Places API. This approach ensures high performance, SEO friendliness, and perfect brand alignment.

## User Review Required

> [!IMPORTANT]
> **API Credentials Needed**
> Before I can fully test the integration, you will need to provide two pieces of information:
> 1. **Google Place ID:** The unique identifier for your clinic on Google Maps.
> 2. **Google Places API Key:** The secret key from your Google Cloud Console.
> 
> *Would you like me to use mock data for now so we can design and build the frontend while you get these credentials, or do you have them ready?*

## Proposed Changes

### Backend Scripting

#### [NEW] `dev-tools/fetch-google-reviews.js`
A Node.js script that:
- Uses the `axios` or native `fetch` library to call the Google Places API.
- Extracts the top 5 most helpful reviews.
- Formats the data and writes it to `assets/data/google-reviews.json`.
- Can be run manually or set up to run automatically via GitHub Actions in the future.

#### [NEW] `assets/data/google-reviews.json`
A static JSON file that will hold the cached reviews to ensure the website loads instantly without hitting the Google API on every page view.

---

### Frontend Implementation

#### [NEW] `reviews.js`
A frontend component script that:
- Fetches `assets/data/google-reviews.json`.
- Dynamically generates HTML markup using your site's existing `glow-card` styling for each review.
- Injects the generated HTML into any element with `id="google-reviews-placeholder"`.

#### [MODIFY] `index.html` & `testimonials.html`
- Add `<div id="google-reviews-placeholder"></div>` where you want the reviews to appear.
- Add `<script src="reviews.js?v=1"></script>` to load the new component.

## Verification Plan

### Automated Tests
- Run `node dev-tools/fetch-google-reviews.js` (with mock or real credentials) to verify that `google-reviews.json` is generated correctly.

### Manual Verification
- Start the local HTTP server and navigate to `index.html` and `testimonials.html`.
- Verify that the reviews render beautifully as `glow-card` components.
- Check responsive behavior on mobile and desktop viewports.
