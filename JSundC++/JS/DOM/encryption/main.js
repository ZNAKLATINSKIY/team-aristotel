document.addEventListener("DOMContentLoaded", () => {
    const russianAlphabetLower = [
        "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"
    ];

    const cryptButton = document.getElementById("encryption-but");
    const startCrypt = document.getElementById("startEncryptionCode");
    const finishCryptWord = document.getElementById("finishEncryptionWord");
    const finishCryptCode = document.getElementById("finishEncryptionCode");

    function caesarCipher(word, shift) {
        let result = "";
        word.split("").forEach((char) => {
            const isUpperCase = char === char.toUpperCase();
            const lowerChar = char.toLowerCase();
            const index = russianAlphabetLower.indexOf(lowerChar);

            if (index === -1) {
                result += char; // Если символ не из алфавита, добавляем его без изменений
            } else {
                let newIndex = (index + shift) % russianAlphabetLower.length;
                if (newIndex < 0) {
                    newIndex += russianAlphabetLower.length; // Для отрицательных сдвигов
                }

                const shiftedChar = russianAlphabetLower[newIndex];
                result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
            }
        });

        if (startCrypt && finishCryptWord && finishCryptCode) {
            startCrypt.textContent = word;
            finishCryptWord.textContent = result;
            finishCryptCode.textContent = result.split("").map((char) => char.charCodeAt(0)).join(" ");
        }
    }

    cryptButton.addEventListener("click", () => {
        const word = document.getElementById("word").value;
        const shift = parseInt(document.getElementById("shift").value, 10);

        caesarCipher(word, shift);
    });
});