import showCustomAlert from "../modules/custom-alert.js";

document.querySelector('.register__form').addEventListener('submit', function(event) {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirmation").value;
    const userNameTest = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    if (!(userNameTest.test(userName))) {
        showCustomAlert("Имя пользователя должно содержать только буквы.");
        event.preventDefault();
    }
    else if (userName === "" && password === "") {
        showCustomAlert("Пожалуйста, введите имя пользователя и пароль.");
        event.preventDefault();
    }
    else if (userName === "" && password !== "" && passwordConfirm !== "") {
        showCustomAlert("Пожалуйста, введите имя пользователя.");
        event.preventDefault();
    }
    else if ((password === "" && passwordConfirm === "") || (password === "") || (passwordConfirm === "")) {
        showCustomAlert("Пожалуйста, введите и подтвердите пароль.");
        event.preventDefault();
    }
    else if (password !== passwordConfirm) {
        showCustomAlert("Пароли не совпадают.");
        event.preventDefault();
    }
    else if (password.length < 8) {
        showCustomAlert("Пароль должен содержать не менее 8 символов.");
        event.preventDefault();
    }
    else {
        showCustomAlert("Регистрация прошла успешно!");
        setTimeout(function() {
            location.reload();
        }, 1000);
        event.preventDefault();
    }
});


