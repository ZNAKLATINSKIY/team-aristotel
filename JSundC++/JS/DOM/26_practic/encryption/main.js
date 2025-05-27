document.addEventListener("DOMContentLoaded", () => {

    const russianAlphabetMap = new Map();
    const russianAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    russianAlphabet.split("").forEach((char, index) => {
        russianAlphabetMap.set(char, index);
    });

    const cryptButton = document.getElementById("encryption-but");
    const startCrypt = document.getElementById("startEncryptionCode");
    const finishCryptWord = document.getElementById("finishEncryptionWord");
    const finishCryptCode = document.getElementById("finishEncryptionCode");
    const decodingButton = document.getElementById("decoding-but");
    const startDecoding = document.getElementById("startDecoding");
    const finishDecodingWord = document.getElementById("finishDecodingWord");
    const finishDecoding = document.getElementById("finishDecoding");


    function CaesarCipher(word, shift) {
        let result = "";

        word.split("").forEach((char) => {
            const isUpperCase = char === char.toUpperCase(); // Проверяем, является ли символ заглавным
            const lowerChar = char.toLowerCase();

            if (!russianAlphabetMap.has(lowerChar)) {
                result += char;

            } else {
                // Вычисляем новый индекс с учётом сдвига
                const index = russianAlphabetMap.get(lowerChar);
                let newIndex = (index + shift) % russianAlphabet.length;
                if (newIndex < 0) {
                    newIndex += russianAlphabet.length; // Корректируем индекс для отрицательных сдвигов
                }
                // Получаем символ с новым индексом
                const shiftedChar = russianAlphabet[newIndex];
                // Если символ был заглавным, преобразуем его обратно в заглавный
                result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
            }
        });

        if (startCrypt && finishCryptWord && finishCryptCode) {
            startCrypt.textContent = word.split("").map((char) => char.charCodeAt(0)).join(" ");
            finishCryptWord.textContent = result;
            finishCryptCode.textContent = result.split("").map((char) => char.charCodeAt(0)).join(" ");
        }
    }

    function CaesarDecoding(decodingWord, decodingShift) {
        let result = "";

        decodingWord.split("").forEach((char) => {
            const isUpperCase = char === char.toUpperCase(); // Проверяем, является ли символ заглавным
            const lowerChar = char.toLowerCase();

            if (!russianAlphabetMap.has(lowerChar)) {
                result += char;

            } else {
                // Вычисляем новый индекс с учётом сдвига
                const index = russianAlphabetMap.get(lowerChar);
                let newIndex = (index - decodingShift) % russianAlphabet.length;
                if (newIndex < 0) {
                    newIndex += russianAlphabet.length; // Корректируем индекс для отрицательных сдвигов
                }

                const shiftedChar = russianAlphabet[newIndex];
                // Если символ был заглавным - делаем его обратно заглавным
                result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
            }
        });

        if (startCrypt && finishCryptWord && finishCryptCode) {
            startDecoding.textContent = decodingWord.split("").map((char) => char.charCodeAt(0)).join(" ");
            finishDecodingWord.textContent = result;
            finishDecoding.textContent = result.split("").map((char) => char.charCodeAt(0)).join(" ");
        }
    }

    cryptButton.addEventListener("click", () => {
        const word = document.getElementById("word").value;
        const shift = parseInt(document.getElementById("shift").value, 10); // Получаем введённый сдвиг

        CaesarCipher(word, shift);
    });
    decodingButton.addEventListener("click", () => {
        const decodingWord = document.getElementById("decoding-word").value;
        const decodingShift = parseInt(document.getElementById("decoding-shift").value, 10); // Получаем введённый сдвиг

        CaesarDecoding(decodingWord, decodingShift);
    })
});