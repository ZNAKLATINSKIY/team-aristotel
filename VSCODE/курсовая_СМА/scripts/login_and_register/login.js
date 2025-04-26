const userData = JSON.parse(localStorage.getItem("user") || "{}");
const userName = document.getElementById("username");
const userPassword = document.getElementById("password");

function ConfirmLogin(event) {
    if (userName.value === userData.userName && userPassword.value === userData.password) {
        alert("Вы успешно вошли в систему!");
        setTimeout(function() {
            location.reload();
        }, 1000);
        event.preventDefault();
        const UserData = {
            userNameAccess: userName.value,
            passwordAccess: userPassword.value,
        }
        localStorage.setItem("user", JSON.stringify(UserData));
    } else {
        alert("Аккаунт не обнаружен.");
        setTimeout(function() {
            location.reload();
        }, 1000);
        event.preventDefault();
    }
}
document.querySelector('.login__form').addEventListener('submit', ConfirmLogin);
