const OLIGIO_BANNER_HTML = `
<!-- Oligio X Premium Banner Component -->
<section class="py-24 px-8 md:px-16 bg-[#131619] text-white relative overflow-hidden">
    <!-- Starburst & Subtle Glow Accents -->
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#AA987C] blur-[150px] rounded-full"></div>
    </div>
    
    <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <!-- Text content column -->
            <div class="lg:col-span-6 space-y-8 animate-on-scroll fade-right">
                <span class="inline-flex items-center px-4 py-1.5 border border-[#AA987C]/30 bg-[#AA987C]/10 text-[#AA987C] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
                    DFW Regional Premiere
                </span>
                
                <h2 class="heading-wide text-3xl md:text-5xl text-white leading-[1.1] font-light">
                    First DFW Med Spa to Offer<br>
                    <span class="text-[#AA987C]">Oligio X RF Lifting</span>
                </h2>
                
                <p class="text-sm md:text-base font-light text-white/70 leading-relaxed max-w-xl">
                    SuA Glow is proud to be among the first medical spas in the Dallas-Fort Worth area to introduce Oligio X RF Lifting as part of our Korean-inspired skin health philosophy.
                </p>
                
                <div class="pt-4 flex flex-col sm:flex-row items-start gap-4">
                    <a href="oligio-x.html" class="btn-primary py-4 px-8 text-xs font-semibold tracking-widest bg-[#AA987C] hover:bg-white hover:text-black rounded-full transition-all duration-300">
                        Explore Oligio X
                    </a>
                    <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank" class="btn-secondary py-4 px-8 text-xs font-semibold tracking-widest border border-white/20 hover:border-white text-white rounded-full transition-all duration-300">
                        Book Consultation
                    </a>
                </div>
            </div>
            
            <!-- Graphic collage column -->
            <div class="lg:col-span-6 animate-on-scroll fade-left delay-100">
                <div class="relative w-full h-[350px] sm:h-[450px] flex items-center justify-center">
                    <!-- Circular Badge -->
                    <div class="absolute hidden md:flex items-center justify-center z-20 text-[#AA987C] animate-on-scroll fade-up delay-400"
                        style="width: 140px; height: 140px; top: -20px; right: 26%; animation: float 6s ease-in-out infinite;">
                        <div class="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/10"></div>
                        <svg viewBox="0 0 100 100" class="relative z-10" style="width: 95%; height: 95%; animation: spin-badge 20s linear infinite;">
                            <path id="textCircleBanner" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
                            <text font-family="Montserrat, sans-serif" font-size="7.9" font-weight="700" fill="currentColor" class="uppercase" letter-spacing="0.1em">
                                <textPath href="#textCircleBanner" startOffset="0%">
                                    NOW AVAILABLE IN DFW • CARROLLTON, TX •
                                </textPath>
                            </text>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center z-10">
                            <!-- state of Texas -->
                            <img src="assets/sua_texas.svg" alt="Texas" style="width: 32px; height: 32px; filter: brightness(0) invert(1); opacity: 0.85;">
                        </div>
                    </div>

                    <!-- Base: Model Portrait in Background -->
                    <div class="absolute left-0 top-0 w-[70%] h-[85%] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group">
                        <img src="assets/oligio-x/model-portrait.png" alt="Oligio X Patient Results" class="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <!-- Midground: Oligio X Device Product Image -->
                    <div class="absolute right-0 bottom-4 w-[42%] h-[75%] rounded-[20px] overflow-hidden bg-white p-6 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#AA987C]/20 hover:translate-y-[-8px] transition-transform duration-500">
                        <img src="assets/oligio_x_product.png" alt="Oligio X RF Lifting Device" class="max-w-full max-h-full object-contain">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;
