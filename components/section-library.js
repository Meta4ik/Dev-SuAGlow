/**
 * SuA Glow Injectable Section Library
 * Provides standardized templates, default data, and injection renderers for all site section patterns.
 */

export const STANDARD_FLOW_BLUEPRINT = [
    'hero-center',
    'what-is-standard',
    'treatment-benefits',
    'expect-timeline',
    'why-sua',
    'medical-oversight',
    'faq-accordion',
    'cta-booking-banner'
];

export const SECTION_CATEGORIES = [
    { id: 'all', label: 'All Sections' },
    { id: 'hero', label: '1. Hero & Intro' },
    { id: 'what-is', label: '2. Explanations' },
    { id: 'benefits', label: '3. Benefits & Timeline' },
    { id: 'social-proof', label: '4. Social Proof' },
    { id: 'faq-guides', label: '5. FAQ & Guides' },
    { id: 'philosophy', label: '6. Philosophy & Trust' },
    { id: 'hubs', label: '7. Hubs & Grids' },
    { id: 'outliers', label: '8. Outliers & Custom' }
];

/**
 * Resolves an asset path based on an optional prefix (e.g. '../' for dev-tools/)
 */
export function resolveAsset(path, prefix = '') {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
        return path;
    }
    // If prefix is specified and path is relative assets/
    if (prefix && path.startsWith('assets/')) {
        return prefix + path;
    }
    return path;
}

export const SECTION_LIBRARY = {
    'hero-center': {
        id: 'hero-center',
        name: 'Standard Centered Hero',
        category: 'hero',
        description: 'Centered dark gradient hero with brand badge, headline, paragraph, and dual CTAs.',
        defaultProps: {
            badgeText: 'Skin Health › Recovery & Repair',
            titleMain: 'Salmon PN',
            titleAccent: 'Facial',
            description: 'Korean-inspired cellular support. Leveraging Polynucleotides to help repair the skin barrier and improve resilience.',
            primaryCtaText: 'Book Consultation',
            primaryCtaLink: 'https://suaglow.myaestheticrecord.com/online-booking/',
            secondaryCtaText: 'Explore the Philosophy',
            secondaryCtaLink: '#what-is'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="hero" data-nav-theme="dark" class="relative min-h-[60vh] flex flex-col items-center justify-start text-center px-8 pt-[250px] overflow-hidden pb-32">
    <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-gradient-to-br from-near-black via-charcoal to-taupe/40"></div>
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-taupe/10 blur-[120px] rounded-full animate-pulse"></div>
    </div>
    <div class="relative z-10 max-w-5xl animate-on-scroll fade-up delay-200">
        <span class="badge-glass mb-12">${p.badgeText}</span>
        <h1 class="heading-wide text-4xl md:text-7xl mb-10 leading-[1.05] text-white [text-wrap:balance]">
            ${p.titleMain}<br><span class="text-warm-gold">${p.titleAccent}</span>
        </h1>
        <p class="text-sm md:text-xl text-white/70 max-w-3xl mx-auto mb-14 font-light tracking-wide leading-relaxed [text-wrap:balance]">
            ${p.description}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="${p.primaryCtaLink}" target="_blank" class="btn-primary">${p.primaryCtaText}</a>
            <a href="${p.secondaryCtaLink}" class="btn-outline-white">${p.secondaryCtaText}</a>
        </div>
    </div>
</section>`;
        }
    },

    'hero-left': {
        id: 'hero-left',
        name: 'Standard Left-Aligned Hero',
        category: 'hero',
        description: 'Left-aligned hero with full background imagery, gradient overlay, and CTA buttons.',
        defaultProps: {
            badgeText: 'Advanced Korean Technology',
            titleMain: 'DEP Needleless',
            titleAccent: 'Infusion',
            description: 'DermoElectroPoration® technology delivers medical-grade serums deep into the dermis with zero needles and zero downtime.',
            bgImage: 'assets/bg_hero.webp',
            primaryCtaText: 'Book Treatment',
            primaryCtaLink: 'https://suaglow.myaestheticrecord.com/online-booking/',
            secondaryCtaText: 'How It Works',
            secondaryCtaLink: '#how-it-works'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const bg = resolveAsset(p.bgImage, prefix);
            return `
<section id="hero" data-nav-theme="dark" class="relative min-h-[70vh] flex flex-col justify-center px-8 md:px-20 pt-[220px] pb-24 overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="${bg}" alt="${p.titleMain}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-near-black/90 via-near-black/60 to-transparent"></div>
    </div>
    <div class="relative z-10 max-w-3xl animate-on-scroll fade-up">
        <span class="badge-glass mb-8 inline-block">${p.badgeText}</span>
        <h1 class="heading-wide text-4xl md:text-6xl mb-6 leading-tight text-white">
            ${p.titleMain} <span class="text-warm-gold">${p.titleAccent}</span>
        </h1>
        <p class="text-base md:text-lg text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
            ${p.description}
        </p>
        <div class="flex flex-wrap items-center gap-4">
            <a href="${p.primaryCtaLink}" target="_blank" class="btn-primary">${p.primaryCtaText}</a>
            <a href="${p.secondaryCtaLink}" class="btn-outline-white">${p.secondaryCtaText}</a>
        </div>
    </div>
</section>`;
        }
    },

    'hero-utility': {
        id: 'hero-utility',
        name: 'Utility Page Hero',
        category: 'hero',
        description: 'Clean, simplified header for informational, policy, and legal pages.',
        defaultProps: {
            categoryBadge: 'Information & Policies',
            title: 'Privacy Policy',
            subtitle: 'Learn how SuA Glow protects your confidential health and personal information.'
        },
        render: (p = {}) => `
<section id="page-hero" class="relative pt-[160px] pb-16 px-8 md:px-16 bg-light-gray/60 border-b border-light-gray text-center">
    <div class="max-w-4xl mx-auto animate-on-scroll fade-up">
        <span class="badge-standard mb-4 inline-block">${p.categoryBadge}</span>
        <h1 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.title}</h1>
        <p class="text-sm md:text-base text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
            ${p.subtitle}
        </p>
    </div>
</section>`
    },

    'what-is-standard': {
        id: 'what-is-standard',
        name: 'Standard Explanation ("What Is It?")',
        category: 'what-is',
        description: '2-column editorial layout with headline, philosophy tag, detailed narrative, target/clinical bullet lists, and floating image card.',
        defaultProps: {
            sectionTitle: 'Barrier Recovery & Repair',
            subtitlePhilosophy: 'The Seoul Healing Philosophy',
            leadStatement: 'Beautiful skin is, first and foremost, healthy skin with a strong barrier.',
            description: 'At SuA Glow, this Korean-inspired recovery treatment utilizes active bio-compounds designed to support the natural healing environment, improve elasticity, and calm compromised barriers.',
            col1Title: 'Target Focus',
            col1Items: ['Barrier Repair', 'Skin Calming', 'Cellular Support'],
            col2Title: 'Clinical Results',
            col2Items: ['Enhanced Resilience', 'Improved Elasticity', 'Healthy Glow'],
            imageSrc: 'assets/salmon_pn_cellular_recovery.png',
            imageAlt: 'Salmon PN Cellular Recovery',
            imageCaption: 'Cellular Recovery Focus'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const img = resolveAsset(p.imageSrc, prefix);
            return `
<section id="what-is" data-nav-theme="dark" class="py-32 px-10 bg-off-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20 animate-on-scroll fade-up">
            <h2 class="heading-wide text-3xl md:text-4xl mb-6 [text-wrap:balance]">${p.sectionTitle}</h2>
            <p class="heading-wide text-xs text-taupe opacity-70 tracking-[0.4em] uppercase">${p.subtitlePhilosophy}</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="space-y-10 animate-on-scroll fade-right">
                <p class="text-xl font-light leading-relaxed [text-wrap:balance]">${p.leadStatement}</p>
                <p class="text-base font-light opacity-60 leading-relaxed">${p.description}</p>
                <div class="grid grid-cols-2 gap-6 pt-6">
                    <div class="space-y-2">
                        <h4 class="heading-wide text-[10px] text-taupe tracking-widest uppercase [text-wrap:balance]">${p.col1Title}</h4>
                        <ul class="text-[11px] font-medium space-y-1 opacity-60">
                            ${(p.col1Items || []).map(item => `<li>&bull; ${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="space-y-2">
                        <h4 class="heading-wide text-[10px] text-taupe tracking-widest uppercase [text-wrap:balance]">${p.col2Title}</h4>
                        <ul class="text-[11px] font-medium space-y-1 opacity-60">
                            ${(p.col2Items || []).map(item => `<li>&bull; ${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="relative animate-on-scroll fade-left delay-200">
                <div class="absolute inset-0 bg-taupe/5 rounded-3xl rotate-3 scale-105"></div>
                <div class="relative rounded-3xl shadow-xl overflow-hidden aspect-[4/5] bg-light-gray group">
                    <img src="${img}" alt="${p.imageAlt}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <p class="heading-wide text-xs">${p.imageCaption}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'treatment-benefits': {
        id: 'treatment-benefits',
        name: 'Treatment Benefits Grid',
        category: 'benefits',
        description: 'Icon-driven cards grid highlighting the primary clinical and aesthetic benefits.',
        defaultProps: {
            badgeText: 'Why It Works',
            sectionTitle: 'Key Treatment Benefits',
            sectionSubtitle: 'Designed to deliver visible improvements without unnecessary stress to the delicate skin barrier.',
            benefits: [
                {
                    icon: 'shield-plus',
                    title: 'Barrier Reinforcement',
                    description: 'Strengthens moisture retention and protects against environmental micro-stressors.'
                },
                {
                    icon: 'sparkles',
                    title: 'Luminous Hydration',
                    description: 'Restores water-drop glow from within the cellular dermal matrix.'
                },
                {
                    icon: 'activity',
                    title: 'Collagen Activation',
                    description: 'Stimulates fibroblast activity for firmer, bouncier facial contours.'
                },
                {
                    icon: 'feather',
                    title: 'Minimal Downtime',
                    description: 'Gentle Korean protocol allowing you to return to daily activities immediately.'
                },
                {
                    icon: 'heart-pulse',
                    title: 'Calming Redness',
                    description: 'Soothes inflammation and balances sensitive or sensitized skin types.'
                },
                {
                    icon: 'award',
                    title: 'Tailored Protocols',
                    description: 'Customized serum selection matched to your unique dermal goals.'
                }
            ]
        },
        render: (p = {}) => `
<section id="treatment-benefits" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${(p.benefits || []).map(b => `
            <div class="p-8 rounded-[2rem] bg-off-white border border-light-gray/40 shadow-soft hover:border-taupe/40 transition-all group">
                <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xs group-hover:bg-taupe group-hover:text-white transition-all text-warm-gold">
                    <i data-lucide="${b.icon || 'sparkles'}" class="w-6 h-6"></i>
                </div>
                <h3 class="heading-wide text-lg text-near-black mb-3">${b.title}</h3>
                <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${b.description}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'expect-timeline': {
        id: 'expect-timeline',
        name: 'Expectations & Timeline',
        category: 'benefits',
        description: 'Step-by-step patient journey timeline walking through prep, treatment, and recovery.',
        defaultProps: {
            badgeText: 'The Patient Journey',
            sectionTitle: 'What to Expect',
            sectionSubtitle: 'A transparent walkthrough from your personalized consultation to your glowing recovery.',
            steps: [
                {
                    number: '01',
                    title: 'Skin Consultation & Analysis',
                    time: '15 Minutes',
                    description: 'Sophia Yang, PA-C evaluates your skin barrier, elasticity, and individual goals to formulate your custom session.'
                },
                {
                    number: '02',
                    title: 'Targeted Clinical Treatment',
                    time: '45-60 Minutes',
                    description: 'Application of medical-grade active solutions with advanced Korean techniques ensuring high comfort and efficacy.'
                },
                {
                    number: '03',
                    title: 'Post-Care & Lasting Radiance',
                    time: 'Immediate - Day 3',
                    description: 'Soothing hydration finish with clear aftercare recommendations to maximize collagen synthesis and glass-skin glow.'
                }
            ]
        },
        render: (p = {}) => `
<section id="expect" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-5xl mx-auto">
        <div class="text-center mb-20 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>

        <div class="relative">
            <div class="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-taupe/20"></div>
            <div class="space-y-12 relative z-10">
                ${(p.steps || []).map((step, idx) => `
                <div class="flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}">
                    <div class="w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}">
                        <div class="bg-white p-8 rounded-[2rem] shadow-soft border border-light-gray/40">
                            <span class="text-[10px] font-bold tracking-widest text-warm-gold uppercase bg-warm-gold/10 px-3 py-1 rounded-full inline-block mb-3">${step.time}</span>
                            <h3 class="heading-wide text-lg text-near-black mb-2">${step.title}</h3>
                            <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${step.description}</p>
                        </div>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-near-black text-warm-gold flex items-center justify-center font-bold text-sm shadow-md border-4 border-white shrink-0">
                        ${step.number}
                    </div>
                    <div class="w-full md:w-1/2 hidden md:block"></div>
                </div>`).join('')}
            </div>
        </div>
    </div>
</section>`
    },

    'why-sua': {
        id: 'why-sua',
        name: 'Why SuA Glow (Value Proposition)',
        category: 'benefits',
        description: 'Brand differentiator block featuring dark styling, gold accents, and 4 pillar callouts.',
        defaultProps: {
            badgeText: 'The SuA Glow Difference',
            headlineMain: 'Why Choose',
            headlineAccent: 'SuA Glow',
            description: 'We bring genuine Seoul aesthetic medical protocols to Dallas, prioritizing skin integrity, subtle elegance, and evidence-based care.',
            ctaText: 'Book Your Visit',
            ctaLink: 'https://suaglow.myaestheticrecord.com/online-booking/',
            pillars: [
                {
                    title: 'Seoul-Trained Specialist',
                    description: 'Sophia Yang, PA-C trains continuously in South Korea on cutting-edge techniques.'
                },
                {
                    title: 'Physician Supervised',
                    description: 'Complete medical oversight by Dr. Adam Yang, MD with rigorous clinical protocols.'
                },
                {
                    title: 'Natural Harmony',
                    description: 'We focus on barrier health and cellular rejuvenation rather than artificial volume.'
                },
                {
                    title: 'Zero Pressure Comfort',
                    description: 'Honest consultations dedicated strictly to what your skin truly needs.'
                }
            ]
        },
        render: (p = {}) => `
<section id="why-sua" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="bg-gradient-to-br from-near-black to-charcoal rounded-[2.5rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div class="absolute -right-20 -top-20 w-80 h-80 bg-warm-gold/10 rounded-full blur-3xl"></div>
            <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-taupe/10 rounded-full blur-3xl"></div>

            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-5 space-y-6">
                    <span class="badge-glass inline-block">${p.badgeText}</span>
                    <h2 class="heading-wide text-3xl md:text-5xl text-white leading-tight">
                        ${p.headlineMain}<br><span class="text-warm-gold">${p.headlineAccent}</span>
                    </h2>
                    <p class="text-white/70 text-base font-light leading-relaxed">
                        ${p.description}
                    </p>
                    <div class="pt-4">
                        <a href="${p.ctaLink}" target="_blank" class="btn-primary inline-flex">${p.ctaText}</a>
                    </div>
                </div>

                <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    ${(p.pillars || []).map(pill => `
                    <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div class="w-2 h-2 rounded-full bg-warm-gold mb-4"></div>
                        <h3 class="heading-wide text-sm md:text-base text-white mb-2">${pill.title}</h3>
                        <p class="text-xs text-white/60 font-light leading-relaxed">${pill.description}</p>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    </div>
</section>`
    },

    'medical-oversight': {
        id: 'medical-oversight',
        name: 'Medical Oversight Banner',
        category: 'philosophy',
        description: 'Official clinical oversight card with provider photos, credentials, and Texas compliance badge.',
        defaultProps: {
            treatmentName: 'Medical Aesthetic',
            provider1Name: 'Sophia Yang, PA-C',
            provider1Title: 'Seoul-Trained Aesthetic Provider',
            provider1Image: 'assets/sophia-yang.png',
            provider2Name: 'Dr. Adam Yang, MD',
            provider2Title: 'Medical Director & Supervising Physician',
            provider2Image: 'assets/dr-adam-yang.png'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const p1Img = resolveAsset(p.provider1Image, prefix);
            const p2Img = resolveAsset(p.provider2Image, prefix);
            return `
<section id="medical-oversight" class="py-20 px-8 md:px-12 bg-light-gray/60">
    <div class="max-w-4xl mx-auto">
        <div class="relative bg-white p-8 md:p-12 shadow-soft rounded-[2rem] border border-light-gray/40 overflow-hidden animate-on-scroll fade-up">
            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-[#AA987C]/5 rounded-full blur-2xl"></div>
            <div class="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-[#AA987C]/10 flex items-center justify-center shrink-0 border border-[#AA987C]/20">
                    <i data-lucide="shield-check" class="w-7 h-7 text-warm-gold"></i>
                </div>
                <div class="space-y-4 flex-1">
                    <div class="flex flex-wrap items-center gap-3">
                        <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#AA987C] bg-[#AA987C]/10 px-3.5 py-1 rounded-full border border-[#AA987C]/20">Medical Expertise You Can Trust</span>
                        <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal/40 bg-charcoal/5 px-3 py-1 rounded-full">Texas Compliant</span>
                    </div>
                    <p class="text-sm md:text-base font-light text-charcoal/80 leading-relaxed">
                        Every <span class="font-medium text-near-black">${p.treatmentName}</span> treatment is performed by <strong class="font-medium text-near-black">${p.provider1Name}</strong>, under physician-delegated medical oversight from <strong class="font-medium text-near-black">${p.provider2Name}</strong>, following Texas regulations and established clinical protocols.
                    </p>
                    <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex items-center gap-4 p-4 rounded-xl border border-light-gray/30" style="background: radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(233,233,229,0.8) 100%);">
                            <img src="${p1Img}" alt="${p.provider1Name}" class="w-16 h-16 rounded-full object-cover shrink-0 border border-light-gray/40 shadow-xs">
                            <div>
                                <p class="text-[13px] font-semibold text-near-black leading-tight">${p.provider1Name}</p>
                                <p class="text-[9px] uppercase tracking-wider text-taupe/90 font-medium mt-1">${p.provider1Title}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-4 rounded-xl border border-light-gray/30" style="background: radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(233,233,229,0.8) 100%);">
                            <img src="${p2Img}" alt="${p.provider2Name}" class="w-16 h-16 rounded-full object-cover shrink-0 border border-light-gray/40 shadow-xs">
                            <div>
                                <p class="text-[13px] font-semibold text-near-black leading-tight">${p.provider2Name}</p>
                                <p class="text-[9px] uppercase tracking-wider text-taupe/90 font-medium mt-1">${p.provider2Title}</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs md:text-sm font-light text-charcoal/75 leading-relaxed pt-3 border-t border-light-gray/30 mt-4">
                        Every treatment plan is personalized to support healthy collagen, protect the skin barrier, and deliver natural-looking results.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'faq-accordion': {
        id: 'faq-accordion',
        name: 'FAQ Accordion',
        category: 'faq-guides',
        description: 'Interactive collapsible FAQ accordion with answers and Lucide chevrons.',
        defaultProps: {
            badgeText: 'Got Questions?',
            sectionTitle: 'Frequently Asked Questions',
            sectionSubtitle: 'Everything you need to know about preparing for your session and post-care expectations.',
            faqs: [
                {
                    q: 'How many sessions are typically recommended?',
                    a: 'Most patients see noticeable results after a single session, with optimal cumulative benefits achieved across a series of 3 sessions spaced 3-4 weeks apart.'
                },
                {
                    q: 'Is there any downtime or recovery period?',
                    a: 'Minimal to none. You may experience mild temporary redness for a few hours, but you can immediately resume daily non-strenuous routines.'
                },
                {
                    q: 'Can this treatment be combined with other facials?',
                    a: 'Yes, our providers frequently pair cellular treatments with LDM Water Drop Lifting or Oligio X for synergistic skin rejuvenation.'
                },
                {
                    q: 'Who performs the procedure?',
                    a: 'All medical aesthetics procedures are personally performed by Sophia Yang, PA-C under physician supervision.'
                }
            ]
        },
        render: (p = {}) => `
<section id="faq" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>

        <div class="space-y-4" id="faq-accordion-container">
            ${(p.faqs || []).map((faq, i) => `
            <details class="group bg-white rounded-2xl p-6 border border-light-gray/40 shadow-soft [&_summary::-webkit-details-marker]:hidden" ${i === 0 ? 'open' : ''}>
                <summary class="flex justify-between items-center cursor-pointer list-none font-semibold text-near-black text-sm md:text-base">
                    <span>${faq.q}</span>
                    <span class="transition-transform duration-300 group-open:rotate-180 text-taupe shrink-0 ml-4">
                        <i data-lucide="chevron-down" class="w-5 h-5"></i>
                    </span>
                </summary>
                <p class="mt-4 text-xs md:text-sm text-charcoal/70 font-light leading-relaxed pt-3 border-t border-light-gray/30">
                    ${faq.a}
                </p>
            </details>`).join('')}
        </div>
    </div>
</section>`
    },

    'cta-booking-banner': {
        id: 'cta-booking-banner',
        name: 'CTA Booking Banner',
        category: 'faq-guides',
        description: 'High-converting consultation and booking banner with gold gradient and glass accents.',
        defaultProps: {
            badgeText: 'Reserve Your Experience',
            title: 'Ready for Your Korean Glass Skin Glow?',
            description: 'Schedule a tailored consultation in Carrollton with Sophia Yang, PA-C to start your personalized skin journey.',
            ctaPrimaryText: 'Book Online Now',
            ctaPrimaryLink: 'https://suaglow.myaestheticrecord.com/online-booking/',
            ctaSecondaryText: 'View All Treatments',
            ctaSecondaryLink: 'index.html#services'
        },
        render: (p = {}) => `
<section id="booking-cta" class="py-24 px-8 md:px-12 bg-white">
    <div class="max-w-5xl mx-auto">
        <div class="relative bg-gradient-to-r from-taupe to-warm-gold/90 rounded-[2.5rem] p-10 md:p-16 text-white text-center shadow-xl overflow-hidden animate-on-scroll fade-up">
            <div class="absolute inset-0 bg-black/10"></div>
            <div class="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>

            <div class="relative z-10 max-w-3xl mx-auto space-y-6">
                <span class="text-[10px] font-bold uppercase tracking-[0.3em] bg-white/20 text-white px-4 py-1.5 rounded-full inline-block backdrop-blur-sm">
                    ${p.badgeText}
                </span>
                <h2 class="heading-wide text-3xl md:text-5xl text-white font-bold leading-tight [text-wrap:balance]">
                    ${p.title}
                </h2>
                <p class="text-white/90 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
                    ${p.description}
                </p>
                <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="${p.ctaPrimaryLink}" target="_blank" class="bg-near-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-near-black transition-all shadow-md">
                        ${p.ctaPrimaryText}
                    </a>
                    <a href="${p.ctaSecondaryLink}" class="border border-white/40 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                        ${p.ctaSecondaryText}
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`
    },

    'treatment-areas': {
        id: 'treatment-areas',
        name: 'Target Treatment Areas',
        category: 'what-is',
        description: 'Visual breakdown of facial and anatomical target zones for focused procedures.',
        defaultProps: {
            badgeText: 'Anatomical Precision',
            sectionTitle: 'Targetable Treatment Areas',
            sectionSubtitle: 'Every zone is mapped with precision to enhance natural symmetry.',
            areas: [
                { title: 'Full Face & Forehead', desc: 'Smoothing expression lines, refining texture, and boosting glow.' },
                { title: 'Periorbital (Under Eyes)', desc: 'Rejuvenating delicate under-eye hollows and softening fine lines.' },
                { title: 'Cheeks & Mid-Face', desc: 'Restoring bounce, barrier firmness, and healthy radiance.' },
                { title: 'Jawline & Lower Face', desc: 'Subtle definition and tightening along the mandibular border.' },
                { title: 'Neck & Décolletage', desc: 'Hydrating crepey skin and improving overall skin tone.' },
                { title: 'Target Acne Scars', desc: 'Focused dermal matrix recovery for uneven surface texture.' }
            ]
        },
        render: (p = {}) => `
<section id="treatment-areas" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${(p.areas || []).map(area => `
            <div class="p-6 rounded-2xl bg-white border border-light-gray/40 shadow-soft">
                <div class="w-8 h-8 rounded-full bg-warm-gold/10 text-warm-gold flex items-center justify-center mb-3">
                    <i data-lucide="check" class="w-4 h-4"></i>
                </div>
                <h3 class="heading-wide text-base text-near-black mb-2">${area.title}</h3>
                <p class="text-xs text-charcoal/70 font-light leading-relaxed">${area.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'before-after-gallery': {
        id: 'before-after-gallery',
        name: 'Before & After Results Gallery',
        category: 'social-proof',
        description: 'Comparison gallery cards with clinical labels and disclaimer footer.',
        defaultProps: {
            badgeText: 'Real Outcomes',
            sectionTitle: 'Clinical Transformation Gallery',
            sectionSubtitle: 'Authentic patient results demonstrating improved barrier resilience and natural radiance.',
            cases: [
                {
                    title: 'Cellular Skin Normalization',
                    timeline: '3 Sessions • 6 Weeks',
                    imgSrc: 'assets/rejuran-before-after.png'
                },
                {
                    title: 'Targeted Scar Subcision & Recovery',
                    timeline: '2 Sessions • 4 Weeks',
                    imgSrc: 'assets/subcision-before-after.png'
                },
                {
                    title: 'Dermal Texture Transformation',
                    timeline: '4 Sessions • 8 Weeks',
                    imgSrc: 'assets/suaglow_scar_tissue_after.png'
                }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="before-after-gallery" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${(p.cases || []).map(c => {
                const img = resolveAsset(c.imgSrc, prefix);
                return `
            <div class="rounded-[2rem] overflow-hidden bg-off-white border border-light-gray/40 shadow-soft group">
                <div class="aspect-[4/3] overflow-hidden bg-light-gray relative">
                    <img src="${img}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <span class="absolute top-4 right-4 bg-near-black/70 text-white text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-sm">Before & After</span>
                </div>
                <div class="p-6">
                    <p class="text-[10px] text-taupe font-bold uppercase tracking-wider mb-1">${c.timeline}</p>
                    <h3 class="heading-wide text-base text-near-black">${c.title}</h3>
                </div>
            </div>`;
            }).join('')}
        </div>
        <p class="text-center text-[11px] text-charcoal/40 mt-12 font-light italic">
            *Results may vary per individual. Clinical photos show authentic patient outcomes following personalized treatment protocols.
        </p>
    </div>
</section>`;
        }
    },

    'treatment-hub-grid': {
        id: 'treatment-hub-grid',
        name: 'Treatment Hub Grid',
        category: 'hubs',
        description: 'Responsive cards grid linking out to individual treatment pages with badges and booking buttons.',
        defaultProps: {
            badgeText: 'Our Complete Offerings',
            sectionTitle: 'Signature Treatments',
            sectionSubtitle: 'Discover our Korean medical aesthetic services designed to elevate your skin.',
            treatments: [
                {
                    title: 'Salmon PN Facial',
                    badge: 'Skin Health',
                    desc: 'Korean-inspired cellular repair leveraging Polynucleotides to rebuild compromised barriers.',
                    link: 'salmon-pn-facial.html',
                    imgSrc: 'assets/salmon_pn_cellular_recovery.png'
                },
                {
                    title: 'Oligio X RF Lifting',
                    badge: 'Skin Tightening',
                    desc: 'Next-generation monopolar RF contouring and collagen tightening with zero downtime.',
                    link: 'oligio-x.html',
                    imgSrc: 'assets/oligio-x-in-use.webp'
                },
                {
                    title: 'LDM Water Drop Lifting',
                    badge: 'Hydration & Calming',
                    desc: 'Dual-frequency ultrasound delivering micro-massage for deep hydration and barrier recovery.',
                    link: 'ldm-water-drop-lifting.html',
                    imgSrc: 'assets/ldm-water-drop-hero.jpg'
                }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="treatments-hub" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${(p.treatments || []).map(t => {
                const img = resolveAsset(t.imgSrc, prefix);
                return `
            <div class="bg-off-white rounded-[2rem] border border-light-gray/40 shadow-soft overflow-hidden flex flex-col group hover:border-taupe/40 transition-all">
                <div class="aspect-[16/10] overflow-hidden bg-light-gray relative">
                    <img src="${img}" alt="${t.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <span class="absolute top-4 left-4 bg-white/90 text-near-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">${t.badge}</span>
                </div>
                <div class="p-8 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="heading-wide text-xl text-near-black mb-3">${t.title}</h3>
                        <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed mb-6">${t.desc}</p>
                    </div>
                    <div class="pt-4 border-t border-light-gray/40 flex justify-between items-center">
                        <a href="${t.link}" class="text-xs font-bold uppercase tracking-widest text-taupe hover:text-near-black transition-colors inline-flex items-center gap-2">
                            Explore Treatment <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>`;
            }).join('')}
        </div>
    </div>
</section>`;
        }
    },

    'philosophy-block': {
        id: 'philosophy-block',
        name: 'Philosophy & Seoul Ethos',
        category: 'philosophy',
        description: 'Editorial brand block detailing natural balance, cellular health, and subtle beauty.',
        defaultProps: {
            badgeText: 'The Seoul Methodology',
            headlineMain: 'Natural Harmony &',
            headlineAccent: 'Cellular Health',
            philosophyStatement: 'We believe true aesthetic rejuvenation begins at the cellular level. Rather than masking aging with excessive volume, our philosophy strengthens the biological architecture of your skin.',
            pillars: [
                {
                    title: 'Biological Integrity',
                    desc: 'Prioritizing cellular regeneration, collagen synthesis, and skin barrier resilience.'
                },
                {
                    title: 'Precision Artistry',
                    desc: 'Subtle, calibrated enhancements that honor your unique anatomical facial balance.'
                },
                {
                    title: 'Zero Downtime Focus',
                    desc: 'Non-invasive Korean technologies engineered for high efficacy and immediate comfort.'
                }
            ]
        },
        render: (p = {}) => `
<section id="philosophy" class="py-28 px-8 md:px-12 bg-near-black text-white relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-taupe/10 blur-[100px] rounded-full"></div>
    <div class="max-w-5xl mx-auto text-center relative z-10 space-y-8 animate-on-scroll fade-up">
        <span class="badge-glass inline-block">${p.badgeText}</span>
        <h2 class="heading-wide text-3xl md:text-5xl text-white leading-tight [text-wrap:balance]">
            ${p.headlineMain}<br><span class="text-warm-gold">${p.headlineAccent}</span>
        </h2>
        <p class="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto [text-wrap:balance]">
            ${p.philosophyStatement}
        </p>
        <div class="pt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 mt-12">
            ${(p.pillars || []).map(pill => `
            <div class="space-y-2">
                <h4 class="font-heading font-bold text-sm text-warm-gold tracking-wide uppercase">${pill.title}</h4>
                <p class="text-xs text-white/70 font-light leading-relaxed">${pill.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'testimonials-carousel': {
        id: 'testimonials-carousel',
        name: 'Testimonials & Glow Stories',
        category: 'social-proof',
        description: '3-card patient review showcase with 5-star badges and patient testimonials.',
        defaultProps: {
            badgeText: 'Verified Patient Experiences',
            sectionTitle: 'Real Stories, Authentic Glow',
            sectionSubtitle: 'Hear directly from patients who have transformed their skin with our personalized Korean protocols.',
            reviews: [
                {
                    name: 'Sarah M.',
                    treatment: 'Salmon PN & LDM Lifting',
                    quote: 'My skin has never felt this calm and resilient. Sophia took the time to explain every single step, and my redness disappeared within 24 hours!',
                    stars: 5
                },
                {
                    name: 'David K.',
                    treatment: 'Oligio X Contouring',
                    quote: 'The tightening effect along my jawline was noticeable after the first week without any pain or downtime. The medical oversight gave me complete confidence.',
                    stars: 5
                },
                {
                    name: 'Jessica L.',
                    treatment: 'Skin Quality Boosters',
                    quote: 'True glass skin results! Everyone asked what skincare I was using after my second session. The clinic ambiance in Carrollton is so serene.',
                    stars: 5
                }
            ]
        },
        render: (p = {}) => `
<section id="glow-stories" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${(p.reviews || []).map(r => `
            <div class="p-8 rounded-[2rem] bg-white border border-light-gray/40 shadow-soft flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-1 text-warm-gold mb-4">
                        ${Array(r.stars || 5).fill('<i data-lucide="star" class="w-4 h-4 fill-warm-gold"></i>').join('')}
                    </div>
                    <p class="text-xs md:text-sm text-charcoal/80 font-light leading-relaxed italic mb-6">
                        "${r.quote}"
                    </p>
                </div>
                <div class="pt-4 border-t border-light-gray/30">
                    <p class="text-sm font-semibold text-near-black">${r.name}</p>
                    <p class="text-[10px] uppercase tracking-wider text-taupe font-medium mt-0.5">${r.treatment}</p>
                </div>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'treatment-guide': {
        id: 'treatment-guide',
        name: 'Treatment & Aftercare Guide',
        category: 'faq-guides',
        description: 'Step-by-step pre-care and post-care guidance instructions cards.',
        defaultProps: {
            badgeText: 'Maximizing Results',
            sectionTitle: 'Aftercare & Treatment Guide',
            sectionSubtitle: 'Simple clinical steps to protect your results and maintain optimal barrier radiance.',
            guides: [
                {
                    step: 'First 24 Hours',
                    title: 'Hydration & Sun Protection',
                    desc: 'Avoid active acids or harsh exfoliants. Apply gentle barrier cream and SPF 50 mineral sunscreen.'
                },
                {
                    step: 'Days 2 - 5',
                    title: 'Cellular Regeneration',
                    desc: 'Keep skin thoroughly moisturized. Drink ample water to support cellular hydration and collagen synthesis.'
                },
                {
                    step: 'Week 2+',
                    title: 'Long-Term Maintenance',
                    desc: 'Resume standard home regimen. Schedule your follow-up booster session for cumulative longevity.'
                }
            ]
        },
        render: (p = {}) => `
<section id="treatment-guide" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${(p.guides || []).map((g, idx) => `
            <div class="p-8 rounded-[2rem] bg-off-white border border-light-gray/40 shadow-soft">
                <span class="text-[10px] font-bold uppercase tracking-wider text-warm-gold bg-warm-gold/10 px-3 py-1 rounded-full inline-block mb-4">
                    ${g.step}
                </span>
                <h3 class="heading-wide text-lg text-near-black mb-2">${g.title}</h3>
                <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${g.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'body-reset-journey': {
        id: 'body-reset-journey',
        name: 'Body Reset 4-Step Journey',
        category: 'outliers',
        description: 'Bespoke 4-step metabolic transformation roadmap for medical weight loss.',
        defaultProps: {
            badgeText: 'Structured Transformation',
            sectionTitle: 'The 4-Step Body Reset Journey',
            sectionSubtitle: 'A clinician-guided roadmap blending metabolic health, body contouring, and long-term vitality.',
            steps: [
                {
                    step: 'Step 01',
                    title: 'Discover & Evaluate',
                    desc: 'Comprehensive biomarker lab analysis and physician consultation to map your metabolic health.',
                    imgSrc: 'assets/body_reset_step1_discover.png'
                },
                {
                    step: 'Step 02',
                    title: 'Personalize Protocol',
                    desc: 'Tailored GLP-1 therapy paired with cellular skin & muscle preservation strategies.',
                    imgSrc: 'assets/body_reset_step2_personalize.png'
                },
                {
                    step: 'Step 03',
                    title: 'Transform & Reset',
                    desc: 'Active metabolic recalibration with regular provider check-ins and body composition tracking.',
                    imgSrc: 'assets/body_reset_step3_transform.png'
                },
                {
                    step: 'Step 04',
                    title: 'Thrive & Maintain',
                    desc: 'Sustainable metabolic wellness, radiant skin, and lifelong energetic maintenance.',
                    imgSrc: 'assets/body_reset_step4_thrive.png'
                }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="body-reset-journey" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${(p.steps || []).map(s => {
                const img = resolveAsset(s.imgSrc, prefix);
                return `
            <div class="bg-white rounded-3xl overflow-hidden border border-light-gray/50 shadow-soft flex flex-col group">
                <div class="aspect-[4/3] overflow-hidden bg-off-white relative">
                    <img src="${img}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[10px] font-bold text-near-black tracking-wider uppercase border border-black/5 shadow-sm">${s.step}</span>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="heading-wide text-base font-bold text-near-black mb-2">${s.title}</h3>
                        <p class="text-xs text-charcoal/70 font-light leading-relaxed">${s.desc}</p>
                    </div>
                </div>
            </div>`;
            }).join('')}
        </div>
    </div>
</section>`;
        }
    },

    'which-reset-is-right': {
        id: 'which-reset-is-right',
        name: 'Lifestyle & Outcome Selector',
        category: 'outliers',
        description: '3-card decision matrix highlighting emotional and clinical goals (Energized, Confident, Comfortable).',
        defaultProps: {
            badgeText: 'Find Your Path',
            sectionTitle: 'How Do You Want to Feel?',
            sectionSubtitle: 'Our physician-guided programs are customized around your primary health and aesthetic milestones.',
            cards: [
                {
                    badge: 'Vitality & Metabolism',
                    title: 'More Energized?',
                    desc: 'Restore cellular energy, support metabolic efficiency, and feel vibrant in your everyday routine.',
                    imgSrc: 'assets/weight-loss-energized.png',
                    icon: 'zap'
                },
                {
                    badge: 'Body Silhouette',
                    title: 'More Confident?',
                    desc: 'Achieve steady fat reduction while protecting facial harmony and skin firmness.',
                    imgSrc: 'assets/weight-loss-confident.png',
                    icon: 'sparkles'
                },
                {
                    badge: 'Holistic Wellness',
                    title: 'More Comfortable?',
                    desc: 'Reduce inflammation, lighten joint pressure, and enjoy sustainable whole-body balance.',
                    imgSrc: 'assets/weight-loss-comfortable.png',
                    icon: 'heart'
                }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="which-reset" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${(p.cards || []).map(c => {
                const img = resolveAsset(c.imgSrc, prefix);
                return `
            <div class="bg-white rounded-3xl overflow-hidden border border-light-gray/50 shadow-soft hover:shadow-md transition-all flex flex-col group">
                <div class="relative h-64 w-full overflow-hidden bg-off-white">
                    <img src="${img}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-[10px] font-bold text-near-black tracking-wider uppercase border border-black/5 shadow-sm">
                        ${c.badge}
                    </div>
                </div>
                <div class="p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                        <div class="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-3">
                            <i data-lucide="${c.icon || 'sparkles'}" class="w-5 h-5"></i>
                        </div>
                        <h4 class="heading-wide text-lg font-bold text-near-black mb-2">${c.title}</h4>
                        <p class="text-xs sm:text-sm font-light text-charcoal/70 leading-relaxed">${c.desc}</p>
                    </div>
                </div>
            </div>`;
            }).join('')}
        </div>
    </div>
</section>`;
        }
    },

    'technology-comparison': {
        id: 'technology-comparison',
        name: 'Device & Technology Comparison',
        category: 'outliers',
        description: 'Multi-column technical comparison cards (e.g. Thermage vs XERF vs Oligio X).',
        defaultProps: {
            badgeText: 'Clinical Objectivity',
            sectionTitle: 'How Technologies Compare',
            sectionSubtitle: 'Every device has strengths. We choose platforms aligned with our Seoul-inspired, zero-damage philosophy.',
            devices: [
                {
                    title: 'Thermage®',
                    tag: 'Established Monopolar RF',
                    points: ['Monopolar RF Energy', 'Deep Collagen Heating', 'Higher Sensation Profile'],
                    perspective: 'Pioneered RF skin tightening globally. Reliable for deep firming with traditional clinical protocols.',
                    imgSrc: 'assets/devices/photo-894x496-thermage-system.png.webp'
                },
                {
                    title: 'Oligio X',
                    tag: 'Next-Gen Korean RF (Our Choice)',
                    points: ['Advanced Cooling & Vibration', 'Optimized Korean Protocols', 'Maximum Comfort & Zero Downtime'],
                    perspective: 'The latest evolution of Seoul aesthetics. Delivers powerful tightening without painful downtime.',
                    imgSrc: 'assets/oligio-x-in-use.webp'
                },
                {
                    title: 'LDM® Water Drop',
                    tag: 'Dual-Frequency Ultrasound',
                    points: ['Dynamic 1/3/10 MHz Soundwaves', 'Cellular Matrix Hydration', 'Barrier Repair & Calming'],
                    perspective: 'Synergistic ultrasound micro-massage designed for barrier health and water-drop radiance.',
                    imgSrc: 'assets/ldm-water-drop-hero.jpg'
                }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="technology-comparison" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4 [text-wrap:balance]">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            ${(p.devices || []).map(d => {
                const img = resolveAsset(d.imgSrc, prefix);
                return `
            <div class="bg-white p-8 rounded-[2rem] border border-light-gray/60 shadow-soft flex flex-col justify-between hover:border-taupe/40 transition-all">
                <div>
                    <div class="mb-4">
                        <span class="text-[9px] uppercase tracking-wider text-taupe font-semibold">${d.tag}</span>
                        <h3 class="heading-wide text-xl text-near-black mt-1">${d.title}</h3>
                    </div>
                    <ul class="space-y-2 text-xs font-light text-charcoal/80 mb-6">
                        ${(d.points || []).map(pt => `
                        <li class="flex items-center gap-2">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-warm-gold"></i>
                            <span>${pt}</span>
                        </li>`).join('')}
                    </ul>
                    <div class="my-4 h-44 relative flex items-center justify-center p-4 rounded-2xl bg-off-white border border-light-gray/40 overflow-hidden">
                        <img src="${img}" alt="${d.title}" class="max-h-full max-w-full object-contain">
                    </div>
                </div>
                <div class="pt-6 border-t border-light-gray/40">
                    <p class="text-[10px] uppercase tracking-wider text-taupe font-semibold mb-1">Our Perspective</p>
                    <p class="text-xs font-light text-charcoal/70 leading-relaxed">${d.perspective}</p>
                </div>
            </div>`;
            }).join('')}
        </div>
    </div>
</section>`;
        }
    },

    'booster-matrix-ingredients': {
        id: 'booster-matrix-ingredients',
        name: 'Booster Dermal Matrix Breakdown',
        category: 'outliers',
        description: '4-part breakdown of specialized Korean bio-boosters (Healing, Hydration, Collagen, Matrix).',
        defaultProps: {
            badgeText: 'Cellular Formulation',
            sectionTitle: 'The 4 Bio-Booster Categories',
            sectionSubtitle: 'Customized active ingredients targeted to specific layers of the dermal matrix.',
            boosters: [
                {
                    num: '01',
                    category: 'Healing & Repair',
                    title: 'Healing Essence',
                    subtitle: 'Calm the Skin. Support Recovery.',
                    desc: 'Formulated with Polynucleotides (PN) to calm redness, repair compromised barriers, and accelerate recovery.',
                    imgSrc: 'assets/rejuran_healing_essence.png'
                },
                {
                    num: '02',
                    category: 'Water Retention',
                    title: 'Hydration & Glow',
                    subtitle: 'Deep Hydration. Glass Skin Energy.',
                    desc: 'Micro-droplet hyaluronic acid matrices designed for refined moisture distribution without puffy distortion.',
                    imgSrc: 'assets/hydration_glow_model.png'
                },
                {
                    num: '03',
                    category: 'Fibroblast Activation',
                    title: 'Collagen Stimulation',
                    subtitle: 'Firmness. Density. Long-Term Support.',
                    desc: 'Bio-stimulators that trigger natural Type I and Type III collagen production for bouncy firmness.',
                    imgSrc: 'assets/collagen_stimulation_model.png'
                },
                {
                    num: '04',
                    category: 'Dermal Architecture',
                    title: 'Dermal Matrix',
                    subtitle: 'Overall Resilience & Elasticity.',
                    desc: 'Synergistic amino acids and peptides that reinforce extracellular matrix integrity.',
                    imgSrc: 'assets/derma_matrix_model.png'
                }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            return `
<section id="booster-matrix" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${(p.boosters || []).map(b => {
                const img = resolveAsset(b.imgSrc, prefix);
                return `
            <div class="bg-off-white rounded-3xl p-6 border border-light-gray/50 shadow-soft flex flex-col justify-between group hover:border-taupe/40 transition-all">
                <div>
                    <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xs mb-6">
                        <img src="${img}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <span class="heading-wide text-[10px] tracking-widest text-taupe uppercase">${b.num} // ${b.category}</span>
                    <h3 class="heading-wide text-lg text-near-black mt-1 mb-1">${b.title}</h3>
                    <p class="text-xs text-taupe font-medium italic mb-3">${b.subtitle}</p>
                    <p class="text-xs text-charcoal/70 font-light leading-relaxed">${b.desc}</p>
                </div>
            </div>`;
            }).join('')}
        </div>
    </div>
</section>`;
        }
    },

    'ldm-modes-frequencies': {
        id: 'ldm-modes-frequencies',
        name: 'Ultrasound Frequencies & Modes',
        category: 'outliers',
        description: 'Technical ultrasound frequency specs (1MHz, 3MHz, 10MHz cross-frequencies) for LDM Water Drop Lifting.',
        defaultProps: {
            badgeText: 'Acoustic Cellular Tech',
            sectionTitle: 'Multi-Frequency LDM Ultrasound',
            sectionSubtitle: 'Alternating frequencies target distinct depths from the epidermis to deep SMAS layers.',
            modes: [
                {
                    freq: '10 MHz',
                    depth: '0.3 cm Depth (Epidermis)',
                    title: 'Surface Barrier Repair',
                    desc: 'Focuses energy at the most superficial layer to calm inflammation, soothe rosacea, and balance moisture.'
                },
                {
                    freq: '3 MHz',
                    depth: '1.0 cm Depth (Dermis)',
                    title: 'Collagen & Elastin Matrix',
                    desc: 'Stimulates fibroblast activity, activates hyaluronic acid synthesis, and firms dermal architecture.'
                },
                {
                    freq: '1 MHz',
                    depth: '3.0 cm Depth (Deep Subcutis)',
                    title: 'Deep Tissue Contouring',
                    desc: 'Enhances lymphatic circulation, drains micro-fluid retention, and provides gentle lifting.'
                }
            ]
        },
        render: (p = {}) => `
<section id="ldm-modes" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${(p.modes || []).map(m => `
            <div class="bg-white p-8 rounded-[2rem] border border-light-gray/50 shadow-soft flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="font-heading font-black text-2xl text-near-black">${m.freq}</span>
                        <span class="text-[10px] font-bold tracking-wider text-warm-gold bg-warm-gold/10 px-3 py-1 rounded-full uppercase">${m.depth}</span>
                    </div>
                    <h3 class="heading-wide text-lg text-near-black mb-2">${m.title}</h3>
                    <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${m.desc}</p>
                </div>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'financing-widget': {
        id: 'financing-widget',
        name: 'Financing & Payment Plans Widget',
        category: 'outliers',
        description: 'Payment plan breakdown card with 0% APR options and Cherry booking callout.',
        defaultProps: {
            badgeText: 'Flexible Payment Solutions',
            headline: 'Invest in Your Glow with 0% APR Financing',
            description: 'We partner with Cherry to offer flexible monthly installment plans without hard credit checks or hidden fees.',
            monthlyStartPrice: '$49/mo',
            ctaText: 'Apply with Cherry',
            financingLink: 'https://withcherry.com'
        },
        render: (p = {}) => `
<section id="financing-widget" class="py-24 px-8 md:px-12 bg-white">
    <div class="max-w-4xl mx-auto">
        <div class="bg-off-white rounded-[2.5rem] p-8 md:p-14 border border-light-gray/40 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="space-y-4 max-w-lg">
                <span class="badge-standard inline-block">${p.badgeText}</span>
                <h2 class="heading-wide text-2xl md:text-4xl text-near-black leading-tight">${p.headline}</h2>
                <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${p.description}</p>
                <div class="flex flex-wrap items-center gap-3 pt-2">
                    <span class="text-[11px] font-semibold text-warm-gold bg-warm-gold/10 px-3 py-1 rounded-full">&bull; 0% APR Available</span>
                    <span class="text-[11px] font-semibold text-charcoal/70 bg-light-gray/50 px-3 py-1 rounded-full">&bull; No Hard Credit Check</span>
                    <span class="text-[11px] font-semibold text-charcoal/70 bg-light-gray/50 px-3 py-1 rounded-full">&bull; Instant Decision</span>
                </div>
            </div>
            <div class="bg-white p-6 rounded-2xl border border-light-gray/60 text-center min-w-[240px] space-y-4 shadow-sm">
                <p class="text-[10px] uppercase font-bold tracking-widest text-taupe">Monthly Plans From</p>
                <p class="text-3xl font-black font-heading text-near-black">${p.monthlyStartPrice}</p>
                <a href="${p.financingLink}" target="_blank" class="w-full btn-primary inline-flex justify-center text-xs">
                    ${p.ctaText}
                </a>
            </div>
        </div>
    </div>
</section>`
    },

    'story': {
        id: 'story',
        name: 'Brand Origin & Narrative Story',
        category: 'philosophy',
        description: 'Two-column brand origin story with editorial narrative and authentic aesthetic photography.',
        defaultProps: {
            badgeText: 'The Origin',
            sectionTitle: 'Our Story',
            storyParagraphs: [
                'SuA K-Glow was born from a vision to bring the authentic, results-driven philosophy of Korean medical aesthetics to the heart of Texas. Our founder recognized a gap in the market: the need for treatments that prioritize long-term skin health and regeneration over temporary fillers or aggressive drama.',
                'We don’t just follow trends; we study the science of skin behavior. Every treatment at SuA K-Glow is rooted in the "water-based" rejuvenation methods popularized in Seoul, focusing on deep hydration, dermal repair, and the unmistakable "glass skin" glow.'
            ],
            imgSrc: 'assets/art-of-korean.png',
            imgAlt: 'SuA Glow Korean Aesthetics Story'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const img = resolveAsset(p.imgSrc, prefix);
            return `
<section id="story" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-col lg:flex-row items-center gap-20">
            <div class="lg:w-1/2 animate-on-scroll fade-right">
                <span class="inline-block text-[10px] tracking-[0.4em] text-taupe uppercase font-bold mb-6 italic">${p.badgeText}</span>
                <h2 class="heading-wide text-4xl md:text-5xl text-near-black mb-10 uppercase tracking-[0.15em] [text-wrap:balance]">${p.sectionTitle}</h2>
                <div class="space-y-6 font-body text-charcoal/70 leading-relaxed text-sm md:text-base font-light">
                    ${(p.storyParagraphs || []).map(para => `<p>${para}</p>`).join('')}
                </div>
            </div>
            <div class="lg:w-1/2 animate-on-scroll fade-left">
                <div class="aspect-square bg-off-white rounded-3xl overflow-hidden shadow-2xl relative group">
                    <img src="${img}" alt="${p.imgAlt || p.sectionTitle}" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'how-it-works': {
        id: 'how-it-works',
        name: 'Technical Process (How It Works)',
        category: 'what-is',
        description: 'Technology breakdown featuring device diagrams and comfortable needleless infusion highlights.',
        defaultProps: {
            badgeText: 'The Technology',
            sectionTitle: 'What Is DEP (DermoElectroPoration)?',
            sectionSubtitle: 'An FDA-cleared transdermal infusion system using precisely controlled electrical pulses to open microscopic pathways.',
            highlightBadge: 'Comfortable Delivery',
            headline: 'Beyond Traditional Topical Application',
            description: 'These microscopic channels allow medical-grade active serums to penetrate directly to the basal membrane without needles, bleeding, or recovery downtime.',
            imgSrc: 'assets/DEP-II-Device-Pic-06-copy-1.webp',
            perks: [
                'No Needles or Injections',
                'Zero Pain or Numbing Required',
                'No Skin Trauma or Bleeding',
                'Instant Glass Skin Hydration'
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const img = resolveAsset(p.imgSrc, prefix);
            return `
<section id="how-it-works" class="py-24 px-6 md:px-12 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-4 animate-on-scroll fade-up">
            <span class="badge-standard mb-2 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl sm:text-4xl lg:text-5xl text-near-black [text-wrap:balance]">
                ${p.sectionTitle}
            </h2>
            <p class="text-sm md:text-base font-light text-charcoal/70 leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div class="lg:col-span-5 animate-on-scroll fade-right">
                <div class="relative rounded-3xl overflow-hidden shadow-xl border border-light-gray/60 p-4 bg-off-white flex items-center justify-center">
                    <img src="${img}" alt="${p.sectionTitle}" class="w-full h-auto max-h-[350px] object-contain rounded-2xl">
                </div>
            </div>

            <div class="lg:col-span-7 space-y-6 animate-on-scroll fade-left">
                <span class="badge-glass text-[10px] tracking-wider uppercase">${p.highlightBadge}</span>
                <h3 class="heading-wide text-2xl sm:text-3xl text-near-black leading-tight [text-wrap:balance]">
                    ${p.headline}
                </h3>
                <p class="text-sm md:text-base font-light text-charcoal/80 leading-relaxed">
                    ${p.description}
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs md:text-sm font-medium text-charcoal/80">
                    ${(p.perks || []).map(pk => `
                    <li class="flex items-center gap-2 p-3 bg-off-white rounded-xl border border-light-gray/40">
                        <i data-lucide="check" class="w-4 h-4 text-warm-gold shrink-0"></i>
                        <span>${pk}</span>
                    </li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'safety': {
        id: 'safety',
        name: 'Clinical Safety & Sanitation Standards',
        category: 'philosophy',
        description: 'Three-pillar safety and hygiene overview guaranteeing medical oversight and FDA-cleared devices.',
        defaultProps: {
            badgeText: 'Patient Safety First',
            sectionTitle: 'Our Safety & Hygiene Commitment',
            sectionSubtitle: 'Every procedure is held to rigorous clinical hygiene, sterile equipment, and physician-supervised protocols.',
            pillars: [
                {
                    icon: 'shield-check',
                    title: 'Medical Supervision',
                    desc: 'All medical aesthetics are administered by Board-Certified PA Sophia Yang under Dr. Adam Yang MD delegation.'
                },
                {
                    icon: 'award',
                    title: 'FDA-Cleared Platforms',
                    desc: 'We utilize exclusively authentic, FDA-cleared devices and verified Korean pharmaceutical formulations.'
                },
                {
                    icon: 'sparkles',
                    title: 'Hospital-Grade Sterility',
                    desc: 'Strict single-use disposable cartridge policies and medical autoclave sterilization for your complete peace of mind.'
                }
            ]
        },
        render: (p = {}) => `
<section id="safety" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${(p.pillars || []).map(pil => `
            <div class="bg-white p-8 rounded-[2rem] border border-light-gray/50 shadow-soft">
                <div class="w-12 h-12 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold mb-6">
                    <i data-lucide="${pil.icon || 'shield-check'}" class="w-6 h-6"></i>
                </div>
                <h3 class="heading-wide text-lg text-near-black mb-2">${pil.title}</h3>
                <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${pil.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'candidate': {
        id: 'candidate',
        name: 'Candidate Eligibility Checklist',
        category: 'what-is',
        description: 'Two-column checklist contrasting ideal candidates versus alternative treatment candidates.',
        defaultProps: {
            badgeText: 'Personalized Suitability',
            sectionTitle: 'Is This Treatment Right For You?',
            sectionSubtitle: 'We maintain absolute transparency regarding who achieves optimal results with this protocol.',
            goodCandidates: [
                'Seeking natural rejuvenation without looking over-filled',
                'Looking for deep hydration, refined texture, and radiant glow',
                'Desiring minimal to zero recovery downtime',
                'Committed to proactive cellular skin health maintenance'
            ],
            otherModalities: [
                'Severe skin laxity requiring surgical intervention',
                'Active skin infections or open lesions in the treatment area',
                'Unrealistic expectations of dramatic structural alteration in 1 session'
            ]
        },
        render: (p = {}) => `
<section id="candidate" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-off-white p-8 rounded-3xl border border-light-gray/60 space-y-4">
                <h3 class="heading-wide text-base text-near-black flex items-center gap-2">
                    <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i> Good Candidates
                </h3>
                <ul class="space-y-3 text-xs md:text-sm text-charcoal/80 font-light">
                    ${(p.goodCandidates || []).map(item => `
                    <li class="flex items-start gap-2">
                        <span class="text-emerald-600 font-bold">&bull;</span>
                        <span>${item}</span>
                    </li>`).join('')}
                </ul>
            </div>
            <div class="bg-off-white p-8 rounded-3xl border border-light-gray/60 space-y-4">
                <h3 class="heading-wide text-base text-near-black flex items-center gap-2">
                    <i data-lucide="alert-circle" class="w-5 h-5 text-warm-gold"></i> When Other Modalities Fit
                </h3>
                <ul class="space-y-3 text-xs md:text-sm text-charcoal/80 font-light">
                    ${(p.otherModalities || []).map(item => `
                    <li class="flex items-start gap-2">
                        <span class="text-warm-gold font-bold">&bull;</span>
                        <span>${item}</span>
                    </li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
</section>`
    },

    'compare-treatments': {
        id: 'compare-treatments',
        name: 'Side-by-Side Comparison Matrix',
        category: 'benefits',
        description: 'Comparative breakdown (e.g. Tone Up Facial vs Traditional Chemical Peels).',
        defaultProps: {
            badgeText: 'Clear Distinctions',
            sectionTitle: 'Compare Your Treatment Options',
            sectionSubtitle: 'Understand the distinct physiological differences and benefits of our Seoul-inspired modalities.',
            treatments: [
                {
                    title: 'Tone Up Facial (SuA Glow)',
                    badge: 'Our Signature Korean Approach',
                    points: [
                        'Gentle non-invasive cellular brightening',
                        'Zero peeling, flaking, or downtime',
                        'Simultaneous barrier hydration and calming',
                        'Immediate glass skin glow before events'
                    ]
                },
                {
                    title: 'Traditional Chemical Peels',
                    badge: 'Aggressive Acid Exfoliation',
                    points: [
                        'Acid-induced stratum corneum shedding',
                        '3 to 7 days of visible flaking & peeling',
                        'Potential post-inflammatory hyperpigmentation risk',
                        'Requires strict post-peel isolation'
                    ]
                }
            ]
        },
        render: (p = {}) => `
<section id="compare-treatments" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${(p.treatments || []).map((t, idx) => `
            <div class="bg-white p-8 md:p-10 rounded-3xl border ${idx === 0 ? 'border-warm-gold/40 shadow-soft' : 'border-light-gray/60'} space-y-6">
                <div>
                    <span class="text-[10px] font-bold tracking-widest uppercase ${idx === 0 ? 'text-warm-gold bg-warm-gold/10' : 'text-charcoal/60 bg-light-gray/60'} px-3 py-1 rounded-full inline-block mb-3">
                        ${t.badge}
                    </span>
                    <h3 class="heading-wide text-xl text-near-black">${t.title}</h3>
                </div>
                <ul class="space-y-3 text-xs md:text-sm font-light text-charcoal/80">
                    ${(t.points || []).map(pt => `
                    <li class="flex items-center gap-2">
                        <i data-lucide="${idx === 0 ? 'check' : 'minus'}" class="w-4 h-4 ${idx === 0 ? 'text-warm-gold' : 'text-charcoal/40'} shrink-0"></i>
                        <span>${pt}</span>
                    </li>`).join('')}
                </ul>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'skin-hair-integration': {
        id: 'skin-hair-integration',
        name: 'Metabolic Skin & Hair Integration',
        category: 'outliers',
        description: 'Comprehensive wellness integration showing how medical weight loss is paired with skin elasticity & hair preservation.',
        defaultProps: {
            badgeText: 'Holistic Transformation',
            sectionTitle: 'Preserving Skin & Hair Vitality',
            description: 'Rapid weight loss can stress the hair cycle and cause facial hollowing. At SuA Glow, every medical weight loss journey is proactively supported with collagen stimulation and hair density therapies.',
            imgSrc: 'assets/weight-loss-skin-hair.png',
            imgAlt: 'Skin and Hair Health Medical Weight Loss',
            features: [
                { title: 'Facial Volume Support', desc: 'Preserving natural fullness and preventing "Ozempic Face" laxity.' },
                { title: 'Hair Density Care', desc: 'Targeted scalp micro-infusions to maintain thick, lustrous hair.' },
                { title: 'Dermal Firming', desc: 'Radiofrequency and bio-stimulators to tighten skin as you shed weight.' },
                { title: 'Nutritional Balance', desc: 'Essential micronutrient protocols to nourish cellular recovery.' }
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const img = resolveAsset(p.imgSrc, prefix);
            return `
<section id="skin-hair-integration" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div class="lg:col-span-6 space-y-6 animate-on-scroll fade-right">
                <span class="badge-standard inline-block">${p.badgeText}</span>
                <h2 class="heading-wide text-3xl md:text-5xl text-near-black leading-tight [text-wrap:balance]">
                    ${p.sectionTitle}
                </h2>
                <p class="text-sm md:text-base font-light text-charcoal/70 leading-relaxed">
                    ${p.description}
                </p>
                <div class="grid grid-cols-2 gap-4 pt-4">
                    ${(p.features || []).map(f => `
                    <div class="p-4 rounded-2xl bg-off-white border border-light-gray/40">
                        <h4 class="font-bold text-xs text-near-black mb-1">${f.title}</h4>
                        <p class="text-[11px] text-charcoal/60 leading-relaxed font-light">${f.desc}</p>
                    </div>`).join('')}
                </div>
            </div>
            <div class="lg:col-span-6 animate-on-scroll fade-left">
                <div class="rounded-3xl overflow-hidden shadow-xl border border-light-gray/60 aspect-[4/3] bg-off-white">
                    <img src="${img}" alt="${p.imgAlt || p.sectionTitle}" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'showcase-banner': {
        id: 'showcase-banner',
        name: 'High-Impact Glow Showcase Banner',
        category: 'hero',
        description: 'Dark-mode luxury animated banner with background overlay and prominent CTAs.',
        defaultProps: {
            badgeText: 'Flagship Technology',
            title: 'Experience The Future of Non-Surgical RF Lifting',
            description: 'Direct from Gangnam, Seoul. Experience Oligio X at SuA K-Glow Med Spa in Dallas-Fort Worth.',
            bgImg: 'assets/oligio-model1.png',
            ctaPrimaryText: 'Book Treatment',
            ctaPrimaryLink: 'https://suaglow.myaestheticrecord.com/online-booking/',
            ctaSecondaryText: 'Explore Technology',
            ctaSecondaryLink: '#technology-comparison'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const bg = resolveAsset(p.bgImg, prefix);
            return `
<section id="showcase-banner" class="relative py-28 px-8 md:px-12 bg-near-black text-white overflow-hidden text-center">
    <div class="absolute inset-0 z-0">
        <img src="${bg}" alt="${p.title}" class="w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/70 to-near-black"></div>
    </div>
    
    <div class="relative z-10 max-w-4xl mx-auto space-y-6 animate-on-scroll fade-up">
        <span class="badge-glass inline-block">${p.badgeText}</span>
        <h2 class="heading-wide text-3xl md:text-6xl text-white font-bold leading-tight [text-wrap:balance]">
            ${p.title}
        </h2>
        <p class="text-white/80 text-sm md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            ${p.description}
        </p>
        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a href="${p.ctaPrimaryLink}" target="_blank" class="btn-primary">${p.ctaPrimaryText}</a>
            <a href="${p.ctaSecondaryLink}" class="btn-outline-white">${p.ctaSecondaryText}</a>
        </div>
    </div>
</section>`;
        }
    },

    'clinical-cases': {
        id: 'clinical-cases',
        name: 'Clinical Evidence & Case Studies',
        category: 'social-proof',
        description: 'Scientific and clinical proof cards highlighting documented tissue remodeling and ultrasound measurements.',
        defaultProps: {
            badgeText: 'Peer-Reviewed Proof',
            sectionTitle: 'Documented Clinical Evidence',
            sectionSubtitle: 'Objective clinical metrics evaluating collagen synthesis, epidermal density, and elasticity.',
            cases: [
                {
                    metric: '+38%',
                    label: 'Increase in Dermal Collagen Density',
                    desc: 'Independent ultrasound measurements taken 90 days following monopolar RF stimulation.'
                },
                {
                    metric: '96%',
                    label: 'Patient Comfort Satisfaction',
                    desc: 'Patients reported virtually painless treatment without topical anesthesia due to specialized cooling.'
                }
            ]
        },
        render: (p = {}) => `
<section id="clinical-cases" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${(p.cases || []).map(c => `
            <div class="bg-white p-10 rounded-3xl border border-light-gray/60 shadow-soft text-center space-y-4">
                <span class="font-heading font-black text-5xl text-warm-gold block">${c.metric}</span>
                <h3 class="heading-wide text-base font-bold text-near-black">${c.label}</h3>
                <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${c.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'transparency': {
        id: 'transparency',
        name: 'Treatment Transparency (Expectations vs Limits)',
        category: 'faq-guides',
        description: 'Honest dialogue clarifying realistic outcomes versus treatment limitations.',
        defaultProps: {
            badgeText: 'Honest Consultation',
            sectionTitle: 'What This Treatment Can & Cannot Do',
            sectionSubtitle: 'We pride ourselves on clinical honesty to ensure our patients achieve their exact expectations.',
            whatItDoes: [
                'Instantly refreshes and illuminates dull skin tone',
                'Refines superficial skin texture and closes pore appearance',
                'Provides long-term collagen and elasticity support'
            ],
            limitations: [
                'Does not substitute for deep surgical facelift procedures',
                'Cannot erase deep structural bone loss without filler integration',
                'Requires proper SPF sun protection to maintain longevity'
            ]
        },
        render: (p = {}) => `
<section id="transparency" class="py-28 px-8 md:px-12 bg-white">
    <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-off-white p-8 rounded-3xl border border-light-gray/60 space-y-4">
                <h3 class="heading-wide text-base text-near-black flex items-center gap-2">
                    <i data-lucide="check" class="w-5 h-5 text-emerald-600"></i> What It Accomplishes
                </h3>
                <ul class="space-y-3 text-xs md:text-sm text-charcoal/80 font-light">
                    ${(p.whatItDoes || []).map(item => `
                    <li class="flex items-start gap-2">
                        <span class="text-emerald-600 font-bold">&bull;</span>
                        <span>${item}</span>
                    </li>`).join('')}
                </ul>
            </div>
            <div class="bg-off-white p-8 rounded-3xl border border-light-gray/60 space-y-4">
                <h3 class="heading-wide text-base text-near-black flex items-center gap-2">
                    <i data-lucide="info" class="w-5 h-5 text-taupe"></i> Realistic Limitations
                </h3>
                <ul class="space-y-3 text-xs md:text-sm text-charcoal/80 font-light">
                    ${(p.limitations || []).map(item => `
                    <li class="flex items-start gap-2">
                        <span class="text-taupe font-bold">&bull;</span>
                        <span>${item}</span>
                    </li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
</section>`
    },

    'skintox': {
        id: 'skintox',
        name: 'Injectables & Neurotoxin Decision Matrix',
        category: 'hubs',
        description: 'Multi-category overview breaking down Cosmetic Tox, Medical Tox, and SkinTox micro-injections.',
        defaultProps: {
            badgeText: 'Precision Neuromodulation',
            sectionTitle: 'The 3 Approaches to Neurotoxins',
            sectionSubtitle: 'Targeted dosing for smooth expression lines, jawline contouring, or glass-skin micro-pore tightening.',
            categories: [
                {
                    title: 'Cosmetic Tox',
                    tag: 'Wrinkle Smoothing',
                    desc: 'Smooth forehead lines, crow’s feet, and frown lines while preserving natural facial mobility.',
                    icon: 'sparkles'
                },
                {
                    title: 'Medical Tox (Masseter & Trapezius)',
                    tag: 'Facial Slimming & Pain Relief',
                    desc: 'Slim the lower jaw, relieve TMJ clenching, and relax tense shoulder lines with therapeutic precision.',
                    icon: 'activity'
                },
                {
                    title: 'SkinTox (Micro-Botox)',
                    tag: 'Glass Skin & Pore Tightening',
                    desc: 'Superficial micro-droplets in the upper dermis to minimize oil production, shrink pores, and impart instant sheen.',
                    icon: 'droplets'
                }
            ]
        },
        render: (p = {}) => `
<section id="skintox" class="py-28 px-8 md:px-12 bg-off-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-standard mb-4 inline-block">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-near-black mb-4">${p.sectionTitle}</h2>
            <p class="text-charcoal/60 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                ${p.sectionSubtitle}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${(p.categories || []).map(cat => `
            <div class="bg-white p-8 rounded-[2rem] border border-light-gray/60 shadow-soft flex flex-col justify-between">
                <div>
                    <span class="text-[10px] uppercase font-bold tracking-widest text-taupe block mb-2">${cat.tag}</span>
                    <h3 class="heading-wide text-xl text-near-black mb-3">${cat.title}</h3>
                    <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed mb-6">${cat.desc}</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center text-warm-gold">
                    <i data-lucide="${cat.icon || 'sparkles'}" class="w-5 h-5"></i>
                </div>
            </div>`).join('')}
        </div>
    </div>
</section>`
    },

    'consultation-policy': {
        id: 'consultation-policy',
        name: 'Consultation Policy & Fee Card',
        category: 'philosophy',
        description: 'Dedicated consultation policy card detailing the $50 fee credit toward same-day treatments.',
        defaultProps: {
            badgeText: 'SuA Glow · Policy Update',
            title: 'Consultation Policy',
            description: 'To ensure every consultation receives the dedicated time, clinical mapping, and personalized care it deserves, we maintain a transparent policy.',
            feeAmount: '$50',
            feeNote: 'Includes dedicated time with your Board-Certified PA.',
            creditText: 'Same-day treatment applies your $50 fee directly toward your service!',
            ctaText: 'Book Consultation',
            ctaLink: 'https://suaglow.myaestheticrecord.com/online-booking/'
        },
        render: (p = {}) => `
<section id="consultation-policy" class="py-16 px-8 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="bg-off-white border border-charcoal/10 rounded-3xl p-8 md:p-12 shadow-sm animate-on-scroll fade-up">
            <div class="grid lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-charcoal/10 pb-6 lg:pb-0 lg:pr-6">
                    <span class="inline-flex items-center gap-2 px-3 py-1 bg-warm-gold/10 rounded-full text-[10px] tracking-widest uppercase text-warm-gold font-bold mb-3">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${p.badgeText}
                    </span>
                    <h2 class="heading-wide text-2xl md:text-3xl text-near-black mb-2">${p.title}</h2>
                    <p class="text-xs md:text-sm text-charcoal/70 font-light leading-relaxed">${p.description}</p>
                </div>

                <div class="lg:col-span-4 bg-white border border-charcoal/5 rounded-2xl p-6 text-center shadow-xs">
                    <div class="w-10 h-10 rounded-full bg-warm-gold/10 text-warm-gold flex items-center justify-center mx-auto mb-2">
                        <i data-lucide="calendar-check" class="w-5 h-5"></i>
                    </div>
                    <p class="text-xs uppercase font-bold text-taupe mb-1">Consultation Fee</p>
                    <p class="font-heading text-3xl font-bold text-warm-gold">${p.feeAmount}</p>
                    <p class="text-xs text-charcoal/60 mt-1">${p.feeNote}</p>
                </div>

                <div class="lg:col-span-3 flex flex-col gap-4">
                    <div class="bg-warm-gold/10 rounded-2xl p-4 border border-warm-gold/20 text-xs text-near-black leading-snug">
                        <strong class="font-semibold text-warm-gold block mb-1">Same-Day Application</strong>
                        ${p.creditText}
                    </div>
                    <a href="${p.ctaLink}" target="_blank" class="btn-primary text-center text-xs py-3">
                        ${p.ctaText}
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>`
    },

    'oligio-hero': {
        id: 'oligio-hero',
        name: 'Oligio X Dedicated Hero',
        category: 'hero',
        description: 'Bespoke hero section featuring high-end typography, dual CTAs, and in-use clinical imagery.',
        defaultProps: {
            badgeText: 'Next-Gen Korean RF Lifting',
            titleLine1: 'Seoul-Inspired RF Lifting.',
            titleLine2: 'Without Looking Overdone.',
            description: 'Experience Oligio X at SuA K-Glow Med Spa. Non-surgical skin tightening designed to stimulate collagen, refine contours, and restore youthful resilience.',
            primaryCtaText: 'Book Oligio X Consultation',
            primaryCtaLink: 'https://suaglow.myaestheticrecord.com/online-booking/',
            secondaryCtaText: 'Explore Technology',
            secondaryCtaLink: '#technology-comparison',
            imgSrc: 'assets/oligio-x/oligio-x-in-use.webp',
            imgAlt: 'Oligio X RF Treatment in Use'
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const img = resolveAsset(p.imgSrc, prefix);
            return `
<section id="oligio-hero" class="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-8 bg-off-white overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div class="lg:col-span-7 space-y-8 animate-on-scroll fade-right">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm-gold/10 border border-warm-gold/20 text-warm-gold text-xs font-semibold uppercase tracking-wider">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${p.badgeText}
            </div>
            <h1 class="heading-wide text-4xl sm:text-6xl text-near-black font-light leading-[1.1] [text-wrap:balance]">
                ${p.titleLine1}<br><span class="font-normal text-warm-gold">${p.titleLine2}</span>
            </h1>
            <p class="text-base sm:text-lg text-charcoal/80 font-light max-w-xl leading-relaxed">
                ${p.description}
            </p>
            <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="${p.primaryCtaLink}" target="_blank" class="btn-primary">${p.primaryCtaText}</a>
                <a href="${p.secondaryCtaLink}" class="btn-outline">${p.secondaryCtaText}</a>
            </div>
        </div>
        <div class="lg:col-span-5 animate-on-scroll fade-left">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-light-gray/40 aspect-[4/5] bg-white">
                <img src="${img}" alt="${p.imgAlt || 'Oligio X'}" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'oligio-treatment-zones': {
        id: 'oligio-treatment-zones',
        name: 'Oligio X Treatment Zones Interactive Map',
        category: 'outliers',
        description: 'Anatomy-first customization layout with central model portrait, SVG gold connector lines, 8 facial zone cards, and common concern badges.',
        defaultProps: {
            badgeText: 'Anatomy-First Customization',
            sectionTitle: 'One Device. Multiple Treatment Zones.',
            sectionSubtitle: 'Oligio X utilizes monopolar radiofrequency technology to support collagen remodeling across multiple areas of the face and neck. Treatment plans are customized to your anatomy, concerns, and long-term goals rather than following a one-size-fits-all approach.',
            modelImg: 'assets/oligio-x/model-treatment-zones.png',
            concerns: [
                'Early Skin Laxity', 'Jawline Softening', 'Lower-Face Heaviness', 'Under-Chin Fullness', 'Neck Aging Concerns', 'Loss of Facial Definition', 'Prevention-Focused Aging Care'
            ]
        },
        render: (p = {}, opt = {}) => {
            const prefix = opt.assetPrefix || '';
            const modelSrc = resolveAsset(p.modelImg || 'assets/oligio-x/model-treatment-zones.png', prefix);
            return `
<section id="treatment-zones" class="py-24 px-6 bg-off-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-glass !text-taupe !bg-taupe/10 !border-taupe/20 mb-4 inline-block uppercase tracking-wider text-[10px]">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl mb-6 text-near-black leading-tight [text-wrap:balance]">${p.sectionTitle}</h2>
            <p class="text-base font-light opacity-75 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
                ${p.sectionSubtitle}
            </p>
        </div>

        <!-- Interactive Map Container -->
        <div class="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
            <!-- Central Portrait Visual -->
            <div class="order-1 lg:order-2 relative w-full lg:w-2/4 max-w-[340px] sm:max-w-[400px] aspect-[4/5] flex justify-center items-center z-10">
                <div class="absolute inset-0 bg-gradient-to-tr from-warm-gold/5 to-transparent blur-2xl rounded-full"></div>
                
                <div class="relative w-full h-full rounded-[2rem] overflow-hidden border border-light-gray/30 shadow-2xl bg-white">
                    <img src="${modelSrc}" alt="Oligio X Face Treatment Map" class="w-full h-full object-cover contrast-[1.05] brightness-[1.02]">
                    <div class="absolute inset-0 bg-near-black/5 mix-blend-multiply pointer-events-none"></div>
                </div>

                <!-- SVG Connector Lines and Glowing Dots -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-gold-lib" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <!-- Left Lines -->
                    <path d="M 0 60 L 105 60 L 158 105" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />
                    <path d="M 0 190 L 100 190 L 155 144" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />
                    <path d="M 0 320 L 105 320 L 158 203" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />
                    <path d="M 0 450 L 130 450 L 187 330" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />

                    <!-- Right Lines -->
                    <path d="M 400 60 L 260 60 L 153 127" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />
                    <path d="M 400 190 L 245 190 L 131 227" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />
                    <path d="M 400 320 L 295 320 L 199 266" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />
                    <path d="M 400 450 L 275 450 L 170 288" stroke="#d4af37" stroke-width="2" stroke-dasharray="3 3" class="hidden lg:block opacity-60" />

                    <!-- Yellow Glowing Dots -->
                    <g><circle cx="158" cy="105" r="10" fill="#ffffff" class="opacity-30" /><circle cx="158" cy="105" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="155" cy="144" r="10" fill="#ffffff" class="opacity-30" /><circle cx="155" cy="144" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="158" cy="203" r="10" fill="#ffffff" class="opacity-30" /><circle cx="158" cy="203" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="187" cy="330" r="10" fill="#ffffff" class="opacity-30" /><circle cx="187" cy="330" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="153" cy="127" r="10" fill="#ffffff" class="opacity-30" /><circle cx="153" cy="127" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="131" cy="227" r="10" fill="#ffffff" class="opacity-30" /><circle cx="131" cy="227" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="199" cy="266" r="10" fill="#ffffff" class="opacity-30" /><circle cx="199" cy="266" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                    <g><circle cx="170" cy="288" r="10" fill="#ffffff" class="opacity-30" /><circle cx="170" cy="288" r="5" fill="#d4af37" filter="url(#glow-gold-lib)" /></g>
                </svg>
            </div>

            <!-- Left Side Labels (4 cards) -->
            <div class="order-2 lg:order-1 w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6 lg:text-right justify-between lg:h-[500px] z-20">
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Forehead</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Support skin firmness and smooth the appearance of early skin laxity.</p>
                </div>
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Eye Area</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Address crepey skin and support a refreshed, more awake appearance.</p>
                </div>
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Cheeks</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Support collagen renewal and facial contour refinement.</p>
                </div>
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Neck</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Improve skin firmness and support a smoother jaw-to-neck transition.</p>
                </div>
            </div>

            <!-- Right Side Labels (4 cards) -->
            <div class="order-3 w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6 text-left justify-between lg:h-[500px] z-20">
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Brow Area</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Support upper-face firmness and natural-looking brow definition.</p>
                </div>
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Smile Lines</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Support collagen remodeling in areas prone to volume and elasticity changes.</p>
                </div>
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Jawline</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Help improve lower-face definition and facial contours.</p>
                </div>
                <div class="p-4 rounded-2xl bg-white/80 border border-light-gray/40 hover:border-warm-gold/50 hover:shadow-md transition-all">
                    <h4 class="heading-wide text-xs text-near-black font-semibold uppercase tracking-wider mb-1">Under Chin</h4>
                    <p class="text-[11px] font-light text-charcoal/80 leading-relaxed">Support skin tightening and contour refinement beneath the jawline.</p>
                </div>
            </div>
        </div>

        <!-- Common Concerns Badges -->
        <div class="bg-white p-6 sm:p-8 rounded-3xl border border-light-gray/60 max-w-4xl mx-auto text-center mt-16 sm:mt-20 shadow-soft">
            <p class="heading-wide text-xs text-near-black uppercase tracking-wider mb-6 font-bold">Common Concerns We Address</p>
            <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
                ${(p.concerns || []).map(c => `
                <span class="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-off-white rounded-full border border-light-gray/50 text-[11px] sm:text-xs font-light text-charcoal shadow-xs hover:border-warm-gold/40 hover:text-near-black transition-all">
                    ${c}
                </span>`).join('')}
            </div>
        </div>
    </div>
</section>`;
        }
    },

    'oligio-vs-original': {
        id: 'oligio-vs-original',
        name: 'Oligio vs Oligio X Evolution Comparison',
        category: 'outliers',
        description: 'Generational upgrade comparison explaining how Oligio X advances the original Oligio platform.',
        defaultProps: {
            badgeText: 'From Oligio to Oligio X',
            sectionTitle: 'How Oligio X Advances Monopolar RF',
            originalDesc: 'Oligio became one of South Korea’s leading monopolar RF technologies by focusing on collagen support and natural-looking rejuvenation.',
            upgrades: [
                'Dual Energy Modes (G-Mode & F-Mode) for customizable depth',
                'Advanced 4-stage intelligent cryo-cooling system',
                'Integrated vibration sensation control for maximum comfort',
                'Faster shot delivery and optimized clinical workflow'
            ],
            conclusion: 'Same collagen-first philosophy. Next-generation technology.'
        },
        render: (p = {}) => `
<section id="oligio-comparison" class="py-24 px-8 md:px-12 bg-charcoal text-white relative overflow-hidden">
    <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-16 animate-on-scroll fade-up">
            <span class="badge-glass !text-warm-gold !bg-warm-gold/10 !border-warm-gold/20 mb-4 inline-block uppercase tracking-wider text-[10px]">${p.badgeText}</span>
            <h2 class="heading-wide text-3xl md:text-5xl text-white leading-tight max-w-3xl mx-auto [text-wrap:balance]">${p.sectionTitle}</h2>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 animate-on-scroll fade-up">
            <div class="w-full lg:flex-1 bg-white p-8 md:p-10 rounded-[2.5rem] text-near-black shadow-soft">
                <h3 class="heading-wide text-2xl text-near-black mb-4">Original Oligio</h3>
                <p class="text-sm font-light text-charcoal/80 leading-relaxed">${p.originalDesc}</p>
            </div>
            
            <div class="flex items-center justify-center shrink-0 text-warm-gold transform rotate-90 lg:rotate-0">
                <i data-lucide="arrow-right" class="w-8 h-8"></i>
            </div>
            
            <div class="w-full lg:flex-1 bg-white p-8 md:p-10 rounded-[2.5rem] text-near-black shadow-soft border-2 border-warm-gold/30">
                <h3 class="heading-wide text-2xl text-near-black mb-4">Oligio X (Next-Gen)</h3>
                <ul class="space-y-3 text-xs md:text-sm font-light text-charcoal/90 mb-6">
                    ${(p.upgrades || []).map(up => `
                    <li class="flex items-center gap-3">
                        <i data-lucide="check" class="w-4 h-4 text-warm-gold"></i>
                        <span>${up}</span>
                    </li>`).join('')}
                </ul>
                <div class="pt-4 border-t border-light-gray/40 text-xs font-semibold text-warm-gold">
                    ${p.conclusion}
                </div>
            </div>
        </div>
    </div>
</section>`
    },

    'oligio-alternatives-philosophy': {
        id: 'oligio-alternatives-philosophy',
        name: 'Oligio X Alternatives & Philosophy Breakdown',
        category: 'philosophy',
        description: 'Comprehensive breakdown explaining the clinical differences between Thermage, Ultherapy, and Oligio X.',
        defaultProps: {
            badgeText: 'Our Treatment Philosophy',
            title: 'Why SuA Glow Chose Oligio X',
            description: 'At SuA Glow, we selected Oligio X because it aligns with our Seoul-inspired philosophy of skin quality first rather than aggressive overcorrection.',
            priorities: [
                'Natural collagen support and fibroblast renewal',
                'Preserving youthful elasticity without stiffness',
                'Facial contour refinement without surgical downtime',
                'Prevention-focused, sustainable aging care'
            ]
        },
        render: (p = {}) => `
<section id="alternatives-philosophy" class="py-24 px-8 md:px-12 bg-off-white border-t border-b border-light-gray/40">
    <div class="max-w-5xl mx-auto space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll fade-up">
            <div class="bg-white p-8 rounded-3xl border border-light-gray/50 shadow-soft space-y-4">
                <h3 class="heading-wide text-base text-near-black font-semibold uppercase tracking-wider">What is Thermage®?</h3>
                <p class="text-xs md:text-sm font-light text-charcoal/80 leading-relaxed">
                    Thermage® is a well-known monopolar radiofrequency treatment used globally for deep tissue heating. It remains an established benchmark for skin tightening with traditional sensation profiles.
                </p>
            </div>
            <div class="bg-white p-8 rounded-3xl border border-light-gray/50 shadow-soft space-y-4">
                <h3 class="heading-wide text-base text-near-black font-semibold uppercase tracking-wider">What is Ultherapy®?</h3>
                <p class="text-xs md:text-sm font-light text-charcoal/80 leading-relaxed">
                    Ultherapy® uses micro-focused ultrasound to target deep SMAS muscular layers. It is often selected when deep structural lifting is required as part of comprehensive rejuvenation.
                </p>
            </div>
        </div>
        
        <div class="bg-white p-8 md:p-12 rounded-[2.5rem] border border-light-gray/50 shadow-soft space-y-6 animate-on-scroll fade-up">
            <span class="badge-standard inline-block">${p.badgeText}</span>
            <h3 class="heading-wide text-2xl text-near-black font-bold uppercase tracking-wider">${p.title}</h3>
            <p class="text-xs md:text-sm font-light text-charcoal/80 leading-relaxed">
                ${p.description}
            </p>
            <div class="space-y-4">
                <p class="text-xs font-semibold text-warm-gold uppercase tracking-wider">Rather than focusing solely on aggressive pulling, our approach prioritizes:</p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-charcoal/90">
                    ${(p.priorities || []).map(pr => `
                    <li class="flex items-center gap-3">
                        <i data-lucide="check" class="w-4 h-4 text-warm-gold"></i>
                        <span>${pr}</span>
                    </li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
</section>`
    },

    'oligio-timeline-candidates': {
        id: 'oligio-timeline-candidates',
        name: 'Expectations Timeline & Candidate Suitability Matrix',
        category: 'benefits',
        description: 'Two-column breakdown pairing a progressive post-treatment recovery timeline with ideal candidate criteria, restrictions, and combination protocols.',
        defaultProps: {
            leftTitle: 'WHAT TO EXPECT AFTER TREATMENT',
            steps: [
                {
                    time: 'IMMEDIATELY AFTER TREATMENT',
                    desc: 'Mild redness, temporary warmth, slight swelling, or skin sensitivity. Most patients return to normal activities shortly afterward.'
                },
                {
                    time: '1–4 WEEKS',
                    desc: 'Skin may gradually begin appearing firmer, smoother, tighter, and more refreshed.'
                },
                {
                    time: '2–3 MONTHS',
                    desc: 'Collagen remodeling continues over time as skin quality and contour refinement gradually develop.'
                },
                {
                    time: 'MAINTENANCE',
                    desc: 'Many patients pursue maintenance treatments depending on age, collagen quality, lifestyle, skin goals, and preventative aging strategy.'
                }
            ],
            rightTitle: 'CANDIDATE & CARE DETAILS',
            idealDesc: 'Great for improving mild skin laxity, early facial sagging, jawline definition, skin firmness, fine lines, collagen support, preventative aging concerns, and overall skin quality. Popular among patients in their late 20s (prevention), 30s (maintenance), and 40s+ (contour and skin support).',
            unsuitableDesc: 'Pregnancy, implanted electronic devices, active skin infections, recent procedures, or certain medical conditions.',
            combinationDesc: 'Often combined with skin hydration, Korean skin boosters, LDM ultrasound facials, SkinTox, and glass skin protocols.'
        },
        render: (p = {}) => `
<section id="post-treatment-guide" class="py-24 px-6 lg:px-10 bg-off-white/80 border-t border-b border-light-gray/40">
    <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            
            <!-- Left Column: WHAT TO EXPECT AFTER TREATMENT Card -->
            <div class="bg-white/95 rounded-3xl p-8 sm:p-10 border border-light-gray/50 shadow-soft animate-on-scroll fade-right space-y-8">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-[#AA987C]/10 flex items-center justify-center text-[#AA987C] border border-[#AA987C]/20">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                    </div>
                    <h3 class="heading-wide text-xs sm:text-sm font-bold text-near-black uppercase tracking-[0.2em] [text-wrap:balance]">${p.leftTitle}</h3>
                </div>

                <div class="space-y-6 relative border-l-2 border-[#AA987C]/30 pl-6 ml-3">
                    ${(p.steps || []).map(s => `
                    <div class="relative group">
                        <div class="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#AA987C] group-hover:bg-[#AA987C] transition-colors"></div>
                        <h4 class="text-xs sm:text-sm font-bold text-near-black uppercase tracking-wider mb-1 [text-wrap:balance]">${s.time}</h4>
                        <p class="text-xs sm:text-sm font-light text-charcoal/80 leading-relaxed">${s.desc}</p>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Right Column: CANDIDATE & CARE DETAILS -->
            <div class="space-y-6 animate-on-scroll fade-left">
                <div class="flex items-center gap-3 px-2">
                    <div class="w-10 h-10 rounded-full bg-[#AA987C]/10 flex items-center justify-center text-[#AA987C] border border-[#AA987C]/20">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <h3 class="heading-wide text-xs sm:text-sm font-bold text-near-black uppercase tracking-[0.2em] [text-wrap:balance]">${p.rightTitle}</h3>
                </div>

                <div class="space-y-6">
                    <!-- Ideal Candidates Card -->
                    <div class="bg-white/95 rounded-3xl p-8 border border-light-gray/50 shadow-soft hover:border-[#AA987C]/30 transition-all duration-300">
                        <div class="flex items-center gap-2.5 mb-3 text-[#AA987C]">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <h4 class="text-xs sm:text-sm font-bold text-near-black uppercase tracking-wider [text-wrap:balance]">IDEAL CANDIDATES</h4>
                        </div>
                        <p class="text-xs sm:text-sm font-light text-charcoal/80 leading-relaxed">
                            ${p.idealDesc}
                        </p>
                    </div>

                    <!-- 2-Column Cards Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- Who May Not Be Suitable -->
                        <div class="bg-white/95 rounded-3xl p-6 sm:p-7 border border-light-gray/50 shadow-soft hover:border-[#AA987C]/30 transition-all duration-300 flex flex-col justify-between space-y-3">
                            <div>
                                <div class="flex items-center gap-2 mb-2 text-[#AA987C]">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="12" y1="8" x2="12" y2="12"/>
                                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                                    </svg>
                                    <h4 class="text-xs font-bold text-near-black uppercase tracking-wider [text-wrap:balance]">WHO MAY NOT BE SUITABLE</h4>
                                </div>
                                <p class="text-xs font-light text-charcoal/80 leading-relaxed">${p.unsuitableDesc}</p>
                            </div>
                        </div>

                        <!-- Combination Treatments -->
                        <div class="bg-white/95 rounded-3xl p-6 sm:p-7 border border-light-gray/50 shadow-soft hover:border-[#AA987C]/30 transition-all duration-300 flex flex-col justify-between space-y-3">
                            <div>
                                <div class="flex items-center gap-2 mb-2 text-[#AA987C]">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                                        <path d="M12 3l2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5z"/>
                                    </svg>
                                    <h4 class="text-xs font-bold text-near-black uppercase tracking-wider [text-wrap:balance]">COMBINATION TREATMENTS</h4>
                                </div>
                                <p class="text-xs font-light text-charcoal/80 leading-relaxed">${p.combinationDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>`
    }
};

/**
 * Render a section's HTML by its ID and optional custom props.
 */
export function renderSection(id, customProps = {}, options = {}) {
    const item = SECTION_LIBRARY[id];
    if (!item) {
        console.warn(`Section with ID "${id}" not found in library.`);
        return `<!-- Section [${id}] not found -->`;
    }
    const mergedProps = { ...item.defaultProps, ...customProps };
    return item.render(mergedProps, options);
}

/**
 * Injects a section into a target DOM container and reinitializes Lucide icons.
 */
export function injectSection(targetEl, id, customProps = {}, options = {}) {
    const container = typeof targetEl === 'string' ? document.querySelector(targetEl) : targetEl;
    if (!container) return;
    container.innerHTML = renderSection(id, customProps, options);
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

/**
 * Generates complete starter HTML boilerplate for a new page using selected sections.
 */
export function generatePageHtml(sectionIds = STANDARD_FLOW_BLUEPRINT, pageMeta = {}, customPropsMap = {}) {
    const title = pageMeta.title || 'New Treatment | SuA K Glow Med Spa';
    const description = pageMeta.description || 'Korean Medical Aesthetics Treatment in Carrollton, TX.';
    
    const sectionsHtml = sectionIds.map(id => {
        const props = customPropsMap[id] || {};
        return `\n    <!-- Section: ${id} -->\n` + renderSection(id, props, { assetPrefix: '' });
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="icon" href="assets/favicon.png" type="image/png">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;800;900&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="dist/output.css?v=43">

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-off-white text-charcoal antialiased selection:bg-taupe selection:text-white">
    <!-- Navbar injected here -->
    <div id="nav-placeholder"></div>

    <main>
${sectionsHtml}
    </main>

    <!-- Footer injected here -->
    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="navbar.js"></script>
    <script src="footer.js"></script>
    <script src="script.js"></script>
</body>
</html>`;
}
