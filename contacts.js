/*Crea una lista de contactos con datos predefinidos,
 cada contacto debe contener el nombre y apellido como
  una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list
 crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️*/
/*
 Ajusta las funciones de crear y eliminar un contacto para
que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección
Publica tu código en Github, en tu repositorio
 contact-list crea un branch llamado project-2 y
  compártelo con nosotros. 👍🏼⬇️
 */

let contacts = [
  {
    id: "1",
    nombres: "Goku",
    apellidos: "Saiyanz",
    teléfono: "3229928",
    ubicaciones: "Tierra",
    ciudad: "namekusei",
    dirección: "cr 45 36 3773",
  },
  {
    id: "2",
    nombres: "vegeta",
    apellidos: "Saiyanz",
    teléfono: "57542325425",
    ubicaciones: "Tierra",
    ciudad: "namekusei",
    dirección: "cr 67 236 33773",
  },
];
//let contact = [];

let createNewContact = () => {
  contacts.push(
    {
      id: "3",
      nombres: "Freezer",
      apellidos: "delmal",
      teléfono: "2736363",
      ubicaciones: "Tierra",
      ciudad: "vegegito",
      dirección: "cr 474 236 33773",
    },
    {
      id: "4",
      nombres: "picolo",
      apellidos: "daimacku",
      teléfono: "767676",
      ubicaciones: "namekusei",
      ciudad: "nameki",
      dirección: "cr  236 33773",
    }
  );
  console.log(contacts);
};
createNewContact();

let deleteContac = (id) => {
  let indice = contacts.findIndex((contacts) => contacts.indice === id);
  if (indice !== -1) {
    contacts.splice(indice, 1);
  }
  console.log(contacts);
};
deleteContac();
