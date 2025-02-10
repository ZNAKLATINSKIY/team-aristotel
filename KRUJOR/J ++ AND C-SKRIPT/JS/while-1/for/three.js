function isPrime(x) {
    x = Math.abs(x)

    for (let i = x; i > -x; --i) {
        if (x % i === 0) {
            return 'Не простое число';
        }
    }

    return 'Простое число';
}
console.log(isPrime(-111))
