
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


var frase = document.querySelector("#input-texto");
var mensaje = document.querySelector("#msg");
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var caracteresProhibidos="ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ!#$%&'()*+,-.\\/:;=?@[\"]^_`{|}~";


function encriptar(palabra){
    for(i=0; i<palabra.length; i++){
       if (caracteresProhibidos.indexOf(palabra.charAt(i),0)!=-1){
          return alert("El texto tiene un caracter invalido");
          break;
       }
    }
    const encriptado = palabra.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    mensaje.value = encriptado;
}


botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    var palabra = frase.value;

    encriptar(palabra)
});


botonDesencriptar.addEventListener("click", function(event){

  event.preventDefault();
  
  var palabra = frase.value; 

  const desencriptado = palabra.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  mensaje.value = desencriptado;

});

    botonCopiar.addEventListener("click", function(event){
        event.preventDefault();
    
        var content = mensaje;
          
        content.select();
        document.execCommand('copy');
      
        alert("Mensaje Copiado!")
      
})

