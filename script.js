document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(
    '.estudante-div, .container-video, .mapa-local, .escola'
  );

  elementos.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
  });

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = '1';
        entrada.target.style.transform = 'translateY(0)';
        observador.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elementos.forEach((el) => observador.observe(el));
});