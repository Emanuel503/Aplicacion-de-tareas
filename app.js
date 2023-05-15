import { inquirerMenu, pausa } from './helpers/inquirer.js';

const main = async() => {
    let opcion = "";
    do{
        opcion = await inquirerMenu();
        await pausa();
    }while(opcion != "0")
};

main();