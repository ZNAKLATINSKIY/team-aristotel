import showCustomAlert  from "./custom-alert.js";

// Копирование токена
const copyButton = document.getElementById("tokenCopy");

function CopyFunction() {
    const copyText = document.getElementById("tokenTextCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value).then ( function() {
        showCustomAlert("Токен скопирован.");
    } ).catch(function(err) {
        showCustomAlert("Ошибка при копировании: " + err);
    });
}
copyButton.onclick = CopyFunction;
