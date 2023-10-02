let filter = 0;


//ciclo que le solicita al usuario la opcion por la cual desea filtrar su busqueda
//se eliminaria cuando se agrege DOM
while (filter <= 0 || filter > 7 || isNaN(filter)){

    filter = parseInt(prompt('seleccione como desea filtrar la busqueda: \n' +
        'PRESS 1, para buscar sitios solo para mujeres \n' +
        'PRESS 2, para buscar sitios solo para hombres \n' +
        'PRESS 3, para buscar sitios que acepten generos mixtos \n' +
        'PRESS 4, para buscar sitios que acepten mascotas \n' +
        'PRESS 5, para buscar sitios que sean apartamentos, \n' +
        'PRESS 6, para buscar sitios que sean casas \n' +
        'PRESS 7, para buscar sitios que ofrezcan baños independientes \n'))

    if (filter <= 0 || filter > 7 || isNaN(filter)){
        alert('Ha introducido un valor erroneo, por favor, intentelo nuevamente')

    }
}

//Funcion que filtra segun la opcion introducida por el usuario validando los datos del mock (arreglo de objetos)
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
        }2
    });

    return resultado;
}


arrayWithFilteredResults = filterByOption(filter,sites);

if (arrayWithFilteredResults.length === 0) {
    alert('No hemos encontrado ningun resultado para tu busqueda');
} else {
    for (let i = 0; i < arrayWithFilteredResults.length; i++) {
        alert('Hemos encontrado: ' + arrayWithFilteredResults[i].additionalInfo)
    }
}

console.log(arrayWithFilteredResults)

//El codigo continuaria con la manipulacion del doom, para usar este nuevo array que contiene solo lo filtrado por el usuario para crear elementos en el html que muestren eso.