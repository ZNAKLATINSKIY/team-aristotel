import { animate, stagger, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

inView(".about_hexlet__head", (target) => {
  animate('.about_hexlet__head > *', { x: ['-700px', '0px'], opacity: ['0%', '100%'] }, { duration: 1, delay: stagger(0.07) });
});

inView(".about_hexlet__advantages", (target) => {
  animate('.about_hexlet__advantages > *', { x: ['-700px', '0px'], opacity: ['0%', '100%'] }, { duration: 0.8, delay: stagger(0.07) });
});


//для секции "просто секции"
inView(".details_up, .details_down", (target) => {
  animate('.details_up, .details_down', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 1, delay: stagger(0.7) });
})

//для секции consultation
inView(".consultation__form", (target) => {
  animate('.consultation__form > *', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.1) });
})


// Детали курса страница
//  Детали курсов
inView("#course-details-section .course__details-header", (target) =>{
  animate('#course-details-section .course__details-header > *', { x: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.1) });
})
inView("#course-details-section .course__column", (target) => {
  animate('#course-details-section .course__column > *', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.07) });
})

//  План курса
inView("#course__plan-section .course__details-header", (target) =>{
  animate('#course__plan-section .course__details-header > *', { x: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.1) });
})
inView("#course__plan-section .course__column", (target) => {
  animate('#course__plan-section .course__column > *', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.07) });
})

//  Перспектива курсов
inView("#course__perspective-section .course__details-header", (target) =>{
  animate('#course__perspective-section .course__details-header > *', { x: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.1) });
})
inView("#course__perspective-section .course__column", (target) => {
  animate('#course__perspective-section .course__column > *', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.07) });
})
