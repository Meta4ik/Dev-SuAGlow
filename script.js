
// SuA Glow Core Interaction Script

/**
 * Navigation Injection & Initialization
 * Uses the cached NAVBAR_HTML string from navbar.js for instant, local loading
 */
function initNavigation() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) return;

  // Use the pre-loaded string from navbar.js
  if (typeof NAVBAR_HTML !== 'undefined') {
    // Check if we are in a subfolder (e.g., education/ or dev-tools/)
    const isSubfolder = window.location.pathname.includes('/education/') || window.location.pathname.includes('/dev-tools/');
    let html = NAVBAR_HTML;
    
    if (isSubfolder) {
      // Prepend ../ to links that don't already have it and aren't absolute/hash
      html = html.replace(/(href|src)="(?!(http|https|\/|#|\.\.\/))([^"]+)"/g, '$1="../$3"');
    }
    
    navPlaceholder.innerHTML = html;

    // Trigger icon creation for newly injected nav
    if (window.lucide) {
      lucide.createIcons();
    }

    // Initialize Nav-Dependent Components
    initMobileDrawer();
    initMobileAccordions();
    initNavThemeLogic();
    initDesktopNavTransition();
    initSearch();

    // Smooth scroll for anchors
    initAnchorScroll();
  } else {
    console.warn('NAVBAR_HTML is not defined. Ensure navbar.js is loaded.');
  }
}

/**
 * Footer Injection & Initialization
 */
function initFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  if (typeof FOOTER_HTML !== 'undefined') {
    const isSubfolder = window.location.pathname.includes('/education/') || window.location.pathname.includes('/dev-tools/');
    let html = FOOTER_HTML;
    
    if (isSubfolder) {
      html = html.replace(/(href|src)="(?!(http|https|\/|#|\.\.\/))([^"]+)"/g, '$1="../$3"');
    }
    
    footerPlaceholder.innerHTML = html;

    const financeBtn = document.getElementById('floating-finance-btn');

    // Hide floating finance button if already on the financing page
    if (window.location.pathname.includes('financing.html')) {
      if (financeBtn) {
        financeBtn.style.display = 'none';
      }
    }

    if (window.lucide) {
      lucide.createIcons();
    }
  } else {
    console.warn('FOOTER_HTML is not defined. Ensure footer.js is loaded.');
  }
}

/**
 * Near Me Section Injection
 * Uses the NEARME_HTML string from nearme.js
 * The placeholder should have a data-product attribute for the product name
 */
function initNearMe() {
  const placeholder = document.getElementById('nearme-placeholder');
  if (!placeholder) return;

  if (typeof NEARME_HTML !== 'undefined') {
    placeholder.innerHTML = NEARME_HTML;

    // Fill in the product name from the data attribute
    const productName = placeholder.dataset.product || '';
    const productEl = document.getElementById('nearme-product');
    if (productEl) {
      productEl.textContent = productName;
    }
  }
}

/**
 * Oligio X Banner Section Injection
 */
function initOligioBanner() {
  const placeholder = document.getElementById('oligio-banner-placeholder');
  if (!placeholder) return;

  if (typeof OLIGIO_BANNER_HTML !== 'undefined') {
    const isSubfolder = window.location.pathname.includes('/education/') || window.location.pathname.includes('/dev-tools/');
    let html = OLIGIO_BANNER_HTML;
    
    if (isSubfolder) {
      html = html.replace(/(href|src)="(?!(http|https|\/|#|\.\.\/))([^"]+)"/g, '$1="../$3"');
    }
    
    placeholder.innerHTML = html;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    placeholder.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));
  }
}

/**
 * News Section Injection & Initialization
 */
function initNews() {
  const newsPlaceholder = document.getElementById('news-placeholder');
  if (!newsPlaceholder) return;

  if (typeof NEWS_HTML !== 'undefined') {
    newsPlaceholder.innerHTML = NEWS_HTML;

    // Trigger animations for newly injected news cards
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    newsPlaceholder.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

    if (window.lucide) {
      lucide.createIcons();
    }
  }
}

/**
 * Sophia Yang Bio Section Injection
 */
function initSophia() {
  const placeholder = document.getElementById('sophia-placeholder');
  if (!placeholder) return;

  if (typeof SOPHIA_HTML !== 'undefined') {
    const isSubfolder = window.location.pathname.includes('/education/') || window.location.pathname.includes('/dev-tools/');
    let html = SOPHIA_HTML;
    
    if (isSubfolder) {
      html = html.replace(/(href|src)="(?!(http|https|\/|#|\.\.\/))([^"]+)"/g, '$1="../$3"');
    }
    
    placeholder.innerHTML = html;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    placeholder.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));
  }
}

/**
 * Mobile Navigation Drawer Logic
 */
function initMobileDrawer() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden');
      setTimeout(() => mobileDrawer.classList.add('open'), 10);
      document.body.style.overflow = 'hidden';
    });
  }

  if (drawerClose && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      setTimeout(() => mobileDrawer.classList.add('hidden'), 400);
      document.body.style.overflow = '';
    };

    drawerClose.addEventListener('click', closeDrawer);

    // Close drawer when any link is clicked within it
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }
}

/**
 * Mobile Accordion (Menu) Logic
 */
function initMobileAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('[data-lucide]');

      content.classList.toggle('hidden');
      if (icon) {
        const isHidden = content.classList.contains('hidden');
        icon.setAttribute('data-lucide', isHidden ? 'plus' : 'minus');
        lucide.createIcons();
      }
    });
  });
}

/**
 * Navbar Scroll and Smart Theme (Dark/Light) Switching
 */
function initNavThemeLogic() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const hero = document.getElementById('hero');
  const hasDarkTheme = hero && hero.dataset.navTheme === 'dark';

  // Set initial theme
  if (hasDarkTheme) {
    navbar.classList.add('nav-dark-theme');
  }

  // Scroll Background Transition - Only handles the white background/blur, no color edits
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scrolled');
      if (hasDarkTheme) navbar.classList.remove('nav-dark-theme');
    } else {
      navbar.classList.remove('nav-scrolled');
      if (hasDarkTheme) navbar.classList.add('nav-dark-theme');
    }
  });
}

/**
 * Desktop Nav Breakpoint Animation
 * Detects when crossing the lg (1024px) breakpoint and plays
 * a staggered fade-out / fade-in animation on nav items.
 */
function initDesktopNavTransition() {
  const menu = document.querySelector('.desktop-nav-menu');
  if (!menu) return;

  const mq = window.matchMedia('(min-width: 1180px)');
  let wasDesktop = mq.matches;

  // Set initial state without animation
  if (!mq.matches) {
    menu.classList.add('nav-collapsed');
  }

  mq.addEventListener('change', (e) => {
    const items = menu.children;

    if (!e.matches && wasDesktop) {
      // Shrinking to mobile — play fade-out
      menu.classList.add('nav-fading-out');
      menu.classList.remove('nav-collapsed');

      // Stagger each item (reverse order for fade-out)
      const total = items.length;
      Array.from(items).forEach((item, i) => {
        item.style.transitionDelay = `${(total - 1 - i) * 40}ms`;
      });

      // After animation, collapse
      setTimeout(() => {
        menu.classList.remove('nav-fading-out');
        menu.classList.add('nav-collapsed');
        Array.from(items).forEach(item => item.style.transitionDelay = '');
      }, 450);

    } else if (e.matches && !wasDesktop) {
      // Expanding to desktop — play fade-in
      menu.classList.remove('nav-collapsed');
      menu.classList.add('nav-fading-in');

      // Stagger each item
      Array.from(items).forEach((item, i) => {
        item.style.transitionDelay = `${i * 60}ms`;
      });

      setTimeout(() => {
        menu.classList.remove('nav-fading-in');
        Array.from(items).forEach(item => item.style.transitionDelay = '');
      }, 500);
    }

    wasDesktop = e.matches;
  });
}

/**
 * Initial Render & Animation Setup
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Kick off Nav & Footer Load
  initNavigation();
  initFooter();
  initNearMe();
  initOligioBanner();
  initNews();
  initSophia();

  // 2. Setup Reveal Animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

  // 3. Modal Init
  initModals();

  // 4. Contact Form Init
  initContactForm();

  // 5. Hero Video Scroll
  initHeroVideoScroll();

  // 6. Scar Carousel
  initScarCarousel();

  // 7. Glow Card Tracking
  initGlowCardTracking();

  // 8. Story Carousel
  initStoryCarousel();

  // 9. Cookie Consent Banner
  initCookieConsent();
});

function initHeroVideoScroll() {
  const video = document.getElementById('hero-scroll-video');
  if (!video) return;

  // If on mobile (<= 768px width), let the video autoplay continuously and bypass scrub logic entirely
  if (window.innerWidth <= 768) {
    video.autoplay = true;
    video.play().catch(() => { });
    return; // Early exit so we don't attach scroll listeners
  }

  // DESKTOP LOGIC:
  // Force load for iOS/Desktop without the HTML autoplay attribute visual jump
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      video.pause();
    }).catch(() => {
      video.pause();
    });
  }

  const handleScrollAndScrub = () => {
    // Force the first frame (iOS requires > 0 to render sometimes)
    video.currentTime = 0.01;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Map the scroll distance to the video duration.
          const maxScroll = window.innerHeight * 1.5;
          let fraction = window.scrollY / maxScroll;
          fraction = Math.max(0, Math.min(fraction, 1));

          if (!isNaN(video.duration) && video.duration > 0) {
            video.currentTime = video.duration * fraction;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  };

  if (video.readyState >= 1) {
    handleScrollAndScrub();
  } else {
    video.addEventListener('loadedmetadata', handleScrollAndScrub);
  }
}

function initModals() {
  document.querySelectorAll('.trigger-modal').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const dialog = document.getElementById(trigger.dataset.modalTarget);
      if (dialog) {
        dialog.showModal();
        dialog.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.close-modal, dialog').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.close-modal') || e.target.nodeName === 'DIALOG') {
        const dialog = el.closest('dialog') || el;
        dialog.close();
        dialog.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });
}

function initAnchorScroll() {
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Handle "#hash" as well as "currentpage.html#hash"
      const isHashOnly = href.startsWith('#');
      const isCurrentPageAnchor = href.includes('#') && window.location.pathname.endsWith(href.split('#')[0]);

      if (isHashOnly || isCurrentPageAnchor) {
        e.preventDefault();
        const targetId = href.substring(href.indexOf('#'));
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Optionally update the URL hash without reloading
          if (history.pushState) {
            history.pushState(null, null, targetId);
          } else {
            window.location.hash = targetId;
          }
        }
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.classList.remove('hidden', 'text-green-500', 'text-red-500');
    status.classList.add('text-white');
    status.textContent = 'Sending...';

    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
      if (response.ok) {
        status.classList.add('text-green-500');
        status.textContent = 'Thanks! We will get back to you soon.';
        form.reset();
      } else {
        status.classList.add('text-red-500');
        status.textContent = 'Submission error. Please try again.';
      }
    } catch (error) {
      status.classList.add('text-red-500');
      status.textContent = 'Network error. Please try again.';
    }
  });
}

function initScarCarousel() {
  const container = document.getElementById('scar-carousel-inner');
  if (!container) return;

  const prevBtn = document.getElementById('scar-prev');
  const nextBtn = document.getElementById('scar-next');
  const dotsContainer = document.getElementById('scar-carousel-dots');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('button') : [];

  const totalSlides = 3;
  let currentIndex = 0;

  function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.remove('bg-white/50');
        dot.classList.add('bg-white', 'w-4');
      } else {
        dot.classList.remove('bg-white', 'w-4');
        dot.classList.add('bg-white/50');
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.dataset.index);
      updateCarousel();
    });
  });
}

function initGlowCardTracking() {
  const cards = document.querySelectorAll('.glow-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      // Track both X and Y positions
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

function initStoryCarousel() {
  const container = document.getElementById('story-carousel-inner');
  if (!container) return;

  const prevBtn = document.getElementById('story-prev');
  const nextBtn = document.getElementById('story-next');
  const dotsContainer = document.getElementById('story-carousel-dots');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('button') : [];

  const totalSlides = 3;
  let currentIndex = 0;

  function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;

    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.remove('bg-white/60');
        dot.classList.add('bg-white', 'ring-2', 'ring-white/20');
      } else {
        dot.classList.remove('bg-white', 'ring-2', 'ring-white/20');
        dot.classList.add('bg-white/60');
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.dataset.index);
      updateCarousel();
    });
  });
}

/**
 * Cookie Consent Banner Injection & Logic
 */
function initCookieConsent() {
  if (localStorage.getItem('cookieConsent')) {
    return;
  }

  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.className = 'fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-[#131619]/95 backdrop-blur-md border border-[#AA987C]/20 rounded-2xl p-6 md:p-8 text-white z-[9999] shadow-2xl transition-all duration-500 translate-y-12 opacity-0';
  
  banner.innerHTML = `
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-[#AA987C]/10 flex items-center justify-center text-[#AA987C]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
        </div>
        <h5 class="heading-wide text-xs tracking-[0.2em] text-[#AA987C] uppercase font-semibold">This website uses cookies</h5>
      </div>
      <p class="text-xs text-white/70 font-light leading-relaxed">
        We use cookies to personalize content, analyze our traffic, and provide you with a premium, seamless browsing experience. By clicking "Accept All", you consent to our use of cookies.
      </p>
      <div class="flex items-center justify-end gap-3 mt-2">
        <button id="cookie-decline-btn" class="px-5 py-2 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white/85 hover:text-white text-xs font-medium rounded-full tracking-wide transition-colors">
          Decline
        </button>
        <button id="cookie-accept-btn" class="px-5 py-2 bg-[#AA987C] hover:bg-[#968469] text-white text-xs font-semibold rounded-full tracking-wide transition-colors shadow-sm">
          Accept All
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  // Trigger smooth enter transition
  setTimeout(() => {
    banner.classList.remove('translate-y-12', 'opacity-0');
  }, 100);

  const acceptBtn = document.getElementById('cookie-accept-btn');
  const declineBtn = document.getElementById('cookie-decline-btn');

  function dismissBanner(consentType) {
    localStorage.setItem('cookieConsent', consentType);
    banner.classList.add('translate-y-12', 'opacity-0');
    setTimeout(() => {
      banner.remove();
    }, 500);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      dismissBanner('accepted');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      dismissBanner('declined');
    });
  }
}

/**
 * Full-Screen Search Feature Implementation
 */
function initSearch() {
  const searchTrigger = document.getElementById('search-trigger');
  const mobileSearchTrigger = document.getElementById('mobile-search-trigger');

  const openSearch = (e) => {
    if (e) e.preventDefault();
    createSearchOverlay();
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    
    setTimeout(() => {
      if (input) input.focus();
    }, 100);

    ensureSearchIndexLoaded();
  };

  if (searchTrigger) {
    searchTrigger.addEventListener('click', openSearch);
  }
  if (mobileSearchTrigger) {
    mobileSearchTrigger.addEventListener('click', openSearch);
  }
}

function ensureSearchIndexLoaded(callback) {
  if (typeof SEARCH_INDEX !== 'undefined') {
    if (callback) callback();
    return;
  }
  
  const isSubfolder = window.location.pathname.includes('/education/') || window.location.pathname.includes('/dev-tools/');
  const indexPath = isSubfolder ? '../search-index.js' : 'search-index.js';
  
  const script = document.createElement('script');
  script.src = indexPath;
  script.onload = () => {
    console.log('Search index loaded dynamically');
    if (callback) callback();
  };
  script.onerror = () => {
    console.error('Failed to load search index');
  };
  document.head.appendChild(script);
}

function createSearchOverlay() {
  if (document.getElementById('search-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'search-overlay';
  overlay.className = 'fixed inset-0 z-[200] opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col items-center justify-start pt-24 px-4 sm:px-6';

  overlay.innerHTML = `
    <!-- Close Button -->
    <button id="search-close" class="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2" aria-label="Close search">
      <i data-lucide="x" class="w-6 h-6"></i>
    </button>
    
    <div class="w-full max-w-2xl flex flex-col gap-6">
      <!-- Search Input Container -->
      <div class="relative w-full search-input-container pb-4 flex items-center gap-4">
        <i data-lucide="search" class="w-6 h-6 text-[#AA987C]"></i>
        <input type="text" id="search-input" placeholder="Search treatments, concerns..." class="bg-transparent border-none text-white text-xl sm:text-2xl font-light w-full focus:outline-none placeholder-white/30" autocomplete="off" />
      </div>

      <!-- Suggested Terms -->
      <div id="search-suggestions" class="flex flex-wrap gap-2 text-xs">
        <span class="text-white/40 uppercase tracking-widest mr-2 self-center font-body text-[10px]">Popular:</span>
        <button class="suggestion-tag search-suggestion-tag px-3 py-1.5 rounded-full font-body">Oligio X</button>
        <button class="suggestion-tag search-suggestion-tag px-3 py-1.5 rounded-full font-body">Skin Boosters</button>
        <button class="suggestion-tag search-suggestion-tag px-3 py-1.5 rounded-full font-body">Botox</button>
        <button class="suggestion-tag search-suggestion-tag px-3 py-1.5 rounded-full font-body">Salmon PN</button>
        <button class="suggestion-tag search-suggestion-tag px-3 py-1.5 rounded-full font-body">Scar Treatment</button>
      </div>

      <!-- Results Panel -->
      <div id="search-results-panel" class="hidden flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        <div id="search-results-header" class="search-results-header text-[10px] uppercase tracking-widest text-[#AA987C] font-semibold pb-2 font-heading">Results (0)</div>
        <div id="search-results-list" class="flex flex-col gap-4">
          <!-- Dynamically populated -->
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const closeBtn = document.getElementById('search-close');
  const input = document.getElementById('search-input');
  const resultsPanel = document.getElementById('search-results-panel');
  const resultsList = document.getElementById('search-results-list');
  const resultsHeader = document.getElementById('search-results-header');
  const suggestions = document.querySelectorAll('.suggestion-tag');

  const closeOverlay = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    resultsPanel.classList.add('hidden');
    resultsPanel.classList.remove('flex');
    resultsList.innerHTML = '';
  };

  closeBtn.addEventListener('click', closeOverlay);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeOverlay();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  input.addEventListener('input', () => {
    const val = input.value.trim();
    if (val.length < 2) {
      resultsPanel.classList.add('hidden');
      resultsPanel.classList.remove('flex');
      resultsList.innerHTML = '';
      return;
    }

    ensureSearchIndexLoaded(() => {
      const results = executeSearch(val);
      renderResults(results, val);
    });
  });

  suggestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.textContent.trim();
      input.value = term;
      input.focus();
      ensureSearchIndexLoaded(() => {
        const results = executeSearch(term);
        renderResults(results, term);
      });
    });
  });

  function renderResults(results, query) {
    resultsPanel.classList.remove('hidden');
    resultsPanel.classList.add('flex');
    resultsHeader.textContent = `Results (${results.length})`;
    resultsList.innerHTML = '';

    if (results.length === 0) {
      resultsList.innerHTML = `
        <div class="text-white/40 text-sm font-light py-8 text-center font-body">
          No matches found for "${query}". Try searching for popular treatments like Oligio, Skin Boosters, or Botox.
        </div>
      `;
      return;
    }

    results.forEach(res => {
      const link = document.createElement('a');
      link.href = formatResultUrl(res.url);
      link.className = 'group/res search-result-card flex flex-col gap-1 p-4 rounded-xl';
      
      const categoryHtml = res.category ? `<span class="text-[9px] uppercase tracking-widest text-[#AA987C] font-semibold">${res.category}</span>` : '';
      const pageTitleHtml = res.pageTitle && res.pageTitle !== res.title ? `<span class="text-white/40 text-xs font-light ml-2">in ${res.pageTitle}</span>` : '';
      
      const dynSnippet = getDynamicSnippet(res.content, query);
      const highlightedTitle = highlightText(res.title, query);
      const highlightedSnippet = highlightText(dynSnippet, query);

      link.innerHTML = `
        <div class="flex items-baseline justify-between">
          <div class="flex items-baseline flex-wrap">
            <h4 class="text-white text-sm font-medium tracking-wide group-hover/res:text-[#AA987C] transition-colors font-body">${highlightedTitle}</h4>
            ${pageTitleHtml}
          </div>
          ${categoryHtml}
        </div>
        <p class="text-xs text-white/50 leading-relaxed font-light font-body">${highlightedSnippet}</p>
      `;

      link.addEventListener('click', () => {
        closeOverlay();
      });

      resultsList.appendChild(link);
    });
  }
}

function formatResultUrl(url) {
  const isSubfolder = window.location.pathname.includes('/education/') || window.location.pathname.includes('/dev-tools/');
  if (isSubfolder) {
    if (window.location.pathname.includes('/education/') && url.startsWith('education/')) {
      return url.substring(10);
    } else if (window.location.pathname.includes('/dev-tools/') && url.startsWith('dev-tools/')) {
      return url.substring(10);
    } else {
      return '../' + url;
    }
  } else {
    return url;
  }
}

function highlightText(text, query) {
  if (!query) return text;
  const terms = query.split(/\s+/).filter(t => t.length > 0);
  if (terms.length === 0) return text;
  
  terms.sort((a, b) => b.length - a.length);

  const escapedTerms = terms.map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const pattern = new RegExp(`(<[^>]+>)|(${escapedTerms.join('|')})`, 'gi');
  
  return text.replace(pattern, (match, p1, p2) => {
    if (p1) {
      return p1;
    }
    return `<mark class="search-highlight">${p2}</mark>`;
  });
}

function getDynamicSnippet(content, query) {
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  if (terms.length === 0) {
    return content.substring(0, 160) + (content.length > 160 ? '...' : '');
  }
  
  let minIndex = -1;
  terms.forEach(term => {
    const idx = content.toLowerCase().indexOf(term);
    if (idx !== -1 && (minIndex === -1 || idx < minIndex)) {
      minIndex = idx;
    }
  });
  
  if (minIndex === -1) {
    return content.substring(0, 160) + (content.length > 160 ? '...' : '');
  }
  
  const start = Math.max(0, minIndex - 60);
  const end = Math.min(content.length, minIndex + 100);
  let snippet = content.substring(start, end);
  
  if (start > 0) {
    snippet = '...' + snippet;
  }
  if (end < content.length) {
    snippet = snippet + '...';
  }
  return snippet;
}

function executeSearch(query) {
  if (!query) return [];
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  if (terms.length === 0) return [];
  
  const results = [];
  
  SEARCH_INDEX.forEach(entry => {
    let score = 0;
    const titleLower = entry.title.toLowerCase();
    const pageTitleLower = entry.pageTitle.toLowerCase();
    const contentLower = entry.content.toLowerCase();
    const categoryLower = entry.category.toLowerCase();
    
    const allTermsMatch = terms.every(term => {
      let termScore = 0;
      if (titleLower.includes(term)) {
        termScore += 10;
        if (titleLower === term) termScore += 10;
      }
      if (pageTitleLower.includes(term)) {
        termScore += 5;
      }
      if (categoryLower.includes(term)) {
        termScore += 8;
      }
      if (contentLower.includes(term)) {
        termScore += 2;
        const matches = contentLower.match(new RegExp(term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'));
        if (matches) {
          termScore += Math.min(matches.length * 0.5, 5);
        }
      }
      
      score += termScore;
      return termScore > 0;
    });
    
    if (allTermsMatch) {
      results.push({
        entry,
        score
      });
    }
  });
  
  results.sort((a, b) => b.score - a.score);
  return results.map(r => r.entry);
}
