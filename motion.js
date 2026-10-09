/**
 * SuA K-Glow Motion & Animation Architecture Library (motion.js)
 * High-performance vanilla wrapper for GSAP, Lenis, and React Bits UI patterns.
 * 
 * Works out-of-the-box with any page in the SuAGlow site.
 * Compatible with IDEs, Codex, and AI assistants.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SuAMotion = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  const SuAMotion = {
    lenis: null,
    isLenisActive: false,

    /**
     * Initializes Lenis smooth scrolling with GSAP ticker synchronization
     * @param {Object} options - { duration: 1.2, smoothWheel: true }
     */
    initSmoothScroll: function (options = {}) {
      if (typeof Lenis === 'undefined') {
        console.warn('[SuAMotion] Lenis library not found on window. Skipping smooth scroll.');
        return null;
      }

      if (this.lenis) {
        this.lenis.destroy();
      }

      const duration = options.duration || 1.2;
      const easing = options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)));

      this.lenis = new Lenis({
        duration: duration,
        easing: easing,
        orientation: 'vertical',
        smoothWheel: options.smoothWheel !== undefined ? options.smoothWheel : true,
        wheelMultiplier: options.wheelMultiplier || 1.0,
        touchMultiplier: options.touchMultiplier || 1.5,
        autoRaf: false, // Unified with GSAP ticker
      });

      this.isLenisActive = true;

      // Pipe scroll updates into GSAP ScrollTrigger if present
      if (typeof ScrollTrigger !== 'undefined') {
        this.lenis.on('scroll', () => ScrollTrigger.update());
      }

      // Hook Lenis into GSAP ticker
      if (typeof gsap !== 'undefined') {
        gsap.ticker.add((time) => {
          if (this.lenis && this.isLenisActive) {
            this.lenis.raf(time * 1000);
          }
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        const raf = (time) => {
          if (this.lenis && this.isLenisActive) {
            this.lenis.raf(time);
            requestAnimationFrame(raf);
          }
        };
        requestAnimationFrame(raf);
      }

      return this.lenis;
    },

    /**
     * React Bits: Radial Cursor Spotlight Card
     * @param {string} selector - Defaults to '.spotlight-card'
     */
    initSpotlightCards: function (selector = '.spotlight-card') {
      const cards = document.querySelectorAll(selector);
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    },

    /**
     * React Bits: 3D Perspective Tilt Card (TiltedCard)
     * @param {string} selector - Defaults to '.tilt-card'
     */
    initTiltedCards: function (selector = '.tilt-card') {
      const cards = document.querySelectorAll(selector);
      cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -12;
          const rotateY = ((x - centerX) / centerX) * 12;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) scale3d(1.02, 1.02, 1.02)`;
          card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
          card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
      });
    },

    /**
     * React Bits: Magnetic Button
     * @param {string} selector - Defaults to '[data-magnetic]' or '#magneticBtn'
     */
    initMagneticButtons: function (selector = '[data-magnetic], #magneticBtn') {
      const buttons = document.querySelectorAll(selector);
      buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = `translate(0px, 0px)`;
        });
      });
    },

    /**
     * React Bits: Split Text Character Hover Stagger
     * @param {string} selector - Defaults to '.split-text'
     */
    initSplitText: function (selector = '.split-text') {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const text = el.innerText;
        el.innerHTML = text
          .split('')
          .map((char) => `<span class="inline-block transition-transform duration-200">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        const parent = el.closest('.split-hover') || el;
        parent.addEventListener('mouseenter', () => {
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(
              el.querySelectorAll('span'),
              { y: 8, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.3, stagger: 0.02, ease: 'power2.out' }
            );
          }
        });
      });
    },

    /**
     * React Bits: Animated Rolling Numeric Counters on Scroll Entry
     * @param {string} selector - Defaults to '.counter-number'
     */
    initCounters: function (selector = '.counter-number') {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      const counters = document.querySelectorAll(selector);
      if (!counters.length) return;

      const container = counters[0].closest('#statsSection') || counters[0].parentElement;

      ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          counters.forEach((counter) => {
            const targetVal = parseFloat(counter.getAttribute('data-target') || counter.textContent);
            const isDecimal = targetVal % 1 !== 0;
            gsap.to(counter, {
              innerHTML: targetVal,
              duration: 2.2,
              ease: 'power2.out',
              snap: isDecimal ? { innerHTML: 0.1 } : { innerHTML: 1 },
              onUpdate: function () {
                if (isDecimal) {
                  counter.innerHTML = parseFloat(counter.innerHTML).toFixed(1);
                } else {
                  counter.innerHTML = Math.round(counter.innerHTML).toLocaleString();
                }
              },
            });
          });
        },
      });
    },

    /**
     * GSAP / Interactive Before & After Split-Screen Comparison
     * @param {string} containerSelector - Defaults to '#baSlider'
     */
    initBeforeAfter: function (containerSelector = '#baSlider') {
      const slider = document.querySelector(containerSelector);
      if (!slider) return;

      const beforeLayer = slider.querySelector('.ba-before-image') || document.getElementById('baBeforeLayer');
      const handle = slider.querySelector('#baHandle');
      const posText = document.getElementById('baPositionText');
      let isDragging = false;

      function updateSplit(clientX) {
        const rect = slider.getBoundingClientRect();
        let posX = clientX - rect.left;
        posX = Math.max(0, Math.min(rect.width, posX));
        const pct = (posX / rect.width) * 100;

        if (beforeLayer) beforeLayer.style.setProperty('--split-pos', `${pct}%`);
        if (handle) handle.style.left = `${pct}%`;
        if (posText) posText.textContent = `${Math.round(pct)}%`;
      }

      slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSplit(e.clientX);
      });
      window.addEventListener('mouseup', () => { isDragging = false; });
      slider.addEventListener('mousemove', (e) => {
        if (isDragging) updateSplit(e.clientX);
      });

      // Touch events
      slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSplit(e.touches[0].clientX);
      });
      window.addEventListener('touchend', () => { isDragging = false; });
      slider.addEventListener('touchmove', (e) => {
        if (isDragging) updateSplit(e.touches[0].clientX);
      });
    },

    /**
     * GSAP Scroll-Driven Read-Along Text Highlighter
     * @param {string} paragraphSelector - Defaults to '#manifestoParagraph'
     */
    initReadAlong: function (paragraphSelector = '#manifestoParagraph') {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      const manifestoEl = document.querySelector(paragraphSelector);
      if (!manifestoEl) return;

      const words = manifestoEl.innerText.split(/\s+/);
      manifestoEl.innerHTML = words
        .map((w) => `<span class="read-word inline-block opacity-20 transition-colors duration-200">${w}&nbsp;</span>`)
        .join('');

      const wordSpans = manifestoEl.querySelectorAll('.read-word');
      const container = manifestoEl.closest('#readAlongContainer') || manifestoEl;

      gsap.to(wordSpans, {
        opacity: 1,
        color: '#e5b869',
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 65%',
          end: 'bottom 45%',
          scrub: 0.5,
        },
      });
    },

    /**
     * GSAP Horizontal Scroll Track
     * @param {string} sectionSelector - Defaults to '#horizontalSection'
     * @param {string} trackSelector - Defaults to '#horizontalTrack'
     */
    initHorizontalTrack: function (sectionSelector = '#horizontalSection', trackSelector = '#horizontalTrack') {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      const track = document.querySelector(trackSelector);
      const section = document.querySelector(sectionSelector);
      if (!track || !section) return;

      const totalWidth = track.scrollWidth;
      const scrollDistance = totalWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -(scrollDistance + 80),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 90px',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },

    /**
     * Master auto-initialization of all elements present in the DOM
     */
    initAll: function () {
      this.initSpotlightCards();
      this.initTiltedCards();
      this.initMagneticButtons();
      this.initSplitText();
      this.initCounters();
      this.initBeforeAfter();
      this.initReadAlong();
      this.initHorizontalTrack();
    },
  };

  // Auto-init on DOMContentLoaded if not disabled
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      // Auto-run micro-interactions if classes exist
      SuAMotion.initAll();
    });
  }

  return SuAMotion;
});
