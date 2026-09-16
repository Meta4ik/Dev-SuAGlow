const OVERSIGHT_HTML = `
    <!-- Medical Oversight -->
    <section class="py-10 md:py-14 px-6 md:px-12 lg:px-16 bg-light-gray">
        <div class="max-w-5xl mx-auto">
            <div class="relative bg-white p-6 sm:p-8 md:p-10 shadow-soft rounded-[2rem] border border-light-gray/40 overflow-hidden animate-on-scroll fade-up">
                <!-- Background accent element -->
                <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-[#AA987C]/5 rounded-full blur-2xl pointer-events-none"></div>
                
                <div class="space-y-4 relative z-10">
                    <div class="flex items-center justify-between gap-4">
                        <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#AA987C] bg-[#AA987C]/10 px-3.5 py-1 rounded-full border border-[#AA987C]/20">Medical Expertise You Can Trust</span>
                        
                        <!-- Texas Compliant Circular Seal (Authentic Texas State Silhouette) -->
                        <div class="shrink-0 relative group flex items-center justify-center text-[#AA987C] w-14 h-14 sm:w-16 sm:h-16 cursor-default" title="Texas Compliant Medical Practice">
                            <div class="absolute inset-0 bg-[#AA987C]/5 rounded-full border border-[#AA987C]/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#AA987C]/10"></div>
                            <svg viewBox="0 0 100 100" class="w-full h-full relative z-10 transition-transform duration-700 group-hover:rotate-45">
                                <defs>
                                    <path id="txCirclePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                                </defs>
                                <circle cx="50" cy="50" r="47" fill="none" stroke="#AA987C" stroke-width="0.75" opacity="0.3" />
                                <circle cx="50" cy="50" r="44" fill="none" stroke="#AA987C" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.5" />
                                <text font-family="'Montserrat', 'Poppins', sans-serif" font-size="7.5" font-weight="700" fill="#AA987C" letter-spacing="0.1em" class="uppercase">
                                    <textPath href="#txCirclePath" xlink:href="#txCirclePath" startOffset="0%">
                                        TEXAS COMPLIANT • CLINICAL OVERSIGHT •
                                    </textPath>
                                </text>
                            </svg>
                            <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                <svg viewBox="0 0 200 200" class="w-6 h-6 sm:w-7 sm:h-7 text-[#AA987C]" fill="currentColor">
                                    <path d="M195.5,103.2v5.9l-4.6,20.3-39.2,23.9c-5.3,4.6-9.2,11.7-14,17.4l2.2,20.5c0,.8-.6,2.9-1.3,3.3s-3,.6-3.8.2l-23.9-9.8c-2.6-6.3-4-12.3-7-18.2s-8.1-8.8-11.2-13.7-4.6-10.5-8-15.2-7.3-7.7-11.2-9.5-12-.2-17,.2l-3.8,8.5c-.6,1.3-2.7,3.4-3.9,3.7s-4.4-1.3-6-1.8c-9.8-3.4-15.9-9.6-18.7-19.6s-5.4-8-8-10.4l-14-13.2c-2-1.9-4.2-3.6-6.3-4.6v-2c.4-.1,2.3-.6,3-.6l51.5-.3V5.1c.1,0,46.7,0,46.7,0l.3,36c3.6,2.7,8,3.4,11.7,4.8,4.7,1.8,8.5,4,13.9,3.3s4.1,2,5.5,3.5c22.4-2.7,18.7,6.9,30.4,3.2,15.2-4.8,10.7-3.4,29.3,3.9,1.4,22.1-3.9,24.6,7.7,43.3Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-sm md:text-base font-light text-charcoal/80 leading-relaxed">
                        Every {treatment} treatment is performed by <strong class="font-medium text-near-black">Sophia Yang, PA-C</strong>, under physician-delegated medical oversight from <strong class="font-medium text-near-black">Dr. Adam Yang, MD</strong>, following Texas regulations and established clinical protocols.
                    </p>
                    
                    <!-- Clinicians Info Cards -->
                    <div class="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-2xl border border-light-gray/30 shadow-xs" style="background: radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(233,233,229,0.8) 100%);">
                            <img src="assets/sophia-yang.png" alt="Sophia Yang, PA-C" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 border-2 border-white shadow-md">
                            <div>
                                <p class="text-sm sm:text-base font-semibold text-near-black leading-tight">Sophia Yang, PA-C</p>
                                <p class="text-[10px] sm:text-[11px] uppercase tracking-wider text-taupe/90 font-medium mt-1">Seoul-Trained Medical Aesthetic Provider</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-2xl border border-light-gray/30 shadow-xs" style="background: radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(233,233,229,0.8) 100%);">
                            <img src="assets/dr-adam-yang.png" alt="Dr. Adam Yang" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 border-2 border-white shadow-md">
                            <div>
                                <p class="text-sm sm:text-base font-semibold text-near-black leading-tight">Dr. Adam Yang</p>
                                <p class="text-[10px] sm:text-[11px] uppercase tracking-wider text-taupe/90 font-medium mt-1">Medical Director &amp; Supervising Physician</p>
                            </div>
                        </div>
                    </div>

                    <!-- After Provider Images -->
                    <p class="text-xs md:text-sm font-light text-charcoal/75 leading-relaxed pt-3 border-t border-light-gray/30 mt-3">
                        Every treatment plan is personalized to support healthy collagen, protect the skin barrier, and deliver natural-looking results.
                    </p>
                </div>
            </div>
        </div>
    </section>
`;

// Auto-initialize if script.js already ran or DOM is loaded
if (typeof initOversight === 'function') {
    initOversight();
} else if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => {
        if (typeof initOversight === 'function') initOversight();
    }, 10);
}
