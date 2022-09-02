
var pantalla = document.querySelector("canvas")
var pincel = pantalla.getContext("2d")
 //["PALOMA","PERRO","BALLENA","GATO","HIENA"];

var palabrillas = getlista()

console.log(palabrillas)

var numero= Math.floor((Math.random() * palabrillas.length)) //es decir del 0 hasta el 6, EL MATH ROUND DEVUELVE EL NUMERO ENTERO MAS CERCANO, SI ES 12,51 DEVUELVE 13, SI ES 12.49 DEVULEVE 12 Y ASI, PERO CON MATH FLOOR Devuelve el máximo entero menor o igual a un número., SI ES 12.9, DEVUELVE 12

var PalabraEscogida = palabrillas[numero];

console.log(PalabraEscogida)

var cantidadEspacios = PalabraEscogida.length;


var espaciopixeles = 900;

var espaciocostados = (espaciopixeles - (40*cantidadEspacios) - (20*(cantidadEspacios-1)))/2
var j = 0

var persona = (espaciopixeles/2) - 90;

pincel.fillStyle = "black"
pincel.moveTo(persona,250);
pincel.lineTo(persona + 180,250);
pincel.stroke();

pincel.fillStyle = "black"
pincel.moveTo(persona + 50,250);
pincel.lineTo(persona + 50,0);
pincel.stroke();

pincel.fillStyle = "black"
pincel.moveTo(persona + 50,0);
pincel.lineTo(persona + 150,0);
pincel.stroke();

pincel.fillStyle = "black"
pincel.moveTo(persona + 150,0);
pincel.lineTo(persona + 150,30);
pincel.stroke();



for(var i = 0; i < cantidadEspacios; i++) {

    espacio = espaciocostados + j
    pincel.fillStyle = "black"
    pincel.moveTo(espacio,350);
    pincel.lineTo(espacio + 40,350);
    pincel.stroke();
    j += 60;

}

espacio = espaciocostados

var letra = document.querySelector("#letra")
var p = 50
var partepersona = 0
var cuentapalabra = 0
var Norepetir = []
var cuentaerror = 0 

letra.focus()

letra.addEventListener("input", function(){

    

    var comprobador = true
        
                for(var x = 0; x < cantidadEspacios; x++) {
        
                    var valorletra = letra.value.toUpperCase()
                    console.log(PalabraEscogida.substring(x,x+1))

                    if (PalabraEscogida.substring(x,x+1) == valorletra) {
                        
                                    pincel.font="30pt Verdana";
                                    pincel.fillStyle= "blue";
                                    pincel.fillText(valorletra,espacio+60*x+10,340);
                                    comprobador = false

                                    cuentapalabra += 1
                                
                                }

                            }
                        

                letra.value = ""

                if (comprobador) {

                        cuentaerror += 1

                        var espacioserrores = (espaciopixeles - (20*cuentaerror) - (10*(cuentaerror-1)))/2
                        Norepetir.push(valorletra)
                    
                        pincel.clearRect(0,360,900,390)
                        for (var i = 0; i < cuentaerror; i++) {
                            
                            pincel.font="15pt Verdana";
                            pincel.fillStyle= "black";
                            pincel.fillText(Norepetir[i],espacioserrores + 30*i,380);

                        }
            
                    partepersona += 1
            
                    partedePersona(partepersona)
            
                }
            
                if (cuentapalabra == PalabraEscogida.length) {
            
                    letra.setAttribute("readonly","")
            
                    pincel.font="25pt Verdana";
                    pincel.fillStyle= "blue";
                    pincel.fillText("GANASTE !!",600,80);
            
                }
            }
)

function partedePersona(cantidad) {

    if (cantidad == 1) {

        pincel.beginPath()
		pincel.arc(persona + 150,55,25,0,2*Math.PI) //el Math.PI es como redondear todo el numero pi, 3,1416...
		pincel.stroke()

    } 

    if (cantidad == 2) {

        pincel.fillStyle = "black"
        pincel.moveTo(persona + 150,80);
        pincel.lineTo(persona + 150,180);
        pincel.stroke(); //STROKE SOLO ES EL CONTORNO, Y FILL YA ES PARA RELLENAR TODO
    }

    if (cantidad == 3) {

        pincel.fillStyle = "black"
        pincel.moveTo(persona + 150,180);
        pincel.lineTo(persona + 110,220);
        pincel.stroke();
    }

    if (cantidad == 4) {
        pincel.fillStyle = "black"
        pincel.moveTo(persona + 150,180);
        pincel.lineTo(persona + 190,220);
        pincel.stroke();
    }

    if (cantidad == 5) {
        pincel.fillStyle = "black"
        pincel.moveTo(persona + 190,120);
        pincel.lineTo(persona + 150,80);
        pincel.stroke();
    }

    if (cantidad == 6) {
        pincel.fillStyle = "black"
        pincel.moveTo(persona + 110,120);
        pincel.lineTo(persona + 150,80);
        pincel.stroke();
    }

    if (cantidad == 7) {
        pincel.fillStyle = "red"
        pincel.moveTo(persona + 110,80);
        pincel.lineTo(persona + 190,80);
        pincel.stroke();

        letra.setAttribute("readonly","")

        pincel.font="25pt Verdana";
        pincel.fillStyle= "blue";
        pincel.fillText("PERDISTE !!",600,80);

    }
    
}





