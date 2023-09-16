let name = document.querySelector('#name');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(name, login, password) {
    this.name = name;
    this.login = login;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

function showMessage(message, isError, fieldId) {
    const messageContainer = document.querySelector(`#${fieldId}Message`);
    messageContainer.textContent = message;

    if (isError) {
        messageContainer.style.backgroundColor = 'red';
        messageContainer.style.color = 'white';

    } else {
        messageContainer.style.backgroundColor = 'green';
        messageContainer.style.color = 'white';
    }
}

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const nameUser = name.value;
    const loginUser = login.value;
    const passwordUser = password.value;

    if (!nameUser) {
        alert('Пожалуйста, введите имя.', true, 'name');
        return;
    }

    if (!loginUser) {
        alert('Пожалуйста, введите email.', true, 'login');
        return;
    }

    if (!passwordUser) {
        alert('Пожалуйста, введите пароль.', true, 'password');
        return;
    }

    const user = new User(nameUser, loginUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${nameUser} вы успешно зарегистрировались`, false, 'name');
});
