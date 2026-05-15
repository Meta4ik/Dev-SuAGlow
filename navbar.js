
// SuA Glow Navigation Content
const NAVBAR_HTML = `
<!-- Navigation -->
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
                    <span class="absolute top-[-10px] right-2 w-12 h-12 bg-white/60 blur-[6px] rounded-full"></span>
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
            <img id="logo-desktop" src="assets/logo-main.webp" alt="SuA K-Glow"
                class="h-8 md:h-12 w-auto object-contain transition-all duration-300">
        </a>

        <!-- Desktop Menu -->
        <div class="desktop-nav-menu min-[1180px]:flex items-center justify-center flex-1 gap-5 xl:gap-8">

            <!-- Skin Health Mega Menu (formerly Treatments) -->
            <div class="nav-item-mega group">
                <a href="skin-health.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Skin Health <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="mega-menu p-10">
                    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-left">

                        <!-- Col 1: Placeholder for future Education section -->
                        <div>
                        </div>

                        <!-- Col 2: Injectables -->
                        <div>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="syringe" class="w-3 h-3 mr-2"></i>Injectables
                            </a>
                            <ul class="space-y-3">
                                <li>
                                    <a href="cosmetic-tox.html" class="dropdown-link !p-0 hover:!pl-2">
                                        Cosmetic Tox
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">SkinTox, Face, Neck, Chest &amp; Body</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="medical-tox.html" class="dropdown-link !p-0 hover:!pl-2">
                                        Medical Tox
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">TMJ, Sweating, Migraine</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-link !p-0 hover:!pl-2">
                                        HA Fillers
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">Restylane &bull; Facial Contouring &amp; Volume</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-link !p-0 hover:!pl-2">
                                        Biostimulators
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">Sculptra &bull; Radiesse &bull; Juvelook Volume</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <!-- Col 3: SuA Glow Signature + K-Beauty Facials -->
                        <div>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="sparkles" class="w-3 h-3 mr-2"></i>SuA Glow Signature
                            </a>
                            <ul class="space-y-1 mb-5">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Personalize Skin Quality</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">One Day Glow</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Bridal Glow</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Man Up Treatment</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Acne Treatment</a></li>
                            </ul>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors mt-8">
                                <i data-lucide="smile" class="w-3 h-3 mr-2"></i>K-Beauty Facials
                            </a>
                            <ul class="space-y-1">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Water Droplet Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Recovery &amp; Repair</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Glow &amp; Hydration</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Collagen Stimulation</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Tone Up Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Exosome Facial</a></li>
                            </ul>
                        </div>

                        <!-- Col 4: Skin Rejuvenation + Scar + Hair Loss -->
                        <div>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="scan-face" class="w-3 h-3 mr-2"></i>Skin Rejuvenation
                            </a>
                            <ul class="space-y-1 mb-5">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Oligio X (RF Lifting &amp; Tightening)</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">LDM (Ultrasound Treatment)</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">SkinPen (Microneedling)</a></li>
                            </ul>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors mt-8">
                                <i data-lucide="shield-plus" class="w-3 h-3 mr-2"></i>Scar Treatment
                            </a>
                            <ul class="space-y-1 mb-5">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Acne Scars</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Surgical &amp; Traumatic Scars</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Stretch Marks</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Keloid</a></li>
                            </ul>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors mt-8">
                                <i data-lucide="sprout" class="w-3 h-3 mr-2"></i>Hair Loss
                            </a>
                            <ul class="space-y-1">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Hair Loss Treatment</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Wellness -->
            <div class="nav-item-dropdown">
                <a href="index.html#wellness"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Wellness <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-link font-body">Medical Weight Loss</a>
                    <a href="#" class="dropdown-link font-body">Peptides</a>
                    <a href="#" class="dropdown-link font-body">Skin Brightening &amp; Detox IV</a>
                </div>
            </div>

            <!-- Education (formerly About) -->
            <div class="nav-item-dropdown">
                <a href="about.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Education <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu">
                    <a href="about.html#story" class="dropdown-link font-body">Our Story</a>
                    <a href="about.html#k-beauty" class="dropdown-link font-body">What is K-Beauty</a>
                    <a href="about.html#safety" class="dropdown-link font-body">Medical Oversight &amp; Safety</a>
                    <a href="about.html#difference" class="dropdown-link font-body">Why SuA Glow is Different</a>
                </div>
            </div>

            <!-- More -->
            <div class="nav-item-dropdown">
                <a href="#"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    More <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu text-left">
                    <a href="referral.html" class="dropdown-link font-body">Referral Program</a>
                    <a href="#" class="dropdown-link font-body">Before &amp; After</a>
                    <a href="#" class="dropdown-link font-body">Press / Media</a>
                    <a href="testimonials.html" class="dropdown-link font-body">Patient Testimonials</a>
                    <a href="financing.html" class="dropdown-link font-body">Financing</a>
                    <a href="#" class="dropdown-link font-body">Vlog / Blog</a>
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
                    <a href="contact.html#location" class="dropdown-link font-body">Location &amp; Hours</a>
                    <a href="tel:972-665-8737" class="dropdown-link font-body">Text / Call Us</a>
                    <a href="#" class="dropdown-link font-body">New Patient Forms</a>
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
            <!-- Style Guide Link -->
            <a href="style-guide.html" aria-label="Style Guide" class="text-charcoal hover:text-taupe transition-colors hidden sm:block">
                <i data-lucide="swatch-book" class="w-4 h-4"></i>
            </a>

            <!-- Scroll Promotions CTA - Hidden unless scrolled -->
            <div class="relative items-center hidden sm:flex opacity-0 -translate-y-12 pointer-events-none group-[.nav-scrolled]/nav:opacity-100 group-[.nav-scrolled]/nav:translate-y-0 group-[.nav-scrolled]/nav:pointer-events-auto transition-all duration-[800ms] ease-out">
                <a href="specials.html" class="flex items-center justify-center relative group w-8 h-8 rounded-full hover:brightness-110 transition-all duration-300 bg-gradient-to-b from-[#FFF2B2] via-[#DFAB22] to-[#B8860B] border-t border-t-white/80 border-b border-b-black/20 shadow-[0_4px_10px_rgba(223,171,34,0.4)] overflow-visible">
                    <span class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent h-[40%] rounded-t-full pointer-events-none"></span>
                    
                    <span class="relative flex h-5 w-5 z-10 items-center justify-center">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                        <i data-lucide="tag" class="w-3.5 h-3.5 text-amber-950"></i>
                    </span>
                    <!-- The expanding text on hover -->
                    <div class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 bg-gradient-to-b from-[#FFF2B2] via-[#DFAB22] to-[#B8860B] shadow-[0_4px_15px_rgba(223,171,34,0.4)] border-t border-t-white/80 border-b border-b-black/20 px-5 py-2 rounded-full whitespace-nowrap overflow-hidden z-20">
                        <span class="absolute top-[-10px] right-2 w-12 h-12 bg-white/60 blur-[6px] rounded-full pointer-events-none"></span>
                        <span class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
                        <span class="text-[10px] font-bold tracking-[0.1em] uppercase text-amber-950 flex items-center gap-2 relative z-10 p-0.5">
                           Check out our Promotions
                        </span>
                    </div>
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="menu-btn" class="min-[1180px]:hidden text-charcoal hover:text-taupe transition-colors">
                <i data-lucide="menu" id="menu-icon" class="w-6 h-6"></i>
            </button>
        </div>
    </div>
</nav>

<!-- Mobile Drawer (Full Screen) -->
<div id="mobile-drawer" class="fixed inset-0 z-[100] bg-white hidden">
    <div class="flex flex-col h-full text-left">
        <!-- Drawer Header -->
        <div class="flex items-center justify-between p-8 border-b border-off-white">
            <img src="assets/logo-main.webp" alt="SuA K-Glow" class="h-7 w-auto object-contain">
            <button id="drawer-close" class="text-charcoal p-2">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
        <!-- Drawer Links -->
        <div class="flex-1 overflow-y-auto p-6">
            <div class="flex flex-col gap-6">

                <!-- Promotions CTA -->
                <a href="specials.html" class="group flex items-center gap-3 bg-gradient-to-b from-[#FFF2B2] via-[#DFAB22] to-[#B8860B] px-5 py-3 rounded-xl border-t border-t-white/80 border-b border-b-black/20 hover:brightness-110 transition-all duration-300 shadow-[0_4px_15px_rgba(223,171,34,0.4)] relative overflow-hidden">
                    <span class="absolute top-[-10px] right-2 w-16 h-16 bg-white/60 blur-[8px] rounded-full pointer-events-none"></span>
                    <span class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></span>
                    
                    <span class="relative flex h-5 w-5 shrink-0 items-center justify-center z-10">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                        <i data-lucide="tag" class="w-4 h-4 text-amber-950 relative z-10"></i>
                    </span>
                    <span class="font-body text-sm font-bold z-10 text-amber-950">
                        Check out our Promotions
                    </span>
                    <i data-lucide="arrow-right" class="w-5 h-5 text-amber-950/80 ml-auto group-hover:text-amber-950 group-hover:translate-x-1 transition-all shrink-0 z-10"></i>
                </a>

                <!-- Skin Health (formerly Treatments) -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        Skin Health <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-5 pl-4 mt-2">

                        <!-- Injectables -->

                        <!-- Injectables -->
                        <div>
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="syringe" class="w-3 h-3 mr-2"></i>Injectables
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <div>
                                    <a href="cosmetic-tox.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Cosmetic Tox</a>
                                    <span class="block text-[10px] text-charcoal/40">SkinTox, Face, Neck, Chest &amp; Body</span>
                                </div>
                                <div>
                                    <a href="medical-tox.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Medical Tox</a>
                                    <span class="block text-[10px] text-charcoal/40">TMJ, Sweating, Migraine</span>
                                </div>
                                <div>
                                    <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">HA Fillers</a>
                                    <span class="block text-[10px] text-charcoal/40">Restylane &bull; Facial Contouring &amp; Volume</span>
                                </div>
                                <div>
                                    <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Biostimulators</a>
                                    <span class="block text-[10px] text-charcoal/40">Sculptra &bull; Radiesse &bull; Juvelook Volume</span>
                                </div>
                            </div>
                        </div>

                        <!-- SuA Glow Signature -->
                        <div>
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="sparkles" class="w-3 h-3 mr-2"></i>SuA Glow Signature
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Personalize Skin Quality</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">One Day Glow</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Bridal Glow</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Man Up Treatment</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Acne Treatment</a>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="smile" class="w-3 h-3 mr-2"></i>K-Beauty Facials
                            </a>
                            <div class="flex flex-col gap-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Water Droplet Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Recovery &amp; Repair</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Glow &amp; Hydration</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Collagen Stimulation</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Tone Up Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Exosome Facial</a>
                            </div>
                        </div>

                        <!-- Skin Rejuvenation -->
                        <div>
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="scan-face" class="w-3 h-3 mr-2"></i>Skin Rejuvenation
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Oligio X (RF Lifting &amp; Tightening)</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">LDM (Ultrasound Treatment)</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">SkinPen (Microneedling)</a>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="shield-plus" class="w-3 h-3 mr-2"></i>Scar Treatment
                            </a>
                            <div class="flex flex-col gap-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Acne Scars</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Surgical &amp; Traumatic Scars</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Stretch Marks</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Keloid</a>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="sprout" class="w-3 h-3 mr-2"></i>Hair Loss
                            </a>
                            <div class="flex flex-col gap-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Hair Loss Treatment</a>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Wellness -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        Wellness <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Medical Weight Loss</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Peptides</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Skin Brightening &amp; Detox IV</a>
                    </div>
                </div>

                <!-- Education (formerly About) -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        Education <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="about.html" class="font-body text-charcoal/70 hover:text-taupe transition-colors font-semibold">Overview</a>
                        <a href="about.html#story" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Our Story</a>
                        <a href="about.html#k-beauty" class="font-body text-charcoal/70 hover:text-taupe transition-colors">What is K-Beauty</a>
                        <a href="about.html#safety" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Medical Oversight &amp; Safety</a>
                        <a href="about.html#difference" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Why SuA Glow is Different</a>
                    </div>
                </div>

                <!-- More -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        More <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="referral.html" class="font-body text-charcoal/70 hover:text-taupe transition-colors font-semibold">Referral Program</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Before &amp; After</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Press / Media</a>
                        <a href="testimonials.html" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Patient Testimonials</a>
                        <a href="financing.html" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Financing</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Vlog / Blog</a>
                    </div>
                </div>

                <!-- Contact -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        Contact <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank" class="font-body text-charcoal/70 hover:text-taupe transition-colors font-semibold">Book Appointment</a>
                        <a href="contact.html#location" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Location &amp; Hours</a>
                        <a href="tel:972-665-8737" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Text / Call Us</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">New Patient Forms</a>
                        <a href="specials.html" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Promotions</a>
                    </div>
                </div>

                <a href="style-guide.html" class="font-heading text-lg text-taupe flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity"><i data-lucide="swatch-book" class="w-5 h-5"></i> Style Guide</a>

            </div>
        </div>
        <!-- Drawer Footer -->
        <div class="p-6 border-t border-off-white bg-off-white/50">
            <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                class="btn-primary btn-block">
                Book Appointment
            </a>
        </div>
    </div>
</div>
`;
