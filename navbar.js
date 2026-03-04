
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
                <a href="specials.html" class="pointer-events-auto group flex items-center justify-center gap-2.5 bg-red-950/40 px-5 py-1.5 rounded-full border border-red-500/30 hover:bg-red-900/60 hover:border-red-500/80 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] w-max max-w-[90vw]">
                    <span class="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center">
                        <i data-lucide="tag" class="w-2.5 h-2.5 text-white"></i>
                      </span>
                    </span>
                    <span class="text-white/90 normal-case text-[11px] font-medium tracking-[0.1em] transition-colors group-hover:text-white truncate">
                        Check out our <span class="text-red-400 font-semibold">Promotions</span>
                    </span>
                    <i data-lucide="arrow-right" class="w-3 h-3 text-red-500 group-hover:translate-x-1 transition-transform shrink-0"></i>
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
        <a href="index.html" class="flex items-center p-4 md:p-0">
            <img id="logo-desktop" src="assets/logo-main.webp" alt="SuA K-Glow"
                class="h-8 md:h-12 w-auto object-contain transition-all duration-300">
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-5 xl:gap-8">

            <!-- About Dropdown -->
            <div class="nav-item-dropdown">
                <a href="about.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    About <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu">
                    <a href="about.html#story" class="dropdown-link font-body">Our Story</a>
                    <a href="about.html#k-beauty" class="dropdown-link font-body">What is K-Beauty</a>
                    <a href="about.html#sophia" class="dropdown-link font-body">Meet Sophia</a>
                    <a href="about.html#safety" class="dropdown-link font-body">Medical Oversight &amp; Safety</a>
                    <a href="about.html#difference" class="dropdown-link font-body">Why SuA Glow is Different</a>
                </div>
            </div>

            <!-- Treatments Mega Menu -->
            <div class="nav-item-mega group">
                <a href="treatments.html"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Treatments <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="mega-menu p-10">
                    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-left">

                        <!-- Col 1: Injectables -->
                        <div>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="syringe" class="w-3 h-3 mr-2"></i>Injectables
                            </a>
                            <ul class="space-y-3">
                                <li>
                                    <a href="#" class="dropdown-link !p-0 hover:!pl-2">
                                        Cosmetic Tox
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">Face &amp; Body</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-link !p-0 hover:!pl-2">
                                        Medical Tox
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">Scar, Sweating, Migraine, etc</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-link !p-0 hover:!pl-2">
                                        Dermal Fillers
                                        <span class="block text-[10px] text-charcoal/40 mt-0.5 font-normal">Facial Contouring / Volume Restoration</span>
                                    </a>
                                </li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Sculptra</a></li>
                            </ul>
                        </div>

                        <!-- Col 2: Skin Boosters -->
                        <div>
                            <a href="skinboosters.html" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="droplets" class="w-3 h-3 mr-2"></i>Skin Boosters
                            </a>
                            <ul class="space-y-1">
                                <li><a href="skinboosters.html" class="dropdown-link !p-0 hover:!pl-2">Overview</a></li>
                                <li><a href="rejuran.html" class="dropdown-link !p-0 hover:!pl-2">Rejuran</a></li>
                                <li><a href="rejuran-tone-up.html" class="dropdown-link !p-0 hover:!pl-2">Tone Up</a></li>
                                <li><a href="juvelook.html" class="dropdown-link !p-0 hover:!pl-2">Juvelook</a></li>
                                <li><a href="re20.html" class="dropdown-link !p-0 hover:!pl-2">Elravie Re20</a></li>
                                <li><a href="cellredm.html" class="dropdown-link !p-0 hover:!pl-2">CellREDM</a></li>
                                <li><a href="byryzn.html" class="dropdown-link !p-0 hover:!pl-2">BYRYZN</a></li>
                                <li><a href="hilowave.html" class="dropdown-link !p-0 hover:!pl-2">HiloWave</a></li>
                                <li><a href="skinvive.html" class="dropdown-link !p-0 hover:!pl-2">Skinvive</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Restylane Vital Light</a></li>
                            </ul>
                        </div>

                        <!-- Col 3: SuA Glow Signature + Exosome -->
                        <div>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="sparkles" class="w-3 h-3 mr-2"></i>SuA Glow Signature
                            </a>
                            <ul class="space-y-2 mb-5">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Get from Sophia</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">One Day Glow</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Bridal Glow</a></li>
                            </ul>
                            <div class="flex items-center gap-2 text-[10px] uppercase tracking-widest text-taupe font-semibold mb-3">
                                <i data-lucide="layers" class="w-3 h-3"></i> Exosome
                            </div>
                            <ul class="space-y-2">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Exosome Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Hair Restoration</a></li>
                            </ul>
                        </div>

                        <!-- Col 4: LDM K-Beauty + LDM Ultrasound + SkinPen -->
                        <div>
                            <a href="#" class="badge-standard mb-6 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="scan-face" class="w-3 h-3 mr-2"></i>LDM K-Beauty Treatments
                            </a>
                            <ul class="space-y-1 mb-4">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">LDM Korean Ultrasound Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">LDM + Skin Booster Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Post-Procedure Recovery LDM</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Barrier Repair &amp; Hydration Therapy</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Rejuran Tone-Up Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Exosome Recovery Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">HA Glass Skin Facial</a></li>
                            </ul>
                            <div class="text-[10px] uppercase tracking-widest text-taupe font-semibold mb-3">LDM Ultrasound Treatment</div>
                            <ul class="space-y-1 mb-4">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Lifting &amp; Toning</a></li>
                            </ul>
                            <div class="flex items-center gap-2 text-[10px] uppercase tracking-widest text-taupe font-semibold mb-3">
                                <i data-lucide="zap" class="w-3 h-3"></i> SkinPen Microneedling
                            </div>
                            <ul class="space-y-1">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Microneedling</a></li>
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
                </div>
            </div>

            <a href="referral.html"
                class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase">Referral</a>

            <!-- Media -->
            <div class="nav-item-dropdown">
                <a href="#"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Media <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu text-left">
                    <a href="#" class="dropdown-link font-body">Before &amp; After Gallery</a>
                    <a href="#" class="dropdown-link font-body">Video Reels</a>
                    <a href="#" class="dropdown-link font-body">Press &amp; Features</a>
                    <a href="#" class="dropdown-link font-body">Patient Testimonials</a>
                </div>
            </div>

            <a href="financing.html"
                class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase">Financing</a>

            <a href="contact.html"
                class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase">Contact</a>

            <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                class="font-body text-[13px] tracking-[0.1em] uppercase bg-taupe text-white px-4 py-2 rounded-full hover:bg-warm-gold transition-colors whitespace-nowrap">
                Book Now
            </a>

        </div>

        <!-- Nav Right -->
        <div class="flex items-center gap-4 md:gap-6">
            <!-- Style Guide Link -->
            <a href="style-guide.html" aria-label="Style Guide" class="text-charcoal hover:text-taupe transition-colors hidden sm:block">
                <i data-lucide="swatch-book" class="w-4 h-4"></i>
            </a>

            <!-- Scroll Promotions CTA - Hidden unless scrolled -->
            <div class="relative items-center hidden sm:flex opacity-0 -translate-y-12 pointer-events-none group-[.nav-scrolled]/nav:opacity-100 group-[.nav-scrolled]/nav:translate-y-0 group-[.nav-scrolled]/nav:pointer-events-auto transition-all duration-[800ms] ease-out">
                <a href="specials.html" class="flex items-center justify-center relative group w-8 h-8 rounded-full hover:bg-red-50 transition-colors">
                    <!-- The promotions icon badge -->
                    <span class="relative flex h-5 w-5 z-10 items-center justify-center">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center">
                            <i data-lucide="tag" class="w-2.5 h-2.5 text-white"></i>
                        </span>
                    </span>
                    <!-- The expanding text on hover -->
                    <div class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 bg-white shadow-soft border border-charcoal/5 px-5 py-2 rounded-full whitespace-nowrap">
                        <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-near-black flex items-center gap-2">
                           Check out our <span class="text-red-500">Promotions</span>
                        </span>
                    </div>
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="menu-btn" class="lg:hidden text-charcoal hover:text-taupe transition-colors">
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

                <!-- About -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        About <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="about.html" class="font-body text-charcoal/70 hover:text-taupe transition-colors font-semibold">Overview</a>
                        <a href="about.html#story" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Our Story</a>
                        <a href="about.html#k-beauty" class="font-body text-charcoal/70 hover:text-taupe transition-colors">What is K-Beauty</a>
                        <a href="about.html#sophia" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Meet Sophia</a>
                        <a href="about.html#safety" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Medical Oversight &amp; Safety</a>
                        <a href="about.html#difference" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Why SuA Glow is Different</a>
                    </div>
                </div>

                <!-- Treatments -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        Treatments <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-5 pl-4 mt-2">

                        <!-- Injectables -->
                        <div>
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="syringe" class="w-3 h-3 mr-2"></i>Injectables
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <div>
                                    <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Cosmetic Tox</a>
                                    <span class="block text-[10px] text-charcoal/40">Face &amp; Body</span>
                                </div>
                                <div>
                                    <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Medical Tox</a>
                                    <span class="block text-[10px] text-charcoal/40">Scar, Sweating, Migraine, etc</span>
                                </div>
                                <div>
                                    <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Dermal Fillers</a>
                                    <span class="block text-[10px] text-charcoal/40">Facial Contouring / Volume Restoration</span>
                                </div>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Sculptra</a>
                            </div>
                        </div>

                        <!-- Skin Boosters -->
                        <div>
                            <a href="skinboosters.html" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="droplets" class="w-3 h-3 mr-2"></i>Skin Boosters
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <a href="skinboosters.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Overview</a>
                                <a href="rejuran.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Rejuran</a>
                                <a href="rejuran-tone-up.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Tone Up</a>
                                <a href="juvelook.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Juvelook</a>
                                <a href="re20.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Elravie Re20</a>
                                <a href="cellredm.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">CellREDM</a>
                                <a href="byryzn.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">BYRYZN</a>
                                <a href="hilowave.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">HiloWave</a>
                                <a href="skinvive.html" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Skinvive</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Restylane Vital Light</a>
                            </div>
                        </div>

                        <!-- SuA Glow Signature -->
                        <div>
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="sparkles" class="w-3 h-3 mr-2"></i>SuA Glow Signature
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Get from Sophia</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">One Day Glow</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Bridal Glow</a>
                            </div>
                        </div>

                        <!-- Exosome -->
                        <div>
                            <div class="flex items-center gap-2 text-[10px] uppercase tracking-widest text-taupe font-semibold mb-3">
                                <i data-lucide="layers" class="w-3 h-3"></i> Exosome
                            </div>
                            <div class="flex flex-col gap-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Exosome Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Hair Restoration</a>
                            </div>
                        </div>

                        <!-- LDM K-Beauty Treatments -->
                        <div>
                            <a href="#" class="badge-standard !py-1 !px-3 mb-3 bg-off-white border-taupe/10 hover:bg-taupe hover:text-white transition-colors">
                                <i data-lucide="scan-face" class="w-3 h-3 mr-2"></i>LDM K-Beauty Treatments
                            </a>
                            <div class="flex flex-col gap-2 mt-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">LDM Korean Ultrasound Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">LDM + Skin Booster Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Post-Procedure Recovery LDM</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Barrier Repair &amp; Hydration Therapy</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Rejuran Tone-Up Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Exosome Recovery Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">HA Glass Skin Facial</a>
                            </div>
                        </div>

                        <!-- LDM Ultrasound Treatment -->
                        <div>
                            <div class="text-[10px] uppercase tracking-widest text-taupe font-semibold mb-3">LDM Ultrasound Treatment</div>
                            <div class="flex flex-col gap-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Lifting &amp; Toning</a>
                            </div>
                        </div>

                        <!-- SkinPen Microneedling -->
                        <div>
                            <div class="flex items-center gap-2 text-[10px] uppercase tracking-widest text-taupe font-semibold mb-3">
                                <i data-lucide="zap" class="w-3 h-3"></i> SkinPen Microneedling
                            </div>
                            <div class="flex flex-col gap-2">
                                <a href="#" class="font-body text-sm text-charcoal/70 hover:text-taupe transition-colors">Microneedling</a>
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
                    </div>
                </div>

                <a href="referral.html" class="font-heading text-lg text-near-black hover:text-taupe transition-colors">Referral Program</a>

                <!-- Media -->
                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left hover:text-taupe transition-colors">
                        Media <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Before &amp; After Gallery</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Video Reels</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Press &amp; Features</a>
                        <a href="#" class="font-body text-charcoal/70 hover:text-taupe transition-colors">Patient Testimonials</a>
                    </div>
                </div>

                <a href="financing.html" class="font-heading text-lg text-near-black hover:text-taupe transition-colors">Financing</a>
                <a href="contact.html" class="font-heading text-lg text-near-black hover:text-taupe transition-colors">Contact</a>
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
