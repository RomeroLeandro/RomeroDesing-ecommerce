document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistrarse").addEventListener("click", registro);
document.getElementById("inicioSesion").addEventListener("click", aparecer);
window.addEventListener("ventana", anchoVentana);

let formularioLogin = document.querySelector(".formularioLogin");
let formularioRegistro = document.querySelector(".formularioRegistro");
let contenedorLoginRegistro = document.querySelector(".contenedorLoginRegistro");
let cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
let cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");

let btnInicioLogin = document.querySelector(".contenedor");
function anchoVentana(){

    if (window.innerWidth > 850){
        cajaTraseraRegistro.style.display = "block";
        cajaTraseraLogin.style.display = "block";
    }else{
        cajaTraseraRegistro.style.display = "block";
        cajaTraseraRegistro.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        contenedorLoginRegistro.style.left = "0px";
        formularioRegistro.style.display = "none";   
    }
}

anchoVentana();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formularioLogin.style.display = "block";
            contenedorLoginRegistro.style.left = "10px";
            formularioRegistro.style.display = "none";
            cajaTraseraRegistro.style.opacity = "1";
            cajaTraseraLogin.style.opacity = "0";
        }
        else{
            formularioLogin.style.display = "block";
            contenedorLoginRegistro.style.left = "0px";
            formularioRegistro.style.display = "none";
            cajaTraseraRegistro.style.display = "block";
            cajaTraseraLogin.style.display = "none";
        }
    }

    function registro(){
        if (window.innerWidth > 850){
            formularioRegistro.style.display = "block";
            contenedorLoginRegistro.style.left = "410px";
            formularioLogin.style.display = "none";
            cajaTraseraRegistro.style.opacity = "0";
            cajaTraseraLogin.style.opacity = "1";
        }else{
            formularioRegistro.style.display = "block";
            contenedorLoginRegistro.style.left = "0px";
            formularioLogin.style.display = "none";
            cajaTraseraRegistro.style.display = "none";
            cajaTraseraLogin.style.display = "block";
            cajaTraseraLogin.style.opacity = "1";
        }
}

    function aparecer(){
        btnInicioLogin.style.display = "block";
}