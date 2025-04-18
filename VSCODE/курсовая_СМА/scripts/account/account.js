
function saveDate() {
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userData = {
        name: name,
        password: password,
    };

    const normalDate = JSON.stringify(userData);
    localStorage.setItem('userData', normalDate);
}
document.getElementById("registerButton").onclick = saveDate;


