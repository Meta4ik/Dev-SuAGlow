
// SuA Glow "In The News" Component
const NEWS_HTML = `
<!-- News Highlights -->
<section id="news" data-nav-theme="dark" class="py-32 px-10 bg-[#F6F7F8]">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-24 animate-on-scroll fade-up">
            <span class="inline-block text-[10px] tracking-[0.4em] text-taupe uppercase font-bold mb-6 italic">Global Regenerative Health</span>
            <h2 class="heading-wide text-4xl md:text-5xl text-near-black mb-8 uppercase tracking-[0.15em]">In The News</h2>
            <div class="w-24 h-[1px] bg-taupe/30 mx-auto mb-10"></div>
            <p class="font-body text-charcoal/60 max-w-2xl mx-auto leading-relaxed text-lg">The global movement for skin longevity and regenerative beauty—as featured in world-leading publications.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- WSJ Card -->
            <div class="news-card group bg-white border border-black/5 overflow-hidden animate-on-scroll fade-up">
                <div class="h-64 overflow-hidden bg-charcoal/5">
                    <img src="https://images.wsj.net/im-85591170?width=700&size=2.019&pixel_ratio=2" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                        alt="The Wall Street Journal">
                </div>
                <div class="p-10">
                    <p class="heading-wide text-xs text-[#AA987C] mb-6 opacity-60">The Wall Street Journal</p>
                    <h4 class="text-base font-bold leading-snug mb-10 opacity-80 italic">"Women Are Flying to South Korea in Droves for This Painful Beauty Injectable."</h4>
                    <a href="https://www.wsj.com/style/beauty/south-korea-beauty-anti-aging-treatment-rejuran-14b422c8" 
                        target="_blank"
                        class="text-xs uppercase font-bold tracking-[0.25em] border-b border-black pb-2 hover:text-[#AA987C] hover:border-[#AA987C] transition-all">Full Article</a>
                </div>
            </div>
            
            <!-- Marie Claire Card -->
            <div class="news-card group bg-white border border-black/5 overflow-hidden animate-on-scroll fade-up delay-100">
                <div class="h-64 overflow-hidden bg-charcoal/5">
                    <img src="https://cdn.mos.cms.futurecdn.net/9hRgCkiP9xDQ49HknVJGsh-1536-80.jpg.webp" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                        alt="Marie Claire">
                </div>
                <div class="p-10">
                    <p class="heading-wide text-xs text-[#AA987C] mb-6 opacity-60">Marie Claire</p>
                    <h4 class="text-base font-bold leading-snug mb-10 opacity-80 italic">"I Flew to Seoul to Try Salmon Sperm Injections for My Skin. 700 shots later, results speak for themselves."</h4>
                    <a href="https://www.marieclaire.com/rejuran-salmon-sperm-injections-korean-skincare-review/" 
                        target="_blank"
                        class="text-xs uppercase font-bold tracking-[0.25em] border-b border-black pb-2 hover:text-[#AA987C] hover:border-[#AA987C] transition-all">Full Article</a>
                </div>
            </div>
            
            <!-- Elle Australia Card -->
            <div class="news-card group bg-white border border-black/5 overflow-hidden animate-on-scroll fade-up delay-200">
                <div class="h-64 overflow-hidden bg-charcoal/5">
                    <img src="https://api.photon.aremedia.net.au/wp-content/uploads/sites/6/2024/10/Landscape-1920-x-1080-21.jpg?resize=1640%2C922" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                        alt="Elle Australia">
                </div>
                <div class="p-10">
                    <p class="heading-wide text-xs text-[#AA987C] mb-6 opacity-60">Elle Australia</p>
                    <h4 class="text-base font-bold leading-snug mb-10 opacity-80 italic">"These Transformative K-Beauty Treatments Have Finally Landed In Australia. Kim K is a fan."</h4>
                    <a href="https://www.elle.com.au/beauty/k-beauty-treatments-australia-28828" 
                        target="_blank"
                        class="text-xs uppercase font-bold tracking-[0.25em] border-b border-black pb-2 hover:text-[#AA987C] hover:border-[#AA987C] transition-all">Full Article</a>
                </div>
            </div>
        </div>
    </div>
</section>
`;
