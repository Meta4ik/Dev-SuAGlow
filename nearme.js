// SuA Glow "Near Me" Section Component
// Reusable location context block for the entire site
const NEARME_HTML = `
<!-- Location Context — "Near Me" Section -->
<section id="location" data-nav-theme="dark" class="py-20 md:py-24 px-6 md:px-12 lg:px-16 bg-white border-t border-charcoal/5 relative z-10">
    <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div class="md:w-1/3 animate-on-scroll fade-right">
                <h2 class="heading-wide text-2xl sm:text-3xl mb-4 text-near-black leading-tight"><span id="nearme-product">SuA Glow</span> Near Me</h2>
                <p class="text-xs uppercase tracking-[0.4em] text-[#AA987C] font-bold">Serving DFW Masterfully</p>
            </div>
            <div class="md:w-2/3 animate-on-scroll fade-left delay-100">
                <p class="text-base sm:text-lg font-light leading-relaxed text-charcoal/80 mb-8 sm:mb-10">
                    SuA Glow is located in <strong class="font-semibold text-near-black">Carrollton, TX</strong>, quietly
                    serving skin obsessives from the entire DFW metroplex including:
                </p>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-5 text-xs uppercase tracking-[0.25em] font-bold text-charcoal/50">
                    <span>• Carrollton</span> <span>• Dallas</span> <span>• Frisco</span> <span>• Plano</span>
                    <span>• McKinney</span> <span>• Irving</span> <span>• Coppell</span> <span>• Lewisville</span>
                    <span>• Southlake</span> <span>• Grapevine</span> <span>• Ft Worth</span> <span>• Richardson</span>
                </div>
            </div>
        </div>
    </div>
</section>
`;

if (typeof window !== 'undefined') {
    window.NEARME_HTML = NEARME_HTML;
}
