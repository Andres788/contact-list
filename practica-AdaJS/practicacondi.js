/*Condicionales: Práctica #1
Un restaurante te ha pedido que escribas una expresión 
condicional en la que verifique si una persona tiene edad para comprar una cerveza.
Como lo harias?
Recuerda que puedes usar los metodos prompt() y alert() 
en la consola para capturar valores y enviar mensajes de alerta.
Pasa tu codigo a un archivo separado de JS con VSC o Repl.it
 y verifica que funcione.*/

//Expresion de una funcion
const calcularArea = function (ancho, alto) {
  const area = ancho * alto;
  return area;
};
console.log(calcularArea(25, 7));

//funciones tipo flecha
const calcularArea2 = (ancho, alto) => {
  const area = ancho * alto;
  return area;
};
console.log(calcularArea2(25, 7));
//arrow function con un solo parametro y una
//sola expresion
//elevamos x al tercer poder
const multiplicaNumero = (x) => x ** 3;
console.log(multiplicaNumero(10));

//Funcion como parametro
const avisaUsuario = (fun, x) => {
  alert(fun(x));
};
const saludaUsuario = (nombre = "Asta") => {
  return `Hola ${nombre}`;
};

avisaUsuario(saludaUsuario, "Asta");
