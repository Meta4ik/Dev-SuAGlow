// SuA Glow Navigation Content
const NAVBAR_HTML = `<!-- Navigation -->
<nav id="navbar" class="group/nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
    <!-- Top Bar -->
    <div id="nav-topbar" class="bg-charcoal text-white/80 py-2 border-b border-white/10 transition-all duration-300">
        <div class="max-w-[1440px] mx-auto px-4 md:px-12 flex justify-center md:justify-between items-center text-[10px] tracking-[0.2em] uppercase font-body gap-4">
            <div class="hidden md:flex items-center flex-1">
                <a href="https://www.google.com/maps/place/SuA+Glow/@33.0227643,-96.9350266,17z/data=!3m1!4b1!4m6!3m5!1s0x8d14611a2aa39e01:0xd81ab189a5840191!8m2!3d33.0227643!4d-96.9324517!16s%2Fg%2F11mlsqzn2f?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="hover:text-white transition-colors flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-3 h-3"></i> <span class="hidden lg:inline">4116 State Highway 121, Suite 120, Office O, Carrollton, TX 75010</span><span class="inline lg:hidden">Carrollton, TX</span>
                </a>
            </div>

            <div class="flex items-center justify-center md:justify-end gap-6 flex-1 w-full md:w-auto pointer-events-none">
                <!-- Promotions CTA -->
                <a href="specials.html" class="pointer-events-auto group flex items-center justify-center gap-2 bg-gradient-to-b from-[#FFF2B2] via-[#DFAB22] to-[#B8860B] px-5 py-1.5 rounded-full border-t border-t-white/80 border-b border-b-black/20 hover:brightness-110 transition-all duration-300 shadow-[0_4px_15px_rgba(223,171,34,0.4)] hover:shadow-[0_6px_20px_rgba(223,171,34,0.6)] w-max max-w-[90vw] relative overflow-hidden">
                    <span class="absolute top-[-10px] right-2 w-12 h-12 bg-white/60 blur-[6px] rounded-full pointer-events-none"></span>
                    <span class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
                    
                    <span class="relative flex h-5 w-5 shrink-0 items-center justify-center z-10">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                      <i data-lucide="tag" class="w-3.5 h-3.5 text-amber-950 relative z-10"></i>
                    </span>
                    <span class="text-amber-950 normal-case text-[11px] font-bold tracking-[0.1em] z-10 truncate">
                        Check out our Promotions
                    </span>
                    <i data-lucide="arrow-right" class="w-4 h-4 text-amber-950/80 group-hover:text-amber-950 group-hover:translate-x-1 transition-all shrink-0 z-10"></i>
                </a>

                <div class="hidden md:flex items-center pointer-events-auto">
                    <a href="tel:972-665-8737" class="hover:text-white transition-colors flex items-center gap-2">
                        <i data-lucide="phone" class="w-3 h-3 text-taupe"></i> <span class="hidden lg:inline whitespace-nowrap">972-665-8737</span><span class="inline lg:hidden whitespace-nowrap">Call Us</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Nav -->
    <div class="max-w-[1440px] mx-auto px-4 md:px-12 py-4 md:py-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="index.html" class="flex items-center p-4 md:p-0 shrink-0">
            <img id="logo-desktop" src="assets/logo-main.webp" alt="SUA GLOW Medical Aesthetics"
                class="logo-brand h-8 md:h-12 w-auto object-contain transition-all duration-300">
        </a>

        <!-- Desktop Menu -->
        <div class="desktop-nav-menu min-[1180px]:flex items-center justify-center flex-1 gap-4 xl:gap-7">

            <!-- Treatments / Skin Health Mega Menu -->
            <div class="nav-item-mega group">
                <a href="#" onclick="event.preventDefault(); this.closest('.nav-item-mega').classList.toggle('is-open');"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1 cursor-pointer">
                    Treatments <i data-lucide="chevron-down" class="w-3 h-3 transition-transform group-hover:rotate-180"></i>
                </a>
                <div class="mega-menu p-8 xl:p-10">
                    <div class="max-w-7xl mx-auto text-left">
                        <!-- Top Banner: 3D Skin Analysis (Start Here) -->
                        <div class="pt-3 pb-4 mb-4 border-b border-light-gray/40 flex items-center">
                            <a href="3d-skin-analysis.html" class="aura-nav-banner group flex items-center gap-3 text-white pl-4 pr-5 py-2.5 rounded-2xl mt-1">
                                <div class="relative w-12 h-10 shrink-0 flex items-center justify-center">
                                    <img src="assets/aura_device_large.png" alt="Aura 3D Device" class="aura-device-img absolute -top-4 -left-1 w-14 h-14 object-contain pointer-events-none">
                                </div>
                                <div class="ml-1">
                                    <span class="text-xs font-semibold uppercase tracking-wider text-white group-hover:text-white transition-colors">Aura 3D Skin Analysis</span>
                                    <span class="text-[10px] text-white/85 group-hover:text-white/95 block transition-colors">Photorealistic 3D Digital Twin &amp; Provider Consultation</span>
                                </div>
                                <span class="ml-3 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white text-[#0d4ece] group-hover:bg-[#FFF2B2] group-hover:text-amber-950 font-bold text-[11px] uppercase tracking-wider shadow-sm shrink-0 transition-colors text-center leading-none">Start Here</span>
                                <i data-lucide="arrow-right" class="aura-arrow-icon w-3.5 h-3.5 text-white/70 group-hover:text-white ml-0.5 shrink-0"></i>
                            </a>
                        </div>

                        <!-- 4 Column Unified Taxonomy Grid -->
                        <div class="grid grid-cols-4 gap-8 text-left">
                            
                            <!-- Col 1: Skin Health (Boosters & Injectables) -->
                            <div>
                                <div class="badge-standard mb-4 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    Skin Quality Boosters
                                </div>
                                <ul class="space-y-1 mb-5">
                                    <li><a href="skin-quality-boosters.html#healing-essence" class="dropdown-link !p-0 hover:!pl-2">Healing Essence</a></li>
                                    <li><a href="skin-quality-boosters.html#hydration-glow" class="dropdown-link !p-0 hover:!pl-2">Hydration &amp; Glow</a></li>
                                    <li><a href="skin-quality-boosters.html#collagen-stimulation" class="dropdown-link !p-0 hover:!pl-2">Collagen Stimulation</a></li>
                                    <li><a href="skin-quality-boosters.html#dermal-matrix" class="dropdown-link !p-0 hover:!pl-2">Dermal Matrix</a></li>
                                </ul>

                                <div class="badge-standard mb-4 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    Injectables &amp; Tox
                                </div>
                                <ul class="space-y-1">
                                    <li><a href="cosmetic-tox.html" class="dropdown-link !p-0 hover:!pl-2">Cosmetic Tox &amp; SkinTox</a></li>
                                    <li><a href="medical-tox.html" class="dropdown-link !p-0 hover:!pl-2">Medical Tox (TMJ / Hyperhidrosis)</a></li>
                                    <li><a href="dermal-filler.html" class="dropdown-link !p-0 hover:!pl-2">HA Dermal Fillers</a></li>
                                    <li><a href="radiesse.html" class="dropdown-link !p-0 hover:!pl-2">Biostimulators (Sculptra &amp; Radiesse)</a></li>
                                </ul>
                            </div>

                            <!-- Col 2: Skin Rejuvenation, Hair & Scar Treatment -->
                            <div>
                                <div class="badge-standard mb-4 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    Skin Rejuvenation &amp; Hair
                                </div>
                                <ul class="space-y-1 mb-5">
                                    <li><a href="oligio-x.html" class="dropdown-link !p-0 hover:!pl-2">Oligio X RF Lifting</a></li>
                                    <li><a href="ldm-water-drop-lifting.html" class="dropdown-link !p-0 hover:!pl-2">LDM Water Drop Lifting</a></li>
                                    <li><a href="microneedling.html" class="dropdown-link !p-0 hover:!pl-2">SkinPen Microneedling</a></li>
                                    <li><a href="needleless-infusion-therapy.html" class="dropdown-link !p-0 hover:!pl-2">Needle-free DEP Infusion</a></li>
                                    <li>
                                        <a href="#" class="dropdown-link !p-0 hover:!pl-2 flex items-center justify-between">
                                            <span>Picosecond Laser</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </a>
                                    </li>
                                    <li><a href="korean-scalp-hair-rejuvenation.html" class="dropdown-link !p-0 hover:!pl-2">Korean Scalp &amp; Hair Rejuvenation</a></li>
                                </ul>

                                <div class="badge-standard mb-3 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    Scar Treatment
                                </div>
                                <ul class="space-y-1">
                                    <li><a href="scar-treatment.html#acne-scars" class="dropdown-link !p-0 hover:!pl-2">Acne Scars</a></li>
                                    <li><a href="scar-treatment.html#surgical-scars" class="dropdown-link !p-0 hover:!pl-2">Surgical Scars</a></li>
                                    <li><a href="scar-treatment.html#stretch-marks" class="dropdown-link !p-0 hover:!pl-2">Stretch Marks</a></li>
                                    <li><a href="scar-treatment.html#keloid" class="dropdown-link !p-0 hover:!pl-2">Keloid Treatment</a></li>
                                </ul>
                            </div>

                            <!-- Col 3: Signature Treatments & K-Beauty Facials -->
                            <div>
                                <div class="badge-standard mb-3 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    Signature Treatments
                                </div>
                                <ul class="space-y-1 mb-5">
                                    <li><a href="signature-treatment.html" class="dropdown-link !p-0 hover:!pl-2">SuA Glow Signature</a></li>
                                    <li><a href="one-day-glow.html" class="dropdown-link !p-0 hover:!pl-2">One Day Glow</a></li>
                                    <li><a href="bridal-glow.html" class="dropdown-link !p-0 hover:!pl-2">Bridal Glow</a></li>
                                    <li><a href="seoul-man.html" class="dropdown-link !p-0 hover:!pl-2">Seoul Man Treatment</a></li>
                                </ul>

                                <div class="badge-standard mb-3 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    K-Beauty Facials
                                </div>
                                <ul class="space-y-1">
                                    <li><a href="ldm-water-drop-lifting.html" class="dropdown-link !p-0 hover:!pl-2">LDM Water Drop Lifting</a></li>
                                    <li><a href="salmon-pn-facial.html" class="dropdown-link !p-0 hover:!pl-2">Salmon PN Facial</a></li>
                                    <li><a href="glass-skin-hydration-glow.html" class="dropdown-link !p-0 hover:!pl-2">Glass Skin Hydration &amp; Glow</a></li>
                                    <li><a href="collagen-stimulation-facial.html" class="dropdown-link !p-0 hover:!pl-2">Collagen Stimulation</a></li>
                                    <li><a href="tone-up-facial.html" class="dropdown-link !p-0 hover:!pl-2">Tone Up Facial</a></li>
                                </ul>
                            </div>

                            <!-- Col 4: Wellness & Longevity Medicine -->
                            <div>
                                <div class="badge-standard mb-4 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                    Wellness &amp; Longevity
                                </div>
                                <ul class="space-y-1 mb-5">
                                    <li>
                                        <a href="medical-weight-loss-dallas.html" class="dropdown-link !p-0 hover:!pl-2">
                                            <span>Medical Weight Loss</span>
                                            <span class="block text-[10px] text-charcoal/40 font-normal">Compounded GLP-1 &bull; Body Reset</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="iv-infusion-wellness-therapy.html" class="dropdown-link !p-0 hover:!pl-2">
                                            <span>Glow Infusion Therapy</span>
                                            <span class="block text-[10px] text-charcoal/40 font-normal">IV Infusions &bull; IV Push Therapy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Body Contouring</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                        <span class="block text-[10px] text-charcoal/40 font-normal">Oligio X Body &bull; EmSculpt</span>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Targeted Peptides</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                        <span class="block text-[10px] text-charcoal/40 font-normal">Bio-Regenerative Peptides</span>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Women's Hormone Balance</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                        <span class="block text-[10px] text-charcoal/40 font-normal">Hormone Optimization &bull; Metabolic</span>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Pelvic Health</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Red Light Therapy</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Advanced Testing</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-link !p-0 flex items-center justify-between">
                                            <span class="text-charcoal/50">Men's Testosterone</span>
                                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full tracking-wider uppercase shrink-0">Soon</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <!-- Mega Menu Bottom Row: Skincare Shop Integration Banner -->
                        <div class="mt-8 pt-5 border-t border-light-gray/40 flex items-center justify-between bg-gradient-to-r from-off-white via-white to-off-white p-4 rounded-2xl border border-light-gray/60">
                            <div class="flex items-center gap-4">
                                <span class="p-2.5 rounded-xl bg-taupe/10 text-taupe shrink-0">
                                    <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                                </span>
                                <div>
                                    <span class="text-xs font-heading font-bold uppercase tracking-wider text-near-black flex items-center gap-2">
                                        Clinical Skincare
                                        <span class="text-[9px] bg-warm-gold/15 text-warm-gold font-bold px-2 py-0.5 rounded-full uppercase">In-Office Exclusive</span>
                                    </span>
                                    <span class="text-[11px] text-charcoal/60 font-light block mt-0.5">
                                        Exoblanc Exosome Line • REJURAN® Healing Care • Pharmesthetic Conapidil
                                    </span>
                                </div>
                            </div>
                            <a href="skincare-products.html" class="btn-primary !py-2 !px-4 text-xs shrink-0 flex items-center gap-1.5">
                                View Skincare Products <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Memberships Top-Level Navigation Link -->
            <div class="nav-item">
                <a href="memberships.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase whitespace-nowrap">
                    Memberships
                </a>
            </div>

            <!-- Skincare Top-Level Navigation Link -->
            <div class="nav-item">
                <a href="skincare-products.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase whitespace-nowrap">
                    Skincare
                </a>
            </div>

            <!-- Promos Glossy Gold Pill Button -->
            <div class="nav-item">
                <a href="specials.html" class="group relative inline-flex items-center justify-center gap-1.5 bg-gradient-to-b from-[#FFF2B2] via-[#DFAB22] to-[#B8860B] px-4 py-1.5 rounded-full border-t border-t-white/80 border-b border-b-black/20 hover:brightness-110 transition-all duration-300 shadow-[0_4px_15px_rgba(223,171,34,0.4)] hover:shadow-[0_6px_20px_rgba(223,171,34,0.6)] overflow-hidden uppercase font-heading text-[11px] font-extrabold tracking-[0.15em] text-amber-950 whitespace-nowrap">
                    <span class="absolute top-[-10px] right-2 w-12 h-12 bg-white/60 blur-[6px] rounded-full pointer-events-none"></span>
                    <span class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
                    <i data-lucide="tag" class="w-3.5 h-3.5 text-amber-950 shrink-0 relative z-10"></i>
                    <span class="relative z-10">PROMOS</span>
                </a>
            </div>

            <!-- More (Consolidated Our Story & Resources Dropdown) -->
            <div class="nav-item-dropdown">
                <a href="#"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    More <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu text-left w-64 !p-4">
                    <p class="text-[9px] uppercase tracking-wider text-charcoal/40 px-3 py-1 font-semibold">Our Story</p>
                    <a href="about.html" class="dropdown-link font-body text-xs !py-1.5">About SuA Glow</a>
                    <a href="about.html#k-beauty" class="dropdown-link font-body text-xs !py-1.5">K-Beauty Philosophy</a>
                    <a href="about.html#safety" class="dropdown-link font-body text-xs !py-1.5">Safety &amp; Medical Oversight</a>
                    <div class="border-t border-charcoal/5 my-2"></div>
                    <p class="text-[9px] uppercase tracking-wider text-charcoal/40 px-3 py-1 font-semibold">Resources</p>
                    <a href="referral.html" class="dropdown-link font-body text-xs !py-1.5">Referral Program</a>
                    <a href="press-media.html" class="dropdown-link font-body text-xs !py-1.5">Press / Media</a>
                    <a href="financing.html" class="dropdown-link font-body text-xs !py-1.5">Financing Options</a>
                </div>
            </div>

            <!-- Contact -->
            <div class="nav-item-dropdown">
                <a href="contact.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Contact <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu text-left">
                    <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank" class="dropdown-link font-body">Book Appointment</a>
                    <a href="https://suaglow.myaestheticrecord.com/register" target="_blank" class="dropdown-link font-body">New Patient Forms</a>
                    <a href="specials.html" class="dropdown-link font-body">Promotions</a>
                </div>
            </div>

        </div>

        <!-- Nav Right -->
        <div class="flex items-center gap-4 md:gap-6">
            <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                class="inline-flex font-body text-[11px] md:text-[13px] tracking-[0.1em] uppercase bg-taupe text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-warm-gold transition-colors whitespace-nowrap">
                Book Now
            </a>

            <!-- Mobile Menu Button (Accessible 44px tap target) -->
            <button id="menu-btn" class="min-[1180px]:hidden text-charcoal hover:text-taupe transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center relative z-50 rounded-lg active:scale-95" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
                <i data-lucide="menu" id="menu-icon" class="w-6 h-6"></i>
            </button>
        </div>
    </div>
</nav>

<!-- Mobile Drawer (Accessible Overlay with Exact Taxonomy Parity) -->
<div id="mobile-drawer" class="fixed inset-0 z-[100] bg-white hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
    <div class="flex flex-col h-full text-left">
        <!-- Drawer Header -->
        <div class="flex items-center justify-between p-6 md:p-8 border-b border-off-white">
            <img src="assets/logo-main.webp" alt="SUA GLOW Medical Aesthetics" class="logo-brand h-7 w-auto object-contain">
            <button id="drawer-close" class="text-charcoal p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-off-white transition-colors" aria-label="Close navigation menu">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>

        <!-- Drawer Links -->
        <div class="flex-1 overflow-y-auto overscroll-contain p-6">
            <div class="flex flex-col gap-3">

                <!-- Aura 3D Skin Analysis Banner (Start Here) -->
                <div class="mb-2">
                    <a href="3d-skin-analysis.html" class="aura-nav-banner w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-white min-h-[48px]">
                        <div class="flex items-center gap-2.5">
                            <div class="relative w-9 h-9 shrink-0 flex items-center justify-center">
                                <img src="assets/aura_device_large.png" alt="Aura 3D Device" class="aura-device-img absolute -top-3.5 -left-1 w-12 h-12 object-contain pointer-events-none">
                            </div>
                            <div class="flex flex-col justify-center">
                                <span class="font-heading text-xs font-semibold uppercase tracking-wider block text-white leading-tight">3D Skin Analysis</span>
                                <span class="text-[10px] text-white/85 block mt-0.5">Aura Digital Twin Consultation</span>
                            </div>
                        </div>
                        <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white text-[#0d4ece] font-bold text-[10px] uppercase tracking-wider shadow-sm shrink-0 leading-none">Start Here</span>
                    </a>
                </div>

                <!-- 1. Skin Health & Boosters -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="droplets" class="w-4 h-4 text-taupe"></i>
                            Skin Health &amp; Boosters
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-4 pl-4 pb-3 mt-1">
                        <!-- Skin Quality Boosters -->
                        <div>
                            <div class="badge-standard !py-1 !px-3 mb-2 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                Skin Quality Boosters
                            </div>
                            <div class="flex flex-col gap-1 mt-1.5 pl-2 border-l border-light-gray/60">
                                <a href="skin-quality-boosters.html#healing-essence" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Healing Essence</a>
                                <a href="skin-quality-boosters.html#hydration-glow" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Hydration &amp; Glow</a>
                                <a href="skin-quality-boosters.html#collagen-stimulation" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Collagen Stimulation</a>
                                <a href="skin-quality-boosters.html#dermal-matrix" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Dermal Matrix</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. Skin Rejuvenation, Tech & Scar Treatment -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="scan-face" class="w-4 h-4 text-taupe"></i>
                            Skin Rejuvenation &amp; Hair
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-4 pl-4 pb-3 mt-1">
                        <div class="flex flex-col gap-1">
                            <a href="oligio-x.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[40px] flex items-center">Oligio X RF Lifting</a>
                            <a href="ldm-water-drop-lifting.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[40px] flex items-center">LDM Water Drop Lifting</a>
                            <a href="microneedling.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[40px] flex items-center">SkinPen Microneedling</a>
                            <a href="needleless-infusion-therapy.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[40px] flex items-center">Needle-free DEP Infusion</a>
                            <div class="py-1 min-h-[40px] flex items-center justify-between">
                                <span class="font-body text-sm text-charcoal/50">Picosecond Laser</span>
                                <span class="inline-flex items-center text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/50 px-2 py-0.5 rounded-full uppercase">
                                    Soon
                                </span>
                            </div>
                            <a href="korean-scalp-hair-rejuvenation.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[40px] flex items-center">Korean Scalp &amp; Hair Rejuvenation</a>
                        </div>

                        <!-- Scar Treatment -->
                        <div>
                            <div class="badge-standard !py-1 !px-3 mb-2 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                Scar Treatment
                            </div>
                            <div class="flex flex-col gap-1 mt-1.5 pl-2 border-l border-light-gray/60">
                                <a href="scar-treatment.html#acne-scars" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Acne Scars</a>
                                <a href="scar-treatment.html#surgical-scars" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Surgical Scars</a>
                                <a href="scar-treatment.html#stretch-marks" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Stretch Marks</a>
                                <a href="scar-treatment.html#keloid" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Keloid Treatment</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. Signature Glow & K-Beauty Facials -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="sparkles" class="w-4 h-4 text-taupe"></i>
                            Signature &amp; K-Beauty Facials
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-4 pl-4 pb-3 mt-1">
                        <div>
                            <div class="badge-standard !py-1 !px-3 mb-2 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                Signature Treatments
                            </div>
                            <div class="flex flex-col gap-1 mt-1.5 pl-2 border-l border-light-gray/60">
                                <a href="signature-treatment.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">SuA Glow Signature Treatment</a>
                                <a href="one-day-glow.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">One Day Glow</a>
                                <a href="bridal-glow.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Bridal Glow</a>
                                <a href="seoul-man.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Seoul Man Treatment</a>
                            </div>
                        </div>

                        <div>
                            <div class="badge-standard !py-1 !px-3 mb-2 bg-charcoal !text-off-white border-charcoal/20 select-none">
                                K-Beauty Facials
                            </div>
                            <div class="flex flex-col gap-1 mt-1.5 pl-2 border-l border-light-gray/60">
                                <a href="ldm-water-drop-lifting.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">LDM Water Drop Lifting</a>
                                <a href="salmon-pn-facial.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Salmon PN Facial</a>
                                <a href="glass-skin-hydration-glow.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Glass Skin Hydration &amp; Glow</a>
                                <a href="collagen-stimulation-facial.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Collagen Stimulation</a>
                                <a href="tone-up-facial.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Tone Up Facial</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Injectables & Tox -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="syringe" class="w-4 h-4 text-taupe"></i>
                            Injectables &amp; Tox
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-2 pl-4 pb-3 mt-1">
                        <div class="py-1">
                            <a href="cosmetic-tox.html" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors block">Cosmetic Tox &amp; SkinTox</a>
                            <span class="block text-[10px] text-charcoal/40">Micro-dosing, Face &amp; Neck, Body Contouring</span>
                        </div>
                        <div class="py-1">
                            <a href="medical-tox.html" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors block">Medical Tox</a>
                            <span class="block text-[10px] text-charcoal/40">Therapeutic (TMJ &amp; Migraine), Hyperhidrosis</span>
                        </div>
                        <div class="py-1">
                            <a href="dermal-filler.html" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors block">HA Dermal Fillers</a>
                            <span class="block text-[10px] text-charcoal/40">Restylane Family, Facial Contouring</span>
                        </div>
                        <div class="py-1">
                            <a href="radiesse.html" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors block">Biostimulators</a>
                            <span class="block text-[10px] text-charcoal/40">Sculptra &amp; Radiesse Regenerative Collagen</span>
                        </div>
                    </div>
                </div>

                <!-- 5. Wellness & Longevity Medicine -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="heart-pulse" class="w-4 h-4 text-taupe"></i>
                            Wellness &amp; Longevity
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 pb-3 mt-1">
                        <div class="py-1">
                            <a href="medical-weight-loss-dallas.html" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors block">Medical Weight Loss</a>
                            <span class="block font-body text-[10px] text-charcoal/40 mt-0.5">Compounded GLP-1 &bull; Korean Body Reset</span>
                        </div>
                        <div class="py-1">
                            <a href="iv-infusion-wellness-therapy.html" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors block">Glow Infusion Therapy</a>
                            <span class="block font-body text-[10px] text-charcoal/40 mt-0.5">IV Infusions &bull; Push Therapy</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Body Contouring</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Targeted Peptides</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Women's Hormone Balance</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Pelvic Health</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Red Light Therapy</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Advanced Testing</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 py-1">
                            <span class="font-body text-sm text-charcoal/50">Men's Testosterone</span>
                            <span class="font-mono text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full uppercase">Soon</span>
                        </div>
                    </div>
                </div>

                <!-- 6. Memberships Mobile Link -->
                <div class="py-1 border-b border-light-gray/40">
                    <a href="memberships.html" class="flex items-center justify-between font-heading text-base font-bold text-near-black py-3 min-h-[44px] hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="crown" class="w-4 h-4 text-warm-gold"></i>
                            Memberships
                        </span>
                        <span class="text-[10px] uppercase font-bold tracking-widest text-warm-gold bg-warm-gold/10 border border-warm-gold/20 px-2.5 py-0.5 rounded-full">$299/MO</span>
                    </a>
                </div>

                <!-- 7. Skincare (Direct Link & Dedicated Accordion) -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="shopping-bag" class="w-4 h-4 text-warm-gold"></i>
                            Skincare Products
                            <span class="text-[9px] bg-warm-gold/15 text-warm-gold font-bold px-2 py-0.5 rounded-full uppercase">In-Office</span>
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-2 pl-4 pb-3 mt-1">
                        <a href="skincare-products.html" class="font-heading text-xs font-bold uppercase tracking-wider text-taupe hover:text-warm-gold py-1.5 min-h-[36px] flex items-center gap-1.5">
                            All Formulations <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </a>
                        <div class="flex flex-col gap-1 pl-2 border-l border-light-gray/60">
                            <a href="skincare-products.html#line-exoblanc" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center justify-between">
                                <span>Exoblanc Exosome Line</span>
                            </a>
                            <a href="skincare-products.html#line-rejuran" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center justify-between">
                                <span>REJURAN® Healing Care</span>
                            </a>
                            <a href="skincare-products.html#line-pharmesthetic" class="font-body text-sm text-charcoal/80 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center justify-between">
                                <span>Pharmesthetic Conapidil</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 8. Promos Mobile Glossy Gold Pill Button -->
                <div class="py-3">
                    <a href="specials.html" class="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FFF2B2] via-[#DFAB22] to-[#B8860B] px-5 py-2.5 rounded-full border-t border-t-white/80 border-b border-b-black/20 hover:brightness-110 transition-all duration-300 shadow-[0_4px_15px_rgba(223,171,34,0.4)] overflow-hidden uppercase font-heading text-xs font-extrabold tracking-[0.15em] text-amber-950 whitespace-nowrap w-full min-h-[44px]">
                        <span class="absolute top-[-10px] right-2 w-12 h-12 bg-white/60 blur-[6px] rounded-full pointer-events-none"></span>
                        <span class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
                        <i data-lucide="tag" class="w-4 h-4 text-amber-950 shrink-0 relative z-10"></i>
                        <span class="relative z-10">CURRENT PROMOTIONS</span>
                    </a>
                </div>

                <!-- 9. More (Our Story & Resources) -->
                <div class="mobile-accordion border-b border-light-gray/40 pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="plus-circle" class="w-4 h-4 text-taupe"></i>
                            More
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 pb-3 mt-1">
                        <div>
                            <span class="text-[10px] uppercase font-bold tracking-wider text-charcoal/40 block mb-1.5">Our Story</span>
                            <div class="flex flex-col gap-1 pl-2 border-l border-light-gray/60">
                                <a href="about.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">About SuA Glow</a>
                                <a href="about.html#k-beauty" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">What is K-Beauty</a>
                                <a href="about.html#safety" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Safety &amp; Medical Oversight</a>
                            </div>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase font-bold tracking-wider text-charcoal/40 block mb-1.5">Resources</span>
                            <div class="flex flex-col gap-1 pl-2 border-l border-light-gray/60">
                                <a href="referral.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Referral Program</a>
                                <a href="press-media.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Press / Media</a>
                                <a href="financing.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Financing</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 10. Contact -->
                <div class="mobile-accordion pb-2">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-base font-bold text-near-black py-3 min-h-[44px] text-left hover:text-taupe transition-colors">
                        <span class="flex items-center gap-2.5">
                            <i data-lucide="map-pin" class="w-4 h-4 text-taupe"></i>
                            Contact
                        </span>
                        <i data-lucide="plus" class="w-4 h-4 text-charcoal/50"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-2 pl-4 pb-3 mt-1">
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Book Online</a>
                        <a href="https://suaglow.myaestheticrecord.com/register" target="_blank" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">New Patient Forms</a>
                        <a href="contact.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors py-1 min-h-[36px] flex items-center">Location &amp; Clinic Hours</a>
                    </div>
                </div>

            </div>
        </div>

        <!-- Drawer Footer -->
        <div class="p-6 border-t border-off-white bg-off-white/50">
            <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                class="btn-primary btn-block min-h-[48px] flex items-center justify-center">
                Book Consultation
            </a>
        </div>
    </div>
</div>`;
