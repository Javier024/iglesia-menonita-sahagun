document.addEventListener('DOMContentLoaded', () => {
  // ===== Año automático en el footer =====
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ===== Botón Volver Arriba =====
  const backToTop = document.getElementById('backToTop');

  function toggleBackBtn() {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }

  // Escuchar el scroll
  window.addEventListener('scroll', toggleBackBtn);
  toggleBackBtn(); // Llamada inicial para estado correcto al cargar

  // Acción al hacer clic
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== Mejora para el menú móvil =====
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Cierra el menú automáticamente al hacer clic en un enlace (en móviles)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768 && navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
