"use strict"

alert('Bienvenid@ !');

var temporizador = setInterval(function () {
      setColor();
}, 3000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor.toLowerCase() === "blue" ? "red " : "blue";
 }
 

 //function stopChangeColor() {
//    clearInterval(temporizador)
//}

