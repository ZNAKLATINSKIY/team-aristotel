
// Зациклить вывод дней недели таким образом: «День недели. 
// Хотите увидеть следующий день?» и так до тех пор, 
// пока пользователь нажимает OK. 

a = +prompt('Вы хотите увидеть дни недели? (1 - да, 2 - нет): ')
let b
if (a == 1) {
    b = true
    for (i = 1; d = true; i++) {
        if (i == 1) {
            console.log("Понедельник")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 2) {
            console.log("Вторник")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 3) {
            console.log("Среда")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 4) {
            console.log("Четверг")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 5) {
            console.log("Пятница")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 6) {
            console.log("Суббота")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 7) {
            console.log("Восресенье")
            let c = +prompt('Вы хотите увидеть следующий день? (1 - да, 2 - нет): ')
            if (c == 2) {
                d = false
                break
            }
        } else if (i == 8) {
            let y = +prompt('Вы заново все начать?? (1 - да, 2 - нет): ')
            if (y == 1) {
                i -= i
            } 
        }
    }
} else if (a == 2) {
    console.log("Хорошо")
} else {
    console.log("Непонятный ввод")
}
