const button = document.getElementById('button');
const text = document.getElementById('text');

function ShowHide() {
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}
button.onclick = ShowHide;