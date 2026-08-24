// fetch-google-reviews.js
// 
// INSTRUCTIONS:
// 1. Run `npm install axios` (if not already installed)
// 2. Set the variables below or pass them as environment variables
// 3. Run with `node dev-tools/fetch-google-reviews.js`
// 
// This script fetches the top 5 most helpful reviews from Google Places API
// and saves them to assets/data/google-reviews.json for the frontend to render.

const fs = require('fs');
const path = require('path');
const https = require('https');

// Replace these with your actual credentials when ready
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyAj9QsAUWQ9M2hWg05WHfecsRq__tbk2pU';
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJAZ6jKhphFI0RkQGEpYmxGtg';

// Output path
const OUTPUT_FILE = path.join(__dirname, '../assets/data/google-reviews.json');

if (API_KEY === 'YOUR_API_KEY_HERE' || PLACE_ID === 'YOUR_PLACE_ID_HERE') {
    console.error("ERROR: Please provide your Google API Key and Place ID in the script or as environment variables.");
    process.exit(1);
}

// Google Places API Details endpoint
const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&reviews_sort=most_relevant&key=${API_KEY}`;

console.log('Fetching reviews from Google API...');

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            
            if (parsedData.status !== 'OK') {
                console.error('Google API Error:', parsedData.error_message || parsedData.status);
                return;
            }

            const reviews = parsedData.result.reviews || [];
            
            // Format and clean up the data for our frontend
            const formattedReviews = reviews.map(review => ({
                author_name: review.author_name,
                profile_photo_url: review.profile_photo_url,
                rating: review.rating,
                text: review.text,
                time: review.time,
                relative_time_description: review.relative_time_description
            }));

            // Save to JSON file
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formattedReviews, null, 2));
            console.log(`Successfully saved ${formattedReviews.length} reviews to ${OUTPUT_FILE}`);

        } catch (e) {
            console.error('Error parsing Google API response:', e.message);
        }
    });

}).on('error', (e) => {
    console.error('Failed to make request:', e.message);
});
