const button = document.querySelector('button');
const input = document.querySelector('input');
const resultado = document.querySelector('h1');

const resource = 'users';

async function getUsers() {
    const id = Number(input.value);    const response = await fetch(`http://localhost:3000/${resource}`);

    if (!response.ok) {
        resultado.textContent = 'Erro ao buscar usuarios.';
        return;
    }

    const data = await response.json();
    const user = data.find(user => user.id === id);

    if (!user) {
        resultado.textContent = `Usuario de Id ${id} nao encontrado`;
        return;
    }

    resultado.textContent = `Usuario: ${user.name}, Idade: ${user.age}, Status: ${user.status}`;
}

resultado.textContent = 'Informe um ID e clique em Buscar';
button.addEventListener('click', getUsers);

