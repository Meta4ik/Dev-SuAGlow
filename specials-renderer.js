/**
 * SuA K Glow - Monthly Specials Renderer Engine
 * ---------------------------------------------
 * Dynamically builds the interactive Specials UI with dual views:
 * View 1 (3-Step Interactive Program): Modern web layout with step cards, price tags, and additional featured offers.
 * View 2 (4:5 Print Flyer Poster): Exact 4:5 ratio printable canvas matching your wireframe layout with lower-right prices.
 */

function renderMonthlySpecials(customConfig) {
    const config = customConfig || (typeof MONTHLY_SPECIALS_CONFIG !== 'undefined' ? MONTHLY_SPECIALS_CONFIG : null);
    if (!config) {
        console.error('MONTHLY_SPECIALS_CONFIG is not defined. Please include specials-data.js before specials-renderer.js or pass config to renderMonthlySpecials(config).');
        return '';
    }

    const { meta, featuredSteps, additionalPromos, brandPillars } = config;

    // --- VIEW 1: Web Interactive 3-Step Cards ---
    const webStepsHTML = featuredSteps.map((stepItem, index) => {
        const delayClass = `delay-${(index + 1) * 100}`;
        const tagsHTML = stepItem.tags ? stepItem.tags.map(tag => 
            `<span class="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-warm-gold/10 text-warm-gold rounded-full border border-warm-gold/20">${tag}</span>`
        ).join(' ') : '';

        return `
            <div class="bg-white rounded-[24px] border border-warm-gold/30 p-4 md:p-6 pl-4 md:pl-56 shadow-soft hover:shadow-2xl transition-all duration-500 flex flex-col md:grid md:grid-cols-[1fr_auto] items-stretch gap-6 md:gap-8 group animate-on-scroll fade-up relative min-h-[160px] overflow-hidden ${delayClass}" style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.50) 55%, rgba(253, 248, 240, 0.10) 100%), url('${meta.cardBackground || 'assets/dallas_fall_card_bg.jpg'}'); background-size: cover; background-position: center;">
                <!-- Left Image Container (Equal Top, Left & Bottom Margins) -->
                <div class="w-full md:w-44 h-48 md:h-auto md:absolute md:top-4 md:bottom-4 md:left-4 rounded-[18px] overflow-hidden bg-off-white shrink-0 border border-charcoal/10 relative z-10">
                    <img src="${stepItem.image}" alt="${stepItem.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                </div>

                <!-- Center: Content Area (Full height flex column) -->
                <div class="text-left flex flex-col justify-between h-full py-1 pr-0 md:pr-4">
                    <div>
                        <span class="text-[10px] tracking-[0.3em] font-bold text-warm-gold uppercase block mb-1">${stepItem.badge}</span>
                        <h3 class="font-heading text-xl md:text-2xl text-near-black tracking-wide mb-1">${stepItem.title}</h3>
                        <p class="font-body text-xs font-semibold text-taupe tracking-wider uppercase mb-2">${stepItem.subtitle}</p>
                        <p class="font-body text-sm text-charcoal/70 leading-relaxed mb-4">${stepItem.description}</p>
                    </div>
                    <div class="flex flex-wrap gap-2">${tagsHTML}</div>
                </div>

                <!-- Right Column: Price Top + Book Button Bottom (Clean vertical separation) -->
                <div class="flex flex-col justify-between items-center md:items-end h-full py-1 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-charcoal/5">
                    <!-- Top Right Price -->
                    <div class="text-center md:text-right mb-4 md:mb-0">
                        ${stepItem.price ? `
                            <span class="font-body text-2xl md:text-3xl font-extrabold text-near-black tracking-tight leading-none block">${stepItem.price}</span>
                            ${stepItem.priceDetail ? `<span class="block text-[10px] text-taupe font-bold tracking-wider uppercase mt-1">${stepItem.priceDetail}</span>` : ''}
                        ` : ''}
                    </div>

                    <!-- Bottom Right Book Button -->
                    <div>
                        <a href="${stepItem.bookingUrl}" target="_blank" class="btn-primary text-xs py-3 px-6 inline-flex items-center justify-center gap-2 w-full md:w-auto shadow-md whitespace-nowrap">
                            <span>Book Now</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Additional Offers Grid HTML
    const additionalPromosHTML = (additionalPromos && additionalPromos.length > 0) ? `
        <div class="mt-16">
            <div class="text-center mb-10">
                <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe block mb-1">More Featured Offers</span>
                <h3 class="heading-wide text-2xl text-near-black">Exclusive Add-On Treatments</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${additionalPromos.map((promo, index) => {
                    const delayClass = `delay-${(index + 1) * 100}`;
                    return `
                        <div class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up ${delayClass}">
                            <div class="h-60 overflow-hidden bg-charcoal/5 relative">
                                <img src="${promo.image}" alt="${promo.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <div class="p-8 text-center flex flex-col flex-1">
                                <span class="text-[9px] tracking-[0.3em] text-warm-gold uppercase font-bold mb-2">${promo.badge}</span>
                                <h3 class="heading-wide text-lg mb-3 text-near-black">${promo.title}</h3>
                                <div class="mb-4 flex justify-center items-end gap-2">
                                    <span class="font-body text-2xl font-extrabold text-near-black tracking-tight">${promo.price}</span>
                                    ${promo.originalPrice ? `<span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular ${promo.originalPrice}</span>` : ''}
                                </div>
                                <p class="font-body text-xs text-charcoal/60 mb-6 leading-relaxed flex-1">${promo.description}</p>
                                <a href="${promo.bookingUrl}" target="_blank" class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book Now</a>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    ` : '';

    // Brand Pillars HTML
    const pillarsCount = brandPillars ? brandPillars.length : 4;
    const gridColsClass = pillarsCount === 5 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-2 md:grid-cols-4';
    const pillarsHTML = (brandPillars || []).map(pillar => `
        <div class="flex items-center gap-3 justify-center text-left">
            <div class="w-10 h-10 rounded-full bg-warm-gold/10 text-warm-gold flex items-center justify-center shrink-0 border border-warm-gold/20">
                <i data-lucide="${pillar.icon}" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-heading text-xs font-bold text-near-black uppercase tracking-wider">${pillar.title}</h4>
                <p class="font-body text-[10px] text-taupe tracking-wide">${pillar.subtitle}</p>
            </div>
        </div>
    `).join('');

    // --- VIEW 2: 4:5 Aspect Ratio Print Flyer Canvas (Matching Wireframe Layout) ---
    const flyerCardsHTML = featuredSteps.map((stepItem) => {
        return `
            <div class="bg-white/95 rounded-[16px] border border-charcoal/15 p-3.5 pl-32 sm:pl-36 shadow-sm relative flex flex-col justify-center min-h-[132px] sm:min-h-[138px] overflow-hidden group w-full max-w-[590px]">
                <!-- Product / Service Image (Left) -->
                <div class="absolute top-3 bottom-3 left-3 w-24 sm:w-26 rounded-xl bg-off-white shrink-0 border border-charcoal/10 overflow-hidden">
                    <img src="${stepItem.image}" alt="${stepItem.title}" class="w-full h-full object-cover">
                </div>

                <!-- Center Content: Benefit, Name, Product, Details -->
                <div class="text-left pr-28 sm:pr-30">
                    <span class="text-[9px] tracking-[0.2em] font-bold text-warm-gold uppercase block mb-0.5">
                        ${stepItem.badge}
                    </span>
                    <h3 class="font-heading text-base sm:text-[17px] text-near-black font-bold tracking-wider leading-snug">
                        ${stepItem.title}
                    </h3>
                    <p class="font-body text-[11px] font-semibold text-taupe tracking-wide mb-1">
                        ${stepItem.subtitle}
                    </p>
                    <p class="font-body text-[10px] text-charcoal/80 leading-relaxed">
                        ${stepItem.description}
                    </p>
                </div>

                <!-- Lower Right Corner: Price Block -->
                <div class="absolute bottom-3 right-3.5 text-right max-w-[130px]">
                    <div class="font-body text-xl font-extrabold text-near-black tracking-tight leading-none">
                        ${stepItem.price}
                    </div>
                    ${stepItem.priceDetail ? `<span class="text-[8px] font-bold text-taupe uppercase tracking-wider block mt-1 leading-snug">${stepItem.priceDetail}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');

    const flyerPillarsText = (brandPillars && brandPillars.length > 0)
        ? brandPillars.map(p => `${p.title}: ${p.subtitle}`).join(' • ')
        : 'KOREAN EXPERTISE • PHYSICIAN GUIDED CARE • CUSTOMIZED TREATMENT • HEALTHY SKIN. LASTING GLOW.';

    return `
        <!-- Main Campaign Header Section -->
        <section id="promotions-hero" data-nav-theme="light" class="py-16 md:py-24 bg-off-white relative overflow-hidden">
            <div class="starburst-container"><div class="sb-3"></div></div>
            <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                
                <!-- Title Header -->
                <div class="text-center max-w-3xl mx-auto mb-12 animate-on-scroll fade-up">
                    ${meta.pill ? `
                        <div class="mb-3">
                            <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase bg-[#721c24]/10 text-[#8b2635] border border-[#721c24]/20 shadow-sm">
                                <i data-lucide="sparkles" class="w-3 h-3 text-[#8b2635]"></i>
                                ${meta.pill}
                            </span>
                        </div>
                    ` : ''}
                    <span class="inline-block text-[10px] md:text-xs tracking-[0.4em] text-warm-gold uppercase font-bold mb-4 italic whitespace-nowrap">${meta.badge}</span>
                    <h1 class="heading-wide text-3xl md:text-5xl text-near-black mb-4 uppercase tracking-[0.15em] leading-tight">${meta.title}</h1>
                    <p class="font-body text-taupe italic tracking-widest opacity-90 uppercase text-xs md:text-sm mb-4">${meta.subtitle}</p>
                    ${meta.tagline ? `<p class="font-body text-xs md:text-sm text-charcoal/70 max-w-xl mx-auto mb-6 leading-relaxed">${meta.tagline}</p>` : ''}
                    <div class="w-24 h-[1px] bg-warm-gold/40 mx-auto"></div>
                </div>

                <!-- Highlight Offer Callout Banner -->
                <div class="max-w-4xl mx-auto mb-12 animate-on-scroll fade-up">
                    <div class="bg-gradient-to-r from-near-black via-near-black/95 to-near-black text-white p-8 md:p-10 rounded-[28px] shadow-2xl border border-warm-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative overflow-hidden">
                        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-warm-gold/10 rounded-full blur-2xl"></div>
                        <div class="z-10">
                            <span class="text-[10px] uppercase tracking-[0.3em] text-warm-gold font-bold block mb-2">Exclusive Offer</span>
                            <h2 class="font-heading text-xl md:text-3xl text-white font-bold tracking-wide leading-snug">${meta.offerCallout}</h2>
                            <p class="font-body text-xs text-white/70 mt-2">Book your consultation during ${meta.month} to redeem.</p>
                        </div>
                        <a href="${meta.bookingUrl}" target="_blank" class="btn-primary shrink-0 z-10 py-4 px-8 text-xs font-bold tracking-widest shadow-lg">
                            Claim Offer Today
                        </a>
                    </div>
                </div>

                <!-- View Switcher Tabs (3-Step Program vs 4:5 Print Flyer) -->
                <div class="mb-12 text-center animate-on-scroll fade-up">
                    <div class="inline-flex p-1.5 bg-white rounded-full border border-charcoal/10 shadow-sm">
                        <button id="tab-program-btn" onclick="switchSpecialsTab('program')" class="px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 bg-near-black text-warm-gold shadow">
                            Featured Offers
                        </button>
                        <button id="tab-poster-btn" onclick="switchSpecialsTab('poster')" class="px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 text-charcoal/60 hover:text-near-black">
                            Share Flyer
                        </button>
                    </div>
                </div>

                <!-- VIEW 1: Interactive 3-Step Program View -->
                <div id="specials-program-view" class="space-y-8 max-w-5xl mx-auto">
                    <div class="text-center mb-8">
                        <p class="font-body text-xs text-charcoal/60 uppercase tracking-widest">Inspired by Seoul's aesthetic protocols for seasonal skin & body renewal</p>
                    </div>
                    ${webStepsHTML}
                    ${additionalPromosHTML}

                    <!-- Brand Pillars -->
                    <div class="mt-20 pt-16 border-t border-charcoal/10 max-w-5xl mx-auto animate-on-scroll fade-up">
                        <div class="grid ${gridColsClass} gap-6 md:gap-8">
                            ${pillarsHTML}
                        </div>
                    </div>
                </div>

                <!-- VIEW 2: 4:5 Social Aspect Ratio Interactive Flyer View -->
                <div id="specials-poster-view" class="hidden max-w-[800px] mx-auto animate-on-scroll fade-up">
                    <div class="text-center mb-6 print:hidden">
                        <button onclick="downloadFlyerImage()" id="download-flyer-btn" class="px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-warm-gold bg-near-black hover:bg-warm-gold hover:text-near-black border border-warm-gold/40 hover:border-warm-gold shadow-md inline-flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer z-20">
                            <i data-lucide="download" class="w-4 h-4"></i> Click to Download and Share
                        </button>
                    </div>
                    
                    <div class="w-full flex justify-center">
                        <div id="flyer-card-element" class="w-full md:w-[800px] h-auto md:h-[1050px] bg-cover bg-top rounded-none shadow-2xl border border-charcoal/10 p-5 md:p-7 flex flex-col justify-between relative overflow-hidden text-near-black print:shadow-none print:border-none print:m-0 print:p-8 print:w-full print:max-w-none" style="background-image: url('${meta.flyerImage || 'assets/specials-flyer-model-bg.png'}'); background-position: right top; background-color: #faf8f5;">
                            <!-- Protective Soft Gradient Overlay (Left 58% only - Models on right remain 100% clear) -->
                            <div class="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-white/90 via-white/40 to-transparent pointer-events-none z-0"></div>
                            
                            <!-- Front Layer: Full Opacity Content Container -->
                            <div class="relative z-10 flex flex-col justify-between h-full flex-1">
                                <!-- Top Bar: Logo (Left) & Badge (Right) -->
                                <div class="flex flex-row justify-between items-start w-full pt-2 md:pt-3 mb-1">
                                    <img src="assets/logo-main.png" alt="SuA K Glow" class="h-9 md:h-11 w-auto object-contain opacity-100 mt-2 md:mt-3" onerror="this.onerror=null; this.src='assets/logo-main.webp';">
                                    <span class="text-[9.5px] md:text-[10px] font-heading tracking-[0.3em] font-extrabold text-warm-gold uppercase bg-near-black px-3.5 py-1.5 rounded-full border border-warm-gold/40 shadow-lg whitespace-nowrap inline-block">
                                        ${meta.badge}
                                    </span>
                                </div>

                                <!-- Balanced Main Headline: Centered between Top Bar and Service Blocks -->
                                <div class="text-left max-w-full md:max-w-[460px] my-auto py-2">
                                    <h2 class="heading-wide text-2xl sm:text-3xl md:text-[32px] text-near-black uppercase tracking-[0.15em] leading-tight font-medium opacity-100">
                                        ${meta.title}
                                    </h2>
                                    <p class="font-body text-xs md:text-sm text-taupe italic tracking-widest uppercase font-semibold mt-1.5 opacity-100 whitespace-nowrap">
                                        ${meta.subtitle}
                                    </p>
                                </div>

                                <!-- Service Cards Wireframe Layout (Pushed down close to black callout) -->
                                <div class="space-y-3 mb-2 w-full max-w-[590px]">
                                    ${flyerCardsHTML}
                                </div>

                                <!-- Bottom Offers Box -->
                                <div class="mt-1 bg-gradient-to-r from-near-black via-near-black/95 to-near-black text-white rounded-[16px] p-3 border border-warm-gold/40 shadow-xl flex flex-row items-center justify-between gap-3">
                                    <div class="w-auto shrink-0 pr-2 sm:pr-4 border-r border-white/20 text-left">
                                        <span class="text-[9px] tracking-[0.3em] text-warm-gold uppercase font-extrabold block mb-0.5">
                                            LIMITED TIME
                                        </span>
                                        <h3 class="font-heading text-sm sm:text-base md:text-lg text-white font-bold uppercase tracking-[0.12em] whitespace-nowrap">
                                            ${meta.month.toUpperCase()} OFFERS
                                        </h3>
                                    </div>
                                    <div class="w-auto shrink-0 pl-2 sm:pl-4 text-right">
                                        <span class="font-heading text-sm sm:text-base md:text-lg lg:text-xl text-warm-gold font-extrabold tracking-tight block whitespace-nowrap">
                                            SEOUL STYLE. DALLAS GLOW.
                                        </span>
                                        <span class="text-[8.5px] sm:text-[9.5px] text-white/90 font-body font-semibold block mt-0.5 whitespace-nowrap">
                                            Authentic K-Beauty Medical Aesthetics
                                        </span>
                                    </div>
                                </div>

                                <!-- Call To Action Text -->
                                <div class="mt-2 text-center">
                                    <a href="${meta.bookingUrl}" target="_blank" class="heading-wide text-xs md:text-sm font-semibold tracking-[0.25em] text-near-black hover:text-warm-gold transition-colors uppercase border-b-2 border-warm-gold/40 pb-0.5 inline-block">
                                        BOOK YOUR CONSULTATION TODAY.
                                    </a>
                                </div>

                                <!-- Brand Pillars Row -->
                                <div class="mt-2 pt-2 border-t border-charcoal/10 text-center">
                                    <p class="font-heading text-[8px] md:text-[9px] tracking-[0.2em] font-semibold text-taupe uppercase">
                                        ${flyerPillarsText}
                                    </p>
                                </div>

                                <!-- Footer Contact Info Bar -->
                                <div class="mt-2.5 bg-near-black text-white/90 py-2.5 px-4 md:px-6 rounded-xl text-[9px] md:text-[10px] flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3 text-center border border-warm-gold/20 shadow-md">
                                    <span class="font-body opacity-90 inline-flex items-center gap-1.5">
                                        <i data-lucide="map-pin" class="w-3.5 h-3.5 text-warm-gold shrink-0"></i>
                                        4116 State Highway 121, Suite 120, Carrollton, TX 75010
                                    </span>
                                    <span class="font-body opacity-90 inline-flex items-center gap-1.5">
                                        <i data-lucide="phone" class="w-3.5 h-3.5 text-warm-gold shrink-0"></i>
                                        972-665-8737
                                    </span>
                                    <span class="font-body opacity-90 inline-flex items-center gap-1.5">
                                        <i data-lucide="globe" class="w-3.5 h-3.5 text-warm-gold shrink-0"></i>
                                        suaglow.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Terms Fine Print -->
                <div class="mt-12 text-center text-[10px] text-charcoal/40 font-body italic max-w-2xl mx-auto">
                    ${meta.terms}
                </div>
            </div>
        </section>
    `;
}

// Tab Switcher Helper Function
function switchSpecialsTab(tab) {
    const programView = document.getElementById('specials-program-view');
    const posterView = document.getElementById('specials-poster-view');
    const programBtn = document.getElementById('tab-program-btn');
    const posterBtn = document.getElementById('tab-poster-btn');

    if (tab === 'program') {
        programView.classList.remove('hidden');
        posterView.classList.add('hidden');
        programBtn.className = "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 bg-near-black text-warm-gold shadow";
        posterBtn.className = "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 text-charcoal/60 hover:text-near-black";
    } else {
        programView.classList.add('hidden');
        posterView.classList.remove('hidden');
        posterBtn.className = "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 bg-near-black text-warm-gold shadow";
        programBtn.className = "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 text-charcoal/60 hover:text-near-black";
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

// Download / Share Flyer Image directly using assets/SuA-Glow-August-Specials.png
function downloadFlyerImage() {
    const downloadBtn = document.getElementById('download-flyer-btn');

    if (downloadBtn) {
        downloadBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Preparing Image...`;
        if (window.lucide) lucide.createIcons();
    }

    const resetBtn = () => {
        if (downloadBtn) {
            downloadBtn.innerHTML = `<i data-lucide="download" class="w-4 h-4"></i> Click to Download and Share`;
            if (window.lucide) lucide.createIcons();
        }
    };

    fetch('assets/SuA-Glow-August-Specials.png?v=999')
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], 'SuA-Glow-August-Specials.png', { type: 'image/png' });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({
                    title: 'SuA K Glow August Specials',
                    text: 'Check out SuA K Glow August Specials offers!',
                    files: [file]
                }).catch(err => {
                    console.log('Share sheet dismissed or failed:', err);
                    triggerDirectDownload(blob);
                }).finally(resetBtn);
            } else {
                triggerDirectDownload(blob);
                resetBtn();
            }
        })
        .catch(err => {
            console.error('Error loading flyer image asset:', err);
            const fallbackLink = document.createElement('a');
            fallbackLink.href = 'assets/SuA-Glow-August-Specials.png';
            fallbackLink.download = 'SuA-Glow-August-Specials.png';
            fallbackLink.target = '_blank';
            document.body.appendChild(fallbackLink);
            fallbackLink.click();
            document.body.removeChild(fallbackLink);
            resetBtn();
        });
}

function triggerDirectDownload(blob) {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'SuA-Glow-August-Specials.png';
    link.href = blobUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
}
