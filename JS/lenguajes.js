export async function cargarLenguajes() {
        
        try {
            
            const data = await fetch('../JSON/lenguajesProgramacion.json');
            const lenguajesData = await data.json();

                lenguajesData.forEach(lenguajes => {
                const $checkbox = document.createElement('input');
                $checkbox.setAttribute('type', 'checkbox');
                $checkbox.setAttribute('name', 'lenguaje');
                $checkbox.setAttribute('id', `lenguajes-${lenguajes.id}`);
                $checkbox.setAttribute('value', lenguajes.lenguajes);
                $checkbox.setAttribute('required', true);

                const checkboxLabel = document.createElement('label');
                checkboxLabel.setAttribute('for', `lenguajes-${lenguajes.id}`);
                checkboxLabel.textContent = lenguajes.lenguajes;

                checkboxContainer.append($checkbox, checkboxLabel);
            });

        } catch (error) {
            console.error("Error al cargar el archivo JSON:", error);        
        }


    }