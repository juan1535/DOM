export async function cargarGeneros(radioButtonsContainer) {
    try {

        const data = await fetch('../JSON/generos.json');
        const genderData = await data.json();

            genderData.forEach(gender => {
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.setAttribute('name', 'gender');
            radioButton.setAttribute('id', `gender-${gender.id}`);
            radioButton.setAttribute('value', gender.gender);

            const radioLabel = document.createElement('label');
            radioLabel.setAttribute('id', `gender-${gender.id}`);
            radioLabel.textContent = gender.gender;
            
            radioButtonsContainer.append(radioButton, radioLabel);
        });
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
}
