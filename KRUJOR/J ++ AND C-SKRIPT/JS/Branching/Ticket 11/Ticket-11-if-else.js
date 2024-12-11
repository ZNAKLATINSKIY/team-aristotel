const fun = (number1, number2, number3) => {
    if ((number1 > number3 && number2 > number3) || (number1 === number2 && number1 > number3)) {
        alert(`Сумма двух наибольших: ${number1+number2}`);
    }
    else if ((number3 > number1 && number2 > number1) || (number3 === number2 && number3 > number1)) {
        alert(`Сумма двух наибольших: ${number3+number2}`);
    }
    else if ((number3 > number2 && number1 > number2) || (number3 === number1 && number3 >number2)) {
        alert(`Сумма двух наибольших: ${number1+number3}`);
    }
    else {
        alert(`Сумма двух наибольших: ${number1+number2}`);
    }
}
