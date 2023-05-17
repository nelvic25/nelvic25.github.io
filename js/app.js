"use strict"

alert('Bienvenid@ !');

var temporizador = setInterval(function () {
      setColor();
}, 1000);

//function setColor() {
//    var pagina = document.body;
//    pagina.style.backgroundColor = pagina.style.backgroundColor.toLowerCase() === "white" ? "lightblue" : "white";
//}
 

function setColor() {
      var pagina = document.body;
      var currentColor = pagina.style.backgroundColor;
      var rgbValues = currentColor.match(/\d+/g);
    
      if (rgbValues[0] === "0" && rgbValues[1] === "0" && rgbValues[2] === "0") {
        var newColor = "rgb(0, 0, 255)";
      } else if (rgbValues[2] < 255) {
        var newColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + (parseInt(rgbValues[2]) + 1) + ")";
      } else {
        var newColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + (parseInt(rgbValues[2]) - 1) + ")";
      }
    
      pagina.style.backgroundColor = newColor;
    }

    
 //function stopChangeColor() {
//    clearInterval(temporizador)
//}

