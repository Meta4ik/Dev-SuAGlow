function initReviews() {
    const placeholder = document.getElementById('google-reviews-placeholder');
    if (!placeholder) return;

    // Fetch the cached reviews
    fetch('assets/data/google-reviews.json')
        .then(response => {
            if (!response.ok) throw new Error('Could not load reviews');
            return response.json();
        })
        .then(reviews => {
            renderReviews(reviews, placeholder);
        })
        .catch(error => {
            console.error('Error loading Google Reviews:', error);
        });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviews);
} else {
    initReviews();
}

function renderReviews(reviews, container) {
    if (!reviews || reviews.length === 0) return;

    let html = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    `;

    reviews.forEach((review, index) => {
        // Add staggered animation delay based on position
        const delayClass = index % 3 === 0 ? '' : (index % 3 === 1 ? 'delay-100' : 'delay-200');
        // Truncate long text if needed
        const reviewText = review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text;
        
        // Generate stars
        let starsHtml = '';
        for (let i = 0; i < review.rating; i++) {
            starsHtml += `<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        html += `
            <div class="product-card glow-card p-8 bg-[#F6F7F8] animate-on-scroll fade-up ${delayClass}" style="--glow-color: #AA987C;">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${review.profile_photo_url}" alt="${review.author_name}" class="w-12 h-12 rounded-full object-cover">
                    <div class="text-left">
                        <h4 class="font-bold text-near-black text-sm">${review.author_name}</h4>
                        <div class="flex items-center gap-1 mt-1">
                            ${starsHtml}
                        </div>
                    </div>
                    <div class="ml-auto">
                        <i data-lucide="google" class="w-5 h-5 text-gray-400"></i>
                    </div>
                </div>
                <p class="font-body text-charcoal/80 text-sm leading-relaxed text-left italic mb-6">
                    "${reviewText}"
                </p>
                <div class="mt-auto text-left text-[10px] text-taupe/60 font-bold uppercase tracking-[0.1em] italic">
                    ${review.relative_time_description}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
    
    // Set up a local intersection observer so the newly injected elements animate properly
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Re-initialize lucide icons for the newly added HTML
    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}
