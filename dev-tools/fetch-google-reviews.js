// fetch-google-reviews.js
// 
// This script fetches both newest and most helpful reviews from Google Places API,
// deduplicates them, and saves them to assets/data/google-reviews.json for the frontend.

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyAj9QsAUWQ9M2hWg05WHfecsRq__tbk2pU';
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJAZ6jKhphFI0RkQGEpYmxGtg';

const OUTPUT_FILE = path.join(__dirname, '../assets/data/google-reviews.json');

function fetchEndpoint(sort) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&reviews_sort=${sort}&key=${API_KEY}`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.status === 'OK' && parsed.result && parsed.result.reviews) {
                        resolve(parsed.result.reviews);
                    } else {
                        resolve([]);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    try {
        console.log('Fetching newest and relevant reviews from Google API...');
        const [newestReviews, relevantReviews] = await Promise.all([
            fetchEndpoint('newest'),
            fetchEndpoint('most_relevant')
        ]);

        const reviewMap = new Map();

        // Add newest first
        newestReviews.forEach(r => {
            const key = `${r.author_name}-${r.time}`;
            if (!reviewMap.has(key)) {
                reviewMap.set(key, r);
            }
        });

        // Add most relevant
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

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allReviews, null, 2));
        console.log(`Successfully saved ${allReviews.length} unique Google reviews to ${OUTPUT_FILE}`);
        allReviews.forEach((r, idx) => {
            console.log(`${idx + 1}. ${r.author_name} (${r.rating}★) - ${r.relative_time_description}`);
        });

    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

main();
