document.addEventListener('DOMContentLoaded', () => {
  // Año automático en el footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Botón volver arriba
  const backToTop = document.getElementById('backToTop');
  function toggleBackBtn() {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', toggleBackBtn);

  if (backToTop) {
    backToTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }
});
