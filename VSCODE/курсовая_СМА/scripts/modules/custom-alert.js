function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.textContent = message;  // Устанавливаем текст уведомления
    alertBox.style.display = "block"; // Показываем уведомление

    // Прячем окно через 3 секунды
    setTimeout(() =>{
            alertBox.style.display = "none";},
        3000);
}

export default showCustomAlert;

