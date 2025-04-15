import { animate, stagger, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

// Заголовок хэдера
inView(".header__title", (target) => {
    animate('.header__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
});
// Параграф хэдера
inView(".header__parag", (target) => {
    animate('.header__parag', {x: ['-1000px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
});

// Правая часть контента хэдера
inView(".content__right", (target) => {
    animate('.content__right-one', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
});
inView(".content__right", (target) => {
    animate('.content__right-two', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
});
inView(".content__right", (target) => {
    animate('.content__right-three', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(0.07)
    });
});
inView(".content__right-one", (target) => {
    animate('.content__right-four', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.7, delay: stagger(0.07)
    });
});



// Кнопки регистрации и входа в нижней части хэдера
inView(".button__login", (target) => {
    animate('.button__login', {x: ['0px', '0px'], opacity: ['-12%', '100%']}, {
        duration: 1.7, delay: stagger(2)
    });
});
inView(".button__register", (target) => {
    animate('.button__register', {x: ['0px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(2)
    });
});

inView(".purshared__title", (target) => {
    animate('.purshared__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(2)
    });
});
