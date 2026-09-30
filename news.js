
// SuA Glow "In The News & Media" Engine
// To add new articles, simply add an entry to the ARTICLES array below.

const ARTICLES = [
    {
        id: "wsj-rejuran-korea",
        title: "\"Women Are Flying to South Korea in Droves for This Painful Beauty Injectable.\"",
        publication: "The Wall Street Journal",
        date: "2024",
        category: "K-Beauty Science",
        tag: "Rejuran & Polynucleotides",
        excerpt: "A deep dive into why Seoul has become the global epicenter for regenerative skin boosters and cellular rejuvenation.",
        url: "https://www.wsj.com/style/beauty/south-korea-beauty-anti-aging-treatment-rejuran-14b422c8",
        image: "https://images.wsj.net/im-85591170?width=700&size=2.019&pixel_ratio=2",
        featured: true
    },
    {
        id: "allure-salmon-sperm-facial",
        title: "How to Tell If Your \"Salmon Sperm Facial\" Is Legit Or a Disaster In Waiting",
        publication: "Allure Magazine",
        date: "2025",
        category: "K-Beauty Science",
        tag: "PDRN & Salmon DNA",
        excerpt: "Allure breaks down the differences between salmon DNA treatments, medical-grade PDRN, and which protocols are legal and safe in the US.",
        url: "https://www.allure.com/story/salmon-sperm-injections-versus-facials",
        image: "https://media.allure.com/photos/689dfa20bcd446df31bba247/16:9/w_1280,c_limit/salmon-sperm-injections-versus-facials.jpg",
        featured: false
    },
    {
        id: "vogue-skin-boosters",
        title: "Everything You Need to Know About Skin Boosters",
        publication: "Vogue",
        date: "2025",
        category: "Skin Longevity",
        tag: "Hyaluronic Boosters",
        excerpt: "Touted as injectable moisturizers and a fundamental game-changer, experts break down how micro-hydrators elevate the skin matrix.",
        url: "https://www.vogue.com/article/skin-booster",
        image: "https://assets.vogue.com/photos/685da32a450be9e1937566cf/16:9/w_1280,c_limit/GS1879119.jpg",
        featured: false
    },
    {
        id: "womens-health-botox-acne",
        title: "How Dermatologists Are Using Microdroplets of Botox to Treat Acne Breakouts",
        publication: "Women's Health",
        date: "2026",
        category: "Clinical Innovations",
        tag: "Micro-Toxin & Sebum Control",
        excerpt: "Doctors discover superficial microinfusion of neurotoxin reduces sebum output, shrinks enlarged pores, and stabilizes breakout-prone skin.",
        url: "https://www.womenshealthmag.com/beauty/a73320443/botox-acne-treatment/",
        image: "https://hips.hearstapps.com/hmg-prod/images/6eca2c79-1122-496e-8450-9941880931d4.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
        featured: false
    },
    {
        id: "elle-uk-skin-boosters",
        title: "'Skin Boosters', Explained: Are These Injectable Moisturisers Superior To Botox?",
        publication: "ELLE UK",
        date: "2026",
        category: "Skin Longevity",
        tag: "Bioremodelling",
        excerpt: "Why the aesthetics world is shifting from concealing wrinkles to enhancing natural skin quality, dermal density, and bounce.",
        url: "https://www.elle.com/uk/beauty/a70693302/best-skin-boosters/",
        image: "https://hips.hearstapps.com/hmg-prod/images/da88675b-f78b-4726-b2cb-1a67575c24bf.jpg?crop=1.00xw:0.752xh;0,0.180xh&resize=1200:*",
        featured: false
    },
    {
        id: "elle-us-sculptra",
        title: "Sculptra: Experts Explain Why This Beauty Treatment is Trending in 2025",
        publication: "ELLE Magazine",
        date: "2025",
        category: "Regenerative Aesthetics",
        tag: "PLLA Collagen Biostimulation",
        excerpt: "A deep look at biostimulators that spark fibroblasts to synthesize Type I collagen—restoring firmness and structure without the overfilled look.",
        url: "https://www.elle.com/beauty/health-fitness/a69018129/sculptra-beauty-treatment-trend-explained-2025/",
        image: "https://hips.hearstapps.com/hmg-prod/images/elm110125btysculptra-002-68efe03cd176a.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*",
        featured: false
    },
    {
        id: "newbeauty-radiesse-study",
        title: "Radiesse May Be Tackling a Deeper Layer of Sun Damage, Study Finds",
        publication: "NewBeauty",
        date: "2025",
        category: "Regenerative Aesthetics",
        tag: "CaHA Dermal Remodeling",
        excerpt: "Breakthrough clinical study reveals how calcium hydroxylapatite stimulates long-term elastin, proteoglycans, and structural skin renewal.",
        url: "https://www.newbeauty.com/view/radiesse-study-sun-damage-skin-structure",
        image: "https://radiesse.com/wp-content/uploads/2026/01/img-Kseniia-2-1024x1024.webp",
        featured: false
    },
    {
        id: "marie-claire-salmon-injections",
        title: "\"I Flew to Seoul to Try Salmon Sperm Injections for My Skin. 700 shots later, results speak for themselves.\"",
        publication: "Marie Claire",
        date: "2024",
        category: "K-Beauty Science",
        tag: "Seoul Clinic Trial",
        excerpt: "An editor's first-hand clinical experience with Seoul's most famous cellular skin treatment and its lasting radiance impact.",
        url: "https://www.marieclaire.com/rejuran-salmon-sperm-injections-korean-skincare-review/",
        image: "https://cdn.mos.cms.futurecdn.net/9hRgCkiP9xDQ49HknVJGsh-1536-80.jpg.webp",
        featured: false
    },
    {
        id: "elle-australia-kbeauty",
        title: "\"These Transformative K-Beauty Treatments Have Finally Landed In Australia. Kim K is a fan.\"",
        publication: "ELLE Australia",
        date: "2024",
        category: "K-Beauty Science",
        tag: "Global K-Aesthetics",
        excerpt: "Explaining the global explosion of Korean medical grade glass-skin treatments, exosome therapy, and advanced micro-infusions.",
        url: "https://www.elle.com.au/beauty/k-beauty-treatments-australia-28828",
        image: "https://api.photon.aremedia.net.au/wp-content/uploads/sites/6/2024/10/Landscape-1920-x-1080-21.jpg?resize=1640%2C922",
        featured: false
    }
];

function generateArticlesGrid(items) {
    return items.map((item, idx) => {
        const delayClass = idx % 3 === 1 ? 'delay-100' : (idx % 3 === 2 ? 'delay-200' : '');
        return `
            <article class="news-card group bg-white rounded-2xl border border-black/5 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-on-scroll fade-up ${delayClass}" data-category="${item.category}">
                <div>
                    <div class="h-60 overflow-hidden bg-gradient-to-br from-charcoal/5 to-charcoal/10 relative">
                        <img src="${item.image}" 
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                            alt="${item.publication}"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='assets/logo-main.webp'; this.className='w-1/2 h-auto mx-auto my-16 opacity-30 object-contain';">
                        <span class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 rounded-full text-near-black border border-black/5 shadow-sm">
                            ${item.tag}
                        </span>
                    </div>
                    <div class="p-8 pb-4">
                        <div class="flex items-center justify-between gap-4 mb-4">
                            <span class="heading-wide text-[11px] font-bold text-[#AA987C] tracking-[0.2em] uppercase">${item.publication}</span>
                            <span class="text-[11px] text-charcoal/40 font-mono tracking-wider">${item.date}</span>
                        </div>
                        <h3 class="text-lg font-bold leading-snug text-near-black mb-4 group-hover:text-[#AA987C] transition-colors line-clamp-2">
                            ${item.title}
                        </h3>
                        <p class="text-sm text-charcoal/70 leading-relaxed font-body mb-6 line-clamp-3">
                            ${item.excerpt}
                        </p>
                    </div>
                </div>
                <div class="p-8 pt-0">
                    <a href="${item.url}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-near-black border-b border-near-black/30 pb-1.5 hover:text-[#AA987C] hover:border-[#AA987C] transition-all">
                        <span>Read Full Feature</span>
                        <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </a>
                </div>
            </article>
        `;
    }).join('');
}

// SuA Glow "In The News" Component HTML
const NEWS_HTML = `
<!-- News Highlights & Media Coverage -->
<section id="news" data-nav-theme="dark" class="py-24 md:py-32 px-6 md:px-12 bg-[#F6F7F8]">
    <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="inline-block text-[11px] tracking-[0.35em] text-[#AA987C] uppercase font-bold mb-4">
                FOR EDUCATIONAL & INFORMATIONAL PURPOSES ONLY
            </span>
            <h1 class="heading-wide text-3xl md:text-5xl text-near-black mb-6 uppercase tracking-[0.15em]">
                Press & Media Coverage
            </h1>
            <div class="w-20 h-[1.5px] bg-[#AA987C]/40 mx-auto mb-8"></div>
            <p class="font-body text-charcoal/70 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                Curated third-party features and global aesthetic trends highlighting skin longevity, regenerative treatments, and modern skincare technology.
            </p>
            <p class="text-[11px] text-charcoal/40 tracking-wider max-w-2xl mx-auto mt-4 leading-relaxed font-light">
                *The articles below are provided for general educational and informational purposes only. Third-party editorial content does not constitute medical advice, diagnosis, or treatment endorsements.
            </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 animate-on-scroll fade-up">
            <button class="news-tab-btn active px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 bg-near-black text-white shadow-sm" data-filter="all">
                All Coverage (${ARTICLES.length})
            </button>
            <button class="news-tab-btn px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 bg-white text-charcoal/70 hover:text-near-black hover:bg-black/5 border border-black/5" data-filter="K-Beauty Science">
                K-Beauty Science
            </button>
            <button class="news-tab-btn px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 bg-white text-charcoal/70 hover:text-near-black hover:bg-black/5 border border-black/5" data-filter="Skin Longevity">
                Skin Longevity
            </button>
            <button class="news-tab-btn px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 bg-white text-charcoal/70 hover:text-near-black hover:bg-black/5 border border-black/5" data-filter="Regenerative Aesthetics">
                Regenerative Aesthetics
            </button>
            <button class="news-tab-btn px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 bg-white text-charcoal/70 hover:text-near-black hover:bg-black/5 border border-black/5" data-filter="Clinical Innovations">
                Clinical Innovations
            </button>
        </div>

        <!-- News Grid -->
        <div id="news-articles-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            ${generateArticlesGrid(ARTICLES)}
        </div>
    </div>
</section>
`;

// Setup interactive filter tab logic once injected
function initNewsFilters() {
    const tabButtons = document.querySelectorAll('.news-tab-btn');
    const articles = document.querySelectorAll('.news-card');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button state
            tabButtons.forEach(b => {
                b.classList.remove('active', 'bg-near-black', 'text-white');
                b.classList.add('bg-white', 'text-charcoal/70', 'border', 'border-black/5');
            });
            btn.classList.add('active', 'bg-near-black', 'text-white');
            btn.classList.remove('bg-white', 'text-charcoal/70', 'border', 'border-black/5');

            // Filter cards with smooth fade
            articles.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Auto-mount if script loaded after DOM or manually called
if (typeof window !== 'undefined') {
    window.initNewsFilters = initNewsFilters;
}
