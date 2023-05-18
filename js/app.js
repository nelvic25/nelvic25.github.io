"use strict"
document.body.style.backgroundColor = "rgb(0, 0, 0)";
var llegolimiteinf = true;
var llegolimitesup = false;
alert('Bienvenid@ !!!');
var temporizador = setInterval(function () {
      setColor();
}, 50);

//function setColor() {
//    var pagina = document.body;
//    pagina.style.backgroundColor = pagina.style.backgroundColor.toLowerCase() === "white" ? "lightblue" : "white";
//}
 

function setColor() {
      var pagina = document.body;
      var currentColor = pagina.style.backgroundColor;
      var rgbValues = currentColor.match(/\d+/g);
      
      
      if (llegolimitesup==false && llegolimiteinf==true) {
        if (rgbValues[2] < 255) {
          rgbValues[2] = parseInt(rgbValues[2]) + 1;
        }
        if (rgbValues[2] == 255) {
          llegolimitesup = true;
          llegolimiteinf = false;
        }
      }
      
      if (llegolimiteinf==false && llegolimitesup==true) {
        if (rgbValues[2] > 100) {
          rgbValues[2] = parseInt(rgbValues[2]) - 1;
        }
        if (rgbValues[2] == 100) {
          llegolimiteinf = true;
          llegolimitesup = false;
        }
      }
      
      var newColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")";
      pagina.style.backgroundColor = newColor;
    }
    
    
 //function stopChangeColor() {
//    clearInterval(temporizador)
//}

