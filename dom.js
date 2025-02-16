const dom = document;
const body = dom.body;

// const header = dom.querySelector('header');
// let styles = dom.styleSheets;
// let script = dom.scripts;
// let links = dom.links;
// let img = dom.images;
// let form = dom.forms;

// const documento = dom.getElementById("documento")
// const api = dom.getElementById("apis")
// const lista = dom.getElementsByClassName("item")
// const lista = dom.querySelectorAll('.item')
// const listaA = dom.getElementsByClassName('item')
// const listaB = dom.getElementsByClassName('item')

// const hermanos = dom.querySelectorAll('ul.list > li.item')
const padre = dom.querySelector('ul')
// documento.innerText = '¿Que es el DOM?';

// console.log(hermanos);
// console.log(padre);
// console.log(padre.childNodes);
// console.log(padre.childElementCount);
// console.log(padre.children);
// console.log(padre.firstChild);
// console.log(padre.lastChild);
// console.log(padre.firstElementChild);
// console.log(padre.lastElementChild);
// console.log(padre.previousSibling);         //  elemento hermano anterior (muestra #text)
// console.log(padre.nextSibling);             //  elemento hermano siguiente
// console.log(padre.nextElementSibling);      //  elemento hermano siguiente (muestra, por ejemplo, si es h1,h2, o lo que sea)
// console.log(padre.previousElementSibling);  //  elemento hermano siguiente (muestra, por ejemplo, si es h1,h2, o lo que sea)

// console.log(padre.parentNode);
// console.log(padre.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);

// const $card = dom.querySelector('.card')
// console.log($card.classList.contains('card'));

// $card.classList.add("bg-dark")  // agrega algo
// $card.classList.remove("card")  // remueve algo
// $card.classList.toggle("card")  // Si tiene algo lo quita y sino lo tiene se lo agrega 

let texto = `Si tenemos elementos <b>HTML</b> y queremos modificar su contenido, podemos hacerlo desde<b>JavaScript</b> desde ciertas propiedades de elementos del <b>DOM</b>.
<br>
Estas propiedades son muy útiles tanto para obtener información,para modificarla, así como para eliminarla.`

// const elementos = dom.querySelector('#elementos');
// console.log(elementos);

elementos.textContent = texto;
elementos.innerHTML = texto;



body.style.backgroud = "rgb(0,0,0)";

setTimeout(() => {
    body.style.backgroud = "";
}, 3000);











