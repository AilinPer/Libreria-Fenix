const cuerpo = document.getElementById("seccionCursos")
const iconoCarro = document.getElementById("verCarrito")
const btnFiltrado = document.getElementById("btn-filtro")
const contCarrito = document.getElementById("carritoEmerge")
const divCursos = document.getElementById("libros-filtrados")

document.addEventListener("DOMContentLoaded", () => {
    fetchData ()
})

const fetchData = async () => {
    try {
        const res = await fetch('productos.json')
        const productos = await res.json()
        Filtrado(productos)
        recorrer(productos)
    } catch (error) {
        console.log("error")
    }
}

let carrito = []
// armado del html
const recorrer = productos => {
    console.log(productos)
    productos.forEach((libros) => {
        let contenedor = document.createElement("div");
        contenedor.className = "divCursos";
        contenedor.innerHTML = `
            <img class = "libros" src= "${libros.img}">
            <h3> ${libros.nombre} </h3>
            <p>$${libros.precio} </p>
        `
            cuerpo.append(contenedor)

            let btnComprar = document.createElement("button")
            btnComprar.innerText = "Comprar"
            btnComprar.className = "boton"

            contenedor.append(btnComprar);

            //arreglo para los libros elegidos
            btnComprar.addEventListener("click", () => {
            carrito.push({
                id:libros.id,
                img:libros.img,
                nombre: libros.nombre,
                precio:libros.precio,
            })

                console.log(carrito)

                Toastify({
                    Text:"Agregaste al carrito" + libros.nombre,
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style:{
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
            })
    })
}

//ventana carrito
iconoCarro.addEventListener("click", () =>{
    contCarrito.innerHTML=""

    contCarrito.style.display = "flex"
    if (carrito.length !== 0) {
        const ventanaCarrito = document.createElement("div")
        ventanaCarrito.className = "ventana-carrito"
        ventanaCarrito.innerHTML = `
        <h1 class = "tituloCarro"> Libros en el carrito </h1>
        `
        contCarrito.append(ventanaCarrito)

        const btnCarrito = document.createElement("h1")
        btnCarrito.className = "cerrar-carrito"
        btnCarrito.innerText = "X"
        btnCarrito.addEventListener("click", () =>{
            ventanaCarrito.style.display = "none"
        })

        ventanaCarrito.append(btnCarrito)

        //recorrer carrito para el cuerpo de la ventana carrito
        carrito.forEach((librosEnCarrito) => {
            let cuerpoVentanaCarrito = document.createElement("div")
            cuerpoVentanaCarrito.className = "cuerpo-ventana-carro"
            cuerpoVentanaCarrito.innerHTML = `
                <img class = "libros" src = "${librosEnCarrito.img}">
                <h3> ${librosEnCarrito.nombre} </h3>
                <p> $${librosEnCarrito.precio} </p>
            `
            ventanaCarrito.append(cuerpoVentanaCarrito)
        })
            const factura = carrito.reduce((suma, valor) => suma + valor.precio, 0)
            const facturatotal = document.createElement("div")
            facturatotal.className = "precio-total"
            facturatotal.innerHTML = `<h3> El total a pagar es: ${factura}</h3>`
            ventanaCarrito.append(facturatotal)
    } else{
        Swal.fire({
            icon: 'error',
            text: 'No tienes nada en el carrito' 
        })
    }
})

const Filtrado = productos =>{
    btnFiltrado.addEventListener("click", () =>{
        const librosFantasia = productos.filter(libros => libros.categoria === "fantasia")
        console.log(librosFantasia)
        librosFantasia.forEach((librosdefantasia)=>{
            const div_Filtrado = document.createElement("div")
            div_Filtrado.className = "div-filtrado-fantasia"
            div_Filtrado.innerHTML = `
            <img class = "libros" src = "${librosdefantasia.img}">
            <h3> ${librosdefantasia.nombre} </h3>
            <p> $${librosdefantasia.precio} </p>
            `
            divCursos.append(div_Filtrado)
        })
    })
}

