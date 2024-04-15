
  let contadorIntentos;
  let numeroIntentosPermitidos = 5; 
  let cantNumSorteados = 5;  
  let numeroSecreto = 0;  
  let listaNumeroSecretos = [];

  
  
    
  
  function asignarTextoEtiqueta(etiqueta, texto){
      // Manipulación del título desde JavaScript
    let idEtiqueta = document.getElementById(etiqueta);
        idEtiqueta.innerHTML = texto;
      
  }
  
  // Lógica para enviar el número
  function verificarIntento(){
       let valorInput = document.getElementById('valorInput').value;       
           numeroIngresado = parseInt(valorInput); 
                                       
            if(contadorIntentos < numeroIntentosPermitidos){
                // Verifica si el número ingresado es igual al número almacenado
                if (numeroIngresado === numeroSecreto) {
                    mensaje = `¡Adivinaste! El número es correcto es : ${numeroSecreto} Necesitaste ${contadorIntentos} intento(s) para asertar, Inicia un nuevo juego`
                    asignarTextoEtiqueta('mensaje', mensaje);  
                    bloquearIntento();                    
                } else if(isNaN(numeroIngresado)){
                    mensaje = `Intento numero ${contadorIntentos} no permitido, has enviado ${valorInput != '' ? valorInput : 'El campo vacio o solo espacios'}, lo cual no es un numero, Vuelve a intentar`
                    asignarTextoEtiqueta('mensaje', mensaje);                  
                }  else {
                        // Proporciona pistas sobre si el número ingresado es mayor o menor
                      if (numeroIngresado > numeroSecreto) {
                          mensaje = 'No adivinaste. El número a adivinar es menor.';
                          asignarTextoEtiqueta('mensaje', mensaje); 
                      
                      } else {
                            mensaje = 'No adivinaste. El número a adivinar es mayor.';
                            asignarTextoEtiqueta('mensaje', mensaje); 
                      } 
                        
                        document.getElementById('valorInput').value = ''; 
                        contadorIntentos ++; 
                }              
            }else{
                 mensaje = `Superaste la cantidad de intentos permitidos ${numeroIntentosPermitidos} Inicia un nuevo Juego`;                
                 asignarTextoEtiqueta('mensaje', mensaje); 
                 bloquearIntento();                
                                
            }                                   
  }
  
  function bloquearIntento(){
      document.getElementById('finalizarBtn').removeAttribute('disabled');      
      document.getElementById('valorInput').setAttribute('disabled', 'true'); 
      document.getElementById('enviarBtn').setAttribute('disabled', 'true'); 
  }
  
  function activarIntento(){
      asignarTextoEtiqueta('mensaje', '');  
      document.getElementById('valorInput').value = '';
      document.getElementById('finalizarBtn').setAttribute('disabled', 'true'); 
      document.getElementById('enviarBtn').removeAttribute('disabled');  
      document.getElementById('valorInput').removeAttribute('disabled');  
  }
  
  function generarNumeroSecreto(){
      
      numeroSecreto = Math.floor(Math.random()*cantNumSorteados)+1;        
       if(listaNumeroSecretos.length === cantNumSorteados){
            mensaje = `Ya se sortearon los  ${cantNumSorteados} numeros a adivinar, Inicia un nuevo Juego para sortear los numeros`;                
            asignarTextoEtiqueta('mensaje', mensaje);      
            listaNumeroSecretos = [];
            bloquearIntento();
       }else{            
            if(listaNumeroSecretos.includes(numeroSecreto)){
               return generarNumeroSecreto();           
           }else{
               listaNumeroSecretos.push(numeroSecreto);                 
               return numeroSecreto;
           }                     
       }  
  
  }
  
  function condicionesIniciales(){       
      contadorIntentos = 1;
      activarIntento();      
      generarNumeroSecreto();      
  }
  
    
  // Lógica para finalizar el juego 
  let finalizarBtn = document.getElementById('finalizarBtn');
  finalizarBtn.addEventListener('click', function () {     
    condicionesIniciales(); 
  });
  
 condicionesIniciales();   

