
// Найти среднее число из трех



let A = parseInt(prompt("Число один: "))
let B = parseInt(prompt("Число два: "));
let C = parseInt(prompt("Число три: "));

if (A === B && B === C) {
    alert("Числа одинаковы");
} else if ((B > A && B < C) || (B < A && B > C)) {
    alert("Среднее число: " + B);
} else if ((A > B && A < C) || (A < B && A > C)) {
    alert("Среднее число: " + A);
} else {
    alert("Среднее число: " + C);
}
