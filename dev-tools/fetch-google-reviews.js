// fetch-google-reviews.js
// 
// Fetches overall rating, user_ratings_total, and newest/most helpful reviews from Google Places API.
// Deduplicates reviews and saves the complete dataset to assets/data/google-reviews.json for dynamic frontend rendering.

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyAj9QsAUWQ9M2hWg05WHfecsRq__tbk2pU';
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJAZ6jKhphFI0RkQGEpYmxGtg';

const OUTPUT_FILE = path.join(__dirname, '../assets/data/google-reviews.json');

function fetchEndpoint(sort) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&reviews_sort=${sort}&key=${API_KEY}`;
    return new Promise((resolve) => {
        const req = https.get(url, { timeout: 8000 }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.status === 'OK' && parsed.result) {
                        resolve(parsed.result);
                    } else {
                        console.warn(`[Google Places] Status: ${parsed.status}`, parsed.error_message || '');
                        resolve(null);
                    }
                } catch (e) {
                    console.warn('[Google Places] Parse error:', e.message);
                    resolve(null);
                }
            });
        });

        req.on('error', (err) => {
            console.warn('[Google Places] Network error:', err.message);
            resolve(null);
        });

        req.on('timeout', () => {
            req.destroy();
            console.warn('[Google Places] Request timed out.');
            resolve(null);
        });
    });
}

async function main() {
    try {
        console.log('Fetching live Google Reviews & Rating metrics from Google Places API...');
        const [newestResult, relevantResult] = await Promise.all([
            fetchEndpoint('newest'),
            fetchEndpoint('most_relevant')
        ]);

        const baseResult = newestResult || relevantResult;

        if (!baseResult) {
            console.log('Could not retrieve new Google data. Retaining existing cache.');
            return;
        }

        const rating = baseResult.rating || 5.0;
        const totalReviews = baseResult.user_ratings_total || 122;

        const newestReviews = newestResult?.reviews || [];
        const relevantReviews = relevantResult?.reviews || [];

        const reviewMap = new Map();

        // Add newest reviews first
        newestReviews.forEach(r => {
            const key = `${r.author_name}-${r.time}`;
            if (!reviewMap.has(key)) {
                reviewMap.set(key, r);
            }
        });

        // Add most relevant reviews
        relevantReviews.forEach(r => {
            const key = `${r.author_name}-${r.time}`;
            if (!reviewMap.has(key)) {
                reviewMap.set(key, r);
            }
        });

        const allReviews = Array.from(reviewMap.values())
            .sort((a, b) => (b.time || 0) - (a.time || 0))
            .map(r => ({
                author_name: r.author_name,
                profile_photo_url: r.profile_photo_url,
                rating: r.rating,
                text: r.text,
                time: r.time,
                relative_time_description: r.relative_time_description
            }));

        const outputData = {
            place_name: baseResult.name || 'SuA Glow',
            rating: Number(rating).toFixed(1),
            user_ratings_total: totalReviews,
            formatted_badge: `${Number(rating).toFixed(1)} · ${totalReviews} reviews`,
            last_updated: new Date().toISOString(),
            reviews: allReviews
        };

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2));
        console.log(`Successfully updated Google Reviews: Rating ${outputData.rating}★ | Total Reviews: ${outputData.user_ratings_total} (${allReviews.length} detailed reviews stored)`);
        return outputData;

    } catch (error) {
        console.error('Error during Google Reviews fetch:', error);
    }
}

// Allow being called directly or as an imported module
if (require.main === module) {
    main();
} else {
    module.exports = main;
}
