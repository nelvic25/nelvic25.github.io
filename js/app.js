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
      var llegolimiteinf= true;
      var llegolimitesup= false;
      var newColor = "rgb(0, 0, 0)";
      if (llegolimitesup= false && llegolimiteinf= true) {
            if(rgbValues[2] <=255 ){
                  var newColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + (parseInt(rgbValues[2]) + 1) + ")";
            }
            if (rgbValues[2] = 255 ) {
                  llegolimitesup= true
                  llegolimiteinf= false
            }
      }
      if (llegolimiteinf= false && llegolimitesup = true) {
            if(rgbValues[2] >= 0 ){
                  var newColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + (parseInt(rgbValues[2]) - 1) + ")";
            }
            if (rgbValues[2]= 0 ){
                  llegolimiteinf= true
                  llegolimitesup= false
            }
      }
      pagina.style.backgroundColor = newColor;
    }

    
 //function stopChangeColor() {
//    clearInterval(temporizador)
//}

