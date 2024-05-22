// URL de la API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';


async function fetchAndPrintUsers() {
    try {
        
        const response = await fetch(apiUrl);

        
        const users = await response.json();
        
        
        console.log(users);
    } catch (error) {
        console.error('Error:', error);
    }
}


fetchAndPrintUsers();

let usersGlobal = []
axios.get ('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    const {data} = res
    usersGlobal = data
})
.catch((err) => console.error(err))