const dom = document;

const is_valid = (event, selector) => {
    event.preventDefault();
    const lista = dom.querySelectorAll(selector);
    let bandera = true;

    lista.forEach(elemento => {
        if (
            (elemento.type === 'text' && elemento.value === '') || // Validar campos de texto
            (elemento.type === 'tel' && elemento.value === '') ||  // Validar campo de teléfono
            (elemento.type === 'password' && elemento.value === '') || // Validar campo de contraseña
            (elemento.tagName === 'SELECT' && elemento.selectedIndex === 0) || // Validar select
            (elemento.type === 'checkbox' && !elemento.checked) || // Validar checkboxes
            (elemento.type === 'radio' && !document.querySelector('input[name="gender"]:checked')) // Validar radio buttons
        ) {
            elemento.classList.add('error'); // Agregar clase de error
            bandera = false;
        } else {
            elemento.classList.remove('error'); // Quitar clase de error si el campo es válido
        }
    });

    return bandera;
};

export default is_valid;