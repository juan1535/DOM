const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const contrasena = document.querySelector('#contrasena');
const button = document.querySelector('#button');
const body = document.body;

const ciudades = async () => {
    const data = await fetch('data.json')
    const ciudades = await data.json();
    console.log(ciudades);
}

ciudades()

const validar  = (event) => {
   
    // Detenemos el evento
    event.preventDefault()
    if (nombre.value == '') {
        // Validamos que el nombre tenga datos
        alert('El nombre es obligatorio')
        nombre.focus()
    }
}

const contextMenu = () => {
    alert('?')
}

const dblclick = () => {
    alert('doble click')
}

const mousedown = () => {
    alert('El evento funciona cuando se presiona cualquier botón sobre el elemento')
}


// button.addEventListener('click', validar)
// button.removeEventListener('click', validar)
// formulario.addEventListener('contextMenu', contextMenu)
// body.addEventListener('dblclick', dblclick)
// body.addEventListener('mousedown', mousedown)