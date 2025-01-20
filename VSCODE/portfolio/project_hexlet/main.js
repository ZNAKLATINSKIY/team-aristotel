// Создаем стиль для сообщения
let style = `
  font-size: 28px;
  font-weight: bold;
  color:rgb(71, 222, 76);
  text-shadow: 1px 1px black;
  padding: 10px;
`;

// Выводим сообщение в консоль
console.log('%cСайт создан командной МНД(Министерство неджентельменских дел)', style);

// Изменяем стиль для сообщения
style = `
  font-size: 28px;
  font-weight: bold;
  color: #404eed;
  text-shadow: 1px 1px black;
  padding: 10px;
`;
console.log('%cСоловей Михаил Алексеевич', style)
console.log('%cАлександр Школьный Денисович', style)
console.log('%cТрегубов Олег Константинович', style)
console.log('%cАрлан Габдылхак Габдылхакович(тренер)', style)

// Дополнительно можно предупредить о возможных последствиях, если это нужно
console.log(
  '%cВнимание! Изменение кода в консоли может привести к нестабильной работе сайта или к потере данных.',
  'color: red; font-size: 14px;'
);


// Элементы
const modal = document.getElementById('modal')
const openModalButtons = document.querySelectorAll('.modal__opener')
const closeModalBtn = document.querySelector('.close-button')

const sideBar = document.getElementById('sidebar')
const openSidebarBtn = document.getElementById('sidebar__open-button')
const closeSidebarBtn = document.querySelector('.sidebar__close-button')

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

// Функция открытия бокового меню
function openSidebar() {
    // Блокируем прокрутку
    document.body.classList.add('sidebar--opened');

    // Показываем боковое меню
    sideBar.style.display = 'flex';

    setTimeout(() => {
        sideBar.classList.add('sidebar--show')
    }, 10)
}
function closeSidebar() {
    // Разблокировка прокрутки
    document.body.classList.remove('sidebar--opened');

    // Убираем класс показа
    sideBar.classList.remove('sidebar--show');

    // Скрываем модальное окно
    setTimeout(() => {
        sideBar.style.display = 'none';
    }, 300);
}

// Открытие модального окна
openModalButtons.forEach(button => {
    button.addEventListener('click', openModal)
})
// Закрытие модального окна при нажатие на крестик
closeModalBtn.addEventListener('click', closeModal)
// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

openSidebarBtn.addEventListener('click', openSidebar)
closeSidebarBtn.addEventListener('click', closeSidebar)
window.addEventListener('click', function(event) {
    if (event.target == sideBar) {
        closeSidebar();
    }
})

window.addEventListener('keydown', function(event) {
    if (event.key == 'Escape' && modal.classList.contains('modal--show')) {
        closeModal();
    }
    if (event.key == 'Escape' && sideBar.classList.contains('sidebar--show')) {
        closeSidebar();
    }
})
// Подсказка скролла
const coursesList = document.querySelector('.courses__list');
const scrollHint = document.querySelector('.scroll-hint');
let hasScrolled = false;

if (coursesList && scrollHint) {
    function checkScrollability() {
        const isScrollable = coursesList.scrollWidth > coursesList.clientWidth;

        if (isScrollable) {
            coursesList.classList.add('is-scrollable');
            // Показываем подсказку только если пользователь еще не прокручивал
            if (!hasScrolled) {
                scrollHint.style.display = 'block';
            }
        } else {
            coursesList.classList.remove('is-scrollable');
            scrollHint.style.display = 'none';
        }
    }

    coursesList.addEventListener('scroll', () => {
        if (!hasScrolled) {
            hasScrolled = true;
            coursesList.classList.add('scrolled');
            scrollHint.style.display = 'none';
        }
    });

    checkScrollability();
    window.addEventListener('resize', checkScrollability);
}


