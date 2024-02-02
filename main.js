// let productos = [
//     { id: 1, nombre: "RAZA", precio: 2400 },
//     { id: 2, nombre: "ROYAL", precio: 3400 },
//     { id: 3, nombre: "EUKANUBA", precio: 6400 },
//     { id: 4, nombre: "EXCELENT", precio: 4300 },
//     { id: 5, nombre: "PREMIUM", precio: 8000 },
//     { id: 6, nombre: "CAT CHOW", precio: 3700 },
//     { id: 7, nombre: "PRO PLAN", precio: 5900 },
// ];
// document.addEventListener("DOMContentLoaded", function(){
// const encontrar = (nombre) => {
//     let productoEncontrado;
//     for (const producto of productos) {
//         if (nombre.toUpperCase().includes(producto.nombre)) {
//             productoEncontrado = producto;
//             break;
//         }
//     };
//     if (productoEncontrado) {
//         alert(`Nombre: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}`);
//     } else {
//         alert("No se ha encontrado el producto, intente de nuevo");
//     }
// };

// let nombre = prompt("Ingrese el producto el cual quiere conocer el precio");

// if (nombre) {
//     encontrar(nombre.toUpperCase());
// } else {
//     alert("No se ha encontrado el producto, intente de nuevo");
// };
// const filtrar = (precio) => {
//     let productosFiltrados = productos.filter(producto => producto.precio < precio);
//     if (productosFiltrados.length > 0) {
//         alert(`Productos con precio menor a $${precio}` +
//             productosFiltrados.map(producto => `\n Nombre: ${producto.nombre}\nPrecio: $${producto.precio}`).join('\n'));
//     } else {
//         alert(`No se ha encontrado productos con precio menor a $${precio}`);
//     }
// };

// let precio = prompt("Ingrese el precio maximo");
// if (precio) {
//     filtrar(parseFloat(precio));
// } else {
//     alert("No se ha ingresado un precio real, Por favor intente de nuevo");
// }
// })

//Funcion orden superior
//No cobrar envio si la compra supera los $4500
const envio = (n) => {
    return (m) => m > n;
};
let precio_envio = envio(4500);

console.log(precio_envio(499));
