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
if (confirm (`Hola ${usuario} \n ¿Quieres qué te mostremos diferentes generos de libros?`)== false){
    alert ("Gracias por su visita")
}
    const IVA = 1.16 
    let Total = 0

eleccion= parseInt((prompt("Estos son nuestros generos: \n 1. Fantasia \n 2. Ciencia-ficción \n 3. Aventuras \n 4. Terror y misterio \n 5. Romántica \n 6. Mitologia \n Elige una categoria: ")))

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
    }

    function calculoTotalVenta(cantidad, precio, IVA){
        return cantidad * precio * IVA;
    }
                                                            //FANTASIA
    function importeFantasia(){
        const libros = [
            { titulo: "El nombre del viento", precio: 520 },
            { titulo: "El señor de los anillos (trilogia)", precio: 859 },
            { titulo: "Los jardines de la luna", precio: 578 },
            { titulo: "La viajera del tiempo", precio: 238 },
        ];

        let otraCompra = true;
        let Total = 0;

        while (otraCompra) {
            // Mostrar lista de libros y precios
            let mensaje = "Los libros de Fantasia que manejamos son:\n"
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`;
            }
            let fantasia;
            var intentos = 3
            do{
                fantasia= prompt(mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                    if (fantasia === null){
                        alert ("Compra cancelada")
                        break
                    }
                    var fantasiaValida = false
                        do{
                            if (!/^\d+$/.test(fantasia)){
                                alert ("Opción invalida. Inserte un número")
                            }
                            else if (fantasia < 1 || fantasia > libros.length){
                                    alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length);
                            }
                            else{
                                fantasia = parseInt(fantasia)
                                fantasiaValida = true
                            }
                            intentos--
                                if (intentos === 0){
                                alert ("Numero maximo de intentos alcanzado. Compra cancelada")
                                break
                            }
                            if (!fantasiaValida){
                                fantasia = prompt (mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                            }
                        } while (intentos >= 0 && !fantasiaValida)
                        if (fantasiaValida){
                            break
                        }
            } while (fantasia !== null)
            if (fantasia === null){
                alert ("Compra cancelada")
            }
            // Obtener el precio del libro seleccionado
            let precio = libros[fantasia - 1].precio;
            if (!precio) {
                alert("Opción no válida");
                continue; // Volver a preguntar
            }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"));
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA);
                alert(`El total a pagar del libro ${fantasia} es: ${TotalVenta.toFixed(2)} `);
            otraCompra = confirm("¿Quieres seguir comprando?");
            Total += TotalVenta;
        }
            alert(`El total de todas las compras es: ${Total.toFixed(2)} \n Gracias por tu compra`);
    }
                                //CIENCIA-FICCION
    function importeCienciaFiccion(){
        const libros = [
            { titulo: "Dune", precio: 449 },
            { titulo: "Un mundo feliz", precio: 269 },
            { titulo: "El problema de los tres cuerpos", precio: 482 },
            { titulo: "1984", precio: 248 },
        ];

        let otraCompra = true;
        let Total = 0;

        while (otraCompra) {
            // Mostrar lista de libros y precios
            let mensaje = "Los libros de Ciencia-Ficción que manejamos son:\n"
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`;
            }
            let ciencia;
            var intentos = 3
            do{
                ciencia= prompt(mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                    if (ciencia === null){
                        alert ("Compra cancelada")
                        break
                    }
                    var cienciaValida = false
                        do{
                            if (!/^\d+$/.test(ciencia)){
                                alert ("Opción invalida. Inserte un número")
                            }
                            else if (ciencia < 1 || ciencia > libros.length){
                                    alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length);
                            }
                            else{
                                ciencia = parseInt(ciencia)
                                cienciaValida = true
                            }
                            intentos--
                                if (intentos === 0){
                                alert ("Numero maximo de intentos alcanzado. Compra cancelada")
                                break
                            }
                            if (!cienciaValida){
                                ciencia = prompt (mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                            }
                        } while (intentos >= 0 && !cienciaValida)
                        if (cienciaValida){
                            break
                        }
            } while (ciencia !== null)
            if (ciencia === null){
                alert ("Compra cancelada")
            }
                // Obtener el precio del libro seleccionado
                let precio = libros[ciencia - 1].precio;
                if (!precio) {
                    alert("Opción no válida");
                    continue; // Volver a preguntar
                }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"));
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA);
                alert(`El total a pagar del libro ${ciencia} es: ${TotalVenta.toFixed(2)} `);
            otraCompra = confirm("¿Quieres seguir comprando?");
            Total += TotalVenta;
        }
            alert(`El total de todas las compras es: ${Total.toFixed(2)} \n Gracias por tu compra`);
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
            let mensaje = "Los libros de Fantasia que manejamos son:\n"
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`;
            }
            let aventura;
            var intentos = 3
            do{
                aventura= prompt(mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                    if (aventura === null){
                        alert ("Compra cancelada")
                        break
                    }
                    var aventuraValida = false
                        do{
                            if (!/^\d+$/.test(aventura)){
                                alert ("Opción invalida. Inserte un número")
                            }
                            else if (aventura < 1 || aventura > libros.length){
                                    alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length);
                            }
                            else{
                                aventura = parseInt(aventura)
                                aventuraValida = true
                            }
                            intentos--
                                if (intentos === 0){
                                alert ("Numero maximo de intentos alcanzado. Compra cancelada")
                                break
                            }
                            if (!aventuraValida){
                                aventura = prompt (mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                            }
                        } while (intentos >= 0 && !aventuraValida)
                        if (aventuraValida){
                            break
                        }
            } while (aventuraValida !== null)
            if (aventura === null){
                alert ("Compra cancelada")
            }
                // Obtener el precio del libro seleccionado
                let precio = libros[aventura - 1].precio;
                if (!precio) {
                    alert("Opción no válida");
                    continue; // Volver a preguntar
                }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"));
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA);
                alert(`El total a pagar del libro ${aventura} es: ${TotalVenta.toFixed(2)} `);
            otraCompra = confirm("¿Quieres seguir comprando?");
            Total += TotalVenta;
        }
            alert(`El total de todas las compras es: ${Total.toFixed(2)} \n Gracias por tu compra`);
    }
                                                        //TERROR
    function importeTerror(){
        const libros = [
            { titulo: "It", precio: 372 },
            { titulo: "El resplandor", precio: 668 },
            { titulo: "Drácula", precio: 439 },
            { titulo: "El otro", precio: 524 },
        ];

        let otraCompra = true;
        let Total = 0;

        while (otraCompra) {
            // Mostrar lista de libros y precios
            let mensaje = "Los libros de Terror que manejamos son:\n"
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`;
            }
            let terror
            var intentos = 3
            do{
                terror= prompt(mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                    if (terror === null){
                        alert ("Compra cancelada")
                        break
                    }
                    var terrorValida = false
                        do{
                            if (!/^\d+$/.test(terror)){
                                alert ("Opción invalida. Inserte un número")
                            }
                            else if (terror < 1 || terror > libros.length){
                                    alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length)
                            }
                            else{
                                terror = parseInt(terror)
                                terrorValida = true
                            }
                            intentos--
                                if (intentos === 0){
                                alert ("Numero maximo de intentos alcanzado. Compra cancelada")
                                break
                            }
                            if (!terrorValida){
                                terror = prompt (mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                            }
                        } while (intentos >= 0 && !terrorValida)
                        if (terrorValida){
                            break
                        }
            } while (terror !== null)
            if (terror === null){
                alert ("Compra cancelada")
            }
                // Obtener el precio del libro seleccionado
                let precio = libros[terror - 1].precio
                if (!precio) {
                    alert("Opción no válida")
                    continue // Volver a preguntar
                }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"))
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA)
                alert(`El total a pagar del libro ${terror} es: ${TotalVenta.toFixed(2)} `)
            otraCompra = confirm("¿Quieres seguir comprando?")
            Total += TotalVenta
        }
            alert(`El total de todas las compras es: ${Total.toFixed(2)} \n Gracias por tu compra`)
    }
                                                            //ROMANCE
    function importeRomance(){
        const libros = [
            { titulo: "Orgullo y prejuicio", precio: 243 },
            { titulo: "Cumbres borrascosas", precio: 322 },
            { titulo: "Como agua para chocolate", precio: 231 },
            { titulo: "El amor en los tiempos del cólera", precio: 313 },
        ];

        let otraCompra = true
        let Total = 0

        while (otraCompra) {
            // Mostrar lista de libros y precios
            let mensaje = "Los libros de Romance que manejamos son:\n"
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`
            }
            let romance
            var intentos = 3
            do{
                fantasia= prompt(mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                    if (romance === null){
                        alert ("Compra cancelada")
                        break
                    }
                    var romanceValida = false
                        do{
                            if (!/^\d+$/.test(romance)){
                                alert ("Opción invalida. Inserte un número")
                            }
                            else if (romance < 1 || romance > libros.length){
                                    alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length)
                            }
                            else{
                                romance = parseInt(romance)
                                romanceValida = true
                            }
                            intentos--
                                if (intentos === 0){
                                alert ("Numero maximo de intentos alcanzado. Compra cancelada")
                                break
                            }
                            if (!romanceValida){
                                romance = prompt (mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                            }
                        } while (intentos >= 0 && !romanceValida)
                        if (romanceValida){
                            break
                        }
            } while (romance !== null)
            if (romance === null){
                alert ("Compra cancelada")
            }
                // Obtener el precio del libro seleccionado
                let precio = libros[romance - 1].precio
                if (!precio) {
                    alert("Opción no válida")
                    continue // Volver a preguntar
                }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"))
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA)
                alert(`El total a pagar del libro ${romance} es: ${TotalVenta.toFixed(2)} `)
            otraCompra = confirm("¿Quieres seguir comprando?")
            Total += TotalVenta
        }
            alert(`El total de todas las compras es: ${Total.toFixed(2)} \n Gracias por tu compra`)
    }
                                                                //MITOLOGIA

    function importeMitologia(){
        const libros = [
            { titulo: " Dioses y heroes de la mitologia Griega", precio: 323 },
            { titulo: "Los mitos griegos", precio: 402 },
            { titulo: "Dioses y heroes de la antigua Grecia", precio: 199 },
            { titulo: "Mitologia griega y romana", precio: 290 },
        ]

        let otraCompra = true
        let Total = 0

        while (otraCompra) {
            // Mostrar lista de libros y precios
            let mensaje = "Los libros de Mitologia que manejamos son:\n"
            for (let i = 0; i < libros.length; i++) {
                mensaje += `${i+1}. ${libros[i].titulo} - $${libros[i].precio}\n`
            }
            let Mitologia
            var intentos = 3
            do{
                Mitologia= prompt(mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                    if (Mitologia === null){
                        alert ("Compra cancelada")
                        break
                    }
                    var MitologiaValida = false
                        do{
                            if (!/^\d+$/.test(Mitologia)){
                                alert ("Opción invalida. Inserte un número")
                            }
                            else if (Mitologia < 1 || Mitologia > libros.length){
                                    alert ("Opción invalida. Ingresar un número entre 1 y " + libros.length)
                            }
                            else{
                                Mitologia = parseInt(Mitologia)
                                MitologiaValida = true
                            }
                            intentos--
                                if (intentos === 0){
                                alert ("Numero maximo de intentos alcanzado. Compra cancelada")
                                break
                            }
                            if (!MitologiaValida){
                                Mitologia = prompt (mensaje + "¿Cuál libro deseas comprar? (" + intentos + " intentos restantes)")
                            }
                        } while (Mitologia >= 0 && !MitologiaValida)
                        if (MitologiaValida){
                            break
                        }
            } while (Mitologia !== null)
            if (Mitologia === null){
                alert ("Compra cancelada")
            }
                // Obtener el precio del libro seleccionado
                let precio = libros[Mitologia - 1].precio
                if (!precio) {
                    alert("Opción no válida")
                    continue // Volver a preguntar
                }

            let cantidad = parseInt(prompt("¿Cuántos libros vas a llevar?"))
            let TotalVenta = calculoTotalVenta(cantidad, precio, IVA)
                alert(`El total a pagar del libro ${Mitologia} es: ${TotalVenta.toFixed(2)} `)
            otraCompra = confirm("¿Quieres seguir comprando?")
            Total += TotalVenta
        }
            alert(`El total de todas las compras es: ${Total.toFixed(2)} \n Gracias por tu compra`)
    }
