console.log(`Desafio complementario Arrays Tema: To do App`);

const actividades = [];
let actividad;

while (true) {
    let ingresoActividad = prompt(`Desea ingresar una actividad?\n Ingrese SI para continuar o NO para cancelar`).toLowerCase();
    if (ingresoActividad == `si`) {
        actividad = prompt(`Qué actividad quieres incluir?`).toLowerCase();
        actividades.push(actividad);
    } else {
        break;
    }
}

if (actividades.length > 0) {
    let eliminarActividad = prompt(`Las actividades ingresadas son ${actividades}. Deseas eliminar alguna?\n Ingrese SI o NO`).toLowerCase();

    if (eliminarActividad == `si`) {
        const ActividadAEliminar = prompt(`Qué actividad quieres eliminar? ${actividades}\n Ingrese el nombre de la actividad`).toLowerCase();
        const indiceActividadAEliminar = actividades.indexOf(ActividadAEliminar);

        actividades.splice(indiceActividadAEliminar, 1);
        alert(`Las actividades a realizar son ${actividades}`);
    } else {
        alert(`Las actividades a realizar son ${actividades}`);
    }
} else {
    alert(`No tienes actividades para realizar`);
}
