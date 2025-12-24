# 🚀 Task Tracker CLI

Una herramienta de línea de comandos (CLI) simple, rápida y eficiente para gestionar tus tareas diarias sin salir de la terminal. Desarrollada en **Node.js** puro, sin dependencias pesadas.

## 📋 Características

- **Cero Dependencias:** Funciona con módulos nativos de Node.js (`fs`).
- **Persistencia de Datos:** Las tareas se guardan automáticamente en un archivo `tasks.json` en el directorio actual.
- **Gestión de Estados:** Soporta tareas pendientes (`todo`), en progreso (`in-progress`) y terminadas (`done`).
- **Resiliente:** Manejo de errores robusto y validaciones de entrada.

## 🛠️ Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MauriCastroL/Task-Tracker.git
   cd Task-Tracker

2. Instala la herramienta globalmente para usar task-cli en cualquier lugar.
  ```bash
  npm install -g .
```

En caso de estar en Mac o Linux usa:
  ```bash
  sudo npm install -g .
```
## 🧩 Uso
Una vez instalado, puedes usar el comando task-cli directamente.

### Agregar una tarea
```bash
  # Agregar una tarea
  task-cli add "Comprar café"
  task-cli add "Escribir README.md"
```
### Listar tareas
```bash
  # Ver todas las tareas
  task-cli list
  
  # Ver solo las completadas
  task-cli list done
  
  # Ver las pendientes
  task-cli list todo
  
  # Ver las que están en progreso
  task-cli list in-progress
```
### Actualizar estado y descripción
**IMPORTANTE❗❗** Necesitarás el ID de la tarea (que aparece al listarlas).
```bash
  # Marcar como 'En Progreso'
  task-cli mark-in-progress <ID>
  
  # Marcar como 'Terminada'
  task-cli mark-done <ID>
  
  # Cambiar la descripción
  task-cli update <ID> "Nueva descripción de la tarea"
```
### Eliminar una tarea
**IMPORTANTE❗❗** Necesitarás el ID de la tarea (que aparece al listarlas).
```bash
  task-cli delete <ID>
```

## 🎮 Tabla de Comandos

| Comando | Argumentos Requeridos | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| `add` | `"Nombre Tarea"` | Crea una nueva tarea en la lista. | `task-cli add "Comprar pan"` |
| `list` | *(Ninguno)* | Muestra todas las tareas registradas. | `task-cli list` |
| `list` | `todo` / `done` / `in-progress` | Filtra las tareas por su estado actual. | `task-cli list done` |
| `update` | `<ID> "Nuevo Nombre"` | Modifica la descripción de una tarea existente. | `task-cli update 1644 "Comprar leche"` |
| `delete` | `<ID>` | Elimina permanentemente una tarea. | `task-cli delete 1644` |
| `mark-in-progress` | `<ID>` | Cambia el estado de una tarea a "En Progreso". | `task-cli mark-in-progress 1644` |
| `mark-done` | `<ID>` | Cambia el estado de una tarea a "Terminada". | `task-cli mark-done 1644` |

## 📂 Estructura del Proyecto
```
  ├── task-cli.js      # Punto de entrada principal
  ├── file-editer.js   # Módulo de persistencia (Lectura/Escritura JSON)
  ├── listers.js       # Módulo de lógica de visualización
  ├── tasks.json       # Base de datos (generada automáticamente)
  └── README.md        # Documentación
```
## Despedida
Hecho con ♥️ por [MauriCastroL](https://github.com/MauriCastroL)
