alert(`BIENVENIDA/O A SPA BONN`);

/* FUNCION 1 */
/* TOTAL A PAGAR */
function mostrarResultados() {
  alert(`Servicios seleccionados:
  ${sumaSemi} Semipermanente
  ${sumaAcri} Acrilico
  ${sumaCapp} Capping
  ${sumaMasajes} Masajes
  el total de los servicios es de $${sumartotal}.`);

  /* METODO DE PAGO */
  /* CICLOS */
  while (sumartotal != 0) {
    medioDePago = prompt(`
      Seleccione medio de pago:
      1 para efectivo 
      2 para tarjeta de debito
      3 para tarjeta de credito con interes del 10% 
      4 para tarjeta de credito en 3 cuotas con 15% de interes`);

    if (
      medioDePago == 1 ||
      medioDePago == 2 ||
      medioDePago == 3 ||
      medioDePago == 4
    ) {
      switch (medioDePago) {
        case "1":
          if (sumartotal >= 18000) {
            sumartotal = (sumartotal * 0.9).toFixed(2);
            alert(`Tiene un 10% de descuento en sus servicios y debera pagar $${sumartotal}.
            Que tenga un buen dia!`);
          } else {
            alert(`Debera pagar $${sumartotal}.
            Que tenga un buen dia!`);
          }

          break;
        case "2":
          sumartotal = sumartotal.toFixed(2);
          alert(`Debera pagar $${sumartotal}.
            Que tenga un buen dia!`);
          break;
        case "3":
          total = (sumartotal * 1.1).toFixed(2);

          alert(`Deberas pagar $${total}.
            Que tenga un buen dia!`);
          break;
        case "4":
          total = (sumartotal * 1.15).toFixed(2);
          cuotas = (total / 3).toFixed(2);
          alert(`Deberas pagar 3 cuotas de $${cuotas}.
             El total seria de $${total}.
            Que tenga un buen dia!`);
          break;
      }
      break;
    } else {
      alert("Debe ingresar un medio de pago valido");
      continue;
    }
  }
}

/*  NO LO PUEDO HACER FUNCIONAR EL CATALOGO.
EN LUGAR DE APARECERME EN NOMBRE DEL PRODUCTO Y EL PRECIO ME APARECEN MUCHAS ,,,,,,,, */
function mostrarCatalogo(array) {
  const produtoNombre = array.map((producto) => {
    producto.nombre;
  });
  const productoPrecio = catalogoProductos.map((elemento) => {
    elemento.precio;
  });
  alert(
    `Nuestros productos disponibles son estos: ${produtoNombre} y su precio es $${productoPrecio}`
  );
}
/* SEGUNDA FORMA QUE INTENTE PARA VER EL CATALOGO, 
PERO ME MUESTRA 1 ALERT POR CADA PRODUCTO Y YO BUSCO QUE ME APAREZCA 1 PARA TODOS */
function mostrarCatalogo2(array) {
  array.forEach((producto) => {
    alert(
      `Nuetros productos disponibles son: ${producto.nombre} $${producto.precio}`
    );
  });
}
