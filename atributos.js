const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const documento = document.querySelector('#documento');
const usuario = document.querySelector('#usuario');
const contrasena = document.querySelector('#contrasena');
const button = document.querySelector('#button');
const formulario = document.querySelector('#formulario');
// const body = document.body;

// Se creó el select
const $select = document.createElement('select')

//  Agregamos los estilos css 
$select.classList.add("input")

// Agregamos las opciones

const opcionDefault = document.createElement("option");
opcionDefault.textContent = "Select a city";
opcionDefault.value = "";
opcionDefault.disabled = true;
opcionDefault.selected = true;
$select.appendChild(opcionDefault)

// Ciudades es eL array del json.


async function funcionAsincronaCiudades() {
    
    try {
    
        const data = await fetch('data.json')
            const ciudades = await data.json();
    
            ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.id
                option.textContent = ciudad.nombre;
                $select.appendChild(option)    
                
            });
            
        } catch (error) {
            console.log(error);
            
        }


    }
    
    formulario.insertBefore($select, formulario.firstChild);

    funcionAsincronaCiudades()




// const validar  = (event) => {
   
    // Detenemos el evento
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