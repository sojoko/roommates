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
    },
    {
        id: 4,
        type: 'apartament',
        onlyFemales: false,
        onlyMales: true,
        mixed: false,
        petFriendly: false,
        address: 'Bogota occidente',
        havePrivateBathRoom: true,
        additionalInfo: 'apartamento de dos habitaciones, cerca del aeropuerto'
    },
    {
        id: 5,
        type: 'apartament',
        onlyFemales: true,
        onlyMales: false,
        mixed: false,
        petFriendly: true,
        address: 'Bogota oriente',
        havePrivateBathRoom: true,
        additionalInfo: 'hermoso apartamento, cerca de universidades'
    },
    {
        id: 6,
        type: 'apartament',
        onlyFemales: false,
        onlyMales: false,
        mixed: true,
        petFriendly: false,
        address: 'Bogota norte',
        havePrivateBathRoom: true,
        additionalInfo: 'apartamento de dos habitaciones para hombres y mujeres, que trabajen o estudien'
    }
]