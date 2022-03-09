console.log(`Desafio Tema: To do App`);

const botonAgregar = document.getElementById(`btn__agregar`);
botonAgregar.addEventListener(`click`, agregarTarea);

//Permite ingresar valores pulsando la tecla `Enter`
document.addEventListener("keypress", (e) => {
    if (e.key === `Enter`) {
        agregarTarea();
    }
});

const botonReset = document.getElementById(`btn__reset`);
botonReset.addEventListener(`click`, eliminarTodo);

function agregarTarea() {
    const nuevaTarea = input.value;

    if (nuevaTarea != "") {
        const root = document.getElementById(`root`);
        const nuevoDiv = document.createElement(`div`);
        const nuevoSpan = document.createElement(`span`);
        nuevoSpan.innerText = nuevaTarea;

        root.appendChild(nuevoDiv);
        nuevoDiv.appendChild(tacharActividad());
        nuevoDiv.appendChild(nuevoSpan);
        nuevoDiv.className += "tarjeta__tareas d-flex justify-content-between align-items-center p-4 m-1 rounded-3";
        nuevoDiv.appendChild(botonEliminar());
        input.value = "";
    } else {
        alert("Por favor ingrese una tarea");
    }
}

function botonEliminar() {
    const nuevoBtn = document.createElement(`button`);
    nuevoBtn.className += "btn-close";

    nuevoBtn.addEventListener(`click`, (e) => {
        const divAEliminar = e.target.parentElement;
        const root = document.getElementById(`root`);

        root.removeChild(divAEliminar);
    });
    return nuevoBtn;
}

function eliminarTodo() {
    const arrtodoAEliminar = document.querySelectorAll(`div.tarjeta__tareas`);

    for (let i = 0; i < arrtodoAEliminar.length; ++i) {
        arrtodoAEliminar[i].remove();
    }
}

function tacharActividad() {
    const tilde = document.createElement(`input`);
    tilde.setAttribute("type", "checkbox");

    tilde.addEventListener(`change`, (e) => {
        const spanAModificar = tilde.parentNode.querySelector("span");
        if (e.target.checked) {
            spanAModificar.className += "text-decoration-line-through fst-italic";
            console.log(spanAModificar);
        } else {
            spanAModificar.className = ``;
        }
    });
    return tilde;
}
