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



function capaBusquedas(nombre){
let capa = document.getElementById(nombre);
if (nombre == "origen"){
    document.getElementById("destino").display = "none"; 
} else {
    document.getElementById("origen").display = "none";
}
if (capa.style.display == "none"){
    capa.style.display = "flex";
} else {
    capa.style.display = "none";
}
}

cambiaBusqueda();

document.getElementById("origen").click();
document.getElementById("destino").click();

