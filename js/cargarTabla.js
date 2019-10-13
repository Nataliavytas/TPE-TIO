"use strict"

let datosGlobal = [];
document.getElementById("agregarFila").addEventListener("click", agregarFila);
document.getElementById("agregarTresFilas").addEventListener("click", agregarTresFilas);

function tomarDatos() {
    let nombre = document.getElementById("nombreTabla").value;
    let autor = document.getElementById("autorTabla").value;
    let tipo = document.getElementById("tipoTabla").value;
    let datos = {
        "Nombre": nombre, "Autor": autor,
        "Tipo": tipo
    };
    datosGlobal.push(datos);
}
function agregarTresFilas(event) {
    event.preventDefault();
    for (let i = 0; i < 3; i++) {
        tomarDatos();
    }
    mostrarTabla();
}

function agregarFila(event) {
    event.preventDefault();
    tomarDatos();
    mostrarTabla();

}

function mostrarTabla() {
    let Table = document.getElementById("cuerpoTabla");
    Table.innerHTML = "";
    for (let i = 0; i < datosGlobal.length; i++) {
        let fila = datosGlobal[i];
        let table = document.getElementById("cuerpoTabla");
        let row = table.insertRow(table.rows.lenght);
        let celdaNombre = row.insertCell(0);
        let celdaAutor = row.insertCell(1);
        let celdaTipo = row.insertCell(2);

        celdaNombre.innerHTML = fila.Nombre;
        celdaAutor.innerHTML = fila.Autor;
        celdaTipo.innerHTML = fila.Tipo;
    }
}
document.getElementById("borrarTodoTabla").addEventListener("click", function(event){
   datosGlobal=[];
    mostrarTabla();
})
