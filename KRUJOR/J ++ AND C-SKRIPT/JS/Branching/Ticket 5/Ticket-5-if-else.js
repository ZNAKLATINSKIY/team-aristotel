let number1, number2, result;
number1 = parseInt(prompt("Введите первое число: "))
number2 = parseInt(prompt("Введите второе число: "))
result = parseInt(prompt("Каков результат умножения двух чисел? Ответ:  "))

if (number1 * number2 === result) {
    alert("Верно!")
}
else {
    alert("Неверно!")
}