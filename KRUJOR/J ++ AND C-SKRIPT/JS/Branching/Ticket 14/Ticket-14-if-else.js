

// Даны пять целых чисел. 
// Найти количество положительных чисел в исходном наборе.


let one = parseInt(prompt("Число один: "));
let two = parseInt(prompt("Число два: "));
let three = parseInt(prompt("Число три: "));
let four = parseInt(prompt("Число четыре: "));
let five = parseInt(prompt("Число пять: "));

let number = 0;

if (one > 0) {
    number += 1;
}
if (two > 0) {
    number += 1;
}
if (three > 0) {
    number += 1;
}
if (four > 0) {
    number += 1;
}
if (five > 0) {
    number += 1;
} 
alert("Вот сколько положительех чисел: " + number)

