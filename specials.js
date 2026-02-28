const SPECIALS_HTML = `
    <!-- Promotions / Signature Launch -->
    <section id="promotions" data-nav-theme="light" class="py-32 bg-off-white border-y border-charcoal/5 relative overflow-hidden">
        <div class="starburst-container animate-on-scroll !duration-[2000ms] delay-500"><div class="sb-3"></div></div>
        <div class="max-w-7xl mx-auto px-8 relative z-10">
            <div class="text-center mb-16 animate-on-scroll fade-up">
                <span
                    class="inline-block text-[10px] tracking-[0.4em] text-taupe uppercase font-bold mb-6 italic">Limited
                    Time</span>
                <h2 class="heading-wide text-4xl md:text-5xl text-near-black mb-6 uppercase tracking-[0.15em]">Special
                    Promotions</h2>
                <div class="w-24 h-[1px] bg-taupe/30 mx-auto mt-8"></div>
            </div>

            <!-- Signature Launch Offer - Full Width -->
            <div
                class="product-card group bg-white shadow-soft rounded-[20px] overflow-hidden mb-12 flex flex-col md:flex-row animate-on-scroll fade-up delay-100">
                <div
                    class="md:w-[45%] h-80 md:h-auto overflow-hidden bg-charcoal/5 relative border-b md:border-b-0 md:border-r border-charcoal/5">
                    <img src="assets/specials/SuA Launch Special - LAUNCH OFFER.webp"
                        alt="Signature Launch Offer Lunar Glow"
                        class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
                </div>
                <div class="p-10 md:p-16 flex flex-col justify-center md:w-[55%]">
                    <span
                        class="inline-block text-[10px] tracking-[0.4em] text-taupe uppercase font-bold mb-4 italic">February
                        - March | Only 50 Spots</span>
                    <h3 class="heading-wide text-3xl md:text-4xl text-near-black mb-2 uppercase">Signature Launch Offer
                    </h3>
                    <h4 class="heading-wide text-xl text-taupe tracking-[0.1em] mb-6">LUNAR GLOW</h4>

                    <div class="mb-8 flex items-end gap-3">
                        <span class="font-body text-3xl font-bold text-near-black">$799</span>
                        <span class="text-xs font-body text-charcoal/40 italic line-through mb-1">Regular $1400</span>
                    </div>

                    <p class="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                        The Lunar Glow is our limited-edition K-Beauty launch offer created to celebrate our grand
                        opening!
                        Choose from Rejuran® Healer, Juvelook® Skin, Juvelook® Volume, or HILO WAVE®.
                    </p>

                    <div
                        class="space-y-4 font-body text-sm text-charcoal/80 bg-off-white p-6 rounded-xl border border-charcoal/5 mb-10">
                        <div class="flex items-start gap-3">
                            <i data-lucide="check" class="w-4 h-4 text-taupe mt-0.5 shrink-0"></i>
                            <p><span class="font-bold text-near-black">Complimentary:</span> 10 units of Tox</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <i data-lucide="check" class="w-4 h-4 text-taupe mt-0.5 shrink-0"></i>
                            <p><span class="font-bold text-near-black">Complimentary:</span> Choose from Rejuran Lip or
                                Byryzyn Neck Wrinkle Eraser</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <i data-lucide="ticket" class="w-4 h-4 text-taupe mt-0.5 shrink-0"></i>
                            <p><span class="font-bold text-near-black">Lucky Draw:</span> Entered to win a Full Face
                                Rejuran® Healer session!</p>
                        </div>
                    </div>

                    <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                        class="inline-flex justify-center bg-near-black text-white px-10 py-4 rounded-[40px] font-body text-xs tracking-[0.2em] font-bold uppercase hover:bg-taupe transition-colors shadow-lg w-max">
                        Book Lunar Glow
                    </a>
                </div>
            </div>

            <!-- Specials Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <!-- 1: Ultrasound -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-100">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/specials/SuA Launch Special - ULTRASOUND.webp" alt="LDM Triple Ultrasound"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1">
                        <h3 class="heading-wide text-lg mb-4 text-near-black">LDM Triple Ultrasound</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-xl font-bold text-near-black">$99</span>
                            <span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular
                                $249</span>
                        </div>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Calms inflammation,
                            drives deep hydration, and finishes with a subtle lift—no heat, no needles, no downtime.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book
                            Now</a>
                    </div>
                </div>

                <!-- 2: Lip PN -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-200">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/specials/SuA Launch Special - LIP PN.webp" alt="Rejuran Lip PN"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1">
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Rejuran® Lip PN Reset</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-xl font-bold text-near-black">$299</span>
                            <span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular
                                $400</span>
                        </div>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Your lips don't need
                            volume—they need repair. Powered by PN, Rejuran® restores hydration and strengthens from
                            within.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book
                            Now</a>
                    </div>
                </div>

                <!-- 3: Neck Refine -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-300">
                    <div class="h-64 overflow-hidden bg-charcoal/5 relative">
                        <img src="assets/specials/SuA Launch Special - Neck refine.webp"
                            alt="Byryzn HA Skinbooster Neck"
                            class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1">
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Byryzn™ HA Neck Refine</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-xl font-bold text-near-black">$299</span>
                            <span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular
                                $400</span>
                        </div>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Neck wrinkle eraser.
                            Turn back the clock—without surgery or stiffness. Smooth the lines and restore hydration.
                        </p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book
                            Now</a>
                    </div>
                </div>

                <!-- 4: Age-Smart -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-100">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/specials/SuA Launch Special - age-smart.webp" alt="Neurotoxin Age-Smart"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1">
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Neurotoxin Age-Smart</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-xl font-bold text-near-black">$399</span>
                            <span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular
                                $500</span>
                        </div>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Designed for eyes that
                            have changed with time, not trends. Gently lifts sagging lids for a natural, rested look.
                        </p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book
                            Now</a>
                    </div>
                </div>

                <!-- 5: Skin Reset -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-200">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/specials/SuA Launch Special - skin Reset.webp" alt="Skintox Skin Reset"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1">
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Skintox Skin Reset</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-xl font-bold text-near-black">$499</span>
                            <span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular
                                $600</span>
                        </div>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">Seoul Edition. No
                            freezing. No overdoing. Just better skin. Fine lines relax. Pores refine. Glow shows up.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book
                            Now</a>
                    </div>
                </div>

                <!-- 6: Shoulder Edit -->
                <div
                    class="product-card group bg-white shadow-soft rounded-[20px] flex flex-col overflow-hidden animate-on-scroll fade-up delay-300">
                    <div class="h-64 overflow-hidden bg-charcoal/5">
                        <img src="assets/specials/SuA Launch Special - shoulder edit.webp" alt="Traptox Shoulder Edit"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="p-10 text-center flex flex-col flex-1">
                        <h3 class="heading-wide text-lg mb-4 text-near-black">Traptox Shoulder Edit</h3>
                        <div class="mb-6 flex justify-center items-end gap-2">
                            <span class="font-body text-xl font-bold text-near-black">$599</span>
                            <span class="text-[10px] font-body text-charcoal/40 italic line-through mb-0.5">Regular
                                $900</span>
                        </div>
                        <p class="font-body text-sm text-charcoal/60 mb-8 leading-relaxed flex-1">This K-Beauty favorite
                            relaxes bulky trap muscles to refine your silhouette and soften tension in the face and
                            neck.</p>
                        <a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank"
                            class="text-[10px] uppercase tracking-[0.3em] font-bold text-taupe border-b border-taupe/20 pb-1 hover:border-taupe transition-all w-max mx-auto">Book
                            Now</a>
                    </div>
                </div>
            </div>

            <div class="mt-16 text-center animate-on-scroll fade-up delay-100">
                <a href="https://suaglow.myaestheticrecord.com/online-booking/promotions" target="_blank"
                    class="inline-block border-b-2 border-taupe pb-2 text-xs uppercase tracking-[0.3em] font-bold hover:text-taupe transition-colors">View
                    All Promotions</a>
            </div>
        </div>
    </section>
`;
