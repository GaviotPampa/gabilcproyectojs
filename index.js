
///FOR
let comenzar = alert("Hola. Queres iniciar sesion?");

function bienvenida(comenzar) {

    let saludo = "Comencemos";
    alert(saludo);
}

bienvenida(comenzar)


let nameUsuario = prompt("Ingrese su Nombre de Usuario: ");

let passwordUsuario = parseInt(prompt("Ingrese su contraseña: 12345"));
const passwordCorrecto = 12345;

for (let i = 0; i < 3; i++) {
    if (passwordUsuario === passwordCorrecto) {
        alert(`Contraseña correcta. Bienvenido ${nameUsuario}`);
        break;
    }
    else if (passwordUsuario != passwordCorrecto) {
        alert("Contraseña Incorrecta. Volvé a ingresar tu contraseña");
        break;
    }
    else {
        passwordUsuario = parseInt(prompt("Contraseña incorrecta. Se acabaron sus intentos.Por favor intenta mas tarde"));
        break;
    }

}


//while - switch

function saludar(nameUsuario) {

    let mensaje = "Vamos por tus productos" + " " + nameUsuario;
    alert(mensaje);
}

saludar(nameUsuario)

//Preentrega 2

let productoSeleccionado = prompt("Ingresa el producto que queres buscar: \n esmalte  \n  perfume  \n  jabon  \n esmalteMetalizado \n  perfumeBvlgari");

function seleccionarProducto() {
    let productoSeleccionado = (prompt(esmalte, perfume, jabon, "esmalte Metalizado", "perfume Bvlgari").toUpperCase);

    console.log(Producto.find((producto) => producto.nombre === productoSeleccionado));

}
const eleccion = productoSeleccionado

productoSeleccionado = window.confirm((`Tu producto elegido es: ${productoSeleccionado} \n Si esta bien ingresa Aceptar \n Si no es el producto que querías ingresa: Cancelar`));

const eleccionConfirmar = window.confirm('Estas seguro? ');

if (eleccionConfirmar === true) {
    window.alert('Genial, sigamos.');
}
else if (eleccion != true) {
    alert("Elija nuevamente un producto");
}
else {
    window.alert('Cancelar');
}

/*** Contructor del Molde***/

class Producto {
    constructor(nombre, marca, caracteristica, precio, cantidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.caracteristica = caracteristica;
        this.precio = precio;
        this.cantidad = cantidad;

    }

    vender() {
        this.cantidad -= 1;//this.cantidad = this.cantidad -1;
    }
}

const productos = [];
productos.push(new Producto("esmalte", "Be", "celete", 329.99, 15));
productos.push(new Producto("esmalte", "Be", "rosa", 329.99, 10));
productos.push(new Producto("perfume", "Giorgio Armani", "Acqua", 27500, 5));
productos.push(new Producto("jabon", "Be Nature", "oliva", 500, 20));

console.log(productos);

for (const arrayProductos of productos) {
    console.log("Productos en Stock: ");
    console.log(arrayProductos);
}


//metodo push

let productosNuevos = ["Esmalte", "Perfume", "Jabón"];
console.log("Array nuevos productos");
console.log(productosNuevos.join(" "));

console.log("Agrego perfume : ");
productosNuevos.push(" Perfume-Bvlgary");
console.log(productosNuevos.join(" "));

//Metodo unshift(). 

console.log("Agrego Esmalte metalizado : ");
productosNuevos.unshift("Esmalte Metalizado ");
console.log(productosNuevos);

const esmalteMetalizado = new Producto("Esmalte Metalizado", "Be", 249.99, 10);
const perfumeBvlgari = new Producto("Perfume", "Bvlgari", 33850, 1);

let nombre = prompt("Ingrese el nombre del producto a agregar")
let identificador = false;

for (const producto of productos) {
    if (producto.nombre === nombre) {
        identificador = true;
    }
}

if (identificador) {
    alert("Producto agregado")
} else {
    alert("Producto No encontrado")
}


//** método REDUCE**/

const totalCarrito = productos.reduce((acumulador, productosNuevos) => acumulador + productosNuevos.precio, 0);

alert("Total del Carrito:");
alert(totalCarrito);


let entrada = prompt("¿Que medio de pago querés usar?: \n Tarjeta de credito \n debito \n efectivo \n mercado pagp \n tranferencia");

while (entrada != "ESC") {
    switch (entrada) {
        case "tarjeta de credito":
            alert("Hoy podes abonar hasta en 6 cuotas sin interés!");
            break;
        case "debito":
            alert("Podrás abonar en una cuota");
            break;
        case "efectivo":
            alert("Podrás abonar a través de Pagofácil o Rapipago en una cuota");
            break;
        case "mercado pago":
            alert("Podés abonar con todos los medios de pago que te brinda MercadoPago");
            break;
        case "transferencia":
            alert("Genial, tendrás un 15% de descuento en tu compra");
            break;
        default:
            alert("Tenemos todos los medios de pago disponibles.Elegí el tuyo!");
            break;

    }
}
entrada = prompt("Ingresa tu medio de pago");

/* let suma = operaciones (suma)
suma = prompt ("Gracias por tu compra"); */
/* function operaciones (operacion){
    if (operacion  >10000){
        return "Envio gratis"
    }
    else if (operacion  < 10000)
    return "El costo del envio es"
} */



/* function mayorQue (n){
    return m => m > n;
}

let mayorQueDiezMil = mayorQue (10000);
 */


//Método Includes()  retorna un booleano si lo encuentra. 

let booleanoPerfume = arrayProductosActuales.includes("Perfume");
console.log(booleanoPerfume);

jabon.vender();
console.log(jabon);

perfumeBvlgari.vender();
console.log(perfumeBvlgari);

const cantidad = 0
const sinStock = true
const stock = false

if (cantidad === 0) {
    console.log('Producto Agotado');
    console.log(sinStock);
}
else if (cantidad >= 1) {
    console.log('Hay Stock');

}


