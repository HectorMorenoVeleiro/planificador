// src/main.js
// Lenguaje no tipado

import { formatearFecha } from "./utils";
import "./style.css";
import.meta.env.VITE_VERSION;
import confetti from "canvas-confetti";

// creamos boton para guardar la acción
const boton = document.getElementById("Add");
const input = document.getElementById("input");
const inputMin = document.getElementById("hora");
const list = document.getElementById("list");

// le añadimos un listener al boton para ejecute la función saveAction
boton.addEventListener("click", e => saveAction(e));

// función que se ejecuta al hacer click en el boton
function saveAction(e) {
    e.preventDefault(e);
    const fechaHoy = formatearFecha(new Date()); // fecha de hoy formato DD/MM/YYYY
    const li = document.createElement("li");// creamos un elemento li
    const minutos = inputMin.value;
    let peso = calcularPeso(minutos);
    li.textContent = fechaHoy + ': ' + input.value + ' ' + minutos + ' ' + peso; // valor del input y la fecha en el li
    list.appendChild(li); // añadimos el li a la lista
    input.value = ''; // limpiamos el input
    confetti(); //añadir confeti cuando se guarde un texto
}

