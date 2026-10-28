

let cantidad = document.getElementById("cantidad");
let botonComprar = document.getElementById("btnComprar");
 
botonComprar.addEventListener("click", function() {
 
    let precio = 80;
    let cantidadProducto = Number(cantidad.value);
 
    let total = precio * cantidadProducto;
 
    alert("Producto agregado al carrito.\nTotal: Bs " + total);
 
});

const boton = document.getElementById("btnAgregar");
boton.addEventListener("click", function() {
    alert("Producto agregado al carrito");
});


let titulo = document.getElementById("titulo");
let boton2 = document.getElementById("btnCambiar");
 
boton2.addEventListener("click", function() {
 
    titulo.textContent = "Nuestros productos";
 
});


let nombre = document.getElementById("nombre");
let boton3 = document.getElementById("btnEnviar");
 
boton3.addEventListener("click", function() {
 
    if (nombre.value === "") {
 
        alert("Debe ingresar su nombre");
 
    } else {
 
        alert("Datos enviados correctamente");
 
    }
    
 
});



