const input = document.querySelector('input');
const contrasena = document.querySelector('input[type="password"]')
console.log(input);
console.log(contrasena);
console.log(input.type);
console.log(input.value);
console.log(input.placeholder);
// console.log(input.placeholder);

input.value = 'Juan Franco'
console.log(contrasena.value ? 'lleno' : 'vacio');
contrasena.value = '123456'
// contrasena.type = 'text'

contrasena.setAttribute('type', 'text');