const cuerpo = document.getElementById("seccionCursos")
const iconoCarro = document.getElementById("verCarrito")
const contCarrito = document.getElementById("carritoEmerge")
const divCursos = document.getElementById("libros-filtrados")
const inicio_sesion = document.getElementById("inicio-sesion")

baseDeDatos = JSON.parse(localStorage.getItem("system_login"))

if (!baseDeDatos) {
    cargarDatosInicialesDeLaBaseDeDatosLogin()
}

function guardarDatos(){
    localStorage.setItem("system_login", JSON.stringify(baseDeDatos))
}
function cargarDatosInicialesDeLaBaseDeDatosLogin() {
    baseDeDatos = {
        1234567890: {
            contraseña: "abc",
        }
    }
}

async function menu(){
    opcion = -1

    await Swal.fire({
        title: "¡Bienvenido a la libreria Fenix!",
        showConfirmButton:false,
        html:`
        <button class = "boton" onclick = 'opcion = 0; Swal.close()'> Iniciar Sesión </button>
        <br><br> 
        <button class = "boton" onclick = 'opcion = 1; Swal.close()'> Registrarse </button>
        `
    })

    switch (opcion){
        case 0:
            login()
            
            break
        case 1:
            registrarNuevoUsuario()
            break
        default:
            await menu()
            break
    }
}

async function registrarNuevoUsuario(){
    registrar = -1
    await Swal.fire({
        title: "Registro",
        showConfirmButton: false,
        html:`
        <input class = "label" placeholder="Usuario" id="usuario">
        <input class = "label" type= "password" placeholder="Contraseña" id="contraseña">
        <br><br>
        <button class = "boton" onclick = 'registrar = 0; Swal.clickConfirm()'> Crear</button>
        <button class = "boton" onclick = 'registrar = 1; Swal.close()'> Cancelar </button>
        `,
        preConfirm: () => {
            let usuario = document.getElementById("usuario").value
            let contraseña = document.getElementById("contraseña").value

            if (!usuario) {
                Swal.showValidationMessage("No hay usuario")
                return false
            }
            if (!contraseña){
                Swal.showValidationMessage("No hay contraseña")
                return false
            }
            baseDeDatos[usuario] = {}
            baseDeDatos[usuario].contraseña = contraseña
            guardarDatos()
        }
    })
    switch (registrar) {
        case 0:
            return menu()
            break
        case 1:
            menu()
            break
        default:
            menu()
            break
    }
}

async function login(){
    inicio = -1
    await Swal.fire({
        title: "Bienvenido",
        showConfirmButton: false,
        html: `
        <div class= "contenedor-login">
        <input class = "label" placeholder = "usuario" id="usuario">
        <input class = "label" type = "password" placeholder = "contraseña" id="contraseña"></input>
        <br>
        <button class = "boton" onclick = 'inicio = 0; Swal.clickConfirm()'> Login </button>
        <button class = "boton" onclick = 'inicio = 1; Swal.close()'> Regresar </button>
        </div>
        `,
        preConfirm:() => {
            let usuario = document.getElementById("usuario").value
            let contraseña = document.getElementById("contraseña").value

            if (!usuario) {
                Swal.showValidationMessage("No hay usuario")
                return false
            }
            if (!contraseña){
                Swal.showValidationMessage("No hay contraseña")
                return false
            }
            let datos = baseDeDatos[usuario]
            if (!datos) {
                Swal.showValidationMessage("El usuario no existe, haz tú registro primero")
                return false
            }
            if (datos.contraseña != contraseña) {
                Swal.showValidationMessage("Contraseña incorrecta")
                return false
            }
            return true
        }
    })
    switch (inicio) {
        case 0:
            /* menu() */
            break
        case 1:
            menu()
            break
        default:
            menu()
            break
    }
}

menu() 

let carrito = []
let productosData

document.addEventListener("DOMContentLoaded", () => {
    fetchData ()
})

const fetchData = async () => {
    try {
        const res = await fetch('productos.json')
        const productos = await res.json()
        productosData = productos
        const carritoStorage = localStorage.getItem("carrito")
        if (carritoStorage) {
            carrito = JSON.parse(carritoStorage)
        }
        recorrer()
    } catch (error) {
        console.log("error")
    }
}

/* fetchData() */
// armado del html
const recorrer = () => {
    productosData.forEach((libros) => {
        let contenedor = document.createElement("div")
        contenedor.className = "divCursos"
        contenedor.innerHTML = `
            <img class = "libros" src= "${libros.img}">
            <h3> ${libros.nombre} </h3>
            <p>$${libros.precio} </p>
        `
            cuerpo.append(contenedor)

            let btnComprar = document.createElement("button")
            btnComprar.innerText = "Agregar al carrito"
            btnComprar.className = "boton"

            contenedor.append(btnComprar)

            //arreglo para los libros elegidos
            btnComprar.addEventListener("click", () => {
                const libroExistente = carrito.find((productos) => productos.id === libros.id)
                if (libroExistente) {
                    // El libro ya existe en el carrito, aumentar la cantidad en 1
                    libroExistente.cantidad += 1
                } else {
                    carrito.push({
                        id:libros.id,
                        img:libros.img,
                        nombre: libros.nombre,
                        precio:libros.precio,
                        cantidad:1
                    })
                }
                guardarCarritoEnLocalStorage()
            console.log(carrito)
            
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:"Agregaste al carrito"+ " " + libros.nombre,
                    timer: 1500
                })
            })
    })
}
//ventana carrito

iconoCarro.addEventListener("click", () =>{
    
    function mostrarCarrito() {

        contCarrito.style.display = "table"

    // Crear el contenedor principal del carrito
        let contenedorCarrito = document.createElement("div")
        contenedorCarrito.className = "contenedor-carrito"
        contCarrito.appendChild(contenedorCarrito)

    // Verificar si el carrito está vacío
        if (carrito.length === 0) { console.log(carrito)
            swal.fire({
                position: 'center',
                icon: 'info',
                title:"No hay productos en el carrito",
                timer: 1500
            })
            cuerpo.style.display = "grid"
        } else { 
            console.log(carrito)
            // Crear los elementos para cada producto en el carrito
            
            carrito.forEach((productos) => {
                const { id, img, nombre, precio } = productos
                cuerpo.style.display = "none"

                // Crear el contenedor de cada producto en el carrito
                const contenedorProducto = document.createElement("div")
                contenedorProducto.className = "contenedor-producto"
                contenedorCarrito.appendChild(contenedorProducto)

            // Agregar la imagen del producto
                const imagenProducto = document.createElement("img")
                imagenProducto.className = "imagen-producto"
                imagenProducto.src = img
                contenedorProducto.appendChild(imagenProducto)

            // Agregar el nombre del producto
                const nombreProducto = document.createElement("h3")
                nombreProducto.textContent = nombre
                contenedorProducto.appendChild(nombreProducto)

            // Agregar el precio del producto
                const precioProducto = document.createElement("p")
                precioProducto.textContent = `$${precio}`
                contenedorProducto.appendChild(precioProducto)

                // Agregar el botón de eliminar producto
                const botonEliminar = document.createElement("button")
                botonEliminar.textContent = "Eliminar"
                botonEliminar.className = "boton"
                contenedorProducto.appendChild(botonEliminar)

                const cantidadProducto = document.createElement("p")
                cantidadProducto.textContent = `Cantidad: ${productos.cantidad}`
                contenedorProducto.appendChild(cantidadProducto)
            
                // Agregar el evento de click al botón de eliminar
                botonEliminar.addEventListener("click", () => {
                    eliminarProducto(id)
                    contenedorCarrito.remove()
                })
            })
            const contenedorFinalizar = document.createElement("div")
            contenedorFinalizar.className = "contenedor-finalizar"
            contenedorCarrito.appendChild(contenedorFinalizar)

            // Mostrar el total a pagar
            const totalPagar = calcularTotalPagar()
            const totalPagarTexto = document.createElement("p")
            totalPagarTexto.textContent = `Total a pagar: $${totalPagar}`
            contenedorFinalizar.appendChild(totalPagarTexto)
        
            // Agregar el botón de finalizar compra
            const botonFinalizarCompra = document.createElement("button")
            botonFinalizarCompra.textContent = "Finalizar Compra"
            botonFinalizarCompra.className = "boton"
            contenedorFinalizar.appendChild(botonFinalizarCompra)
            
            // Agregar el evento de click al botón de finalizar compra
            botonFinalizarCompra.addEventListener("click", () => {
                finalizarCompra()
                contenedorCarrito.remove()
            })
        }
    }
        
    // Función para eliminar un producto del carrito
    function eliminarProducto(id) {
        carrito = carrito.filter((productosData) => productosData.id !== id)
        guardarCarritoEnLocalStorage()
        mostrarCarrito()
    }
        
    // Función para calcular el total a pagar
    function calcularTotalPagar() {
        let total = 0
        carrito.forEach((productos) => {
            const {precio, cantidad} = productos
            total += precio * cantidad
        })
    return total
    }

    // Función para finalizar la compra
    function finalizarCompra() {
        console.log(carrito)
        if (carrito.length > 0) {
            // Realizar acciones de finalización de compra (por ejemplo, enviar datos al servidor)
            Swal.fire({
            icon: "success",
            title: "¡Compra realizada!",
            text: "Gracias por tu compra",
            timer: 800
            })
            carrito = []
            cuerpo.style.display = "grid"
            contCarrito.style.display = "none"
            localStorage.removeItem('carrito') 
        } else {
            Swal.fire({
            icon: "error",
            title: "Carrito vacío",
            text: "Agrega productos al carrito antes de finalizar la compra",
            })
        }
    }
        
    // Llamar a la función mostrarCarrito para mostrar el carrito inicialmente
    mostrarCarrito()
})

function filtrado(){
    Swal.fire({
        title: 'Ingresa la categoria de tú libro',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave) => {
            palabraClave = palabraClave.trim().toUpperCase()
            let resultado = productosData.filter((producto)=> producto.categoria.toUpperCase().includes(palabraClave))

            if (resultado.length > 0){
                console.table(resultado)
                
                Swal.fire({
                    title: 'Resultados de búsqueda',
                    html: '<table class = "filtrado"><tr><th>Id</th><th>Nombre</th><th>Precio</th></tr>' +
                        resultado.map(productos => `<tr><td>${productos.id}</td><td>${productos.nombre}</td><td>$${productos.precio}</td></tr>`).join('') + 
                        '</table>',
                    confirmButtonText: 'OK'
                })
                
            } else {
                Swal.fire({
                    title: 'No se encontraron coincidencias',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
        }
    })
}
const filtrarbtn = document.getElementById("btn-filtro")
    filtrarbtn.addEventListener("click", () => {
        filtrado()
    })

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}