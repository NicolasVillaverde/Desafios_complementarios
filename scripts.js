console.log(`Desafio Tema: To do App`);

const botonAgregar = document.getElementById(`btn__agregar`);

botonAgregar.addEventListener(`click`, () => {
    const input = document.getElementById(`input`);
    const nuevaTarea = input.value;

    if (nuevaTarea != "") {
        const root = document.getElementById(`root`);
        const nuevoDiv = document.createElement(`div`);
        const nuevoSpan = document.createElement(`span`);
        nuevoSpan.innerText = nuevaTarea;

        root.appendChild(nuevoDiv);
        nuevoDiv.appendChild(nuevoSpan);
        nuevoDiv.className += "tarjeta__tareas d-flex justify-content-between align-items-center p-4 m-1 rounded-3";
        nuevoDiv.appendChild(botonEliminar());
        input.value = "";
    } else {
        alert("Por favor ingrese una tarea");
    }
});

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
