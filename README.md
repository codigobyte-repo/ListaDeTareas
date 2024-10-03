# To-Do List Application

### Descripción

Esta es una sencilla aplicación de lista de tareas (To-Do List) que permite a los usuarios crear, marcar como completadas, eliminar tareas y guardar el estado de las mismas en el `localStorage` del navegador, para que las tareas persistan incluso después de cerrar o recargar la página.

### Funcionalidades

- **Crear tareas**: Los usuarios pueden añadir nuevas tareas a la lista escribiendo en el campo de entrada y presionando "Enter" o un botón "Agregar".
- **Marcar como completada**: Las tareas pueden ser marcadas como completadas con un simple clic en el elemento de la lista. Las tareas completadas se mostrarán con un estilo diferente, como tachado, para indicar que ya han sido realizadas.
- **Eliminar tareas**: Cada tarea tiene un botón de eliminación (en forma de "X") que permite borrar tareas específicas de la lista.
- **Persistencia de datos**: Las tareas se almacenan en el `localStorage` del navegador, lo que asegura que los usuarios puedan cerrar la página y volver más tarde sin perder sus tareas.

### Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tuusuario/todolist.git
   cd todolist
   ```

2. **Abrir en el navegador**:
   - Simplemente abre el archivo `index.html` en tu navegador para empezar a utilizar la aplicación.

### Estructura del Proyecto

- **HTML**: Contiene la estructura básica de la aplicación, incluyendo un campo de entrada para agregar tareas y una lista (`<ul>`) para mostrar las tareas existentes.
- **CSS**: Estilos que definen el diseño y la apariencia de la lista, incluyendo estilos para tareas completadas y botones de eliminación.
- **JavaScript**: Funcionalidades principales, como la creación de tareas, su eliminación, la gestión de tareas completadas y la persistencia de datos en el `localStorage`.

### Ejemplo de Uso

1. **Agregar una tarea**:
   - Escribe una tarea en el campo de entrada y presiona "Enter" o haz clic en el botón "Agregar".
   - La tarea se agregará a la lista de tareas.

2. **Marcar como completada**:
   - Haz clic en cualquier tarea para marcarla como completada. La tarea se tachará para indicar que ha sido realizada.

3. **Eliminar una tarea**:
   - Haz clic en la "X" al lado de una tarea para eliminarla de la lista.

4. **Persistencia de datos**:
   - La lista de tareas se guarda automáticamente en el `localStorage`. Si cierras la página y vuelves a abrirla, las tareas seguirán allí.

### Código

```javascript
// Ejemplo básico de cómo se gestionan las tareas y el localStorage

// Agregar evento para añadir tareas
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

// Guardar tareas en localStorage
function saveTasks() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

// Cargar tareas desde localStorage
function loadTasks() {
    listContainer.innerHTML = localStorage.getItem('tasks') || '';
}

// Cargar tareas al inicio
loadTasks();
```

### Tecnologías utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilización de los elementos y manejo de la presentación visual.
- **JavaScript (ES6)**: Lógica para agregar, completar, eliminar y guardar tareas.
- **LocalStorage**: Para la persistencia de las tareas en el navegador.

### Mejoras futuras

- Opción de editar tareas existentes.
- Filtros para ver solo tareas completadas o pendientes.
- Integración con un backend para compartir listas de tareas en múltiples dispositivos.