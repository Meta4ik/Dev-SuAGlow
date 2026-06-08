const OVERSIGHT_HTML = `
    <!-- Medical Oversight -->
    <section class="py-16 px-10 bg-off-white">
        <div class="max-w-4xl mx-auto">
            <div class="relative bg-white p-8 md:p-12 shadow-soft rounded-[2rem] border border-light-gray/40 overflow-hidden animate-on-scroll fade-up">
                <!-- Background accent element -->
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-[#AA987C]/5 rounded-full blur-2xl"></div>
                
                <div class="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
                    <!-- Icon Badge -->
                    <div class="w-14 h-14 rounded-2xl bg-[#AA987C]/10 flex items-center justify-center shrink-0 border border-[#AA987C]/20">
                        <i data-lucide="shield-check" class="w-7 h-7 text-warm-gold"></i>
                    </div>
                    
                    <div class="space-y-4 flex-1">
                        <div class="flex flex-wrap items-center gap-3">
                            <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#AA987C] bg-[#AA987C]/10 px-3 py-1 rounded-full border border-[#AA987C]/20">Medical Oversight</span>
                            <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal/40 bg-charcoal/5 px-3 py-1 rounded-full">Texas Compliant</span>
                        </div>
                        
                        <p class="text-sm md:text-base font-light text-charcoal/80 leading-relaxed">
                            All {treatment} treatments at SuA Glow are performed by <strong class="font-medium text-near-black">Sophia Yang, PA-C</strong> under appropriate medical oversight and delegation by supervising physician <strong class="font-medium text-near-black">Dr. Adam Yang</strong> in accordance with Texas law and established clinical protocols.
                        </p>
                        
                        <!-- Clinicians Info Cards -->
                        <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="flex items-center gap-3 bg-off-white/80 p-3.5 rounded-xl border border-light-gray/30">
                                <img src="assets/sophia-yang.png" alt="Sophia Yang, PA-C" class="w-8 h-8 rounded-full object-cover shrink-0 border border-light-gray/40">
                                <div>
                                    <p class="text-[11px] font-semibold text-near-black leading-tight">Sophia Yang, PA-C</p>
                                    <p class="text-[9px] uppercase tracking-wider text-taupe/80 font-medium mt-0.5">Master Practitioner</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-3 bg-off-white/80 p-3.5 rounded-xl border border-light-gray/30">
                                <img src="assets/dr-adam-yang.png" alt="Dr. Adam Yang" class="w-8 h-8 rounded-full object-cover shrink-0 border border-light-gray/40">
                                <div>
                                    <p class="text-[11px] font-semibold text-near-black leading-tight">Dr. Adam Yang</p>
                                    <p class="text-[9px] uppercase tracking-wider text-taupe/80 font-medium mt-0.5">Supervising Physician</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
