async function llamandoAPI() {
    
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ed92e010f7mshaf13bff8923d8dcp17c7d8jsna6a8153a5095',
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Error al obtener la API") 
        const data = await response.json();
        

        const $container = document.createElement('div');
        const $contenedor_titulo = document.createElement('div');
        const $h1_tittle = document.createElement('h1');
        const $contenedor_descripcion = document.createElement('div');
        const $descripcion = document.createElement('p');

        $container.innerHTML = "";
            data.data.filter(posicion => posicion.images.webp.image_url).slice(0, 6).forEach(posicion => {
                const $card = document.createElement("div");
                $card.classList.add("card");
                $card.innerHTML = `
                    <img src="${data.images.webp.image_url}" alt="${data.title}">
                    <h3>${data.title}</h3>
                `;
                $container.appendChild(animeCard);

            });

    } catch (error) {
        console.error(error);
    }
}




// const list = document.querySelector("#list");
// let item = document.createElement("li");
// item.textContent = "Item nuevo";
// item.classList.add("item");
// list.append(item);
//   dias.map(({}) => {
//     // Creamos los elementos
//     const $card = document.createElement("div");
//     // Agregamos los estilos css
//     $card.classList.add("card");
//     // Agregamos los valores del objeto a los elementos
//     $card_h2.textContent = name;
//     // Agregar los atributos
//     $card_img.setAttribute("src", img);
//     // Agregamos los elementos hijos
//     $card_body.appendChild($card_img);
// })