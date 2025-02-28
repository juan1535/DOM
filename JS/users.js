export const users = async () => {
    let data = await fetch ('https://jsonplaceholder.typicode.com/users');
    let response = await data.json();
    return response;
}
