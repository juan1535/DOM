import { funcionAsincronaCiudades } from "./ciudades.js";

// const nombre = document.querySelector('#nombre');
// const apellido = document.querySelector('#apellido');
// const telefono = document.querySelector('#telefono');
// const documento = document.querySelector('#documento');
// const usuario = document.querySelector('#usuario');
// const contrasena = document.querySelector('#contrasena');
// const body = document.body;
const button = document.querySelector('button');
const formulario = document.querySelector('#formulario');


// Creamos los elementos
const $select = document.createElement('select');
const $checkbox = document.createElement('input');
const label = document.createElement('label');
const radioButtonsContainer = document.createElement('div');
formulario.appendChild(radioButtonsContainer);

async function cargarGeneros() {
    try {

        const data = await fetch('generos.json');
        const genderData = await data.json();

        genderData.forEach(gender => {
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.setAttribute('name', 'gender');
            radioButton.setAttribute('id', `gender-${gender.id}`);
            radioButton.setAttribute('value', gender.gender);

            const radioLabel = document.createElement('label');
            radioLabel.setAttribute('id', `gender-${gender.id}`);
            radioLabel.textContent = gender.gender;

            radioButtonsContainer.appendChild(radioButton);
            radioButtonsContainer.appendChild(radioLabel);
        });
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
}

// Llamamos a la función para cargar los géneros
cargarGeneros();

// Se le asignan id
label.id = "labelsito";
$checkbox.id = "terminos";

// Agregamos texto
label.textContent = "Acepto los terminos y condiciones";

// formulario.append($checkbox, label);
// formulario.appendChild(label);
// $checkbox.insertAdjacentElement("afterend", label)

// Agregar los atributos
$checkbox.setAttribute('type', "checkbox");
radio_buttonPrimero.setAttribute('type', 'radio');
radio_buttonSegundo.setAttribute('type', 'radio');

// Insertarlo antes de validar
button.insertAdjacentElement("beforebegin", $checkbox);
button.insertAdjacentElement("beforebegin", label);
button.insertAdjacentElement("beforebegin", radio_buttonPrimero);
button.insertAdjacentElement("beforebegin", radio_buttonSegundo);

//  Agregamos los estilos css 
$select.classList.add("select");

// Agregamos las opciones
const opcionDefault = document.createElement("option");
opcionDefault.textContent = 'Selecciona una ciudad...'; // Corregido a español
opcionDefault.disabled = true;
opcionDefault.selected = true;
$select.appendChild(opcionDefault);

// Ciudades es el array del json.
formulario.insertBefore($select, formulario.firstChild);

// Llamada a la función para llenar el select con las ciudades
funcionAsincronaCiudades($select);

const validar_checkbox = () => {
    // Validación del checkbox para habilitar el botón
    ($checkbox.checked) ? button.removeAttribute("disabled") : button.setAttribute("disabled", "");
};

$checkbox.addEventListener("change", validar_checkbox);

// const validar  = (event) => {
//     Detenemos el evento
//     event.preventDefault()
//     if (nombre.value == '') {
// Validamos que el nombre tenga datos
//         alert('El nombre es obligatorio')
//         nombre.focus()
//     }
// }

// const contextMenu = () => {
//     alert('?')
// }

// const dblclick = () => {
//     alert('doble click')
// }

// const mousedown = () => {
//     alert('El evento funciona cuando se presiona cualquier botón sobre el elemento')
// }

// button.addEventListener('click', validar)
// button.removeEventListener('click', validar)
// formulario.addEventListener('contextMenu', contextMenu)
// body.addEventListener('dblclick', dblclick)
// body.addEventListener('mousedown', mousedown)
