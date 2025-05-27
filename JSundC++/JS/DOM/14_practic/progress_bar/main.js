const btn = document.getElementById("btn");
const progressBar = document.getElementById("progress__bar-line");

function updateProgressBar() {
    let currentWidth = parseInt(progressBar.style.width) || 0;
    if (currentWidth < 100) {
        progressBar.style.width = `${Math.min(currentWidth + 5, 100)}%`;
    }
}
btn.addEventListener("click", updateProgressBar);
