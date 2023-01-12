const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const carritoCompra = document.getElementById("carritoCompra");
const cantidadCarro = document.getElementById("cantidadCarro");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener('DOMContentLoaded', ()=>{
    datos()
})
const datos = async () => {
    try{
        const res = await fetch('productos.json')
        const data = await res.json()
        tarjetas(data)
    }catch(error){
    console.log(error)
    }
}
const tarjetas = data => {
    data.forEach((product)=>{
        let contenido = document.createElement("div");
        contenido.className = "tarjeta";
        contenido.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p class:"precio">$ ${product.precio}</p>`;
    
        contenidoTienda.append(contenido);
    
        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar";
    
        contenido.append(comprar);
    
        comprar.addEventListener("click",() => {
            const repetir = carrito.some((repetirProducto) => repetirProducto.id === product.id);
    
            if(repetir){
                carrito.map((prod) => {
                    if (prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            }
            else{
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
                contadorCarro();
                guardarCarro();
            }
        });
    });
}
// localStorage

const guardarCarro = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
