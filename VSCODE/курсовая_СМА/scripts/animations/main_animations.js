import { animate, stagger, inView } from "https://cdn.skypack.dev/@motionone/dom";

// Шапка страницы
inView(".header", () => {
    animate('.header__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.header__parag', {x: ['-1000px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
    animate('.content__right-one', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.content__right-two', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
    animate('.content__right-three', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(0.07)
    });
    animate('.content__right-four', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.7, delay: stagger(0.07)
    });
    animate('.button__register', {x: ['0px', '0px'], opacity: ['0%', '100%']}, {
        duration: 2.2, delay: stagger(2)
    });
    animate('.button__login', {x: ['0px', '0px'], opacity: ['-12%', '100%']}, {
        duration: 1.7, delay: stagger(2)
    });
});


// Секция с акциями
inView(".purshared", () => {
    animate('.purshared__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.lines__block-light', {x: ['0px', '0px'], width: ['0%', '85%']}, {
        duration: 1.7, delay: stagger(2)
    });
})


// Секция экономики
inView(".economics", () => {
    animate('.economics__title', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.economics__content-text', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
})

// Секция "О нас"
inView(".about", () => {
    animate('.about__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.about__text-button', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
    animate('.about__image', {x: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    })
})


// Секция с токенами
inView(".token", () => {
    animate('.token__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.token__content', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
    animate('.token__content-token', {x: ['0px', '0px'], width: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
        })
})

// Секция со стратегией
if (window.innerWidth >= 1440) {
    inView(".strategy", () => {
        animate('.strategy__titles', {y: ['-50px', '0px'], opacity: ['0%', '100%']}, {
            duration: 2.7, delay: stagger(0.07)
        });
        animate('.strategy__content', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
            duration: 1.7, delay: stagger(0.07)
        });
        animate('.strategy__content-line', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
            duration: 1.7, delay: stagger(1.7)
        })
        animate('.content__lists-list', {x: ['0px', '0px'], y: ['-100px', '0px'], opacity: ['0%', '100%']}, {
            duration: 1.7, delay: stagger(0.7)
        })
        animate('.list__one-down, .list__two-down', {x: ['0px', '0px'], y: ['100px', '0px'], opacity: ['0%', '100%']}, {
            duration: 1.7, delay: stagger(0.77)
        })
    })
}

// Секция новостей
inView(".news", () => {
    animate('.news__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
    });
    animate('.news__content', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    });
})


