document.addEventListener('DOMContentLoaded', () => {
  const btnEmpezar = document.getElementById("btn-empezar");
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const paginaPrincipal = document.getElementById("pagina-principal");
  const musica = document.getElementById("musica");

  btnEmpezar.addEventListener("click", function () {
    pantallaInicio.style.display = "none";
    paginaPrincipal.style.display = "block";
    musica.play();
  });

  // Popup único reutilizable
  const popup = document.getElementById('popup');
  const popupMensaje = document.getElementById('popup-mensaje');
  const cerrarBtn = document.getElementById('cerrar-popup');

  // Todas las imágenes que deben activar popup
  const imagenesConPopup = document.querySelectorAll('.popup-trigger');

  imagenesConPopup.forEach(img => {
    img.addEventListener('click', () => {
      const mensaje = img.getAttribute('data-mensaje');
      popupMensaje.textContent = mensaje;
      popup.style.display = 'flex';
    });
  });

  cerrarBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

