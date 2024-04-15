// Obtener referencia al textarea
var textarea = document.getElementById('texto');

// Agregar un listener para el evento input
textarea.addEventListener('input', function(event) {
    // Obtener el texto actual en el textarea
    var textoActual = textarea.value;
    // Procesar el texto para eliminar caracteres no deseados y convertir a minúsculas
    var textoProcesado = procesarTexto(textoActual);
    // Actualizar el contenido del textarea con el texto procesado
    textarea.value = textoProcesado;
});

// Función para procesar el texto y eliminar caracteres no deseados
function procesarTexto(texto) {
    // Convertir todo el texto a minúsculas
    var textoMin = texto.toLowerCase();
    // Eliminar caracteres no deseados utilizando una expresión regular
    var textoFiltrado = textoMin.replace(/[^a-z\s]/g, '');
    // Retornar el texto procesado
    return textoFiltrado;
}



function ejecutar(modo) {
    var texto = document.getElementById('texto').value;
    var resultado = '';

    if (modo === 'encriptar') {       
        resultado = encriptar(texto);
    } else if (modo === 'desencriptar') {
        resultado = desencriptar(texto);
    }   
      
    mostrarResultado(resultado);
}

function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function mostrarResultado(texto) {
    var inputResultado = document.getElementById('resultado'); 
    
    inputResultado.style.display = 'block';    
    inputResultado.textContent = texto;
    
    document.getElementById('texto').value = ''; 
}

function copiarResultado() {
    var desEncr = document.getElementById('resultado');
    desEncr.select();
    document.execCommand('copy');
}

