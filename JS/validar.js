const dom = document;

const regexSoloLetras = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
const regexSoloNumeros = /^[0-9]+$/;
const regexAlfanumerico = /^[A-Za-z0-9!@#$%^&*()_+]+$/;


document.addEventListener('DOMContentLoaded', () => {
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const documento = document.querySelector('#documento');
    const telefono = document.querySelector('#telefono');

    // Restringir entrada en tiempo real
    const restringirEntrada = (campoTexto, regexFiltro) => {
        campoTexto.addEventListener('keydown', (event) => {
            const key = event.key;
            if (!regexFiltro.test(key) && key !== 'Backspace' && key !== 'Tab') {
                event.preventDefault();
            }
        });

        campoTexto.addEventListener('input', () => {
            campoTexto.value = campoTexto.value.replace(new RegExp(`[^${regexFiltro.source}]`, 'g'), '');
        });
    };

    // Aplicar restricciones
    restringirEntrada(nombre, regexSoloLetras);
    restringirEntrada(apellido, regexSoloLetras);
    restringirEntrada(documento, regexSoloNumeros);
    restringirEntrada(telefono, regexSoloNumeros);
});

const is_valid = (event, selector) => {
    event.preventDefault();
    const lista = dom.querySelectorAll(selector);
    let bandera = true;


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

    let checked = document.querySelectorAll('input[type=checkbox]:checked');
    if (checked.length <= 2) {
        alert("Debes checkear al menos 2 lenguajes");
        return false;
    }

    let area_interes = "";
    for (let i = 0, length = checked.length; i < length; i++) {
        area_interes += checked[i].value + ",";
    }

    return bandera;
};

export default is_valid;