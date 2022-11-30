const pintarCarro = () => {
    carritoCompra.innerHTML = "";
    carritoCompra.style.display = "flex";
    const headerCarrito = document.createElement("div");
    headerCarrito.className = "headerCarrito";
    headerCarrito.innerHTML = `<p class= "carritoPalabra"> carrito. </p>`;
    carritoCompra.append(headerCarrito);

    const headerButton = document.createElement("h3");
    headerButton.innerText = "X";
    headerButton.className = "cierreCarrito"
    headerCarrito.append(headerButton);

    headerButton.addEventListener("click", () =>{
        carritoCompra.style.display = "none";
    })

    carrito.forEach((product) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "carritoContenido"
        carritoContenido.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class:"precio">$ ${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>`;
    carritoCompra.append(carritoContenido);

    let eliminar = document.createElement("span");
    eliminar.innerText = "X";
    eliminar.className = "eliminarProducto";
    carritoContenido.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCarro = document.createElement("div")
    totalCarro.className = "totalCompra"
    totalCarro.innerHTML = `total a pagar: $ ${total}`
    carritoCompra.append(totalCarro)
};

verCarrito.addEventListener("click", pintarCarro);

const eliminarProducto = () => {
    const buscarId = carrito.find((Element) => Element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    });
    contadorCarro();
    pintarCarro();
};

const contadorCarro = () =>{
    cantidadCarro.style.display = "block";
    cantidadCarro.innerText = carrito.length;
}
