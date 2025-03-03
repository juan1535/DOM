import { funcionAsincronaCiudades } from "./ciudades.js";
import { cargarGeneros } from "./cargarGeneros.js";
import { cargarLenguajes } from "./lenguajes.js";

    // Creamos las variables y asignamos algo

    // const nombre = document.querySelector('#nombre');
    // const apellido = document.querySelector('#apellido');
    // const telefono = document.querySelector('#telefono');
    // const documento = document.querySelector('#documento');
    // const usuario = document.querySelector('#usuario');
    // const contrasena = document.querySelector('#contrasena');
    // const body = document.body;
    const button = document.querySelector('button');
    const formulario = document.querySelector('#formulario');
    const opcionDefault = document.createElement("option");
    
    
    // Creamos los elementos
    const $select = document.createElement('select');
    const $checkbox = document.createElement('input');
    const label = document.createElement('label');
    const radioButtonsContainer = document.createElement('div');
    const checkboxContainer = document.createElement('div')

    // Se le asignan id
    label.id = "labelsito";
    $checkbox.id = "terminos";
    radioButtonsContainer.id = "radioContainer"
    checkboxContainer.id = "checkboxContainer"

    // Agregamos texto
    label.textContent = "Acepto los terminos y condiciones";

    // Agregar los atributos
    $checkbox.setAttribute('type', "checkbox");

    // Insertarlo antes de validar
    button.insertAdjacentElement("beforebegin", $checkbox);
    button.insertAdjacentElement("beforebegin", label);
    button.insertAdjacentElement("beforebegin", radioButtonsContainer);
    button.insertAdjacentElement("beforebegin", checkboxContainer);

    //  Agregamos los estilos css al input del select
    $select.classList.add("select");

    // Agregamos las opciones
    opcionDefault.textContent = 'Select an city...';
    opcionDefault.disabled = true;
    opcionDefault.selected = true;
    $select.appendChild(opcionDefault);

    // Ciudades es el array del json.
    formulario.insertBefore($select, formulario.firstChild);
    
    // Llamada a la función para llenar el select con las ciudades
    funcionAsincronaCiudades($select);

    const validar_checkbox = () => {
        ($checkbox.checked) ? button.removeAttribute("disabled") : button.setAttribute("disabled", "");
    };

    $checkbox.addEventListener("change", validar_checkbox);

    
    // Llamamos a las funciones y sus argumentos
    cargarGeneros(radioButtonsContainer);
    cargarLenguajes(checkboxContainer);    


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
