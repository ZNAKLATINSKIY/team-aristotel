const a=Number(prompt("Введите первое число: "));
const b=Number(prompt("Введите второе число: "));
let i = 0;
    while(Math.min(a, b) >= i){
        if(a % i === 0 && b % i === 0){
            console.log(i);
        }
        i++;
    }