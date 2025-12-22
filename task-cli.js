function add() {
    
}

function deleteTask() {
    
}


function update() {
    
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
    if (process.argv.length <= 2 || process.argv.length >= 5) {
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