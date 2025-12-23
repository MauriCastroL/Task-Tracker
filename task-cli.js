#!/usr/bin/env node
import { leerJSON, guardarEnJSON } from "./file-editer.js"
import { list, list_done, list_todo, list_in_progress } from "./listers.js"

function add() {
    // Validamos que exista la tarea
    if (!process.argv[3] || process.argv[3].trim() === "" || process.argv.length > 4) {
        console.log("Error en ingreso de argumentos");
        console.log("Intente con: node task-cli add <'nombre-tarea'>");
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
    
    // Verificamos que se ingrese el ID
    if (!process.argv[3] || process.argv.length > 4) {
        console.log("Error en ingreso de argumentos");
        console.log("Intente con: node task-cli delete <ID>");
        process.exit(1);
    }

    let idAEliminar = Number(process.argv[3]);

    if (!isNaN(idAEliminar)) {
        const indice = contenidoJSON.findIndex(user => user.id === idAEliminar);
        if (indice !== -1) { 
            contenidoJSON.splice(indice, 1); 
        } else {
            console.log("La tarea no se encuentra registrada");
        }

    } else {
        console.log(process.argv[3] + " No es un ID valido");
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
    const idUpdate = Number(process.argv[3]); 

    if (!isNaN(idUpdate)) {
        // Capturamos el indice del objeto a modificar
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
    } else {
        console.log("Debe ingresar un ID númerico no un string");
    }
}

function mark_in_progress() {
    // Validaciones de entrada
    if (!process.argv[3] || process.argv.length > 4) {
        console.log("Error en ingreso de argumentos");
        console.log("Intente con: node task-cli mark-in-progress <id>");
        process.exit(1);
    }

    const contenido = leerJSON();
    const arg = Number(process.argv[3]); 

    // Verificamos si a entrada es valida
    if (!isNaN(arg)) {
        const idToUpdate = contenido.findIndex(elemento => elemento.id === arg);

        if (idToUpdate !== -1) {
            contenido[idToUpdate].status = "in-progress";

            let fechaActualizacion = new Date();
            fechaActualizacion = fechaActualizacion.toDateString();
            contenido[idToUpdate].updateAt = fechaActualizacion;

            guardarEnJSON(contenido);

            console.log("Task updated with success");
        } else {
            console.log("La tarea no se encuentra registrada, verfique ID");
            process.exit(1);
        }
    } else {
        console.log("Debe ingresar un ID númerico no un string");
    }
}

function mark_done() {
    if (!process.argv[3]) {
        console.log("Error en ingreso de argumentos");
        console.log("Debe ingresar el id de su tarea");
        console.log("Intente con: node task-cli mark-done <id>");
        process.exit(1);
    }

    const contenido = leerJSON();
    const arg = Number(process.argv[3]);

    if (!isNaN(arg)) {
        const idUpdate = contenido.findIndex(elemento => elemento.id === arg);

        if (idUpdate !== -1) {
            contenido[idUpdate].status = "done";

            let fechaActualizacion = new Date();
            fechaActualizacion = fechaActualizacion.toDateString();
            contenido[idUpdate].updateAt = fechaActualizacion;

            guardarEnJSON(contenido);

            console.log("Task updated with success");
        } else {
            console.log("La tarea no se encuentra registrada, verfique ID");
            process.exit(1);
        }
    } else {
        console.log("Debe ingresar un ID númerico no un string");
    }
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
                console.log("Error de argumento")
                break;
        }
    }
}

main()