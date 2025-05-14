const number = document.getElementById("number");
const button = document.getElementById("btn");

function RandomNumber() {
  number.textContent = Math.floor(Math.random() * 100);
}
button.addEventListener("click", RandomNumber);