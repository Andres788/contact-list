/*
String: practica #1
Declara una variable llamada miRefrán.
En otra línea asigna un refrán a esa variable.
Declara una variable llamada longitudRefran y asigna
 a esa variable la cantidad de letras de miRefran.
En otra línea asigna a la variable novenaLetra el 
valor de la novena letra del refrán.
En otra línea asigna a la variable ultimaLetra 
el valor de la última letra del refrán.
Busca el índice de la cadena “que” en tu refrán
 y asignalo a la variable índicePalabra. Si el 
 índice es menor que cero busca cualquier otra 
 preposición hasta que sea mayor a 0
Reemplaza la preposición encontrada por la cadena
 “xxx”
Convierte a mayúsculas todos los caracteres
 de tu refrán.
Comparte tu código🎉.
*/

let miRefran;
miRefran = "El tiempo no es oro, pero vale más que el oro";
let novenaLetra = 0;
let ultimaLetra = 0;

let procesado = miRefran.split(" ").join(" ").toUpperCase();

let longitudRefran = procesado.length;
let indicePalabra = miRefran.indexOf("que");
novenaLetra = procesado.charAt(9 - 1);
ultimaLetra = procesado[procesado.length - 1];

miRefran = miRefran.replace("que", "palabra robada");
miRefran = miRefran.toUpperCase();

console.log(longitudRefran);
console.log(novenaLetra);
console.log(ultimaLetra);
console.log(procesado);
console.log(indicePalabra);
console.log(miRefran);
