# Google Reviews Integration Guide

This document outlines the strategy for adding automated Google Reviews to the SuA Glow website, the requirements from Google Cloud, and alternative options.

## Option 1: Automated Build-Step Script (Recommended)

This is the most SEO-friendly and performant way to show Google Reviews on the site.

### How it Works
1. A Node.js script (`fetch-google-reviews.js`) runs securely in the background (e.g., via GitHub Actions).
2. It uses your Google Place ID and a secret Google API Key to call the Google Places API.
3. It fetches your 5 most helpful reviews and saves them to a static file (`assets/data/google-reviews.json`).
4. The frontend (`script.js`) loads this JSON file and dynamically renders beautiful "glow-card" review boxes into the site.

### Requirements from Google Cloud
To use the Google Places API, Google strictly requires a **credit card on file** to verify identity and prevent spam accounts. 

**Will you be charged? No.**
- Google provides every account with a **$200 free monthly credit** specifically for Maps and Places APIs.
- Fetching reviews once a week (or even daily) costs a fraction of a penny per month.
- Your usage will always be well under $1, meaning the $200 free credit covers it completely. You will never see a charge on your card for this script.

### Setup Instructions
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., "SuA Glow Website").
3. Set up a Billing Account and add your credit card.
4. Go to "APIs & Services" > "Library" and enable the **Places API (New)**.
5. Go to "Credentials" and "Create Credentials" > "API Key".
6. Keep this API Key secret. We will save it in GitHub Repository Secrets.
7. Find your Google Place ID using the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).

---

## Option 2: Third-Party Widget (Alternative)

If you are uncomfortable putting a credit card into Google Cloud, we can use a third-party review widget.

### How it Works
1. You sign up for a free service like **Elfsight**, **Trustmary**, or **WidgetPack**.
2. You connect your Google Business account to their platform.
3. They provide a snippet of HTML/JS code that we paste into the SuA Glow website.

### Pros & Cons
- **Pros:** Does not require a Google Cloud account or API key. Can bypass the 5-review limit and show all your reviews. Updates automatically.
- **Cons:** Free tiers usually include watermarks (e.g., "Powered by Elfsight"). The design cannot be customized to perfectly match the SuA Glow brand unless you pay for a monthly subscription on their platform. Page load speed may be slightly impacted by loading an external iframe/script.
