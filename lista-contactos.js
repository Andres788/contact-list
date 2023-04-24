/*Crea una lista de contactos con datos predefinidos, cada contacto 
debe contener el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch
 llamado project-1 y compártelo con nosotros. 👍🏼⬇️*/

let contacts = ["Goku saiyanz", "Vegeta saiyanz", "Gohan saiyanz"];

let addContact = (nombreApellido) => {
  contacts.push(nombreApellido);
};
addContact("Gotenks Saiyanz");
console.log(contacts);

function deleteContact(nombre) {
  let index = contacts.findIndex((contact) => {
    return contact.nombre == nombre;
  });
  console.log(contacts[index]);

  let validate = confirm("eliminando");
  console.log(validate);
  if (validate) {
    contacts.splice(index, 1);
    contacts();
  }
}
console.log(deleteContact());

//console.log(contacts[index]);
