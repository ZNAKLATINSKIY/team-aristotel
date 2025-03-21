// Копирование токена
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
// Окно о копировании
function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.textContent = message;  // Устанавливаем текст уведомления
    alertBox.style.display = "block"; // Показываем уведомление

    // Прячем окно через 3 секунды
    setTimeout(function() {
        alertBox.style.display = "none";},
        3000);
}
const tokenCopyButton = document.getElementById("tokenCopy");
tokenCopyButton.onclick = CopyFunction;




