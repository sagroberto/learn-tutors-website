document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.carla');
  const secondSection = document.querySelector('.sections:nth-of-type(1)');

  function checkSectionPosition() {
      const secondSectionTop = secondSection.getBoundingClientRect().top;
      if (secondSectionTop <= 0) {
          button.classList.remove('button-hidden');
      } else {
          button.classList.add('button-hidden');
      }
  }

  // Verificar la posición inmediatamente después de cargar DOM
  checkSectionPosition();

  // Comprobar posición en el desplazamiento
  window.addEventListener('scroll', checkSectionPosition);
});



