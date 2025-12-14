// script.js - centralizado, ligero y accesible
document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu toggle (mobile)
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Back to top visibility
  const back = document.getElementById('backToTop');
  if (back) {
    const onScroll = () => back.classList.toggle('hidden', window.scrollY < 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Intersection Observer for fade-in (stagger)
  const els = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target); // once visible, unobserve
        }
      });
    }, { threshold: 0.18 });
    els.forEach(el => io.observe(el));
  } else {
    // fallback: reveal all
    els.forEach(el => el.classList.add('visible'));
  }

  // Accessibility: skip links (if you add them later), focus outlines for keyboard users
  document.body.addEventListener('keyup', function (e) {
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
  }, { once: true });
});
