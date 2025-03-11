import is_valid from './validar.js'; // Importa la función is_valid

export async function cargarLenguajes(checkboxContainer) {
    try {
        const data = await fetch('../JSON/lenguajesProgramacion.json');
        const lenguajesData = await data.json();

        lenguajesData.forEach(lenguajes => {
            const $checkbox = document.createElement('input');
            $checkbox.setAttribute('type', 'checkbox');
            $checkbox.setAttribute('name', 'lenguaje');
            $checkbox.setAttribute('id', `lenguajes-${lenguajes.id}`);
            $checkbox.setAttribute('value', lenguajes.lenguajes);

            const checkboxLabel = document.createElement('label');
            checkboxLabel.setAttribute('for', `lenguajes-${lenguajes.id}`);
            checkboxLabel.textContent = lenguajes.lenguajes;

            checkboxContainer.append($checkbox, checkboxLabel);
        });

        // Obtén el formulario
        const formulario = document.querySelector('#formulario');
        if (formulario) {
            formulario.insertBefore(checkboxContainer, formulario.querySelector('button'));

            // Asignar evento de submit al formulario
            formulario.addEventListener('submit', (event) => {
                if (!is_valid(event, 'form [required]')) {
                    event.preventDefault();
                }
            });
        }
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
}