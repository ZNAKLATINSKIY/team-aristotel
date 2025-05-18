const buttonUp = document.getElementById('button_up');
const buttonDown = document.getElementById('button_down');
const number = document.getElementById('number');

function NumberUP() {
    let numberValue = parseInt(number.textContent);
    number.textContent = numberValue + 1;
}
function numberDown() {
    let numberValue = parseInt(number.textContent);
    number.textContent = numberValue - 1;
}

buttonUp.addEventListener('click', NumberUP);
buttonDown.addEventListener('click', numberDown);