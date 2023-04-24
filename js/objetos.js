const nombre = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = {
  nombre: "Monitor 30 pulgas",
  precio: 300,
  disponible: true,
};

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg ";
delete producto.disponible;

//const name = producto.nombre;
const { name } = producto;

console.log(name);
