// Запросить 2 числа и найти только наибольший общий делитель.

const a=Number(prompt("Введите первое число: "));
const b=Number(prompt("Введите второе число: "));
let i = Math.min(a,b);
    while(i > 0){
        if(a % i === 0 && b % i === 0){
            alert(i);
            break;
        }
        i--;  
    }
    