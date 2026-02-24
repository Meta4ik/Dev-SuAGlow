
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

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  const logoDesktop = document.getElementById('logo-desktop');
  const logoMobile = document.getElementById('logo-mobile'); // if exists
  const navLinks = document.querySelectorAll('.nav-link');
  const menuIconSvg = document.querySelector('#menu-btn svg');

  window.addEventListener('scroll', () => {
    const isStatic = navbar.hasAttribute('data-nav-static');
    
    if (window.scrollY > 50) {
      navbar.classList.add('bg-off-white/95', 'backdrop-blur-md', 'shadow-soft', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-6');
      
      if (!isStatic) {
        // Update Logo
        if(logoDesktop) {
          logoDesktop.classList.remove('brightness-0', 'invert', 'h-12');
          logoDesktop.classList.add('brightness-100', 'h-10');
        }

        // Update Links
        navLinks.forEach(link => {
          link.classList.remove('text-white');
          link.classList.add('text-charcoal');
        });
        
        // Update Mobile Menu Icon Color
        if(menuBtn) {
          menuBtn.classList.remove('text-white');
          menuBtn.classList.add('text-charcoal');
        }
      }

    } else {
      navbar.classList.remove('bg-off-white/95', 'backdrop-blur-md', 'shadow-soft', 'py-3');
      navbar.classList.add('bg-transparent', 'py-6');
      
      if (!isStatic) {
        // Revert Logo
        if(logoDesktop) {
          logoDesktop.classList.add('brightness-0', 'invert', 'h-12');
          logoDesktop.classList.remove('brightness-100', 'h-10');
        }

        // Revert Links
        navLinks.forEach(link => {
          link.classList.add('text-white');
          link.classList.remove('text-charcoal');
        });

        // Revert Mobile Menu Icon Color
        if(menuBtn) {
          menuBtn.classList.add('text-white');
          menuBtn.classList.remove('text-charcoal');
        }
      }
    }
  });

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
