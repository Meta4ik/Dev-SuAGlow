/**
 * SuA Glow Typography A/B Testing Widget — DISABLED
 * Cleans up any leftover localStorage keys or class overrides.
 */
(function () {
    try {
        localStorage.removeItem('suaglow_heading_font');
    } catch (e) {}
    document.documentElement.classList.remove('font-urbanist', 'font-cormorant', 'font-jost', 'font-instrument');
    const existing = document.getElementById('font-ab-widget-container');
    if (existing) existing.remove();
})();
