// NerdDigital Main JavaScript

// Form submission handler for GoHighLevel webhook
document.addEventListener('DOMContentLoaded', function() {
  const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Y1JdoPKbrd3IjmRfSXfY/webhook-trigger/560d0d57-3ae8-4c4d-8519-64a1888ee5d1';

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
