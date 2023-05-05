require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    opc = "";
    do{
        console.clear();
        opc = await mostrarMenu();
        await pausa();
    }while(opc != "0")
};

main();