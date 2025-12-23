import fs from 'fs';

export function leerJSON() {
    try {
        // Recolectamos los objetos del JSON
        const data = fs.readFileSync('tasks.json').toString();
        if (data) {
            const contenido = JSON.parse(data);     
            return contenido;
        } else {
            return []; // En caso de estar vacio
        }
        }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export function guardarEnJSON(task) {
    // Guardamos la info en el JSON
    try {
        const data = JSON.stringify(task, null, 2);
        fs.writeFileSync('tasks.json', data);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

