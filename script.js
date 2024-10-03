const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if(inputBox.value === ''){
        alert('Debes ingresar una tarea');
    }else{
        /* Se crea un nuevo elemento <li></li> */
        let li = document.createElement('li');

        /* Se le asigna el valor del campo de texto (inputBox.value) como contenido. */
        li.innerHTML = inputBox.value;

        /* El nuevo <li> se agrega a un contenedor de lista (listContainer) */
        listContainer.appendChild(li);

        /* Creamos un span con la x para eliminar la tarea que se crea nueva */
        let span = document.createElement('span');

        /* Este código crea la x "\u00d7" */
        span.innerHTML = "\u00d7";

        /* Toma el elemento <span> que acabamos de crear y lo agrega como un hijo dentro del elemento <li> */
        li.appendChild(span);
    }
    /* Borramos el contenido del input */
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click', (e) => {
    /* e contiene lo que paso en el disparador de eventos */
    /* Cuando haces click en un LI de listcontainer tacha la tarea como concluida */
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        /* Cuando haces click en un SPAN de listcontainer elimina la tarea */
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/* Guardamos en el localstorage las tareas */
const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

/* Al iniciar la aplicacion, mostramos la lista de tareas almacenadas en el localstorage */
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

/* llamamos a la función */
showTask();
