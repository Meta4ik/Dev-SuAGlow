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
                    <span class="text-[#AA987C] font-semibold">Oligio X RF Lifting</span>
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
                    <!-- Base: Model Portrait in Background -->
                    <div class="absolute left-0 top-0 w-[70%] h-[85%] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group">
                        <img src="assets/oligio-x/model-portrait.png" alt="Oligio X Patient Results" class="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    
                    <!-- Midground: Oligio X Device Product Image -->
                    <div class="absolute right-0 bottom-4 w-[42%] h-[75%] rounded-[20px] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#AA987C]/20 flex items-center justify-center hover:translate-y-[-8px] transition-transform duration-500">
                        <img src="assets/oligio_x_product.png" alt="Oligio X RF Lifting Device" class="max-w-full max-h-full object-contain">
                    </div>
                    
                    <!-- Foreground Accent: Handpiece Detail -->
                    <div class="absolute left-[45%] top-[55%] w-[32%] aspect-square rounded-[16px] bg-[#1a1c1e] p-3 shadow-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <img src="assets/oligio-x/handpiece.png" alt="Oligio X Precision Handpiece" class="max-w-full max-h-full object-contain">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;
