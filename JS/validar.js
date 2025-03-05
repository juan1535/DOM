const dom = document;
const is_valid = (event, formulario) => {
    event.preventDefault();
    const lista = dom.querySelectorAll(formulario)
    lista.forEach(elemento => {
        console.log(elemento);
    });
}

export default is_valid;