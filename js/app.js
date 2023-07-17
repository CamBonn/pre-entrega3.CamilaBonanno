/* capturando nodos para el dom */
let turnos = document.getElementById("turnos");
let productos = document.getElementById("productos");
let buscar = document.getElementById("buscar");
let buscarBoton = document.getElementById("buscarBoton");
let carrrito = document.getElementById("carrrito");
let padre = document.getElementById("padre");
let serviciosPadre = document.getElementById("serviciosPadre");
let borrar = document.getElementById("borrar");
let verServicios = document.getElementById("turnos");
/* variables */
let sumartotal = 0;
let sumaSemi = 0;
let sumaAcri = 0;
let sumaCapp = 0;
let sumaMasajes = 0;
let medioDePago = 0;
let cuotas = 0;
let total = 0;
let compra = 0;
let precio = 0;
/* CLASS CONSTRUCTORA  */
class Servicios {
  constructor(id, titulo, precio, duracion, descripcion, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.duracion = duracion;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
class Productos {
  constructor(id, nombre, precio, disponibilidad, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.imagen = imagen;
  }
}
/* OBJETOS */
//Servicios
const servicio1 = new Servicios(
  1,
  "Semipermanente",
  4000,
  "1:30 hs",
  "Estética de manos. Esmaltado con línea Gel Color by O.P.I. Masaje de manos express.",
  "semiper.jpg"
);
const servicio2 = new Servicios(
  2,
  "Acrilicas",
  7500,
  "3:00 hs",
  "Extensiones con acrilico. Esmaltado semipermanente by OPI.",
  "acrilica.jpg"
);
const servicio3 = new Servicios(
  3,
  "Capping",
  5000,
  "2:00 hs",
  "Estética de manos. Kapping Pink Mask Esmaltado con línea Gel Color by O.P.I. Masaje de manos express. Ideal para mantener largas las uñas quebradizas.",
  "kapping.jpg"
);
const servicio4 = new Servicios(
  4,
  "Masajes",
  2400,
  "0:50 hs",
  "Mediante un toque suave y profundo, eliminamos la tensión muscular, y conectando con nuestra respiración, relajamos nuestra mente.",
  "masajes.jpg"
);
const servicio5 = new Servicios(
  5,
  "Pedicura",
  5000,
  "1:00hs",
  "Estética de pies. Esmaltado con GelColor by OPI. Masaje de pies express.",
  "pedicura.jpg"
);
const servicio6 = new Servicios(
  6,
  "Manicura Clasica",
  2600,
  "0:40hs",
  "Estética de manos. Esmaltado con línea clásica by O.P.I. Masaje de manos express.",
  "manicura.jpg"
);
//Productos
const producto1 = new Productos(
  1,
  "Esmalte tradicional",
  2000,
  true,
  "cuvage.jpg"
);
const producto2 = new Productos(2, "Crema de mano", 1500, true, "manos.jpg");
const producto3 = new Productos(
  3,
  "Crema facial para el dia",
  4500,
  true,
  "dia.jpg"
);
const producto4 = new Productos(
  4,
  "Perfume femenino",
  9000,
  true,
  "perfumemujer.jpg"
);
const producto5 = new Productos(
  5,
  "Perfume masculino ",
  8500,
  true,
  "perfumehombre.jpg"
);
const producto6 = new Productos(
  6,
  "Crema humectante para pies ",
  1500,
  true,
  "crema-pies.jpg"
);
const producto7 = new Productos(
  7,
  "Crema facial para la noche",
  5000,
  true,
  "noche.jpg"
);

/* ARRAYS VACIOS PARA PUSHEAR */
const serviciosOfrecer = [];
/* CARRITO */
const carrito = [];
//catalogo
const catalogoProductos = [];
// PUSHEANDO A LOS ARRAYS
//servicios
serviciosOfrecer.push(
  servicio1,
  servicio2,
  servicio3,
  servicio4,
  servicio5,
  servicio6
);
/* productos */
catalogoProductos.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7
);

/* Creando las card con DOM */
function servicios(array) {
  serviciosPadre.innerHTML = ``;
  for (let servicio of array) {
    let servicioNuevo = document.createElement("div");
    servicioNuevo.className = "col-md-6 col-lg-3 m-5";
    servicioNuevo.innerHTML = ` <div id="${servicio.id}" class="card" style="width: 18rem">
          <img src="img/${servicio.imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${servicio.titulo}</h5>
            <p class="card-text">
              ${servicio.descripcion}, este servicio tiene una duracion de ${servicio.duracion}
            </p>
            <p class="title">$${servicio.precio}</p>
            <button class="btn btn-success">Agregar al carrito</button>
          </div>
        </div>`;
    serviciosPadre.appendChild(servicioNuevo);
  }
}
/* prueba carrito */

function nuestroCatalogo(array) {
  padre.innerHTML = ``;
  for (let producto of array) {
    let productoNuevo = document.createElement("div");
    productoNuevo.className = "col-md-6 col-lg-3 m-5";
    productoNuevo.innerHTML = `<div id="${producto.id}" class="card" style="width: 18rem">
          <img src="img/${producto.imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">
              disponibilidad del producto ${producto.disponibilidad}
            </p>
            <p class="title">$${producto.precio}</p>
            <div id="hijo"></div>
            <button class="btn btn-success">Agregar al carrito</button>
          </div>
        </div>
    `;
    padre.appendChild(productoNuevo);
  }
}
/* Local Storage y eventos*/
productos.addEventListener("click", () => {
  nuestroCatalogo(catalogoProductos);
  localStorage.setItem("mostrandoCatalogo", true);
});
productos.addEventListener("dblclick", () => {
  padre.innerHTML = ``;
  localStorage.setItem("mostrandoCatalogo", false);
});
verServicios.addEventListener("click", () => {
  servicios(serviciosOfrecer);
  localStorage.setItem("mostrandoServicios", true);
});
turnos.addEventListener("dblclick", () => {
  serviciosPadre.innerHTML = ``;
  localStorage.setItem("mostrandoServicios", false);
});

/* SELECCIONAR SERVICIOS */
function agendarTurno() {
  while (true) {
    compra = prompt(`seleccione lo servicios que quiera realizarse:
1 para Semipermanente 
2 para Acrilicas 
3 para Capping 
4 para Masajes
0 si desea terminar de seleccionar`);

    if (compra === "0") {
      alert(`el total es : $${sumartotal}`);
      break;
    } else if (compra == 1) {
      precio = servicio1.precio;
      sumartotal += precio;
      sumaSemi += 1;
    } else if (compra == 2) {
      precio = servicio2.precio;
      sumartotal += precio;
      sumaAcri += 1;
    } else if (compra == 3) {
      precio = servicio3.precio;
      sumartotal += precio;
      sumaCapp += 1;
    } else if (compra == 4) {
      precio = servicio4.precio;
      sumartotal += precio;
      sumaMasajes += 1;
    } else {
      alert("opcion invalida, reintente");
      continue;
    }
    alert(`El servicio fue agregado correctamente`);
  }
}

/* Menu Inicial */
function menu() {
  let salirMenu = false;

  do {
    let opcionIngresada = parseInt(
      prompt(`Ingrese la opción deseada
      1 - Agendar un turno
      2 - Ver productos
      3 - Ver carrito
      0 - Salir del menu`)
    );
    switch (opcionIngresada) {
      case 1:
        agendarTurno();
        mostrarResultados();

        break;
      case 2:
        /* OPCION DEL CATALOGO INTERCAMBIAR LA FUNCION PARA VER EL ERROR */
        mostrarCatalogo2(catalogoProductos);
        break;
      case 3:
        verCarrito();
        break;
      case 0:
        console.log(`Gracias por utilizar nuestra app. Saludos!`);
        salirMenu = true;
        break;
      default:
        console.log("Opción no válida, ingrese alguna presente en el menu");
        break;
    }
  } while (!salirMenu);
}

//menu();
