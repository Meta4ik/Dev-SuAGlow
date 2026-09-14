/**
 * SuA Glow Typography A/B Testing Widget (Montserrat vs. Cormorant Garamond)
 * Allows real-time switching between Montserrat and Cormorant Garamond heading fonts.
 * Persists user preference in localStorage across all pages.
 */
(function () {
    // 1. Instant execution to prevent font flicker before DOM loads
    const STORAGE_KEY = 'suaglow_heading_font';
    let savedFont = localStorage.getItem(STORAGE_KEY) || 'montserrat';
    // Graceful migration if previously set to urbanist
    if (savedFont === 'urbanist') {
        savedFont = 'cormorant';
        localStorage.setItem(STORAGE_KEY, 'cormorant');
    }

    if (savedFont === 'cormorant') {
        document.documentElement.classList.add('font-cormorant');
    } else {
        document.documentElement.classList.remove('font-cormorant');
    }

    // Ensure Google Font preconnect and Cormorant Garamond font stylesheet are loaded
    function ensureFontLoaded() {
        if (!document.getElementById('cormorant-font-link')) {
            const preconnect1 = document.createElement('link');
            preconnect1.rel = 'preconnect';
            preconnect1.href = 'https://fonts.googleapis.com';
            document.head.appendChild(preconnect1);

            const preconnect2 = document.createElement('link');
            preconnect2.rel = 'preconnect';
            preconnect2.href = 'https://fonts.gstatic.com';
            preconnect2.crossOrigin = 'anonymous';
            document.head.appendChild(preconnect2);

            const fontLink = document.createElement('link');
            fontLink.id = 'cormorant-font-link';
            fontLink.rel = 'stylesheet';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap';
            document.head.appendChild(fontLink);
        }
    }

    // 2. Mount floating A/B test widget once DOM is ready
    function initWidget() {
        if (document.getElementById('font-ab-widget-container')) return;

        ensureFontLoaded();

        const currentFont = localStorage.getItem(STORAGE_KEY) === 'cormorant' ? 'cormorant' : 'montserrat';

        const widget = document.createElement('div');
        widget.id = 'font-ab-widget-container';
        widget.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 sm:bottom-6 z-[99999] font-body text-xs select-none transition-all duration-300';
        widget.setAttribute('role', 'region');
        widget.setAttribute('aria-label', 'Typography A/B Testing Control');

        widget.innerHTML = `
            <!-- Expanded Pill Control -->
            <div id="font-ab-card" class="bg-[#121518]/95 backdrop-blur-xl border border-warm-gold/45 rounded-full p-1.5 sm:p-2 shadow-[0_12px_35px_rgba(0,0,0,0.65),0_0_25px_rgba(170,152,124,0.25)] flex items-center gap-2 transition-all duration-300">
                <!-- A/B Badge & Icon -->
                <div class="flex items-center gap-1.5 pl-2.5 pr-1 py-1">
                    <span class="w-2 h-2 rounded-full ${currentFont === 'cormorant' ? 'bg-[#AA987C]' : 'bg-white/40'} animate-pulse"></span>
                    <span class="text-[9px] font-heading font-black tracking-widest text-warm-gold uppercase whitespace-nowrap">A/B FONT</span>
                </div>

                <!-- Segmented Toggle Buttons -->
                <div class="flex items-center bg-black/40 rounded-full p-1 border border-white/10">
                    <button id="btn-font-montserrat" type="button" 
                        class="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${currentFont === 'montserrat' ? 'bg-warm-gold text-near-black shadow-md font-bold' : 'text-white/60 hover:text-white'}">
                        Montserrat
                    </button>
                    <button id="btn-font-cormorant" type="button" 
                        class="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${currentFont === 'cormorant' ? 'bg-warm-gold text-near-black shadow-md font-bold' : 'text-white/60 hover:text-white'}">
                        Cormorant Garamond
                    </button>
                </div>

                <!-- Minimize Toggle -->
                <button id="btn-font-minimize" type="button" title="Minimize Font Toggle (Press Alt+F to toggle)" aria-label="Minimize"
                    class="w-6 h-6 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors ml-0.5 mr-1">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <!-- Minimized Trigger Button (Hidden by default) -->
            <button id="btn-font-minimized-trigger" type="button" title="Open Font A/B Test (Press Alt+F to toggle)" aria-label="Open Font A/B Test"
                class="hidden w-12 h-12 rounded-full bg-[#121518]/95 backdrop-blur-xl border-2 border-warm-gold/60 text-warm-gold shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(170,152,124,0.3)] hover:scale-105 active:scale-95 flex flex-col items-center justify-center transition-all duration-300">
                <span class="text-xs font-heading font-black tracking-tight leading-none text-white">Aa</span>
                <span class="text-[7px] font-bold tracking-widest uppercase text-warm-gold mt-0.5 leading-none" id="mini-font-indicator">${currentFont === 'cormorant' ? 'COR' : 'MON'}</span>
            </button>

            <!-- Floating Feedback Toast -->
            <div id="font-ab-toast" class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#14181C]/95 border border-warm-gold/40 text-warm-gold text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg opacity-0 transition-opacity duration-300">
                Font Switched
            </div>
        `;

        document.body.appendChild(widget);

        // Elements
        const card = document.getElementById('font-ab-card');
        const miniBtn = document.getElementById('btn-font-minimized-trigger');
        const btnMont = document.getElementById('btn-font-montserrat');
        const btnCor = document.getElementById('btn-font-cormorant');
        const miniIndicator = document.getElementById('mini-font-indicator');
        const toast = document.getElementById('font-ab-toast');
        const minimizeBtn = document.getElementById('btn-font-minimize');

        function showToast(text) {
            toast.textContent = text;
            toast.classList.remove('opacity-0');
            toast.classList.add('opacity-100');
            setTimeout(() => {
                toast.classList.remove('opacity-100');
                toast.classList.add('opacity-0');
            }, 1800);
        }

        function setFont(font) {
            if (font === 'cormorant') {
                document.documentElement.classList.add('font-cormorant');
                localStorage.setItem(STORAGE_KEY, 'cormorant');

                btnCor.className = 'px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap bg-warm-gold text-near-black shadow-md font-bold';
                btnMont.className = 'px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap text-white/60 hover:text-white';
                miniIndicator.textContent = 'COR';
                showToast('Headings: Cormorant Garamond');
            } else {
                document.documentElement.classList.remove('font-cormorant');
                localStorage.setItem(STORAGE_KEY, 'montserrat');

                btnMont.className = 'px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap bg-warm-gold text-near-black shadow-md font-bold';
                btnCor.className = 'px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap text-white/60 hover:text-white';
                miniIndicator.textContent = 'MON';
                showToast('Headings: Montserrat');
            }
        }

        btnMont.addEventListener('click', () => setFont('montserrat'));
        btnCor.addEventListener('click', () => setFont('cormorant'));

        // Minimize / Expand
        minimizeBtn.addEventListener('click', () => {
            card.classList.add('hidden');
            miniBtn.classList.remove('hidden');
        });

        miniBtn.addEventListener('click', () => {
            miniBtn.classList.add('hidden');
            card.classList.remove('hidden');
        });

        // Keyboard Shortcut: Alt + F (Option + F) toggles font instantly
        window.addEventListener('keydown', (e) => {
            if (e.altKey && (e.key === 'f' || e.key === 'F')) {
                e.preventDefault();
                const current = localStorage.getItem(STORAGE_KEY) === 'cormorant' ? 'cormorant' : 'montserrat';
                setFont(current === 'cormorant' ? 'montserrat' : 'cormorant');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
