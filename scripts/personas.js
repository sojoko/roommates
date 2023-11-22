fetch('https://randomuser.me/api/?results=6')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
     renderizarTarjetas(data.results);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });


function renderizarTarjetas(personas) {
    const contenedorResultados = document.querySelector(".row.row-cols-1.row-cols-md-3.g-5");
    contenedorResultados.innerHTML = "";

    personas.forEach((persona) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col");
        const nombre = `${persona.name.first} ${persona.name.last}`;
        const ciudad = persona.location.city;
        const edad = persona.dob.age;
        const gander = persona.gender;
        const email = persona.email;

        if(gander === "female"){
            ganerInSpanish = "Femenino"
        }
        else
            ganerInSpanish = "Masculino"

        tarjeta.innerHTML = `
      <div class="card h-100">
        <div class="person-image">
            <img src="${persona.picture.large}" class="rounded-circle" alt="casa">
        </div>
        
        <div class="card-body">
            <h3 className="card-title">${nombre}</h3>
            <h5 className="card-title">${ganerInSpanish}<h5>
            <h5 className="card-title">${"ciudad: " + ciudad}<h5>
            <h5 className="card-title">${"edad: " + edad}<h5>
            <h6 className="card-title">${email}</h6> 
        </div>
      </div>
    `;

        contenedorResultados.appendChild(tarjeta);
    });

}



