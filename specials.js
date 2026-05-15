const SPECIALS_HTML = `
    <!-- May Specials Section -->
    <section id="promotions" data-nav-theme="light" class="py-32 bg-off-white border-y border-charcoal/5 relative overflow-hidden">
        <div class="starburst-container"><div class="sb-3"></div></div>
        <div class="max-w-7xl mx-auto px-8 relative z-10">
            <div class="text-center mb-16 animate-on-scroll fade-up">
                <span
                    class="inline-block text-[10px] tracking-[0.4em] text-taupe uppercase font-bold mb-6 italic">Limited Time | May 2026</span>
                <h2 class="heading-wide text-4xl md:text-5xl text-near-black mb-4 uppercase tracking-[0.15em]">May Specials</h2>
                <p class="font-body text-taupe italic tracking-widest opacity-80 uppercase text-[10px]">pure, water-like beauty</p>
                <div class="w-24 h-[1px] bg-taupe/30 mx-auto mt-8"></div>
            </div>

            <!-- Featured Special: Oligio X - Full Width -->
            <div
            class="product-card glow-card group bg-near-black text-white border-none shadow-soft rounded-[20px] overflow-hidden mb-12 flex flex-col md:flex-row animate-on-scroll fade-up delay-100"
            style="--glow-color: #14b8a6;">
                <div
                    class="md:w-[45%] h-80 md:h-auto overflow-hidden bg-charcoal/20 relative border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center p-8">
                    <!-- Teal Glow Accents -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/10 to-transparent"></div>
                    <img src="assets/oligio_x_product.png"
                        alt="Oligio X RF Skin Tightening"
                        class="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(20,184,166,0.3)] group-hover:scale-105 transition-transform duration-700">
                </div>
                <div class="p-10 md:p-16 flex flex-col justify-center md:w-[55%] relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-transparent via-[#14b8a6]/5 to-transparent pointer-events-none"></div>
                    <span
                        class="inline-block text-[10px] tracking-[0.4em] text-[#14b8a6] uppercase font-bold mb-4 z-10">LIFTING & TIGHTENING</span>
                    <h3 class="heading-wide text-3xl text-white mb-4 tracking-wider z-10">OLIGIO X RF TIGHTENING</h3>
                    <div class="flex items-baseline gap-4 mb-6 z-10">
                        <span class="font-heading text-4xl text-[#14b8a6]">$990</span>
                        <span class="text-white/40 line-through text-lg font-body">$1,500 Value</span>
                    </div>
                    <p class="font-body text-white/70 text-sm leading-relaxed mb-8 z-10">
                        Experience the gold standard in non-invasive lifting. Oligio X uses advanced RF energy to stimulate collagen and tighten skin for a defined, youthful contour with minimal discomfort.
                    </p>
                    <div class="flex flex-wrap gap-4 mb-8 z-10">
                        <span class="badge-standard border-[#14b8a6]/30 text-[#14b8a6] bg-[#14b8a6]/10">600 Shots</span>
                        <span class="badge-standard border-[#14b8a6]/30 text-[#14b8a6] bg-[#14b8a6]/10">Full Face & Neck</span>
                    </div>

                    <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                        class="btn-primary w-max z-10">
                        Book Treatment
                    </a>
                </div>
            </div>

            <!-- Specials Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <!-- SkinPen Microneedling -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-100">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/korean-models/portrait_2_highres.png" alt="SkinPen Microneedling Package"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1 panel-fade-v">
                        <span class="text-[9px] tracking-[0.3em] text-taupe uppercase font-bold mb-4">3 Sessions Package</span>
                        <h3 class="heading-wide text-lg mb-4 text-near-black">SkinPen Microneedling</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-2xl font-extrabold text-near-black tracking-tight">$1199</span>
                        </div>
                        <p class="font-body text-[11px] text-taupe mb-4 font-bold">(2 SkinPen + 1 K-Aesthetic MTS)</p>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">True skin rejuvenation with a 1:1 customized plan. Combining medical-grade microneedling with Korean aesthetic MTS.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book Now</a>
                    </div>
                </div>

                <!-- Skin Regeneration Package -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-200">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/korean-models/portrait_3_highres.png" alt="Skin Regeneration Package"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1 panel-fade-v">
                        <span class="text-[9px] tracking-[0.3em] text-taupe uppercase font-bold mb-4">2 Sessions Package</span>
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Skin Regeneration</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-2xl font-extrabold text-near-black tracking-tight">$1299</span>
                        </div>
                        <p class="font-body text-[11px] text-taupe mb-4 font-bold">HA + ECM Skin Boosters</p>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Deep hydration and structural support. A synergistic blend of hyaluronic acid and extracellular matrix boosters.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book Now</a>
                    </div>
                </div>

                <!-- Total Brightening IV -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-300">
                    <div class="h-64 overflow-hidden bg-charcoal/5 relative">
                        <img src="assets/korean-models/portrait_4_highres.png"
                            alt="Total Brightening IV Package"
                            class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1 panel-fade-v">
                        <span class="text-[9px] tracking-[0.3em] text-taupe uppercase font-bold mb-4">3 Sessions Package</span>
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Total Brightening IV</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-2xl font-extrabold text-near-black tracking-tight">$209</span>
                        </div>
                        <p class="font-body text-[11px] text-taupe mb-4 font-bold">Glutathione Therapy</p>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Brightening and antioxidant support. Detoxify and illuminate your complexion from the inside out.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book Now</a>
                    </div>
                </div>
            </div>

            <div class="mt-16 text-center animate-on-scroll fade-up delay-100">
                <a href="https://suaglow.myaestheticrecord.com/online-booking/promotions" target="_blank"
                    class="inline-block border-b-2 border-taupe pb-2 text-xs uppercase tracking-[0.3em] font-bold hover:text-taupe transition-colors">View All Promotions</a>
            </div>
        </div>
    </section>
`;
