const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtner el clima',
        demand: true
    }
}).argv;
//argv.direccion

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (e) {
        return `No se pudo determinar el clima de ${coords.direccion}`
    }

}

getInfo(argv.direccion)
    .then(r => { console.log(r); })
    .catch(e => { console.log(e); })


/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
        clima.getClima(resp.lat, resp.lng)
            .then(r => {
                console.log(`El clima de ${argv.direccion} es de ${r}`);
            })
            .catch(e => {
                console.log(`No se pudo determinar el clima de ${argv.direccion}`, e);
            })
    });
    */