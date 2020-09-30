/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, 
podes continuar con otro de forma independiente. 
Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. 
Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd

        MALU PROGRESS  ==> COMPLET EXERCISES =   1 -  utilizo Alert 
                                                 2 -  posicion DOM - suscribo evento (addEvenListener) - Funciones (utilizo innerText)
                                                 3 -  posicion DOM - Funcion (utilizo innerText)
                                                 4 -  posicion DOM - suscribo evento (addEvenListener) - Funciones (utilizo innerText) - .value
                                                 5 -  Sumar  - Crear Div y creatElementos - utilizar appenChild - Funcion (sumar).
                                                 6 -  posicion DOM - Funciones (utilizo innerText - appendChild) - creo creo fragmentos y elementos.
                                                 7 -  (no me tomaba el appenchild) ----posicion DOM - Funciones (utilizo innerText - appendChild) - creo creo fragmentos y elementos - utilizo innerText - al evento le tomo el .value y  .target.
                                                 8 -  posicion DOM - Funciones (utilizo innerText - appendChild) - utilizo iteradores (condicionales) - LocalStorage - getItem.
                                                 9 -  (no me toma el innerHTML) - copiado.
                                                 
                        INCOMPLETE EXERCISES =  10 -  RECOPILA TODO LO VISTO + VALIDACION 
                                                 
                                         
                                                 
                                                 
                           

*/                         

/*
EJERCICIO - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd" OK!
*/
let saludo = ("Bievenidas/os al Maratón Guayerd");
alert (saludo)
/*
EJERCICIO - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el 
foco este puesto en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), 
borrar el contenido del div.
*/
//1-Posicionarme en el DOM
let ej2Nombre = document.querySelector("input.ej2-nombre");
let ej2Resultado = document.querySelector(".ej2-resultado"); //Se rompe lindo, no?

//2-Subscribirme a eventos
ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler);

//3-Funciones que responden a los eveventos
function focusHandler(e){
  ej2Resultado.innerText = "el input nombre tiene el foco";//innerText = Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
  
}

function blurHandler(e){
  ej2Resultado.innerText = "";
 
}

/*
EJERCICIO- 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3

*/
//1-Posicionarme en el DOM

const ej3Div = document.querySelector(".ej3-resultado");

//innerText = Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..."+ (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);

//3-Funciones que responden 

function mostrarSaludo(saludo, elemento){
  elemento.innerText = saludo;
}




/*
EJERCICIO- 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/

//1-Posicionarme en el DOM


let email4 = document.querySelector(".ej4-email");
let mensaje4 = document.querySelector(".ej4-mensaje");
let resultado4 = document.querySelector(".ej4-resultado");

let boton4 = document.querySelector(".ej4-enviar");

//2-Subscribirme a eventos

boton4.addEventListener("click", boton4Handler)//addEventListener = recibir de la plataforma web notificaciones de los eventos del DOM. 

function  boton4Handler(e){ // Handler = es el controlador sobre el evento.
  
  resultado4.innerText = `Email:${email4.value}, Mensaje:${mensaje4.value}`;
  email4.value = "";
  mensaje4.value = "";
}

/*
EJERCICIO - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
  
*/

  //1-Posicionarme en el DOM


  let resultado5 = document.querySelector(".ej5-resultado");
  

  // 2- En JS Creo dos input y el boton suma que lo incluyo en un div ( Creo estos elementos para no tocar el HTML).

  let newDiv = document.createElement("div");
  let inputA = document.createElement("input");
  let inputB = document.createElement("input");
  let btnSumar = document.createElement("button");
  btnSumar.innerText = "Sumar"; //innerText mostrará el valor tal como está e ignorará cualquier formato HTML que pueda incluirse

  // 3 - Inserto o añado un nuevo nodo dentro de la estructura DOM de un documento.

  newDiv.appendChild(inputA); //appendChild() Es uno de los métodos fundamentales de la programación web usando el DOM.
  newDiv.appendChild(inputB);
  newDiv.appendChild(btnSumar);
  resultado5.appendChild(newDiv); 
 

  // 4 - Suscribirme a Eventos

  btnSumar.addEventListener ("click", btnSumarHandler);

  //5 -Funciones que responden a los eveventos

    function btnSumarHandler(){

      numA = parseInt(inputA.value);;// parseInt = Convierte(parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
      numB = parseInt(inputB.value);

    // Pregunto a traves de un condicional

      
    if (isNaN(numA) || isNaN(numB) ){ // isNaN = Si no es un número el num1 y no es un número el num2 ejecuta algo.

        resultado5.innerText = "Ingreso erróneo"; // Innertext = muestra el valor que quiero mostrar.

      }else{
    let suma = numA + numB;
    resultado5.innerText = suma; 
  }
}


/*
EJERCICIO - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y 
crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let frag6 = new DocumentFragment(); // creo un nuevo fragmento para ser utilizado en una parte especifica del código.

//1-Posicionarme en el DOM

let selPaises = document.querySelector(".ej6-paises");
let selDiasSemana = document.querySelector(".ej6-diasSemana");

//2-Funciones que responden 

paises.forEach(function(pais){
  let option = document.createElement("option");
  option.innerText = pais; //innerText = Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
  frag6.appendChild(option); //appendChild() Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
});
selPaises.appendChild(frag6);

diasSemana.forEach(function(dia){
  let option = document.createElement("option");
  option.innerText = dia; //innerText = Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
  frag6.appendChild(option);//appendChild() Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
});
selDiasSemana.appendChild(frag6);

/*
EJERCICIO- 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando 
el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];


//Posicionarme en el DOM

let resultado7 = document.querySelector(".ej7-resultado");
let sel7 = document.querySelector(".momentos");

let fragment7 = new DocumentFragment(); // crear un nuevo fragmento para utilizar en una parte especifica del código

// funciones que responden

momento.forEach(function(mom){
  let option = document.createElement("option");// crear un elemento
  option.innerText = mom; //innerText = Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
  fragment7.appendChild(option);
});
sel7.appendChild(fragment7);

// suscribirme a eventos (escucho el evento)
sel7.addEventListener("change", sel7Handler); 

function sel7Handler(e){
  resultado7.innerText = e.target.value;
}


/*
EJERCICIO - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

//Posicionarme en el DOM

let input8 = document.querySelector("#password");
let btn8 = document.querySelector(".ej8 button");
let resul8 = document.querySelector(".ej8-resultado");

//suscribirme a eventos (escucho el evento)

btn8.addEventListener("click", btn8Handler);

// funciones que responden

function btn8Handler(){
  if (localStorage.getItem("password")===input8.value){
    resul8.innerText = "OK";
  }else{
    resul8.innerText = "Error";
  }
}


/*
EJERCICIO- 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando 
la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

//Posicionarme en el DOM

let resultado9 = document.querySelector(".ej9-resultado");
let datosDeUsuarios = "";

//funciones que responden
usuarios.forEach(function(usuario){
  datosDeUsuarios += 
    `<div class="usuario-contenedor">
    <div class="fila1">
      <span class="title">Nombre:</span><span>${usuario.nombre}</span>
      <span class="title">NroCliente:</span><span>${usuario.nroCliente}</span>
    </div>
    <div class="fila2">
      <span class="title">DNI:</span><span>${usuario.dni}</span>
      <span class="title">Fecha Nacimiento:</span><span>${usuario.fechaNacimiento}</span>
    </div>
  </div>`

});
resultado9.innerHTML = datosDeUsuarios;

        
      

      



/*
EJERCICIO- 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos 
para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/

//posicionamiento en el DOM

let div10 = document.querySelector(".ej10-form");
let resultado10 = document.querySelector(".ej10-resultado");

//Crear Elementos - crearemos un formulario con inputs - (NO MANIPULAREMOS EL HTML)

let formulario10 = document.createElement("form");

let nombre10 = document.createElement("input");
nombre10.placeholder = "Ingrese Nombre";
nombre10.type = "text";



let email10 = document.createElement("input");
email10.placeholder = "Ingrese Email";


let telefono10 = document.createElement("input");
telefono10.placeholder = "Ingrese Telefono";
telefono10.type = "number"; 

