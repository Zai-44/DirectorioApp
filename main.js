const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    //convertimos las respuesta a JSON
    .then((response) => response.json())
    //Los datos lo vamos a mandar la consola
    .then((data) => {
      //puede ser otro nombre
      //La data de la API la llevamos a HTML
      //Definimos las constantes
      const contenedor = document.getElementById("contenedor");
      //data es un array/arreglo y se cuenta desde [0]
      data.forEach((personita) => {
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
          personita.name
        )}&background=random&color=fff`;
        contenedor.innerHTML += `
          <div class="col">
            <div class="personita-card h-100 p-3 shadow rounded text-white bg-dark">
            <div class="text-center mb-3">
                <img src="${avatarUrl}" alt="Avatar de ${personita.name}" class="rounded-circle avatar-img" />
              </div> 
            <h5>${personita.name}</h5>
              <p><strong>Usuario:</strong> ${personita.username}</p>
              <p><strong>Email:</strong> ${personita.email}</p>
              <p><strong>Teléfono:</strong> ${personita.phone}</p>
              <p><strong>Website:</strong> 
                <a href="http://${personita.website}" target="_blank" class="text-info">${personita.website}</a>
              </p>
              <p><strong>Dirección:</strong> 
                ${personita.address.street}, ${personita.address.suite}, 
                ${personita.address.city} (${personita.address.zipcode})
              </p>
            </div>
          </div>
        `;
      });

      console.log("Usuarios cargados correctamente.");
    })
    //Descubri que hacer en caso de que no me responda
    .catch((error) => console.log("Error al consumir la API:", error));
};

// Esperar a que el DOM esté listo
//DOM=Document Object MOdel: Documento modelo Objto
document.addEventListener("DOMContentLoaded", () => {
  consumirApi();
});
