// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let nuevoArray = [];
  for (propiedad in objeto){
    nuevoArray.push([propiedad, objeto[propiedad]]);
  }
  return nuevoArray;

// let nuevoArray2 = Object.entries(objeto);
// return nuevoArray2; con metodo
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let acumulador = {};
  for (let i = 0; i < string.length; i++) {
    if (typeof(string) !== "string"){
      console.warn(`Hola la cadena "${string}" que ingresaste no es una cadena de texto`);
    }
    if ((!string)){
      console.error(`No estas ingresando una cadena de texto`)
    }
    let caracter = string[i];
    if(caracter in acumulador){
      acumulador[caracter]++;      
    }
    else{
      acumulador[caracter] = 1;
    }
  }
  return acumulador;
}


  function capToFront(s) {
    // Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas al principio de la palabra.
    // Ejemplo: soyHENRY -> HENRYsoy
  
    if (!s) {
      console.warn(`Ingresa una cadena de texto`);
      return; 
    }
   
    if (typeof s !== "string") {
      console.error(`El elemento ${s} que estás registrando no es una cadena de texto`);
      return; 
    }
    let mayusculasInicial = "";
    let minisculasFinal = "";
    let referente = s.toUpperCase();

    for (let i = 0; i < s.length; i++) {
      if (referente[i] === s[i]) {
        
        mayusculasInicial = mayusculasInicial + referente[i];
      } else {
        minisculasFinal = minisculasFinal + s[i];
      }
    }
    return `${mayusculasInicial}${minisculasFinal}`;
  }
  

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  if (!str){
     return console.error(`Debes ingresar una cadena de texto`);
  }
  if (typeof(str) !=="string"){
     return console.log(`el valor ${str} no es una cadena de texto, retifica e ingresalo nuevamente`);
  }
  let validador = str.split(" ");
  let cadenaInversa = validador.map((elemento) => {
    return elemento.split("").reverse().join("");
  });
  return cadenaInversa.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if (!numero){
    `Debes ingresar un numero`;
  }
  if (typeof(numero) !== "number"){
    return `El valor: ${numero} ingresado no es un numero`;
  }
  let validador = parseInt(numero.toString().split("").reverse().join(""));
  if (numero === validador){
    return `Es capicua`;
  }
  else {
    return `No es capicua`;
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  if (!cadena){
    return `Debes ingresar algun texto que quieres evaluar`
  }
  if (typeof(cadena)!=="string"){
    return `los valores que estas ingresando no son texto`
  }
  let separador = cadena.split("");
  let filtrado = separador.filter((elemento)=>{
    return elemento!=="a" && elemento !== "b" && elemento !== "c"});
  return filtrado.join(""); 
  }
  

function sortArray(arr){
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  if (arr===undefined) return `Debes ingresar un array`;
  if (typeof arr !== "object") return `El valor ingresado no es un array`;
  
  return arr.sort((a,b)=> a.length - b.length);

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  if (arreglo1 === undefined) return `Debes ingresar un array de numeros`;
  if (arreglo2 === undefined) return `Debes ingresar un array de numeros`;
  if (typeof arreglo1 !== "object") return `Debes ingresar un array de numeros`;
  if (typeof arreglo2 !== "object") return `Debes ingresar un array`;

  let nuevoArreglo = arreglo1.filter((valor) => {
    return arreglo2.includes(valor)});

  return nuevoArreglo;
  }
  
    
  



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

