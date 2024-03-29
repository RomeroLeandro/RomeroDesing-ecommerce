const pintarCarro = () => {
    carritoCompra.innerHTML = "";
    carritoCompra.style.display = "flex";
    const headerCarrito = document.createElement("div");
    headerCarrito.className = "headerCarrito";
    headerCarrito.innerHTML = `<p class= "carritoPalabra"> CARRO DE COMPRAS. </p>`;
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
        <p class:"precio">$ ${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>`;

        carritoCompra.append(carritoContenido);

        let restar = carritoContenido.querySelector(".restar")
        restar.addEventListener("click", ()=>{
            if(product.cantidad !== 1){
                product.cantidad--;
            }
            guardarCarro();
            pintarCarro();
        })
        let sumar = carritoContenido.querySelector(".sumar")
        sumar.addEventListener("click", ()=>{
            product.cantidad++;
            guardarCarro();
            pintarCarro();
        })

    let eliminar = document.createElement("span");
    eliminar.innerText = "X";
    eliminar.className = "eliminarProducto";
    carritoContenido.append(eliminar);

    eliminar.addEventListener("click", ()=>{
        eliminarProducto();
        alertify.error("Has eliminado un producto")
    });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCarro = document.createElement("div")
    totalCarro.className = "totalCompra"
    totalCarro.innerHTML = `TOTAL A PAGAR: $ ${total}`
    carritoCompra.append(totalCarro)
};

verCarrito.addEventListener("click", pintarCarro);

const eliminarProducto = () => {
    const buscarId = carrito.find((Element) => Element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    });
    contadorCarro();
    guardarCarro();
    pintarCarro();
};

const contadorCarro = () =>{
    cantidadCarro.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarro.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
contadorCarro();


