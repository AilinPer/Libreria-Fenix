alert ("Bienvenido a la LIBRERIA FENIX")

let usuario = ""

while (true) {
    usuario = prompt ("Ingresa tu nombre:")

    if (usuario == " "){
        alert ("Ese no es un nombre")
    }

    if (usuario == null){
        alert ("Has cancelado la operación")
    }

    if (usuario.trim().length < 1) {
        alert ("Acceso denegado, ingrese un nombre")
    }else{
        break
    }
}
confirm (`Hola ${usuario} \n ¿Quieres qué te mostremos diferentes generos de libros?`)

if (confirm == false){
    alert ("Gracias por su visita")
}
    let eleccion = parseInt (prompt("Estos son nuestros generos: \n 1. Fantasia \n 2. Ciencia-ficción \n 3. Aventuras \n 4. Terror y misterio \n 5. Romántica \n 6. Mitologia \n Elige una categoria: "))

    const IVA = 1.16 
    let Total = 0

    switch (eleccion){
        case 1:
            importeFantasia()
            break
        case 2:
            importeCienciaFiccion()
            break
        case 3:
            importeAventuras()
            break
        case 4:
            importeTerror()
            break
        case 5:
            importeRomance()
            break
        case 6:
            importeMitologia()
            break
        default:
            alert ("Opción no valida")
            break
    }

    function calculoTotalVenta(cantidad, precio, IVA){
        return cantidad * precio * IVA;
    }
                                                            //FANTASIA
    function importeFantasia(){
        let otraCompra = true
        while (otraCompra) {
            let opcionCorrecta = false;
            while (!opcionCorrecta){
                let fantasia = parseInt(prompt("Los libros de fantasia qué manejamos son:\n 1. El nombre del viento - $520 \n 2. El señor de los anillos (trilogia) - $859 \n 3. Los jardines de la luna - $578 \n 4. La viajera del tiempo - $238 \n ¿Cuál libro deseas comprar?"))
                if (!isNaN(fantasia)) {
                    fantasia = Number(fantasia);
                    opcionCorrecta = true;
                }
                else{
                    alert ("Solo se pueden ingresar numeros")
                }
            }
            let precio
            switch(opcionCorrecta){
                case 1:
                    precio = 520
                    break;
                case 2:
                    precio = 859
                    break;
                case 3: 
                    precio = 578
                    break;
                case 4:
                    precio = 238
                    break;
                default:
                    alert ("Opción no valida")
                    return
            }
            let cantidad = parseInt(prompt("Cúantos libros vas a llevar"))
            let TotalVenta = (cantidad * precio * IVA)
            alert (`El total a pagar del libro ${fantasia} es: ${TotalVenta} \n Gracias por tú compra`)
            otraCompra = confirm("¿Quiéres seguir comprando?")
            Total += TotalVenta
        }
        alert (`El total de todas las compras es: ${Total}`)
    }
                                                                //CIENCIA-FICCION

    function importeCienciaFiccion(){
        let otraCompra = true
        while (otraCompra) {
            let ciencia = parseInt(prompt ("Los libros de ciencia-ficción qué manejamos son:\n 1. Dune - $449 \n 2. Un mundo feliz - $269 \n 3. El problema de los tres cuerpos - $482 \n 4. 1984 - $248 \n ¿Cuál libro deseas comprar?"))
            let precio
            switch(ciencia){
                case 1:
                    precio = 449
                    break;
                case 2:
                    precio = 269
                    break;
                case 3: 
                    precio = 482
                    break;
                case 4:
                    precio = 248
                    break;
                default:
                    alert ("Opción no valida")
            }

            let cantidad = parseInt(prompt("Cúantos libros vas a llevar"))
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA);
            alert (`El total a pagar del libro ${ciencia} es: ${TotalVenta} \n Gracias por tú compra`)
            otraCompra = confirm("¿Quiéres seguir comprando?")
            Total += TotalVenta
        }
        alert (`El total de todas las compras es: ${Total}`)    
    }

                                                            //AVENTURAS
    function importeAventuras(){
        const libros = [
            { titulo: "La isla del tesoro", precio: 248 },
            { titulo: "Robinson Crusoe", precio: 198 },
            { titulo: "La vuelta al mundo en 80 dias", precio: 321 },
            { titulo: "Los tres mosqueteros", precio: 364 },
        ];

        let otraCompra = true;
        let Total = 0;

        while (otraCompra) {
          // Mostrar lista de libros y precios
            let mensaje = "Los libros de aventuras que manejamos son:\n";
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`;
            }
            let aventura;
            do{
                aventura= parseInt(prompt(mensaje + "¿Cuál libro deseas comprar?"));
                if (!/^\d+$/.test(aventura)){
                    alert ("Opción invalida. Inserte un número")
                }
                else{
                    if (aventura < 1 || aventura > libros.length){
                        alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length);
                    }
                }
            }
            while (!/^\d+$/.test(aventura) || aventura < 1 || aventura > libros.length);

                // Obtener el precio del libro seleccionado
                let precio = libros[aventura - 1].precio;
                if (!precio) {
                    alert("Opción no válida");
                    continue; // Volver a preguntar
                }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"));
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA);
                alert(`El total a pagar del libro ${aventura} es: ${TotalVenta} \n Gracias por tu compra`);
            otraCompra = confirm("¿Quieres seguir comprando?");
            Total += TotalVenta;
        }
            alert(`El total de todas las compras es: ${Total}`);
    }   

                                                    //TERROR

    function importeTerror(){
        let otraCompra = true
        while (otraCompra) {
        let terror = parseInt(prompt("Los libros de terror y misterio qué manejamos son:\n 1. it - $372 \n 2. El resplandor - $668 \n 3. Drácula - $439 \n 4. El otro - $524 \n ¿Cuál libro deseas comprar?"))
        let precio
        switch(terror){
            case 1:
                precio = 372
                break;
            case 2:
                precio = 668
                break;
            case 3: 
                precio = 439
                break;
            case 4:
                precio = 524
                break;
            default:
                alert ("Opción no valida")
        }

            let cantidad = parseInt(prompt("Cúantos libros vas a llevar"))
            let TotalVenta = (cantidad * precio * IVA)
            alert (`El total a pagar del libro ${terror} es: ${TotalVenta} \n Gracias por tú compra`)
            otraCompra = confirm("¿Quiéres seguir comprando?")
            Total += TotalVenta
        }
        alert (`El total de todas las compras es: ${Total}`)
    }

                                                        //ROMANCE

    function importeRomance(){
        let otraCompra = true
        while (otraCompra) {
            let romance = parseInt(prompt("Los libros de romance qué manejamos son:\n 1. Orgullo y prejuicio - $243 \n 2. Cumbres borrascosas - $322 \n 3. Como agua para chocolate - $231 \n 4. El amor en los tiempos del cólera - $313"))
            let precio
            switch(romance){
                case 1:
                    precio = 243
                    break;
                case 2:
                    precio = 322
                    break;
                case 3: 
                    precio = 231
                    break;
                case 4:
                    precio = 313
                    break;
                default:
                    alert ("Opción no valida")
            }

            let cantidad = parseInt(prompt("Cúantos libros vas a llevar"))
            let TotalVenta = (cantidad * precio * IVA)
            alert (`El total a pagar del libro ${romance} es: ${TotalVenta} \n Gracias por tú compra`)
            otraCompra = confirm("¿Quiéres seguir comprando?")
            Total += TotalVenta
        }
        alert (`El total de todas las compras es: ${Total}`)
    }

                                                            //MITOLOGIA

    function importeMitologia(){
        let otraCompra = true
        while (otraCompra) {
            let mitologia = parseInt(prompt("Los libros de mitologia qué manejamos son:\n 1. Dioses y heroes de la mitologia Griega - $323 \n 2. Los mitos griegos - $402 \n 3. Dioses y heroes de la antigua Grecia - $199 \n 4. Mitologia griega y romana - $290"))
            let precio
            switch(mitologia){
                case 1:
                    precio = 323
                    break;
                case 2:
                    precio = 402
                    break;
                case 3: 
                    precio = 199
                    break;
                case 4:
                    precio = 290
                    break;
                default:
                    alert ("Opción no valida")
            }

            let cantidad = parseInt(prompt("Cúantos libros vas a llevar"))
            let TotalVenta = (cantidad * precio * IVA)
            alert (`El total a pagar del libro ${mitologia} es: ${TotalVenta} \n Gracias por tú compra`)
            otraCompra = confirm("¿Quiéres seguir comprando?")
            Total += TotalVenta
        } 
        alert (`El total de todas las compras es: ${Total}`)
    }
