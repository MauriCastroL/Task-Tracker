import fs from 'fs';


let contadorID = 1;

function add() {
    // Validamos que exista la tarea
    if (!process.argv[3]) {
        console.log("Error en ingreso de argumentos");
        console.log("Debe ingresar el nombre de su tarea");
        console.log("Intente con: node task-cli add <nombre-tarea>");
        process.exit(1);
    }  

    // Obtenemos la fecha de la creación
    let fechaCreacion = new Date();
    fechaCreacion = fechaCreacion.toDateString();

    const task = {
        description: process.argv[3],
        id: contadorID++,
        status: "todo",
        createdAt: fechaCreacion,
        updateAt: fechaCreacion
    }

    guardarEnJSON(task);

    console.log(`Task added successfully (ID: ${task.id})`);

}

function guardarEnJSON(task) {
    // Guardamos la infor en el JSON junto al directorio de task-cli
    try {
        const data = JSON.stringify(task, null, 2);
        fs.writeFileSync('tasks.json', data);
        
    } catch (error) {
        console.log(error);
    }
}

function deleteTask() {
    
}


function update() {
    // Validamos que exista la tarea
    if (!process.argv[3] || !process.argv[4]) {
        console.log("Error en ingreso de argumentos");
        console.log("Debe ingresar el id de su tarea y la actualización de la tarea");
        console.log("Intente con: node task-cli update <id> <nombre-tarea>");
        process.exit(1);
    }

    // Obtenemos el JSON y la tarea con el ID

    let fechaActualizacion = new Date();
    fechaActualizacion = fechaActualizacion.toDateString();

    // Cambiamos la fecha de actualización 
    // task.updateAt = fechaActualizacion; DESCOMENTAR
    
}

function mark_in_progress() {
    
}

function mark_done() {
    
}

function list() {
    
}

function list_done() {
    
}

function list_todo() {
    
}

function list_in_progress() {
    
}

function main() {
    // Verificamos la cantidad de argumentos
    if (process.argv.length <= 2 || process.argv.length > 5) {
        console.log("Cantidad de argumentos invalida");
    } else {
        const argumentoFuncionalidad = process.argv[2];
        switch (argumentoFuncionalidad) {
            case "add":
                add();
                break;

            case "delete":
                deleteTask();
                break;

            case "update":
                update();
                break;

            case "mark-in-progress":
                mark_in_progress();
                break;

            case "mark-done":
                mark_done();
                break;

            case "list":
                const cuartoArgumento = process.argv[3];

                switch (cuartoArgumento) {
                    case "done":
                        list_done();
                        break;

                    case "todo":
                        list_todo();
                        break;

                    case "in-progress":
                        list_in_progress();
                        break;
                
                    default:
                        break;
                }

                if (!cuartoArgumento) {
                    list();
                }

                break;
            default:
                break;
        }
    }
}

main()