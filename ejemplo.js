let precioUnitario = 100;
let seguirComprando = true;

while (seguirComprando) {
  let cantidad = prompt("Ingrese la cantidad que desea comprar:");
  let total = precioUnitario * cantidad;
  console.log("El total a pagar es: " + total);
  
  let respuesta = prompt("¿Desea comprar de nuevo? (s/n)").toLowerCase();
  seguirComprando = (respuesta === "s");
}

console.log("Gracias por su compra");
