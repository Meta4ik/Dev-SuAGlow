/**
 * Developer No-Cache Script
 * 
 * Instructions: Include this script in your HTML <head> for development.
 * <script src="nocache.js"></script>
 * 
 * It will automatically append a timestamp to local CSS and JS files
 * to bypass browser caching, ensuring you always see the latest changes.
 */

(function () {
    // Optional: Only run if on localhost or file:// protocol
    // if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' && window.location.protocol !== 'file:') {
    //     return;
    // }

    console.log('🚧 Dev Mode: No-Cache enabled for local assets');

    // 1. Add anti-caching meta tags to the document head to prevent HTML caching
    var metaTags = [
        { httpEquiv: 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
        { httpEquiv: 'Pragma', content: 'no-cache' },
        { httpEquiv: 'Expires', content: '0' }
    ];

    metaTags.forEach(function (tag) {
        var meta = document.createElement('meta');
        meta.httpEquiv = tag.httpEquiv;
        meta.content = tag.content;
        document.head.appendChild(meta);
    });

    // 2. Function to add cache busters to stylesheets and other assets
    function applyCacheBusting() {
        var ts = new Date().getTime();

        // Update Stylesheets (Forces re-download of CSS)
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        links.forEach(function (link) {
            // Ignore external CDNs (Google Fonts, Tailwind CDN, etc.)
            if (link.href && !link.href.includes('googleapis') && !link.href.includes('tailwindcss.com')) {
                try {
                    var url = new URL(link.href, window.location.href);
                    // Only apply to local/same-origin assets
                    if (url.origin === window.location.origin || window.location.protocol === 'file:') {
                        url.searchParams.set('nocache', ts);
                        link.href = url.toString();
                    }
                } catch (e) {
                    console.log('Error parsing URL for link:', link.href);
                }
            }
        });
    }

    // Apply immediately to catch things already in the DOM
    applyCacheBusting();

    // Also apply when the DOM is fully loaded to catch body elements
    document.addEventListener('DOMContentLoaded', applyCacheBusting);

})();
