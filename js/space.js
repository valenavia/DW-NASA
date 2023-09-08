document.addEventListener("DOMContentLoaded", function () {
  const botonBuscar = document.getElementById("btnBuscar");
  const contenedor = document.getElementById("contenedor");

  botonBuscar.addEventListener("click", () => {
    let input = document.getElementById("inputBuscar").value;
    const url = "https://images-api.nasa.gov/search?q=" + input;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        contenedor.innerHTML = "";
        data.collection.items.forEach((element) => {
          if (typeof element.links !== "undefined") {
            contenedor.innerHTML += `
                    <img src="${element.links[0].href}"></img>`;
          } else {
            contenedor.innerHTML += `
                    <p>No image available</p>`;
          }
          contenedor.innerHTML += `
            <div>
                <strong>${element.data[0].title}</strong>
                <p>${element.data[0].description}</p>
                <p>${element.data[0].date_created}</p>
            </div>`;
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  });
});

/*Mostrar al usuario la lista de imágenes devuelta, 
con su información (al menos imagen, título, descripción y fecha).*/
