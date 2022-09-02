
    
    var palabras = getlista() //PARA QUE DE FRENTE SAQUE LOS VALORES QUE ESTAN GUARDADOS EN EL LOCALSTORAGE Y NO EMPIECE OTRA VEZ CON []

    var AnadirPalabra = document.querySelector(".Guardar")

    var texto = document.querySelector(".nuevapalabra")
    
    AnadirPalabra.addEventListener("click", function(){

            palabras.push(texto.value)
            localStoragepalabras(palabras)
            texto.value=""
            console.log(palabras)

            
       window.location.href = "Adivina.html";

    })


    function getlista() {

        var storedList = localStorage.getItem('localpalabras')
        if (storedList == null) {

            palabras = []

        } else {

            palabras = JSON.parse(storedList)
        }

        return palabras

    }

function localStoragepalabras(plist) {


    localStorage.setItem('localpalabras', JSON.stringify(plist))
}

       
    


    /*function jsonVar(palabrai) {

        var anadir = {

            palabrita: palabrai

        }

            palabras.push(anadir)
            localStoragepalabras(palabras)

    }

    function getlista() {

        var storedList = localStorage.getItem('localpalabras')
        if (storedList == null) {

            palabras = []

        } else {

            palabras = JSON.parse(storedList)
        }

        return palabras

    }

function localStoragepalabras(plist) {


    localStorage.setItem('localpalabras', JSON.stringify(plist))
}*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


   





