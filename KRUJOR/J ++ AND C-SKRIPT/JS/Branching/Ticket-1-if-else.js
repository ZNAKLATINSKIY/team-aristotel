import * as MAXNUMBER from "./function";



let A = parseInt(prompt('Какой градус у угла A? '));
let B = parseInt(prompt('Какой градус у угла B? '));
let C = parseInt(prompt('Какой градус у угла C? '));


if ( A + B + C > 180) {
    alert('Нет такого')
} else if (A == A && B, B == C && A, C == A && B) {
    alert('Равносторонний треугольник')
} else if ((A == B || A == C || B == C) && (A + B > C && A + C > B && B + C > A)) {
    alert('Равнобедренный треугольник')
} else if (A == 90, B == 90, C == 90) {
    alert('Прямоугольный треугольник')
} else if (MAXNUMBER(A, B, C) > 90 && Math.max(A, B, C) < 180) {
    alert('Тупоугольный треугольник')
} else if (A < 90, B < 90, C < 90) {
    alert('Остроугольный треугольник')
} else {
    alert('Ошибка данных')
}
