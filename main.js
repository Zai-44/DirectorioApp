//En JS tenemos las funciones tipo flecha
// utilizaremos la fetch que es un método para consumir una API

//Paso unoi: Función flecha
//metodo then o dem viene con fetch(es un metodo o una función)
const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    //Los daros van a la consola
    .then((data) => console.log(data))
    //Descubrir que hacer en caso de error
    .catch((error) => console.log(error));
};

consumirApi();

//EN la siguinete clase agregaremos la interfaz grafica
//Consumir otra API y mostrar  la data en la consola como la de arriba tpdo en ingles
