// Элементы
const modal = document.getElementById('modal')
const openModalButtons = document.querySelectorAll('.modal__opener')

// Функция открытия модального окна
function openModal() {
    // Блокируем прокрутку
    document.body.classList.add('modal--opened');

    // Показываем модальное окно
    modal.style.display = 'flex';

    // Небольшая задержка для корректной анимации
    setTimeout(() => {
        modal.classList.add('modal--show');
    }, 10);
}

function closeModal() {
    // Разблокировка прокрутки
    document.body.classList.remove('modal--opened');

    // Убираем класс показа
    modal.classList.remove('modal--show');

    // Скрываем модальное окно
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Открытие модального окна
openModalButtons.forEach(button => {
    button.addEventListener('click', openModal)
})

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key == 'Escape' && modal.classList.contains('modal--show')) {
        closeModal();
    }
})