import showCustomAlert from "./custom-alert";

document.querySelector('.register__form').addEventListener('submit', function(event) {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirmation").value;
    if (password !== passwordConfirm) {
        showCustomAlert("Пароли не совпадают.");
        return false;
    }
    else if (userName === "") {
        showCustomAlert("Пожалуйста, введите имя пользователя.");
        return false;
    }
    else {
        showCustomAlert("Регистрация прошла успешно!");
        return true;
    }
});


