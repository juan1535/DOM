const card =  {
    id: 1,
    name: "Titulo de la nueva card",
    img: "https://picsum.photos/640/360",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
  };

  const $cards = document.querySelector("#cards");

//   Creamos los elementos de la card

const $card = document.createElement("div");
const $card_header = document.createElement("div");
const $card_title = document.createElement("h2");
const $card_body = document.createElement("div");
const $card_img = document.createElement("img");
const $card_paragraph = document.createElement("p");
const $button = document.createElement("a");
const $button_span = document.createElement("span");
const $button_icon = document.createElement("i");


//  Agregamos los estilos css
$card.classList.add("card");
$card_title.classList.add("card__title");
$card_header.classList.add("card__header");
$card_body.classList.add("card__body");
$card_img.classList.add("card__img");
$card_paragraph.classList.add("card__paragraph");
$button.classList.add("button", "button--outline");
$button_span.classList.add("button__text");
$button_icon.classList.add("bx", "bxs-chevro-rigth", "button__icon");



// Agregamos los valores del objeto a los elementos
$card_title.textContent = card.name;
$card_paragraph.textContent = card.paragraph;
$button_span.textContent = "Saber más";

//  Agregamos los atributos
$card_img.setAttribute("src",card.img);
$card_img.setAttribute("alt",card.name);


// Agregamos los elementos hijos
$card_header.append($card_title);
$button.append($button_span, $button_icon);
$card_body.append($card_img, $card_paragraph, $button);
$card.append($card_header, $card_body);

//  insertAdjacent
// $cards.append($card);
// $cards.insertAdjacentElement("beforebegin",$card);
$cards.insertAdjacentElement("afterbegin", $card);
// $cards.insertAdjacentElement("beforeend", $card);
// $cards.insertAdjacentElement("afterend", $card);





const array = [...$cards.children]
array.map((item, index, array) => {
    
   
    for (let i = 0; i < array.length; i++) {
        
        if (index % 2 == 0) {
            
            item.querySelector('a.button').classList.toggle('bg-error')
            
        } else {
        
            item.querySelector('a.button').classList.toggle('bg-white')
        }

        if (index === 4) {
            item.style.background = '#fff'
            // console.log(item);
            // $cards.removeChild(item)
            
            // $cards.querySelector('#cards').removeChild($cards);
            }
        }


        // return item();
    })

    for (let i = array.length - 1; i >= 0; --i) {
        array[i].remove();
    }
    
    // $cards.querySelector('#cards').removeChild();

    // $cards.remove();
    // console.log($cards);
    