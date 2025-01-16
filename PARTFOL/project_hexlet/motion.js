import { animate, stagger, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

inView(".about_hexlet__head ", (target) => {
  animate('.about_hexlet__head *', { x: ['-700px', '0px'], opacity: ['0%', '100%'] }, { duration: 1, delay: stagger(0.07) });
})

inView(".about_hexlet__advantages", (target) => {
  animate('.about_hexlet__advantages', { x: ['-700px', '0px'], opacity: ['0%', '100%'] }, { duration: 0.8, delay: stagger(0.07) });
})

//КАРТОЧКИ ГАБДЫЛХАК АРЛАН

inView(".demand-specialists__title", (target) => {
  animate('.demand-specialists__title', { y: ['-100px', '0px'], opacity: ['0%', '100%'] }, { duration: 1.5, delay: stagger(0.9) });
})
inView(".demand-specialists__description", (target) => {
  animate('.demand-specialists__description', { x: ['-500px', '0px'], opacity: ['0%', '100%'] }, { duration: 1.5, delay: stagger(0.9) });
})
inView(".presentation-cards", (target) => {
  animate('.presentation-cards', { y: ['-100px', '0px'], opacity: ['0%', '100%'] }, { duration: 1, delay: stagger(0.9) });
})

//КАРТОЧКИ О КУРСАХ
inView(".courses__header", (target) => {
  animate('.courses__header', { y: ['-100px', '0px'], opacity: ['0%', '100%'] }, { duration: 0.8, delay: stagger(0.9) });
})
inView(".courses__card courses__card_left", (target) => {
  animate('.courses__card courses__card_left', { x: ['-900px', '0px'], opacity: ['0%', '100%'] }, { duration: 20, delay: stagger(0.9) });
})
inView(".courses__card courses__card_right", (target) => {
  animate('.courses__card courses__card_right', { x: ['0px', '-100px', ], opacity: ['0%', '100%'] }, { duration: 20, delay: stagger(0.9) });
})


//для секции "просто секции"
inView(".details_up, .details_down", (target) => {
  animate('.details_up, .details_down', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 1, delay: stagger(0.7) });
})

//для секции consultation
inView(".consultation__form ", (target) => {
  animate('.consultation__form *', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.1) });
})

inView(".course__details-header ", (target) =>{
  animate('.course__details-header *', { x: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.5, delay: stagger(0.1) });
})

inView(".course__column ", (target) => {
  animate('.course__column *', { y: ['-50px', '0px'], opacity: ['0%', '50%', '100%'] }, { duration: 0.2, delay: stagger(0.07) });
})
