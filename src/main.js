// src/main.js
// Lenguaje no tipado

import { formatearFecha } from "./utils";
import "./style.css";
import.meta.env.VITE_VERSION;

// creamos boton para guardar la acción
const boton = document.getElementById("Add");
const input = document.getElementById("input");
const list = document.getElementById("list");

// le añadimos un listener al boton para ejecute la función saveAction
boton.addEventListener("click", saveAction);

// función que se ejecuta al hacer click en el boton
function saveAction() {
    const fechaHoy = formatearFecha(new Date()); // fecha de hoy formato DD/MM/YYYY
    const li = document.createElement("li");// creamos un elemento li
    li.textContent = fechaHoy + ": " + input.value + " "; // valor del input y la fecha en el li
    list.appendChild(li); // añadimos el li a la lista
    input.value = ''; // limpiamos el input
}

//añadir confeti cuando se guarde un texto