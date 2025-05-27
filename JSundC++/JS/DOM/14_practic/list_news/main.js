const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const newsBlock = this.closest('.block__list-news');
        newsBlock.remove();
    });
});
