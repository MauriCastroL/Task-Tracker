import { leerJSON, guardarEnJSON } from "./file-editer.js"

function add() {
    // Validamos que exista la tarea
    if (!process.argv[3]) {
        console.log("Error en ingreso de argumentos");
        console.log("Debe ingresar el nombre de su tarea");
        console.log("Intente con: node task-cli add <nombre-tarea>");
        process.exit(1);
    }  

    // Leemos la persistencia de los datos 
    let data = leerJSON(); 

    // Obtenemos la fecha de la creación
    let fechaCreacion = new Date();
    fechaCreacion = fechaCreacion.toDateString();
    const id = Date.now();

    // Creamos el objeto
    const task = {
        id: id,
        description: process.argv[3],
        status: "todo",
        createdAt: fechaCreacion,
        updateAt: fechaCreacion
    }

    // Insertamos la nueva tarea
    data.push(task);
    guardarEnJSON(data);
    console.log(`Task added successfully (ID: ${task.id})`);
}


function deleteTask() {
    const contenidoJSON = leerJSON();
    if (!process.argv[3]) {
        console.log("Error en ingreso de argumentos");
        console.log("Debe ingresar el ID de su tarea");
        console.log("Intente con: node task-cli delete <ID>");
        process.exit(1);
    }

    let idAEliminar = parseInt(process.argv[3]);
    let indice = contenidoJSON.findIndex(user => user.id === idAEliminar);

    if (indice !== -1) { 
        contenidoJSON.splice(indice, 1); 
    }

    guardarEnJSON(contenidoJSON);
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
    const contenido = leerJSON();
    const idUpdate = parseInt(process.argv[3]); // VERIFICAR ENTRADA

    const indexUpdate = contenido.findIndex(elemento => elemento.id === idUpdate);
    if (indexUpdate !== -1) {
        contenido[indexUpdate].description = process.argv[4];

        let fechaActualizacion = new Date();
        fechaActualizacion = fechaActualizacion.toDateString();
        contenido[indexUpdate].updateAt = fechaActualizacion;
        guardarEnJSON(contenido);
        console.log("Task updated with success");

    } else {
        console.log("No existe una tarea con ese ID");
        process.exit(1);
    }
}

function mark_in_progress() {
    
}

function mark_done() {
    
}

function list() {
    const data = leerJSON();
    console.log(data)
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