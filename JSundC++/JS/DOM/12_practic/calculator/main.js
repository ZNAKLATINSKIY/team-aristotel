const leftNum = document.getElementById('leftNum');
const rightNum = document.getElementById('rightNum');
let operator = document.getElementById('operator');
const calculatorButtons = document.getElementsByClassName('button');
const result = document.getElementById('calculator__result');
const clear = document.getElementById('clear');

function Calculate() {
    const leftValue = parseFloat(leftNum.value);
    const rightValue = parseFloat(rightNum.value);
    operator.textContent = this.textContent;

    switch(operator.textContent) {
        case '+':
            result.textContent = leftValue + rightValue;
            break;
        case '-':
            result.textContent = leftValue - rightValue;
            break;
        case '*':
            result.textContent = leftValue * rightValue;
            break;
        case '/':
            if (rightValue !== 0) {
                result.textContent = leftValue / rightValue;
            } else {
                result.textContent = 'Error: Обнаружен НОЛЬ';
            }
            break;
    }
    if (result.textContent === "NaN") {
        result.textContent = 'Error: Введите число';
    }
}

function Clear() {
    leftNum.placeholder = 'Первое число';
    rightNum.placeholder = 'Второе число';
    operator.textContent = '';
    result.textContent = 'Результат';
}

for (let i = 0; i < calculatorButtons.length; i++) {
    calculatorButtons[i].addEventListener('click', Calculate);
}
clear.addEventListener('click', Clear);