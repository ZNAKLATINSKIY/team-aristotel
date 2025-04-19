
const userData = JSON.parse(localStorage.getItem("user") || "{}");
if (userData.name) {

    const userName = document.getElementById("accountUsername");
    const userPassword = document.getElementById("accountPassword");
    const userPasswordConfirmationBlock = document.getElementById("passwordConfirmation");

    userName.value = userData.name || "Введите логин";
    userPassword.value = userData.password || "Введите пароль";

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

        const name = userName.value;
        const password= userPassword.value;
        const userPasswordConfirmation = document.getElementById("password-confirmation");
        const passwordConfirmation = userPasswordConfirmation.value;

        if (password !== passwordConfirmation) {
            alert("Пароли не совпадают.");
            return;
        }

        const userData = { name, password };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Данные успешно сохранены!");

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