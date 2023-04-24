/*Arrays: práctica #2
Ahora pasemos a otra tarea. Aquí te pasamos una cadena para trabajar.

let myString = 'Javascript+es+super+cool' ;

Convierta la cadena en un array, eliminando los caracteres + en el proceso.
Guarde el resultado en una variable llamada myArray.
Almacene la longitud del array en una variable llamada arrayLength.
Almacene el último elemento del array en una variable llamada lastItem.
Crea un nuevo array que tenga los elementos ordenados en orden inverso que myArray. 
Almacenalos en un una variable llamada myInverseArray.
Agrega un elemento al final de myInverseArray.*/

let myString = "Javascript+es+super+cool";
let quit = myString.split("+").join("");
let myArray = Array.from(quit);

arrayLength = myArray.length;
lastItem = myArray[myArray.length - 1];

let myInverseArray = myString.split("+").reverse().join(" ");

console.log(myInverseArray);
//console.log(arrayLength);
