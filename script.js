
// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // Mobile Menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Toggle icon between Menu and X (simplified logic)
    const isHidden = mobileMenu.classList.contains('hidden');
    menuIcon.setAttribute('name', isHidden ? 'menu' : 'x');
    lucide.createIcons();
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.setAttribute('name', 'menu');
      lucide.createIcons();
    });
  });

  // Navbar Scroll and Smart Theme Effect
  const navbar = document.getElementById('navbar');
  const logoDesktop = document.getElementById('logo-desktop');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1. Initial Scroll Effect (Background)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-off-white/95', 'backdrop-blur-md', 'shadow-soft', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-6');
    } else {
      navbar.classList.remove('bg-off-white/95', 'backdrop-blur-md', 'shadow-soft', 'py-3');
      navbar.classList.add('bg-transparent', 'py-6');
    }
  });

  // 2. Smart Theme Switching (Text Color based on Sections)
  const themeObserverOptions = {
    threshold: 0,
    rootMargin: '-1px 0px -99% 0px' // Only observe the very top of the viewport
  };

  const themeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const theme = entry.target.getAttribute('data-nav-theme') || 'dark'; // 'light' means light text, 'dark' means dark text

        if (theme === 'light') {
          // Switch to Light Mode (White Text)
          navLinks.forEach(link => { link.classList.remove('text-charcoal'); link.classList.add('text-white'); });
          if (menuBtn) { menuBtn.classList.remove('text-charcoal'); menuBtn.classList.add('text-white'); }
          if (logoDesktop) { logoDesktop.classList.add('brightness-0', 'invert'); }
        } else {
          // Switch to Dark Mode (Charcoal Text)
          navLinks.forEach(link => { link.classList.remove('text-white'); link.classList.add('text-charcoal'); });
          if (menuBtn) { menuBtn.classList.remove('text-white'); menuBtn.classList.add('text-charcoal'); }
          if (logoDesktop) { logoDesktop.classList.remove('brightness-0', 'invert'); }
        }
      }
    });
  }, themeObserverOptions);

  // Observe all sections and footer
  document.querySelectorAll('section, footer, header').forEach(el => themeObserver.observe(el));

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Modals for Skin Boosters
  document.querySelectorAll('.trigger-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const modalId = trigger.dataset.modalTarget;
      const dialog = document.getElementById(modalId);
      if (dialog) {
        dialog.showModal();
        dialog.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    });
  });

  // Close Modal Buttons
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const dialog = btn.closest('dialog');
      dialog.close();
      dialog.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    });
  });

  // Close modal when clicking on backdrop
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
        dialog.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

});

// Contact Form Handling
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.action;

    formStatus.classList.remove('hidden', 'text-green-500', 'text-red-500');
    formStatus.classList.add('text-white');
    formStatus.textContent = 'Sending...';

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formStatus.classList.add('text-green-500');
        formStatus.textContent = 'Thanks for your message! We will get back to you soon.';
        form.reset();
      } else {
        const jsonData = await response.json();
        formStatus.classList.add('text-red-500');
        formStatus.textContent = jsonData.errors ? jsonData.errors.map(error => error.message).join(', ') : 'Oops! There was a problem submitting your form';
      }
    } catch (error) {
      formStatus.classList.add('text-red-500');
      formStatus.textContent = 'Oops! There was a problem submitting your form';
    }
  });
}
