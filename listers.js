import { leerJSON } from "./file-editer.js"

export function list() {
    const data = leerJSON();
    console.log(data)
}

export function list_done() {
    const data = leerJSON();
    const listDone = data.filter(elemento => elemento.status === "done");
    console.log(listDone);
}

export function list_todo() {
    const data = leerJSON();
    const listTodo = data.filter(elemento => elemento.status === "todo");
    console.log(listTodo);
}

export function list_in_progress() {
    const data = leerJSON();
    const listInProgress = data.filter(elemento => elemento.status === "todo");
    console.log(listInProgress);
}