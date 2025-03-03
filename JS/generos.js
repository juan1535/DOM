// export async function cargarGeneros() {
//     try {
//         // Reemplaza la URL con la URL de tu archivo JSON remoto
//         const response = await fetch('generos.json'); // Ruta remota
//         const genderData = await response.json(); // Convierte la respuesta en JSON
        
//         // Recorre el JSON y crea los radio buttons
//         genderData.forEach(gender => {
//             const radioButton = document.createElement('input');
//             radioButton.setAttribute('type', 'radio');
//             radioButton.setAttribute('name', 'gender'); // Asegúrate de que todos tengan el mismo 'name'
//             radioButton.setAttribute('id', `gender-${gender.id}`);
//             radioButton.setAttribute('value', gender.gender);

//             const radioLabel = document.createElement('label');
//             radioLabel.setAttribute('for', `gender-${gender.id}`);
//             radioLabel.textContent = gender.gender;

//             // Insertamos los radio buttons y labels en el contenedor
//             radioButtonsContainer.appendChild(radioButton);
//             radioButtonsContainer.appendChild(radioLabel);
//         });
//     } catch (error) {
//         console.error("Error al cargar el archivo JSON:", error);
//     }
// }