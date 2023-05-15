import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name:  'opcion',
        message: '¿Que opcion desea?',
        choices: [
            {
                name: '1. Crear tarea',
                value: '1',
                description: 'Crear o registrar una nueva tarea',
            },
            {
                name: '2. Ver todas las tareas',
                value: '2',
                description: 'Ver todas la tareas',
            },
            {
                name: '3. Ver tareas pendientes',
                value: '3',
                description: 'Ver todas la tareas que estan pendientes',
            },
            {
                name: '4. Ver tareas compleatas',
                value: '4',
                description: 'Ver todas la tareas que estan compleatas',
            },
            {
                name: '5. Completar tarea',
                value: '5',
                description: 'Completar una tarea registrada',
            },
            {
                name: '6. Modificar tarea',
                value: '6',
                description: 'Modificar una tarea registrada',
            },
            {
                name: '7. Eliminar tarea',
                value: '7',
                description: 'Eliminar una tarea registrada',
            },
            {
                name: '0. Salir',
                value: '0',
                description: 'Salir',
            },
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log("========================". blue);
    console.log("  SELECCION UNA OPCIÓN  ". blue);
    console.log("========================\n". blue);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;
}

const pausa = async() => {
    await inquirer.prompt(
        {
            type: 'input',
            name:  'pausa',
            message: `Presiona ${'ENTER'.green} para continuar`,
        }
    );
}

export {
    inquirerMenu,
    pausa
}