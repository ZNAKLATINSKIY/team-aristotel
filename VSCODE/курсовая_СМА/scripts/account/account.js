import customAlert from "../modules/custom-alert.js";

const userData = JSON.parse(localStorage.getItem("user") || "{}");

if (userData.userNameAccess) {
    const userName = document.getElementById("accountUsername");
    const userPassword = document.getElementById("accountPassword");
    const userPasswordConfirmationBlock = document.getElementById("passwordConfirmation");

    userName.value = userData.userNameAccess || "Введите логин";
    userPassword.value = userData.passwordAccess || "Введите пароль";

    const buttonSave = document.getElementById("buttonSave");
    const buttonChange = document.getElementById("buttonChange");

    function changeDate(event) {
        event.preventDefault();
        buttonChange.style.display = "none";
        buttonSave.style.display = "flex";

        userName.removeAttribute("disabled");
        userPassword.removeAttribute("disabled");
        userPasswordConfirmationBlock.style.display = "block";
    }

    function saveDate() {
        const userNameConfirm = userName.value;
        const password= userPassword.value;
        const userPasswordConfirmation = document.getElementById("password-confirmation");
        const passwordConfirmation = userPasswordConfirmation.value;

        if (password !== passwordConfirmation) {
            alert("Пароли не совпадают.");
            return;
        }

        const userData =
            {
            userNameAccess: userNameConfirm,
            passwordAccess: password,
            };
        localStorage.setItem("user", JSON.stringify(userData));

        customAlert("Данные успешно сохранены!");
        setTimeout(function() {
            location.reload();
        }, 1000);

        userName.setAttribute("disabled", "true");
        userPassword.setAttribute("disabled", "true");

        buttonSave.style.display = "none";
        buttonChange.style.display = "flex";
        userPasswordConfirmationBlock.style.display = "none";
    }

    buttonChange.onclick = changeDate;
    buttonSave.onclick = saveDate;
} else {
    const accountCancel = document.getElementById("accountCancel");
    const accountContent = document.getElementById("accountContent");
    accountContent.style.display = "none";
    accountCancel.style.display = "block";
}