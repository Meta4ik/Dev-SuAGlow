const SOPHIA_HTML = `
    <!-- Sophia Yang Bio -->
    <section id="sophia" data-nav-theme="dark" class="py-32 px-10 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
            <div class="lg:w-1/2 animate-on-scroll fade-right">
                <div class="aspect-[4/5] bg-off-white relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src="OurTeam_no_bg.webp"
                        class="w-full h-full object-cover object-top"
                        alt="Sophia Yang Portrait">
                    <div class="absolute bottom-10 right-10 bg-near-black text-white p-12 hidden xl:block shadow-2xl">
                        <p class="heading-wide text-xl mb-3 !font-900">Sophia Yang, PA-C</p>
                        <p class="text-xs uppercase tracking-[0.5em] opacity-40">Certified in Seoul</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 animate-on-scroll fade-left">
                <h2 class="heading-wide text-4xl mb-6 leading-[1.15]">Meet Sophia Yang, PA-C.</h2>
                <h3 class="font-body text-xl text-warm-gold italic mb-10">Physician Assistant – Certified. Your skin’s new favorite architect.</h3>
                <div class="space-y-6 font-light text-base leading-relaxed opacity-70 mb-12">
                    <p>
                        Sophia Yang, PA-C brings a Seoul-trained approach to aesthetics to Dallas—where precision, proportion, and a skin-first philosophy guide every treatment. She applies advanced techniques with a focus on natural-looking, balanced results— never overdone. Each treatment is thoughtfully tailored to support hydration, skin texture, and overall appearance, with an emphasis on long-term skin quality.
                    </p>
                    <p>
                        Many patients notice a smoother, more refined, glass-skin look over time. At SuA Glow, Sophia blends modern Korean aesthetic principles with clinical expertise—focusing on hydration, harmony, and subtle artistry. In Seoul, good skin is intentional—never rushed, never overdone.
                    </p>
                </div>
                
                <!-- Medical Oversight Card (SuA Glow Style Guide) -->
                <div class="relative bg-off-white p-6 sm:p-8 md:p-9 rounded-[2rem] border border-black/5 shadow-soft overflow-hidden">
                    <!-- Background ambient warm glow accent -->
                    <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-[#AA987C]/5 rounded-full blur-2xl pointer-events-none"></div>

                    <div class="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-7">
                        <div class="flex flex-col items-center gap-3 shrink-0 mx-auto sm:mx-0">
                            <div class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-black/5 shadow-md bg-white">
                                <img src="assets/dr-adam-yang.png" alt="Dr. Adam Yang, MD - Medical Director" class="w-full h-full object-cover object-top">
                            </div>
                            <!-- Texas Compliant Circular Seal -->
                            <div class="relative group flex items-center justify-center text-[#AA987C] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 cursor-default pointer-events-auto" title="Texas Compliant Medical Practice">
                                <div class="absolute inset-0 bg-[#AA987C]/5 rounded-full border border-[#AA987C]/25 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#AA987C]/10"></div>
                                <svg viewBox="0 0 100 100" class="w-full h-full relative z-10 transition-transform duration-700 group-hover:rotate-45">
                                    <defs>
                                        <path id="txCirclePathSophia" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                                    </defs>
                                    <circle cx="50" cy="50" r="47.5" fill="none" stroke="#AA987C" stroke-width="0.75" opacity="0.35" />
                                    <circle cx="50" cy="50" r="44.5" fill="none" stroke="#AA987C" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.6" />
                                    <text font-family="'Montserrat', 'Poppins', sans-serif" font-size="8.8" font-weight="800" fill="#AA987C" letter-spacing="0.08em" class="uppercase">
                                        <textPath href="#txCirclePathSophia" xlink:href="#txCirclePathSophia" startOffset="0%">
                                            TEXAS COMPLIANT • CLINICAL OVERSIGHT •
                                        </textPath>
                                    </text>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                    <svg viewBox="0 0 200 200" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#AA987C]" fill="currentColor">
                                        <path d="M195.5,103.2v5.9l-4.6,20.3-39.2,23.9c-5.3,4.6-9.2,11.7-14,17.4l2.2,20.5c0,.8-.6,2.9-1.3,3.3s-3,.6-3.8.2l-23.9-9.8c-2.6-6.3-4-12.3-7-18.2s-8.1-8.8-11.2-13.7-4.6-10.5-8-15.2-7.3-7.7-11.2-9.5-12-.2-17,.2l-3.8,8.5c-.6,1.3-2.7,3.4-3.9,3.7s-4.4-1.3-6-1.8c-9.8-3.4-15.9-9.6-18.7-19.6s-5.4-8-8-10.4l-14-13.2c-2-1.9-4.2-3.6-6.3-4.6v-2c.4-.1,2.3-.6,3-.6l51.5-.3V5.1c.1,0,46.7,0,46.7,0l.3,36c3.6,2.7,8,3.4,11.7,4.8,4.7,1.8,8.5,4,13.9,3.3s4.1,2,5.5,3.5c22.4-2.7,18.7,6.9,30.4,3.2,15.2-4.8,10.7-3.4,29.3,3.9,1.4,22.1-3.9,24.6,7.7,43.3Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <span class="inline-block px-3.5 py-1 bg-[#AA987C]/10 text-[#AA987C] border border-[#AA987C]/20 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] rounded-full mb-3">
                                Medical Oversight
                            </span>
                            <h4 class="font-heading font-medium text-base sm:text-lg text-near-black leading-snug">
                                Dr. Adam Yang, MD
                            </h4>
                            <p class="text-[10px] sm:text-[11px] uppercase tracking-wider text-taupe font-semibold mb-3">
                                Medical Director &amp; Supervising Physician
                            </p>
                            <p class="text-xs sm:text-sm font-light text-charcoal/80 leading-relaxed [text-wrap:pretty]">
                                Byungwoo Yang, M.D. (also known as Dr. Adam Yang) serves as the Medical Director of SuA Glow, providing clinical oversight and supervision in accordance with Texas regulations. Working in collaboration with the clinical team, he supports a thoughtful, safety-first approach—ensuring each treatment is delivered with precision, care, and consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
