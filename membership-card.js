/**
 * SuA Glow — Holographic Tech Card 3D Tilt Engine
 * Vanilla JS, hardware-accelerated, zero dependencies.
 * Enables 3D perspective rotation, iridescent diffraction tracking,
 * touch interaction, card flip, and dynamic embed injection.
 */

(function () {
  'use strict';

  // Card HTML Template for dynamic inclusion on any page
  const MEMBERSHIP_CARD_HTML = `
  <div class="holo-card-perspective holo-theme-gold" data-holo-container>
    <div class="holo-card-shadow"></div>
    <div class="holo-card-wrapper" data-holo-card>
      <div class="holo-card-inner" data-holo-inner>
        
        <!-- ================= CARD FRONT ================= -->
        <div class="holo-card-face holo-card-front">
          <!-- Layer 1: Dark Obsidian Substrate -->
          <div class="holo-card-substrate"></div>

          <!-- Layer 2: S Monogram Repeating Pattern Overlay -->
          <div class="holo-card-monogram"></div>

          <!-- Layer 3: Model Background Image -->
          <div class="holo-card-model">
            <img src="assets/vip_korean_model_glass_skin.jpg" alt="SuA Glow Korean Glass Skin VIP Member" loading="eager">
          </div>

          <!-- Layer 4: Cyber Circuit & Micro-Grid Overlay -->
          <div class="holo-card-circuit"></div>

          <!-- Layer 5: Prismatic Holographic Foil Overlay (Color Dodge / Overlay) -->
          <div class="holo-card-foil"></div>

          <!-- Layer 6: Dynamic Glare / Specular Highlight Spot -->
          <div class="holo-card-glare"></div>

          <!-- Layer 7: Inner Chamfer Light Border -->
          <div class="holo-card-edge-highlight"></div>

          <!-- Layer 8: Elevated Tech Foreground Content -->
          <div class="holo-card-content">
            <!-- Top Row: Logo -->
            <div class="holo-card-top">
              <div class="holo-brand-lockup">
                <img src="assets/logo-main.webp" alt="SuA K-Glow" class="holo-regular-logo">
              </div>
            </div>

            <!-- Mid Row: EMV Microchip on Middle Left -->
            <div class="holo-card-mid">
              <div class="holo-emv-chip" aria-label="Security Chip"></div>
            </div>

            <!-- Bottom Row: Founding 50, The SuA Glow Glass Skin Method™, VIP Membership Pass + Horizontal Korean -->
            <div class="holo-card-bottom">
              <div class="holo-card-tier-row">
                <span class="holo-card-member-since">FOUNDING 50</span>
              </div>

              <div class="holo-card-method-row">
                <span class="holo-card-method-title">The SuA Glow Glass Skin Method<span class="tm-sup">™</span></span>
              </div>

              <div class="holo-card-details-row">
                <span class="holo-vip-pass-text">VIP MEMBERSHIP PASS</span>
                <span class="holo-korean-horizontal" aria-label="SuA in Korean">수아</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= CARD BACK ================= -->
        <div class="holo-card-face holo-card-back">
          <!-- Substrate, S-Monogram Pattern & Holographic Foil -->
          <div class="holo-card-substrate"></div>
          <div class="holo-card-monogram" style="opacity: 0.22;"></div>
          <div class="holo-card-circuit" style="opacity: 0.25;"></div>
          <div class="holo-card-foil" style="opacity: 0.35;"></div>
          <div class="holo-card-glare"></div>
          <div class="holo-card-edge-highlight"></div>

          <!-- Back Content -->
          <div class="holo-card-back-content">
            <!-- Magnetic Stripe -->
            <div class="holo-magstripe"></div>

            <!-- Signature Strip & CVC -->
            <div class="holo-back-mid">
              <div class="holo-signature-panel">
                <span class="holo-signature-text">SuA Glow VIP</span>
              </div>
              <div class="holo-cvc-box">
                <span class="code">777</span>
                <span class="lbl">CID</span>
              </div>
            </div>

            <!-- Legal & QR Code -->
            <div class="holo-back-bottom">
              <div class="holo-back-legal">
                <strong>The SuA Glow Glass Skin Method™ VIP Pass</strong><br>
                Valid for monthly all-inclusive 5-layer Glass Skin Ritual.<br>
                4116 State Hwy 121, Suite 120, Carrollton, TX 75010<br>
                Concierge Hotline: (972) 665-8737 • suaglow.com
              </div>

              <!-- High-tech QR Mockup -->
              <div class="holo-qr-mock">
                <svg viewBox="0 0 24 24" fill="currentColor" text-anchor="middle">
                  <path d="M2 2h8v8H2zm2 2v4h4V4zm-2 10h8v8H2zm2 2v4h4v-4zm10-14h8v8h-8zm2 2v4h4V4zm0 10h2v2h-2zm4 0h2v4h-2zm-4 4h4v2h-4zm6-2h2v4h-2zm-6-2h2v2h-2zm4 4h2v2h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  `;

  class HoloCardEngine {
    constructor(containerElement, options = {}) {
      this.container = containerElement;
      this.wrapper = this.container.querySelector('[data-holo-card]');
      this.inner = this.container.querySelector('[data-holo-inner]');
      this.shadow = this.container.querySelector('.holo-card-shadow');
      
      this.options = Object.assign({
        maxTilt: 16, // Maximum tilt in degrees
        perspective: 1400,
        smoothing: 0.14, // Lerp interpolation factor (0.05 to 0.2)
        autoFloat: false,
        theme: 'gold' // gold, prism, diamond
      }, options);

      // State variables
      this.currentX = 0;
      this.currentY = 0;
      this.targetX = 0;
      this.targetY = 0;
      this.isHovered = false;
      this.isFlipped = false;
      this.rafId = null;

      this.init();
    }

    init() {
      if (!this.wrapper) return;

      if (this.options.theme) {
        this.setTheme(this.options.theme);
      }

      // Event Listeners for Mouse / Pointer
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerEnter = this.onPointerEnter.bind(this);
      this.onPointerLeave = this.onPointerLeave.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);

      this.container.addEventListener('pointerenter', this.onPointerEnter);
      this.container.addEventListener('pointermove', this.onPointerMove);
      this.container.addEventListener('pointerleave', this.onPointerLeave);
      this.container.addEventListener('touchmove', this.onTouchMove, { passive: true });

      // Click to flip directly on card if desired
      this.wrapper.addEventListener('click', (e) => {
        // Only flip if not clicking a CTA link inside
        if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
          this.toggleFlip();
        }
      });

      // Start RAF animation loop
      this.updateLoop = this.updateLoop.bind(this);
      this.rafId = requestAnimationFrame(this.updateLoop);

      // Initial angle & properties
      this.updateCardProperties(0, 0, 50, 50, 0.45, 135, 0.75);
    }

    onPointerEnter() {
      this.isHovered = true;
      this.wrapper.classList.remove('is-springing');
      this.wrapper.classList.remove('is-demo-floating');
    }

    onPointerMove(e) {
      const rect = this.wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalize between -1 and 1
      const normX = ((x / rect.width) - 0.5) * 2;
      const normY = ((y / rect.height) - 0.5) * 2;

      // Clamp
      this.targetX = Math.max(-1, Math.min(1, normX));
      this.targetY = Math.max(-1, Math.min(1, normY));
    }

    onTouchMove(e) {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = this.wrapper.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const normX = ((x / rect.width) - 0.5) * 2;
      const normY = ((y / rect.height) - 0.5) * 2;

      this.targetX = Math.max(-1, Math.min(1, normX));
      this.targetY = Math.max(-1, Math.min(1, normY));
      this.isHovered = true;
    }

    onPointerLeave() {
      this.isHovered = false;
      this.targetX = 0;
      this.targetY = 0;
      this.wrapper.classList.add('is-springing');
      
      // If auto-float was active, restore after spring settles
      if (this.options.autoFloat) {
        setTimeout(() => {
          if (!this.isHovered) {
            this.wrapper.classList.add('is-demo-floating');
          }
        }, 800);
      }
    }

    updateLoop() {
      // Lerp smoothing
      const lerp = this.options.smoothing;
      this.currentX += (this.targetX - this.currentX) * lerp;
      this.currentY += (this.targetY - this.currentY) * lerp;

      // Invert Y for correct natural 3D tilt
      const rotX = -this.currentY * this.options.maxTilt;
      const rotY = this.currentX * this.options.maxTilt;

      // Calculate holographic angle (follows cursor vector)
      const rad = Math.atan2(this.currentY, this.currentX);
      const holoAngle = (rad * (180 / Math.PI)) + 135;

      // Glare & position calculations
      const glareX = ((this.currentX + 1) / 2) * 100;
      const glareY = ((this.currentY + 1) / 2) * 100;
      const distFromCenter = Math.hypot(this.currentX, this.currentY);
      const glareOpacity = this.isHovered ? Math.min(0.85, 0.2 + distFromCenter * 0.45) : 0.35;
      const holoOpacity = this.isHovered ? Math.min(0.9, 0.45 + distFromCenter * 0.4) : 0.65;

      // Apply transformations
      if (!this.wrapper.classList.contains('is-demo-floating')) {
        this.wrapper.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        
        if (this.shadow) {
          const shadowOffsetX = (-rotY * 1.6).toFixed(1);
          const shadowOffsetY = (rotX * 1.6 + 22).toFixed(1);
          this.shadow.style.transform = `translate3d(${shadowOffsetX}px, ${shadowOffsetY}px, -180px) scale(0.92)`;
        }
      }

      this.updateCardProperties(rotX, rotY, glareX, glareY, glareOpacity, holoAngle, holoOpacity);

      this.rafId = requestAnimationFrame(this.updateLoop);
    }

    updateCardProperties(rotX, rotY, glareX, glareY, glareOpacity, holoAngle, holoOpacity) {
      this.wrapper.style.setProperty('--rot-x', `${rotX}deg`);
      this.wrapper.style.setProperty('--rot-y', `${rotY}deg`);
      this.wrapper.style.setProperty('--glare-x', `${glareX}%`);
      this.wrapper.style.setProperty('--glare-y', `${glareY}%`);
      this.wrapper.style.setProperty('--glare-opacity', glareOpacity.toString());
      this.wrapper.style.setProperty('--holo-angle', `${holoAngle.toFixed(1)}deg`);
      this.wrapper.style.setProperty('--holo-x', `${glareX}%`);
      this.wrapper.style.setProperty('--holo-y', `${glareY}%`);
      this.wrapper.style.setProperty('--holo-opacity', holoOpacity.toString());
    }

    toggleFlip() {
      this.isFlipped = !this.isFlipped;
      if (this.inner) {
        this.inner.classList.toggle('is-flipped', this.isFlipped);
      }
      return this.isFlipped;
    }

    setTheme(themeName) {
      this.container.classList.remove('holo-theme-prism', 'holo-theme-gold', 'holo-theme-diamond');
      this.container.classList.add(`holo-theme-${themeName}`);
      this.options.theme = themeName;
    }

    toggleAutoFloat(enable) {
      if (typeof enable === 'boolean') {
        this.options.autoFloat = enable;
      } else {
        this.options.autoFloat = !this.options.autoFloat;
      }

      if (this.options.autoFloat) {
        this.wrapper.classList.add('is-demo-floating');
      } else {
        this.wrapper.classList.remove('is-demo-floating');
      }
      return this.options.autoFloat;
    }

    destroy() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      this.container.removeEventListener('pointerenter', this.onPointerEnter);
      this.container.removeEventListener('pointermove', this.onPointerMove);
      this.container.removeEventListener('pointerleave', this.onPointerLeave);
      this.container.removeEventListener('touchmove', this.onTouchMove);
    }
  }

  /**
   * Helper function to inject and mount the card into any target element
   * @param {string|HTMLElement} target - ID or DOM Element
   * @param {Object} options - engine configuration
   */
  function initMembershipCard(target = 'membership-card-placeholder', options = {}) {
    const el = typeof target === 'string' ? document.getElementById(target) : target;
    if (!el) return null;

    // If placeholder is empty, inject HTML template
    if (!el.querySelector('[data-holo-card]')) {
      el.innerHTML = MEMBERSHIP_CARD_HTML;
    }

    const container = el.querySelector('[data-holo-container]') || el;
    const engine = new HoloCardEngine(container, options);
    
    // Store reference on element for external controls
    el._holoCardEngine = engine;
    return engine;
  }

  // Auto-initialize any containers existing in DOM with [data-holo-mount]
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-holo-mount]').forEach((mountEl) => {
      initMembershipCard(mountEl);
    });

    // Also auto-initialize standard placeholder if present
    const defaultPlaceholder = document.getElementById('membership-card-placeholder');
    if (defaultPlaceholder && !defaultPlaceholder._holoCardEngine) {
      initMembershipCard(defaultPlaceholder);
    }
  });

  // Export globally
  window.MEMBERSHIP_CARD_HTML = MEMBERSHIP_CARD_HTML;
  window.HoloCardEngine = HoloCardEngine;
  window.initMembershipCard = initMembershipCard;
})();
