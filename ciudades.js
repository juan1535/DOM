export async function funcionAsincronaCiudades($select) {
    
    try {
    
        const data = await fetch('data.json')
            const ciudades = await data.json();
            ciudades.forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.id
                option.textContent = ciudad.nombre;
                $select.appendChild(option)
            });
            
        } catch (error) {
            console.log(error);
        }


    }