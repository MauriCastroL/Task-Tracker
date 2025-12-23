import { leerJSON } from "./file-editer.js"

export function list() {
    const data = leerJSON();
    console.table(data)
}

export function list_done() {
    const data = leerJSON();
    const listDone = data.filter(elemento => elemento.status === "done");
    console.table(listDone);
}

export function list_todo() {
    const data = leerJSON();
    const listTodo = data.filter(elemento => elemento.status === "todo");
    console.table(listTodo);
}

export function list_in_progress() {
    const data = leerJSON();
    const listInProgress = data.filter(elemento => elemento.status === "todo");
    console.table(listInProgress);
}