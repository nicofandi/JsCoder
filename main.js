const productos = [
    { id: 1, nombre: "RAZA", precio: 2400 },
    { id: 2, nombre: "ROYAL", precio: 3400 },
    { id: 3, nombre: "EUKANUBA", precio: 6400 },
    { id: 4, nombre: "EXCELENT", precio: 4300 },
    { id: 5, nombre: "PREMIUM", precio: 8000 },
    { id: 6, nombre: "CAT CHOW", precio: 3700 },
    { id: 7, nombre: "PRO PLAN", precio: 5900 },
];

const tarjetas = document.querySelectorAll('.tarjeta');
tarjetas.forEach((tarjeta, index) => {
    const precioTexto = `\nPrecio: $${productos[index].precio}`;
    tarjeta.querySelector('p').textContent += precioTexto;
    const botonQuitar = document.createElement('button');
    botonQuitar.textContent = 'Quitar';
    botonQuitar.addEventListener('click', () => confirmarQuitarProducto(index));
    tarjeta.appendChild(botonQuitar);
    botonQuitar.style.backgroundColor = "#FF0000";
    botonQuitar.style.color = "#FFFFFF";
    botonQuitar.style.border = "1px solid #000000";
    botonQuitar.style.padding = "5px 10px";
    botonQuitar.style.borderRadius = "5px";
});

function confirmarQuitarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length <= index || !carrito[index]) {
        Swal.fire({
            title: 'Producto no encontrado',
            text: 'El producto que intenta quitar no está en el carrito.',
            icon: 'error',
        });
        return;
    }
    Swal.fire({
        title: '¿Seguro que quieres quitar este producto del carrito?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            quitarProducto(index);
        }
    });
}
function quitarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito.forEach((producto, i) => {
        producto.index = i;
    });

    actualizarCantidadCarrito();
    const cantidadCarrito = carrito.length;
    if (cantidadCarrito >= 2) {
        actualizarPrecioTotal();
    }
}
const encontrar = (nombre) => {
    let productoEncontrado = productos.find(producto => nombre.toUpperCase().includes(producto.nombre));
    if (productoEncontrado) {
        Swal.fire({
            title: `Nombre: ${productoEncontrado.nombre}\nPrecio: $${productoEncontrado.precio}`,
            showCancelButton: true,
            confirmButtonText: "Agregar al carrito",
        }).then((result) => {
            if (result.isConfirmed) {
                agregarAlCarrito(productoEncontrado);
                actualizarCantidadCarrito(); 
                if (JSON.parse(localStorage.getItem('carrito')).length >= 2) {
                    actualizarPrecioTotal();
                }
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
};

const botonEnviar = document.getElementById('btnEnviar');
botonEnviar.addEventListener("click", function() {
    const nombreProducto = document.getElementById('id_productos').value;
    encontrar(nombreProducto);
});

const actualizarPrecioTotal = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let precioTotal = 0;
    carrito.forEach(producto => {
        precioTotal += producto.precio;
    });
    document.getElementById('precio-total').textContent = `$${precioTotal.toFixed(2)}`;
};

const actualizarCantidadCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cantidadCarrito = carrito.length;
    const botonCarrito = document.getElementById('boton-carrito');
    botonCarrito.textContent = cantidadCarrito > 0 ? cantidadCarrito : '';
    botonCarrito.addEventListener('click', () => {
            let mensaje = `Cantidad de productos en el carrito: ${cantidadCarrito}\n\n`;
            mensaje += "Productos en el carrito:\n";
            carrito.forEach(producto => {
                mensaje += `${producto.nombre}: $${producto.precio}\n`;
            });

            if (cantidadCarrito >= 2) {
                let precioTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
                mensaje += `\nPrecio total del carrito: $${precioTotal.toFixed(2)}`;
            }

            Swal.fire(mensaje);
        });
    };
    const botonesComprar = document.querySelectorAll('.tarjeta button');
    botonesComprar.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            encontrar(productos[index].nombre.toLowerCase());
        });
    }); 
document.addEventListener("DOMContentLoaded", function() {
    const contenedorComentarios = document.getElementById("contenedor-comentarios");
    const fetchComments = fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json());
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Timeout al cargar los comentarios');
        }, 5000);
    });
    Promise.race([fetchComments, timeoutPromise])
        .then(data => {
            const comentariosHTML = data.map(comentario => `
                <div class="comentario">
                    <h3>${comentario.name}</h3>
                    <p>${comentario.body}</p>
                </div>
            `).join('');
            contenedorComentarios.innerHTML = comentariosHTML;
        })
        .catch(error => {
            console.error('Error al cargar los comentarios, Por favor intente luego:', error);
        });
});

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('carrito');
});
actualizarCantidadCarrito(); 