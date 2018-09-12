const argv = require('./config/yargs').argv
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar')
    //const fs = require('express');
    //const fs = require('./fs');

//let base = '2';


let argv2 = process.argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then().catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:` + `${ archivo}`.red))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no existe');
        break;
}

//console.log(argv);
//console.log(`Limite es ${argv.limite}`);


//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*
console.log(process.argv)


crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado: ${ archivo}`))
    .catch(err => console.log(err))

    */