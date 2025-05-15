const btn = document.getElementById("btn");
const progressBar = document.getElementById("progress__bar-line");

function updateProgressBar() {
    let progress = parseInt(progressBar.style.width.slice(0, -1));
    progressBar.style.width = `${progress + 5}%`;

}
btn.addEventListener("click", updateProgressBar);
