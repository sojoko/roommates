//Sites, array con objetos que simulan o hacen un mackup de lo que podria devolver
//un endpoint que le estaria pegando a la db de roommates.

const sites = [

    {
        id: 1,
        type: 'apartament',
        onlyFemales: true,
        onlyMales: false,
        mixed: false,
        petFriendly: false,
        address: 'Bogota sur',
        havePrivateBathRoom: false,
        additionalInfo: 'lindo apartamento ubicado cerca de la estacion de transmilenio "Portal Sur"'


    },
    {
        id: 2,
        type: 'house',
        onlyFemales: false,
        onlyMales: true,
        mixed: false,
        petFriendly: false,
        address: 'Bogota norte',
        havePrivateBathRoom: true,
        additionalInfo: 'Hermosa casa con terraza, lavanderia y garage'
    },
     {
        id: 3,
        type: 'apartament',
        onlyFemales: false,
        onlyMales: true,
        mixed: false,
        petFriendly: true,
        address: 'Bogota norte',
        havePrivateBathRoom: true,
        additionalInfo: 'apartamento de dos habitaciones, cerca de la Universidad de la Salle'
    }
]
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

//Funcion que filtra segun la opcion introducida por el usuario, mas adelante con manipulacion del dom se remplazaria la validacion por la opcion introducida por el usuario
// a cambio del value suministrado segun las pulsaciones en diferentes botones en la web.
function filterByOption() {
    const resultado = [];

    switch (filter) {
        case 1:
            for (let i = 0; i < sites.length; i++) {
                if (sites[i].onlyFemales) {
                    resultado.push(sites[i]);
                }
            }
            break;
        case 2:
             for (let i = 0; i < sites.length; i++) {
                if (sites[i].onlyMales) {
                    resultado.push(sites[i]);
                }
            }
            break;
        case 3:
             for (let i = 0; i < sites.length; i++) {
                if (sites[i].mixed) {
                    resultado.push(sites[i]);
                }
            }
            break;
        case 4:
            for (let i = 0; i < sites.length; i++) {
                if (sites[i].petFriendly) {
                    resultado.push(sites[i]);
                }
            }
            break;
        case 5:
            for (let i = 0; i < sites.length; i++) {
                if (sites[i].type == 'apartament') {
                    resultado.push(sites[i]);
                }
            }
            break;
        case 6:
            for (let i = 0; i < sites.length; i++) {
                if (sites[i].type == 'house') {
                    resultado.push(sites[i]);
                }
            }
            break;
        case 7:
            for (let i = 0; i < sites.length; i++) {
                if (sites[i].havePrivateBathRoom) {
                    resultado.push(sites[i]);
                }
            }
            break;


    }
    return resultado;
}

arrayWithFilteredResults = filterByOption();
for (let i = 0; i < arrayWithFilteredResults.length; i++) {
    alert('Hemos encontrado: ' + arrayWithFilteredResults[i].additionalInfo)
}
console.log(arrayWithFilteredResults)

//El codigo continuaria con la manipulacion del doom, para usar este nuevo array que contiene solo lo filtrado por el usuario para crear elementos en el html que muestren eso.