

// Написать алгоритм, позволяющий получить 
// словесное наименование школьных оценок.


let number;
number = parseInt(prompt('Какая оценка: '))

switch (number) {
    case 1:
        alert("КОЛ!")
        break;
    case 2:
        alert("ДВОЙКА!")
        break;
    case 3:
        alert("ТРОЯН")
        break;
    case 4:
        alert("ЧЕТВЕРТАК")
        break;
    case 5:
        alert("ОТЛИЧНО")
        break;
    default:
        alert("Нет такого")
}