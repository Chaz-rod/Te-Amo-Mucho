document.getElementById("btn-empezar").addEventListener("click", function () {
  // Oculta pantalla de inicio
  document.getElementById("pantalla-inicio").style.display = "none";

  // Muestra la página principal
  document.getElementById("pagina-principal").style.display = "block";

  // Reproduce la música
  document.getElementById("musica").play();
});
