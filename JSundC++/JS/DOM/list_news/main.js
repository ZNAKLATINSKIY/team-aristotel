const buttons = document.getElementsByClassName('buttons');
const texts = document.getElementsByClassName('news__text');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const newsItem = this.parentElement;
        newsItem.remove();
    });
}