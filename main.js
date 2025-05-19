//En JS tenemos las funciones tipo flecha
// utilizaremos la fetch que es un método para consumir una API

//Paso unoi: Función flecha
//metodo then o dem viene con fetch(es un metodo o una función)
const consumirApi = () => {
  //We use Promise.all to call both APIs at the same time
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
      response.json()
    ),
  ])
    //The data goes to the console
    .then(([data1, data2]) => {
      //Here we combine the answers as we wish
      const resultadoCombinado = {
        usuarios: data1,
        publicaciones: data2,
      };
      console.log("Datos combinados", resultadoCombinado);
    })
    //Find out what to do in case of error
    .catch((error) => {
      console.log(error);
    });
};

consumirApi();

//EN la siguinete clase agregaremos la interfaz grafica
//Consumir otra API y mostrar  la data en la consola como la de arriba tpdo en ingles
