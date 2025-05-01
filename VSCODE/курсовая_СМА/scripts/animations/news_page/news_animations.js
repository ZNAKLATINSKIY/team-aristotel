import { animate, stagger, inView } from "https://cdn.skypack.dev/@motionone/dom";

inView(".header", () => {
    animate('.header__title', {x: ['-700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.2, delay: stagger(0.07)
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
    animate('.content__news-card', {y: ['700px', '0px'], opacity: ['0%', '100%']}, {
        duration: 1.7, delay: stagger(0.07)
    })
});
