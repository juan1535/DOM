import { users } from "./users.js";
import { post } from "./post.js";


const imprimir = async () => {

try {
    
const usuario = await users();

await Promise.all(usuario.map(async ({name, email, id, address, company, phone, username, website}) => {

    let div = document.createElement('div');
    
    let htmlName = document.createElement('div');
    let htmlEmail = document.createElement('div');
    let htmlAddress = document.createElement('div');
    let htmlCompany = document.createElement('div');
    let htmlPhone = document.createElement('div');
    let htmlUsername = document.createElement('div');
    let htmlWebsite = document.createElement('div');
    let htmlButton = document.createElement('button');
    htmlName.innerText = name;
    htmlEmail.innerText = email;
    htmlAddress.innerText = address.street;
    htmlCompany.innerText = company.name;
    htmlPhone.innerText = phone;
    htmlUsername.innerText = username;
    htmlWebsite.innerText = website;
    htmlButton.innerText = "Cuantos post"


    div.append(htmlName, htmlEmail, htmlAddress, htmlCompany, htmlPhone, htmlUsername, htmlWebsite, htmlButton)
    div.classList.add('card')
    

    root.appendChild(div);

    htmlButton.addEventListener('click', () => {

        post(id).then(data => {
            alert(`El usuario ${name} tiene ${data.length} posts`)
        })

    })
    console.log(usuario);


}));

} catch (error) {
    
console.log("Error");


}}

imprimir();
