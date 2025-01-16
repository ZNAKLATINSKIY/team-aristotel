const fun = (hour) => {
    switch(hour) {
        case 0, 1, 2, 3, 4, 5:
            alert("Ночь.");
            break
        case 6, 7, 8, 9, 10, 11:
            alert("Утро.");
            break
        case 12, 13, 14, 15, 16, 17:
            alert("День");
            break
        case 18, 19, 20, 21, 22, 23:
            alert("Вечер.");
            break
        default:
            alert("Введены некорректное значение");
    }
}