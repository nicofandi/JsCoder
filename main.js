const productos = [
    { id: 1, nombre: "RAZA", precio: 2400 },
    { id: 2, nombre: "ROYAL", precio: 3400 },
    { id: 3, nombre: "EUKANUBA", precio: 6400 },
    { id: 4, nombre: "EXCELENT", precio: 4300 },
    { id: 5, nombre: "PREMIUM", precio: 8000 },
    { id: 6, nombre: "CAT CHOW", precio: 3700 },
    { id: 7, nombre: "PRO PLAN", precio: 5900 },
];
const encontrar = (nombre) => {
    let productoEncontrado = productos.find(producto => nombre.toUpperCase().includes(producto.nombre));
    if (productoEncontrado) {
        Swal.fire({
            title: `Nombre: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}`,
            showCancelButton: true,
            confirmButtonText: "Agregar al carrito",
        }).then((result) => {
            if (result.isConfirmed) {
                actualizarCantidadCarrito();
                agregarAlCarrito(productoEncontrado);
            }
        });
    } else {
        Swal.fire({
            title: `No se ha encontrado el producto, intente de nuevo`,
            icon: 'error',
        });
    }
};

const agregarAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    Swal.fire({
        title: `Se agregó ${producto.nombre} al carrito por $${producto.precio}`,
        icon: 'success',
    });
};

const botonEnviar = document.querySelector('button');
botonEnviar.addEventListener("click", function() {
    const nombreProducto = document.getElementById('id_productos').value;
    encontrar(nombreProducto);
});
let precioTotal = 0;

const actualizarCantidadCarrito = () => {
    document.addEventListener("DOMContentLoaded", function() {
        actualizarCantidadCarrito();
    });
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cantidadCarrito = carrito.length;
    const boton = document.createElement('button');
    boton.textContent = cantidadCarrito;
    boton.classList.add('cantidad-carrito');
    boton.addEventListener('click', () => {
        alert(`Cantidad en el carrito: ${precioTotal.toFixed(2)}`);
    });
    const body = document.querySelector('body');
    body.appendChild(boton);
};

const actualizarPrecioTotal = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    precioTotal = 0; // Reiniciar el precio total cada vez que se actualice
    carrito.forEach(producto => {
        precioTotal += producto.precio;
    });
    alert(`Precio total del carrito: $${precioTotal.toFixed(2)}`);
};




// let precio = prompt("Ingrese el precio maximo");
// if (precio) {
//     filtrar(parseFloat(precio));
// } else {
//     alert("No se ha ingresado un precio real, Por favor intente de nuevo");
// }
// })

//Funcion orden superior
//No cobrar envio si la compra supera los $4500
// const envio = (n) => {
//     return (m) => m > n;
// };
// let precio_envio = envio(4500);

// console.log(precio_envio(4599));
// Generar  numero random entre 20 y 30
// console.log(Math.round(Math.random()*10+20));

// boton.addEventListener("click", () => {
//     Swal.fire({
//         title: "Ingrese le nombre del producto a buscar",
//         input: "text",
//         showCancelButton: true,
//         confirmButtonText: "Confirmar",
//       }).then((result) => {
//         const producto = productos.find((item) => item.nombre === result.value);
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: `El producto ${result.value} se encuentra en stock`,
//           });
//         }
//       });
//     });