const acc = document.querySelector('.navbar__account')
const auth = document.querySelector('.navbar__auth')

import { User } from './models.js';

let existingUser = JSON.parse(localStorage.getItem('userData'));

if (!existingUser) {
    existingUser = new User('', '', '', false, false);
    localStorage.setItem('userData', JSON.stringify(existingUser));
}
if (existingUser.authorization === true) {
    auth.style.display = 'none';
    acc.style.display = 'block';
    acc.textContent = existingUser.name;
}
