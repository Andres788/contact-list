/*Arrays: práctica #1
Comencemos con una práctica básica de arrays .En esta tarea, nos gustaría que crearas un array
de tres elementos, almacenados dentro de una variable llamada myArray. Los artículos pueden ser lo que quieras,
¿qué tal tus comidas o bandas favoritas? A continuación, modifica los dos primeros elementos del
array utilizando una notación y asignación de corchetes simples [].
Luego agrega un nuevo elemento al comienzo de la matriz.
Luego crea una variable de tipo string donde puedas leer
todos los elementos de tu array , separados por guiones -
Practica avanzada. Crea un array con varios elementos de
diferentes tipos. La regla es que por lo menos un 
elemento pertenezca a cada tipo de dato primitivo que
 acabamos de ver. Recuerdas cuales eran? 🤓
*/
let myArray = ["Guns roses", "Metallica", "Arroz chino"];

myArray[0] = "Cinderella";
myArray[1] = "Carne asada";

for (let i = 0; i < myArray.length; i++) {
  // myArray[i];
  console.log(myArray);
}
myArray.push("Pizza");
myArray.unshift("Phill Collins");

console.log(myArray.join("-"));
