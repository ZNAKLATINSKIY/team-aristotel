const fun = (scobka) => {
    switch(scobka) {
        case '(':
            alert("Открытая круглая скобка")
            break
        case ')':
            alert("Закрытая круглая скобка")
            break
        case '{':
            alert("Открытая фигурная скобка")
            break
        case '}':
            alert("Закрытая фигурная скобка")
            break
        case '[':
            alert("Открытая квадратная скобка")
            break
        case ']':
            alert("Закрытая квадратная скобка")
            break
        default:
            alert("Неверный ввод данных")
    }
}