"use strict"

alert('Bienvenid@ !');

setTimeout(function () {
    setColor();
}, 3000);

function setColor() {
   var pagina = document.body;
   pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}