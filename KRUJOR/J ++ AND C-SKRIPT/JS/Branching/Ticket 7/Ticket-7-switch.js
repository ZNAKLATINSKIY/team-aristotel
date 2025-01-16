const fun = (bucva) => {
    switch (bucva) {
        case "А": case "а": case "Е": case "е": case "Ё": case "ё": case "И": case "и": case "О": case "о": case "У": case "у": case "Ы": case "ы": case "Э": case "э": case "Ю": case "ю": case "Я": case "я":
            alert("Гласная")
            break
        default:
            alert("Это не гласная буква")
    }
}
