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
    window.__currentSpecialsConfig = config;

    const { meta, featuredSteps, additionalPromos, brandPillars } = config;

    const isOctober = (meta.month && meta.month.toLowerCase().includes('october')) || (meta.title && meta.title.toLowerCase().includes('october'));

    // --- VIEW 1: Web Interactive 3-Step Cards ---
    const webStepsHTML = featuredSteps.map((stepItem, index) => {
        const delayClass = `delay-${(index + 1) * 100}`;
        const cardBgImage = stepItem.cardBackground || meta.cardBackground || 'assets/dallas_fall_card_bg.jpg';
        const tagsHTML = stepItem.tags ? stepItem.tags.map(tag => 
            isOctober
                ? `<span class="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#de542f]/10 text-[#de542f] rounded-full border border-[#de542f]/25">${tag}</span>`
                : `<span class="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-warm-gold/10 text-warm-gold rounded-full border border-warm-gold/20">${tag}</span>`
        ).join(' ') : '';

        const badgeColor = isOctober ? 'text-[#de542f]' : 'text-warm-gold';
        const titleColor = isOctober ? 'text-[#3c0201]' : 'text-near-black';
        const cardBorderColor = isOctober ? 'border-[#e8a36e]/40 hover:border-[#de542f]/60' : 'border-warm-gold/30 hover:border-warm-gold/60';
        const hookColor = isOctober ? 'text-[#de542f]' : 'text-[#b85324]';
        const priceColor = isOctober ? 'text-[#3c0201]' : 'text-near-black';
        const ctaBtnClass = isOctober 
            ? 'btn-halloween btn-sm inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider' 
            : 'btn-primary btn-sm inline-flex items-center justify-center gap-2 w-full md:w-auto';
        const ctaBtnInlineStyle = isOctober ? 'style="background-color: #e13f00 !important; color: #ffffff !important;"' : '';

        if (isOctober) {
            // For October cards: full max-w-7xl width matching the site, background pushed far right so device is clearly visible,
            // gradient cleanly protects left text area while opening up the right side for the device.
            const cardBgInlineStyle = `background-color: #ffffff; background-image: linear-gradient(to right, #ffffff 0%, #ffffff 42%, rgba(255, 255, 255, 0.82) 54%, rgba(255, 255, 255, 0) 66%), url('${cardBgImage}'); background-size: auto 100%; background-position: right center; background-repeat: no-repeat;`;

            return `
                <div class="bg-white rounded-[24px] border ${cardBorderColor} p-4 md:p-6 pl-4 md:pl-56 shadow-soft hover:shadow-2xl transition-all duration-500 flex flex-col md:grid md:grid-cols-[1fr_auto] items-stretch gap-6 md:gap-8 group animate-on-scroll fade-up relative min-h-[160px] overflow-hidden w-full ${delayClass}" style="${cardBgInlineStyle}">
                    <!-- Left Image Container (4:5 Aspect Ratio on Mobile) -->
                    <div class="w-full md:w-44 aspect-[4/5] md:aspect-auto h-auto md:h-auto md:absolute md:top-4 md:bottom-4 md:left-4 rounded-[18px] overflow-hidden bg-off-white shrink-0 border border-charcoal/10 relative z-10">
                        <img src="${stepItem.image}" alt="${stepItem.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>

                    <!-- Center: Content Area -->
                    <div class="text-left flex flex-col justify-between h-full py-1 pr-0 md:pr-4 relative z-10">
                        <div>
                            <span class="text-[10px] tracking-[0.3em] font-bold ${badgeColor} uppercase block mb-1">${stepItem.badge}</span>
                            <h3 class="font-heading text-xl md:text-2xl ${titleColor} font-bold tracking-wide mb-1">${stepItem.title}</h3>
                            <p class="font-body text-xs font-semibold text-taupe tracking-wider uppercase mb-2">${stepItem.subtitle}</p>
                            ${stepItem.hook ? `<p class="font-serif italic text-sm md:text-base ${hookColor} font-semibold mb-2.5"><em>${stepItem.hook}</em></p>` : ''}
                            <p class="font-body text-sm text-charcoal/80 leading-relaxed mb-4 max-w-xl">${stepItem.description}</p>
                        </div>
                        <div class="flex flex-wrap gap-2">${tagsHTML}</div>
                    </div>

                    <!-- Right Column: Price Top + Book Button Bottom -->
                    <div class="flex flex-col justify-between items-center md:items-end h-full py-1 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-charcoal/5 z-10">
                        <!-- Top Right Price -->
                        <div class="text-center md:text-right mb-4 md:mb-0 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-[#e8a36e]/30 shadow-sm inline-block">
                            ${stepItem.price ? `
                                <span class="font-body text-2xl md:text-3xl font-extrabold ${priceColor} tracking-tight leading-none block">${stepItem.price}</span>
                                ${stepItem.priceDetail ? `<span class="block text-[10px] ${isOctober ? 'text-[#de542f]' : 'text-taupe'} font-bold tracking-wider uppercase mt-1">${stepItem.priceDetail}</span>` : ''}
                            ` : ''}
                        </div>

                        <!-- Bottom Right Book Button -->
                        <div>
                            <a href="${stepItem.bookingUrl}" target="_blank" class="${ctaBtnClass}" ${ctaBtnInlineStyle}>
                                <span>Book Now</span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        const cardBgInlineStyle = `background-image: linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 50%, rgba(255, 255, 255, 0.70) 75%, rgba(255, 255, 255, 0.25) 100%), url('${cardBgImage}'); background-size: cover; background-position: right center;`;

        return `
            <div class="bg-white rounded-[24px] border ${cardBorderColor} p-4 md:p-6 pl-4 md:pl-56 shadow-soft hover:shadow-2xl transition-all duration-500 flex flex-col md:grid md:grid-cols-[1fr_auto] items-stretch gap-6 md:gap-8 group animate-on-scroll fade-up relative min-h-[160px] overflow-hidden ${delayClass}" style="${cardBgInlineStyle}">
                <!-- Left Image Container (4:5 Aspect Ratio on Mobile to show full image) -->
                <div class="w-full md:w-44 aspect-[4/5] md:aspect-auto h-auto md:h-auto md:absolute md:top-4 md:bottom-4 md:left-4 rounded-[18px] overflow-hidden bg-off-white shrink-0 border border-charcoal/10 relative z-10">
                    <img src="${stepItem.image}" alt="${stepItem.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                </div>

                <!-- Center: Content Area (Full height flex column) -->
                <div class="text-left flex flex-col justify-between h-full py-1 pr-0 md:pr-4 relative z-10">
                    <div>
                        <span class="text-[10px] tracking-[0.3em] font-bold ${badgeColor} uppercase block mb-1">${stepItem.badge}</span>
                        <h3 class="font-heading text-xl md:text-2xl ${titleColor} font-bold tracking-wide mb-1">${stepItem.title}</h3>
                        <p class="font-body text-xs font-semibold text-taupe tracking-wider uppercase mb-2">${stepItem.subtitle}</p>
                        ${stepItem.hook ? `<p class="font-serif italic text-sm md:text-base ${hookColor} font-semibold mb-2.5"><em>${stepItem.hook}</em></p>` : ''}
                        <p class="font-body text-sm text-charcoal/80 leading-relaxed mb-4 max-w-2xl">${stepItem.description}</p>
                    </div>
                    <div class="flex flex-wrap gap-2">${tagsHTML}</div>
                </div>

                <!-- Right Column: Price Top + Book Button Bottom (Clean vertical separation) -->
                <div class="flex flex-col justify-between items-center md:items-end h-full py-1 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-charcoal/5 z-10">
                    <!-- Top Right Price -->
                    <div class="text-center md:text-right mb-4 md:mb-0 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border ${isOctober ? 'border-[#e8a36e]/30' : 'border-white/80'} shadow-sm inline-block">
                        ${stepItem.price ? `
                            <span class="font-body text-2xl md:text-3xl font-extrabold ${priceColor} tracking-tight leading-none block">${stepItem.price}</span>
                            ${stepItem.priceDetail ? `<span class="block text-[10px] ${isOctober ? 'text-[#de542f]' : 'text-taupe'} font-bold tracking-wider uppercase mt-1">${stepItem.priceDetail}</span>` : ''}
                        ` : ''}
                    </div>

                    <!-- Bottom Right Book Button -->
                    <div>
                        <a href="${stepItem.bookingUrl}" target="_blank" class="${ctaBtnClass}" ${ctaBtnInlineStyle}>
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
            <div class="w-10 h-10 rounded-full ${isOctober ? 'bg-[#de542f]/15 text-[#de542f] border-[#de542f]/30' : 'bg-warm-gold/10 text-warm-gold border-warm-gold/20'} flex items-center justify-center shrink-0 border">
                <i data-lucide="${pillar.icon}" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-heading text-xs font-bold text-near-black uppercase tracking-wider">${pillar.title}</h4>
                <p class="font-body text-[10px] ${isOctober ? 'text-[#de542f]' : 'text-taupe'} tracking-wide">${pillar.subtitle}</p>
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
                    <span class="text-[9px] tracking-[0.2em] font-bold ${isOctober ? 'text-[#de542f]' : 'text-warm-gold'} uppercase block mb-0.5">
                        ${stepItem.badge}
                    </span>
                    <h3 class="font-heading text-base sm:text-[17px] ${isOctober ? 'text-[#3c0201]' : 'text-near-black'} font-bold tracking-wider leading-snug">
                        ${stepItem.title}
                    </h3>
                    <p class="font-body text-[11px] font-semibold text-taupe tracking-wide mb-1">
                        ${stepItem.subtitle}
                    </p>
                    ${stepItem.hook ? `<p class="font-serif italic text-[10.5px] ${isOctober ? 'text-[#de542f]' : 'text-[#b85324]'} font-semibold mb-1"><em>${stepItem.hook}</em></p>` : ''}
                    <p class="font-body text-[10px] text-charcoal/80 leading-relaxed">
                        ${stepItem.description}
                    </p>
                </div>

                <!-- Lower Right Corner: Price Block -->
                <div class="absolute bottom-3 right-3.5 text-right max-w-[130px]">
                    <div class="font-body text-xl font-extrabold ${isOctober ? 'text-[#3c0201]' : 'text-near-black'} tracking-tight leading-none">
                        ${stepItem.price}
                    </div>
                    ${stepItem.priceDetail ? `<span class="text-[8px] font-bold ${isOctober ? 'text-[#de542f]' : 'text-taupe'} uppercase tracking-wider block mt-1 leading-snug">${stepItem.priceDetail}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');

    const flyerPillarsText = (brandPillars && brandPillars.length > 0)
        ? brandPillars.map(p => `${p.title}: ${p.subtitle}`).join(' • ')
        : 'KOREAN EXPERTISE • PHYSICIAN GUIDED CARE • CUSTOMIZED TREATMENT • HEALTHY SKIN. LASTING GLOW.';

    const heroBgStyle = meta.headerBackground 
        ? `background-image: linear-gradient(to bottom, rgba(250, 248, 245, 0.85) 0%, rgba(250, 248, 245, 0.95) 100%), url('${meta.headerBackground}'); background-size: cover; background-position: center top;` 
        : '';

    if (isOctober) {
        return `
        <!-- Main Campaign Header Section (October Unified Instagram-Ready Showcase) -->
        <section id="promotions-hero" data-nav-theme="light" class="py-12 md:py-20 bg-off-white relative overflow-hidden">
            <div class="starburst-container"><div class="sb-3"></div></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

                <!-- Instagram Screenshot Flyer Block Container -->
                <div id="october-screenshot-block" class="max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] border-2 border-[#e8a36e]/45 shadow-2xl overflow-hidden relative mb-12 animate-on-scroll fade-up bg-[#fdfaf6]">
                    
                    <!-- Screenshot Container Top Header Banner with Big Tex Fair Background (Smoothly Faded at Bottom) -->
                    <div class="relative w-full overflow-hidden pt-8 pb-2 sm:pt-10 sm:pb-3 md:pt-12 md:pb-3 px-4 sm:px-8 text-center flex flex-col items-center" style="background-image: linear-gradient(to bottom, rgba(253, 250, 246, 0) 0%, rgba(253, 250, 246, 0) 70%, rgba(253, 250, 246, 0.75) 88%, #fdfaf6 100%), url('assets/october_header_bg.jpg'); background-size: cover; background-position: center top; background-repeat: no-repeat;">
                        <!-- Bottom Gradient Fade Layer for Seamless Blending into the Container Background -->
                        <div class="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#fdfaf6] to-transparent pointer-events-none z-1"></div>

                        <!-- Center Header: Glow or Treat Logo + Original Text with Autumn Colors -->
                        <div class="relative z-10 max-w-4xl mx-auto px-4 py-2 text-center rounded-2xl bg-white/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none">
                            ${meta.pillImage ? `
                                <div class="mb-3 sm:mb-4 flex justify-center">
                                    <img src="${meta.pillImage}" alt="${meta.pill || 'Glow or Treat'}" class="h-24 sm:h-32 md:h-36 w-auto max-w-full object-contain mx-auto drop-shadow-sm">
                                </div>
                            ` : (meta.pill ? `
                                <div class="mb-3">
                                    <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase bg-[#e13f00]/15 text-[#e13f00] border border-[#e13f00]/30 shadow-sm">
                                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#e13f00]"></i>
                                        ${meta.pill}
                                    </span>
                                </div>
                            ` : '')}

                            <span class="inline-block text-[10px] md:text-xs tracking-[0.35em] text-[#e13f00] uppercase font-bold mb-2 italic whitespace-nowrap drop-shadow-xs">${meta.badge}</span>
                            <h1 class="heading-wide text-2xl sm:text-3xl md:text-5xl text-[#3c0201] mb-2 uppercase tracking-[0.12em] leading-tight drop-shadow-xs">
                                <span class="block whitespace-nowrap">${meta.titleLine1 || 'The SuA Glow'}</span>
                                <span class="block">${meta.titleLine2 || 'October Edit'}</span>
                            </h1>
                            <p class="font-body text-[#e13f00] italic tracking-widest uppercase text-xs md:text-base mb-3 font-semibold">${meta.subtitle}</p>

                            <!-- Enhanced High-Contrast Autumn Pill Tagline (Balanced & Wide, No Dangling Words) -->
                            <div class="mb-2 mt-2 flex justify-center px-2">
                                <div class="inline-block px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl md:rounded-full text-xs sm:text-[13px] md:text-sm font-normal bg-[#fff8f3]/95 backdrop-blur-md border border-[#de542f]/35 shadow-sm max-w-3xl lg:max-w-4xl mx-auto leading-relaxed text-center [text-wrap:balance]">
                                    <span class="text-[#c93b00] font-bold">Scary-dry skin or hair looking a little haunted?</span>
                                    <span class="text-[#3c0201]/90 font-medium">Dallas fall meets authentic <span class="whitespace-nowrap">K-Beauty</span>.</span>
                                    <span class="text-charcoal/85">Three October-only ways to lift, repair + renew with zero tricks and&nbsp;all&nbsp;treats.</span>
                                </div>
                            </div>

                            ${meta.tagline ? `<p class="font-body text-xs sm:text-sm text-charcoal/80 max-w-xl mx-auto mb-2 leading-relaxed">${meta.tagline}</p>` : ''}
                        </div>
                    </div>

                    <!-- The 3 Service Areas in their own Container -->
                    <div class="px-4 sm:px-8 md:px-10 pt-1 pb-8 space-y-6 relative z-10">
                        ${webStepsHTML}
                    </div>

                    <!-- Screenshot Container Bottom Brand & Details Footer -->
                    <div class="mt-8 pt-5 pb-8 px-6 sm:px-10 border-t border-[#e8a36e]/30 text-center relative z-10 bg-white/50 backdrop-blur-sm">
                        <p class="font-heading text-xs sm:text-sm font-bold tracking-wider text-[#3c0201] uppercase mb-1">
                            SuA K-Glow Medical Aesthetics • Carrollton HQ
                        </p>
                        <p class="font-body text-[11px] text-charcoal/70 tracking-wide mb-1.5">
                            Korean-Founded • Korean PA-C Provider • Physician-Guided
                        </p>
                        <p class="font-body text-[10px] text-[#de542f] font-semibold tracking-wider uppercase mb-1">
                            Book Online: suaglow.com • @suakglow
                        </p>
                        <p class="font-body text-[9px] text-charcoal/45 italic max-w-xl mx-auto leading-relaxed">
                            ${meta.terms}
                        </p>
                    </div>
                </div>

                <!-- Download / Share Flyer Action Button -->
                <div class="text-center mb-16 print:hidden animate-on-scroll fade-up">
                    <button type="button" onclick="downloadFlyerImage()" id="download-flyer-btn" class="btn-halloween px-8 py-3.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all cursor-pointer" style="background-color: #e13f00 !important; color: #ffffff !important;">
                        <i data-lucide="download" class="w-4 h-4"></i>
                        <span>Download & Share October Flyer</span>
                    </button>
                </div>

                ${additionalPromosHTML}

                <!-- Brand Pillars -->
                <div class="pt-12 border-t border-charcoal/10 max-w-7xl mx-auto animate-on-scroll fade-up">
                    <div class="grid ${gridColsClass} gap-6 md:gap-8">
                        ${pillarsHTML}
                    </div>
                </div>
            </div>

            <!-- Flyer Lightbox Modal (For Mobile & Quick Share) -->
            <div id="specials-flyer-lightbox" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto" onclick="if(event.target === this) closeFlyerLightbox();">
                <div class="relative max-w-md w-full flex flex-col items-center text-center my-auto">
                    <!-- Close Button -->
                    <button type="button" onclick="closeFlyerLightbox()" class="absolute -top-12 right-0 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors cursor-pointer border border-white/20 shadow-lg" aria-label="Close Lightbox">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>

                    <!-- Flyer Image -->
                    <div class="w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-near-black mb-5">
                        <img id="lightbox-flyer-img" src="${meta.downloadFlyerImage || 'assets/SuA-Glow-October-Specials.jpg'}" alt="${meta.title || 'SuA Glow Specials Flyer'}" class="w-full h-auto max-h-[72vh] object-contain mx-auto block">
                    </div>

                    <!-- Action Button Below Flyer -->
                    <div class="flex flex-wrap items-center justify-center gap-3 w-full">
                        <button type="button" onclick="downloadFlyerImage()" id="lightbox-share-btn" class="btn-halloween px-8 py-3.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer" style="background-color: #e13f00 !important; color: #ffffff !important;">
                            <i data-lucide="share-2" class="w-4 h-4"></i>
                            <span>Share Flyer</span>
                        </button>
                        <button type="button" onclick="triggerDirectDownloadFromUrl()" class="px-5 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 border border-white/30 inline-flex items-center justify-center gap-2 transition-all cursor-pointer">
                            <i data-lucide="download" class="w-4 h-4"></i>
                            <span>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    return `
        <!-- Main Campaign Header Section -->
        <section id="promotions-hero" data-nav-theme="light" class="py-16 md:py-24 bg-off-white relative overflow-hidden" ${heroBgStyle ? `style="${heroBgStyle}"` : ''}>
            <div class="starburst-container"><div class="sb-3"></div></div>
            <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                
                <!-- Title Header -->
                <div class="text-center max-w-3xl mx-auto mb-12 animate-on-scroll fade-up">
                    ${meta.pillImage ? `
                        <div class="mb-4 flex justify-center">
                            <img src="${meta.pillImage}" alt="${meta.pill || 'Glow or Treat'}" class="h-28 sm:h-36 md:h-44 w-auto max-w-full object-contain mx-auto">
                        </div>
                    ` : (meta.pill ? `
                        <div class="mb-3">
                            <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase ${isOctober ? 'bg-[#de542f]/15 text-[#de542f] border border-[#de542f]/30 shadow-sm' : 'bg-[#721c24]/10 text-[#8b2635] border border-[#721c24]/20 shadow-sm'}">
                                <i data-lucide="sparkles" class="w-3.5 h-3.5 ${isOctober ? 'text-[#de542f]' : 'text-[#8b2635]'}"></i>
                                ${meta.pill}
                            </span>
                        </div>
                    ` : '')}
                    <span class="inline-block text-[10px] md:text-xs tracking-[0.4em] ${isOctober ? 'text-[#de542f]' : 'text-warm-gold'} uppercase font-bold mb-4 italic whitespace-nowrap">${meta.badge}</span>
                    <h1 class="heading-wide text-3xl md:text-5xl ${isOctober ? 'text-[#3c0201]' : 'text-near-black'} mb-4 uppercase tracking-[0.15em] leading-tight">${meta.title}</h1>
                    <p class="font-body ${isOctober ? 'text-[#de542f]' : 'text-taupe'} italic tracking-widest uppercase text-xs md:text-sm mb-4 font-medium">${meta.subtitle}</p>
                    ${meta.tagline ? `<p class="font-body text-xs md:text-sm text-charcoal/70 max-w-2xl md:max-w-3xl mx-auto mb-6 leading-relaxed [text-wrap:pretty]">${meta.tagline}</p>` : ''}
                    <div class="w-24 h-[1px] ${isOctober ? 'bg-[#de542f]/40' : 'bg-warm-gold/40'} mx-auto"></div>
                </div>

                <!-- Highlight Offer Callout Banner -->
                <div class="max-w-4xl mx-auto mb-12 animate-on-scroll fade-up">
                    <div class="${isOctober ? 'bg-white/95 border border-[#e8a36e]/40 shadow-soft text-charcoal' : 'bg-gradient-to-r from-near-black via-near-black/95 to-near-black border-warm-gold/30 shadow-2xl text-white'} p-8 md:p-10 rounded-[28px] border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative overflow-hidden">
                        <div class="absolute -right-10 -bottom-10 w-48 h-48 ${isOctober ? 'bg-[#e8a36e]/15' : 'bg-warm-gold/10'} rounded-full blur-2xl"></div>
                        <div class="absolute -left-10 -top-10 w-40 h-40 ${isOctober ? 'bg-[#de542f]/10' : 'bg-white/5'} rounded-full blur-2xl"></div>
                        <div class="z-10 max-w-2xl">
                            <span class="text-[10px] uppercase tracking-[0.3em] ${isOctober ? 'text-[#de542f]' : 'text-warm-gold'} font-bold block mb-2">${meta.offerBadge || (isOctober ? 'Exclusive October Offer' : 'Exclusive September Offer')}</span>
                            <h2 class="font-heading text-xl sm:text-2xl md:text-3xl ${isOctober ? 'text-[#3c0201]' : 'text-white'} font-bold tracking-wide leading-tight">${meta.offerCallout}</h2>
                            ${meta.offerTagline ? `
                                <p class="font-heading text-xs sm:text-sm ${isOctober ? 'text-[#de542f]' : 'text-warm-gold'} font-bold tracking-widest uppercase mt-2.5">
                                    ${meta.offerTagline}
                                </p>
                            ` : ''}
                            <p class="font-body text-xs sm:text-sm ${isOctober ? 'text-charcoal/80' : 'text-white/85'} mt-2 leading-relaxed">
                                ${meta.offerSubtext || `Book your consultation during ${meta.month} to redeem.`}
                            </p>
                            ${meta.offerPillars ? `
                                <p class="font-body text-[11px] ${isOctober ? 'text-charcoal/60 border-[#e8a36e]/20' : 'text-white/60 border-white/10'} tracking-wide mt-2 pt-2 border-t">
                                    ${meta.offerPillars}
                                </p>
                            ` : ''}
                        </div>
                        <a href="${meta.offerCtaUrl || meta.bookingUrl}" ${meta.offerCtaUrl && meta.offerCtaUrl.startsWith('#') ? '' : 'target="_blank"'} class="${isOctober ? 'btn-halloween px-8 py-3.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider' : 'btn-primary'} shrink-0 z-10 whitespace-nowrap" ${isOctober ? 'style="background-color: #e13f00 !important; color: #ffffff !important;"' : ''}>
                            ${meta.offerCtaText || 'Claim Offer Today'}
                        </a>
                    </div>
                </div>

                <!-- View Switcher Tabs (Desktop Only) -->
                <div class="hidden md:block mb-12 text-center animate-on-scroll fade-up">
                    <div class="inline-flex p-1.5 bg-white rounded-full border border-charcoal/10 shadow-sm">
                        <button id="tab-program-btn" onclick="switchSpecialsTab('program')" class="px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 ${isOctober ? 'bg-[#3c0201] text-white' : 'bg-near-black text-warm-gold'} shadow">
                            Featured Offers
                        </button>
                        <button id="tab-poster-btn" onclick="switchSpecialsTab('poster')" class="px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 text-charcoal/60 hover:text-near-black">
                            Share Flyer
                        </button>
                    </div>
                </div>

                <!-- Mobile View: Link to open Flyer in Lightbox with Share Button -->
                <div class="block md:hidden mb-8 text-center animate-on-scroll fade-up">
                    <button type="button" onclick="openFlyerLightbox()" class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider ${isOctober ? 'btn-halloween text-white' : 'text-warm-gold bg-near-black hover:bg-warm-gold hover:text-near-black border border-warm-gold/40'} shadow-md transition-all duration-300 cursor-pointer" ${isOctober ? 'style="background-color: #e13f00 !important; color: #ffffff !important;"' : ''}>
                        <i data-lucide="download" class="w-4 h-4"></i>
                        <span>Click to Download & Share Flyer</span>
                    </button>
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
                        <button onclick="downloadFlyerImage()" id="download-flyer-btn" class="px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider ${isOctober ? 'btn-halloween text-white' : 'text-warm-gold bg-near-black hover:bg-warm-gold hover:text-near-black border border-warm-gold/40'} shadow-md inline-flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer z-20" ${isOctober ? 'style="background-color: #e13f00 !important; color: #ffffff !important;"' : ''}>
                            <i data-lucide="download" class="w-4 h-4"></i> Click to Download and Share
                        </button>
                    </div>
                    
                    <div class="w-full flex justify-center">
                        <div id="flyer-card-element" class="w-full max-w-[800px] rounded-2xl shadow-2xl overflow-hidden border ${isOctober ? 'border-[#de542f]/30' : 'border-charcoal/10'} bg-white">
                            <img src="${meta.downloadFlyerImage || meta.flyerImage || 'assets/SuA-Glow-October-Specials.jpg'}" alt="${meta.title || 'SuA Glow Specials Flyer'}" class="w-full h-auto block object-contain">
                        </div>
                    </div>
                </div>

                <!-- Terms Fine Print -->
                <div class="mt-12 text-center text-[10px] text-charcoal/40 font-body italic max-w-2xl mx-auto">
                    ${meta.terms}
                </div>
            </div>

            <!-- Flyer Lightbox Modal (For Mobile & Quick Share) -->
            <div id="specials-flyer-lightbox" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto" onclick="if(event.target === this) closeFlyerLightbox();">
                <div class="relative max-w-md w-full flex flex-col items-center text-center my-auto">
                    <!-- Close Button -->
                    <button type="button" onclick="closeFlyerLightbox()" class="absolute -top-12 right-0 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors cursor-pointer border border-white/20 shadow-lg" aria-label="Close Lightbox">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>

                    <!-- Flyer Image -->
                    <div class="w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-near-black mb-5">
                        <img id="lightbox-flyer-img" src="${meta.downloadFlyerImage || 'assets/SuA-Glow-September-Specials.jpg'}" alt="${meta.title || 'SuA Glow Specials Flyer'}" class="w-full h-auto max-h-[72vh] object-contain mx-auto block">
                    </div>

                    <!-- Action Button Below Flyer -->
                    <div class="flex flex-wrap items-center justify-center gap-3 w-full">
                        <button type="button" onclick="downloadFlyerImage()" id="lightbox-share-btn" class="${isOctober ? 'btn-halloween px-8 py-3.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white shadow-xl' : 'btn-primary text-xs py-3.5 px-8'} inline-flex items-center justify-center gap-2 shadow-xl cursor-pointer" ${isOctober ? 'style="background-color: #e13f00 !important; color: #ffffff !important;"' : ''}>
                            <i data-lucide="share-2" class="w-4 h-4"></i>
                            <span>Share Flyer</span>
                        </button>
                        <button type="button" onclick="triggerDirectDownloadFromUrl()" class="px-5 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 border border-white/30 inline-flex items-center justify-center gap-2 transition-all cursor-pointer">
                            <i data-lucide="download" class="w-4 h-4"></i>
                            <span>Download</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Lightbox Open & Close Functions
function openFlyerLightbox() {
    const lightbox = document.getElementById('specials-flyer-lightbox');
    if (lightbox) {
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

function closeFlyerLightbox() {
    const lightbox = document.getElementById('specials-flyer-lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

function triggerDirectDownloadFromUrl() {
    const config = window.__currentSpecialsConfig || {};
    const meta = config.meta || {};
    const flyerUrl = meta.downloadFlyerImage || 'assets/SuA-Glow-September-Specials.jpg';
    const fileName = meta.month ? `SuA-Glow-${meta.month.replace(/\s+/g, '-')}-Specials.jpg` : 'SuA-Glow-September-Specials.jpg';

    fetch(flyerUrl)
        .then(res => res.blob())
        .then(blob => {
            triggerDirectDownload(blob, fileName);
        })
        .catch(err => {
            console.error('Error in direct download:', err);
            const link = document.createElement('a');
            link.href = flyerUrl;
            link.download = fileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFlyerLightbox();
    }
});

// Tab Switcher Helper Function
function switchSpecialsTab(tab) {
    const programView = document.getElementById('specials-program-view');
    const posterView = document.getElementById('specials-poster-view');
    const programBtn = document.getElementById('tab-program-btn');
    const posterBtn = document.getElementById('tab-poster-btn');

    const config = window.__currentSpecialsConfig || {};
    const meta = config.meta || {};
    const isOctober = (meta.month && meta.month.toLowerCase().includes('october')) || (meta.title && meta.title.toLowerCase().includes('october'));
    const activeClass = isOctober 
        ? "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 bg-[#3c0201] text-white shadow"
        : "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 bg-near-black text-warm-gold shadow";
    const inactiveClass = "px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 text-charcoal/60 hover:text-near-black";

    if (tab === 'program') {
        programView.classList.remove('hidden');
        posterView.classList.add('hidden');
        programBtn.className = activeClass;
        posterBtn.className = inactiveClass;
    } else {
        programView.classList.add('hidden');
        posterView.classList.remove('hidden');
        posterBtn.className = activeClass;
        programBtn.className = inactiveClass;
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

// Download / Share Flyer Image directly
function downloadFlyerImage() {
    const downloadBtn = document.getElementById('download-flyer-btn');
    const lightboxShareBtn = document.getElementById('lightbox-share-btn');
    const config = window.__currentSpecialsConfig || {};
    const meta = config.meta || {};
    const flyerUrl = meta.downloadFlyerImage || 'assets/SuA-Glow-September-Specials.jpg';
    const fileName = meta.month ? `SuA-Glow-${meta.month.replace(/\s+/g, '-')}-Specials.jpg` : 'SuA-Glow-September-Specials.jpg';

    if (downloadBtn) {
        downloadBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Preparing Image...`;
    }
    if (lightboxShareBtn) {
        lightboxShareBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Sharing...`;
    }
    if (window.lucide) lucide.createIcons();

    const resetBtn = () => {
        if (downloadBtn) {
            downloadBtn.innerHTML = `<i data-lucide="download" class="w-4 h-4"></i> Click to Download and Share`;
        }
        if (lightboxShareBtn) {
            lightboxShareBtn.innerHTML = `<i data-lucide="share-2" class="w-4 h-4"></i> <span>Share Flyer</span>`;
        }
        if (window.lucide) lucide.createIcons();
    };

    fetch(flyerUrl)
        .then(res => res.blob())
        .then(blob => {
            const mimeType = flyerUrl.endsWith('.png') ? 'image/png' : 'image/jpeg';
            const file = new File([blob], fileName, { type: mimeType });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({
                    title: `SuA K Glow ${meta.month || 'September'} Specials`,
                    text: `Check out SuA K Glow ${meta.month || 'September'} Specials offers!`,
                    files: [file]
                }).catch(err => {
                    console.log('Share sheet dismissed or failed:', err);
                    triggerDirectDownload(blob, fileName);
                }).finally(resetBtn);
            } else {
                triggerDirectDownload(blob, fileName);
                resetBtn();
            }
        })
        .catch(err => {
            console.error('Error loading flyer image asset:', err);
            const fallbackLink = document.createElement('a');
            fallbackLink.href = flyerUrl;
            fallbackLink.download = fileName;
            fallbackLink.target = '_blank';
            document.body.appendChild(fallbackLink);
            fallbackLink.click();
            document.body.removeChild(fallbackLink);
            resetBtn();
        });
}

function triggerDirectDownload(blob, fileName = 'SuA-Glow-September-Specials.jpg') {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = fileName;
    link.href = blobUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
}
