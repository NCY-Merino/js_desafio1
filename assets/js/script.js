precio = 400000;
cantidad = 0;
valorTotal = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

valorTotalSpan = document.querySelector(".valor-total");
valorTotalSpan.innerHTML = valorTotal;

function sumar() {
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
    total();
}

function restar() {
    //Para que no pueda comprar -1
    if(cantidad >= 1) {
        cantidad = cantidad - 1;
    }
    cantidadSpan.innerHTML = cantidad;
    total();
}

function total() {
    valorTotal = precio * cantidad;
    valorTotalSpan.innerHTML = valorTotal;
}