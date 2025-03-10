const dom = document;

const is_valid = (event, selector) => {
    event.preventDefault();
    const lista = dom.querySelectorAll(selector);
    let bandera = true;

    // Expresiones regulares
    const regexSoloLetras = /^[A-Za-z]+$/;
    const regexSoloNumeros = /^[0-9]+$/;
    const regexAlfanumerico = /^[A-Za-z0-9!@#$%^&*()_+]+$/;

    // Validar inputs y selects
    lista.forEach(elemento => {
        if (
            (elemento.type === 'text' && elemento.value.trim() === '') ||
            (elemento.type === 'tel' && elemento.value.trim() === '') ||
            (elemento.type === 'password' && elemento.value.trim() === '') ||
            (elemento.tagName === 'SELECT' && elemento.selectedIndex === 0)
        ) {
            elemento.classList.add('error');
            bandera = false;
        } else {
            elemento.classList.remove('error');
        }

        // Validar con expresiones regulares
        if (elemento.id === 'nombre' || elemento.id === 'apellido') {
            if (!regexSoloLetras.test(elemento.value.trim())) {
                elemento.classList.add('error');
                bandera = false;
                elemento.setCustomValidity('Este campo solo debe contener letras.');
            } else {
                elemento.setCustomValidity('');
                elemento.classList.remove('error');
            }
        }

        if (elemento.id === 'documento' || elemento.id === 'telefono') {
            if (!regexSoloNumeros.test(elemento.value.trim())) {
                elemento.classList.add('error');
                bandera = false;
                elemento.setCustomValidity('Este campo solo debe contener números.');
            } else {
                elemento.setCustomValidity('');
                elemento.classList.remove('error');
            }
        }

        if (elemento.id === 'usuario' || elemento.id === 'contrasena') {
            if (!regexAlfanumerico.test(elemento.value.trim())) {
                elemento.classList.add('error');
                bandera = false;
                elemento.setCustomValidity('Este campo puede contener letras, números y caracteres especiales.');
            } else {
                elemento.setCustomValidity('');
                elemento.classList.remove('error');
            }
        }
    });

    // Validar que haya al menos 2 checkboxes seleccionados
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxesMarcados = [...checkboxes].filter(checkbox => checkbox.checked).length;

    if (checkboxesMarcados < 2) {
        checkboxes.forEach(checkbox => checkbox.classList.add('error'));
        bandera = false;
        const mensajeError = document.createElement('div');
        mensajeError.textContent = 'Debes seleccionar al menos 2 opciones.';
        mensajeError.classList.add('mensaje-error');
        const checkboxContainer = document.querySelector('#checkboxContainer');
        if (checkboxContainer && !checkboxContainer.querySelector('.mensaje-error')) {
            checkboxContainer.appendChild(mensajeError);
        }
    } else {
        checkboxes.forEach(checkbox => checkbox.classList.remove('error'));
        const checkboxContainer = document.querySelector('#checkboxContainer');
        const mensajeErrorExistente = checkboxContainer?.querySelector('.mensaje-error');
        if (mensajeErrorExistente) {
            mensajeErrorExistente.remove();
        }
    }

    // Validar que al menos un radio button de cada grupo esté seleccionado
    const gruposRadios = new Set([...document.querySelectorAll('input[type="radio"]')].map(radio => radio.name));

    gruposRadios.forEach(grupo => {
        const radioSeleccionado = document.querySelector(`input[name="${grupo}"]:checked`);
        const radiosGrupo = document.querySelectorAll(`input[name="${grupo}"]`);

        if (!radioSeleccionado) {
            radiosGrupo.forEach(radio => radio.classList.add('error'));
            bandera = false;
            const mensajeError = document.createElement('div');
            mensajeError.textContent = `Debes seleccionar una opción en ${grupo}.`;
            mensajeError.classList.add('mensaje-error');
            const radioButtonsContainer = document.querySelector('#radioContainer');
            if (radioButtonsContainer && !radioButtonsContainer.querySelector('.mensaje-error')) {
                radioButtonsContainer.appendChild(mensajeError);
            }
        } else {
            radiosGrupo.forEach(radio => radio.classList.remove('error'));
            const radioButtonsContainer = document.querySelector('#radioContainer');
            const mensajeErrorExistente = radioButtonsContainer?.querySelector('.mensaje-error');
            if (mensajeErrorExistente) {
                mensajeErrorExistente.remove();
            }
        }
    });

    // Validar el select
    const select = document.querySelector('select');
    if (select && select.selectedIndex === 0) {
        select.classList.add('error');
        bandera = false;
        const mensajeError = document.createElement('div');
        mensajeError.textContent = 'Debes seleccionar una opción en el campo de ciudad.';
        mensajeError.classList.add('mensaje-error');
        select.insertAdjacentElement('afterend', mensajeError);
    } else if (select) {
        select.classList.remove('error');
        const mensajeErrorExistente = select.nextElementSibling;
        if (mensajeErrorExistente && mensajeErrorExistente.classList.contains('mensaje-error')) {
            mensajeErrorExistente.remove();
        }
    }

    return bandera;
};

export default is_valid;