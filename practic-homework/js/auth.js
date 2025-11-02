import { User } from './models.js';

const auth = document.querySelector('#authorization');
const reg = document.querySelector('#registration');
const acc = document.getElementById('in-system');

window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData || !userData.registered) {
        auth.style.display = 'none';
        reg.style.display = 'block';
        acc.style.display = 'none';
    }
    if (userData.registered === true) {
        auth.style.display = 'block';
        reg.style.display = 'none'
        acc.style.display = 'none';
    }
    if (userData.registered === true && userData.authorization === true) {
        auth.style.display = 'none';
        reg.style.display = 'none';
        acc.style.display = 'block';
    }
    const name = document.getElementById('auth__name');
    const email = document.getElementById('auth__email');
    const pass = document.getElementById('auth__pass');


    name.textContent = userData.name;
    email.textContent = userData.email;
    pass.textContent = userData.password;

});
const exit = document.getElementById('auth__exit');
function exitHandler(event) {
    localStorage.removeItem('userData');
    window.location.href = 'index.html';
}
exit.addEventListener('click', exitHandler);



document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = new User(name, email, password, true, false );

    localStorage.setItem('userData', JSON.stringify(userData));
    location.reload();
});


document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;

    const savedUserData = JSON.parse(localStorage.getItem('userData'));

    const user = new User(
        savedUserData.name,
        savedUserData.email,
        savedUserData.password,
        savedUserData.registered,
        savedUserData.authorization
    );

    if (user.email === email && user.checkPassword(password)) {
        user.authorization = true;
        localStorage.setItem('userData', JSON.stringify(user));
        window.location.href = 'index.html';
    }
});

