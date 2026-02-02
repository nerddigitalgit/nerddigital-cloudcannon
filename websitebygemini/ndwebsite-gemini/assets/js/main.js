// NerdDigital Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Nav border on scroll
  const mainNav = document.getElementById('main-nav');
  if (mainNav) {
    const updateNavBorder = () => {
      if (window.scrollY > 10) {
        mainNav.classList.add('border-b', 'border-nerd-border/50');
      } else {
        mainNav.classList.remove('border-b', 'border-nerd-border/50');
      }
    };
    window.addEventListener('scroll', updateNavBorder, { passive: true });
    updateNavBorder(); // Initial check
  }
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');

      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // Form submission handler for GoHighLevel webhook
  const WEBHOOK_URL = document.body.dataset.webhookUrl || 'https://services.leadconnectorhq.com/hooks/Y1JdoPKbrd3IjmRfSXfY/webhook-trigger/560d0d57-3ae8-4c4d-8519-64a1888ee5d1';

  document.querySelectorAll('form[data-webhook]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = form.querySelector('input[type="email"]').value;
      const source = form.getAttribute('data-source') || 'website';
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.textContent = 'Sending...';
      button.disabled = true;

      try {
        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('source', source);

        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
          mode: 'no-cors'
        });

        // Show success
        button.textContent = 'Check your inbox!';
        button.style.backgroundColor = '#00C853';
        form.querySelector('input[type="email"]').value = '';

        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '';
          button.disabled = false;
        }, 3000);

      } catch (error) {
        button.textContent = 'Try again';
        button.disabled = false;
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
