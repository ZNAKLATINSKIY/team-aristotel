const fun = (num1, num2, num3, num4) => {

    if (num1 !== num2 && num1 == num3 && num1 == num4) {
        alert("Число номер два отличаеться")
    } else if (num1 == num2 && num1 !== num3 && num1 == num4) {
        alert("Число номер три отличаеться")
    } else if (num1 == num2 && num1 == num3 && num1 !== num4) {
        alert("Число номер четыре отличаеться")
    } else {
        alert("Число номер один отличаеться")
    }
    
}