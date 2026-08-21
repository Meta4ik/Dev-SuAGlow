# Integrate Dynamic Instagram Feed

This document outlines the approach to dynamically pull in Instagram posts from `@suaglowkbeauty` into the website.

Because Instagram strictly protects its data, we cannot simply fetch posts directly from the frontend using Javascript without exposing sensitive security tokens that eventually expire. 

## Two Architectural Options

### Option 1: Third-Party Widget (Highly Recommended)
We use a dedicated service like **Elfsight**, **LightWidget**, or **SnapWidget**. 
- **How it works**: You link your Instagram account on their platform, design the grid layout you want on their site, and they give us a small snippet of code. I simply paste that code into the website.
- **Pros**: Very fast and robust. They handle all the complex API token refreshing, caching, and maintenance automatically on their servers. 
- **Cons**: Free tiers often include a small watermark (e.g., "Powered by Elfsight"), and removing it requires a small monthly subscription (usually ~$5-10/mo) directly to them.

### Option 2: Custom API via Vercel Serverless Functions
Since your site is already using Vercel for deployment, we can build a custom backend function specifically for Instagram.
- **How it works**: We create an `api/instagram.js` file that runs securely on Vercel's backend servers. You will need to create a Meta Developer Account, generate an Instagram API token, and save it in Vercel's Environment Variables. Our frontend will call our new Vercel API to get the posts, and we will build the grid layout ourselves using HTML and Tailwind.
- **Pros**: 100% custom design, no third-party branding, no extra monthly subscriptions.
- **Cons**: High setup complexity. You will need to click through the Meta Developer portal to generate tokens. Additionally, Instagram tokens expire every 60 days, so we will need to implement a complex automated token-refresh script, or you will have to manually go into Meta and Vercel to regenerate it every 2 months.

## Next Steps
When you are ready to proceed:
1. Review the options above.
2. If you choose **Option 1**, sign up for a service (like Elfsight), link your Instagram, generate the widget code, and paste it to me here. I will integrate it into the site.
3. If you choose **Option 2**, let me know and we will begin the process of setting up the Meta Developer API keys and the Vercel backend function.
