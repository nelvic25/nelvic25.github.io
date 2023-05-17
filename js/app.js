"use strict"

alert('Bienvenid@ !');

var temporizador = setInterval(function () {
      setColor();
}, 1000);

function setColor() {
    var pagina = document.body;
    //pagina.style.backgroundColor = pagina.style.backgroundColor.toLowerCase() === "white" ? "lightblue" : "white";
    var brightnessLevel = parseInt(currentColor.replace(/[^\d.]/g, ''));

    if (brightnessLevel < 100) {
      brightnessLevel++;
    } else {
      brightnessLevel = 0;
    }
  
    pagina.style.backgroundColor = `hsl(240, 100%, ${brightnessLevel}%)`;

 }
 

 //function stopChangeColor() {
//    clearInterval(temporizador)
//}

