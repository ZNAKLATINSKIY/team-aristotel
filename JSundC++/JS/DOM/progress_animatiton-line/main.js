const progressBar = document.getElementById('progress-bar');
const progressLine = document.getElementById('progress-bar-line');
const procent = document.getElementById('procent');

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        let filledInputs = 0;
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].value) {
                filledInputs++;
            }
        }
        const progress = (filledInputs / inputs.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressLine.style.width = `${progress}%`;
        procent.textContent = `${Math.round(progress)}%`;
    });
}
