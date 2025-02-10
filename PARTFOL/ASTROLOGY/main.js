import { animate, stagger, inView, transform } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


inView(".motivation__tagline ", (target) => {
    animate('.motivation__tagline', { x: ['-300px', '50px', '0px'], opacity: ['0%', '100%'], rotate: ['10deg', '0deg'], ease: [10, 0.24, 0.3, 1]}, { duration: 2.5, delay: stagger(0.07) });
})
inView(".motivation__details ", (target) => {
    animate('.motivation__details', { x: ['-300px', '50px', '0px'], opacity: ['0%', '100%'], rotate: ['-10deg', '0deg'], ease: [10, 0.24, 0.3, 1]}, { duration: 2, delay: stagger(0.07) });
})
inView(".button ", (target) => {
    animate('.button', { y: ['200px', '-20px','0px'], opacity: ['0%', '100px'], rotate: ['5deg', '0deg'], ease: [0,35, 0.24, 0.3, 1]}, { duration: 1, delay: stagger(0.07) });
})

// HEADER

inView(".question-taglain ", (target) => {
    animate('.question-taglain', { x: ['-300px', '50px', '0px'], opacity: ['0%', '100%'], rotate: ['10deg', '0deg'] }, { duration: 2, delay: stagger(0.07) });
})
inView(".question-taglain__explanation ", (target) => {
    animate('.question-taglain__explanation', { x: ['-300px', '50px', '0px'], opacity: ['0%', '100%'], rotate: ['10deg', '0deg']}, { duration: 1, delay: stagger(0.07) });
})
inView("#paragraph__bottom ", (target) => {
    animate('#paragraph__bottom', { x: ['-300px', '50px', '0px'], opacity: ['0%', '100%'], rotate: ['-20deg', '0deg']}, { duration: 2, delay: stagger(0.07) });
})

// WHAT-THE-SUN SECTION

inView(".modern-weaknesses__left", (target) => {
    animate('.modern-weaknesses__left', { x: ['-600px', '0px'], opacity: ['0%', '100%'], rotate: ['30deg', '-6deg', '0deg'] }, { duration: 2.9, delay: stagger(0.07) });
})
inView(".modern-weaknesses__rigth ", (target) => {
    animate('.modern-weaknesses__rigth', { x: ['600px', '0px'], opacity: ['0%', '100%'], rotate: ['-30deg', '6deg', '0deg'] }, { duration: 2.4, delay: stagger(0.07) });
})

inView("#content_rigth", (target) => {
    animate('#content_rigth', { x: ['600px', '0px'], opacity: ['0%', '100%'], rotate: ['-10deg', '3deg', '0deg'],  }, { duration: 2.6, delay: stagger(0.07) });
})
inView("#content_left", (target) => {
    animate('#content_left', { x: ['-600px', '0px'], opacity: ['0%', '100%'], rotate: ['10deg', '-3deg', '0deg'] }, { duration: 2.2, delay: stagger(0.07) });
})

// EMOTIONAL BURNOUT

inView(".humiliation-psychologists__thesis, #span__thesis", (target) => {
    animate('.humiliation-psychologists__thesis, #span__thesis', { y: ['-300px', '0px'], opacity: ['0%', '100%'], ease: [0.39, 0.24, 0.3, 1]}, { duration: 1.5, delay: stagger(0.07) });
})
inView(".humiliation-psychologists__delusion", (target) => {
    animate('.humiliation-psychologists__delusion', {y: ['300px', '0px'], opacity: ['0%', '100%']}, { duration: 1.6, delay: stagger(0.07) });
})

// WHAT DOING


inView(".instructions__paragraph-3", (target) => {
    animate('.instructions__paragraph-3', { y: ['-300px', '0px'], opacity: ['0%', '100%'], ease: [0.39, 0.24, 0.3, 1]}, { duration: 1.5, delay: stagger(0.07) });
})
inView(".instructions__paragraph-2", (target) => {
    animate('.instructions__paragraph-2', { y: ['-300px', '0px'], opacity: ['0%', '100%'], ease: [0.39, 0.24, 0.3, 1]}, { duration: 1.6, delay: stagger(0.07) });
})
inView(".instructions__paragraph-1", (target) => {
    animate('.instructions__paragraph-1', { y: ['-300px', '0px'], opacity: ['0%', '100%'], ease: [0.39, 0.24, 0.3, 1]}, { duration: 1.7, delay: stagger(0.07) });
})
inView(".instructions", (target) => {
    animate('.instructions', { y: ['-300px', '0px'], opacity: ['0%', '100%'], ease: [0.39, 0.24, 0.3, 1]}, { duration: 1.7, delay: stagger(0.07) });
})
inView("#question-mark", (target) => {
    animate('#question-mark', { y: ['300px', '-100px'], x: ['200px'], opacity: ['0%', '100%'], ease: [0.39, 0.24, 0.3, 1]}, { duration: 1.7, delay: stagger(0.07) });
})




inView(".provision-services", (target) => {
    animate('.provision-services', {perspective: ['500px'], rotateY: ['0deg','360deg'], opacity: ['0%', '100%']}, { duration: 1.7, delay: stagger(0.07) });
})