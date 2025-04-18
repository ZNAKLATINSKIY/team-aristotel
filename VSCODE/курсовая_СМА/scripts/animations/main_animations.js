import { animate, stagger, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

// Заголовок хэдера
inView(".header__title", () => {
    animate('.header__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
});
// Параграф хэдера
inView(".header__parag", () => {
    animate('.header__parag', {x: ['-1000px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
});

// Правая часть контента хэдера
inView(".content__right", () => {
    animate('.content__right-one', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
});
inView(".content__right", () => {
    animate('.content__right-two', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
});
inView(".content__right", () => {
    animate('.content__right-three', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(0.07)
    });
});
inView(".content__right-one", () => {
    animate('.content__right-four', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.7, delay: stagger(0.07)
    });
});



// Кнопки регистрации и входа в нижней части хэдера
inView(".button__login", () => {
    animate('.button__login', {x: ['0px', '0px'], opacity: ['-12%', '100%']}, {
        duration: 1.7, delay: stagger(2)
    });
});
inView(".button__register", () => {
    animate('.button__register', {x: ['0px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(2)
    });
});

inView(".economics__title", () => {
    animate('.economics__title', {x: ['-550px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(2)
    });
});

