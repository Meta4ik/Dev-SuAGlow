
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
    navPlaceholder.innerHTML = NAVBAR_HTML;

    // Trigger icon creation for newly injected nav
    if (window.lucide) {
      lucide.createIcons();
    }

    // Initialize Nav-Dependent Components
    initMobileDrawer();
    initMobileAccordions();
    initNavThemeLogic();
    initDesktopNavTransition();

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
    footerPlaceholder.innerHTML = FOOTER_HTML;

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

  // Scroll Background Transition - Only handles the white background/blur, no color edits
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
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
  initNews();

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
