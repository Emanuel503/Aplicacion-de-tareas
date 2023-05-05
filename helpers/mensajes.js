require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.log("========================". blue);
        console.log("  SELECCION UNA OPCIÓN  ". blue);
        console.log("========================\n". blue);

        console.log(`${'1.'.blue} Crear tarea`);
        console.log(`${'2.'.blue} Ver tareas pendientes`);
        console.log(`${'3.'.blue} Ver tareas completadas`);
        console.log(`${'4.'.blue} Completar tareas`);
        console.log(`${'5.'.blue} Borrar tarea`);
        console.log(`${'0.'.blue} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opc) => {
            readline.close();
            resolve(opc);
        })
    });
}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presion ${'ENTER'.green} para continuar `, () => {
            readline.close();
            resolve();
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}