function initReviews() {
    const placeholder = document.getElementById('google-reviews-placeholder');
    const badgeElements = document.querySelectorAll('[data-google-badge-text], #google-reviews-badge-text, .review-text-gradient, [data-google-reviews-count], [data-google-rating]');

    // Only proceed if there is a placeholder or badge element on the page
    if (!placeholder && badgeElements.length === 0) return;

    // Fetch the cached reviews & live metadata
    fetch('assets/data/google-reviews.json')
        .then(response => {
            if (!response.ok) throw new Error('Could not load reviews');
            return response.json();
        })
        .then(data => {
            // Support both object and legacy array format
            const reviews = Array.isArray(data) ? data : (data.reviews || []);
            const rating = (data && data.rating) ? data.rating : '5.0';
            const totalCount = (data && data.user_ratings_total) ? data.user_ratings_total : (reviews.length || 122);

            // Dynamically update badges across the page
            updateReviewBadges(rating, totalCount);

            if (placeholder) {
                renderReviews(reviews, placeholder);
            }
        })
        .catch(error => {
            console.error('Error loading Google Reviews:', error);
        });
}

function updateReviewBadges(rating, totalCount) {
    // 1. Badge text ("5.0 · 122 reviews")
    const badgeTextEls = document.querySelectorAll('[data-google-badge-text], #google-reviews-badge-text, .review-text-gradient');
    badgeTextEls.forEach(el => {
        el.textContent = `${rating} · ${totalCount} reviews`;
    });

    // 2. Standalone review count numbers ("122")
    const countEls = document.querySelectorAll('[data-google-reviews-count]');
    countEls.forEach(el => {
        el.textContent = `${totalCount}`;
    });

    // 3. Standalone rating display ("5.0")
    const ratingEls = document.querySelectorAll('[data-google-rating]');
    ratingEls.forEach(el => {
        if (el.textContent.includes('/')) {
            el.textContent = `${rating} / 5.0`;
        } else {
            el.textContent = `${rating}`;
        }
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

    const latestReviews = reviews.filter(r => r.text && r.text.trim().length > 0).slice(0, 9);

    latestReviews.forEach((review, index) => {
        // Add staggered animation delay based on position
        const delayClass = index % 3 === 0 ? '' : (index % 3 === 1 ? 'delay-100' : 'delay-200');
        // Truncate long text if needed
        const reviewText = review.text.length > 220 ? review.text.substring(0, 220) + '...' : review.text;
        
        // Generate stars
        let starsHtml = '';
        for (let i = 0; i < review.rating; i++) {
            starsHtml += `<svg class="w-4 h-4 text-warm-gold fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        }

        html += `
            <div class="product-card glow-card p-10 animate-on-scroll fade-up ${delayClass} shadow-2xl flex flex-col justify-between" style="--glow-color: #AA987C;">
                <div>
                    <div class="flex items-center gap-4 mb-6">
                        <img src="${review.profile_photo_url}" alt="${review.author_name}" class="w-12 h-12 rounded-full object-cover border border-white/10" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=22252a&color=AA987C&bold=true';">
                        <div class="text-left">
                            <h4 class="font-bold text-white text-sm tracking-widest">${review.author_name}</h4>
                            <div class="flex items-center gap-1 mt-1">
                                ${starsHtml}
                            </div>
                        </div>
                        <div class="ml-auto">
                            <i data-lucide="google" class="w-5 h-5 text-white/50"></i>
                        </div>
                    </div>
                    <p class="font-body text-white/70 text-sm leading-relaxed font-light text-left italic mb-6">
                        "${reviewText}"
                    </p>
                </div>
                <div class="pt-4 border-t border-white/5 text-left text-[10px] text-warm-gold/80 font-bold uppercase tracking-[0.1em] italic">
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

    // Bind mouse-tracking spotlight coordinates to newly rendered glow cards
    container.querySelectorAll('.glow-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Re-initialize lucide icons for the newly added HTML
    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}
