let a = +prompt("Простое число: ");  // Вводим число и преобразуем в число

if ((a % 10 == 2) || (a % 10 == 4) || (a % 10 == 5) || (a % 10 == 6) || (a % 10 == 8) || (a % 10 == 0)) {
    console.log("Число непростое");
} else {
    let isPrime = true;

    for (let i = 2; i < a; i++) {
        if (a % i === 0) { 
            isPrime = false;
            break; 
        }
    }

    if (isPrime && a > 1) {
        console.log("Число простое");
    } else {
        console.log("Число непростое");
    }
}
