const fs = require('fs');
const colors = require('colors');

//module.exports.crearArchivo

let listar = (base, limite = 10) => {

    console.log('=================='.blue);
    console.log(`Tabla de ${base} `.blue);
    console.log('=================='.blue);


    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`)
            return;
        } else if (!Number(limite)) {
            reject(`${limite} no es un número`)
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i}`);
        }
    })
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`)
            return;
        } else if (!Number(limite)) {
            reject(`${limite} no es un número`)
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)

        });
    })
}

module.exports = {
    crearArchivo,
    listar
}