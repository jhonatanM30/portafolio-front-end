var menu = prompt("Marca (r) para ejecutar el reto del numero oculto\n. Marca e para ejecutar los ejercicios de explicación");
if(menu == "r"){
    let numeroMaximoPosible = 100;
    let numeroIntentosPermitidos = 5;
     
      // Número almacenado en la variable
    let numeroAlmacenado = Math.floor(Math.random()*numeroMaximoPosible)+1;
    let numeroUsuario = 0;
    let numeroIntentos = 0;
     
    while(numeroUsuario != numeroAlmacenado){        

        numeroIntentos ++;
        // Pide al usuario que ingrese un número
        numeroUsuario = prompt(`Adivina el número. Ingresa un número entre 1-${numeroMaximoPosible}:`);        
        // Convierte la entrada a número
        numeroUsuario = parseInt(numeroUsuario);
        if(numeroIntentos <= numeroIntentosPermitidos){
            // Verifica si el número ingresado es igual al número almacenado
            if (numeroUsuario === numeroAlmacenado) {
              alert(`¡Adivinaste! ¡El número es correcto es : ${numeroAlmacenado}! Necesitaste ${numeroIntentos} intento(s) para asertar`);    
            } else {
              // Proporciona pistas sobre si el número ingresado es mayor o menor
              if (numeroUsuario > numeroAlmacenado) {
                alert("No adivinaste. El número a adivinar es menor.");
              } else {
                alert("No adivinaste. El número a adivinar es mayor.");
              }      
            }
        }else{
             alert(`Superaste la cantidad de intentos permitidos ${numeroIntentosPermitidos}`);
            break;
        }
    }
}else{
    var desafio = prompt("¿Qué desafío vas a ejecutar?\n1. (Primer reto)\n2.(Segundo Reto)\n3. (Tercer Reto)\n");
    if(desafio == 1){
    
    // Muestra una alerta de bienvenida
    alert("¡Bienvenida y bievenido a nuestro Desafio 1!");

    // Declara variables
    var nombre = "Luna";
    var edad = 25;
    var numeroDeVentas = 50;
    var saldoDisponible = 1000;
    // Muestra una alerta de error
    alert("¡Error! Completa todos los campos");

    // Declara una variable de mensaje de error
    var mensajeDeError = "¡Error! Completa todos los campos";

    // Muestra una alerta con el mensaje de error
    alert(mensajeDeError);

    // Pregunta al usuario su nombre y almacénalo en la variable nombre
    nombre = prompt("Por favor, introduce tu nombre");

    // Pide al usuario que ingrese su edad y almacénala en la variable edad
    edad = prompt("Por favor, introduce tu edad");

    // Convierte la entrada de edad a un número
    edad = parseInt(edad);

    // Verifica la edad y muestra una alerta adecuada
    if (edad >= 18) {
      alert("¡Puedes obtener tu licencia de conducir!");
    }else{
         alert("¡NO Puedes obtener tu licencia de conducir!");
    }
  
}else if(desafio == 2){
     // Muestra una alerta de bienvenida
    alert("¡Bienvenida y bievenido a nuestro Desafio 2!");
    
    // Desafío 1: Día de la semana
    var diaSemana = prompt("¿Qué día de la semana es?");
    if (diaSemana === "Sábado" || diaSemana === "Domingo") {
      alert("¡Buen fin de semana!");
    } else {
      alert("¡Buena semana!");
    }

    // Desafío 2: Número positivo o negativo
    var numero = prompt("Ingresa un número:");
    numero = parseFloat(numero); // Convertir la entrada a número
    if (numero > 0) {
      alert("El número es positivo.");
    } else if (numero < 0) {
      alert("El número es negativo.");
    } else {
      alert("El número es cero.");
    }

    // Desafío 3: Sistema de puntuación
    var puntuacion = prompt("Ingresa tu puntuación:");
    puntuacion = parseInt(puntuacion);
    if (puntuacion >= 100) {
      alert("¡Felicidades, has ganado!");
    } else {
      alert("Intenta nuevamente para ganar.");
    }

    // Desafío 4: Mensaje de saldo de cuenta con template string
    var saldo = 1500; // Puedes ajustar este valor según sea necesario
    alert(`Tu saldo actual es: $${saldo}`);

    // Desafío 5: Alerta de bienvenida con el nombre del usuario
    var nombreUsuario = prompt("Ingresa tu nombre:");
    alert(`¡Bienvenido, ${nombreUsuario}!`);

}else if(desafio == 3){
    
    // Contador ascendente de 1 a 10
    let contadorAscendente = 1;
    while (contadorAscendente <= 10) {
      console.log(contadorAscendente);
      contadorAscendente++;
    }

    // Contador descendente de 10 a 0
    let contadorDescendente = 10;
    while (contadorDescendente >= 0) {
      console.log(contadorDescendente);
      contadorDescendente--;
    }

    // Programa de cuenta regresiva según el número ingresado por el usuario
    let numeroCuentaRegresiva = prompt("Ingresa un número para la cuenta regresiva:");
    numeroCuentaRegresiva = parseInt(numeroCuentaRegresiva);
    let contadorCuentaRegresiva = 0;

    while (contadorCuentaRegresiva <= numeroCuentaRegresiva) {
      console.log(contadorCuentaRegresiva);
      contadorCuentaRegresiva++;
    }

    // Programa de cuenta progresiva según el número ingresado por el usuario
    let numeroCuentaProgresiva = prompt("Ingresa un número para la cuenta progresiva:");
    numeroCuentaProgresiva = parseInt(numeroCuentaProgresiva);
    let contadorCuentaProgresiva = 0;

    while (contadorCuentaProgresiva <= numeroCuentaProgresiva) {
      console.log(contadorCuentaProgresiva);
      contadorCuentaProgresiva++;
    }

}else if(desafio == 4){
    
    // Mensaje de bienvenida
    console.log("¡Bienvenido!");

    // Saludo con nombre usando console.log
    var nombre = "Jhonatan";
    console.log(`¡Hola, ${nombre}!`);

    // Saludo con nombre usando alert
    var nombre = "TuNombre";
    alert(`¡Hola, ${nombre}!`);

    // Pregunta sobre el lenguaje de programación favorito
    var lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
    console.log(`Tu lenguaje favorito es: ${lenguaje}`);

    // Suma de dos valores
    var valor1 = 5;
    var valor2 = 10;
    var resultadoSuma = valor1 + valor2;
    console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

    // Resta de dos valores
    var valor3 = 15;
    var valor4 = 8;
    var resultadoResta = valor3 - valor4;
    console.log(`La diferencia entre ${valor3} y ${valor4} es igual a ${resultadoResta}.`);

    // Verificación de la edad ingresada
    var edadUsuario = prompt("Ingresa tu edad:");
    if (edadUsuario >= 18) {
      console.log("Eres mayor de edad.");
    } else {
      console.log("Eres menor de edad.");
    }

    // Verificación de número ingresado
    var numero = prompt("Ingresa un número:");
    numero = parseFloat(numero);
    if (numero > 0) {
      console.log("El número es positivo.");
    } else if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número es cero.");
    }

    // Bucle while para mostrar los números del 1 al 10
    var contador = 1;
    while (contador <= 10) {
      console.log(contador);
      contador++;
    }

    // Verificación de nota para aprobación
    var nota = 8;
    if (nota >= 7) {
      console.log("Aprobado");
    } else {
      console.log("Reprobado");
    }

    // Número aleatorio entre 0 y 1
    var numeroAleatorio = Math.random();
    console.log(`Número aleatorio: ${numeroAleatorio}`);

    // Número aleatorio entero entre 1 y 10
    var numeroEntero = Math.floor(Math.random() * 10) + 1;
    console.log(`Número aleatorio entre 1 y 10: ${numeroEntero}`);

    // Número aleatorio entero entre 1 y 1000
    var numeroEntero1000 = Math.floor(Math.random() * 1000) + 1;
    console.log(`Número aleatorio entre 1 y 1000: ${numeroEntero1000}`);

    }

else{
    alert("¡Bye Bye No ingresaste una opción valida!");
      
}


}
