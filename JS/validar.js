const dom = document;

const is_valid = (event, selector) => {
    event.preventDefault();
    const lista = dom.querySelectorAll(selector);
    let bandera = true;

    const regexSoloLetras = /^[A-Za-z]+$/;
    const regexSoloNumeros = /^[0-9]+$/;
    const regexAlfanumerico = /^[A-Za-z0-9!@#$%^&*()_+]+$/;

    lista.forEach(elemento => {
        let esValido = true;

        if (
            (elemento.type === 'text' && elemento.value.trim() === '') ||
            (elemento.type === 'tel' && elemento.value.trim() === '') ||
            (elemento.type === 'password' && elemento.value.trim() === '') ||
            (elemento.tagName === 'SELECT' && elemento.selectedIndex === 0)
        ) {
            esValido = false;
        }

        if (elemento.id === 'nombre' || elemento.id === 'apellido') {
            esValido = regexSoloLetras.test(elemento.value.trim());
            elemento.setCustomValidity(esValido ? '' : 'Solo se permiten letras.');
        }

        if (elemento.id === 'documento' || elemento.id === 'telefono') {
            esValido = regexSoloNumeros.test(elemento.value.trim());
            elemento.setCustomValidity(esValido ? '' : 'Solo se permiten números.');
        }

        if (elemento.id === 'usuario' || elemento.id === 'contrasena') {
            esValido = regexAlfanumerico.test(elemento.value.trim());
            elemento.setCustomValidity(esValido ? '' : 'Debe contener letras y/o números.');
        }

        if (esValido) {
            elemento.classList.add('valido');
            elemento.classList.remove('invalido');
        } else {
            elemento.classList.add('invalido');
            elemento.classList.remove('valido');
            bandera = false;
        }

        elemento.addEventListener('input', () => {
            elemento.setCustomValidity('');
            elemento.classList.remove('invalido');
            elemento.classList.add('valido');
        });
    });

   //this es el formulario
let checked = document.querySelectorAll('input[type=checkbox]:checked');
if (checked.length == 0) {
    //SINO HA SELECCIONADO
    alert("ERROR");
    return false;
} else if (checked.length <= 2) {
    //SINO HA SELECCIONADO MAS DE (5 o N) OPCIONES DISPONIBLES.
    alert("ERROR");
    return false;
} 

let area_interes = "";
for (let i = 0, length = checked.length; i < length; i++) {
    area_interes += checked[i].value + ",";             
}

}
export default is_valid;


// DEBO DE HACER QUE NO PERMITA NI SIQUIERA COLOCAR NUMEROS EN LOS CAMPOS DE NOMBRE Y APELLIDO Y NO PERMITIR LETRAS EN DOCUMENTO Y TELEFONO