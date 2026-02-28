
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
                <!-- Lunar Launch Specials CTA -->
                <a href="specials.html" class="pointer-events-auto group flex items-center justify-center gap-2.5 bg-red-950/40 px-5 py-1.5 rounded-full border border-red-500/30 hover:bg-red-900/60 hover:border-red-500/80 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] w-max max-w-[90vw]">
                    <span class="relative flex h-2 w-2 shrink-0">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span class="text-white/90 normal-case text-[11px] font-medium tracking-[0.1em] transition-colors group-hover:text-white truncate">
                        Check out our <span class="text-red-400 font-semibold">Lunar Launch Specials</span>
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
        <a href="index.html" class="flex items-center">
            <img id="logo-desktop" src="assets/logo-main.webp" alt="SuA K-Glow"
                class="h-10 md:h-12 transition-all duration-300">
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="index.html"
                class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase">Home</a>

            <!-- About Dropdown -->
            <div class="nav-item-dropdown">
                <a href="index.html#about"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    About <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-link font-body">Our Story</a>
                    <a href="#" class="dropdown-link font-body">What is K-Beauty</a>
                    <a href="#" class="dropdown-link font-body">Meet Sophia</a>
                    <a href="#" class="dropdown-link font-body">Medical Oversight & Safety</a>
                    <a href="#" class="dropdown-link font-body">Why SuA Glow is Different</a>
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
                        <!-- Injectables -->
                        <div>
                            <h4 class="mega-menu-title">Injectables</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Cosmetic Tox: Face & Body</a>
                                </li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Medical Tox: Scar, Sweat,
                                        Migraine</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Dermal Fillers</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Sculptra: Face & Body</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Skin Boosters -->
                        <div>
                            <h4 class="mega-menu-title">Skin Boosters</h4>
                            <ul class="space-y-1">
                                <li><a href="skinboosters.html" class="dropdown-link !p-0 hover:!pl-2">Overview</a></li>
                                <li><a href="rejuran.html" class="dropdown-link !p-0 hover:!pl-2">Rejuran</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Tone Up</a></li>
                                <li><a href="juvelook.html" class="dropdown-link !p-0 hover:!pl-2">Juvelook</a></li>
                                <li><a href="re20.html" class="dropdown-link !p-0 hover:!pl-2">Elravie Re20</a></li>
                                <li><a href="cellredm.html" class="dropdown-link !p-0 hover:!pl-2">CellREDM</a></li>
                                <li><a href="byryzn.html" class="dropdown-link !p-0 hover:!pl-2">BYRYZN</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">HiloWave</a></li>
                                <li><a href="skinvive.html" class="dropdown-link !p-0 hover:!pl-2">Skinvive</a></li>
                                <li><a href="#"
                                        class="dropdown-link !p-0 hover:!pl-2 font-semibold text-taupe text-xs">Treatment
                                        Quiz</a></li>
                            </ul>
                        </div>
                        <!-- Signature & Exosome -->
                        <div>
                            <h4 class="mega-menu-title">Signature & Exosome</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Sophia's Choice</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">One Day Glow</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Bridal Glow</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Exosome Facial</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Hair Restoration</a></li>
                            </ul>
                        </div>
                        <!-- LDM & More -->
                        <div>
                            <h4 class="mega-menu-title">Precision Tech</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">LDM Ultrasound Facial</a>
                                </li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">LDM + Skin Booster</a></li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">Barrier Repair Therapy</a>
                                </li>
                                <li><a href="#" class="dropdown-link !p-0 hover:!pl-2">SkinPen Microneedling</a>
                                </li>
                            </ul>
                            <div class="mt-6 p-4 bg-off-white rounded-lg border border-taupe/10">
                                <p class="text-[10px] text-taupe uppercase tracking-widest mb-1">Featured</p>
                                <p class="text-xs text-charcoal font-medium">Rejuran® DNA Healer</p>
                                <a href="rejuran.html" class="text-[10px] text-taupe underline mt-1 inline-block">Learn
                                    More</a>
                            </div>
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
                    <a href="#" class="dropdown-link font-body">Peptide Therapy</a>
                </div>
            </div>

            <!-- Media -->
            <div class="nav-item-dropdown">
                <a href="#"
                    class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase flex items-center gap-1">
                    Media <i data-lucide="chevron-down" class="w-3 h-3"></i>
                </a>
                <div class="dropdown-menu text-left">
                    <a href="#" class="dropdown-link font-body">Before & After</a>
                    <a href="#" class="dropdown-link font-body">Video Reels</a>
                    <a href="#" class="dropdown-link font-body">Press & Features</a>
                    <a href="#" class="dropdown-link font-body">Testimonials</a>
                </div>
            </div>

            <a href="financing.html"
                class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase">Financing</a>
            <a href="index.html#contact"
                class="nav-link font-body text-[13px] tracking-[0.1em] text-charcoal hover:text-taupe transition-colors uppercase">Contact Us</a>
        </div>

        <!-- Nav Right -->
        <div class="flex items-center gap-4 md:gap-6">
            <!-- Style Guide Link -->
            <a href="style-guide.html" aria-label="Style Guide" class="text-charcoal hover:text-taupe transition-colors hidden sm:block">
                <i data-lucide="swatch-book" class="w-4 h-4"></i>
            </a>

            <!-- Scroll Specials CTA - Hidden unless scrolled -->
            <div class="relative items-center hidden sm:flex opacity-0 -translate-y-12 pointer-events-none group-[.nav-scrolled]/nav:opacity-100 group-[.nav-scrolled]/nav:translate-y-0 group-[.nav-scrolled]/nav:pointer-events-auto transition-all duration-[800ms] ease-out">
                <a href="specials.html" class="flex items-center justify-center relative group w-8 h-8 rounded-full hover:bg-red-50 transition-colors">
                    <!-- The red dot -->
                    <span class="relative flex h-2.5 w-2.5 z-10">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <!-- The expanding text on hover -->
                    <div class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 bg-white shadow-soft border border-charcoal/5 px-5 py-2 rounded-full whitespace-nowrap">
                        <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-near-black flex items-center gap-2">
                           Check out our <span class="text-red-500">Specials</span>
                        </span>
                    </div>
                </a>
            </div>

            <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                class="hidden sm:inline-flex btn-primary btn-sm">
                Book Now
            </a>
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
        <div class="flex items-center justify-between p-6 border-b border-off-white">
            <img src="assets/logo-main.webp" alt="SuA K-Glow" class="h-8">
            <button id="drawer-close" class="text-charcoal p-2">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
        <!-- Drawer Links -->
        <div class="flex-1 overflow-y-auto p-6">
            <div class="flex flex-col gap-6">
                <a href="index.html" class="font-heading text-lg text-near-black">Home</a>
                <a href="specials.html" class="font-heading text-lg text-red-500 font-medium tracking-wide flex items-center gap-2">
                    <i data-lucide="sparkles" class="w-5 h-5"></i>
                    Special Promotions
                </a>

                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left">
                        About <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="#" class="font-body text-charcoal/70">Our Story</a>
                        <a href="#" class="font-body text-charcoal/70">What is K-Beauty</a>
                        <a href="#" class="font-body text-charcoal/70">Meet Sophia</a>
                        <a href="#" class="font-body text-charcoal/70">Medical Oversight & Safety</a>
                        <a href="#" class="font-body text-charcoal/70">Why SuA Glow is Different</a>
                    </div>
                </div>

                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left">
                        Treatments <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-4 pl-4 mt-2">
                        <div>
                            <p class="text-[10px] text-taupe uppercase tracking-widest mb-2">Injectables</p>
                            <div class="flex flex-col gap-2 text-left">
                                <a href="#" class="font-body text-sm text-charcoal/70">Cosmetic Tox: Face & Body</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Medical Tox: Scar, Sweat, Migraine</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Dermal Fillers</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Sculptra: Face & Body</a>
                            </div>
                        </div>
                        <div>
                            <p class="text-[10px] text-taupe uppercase tracking-widest mb-2 text-left">Skin Boosters</p>
                            <div class="flex flex-col gap-2 text-left">
                                <a href="skinboosters.html" class="font-body text-sm text-charcoal/70">Overview</a>
                                <a href="rejuran.html" class="font-body text-sm text-charcoal/70">Rejuran</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Tone Up</a>
                                <a href="juvelook.html" class="font-body text-sm text-charcoal/70">Juvelook</a>
                                <a href="re20.html" class="font-body text-sm text-charcoal/70">Elravie Re20</a>
                                <a href="cellredm.html" class="font-body text-sm text-charcoal/70">CellREDM</a>
                                <a href="byryzn.html" class="font-body text-sm text-charcoal/70">BYRYZN</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">HiloWave</a>
                                <a href="skinvive.html" class="font-body text-sm text-charcoal/70">Skinvive</a>
                                <a href="#" class="font-body text-sm text-taupe font-semibold">Treatment Quiz</a>
                            </div>
                        </div>
                        <div>
                            <p class="text-[10px] text-taupe uppercase tracking-widest mb-2 text-left">Signature & Exosome</p>
                            <div class="flex flex-col gap-2 text-left">
                                <a href="#" class="font-body text-sm text-charcoal/70">Sophia's Choice</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">One Day Glow</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Bridal Glow</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Exosome Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Hair Restoration</a>
                            </div>
                        </div>
                        <div>
                            <p class="text-[10px] text-taupe uppercase tracking-widest mb-2 text-left">Precision Tech</p>
                            <div class="flex flex-col gap-2 text-left">
                                <a href="#" class="font-body text-sm text-charcoal/70">LDM Ultrasound Facial</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">LDM + Skin Booster</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">Barrier Repair Therapy</a>
                                <a href="#" class="font-body text-sm text-charcoal/70">SkinPen Microneedling</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left">
                        Wellness <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="#" class="font-body text-charcoal/70">Medical Weight Loss</a>
                        <a href="#" class="font-body text-charcoal/70">Peptide Therapy</a>
                    </div>
                </div>

                <div class="mobile-accordion">
                    <button
                        class="accordion-trigger flex items-center justify-between w-full font-heading text-lg text-near-black py-2 text-left">
                        Media <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                    <div class="accordion-content hidden flex flex-col gap-3 pl-4 mt-2">
                        <a href="#" class="font-body text-charcoal/70">Before & After</a>
                        <a href="#" class="font-body text-charcoal/70">Video Reels</a>
                        <a href="#" class="font-body text-charcoal/70">Press & Features</a>
                        <a href="#" class="font-body text-charcoal/70">Testimonials</a>
                    </div>
                </div>

                <a href="financing.html" class="font-heading text-lg text-near-black">Financing</a>
                <a href="index.html#contact" class="font-heading text-lg text-near-black">Contact Us</a>
                <a href="style-guide.html" class="font-heading text-lg text-taupe flex items-center gap-2 mt-4"><i data-lucide="swatch-book" class="w-5 h-5"></i> Style Guide</a>
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
