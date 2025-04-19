
function saveDate() {
    const name = document.getElementById("username")?.value || "";
    const password = document.getElementById("password")?.value || "";

    const userData = { name, password };
    localStorage.setItem("user", JSON.stringify(userData));

}

const registerButton = document.getElementById("registerButton");
registerButton.onclick = saveDate;

export default saveDate;