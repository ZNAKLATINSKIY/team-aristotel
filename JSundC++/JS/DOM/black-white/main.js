const buttonChange = document.getElementById('theme-toggle');
const title = document.getElementById('title');

function ThemeChange() {
    if (document.body.style.background === 'black') {
        document.body.style.background = 'white';
        buttonChange.style.background = 'aqua';
        title.style.color = 'black';

    } else {
        document.body.style.background = 'black';
        buttonChange.style.background = 'darkcyan';
        title.style.color = 'white';
    }
}
buttonChange.onclick = ThemeChange;