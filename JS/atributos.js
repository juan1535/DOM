import { funcionAsincronaCiudades } from "./ciudades.js";
import { cargarGeneros } from "./cargarGeneros.js";
import { cargarLenguajes } from "./lenguajes.js";
import is_valid from "./validar.js";

// Seleccionar elementos del DOM
const button = document.querySelector('button');
const formulario = document.querySelector('#formulario');
const opcionDefault = document.createElement("option");

// Crear elementos
const $select = document.createElement('select');
const $checkbox = document.createElement('input');
const label = document.createElement('label');
const radioButtonsContainer = document.createElement('div');
const checkboxContainer = document.createElement('div');

// Asignar IDs y atributos
label.id = "labelsito";
$checkbox.id = "terminos";
radioButtonsContainer.id = "radioContainer";
checkboxContainer.id = "checkboxContainer";

// Agregar texto y atributos
label.textContent = "Acepto los terminos y condiciones";
$checkbox.setAttribute('type', "checkbox");

// Insertar elementos en el DOM
button.insertAdjacentElement("beforebegin", $checkbox);
button.insertAdjacentElement("beforebegin", label);
button.insertAdjacentElement("beforebegin", radioButtonsContainer);

const agregarCheckbox = formulario.querySelector('#radioContainer');
agregarCheckbox.insertAdjacentElement("afterend", checkboxContainer);

// Agregar estilos y opciones al select
$select.classList.add("select");
opcionDefault.textContent = 'Select an city...';
opcionDefault.disabled = true;
opcionDefault.selected = true;
$select.appendChild(opcionDefault);

formulario.insertBefore($select, formulario.firstChild);

// Llamada a la función para llenar el select con las ciudades
funcionAsincronaCiudades($select);

// Validar el checkbox de términos y condiciones
const validar_checkbox = () => {
    button.disabled = !$checkbox.checked;
};

$checkbox.addEventListener("change", validar_checkbox);

// Deshabilitar el botón inicialmente
button.disabled = true;

// Cargar géneros y lenguajes
cargarGeneros(radioButtonsContainer);
cargarLenguajes(checkboxContainer); // Pasamos checkboxContainer como argumento

// Asignar evento de submit al formulario
formulario.addEventListener('submit', (event) => {
    if (!is_valid(event, 'form [required]')) {
        event.preventDefault();
    }
});

// Hacer que todos los campos sean requeridos
const camposRequeridos = formulario.querySelectorAll('input, select, textarea');
camposRequeridos.forEach(campo => {
    campo.setAttribute('required', true);
});