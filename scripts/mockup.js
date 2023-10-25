//Sites, array con objetos que simulan o hacen un mackup de lo que podria devolver
//un endpoint que le estaria pegando a la db de roommates.
const sites = [
    {
        id: 1,
        type: 'house',
        onlyFemales: true,
        onlyMales: true,
        mixed: true,
        petFriendly: false,
        havePrivateBathRoom: false,
        title: "Linda casa el norte de Bogota",
        image: "../img/casa1.jpg",
        price: "1.200.000 COP / Mes",
        additionalInfo: 'Busco un compañero, hombre y que trabaje o estudie'

    },
    {
        id: 2,
        type: 'apartament',
        onlyFemales: true,
        onlyMales: false,
        mixed: false,
        petFriendly: false,
        havePrivateBathRoom: false,
        title: "Linda casa el norte de Bogota",
        image: "../img/apto1.jpg",
        price: "1.100.000 COP / Mes",
        additionalInfo: 'lindo apartamento ubicado cerca de la estacion de transmilenio "Portal Sur"'


    },

     {
        id: 3,
        type: 'apartament',
        onlyFemales: true,
        onlyMales: false,
        mixed: false,
        petFriendly: false,
        havePrivateBathRoom: false,
        title: "Linda casa el norte de Bogota",
        image: "../img/apto2.jpg",
        price: "1.800.000 COP / Mes",
        additionalInfo: 'Apartamento ubicado al frende de la Uni Andes'


    },
         {
        id: 4,
        type: 'apartament',
        onlyFemales: false,
        onlyMales: true,
        mixed: false,
        petFriendly: true,
        havePrivateBathRoom: true,
        title: "Linda casa el norte de Bogota",
        image: "../img/apto3.jpg",
        price: "2.800.000 COP / Mes",
        additionalInfo: 'Apartamento ubicado al frende al norte de la ciudad'


    },


]