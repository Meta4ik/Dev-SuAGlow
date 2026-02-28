
// SuA Glow Footer Content
const FOOTER_HTML = `


<footer class="bg-near-black text-white py-20 px-10 border-t border-white/[0.05]">
    <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div class="col-span-1 md:col-span-2 flex flex-col h-full">
                <h4 class="heading-wide text-xs tracking-[0.3em] mb-6 opacity-40">Location</h4>
                <div class="w-full grow min-h-[200px] rounded-lg overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.2795693997314!2d-96.9324517!3d33.0227643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d14611a2aa39e01%3A0xd81ab189a5840191!2sSuA%20Glow!5e0!3m2!1sen!2sus!4v1772217097981!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div>
                <h4 class="heading-wide text-xs tracking-[0.3em] mb-6 opacity-40">Contact</h4>
                <ul class="space-y-4 text-sm font-body text-white/70">
                    <li class="flex items-start gap-3">
                        <i data-lucide="map-pin" class="w-4 h-4 text-taupe shrink-0 mt-1"></i>
                        <a href="https://www.google.com/maps/place/SuA+Glow/@33.0227643,-96.9350266,17z/data=!3m1!4b1!4m6!3m5!1s0x8d14611a2aa39e01:0xd81ab189a5840191!8m2!3d33.0227643!4d-96.9324517!16s%2Fg%2F11mlsqzn2f?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="hover:text-taupe transition-colors">4116 State Highway 121, Suite 120, Office O<br>Carrollton, TX 75010</a>
                    </li>
                    <li class="flex items-center gap-3">
                        <i data-lucide="phone" class="w-4 h-4 text-taupe shrink-0"></i>
                        <a href="tel:972-665-8737" class="hover:text-taupe transition-colors">972-665-8737</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="heading-wide text-xs tracking-[0.3em] mb-6 opacity-40">Connect</h4>
                <ul class="space-y-4 text-sm font-body text-white/70">
                    <li><a href="https://www.instagram.com/suaglowkbeauty" target="_blank" class="hover:text-taupe transition-colors flex items-center gap-2">
                        <i data-lucide="instagram" class="w-4 h-4 text-taupe"></i> Instagram</a>
                    </li>
                    <li><a href="https://www.facebook.com/suaglowkbeauty" target="_blank" class="hover:text-taupe transition-colors flex items-center gap-2">
                        <i data-lucide="facebook" class="w-4 h-4 text-taupe"></i> Facebook</a>
                    </li>
                    <li><a href="https://www.tiktok.com/@suaglowkbeauty" target="_blank" class="hover:text-taupe transition-colors flex items-center gap-2">
                        <svg class="w-4 h-4 text-taupe fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2A74.62,74.62,0,1,0,252.27,350V3.06h87.9c4.27,24,20.44,61.73,107.83,67Z"/></svg>
                        TikTok</a>
                    </li>
                    <li><a href="https://suaglow.myaestheticrecord.com/online-booking/" target="_blank" class="hover:text-taupe transition-colors flex items-center gap-2">
                        <i data-lucide="calendar" class="w-4 h-4 text-taupe"></i> Online Booking</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="heading-wide text-xs tracking-[0.3em] mb-6 opacity-40">Policies</h4>
                <ul class="space-y-4 text-sm font-body text-white/70">
                    <li><a href="privacy-policy.html" class="hover:text-taupe transition-colors">Privacy Policy</a></li>
                    <li><a href="hippa-policy.html" class="hover:text-taupe transition-colors">HIPPA Policy</a></li>
                    <li><a href="accessibility-statement.html" class="hover:text-taupe transition-colors">Accessibility Statement</a></li>
                    <li><a href="cookie-notices-choices.html" class="hover:text-taupe transition-colors">Cookie Notices & Choices</a></li>
                </ul>
            </div>
        </div>
        
        <div class="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
            <p>© 2026 SuA K Glow. Texas Certified Master Injections.</p>
            <div class="flex flex-wrap justify-center gap-4 md:gap-8">
                <a href="privacy-policy.html" class="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="hippa-policy.html" class="hover:opacity-100 transition-opacity">HIPPA</a>
                <a href="accessibility-statement.html" class="hover:opacity-100 transition-opacity">Accessibility</a>
                <a href="cookie-notices-choices.html" class="hover:opacity-100 transition-opacity">Cookies</a>
            </div>
        </div>
    </div>
</footer>

<!-- Floating Financing Button -->
<a id="floating-finance-btn" href="financing.html" class="opacity-0 translate-y-10 pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-8 z-[90] bg-[#A8977B] hover:bg-[#8F857B] transition-all duration-300 text-white pl-4 pr-5 py-3 rounded-[30px] shadow-2xl flex items-center gap-3 group hover:-translate-y-1 w-max max-w-[90vw]">
    <div class="bg-white rounded-full flex items-center justify-center shrink-0 w-8 h-8 text-[#A8977B] group-hover:text-[#8F857B] transition-colors">
        <i data-lucide="percent" class="w-4 h-4 stroke-[3]"></i>
    </div>
    <div class="text-left font-body">
        <p class="font-bold text-sm md:text-base leading-[1.2] font-heading tracking-wide">Pay over time</p>
        <p class="text-[11px] md:text-xs opacity-90 mt-0.5 whitespace-nowrap">No hard credit checks • 0% APR options</p>
    </div>
</a>
`;
