

// Crear nodo de tipo Elemento, etiqueta p
/* let container = document.createElement("div"); */
// Insertar HTML interno
/* container.innerHTML = "<h1>IINICIA SESIÓN</h1>"; */
// Añadir el nodo Element como hijo de body
/* document.main.append(contenedor); */

//CODIGO HTML DE REFERENCIA
/* <div id="contenedor"></div>  */
//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML internoS
container.innerHTML = "<h3> Inicia Sesión</h3>";
console.log(container.innerHTML);
// cambio el atributo class
container.className = "paginaprincipal contenedorhijo"
/* class="pagina-principal contenedorhijo" */
/* class="contenedortexto" */
//Resultado en el DOM
/* <div id=”contenedor” class=“container row”>
    <h2>Hola mundo!</h2>
</div> */


/* texto.getElementById ("change", () => {
    return (texto.value)
})
texto.getElementById ("input", () => {
    let contenido =(texto.value);
    
}) */

class Cliente {
    constructor(nombre, correo, contrasena) {
        this.nombre = nombre
        this.correo = correo;
        this.contrasena = contrasena;

    }

    bienvenida (){
        console.log("Bienvenido", this,nombre);
    }

}

const arrayClientes = [];

arrayClientes.forEach (cliente => console.log("Hola", cliente ));

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreUsuario = document.getElementById("nombreUsuario");
    const nombreCorreo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");

/*     console.log(`El cliente ingresado es ${nombre}`); 
 */
    const cliente = new Cliente(nombreUsuario.value, nombreCorreo.value, contrasena.value);
    arrayClientes.push(cliente);

    console.log(arrayClientes);

    formulario.reset ();

})


