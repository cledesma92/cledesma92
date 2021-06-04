var lanzador = "#link-menu";

var desplegable = "#menu";

var despliegaCLase = "menu-desplegado";

function nav() {
    var lanz = document.querySelector(lanzador);
    lanz.addEventListener("click", despliegaMenu, false);
} 

function despliegaMenu(e) { 
    e.preventDefault();
    var despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaCLase);    
}

document.querySelector("html").classList.add("js");

nav ();