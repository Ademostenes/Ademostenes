const idaVuelta = document.getElementById("idaVuelta");
const soloIda = document.getElementById("soloIda");
const contRegreso = document.getElementById("contRegreso");

function cambiaBusqueda(){
    if (idaVuelta.checked){
        contRegreso.style.display ="flex";
    } else {
        contRegreso.style.display ="none";
    }
}

cambiaBusqueda();