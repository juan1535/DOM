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
        let esValido = true;

        if (
            (elemento.type === 'text' && elemento.value.trim() === '') ||
            (elemento.type === 'tel' && elemento.value.trim() === '') ||
            (elemento.type === 'password' && elemento.value.trim() === '') ||
            (elemento.tagName === 'SELECT' && elemento.selectedIndex === 0)
        ) {
            esValido = false;
        }

        // Validar con expresiones regulares
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

        // Aplicar clases de validación
        if (esValido) {
            elemento.classList.add('valido');
            elemento.classList.remove('invalido');
        } else {
            elemento.classList.add('invalido');
            elemento.classList.remove('valido');
            bandera = false;
        }

        // Resetear mensaje de error al escribir
        elemento.addEventListener('input', () => {
            elemento.setCustomValidity('');
            elemento.classList.remove('invalido');
            elemento.classList.add('valido');
        });
    });

    // Validación de checkboxes (mínimo 2 seleccionados)
const checkboxContainer = document.querySelector('#checkboxContainer'); // Contenedor correcto

if (checkboxContainer) {
    const checkboxes = [...checkboxContainer.querySelectorAll('input[type="checkbox"]')];

    // Mensaje de error dinámico
    let mensajeError = checkboxContainer.querySelector('.mensaje-error');
    if (!mensajeError) {
        mensajeError = document.createElement('div');
        mensajeError.classList.add('mensaje-error');
        checkboxContainer.appendChild(mensajeError);
    }

    // Función para validar los checkboxes

    const checkboxContainer = document.querySelector('#checkboxContainer'); // Este contenedor debe incluir únicamente los checkboxes de lenguajes
    if (checkboxContainer) {
        const checkboxes = [...checkboxContainer.querySelectorAll('input[type="checkbox"]')];

        // Función para validar el grupo de checkboxes
        const validarCheckboxes = () => {
            const checkedCount = checkboxes.filter(chk => chk.checked).length;
            if (checkedCount < 2) {
                bandera = false;
                // Asigna el mensaje de error al primer checkbox para que se muestre el tooltip nativo del required
                if (checkboxes.length > 0) {
                    checkboxes[0].setCustomValidity('Debes seleccionar al menos 2 opciones.');
                }
            } else {
                // Limpia el mensaje de error en todos los checkboxes
                checkboxes.forEach(chk => chk.setCustomValidity(''));
            }
        };

        // Validar inicialmente y al cambiar la selección
        validarCheckboxes();
        checkboxes.forEach(chk => {
            chk.addEventListener('change', validarCheckboxes);
        });
    }

    // ✅ Si todo está bien, enviar el formulario
    if (bandera) {
        event.target.submit();
    }

        return bandera;
    };
}
export default is_valid;
