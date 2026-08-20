let ultimaCompra = null;
let totalCompras = 0;

function comprar(nombreProducto) {
  ultimaCompra = nombreProducto;
  totalCompras++;
  document.getElementById('contadorCarrito').textContent = totalCompras;
}

function mostrarUltimaCompra() {
  if (ultimaCompra === null) {
    alert('Aún no has agregado nada al carrito.');
  } else {
    alert('El último producto agregado fue: ' + ultimaCompra);
  }
}