let casas = document.getElementById('casas');
let apartamentos = document.getElementById('apartamentos')
let onlyWomans = document.getElementById('mujeres')
let onlyMans = document.getElementById('hombres')
let petFriendlys = document.getElementById('mascotas')
let mixed = document.getElementById('mixed')
let haveBathRoom = document.getElementById('bath')

let filter = 0;
fx.base = "COP"
fx.rates = {
    "USD": 0.00025
}

console.log(fx.rates)
//ciclo que le solicita al usuario la opcion por la cual desea filtrar su busqueda
//se eliminaria cuando se agrege DOM


// seccion de eventos
casas.addEventListener('click', ()=>{
     filter = 6;
    renderizarTarjetas(filterByOption(filter,sites));
    localStorage.setItem('seleccion', filter)
})
apartamentos.addEventListener('click', ()=>{
     filter = 5;
    renderizarTarjetas(filterByOption(filter,sites));
      localStorage.setItem('seleccion', filter)
})
onlyWomans.addEventListener('click', ()=>{
     filter = 1;
    renderizarTarjetas(filterByOption(filter,sites));
      localStorage.setItem('seleccion', filter)
})
onlyMans.addEventListener('click', ()=>{
     filter = 2;
    renderizarTarjetas(filterByOption(filter,sites));
      localStorage.setItem('seleccion', filter)
})
petFriendlys.addEventListener('click', ()=>{
     filter = 4;
    renderizarTarjetas(filterByOption(filter,sites));
      localStorage.setItem('seleccion', filter)
})
mixed.addEventListener('click', ()=>{
     filter = 3;
    renderizarTarjetas(filterByOption(filter,sites));
      localStorage.setItem('seleccion', filter)
})
haveBathRoom.addEventListener('click', ()=>{
     filter = 7;
    renderizarTarjetas(filterByOption(filter,sites));
      localStorage.setItem('seleccion', filter)
})
window.addEventListener('load',()=>{
    filter = 0
    renderizarTarjetas(filterByOption(filter = 8,sites));
    if(localStorage.getItem('seleccion') == 4 ){
        alert('Muchas personas buscan compañeros que sean amantes de las mascotas!')
    }
    console.log(localStorage.getItem('seleccion'))
})


// Funcion que renderiza las card de forma rinamica seguin el arreglo construido por la funcion de filtrado
function renderizarTarjetas() {


  const contenedorResultados = document.querySelector(".row-cols-1.row-cols-md-4.g-4");
    contenedorResultados.innerHTML = "";
  resultados1 = filterByOption(filter, sites);
  resultados1.forEach((resultado) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col");
    const priceUSD = fx.convert(resultado.price, {from: "COP", to:"USD"});

    tarjeta.innerHTML = `
      <div class="card h-100">
        <img src="${resultado.image}" class="card-img-top img-fluid img-card" alt="casa">
        <div class="card-body">
          <h5 class="card-title">${resultado.title}</h5>
          <h6 class="card-title">${fx.base +" "+ resultado.price.toLocaleString()}</h6>
          <h6 class="card-title">${"USD " + priceUSD.toLocaleString()}</h6>
          <p class="card-text">${resultado.additionalInfo}</p>        
        </div>
      </div>
    `;

    contenedorResultados.appendChild(tarjeta);
  });
}


// Funcion que filtra segun la seleccion del usuario
function filterByOption(filter, sites) {
    const resultado = [];

    sites.forEach((site) => {
        switch (filter) {
            case 1:
                if (site.onlyFemales) {
                    resultado.push(site);
                }
                break;
            case 2:
                if (site.onlyMales) {
                    resultado.push(site);
                }
                break;
            case 3:
                if (site.mixed) {
                    resultado.push(site);
                }
                break;
            case 4:
                if (site.petFriendly) {
                    resultado.push(site);
                }
                break;
            case 5:
                if (site.type === 'apartament') {
                    resultado.push(site);
                }
                break;
            case 6:
                if (site.type === 'house') {
                    resultado.push(site);
                }
                break;
            case 7:
                if (site.havePrivateBathRoom) {
                    resultado.push(site);
                }
                break;
            case 8:
                if (site.id) {
                    resultado.push(site);
                }
                break;
        }
    });

    return resultado;
}


