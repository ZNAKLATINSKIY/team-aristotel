

// В зависимости от набранного количества баллов, 
// напишите ваши планы.



let prompt = parseInt(prompt("Сколько баллов?: "))

if (prompt >= 80 && prompt <= 100) {
    alert("поступлю на бюджет")
} else if (prompt >= 60 && prompt <= 79) {
    alert("есть шанс поступить на бюджет")
} else if (prompt >= 40 && prompt <= 59) {
    alert("экзамены сданы, рассматриваю все варианты")
} else if (prompt >= 0 && prompt <= 39) {
    alert("«А знаешь, всё ещё будет!»")
}   