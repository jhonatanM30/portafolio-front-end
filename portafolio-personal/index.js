// Función para realizar el efecto de zoom-in
function zoomIn() {
  document.body.classList.add('fade-in-animation');
  document.getElementById('cargando').style.display = 'block'; // Mostrar el elemento de carga
  setTimeout(function() {    
    document.getElementById('cargando').style.display = 'none'; // Ocultar el elemento de carga
  }, 800); // Duración de la animación en milisegundos
}  

document.addEventListener('DOMContentLoaded', function() {
  zoomIn(); 
  
  // Capturar todos los elementos con la clase "button"
    const buttons = document.querySelectorAll(".button-blank");
 
 // Iterar sobre cada elemento y agregar el evento click
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace  
            zoomIn(); 
            setTimeout(function() {
              window.open(button.getAttribute('href'), '_blank'); // Abrir enlace en una nueva pestaña
            }, 800);
        });
    });
});
