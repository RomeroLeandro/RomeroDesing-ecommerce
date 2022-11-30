const inicioSesion = document.getElementById("inicioSesion")
let usuario
let contraseña

inicioSesion.addEventListener("click", () =>{
    usuario = prompt("Usuario o e-mail");
    contraseña = prompt("contraseña");
    alert ("Se ha iniciado sesion con exito!");
})