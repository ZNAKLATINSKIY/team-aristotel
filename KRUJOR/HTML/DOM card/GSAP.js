let tl = gsap.timeline({ defaults: { duration: 1.5, stagger: 32 } })
tl.fromTo(
    '#card',
    { opacity: 0, x: -2000, y: 0, rotateX: 0, rotateY: 0},
    { opacity: 100, x: 0, y: 0, rotateX: -180, rotateY: 215, ease: "power1.inOut"}
)
gsap.to('#card', {
    borderRadius: () => Math.floor(Math.random() * 151) + "px",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
gsap.to('.info__content', {
    borderRadius: () => Math.floor(Math.random() * 101) + "px",
    duration: 0.5,
     repeat: -1,
     yoyo: true,
     ease: "power1.inOut"
 });
gsap.to(
    '.info__content',
    {rotateX: 0, rotateY: -180, duration: 1, ease: "power1.inOut", delay: 5,}
);
gsap.to(
    '.info__name',
    {rotateY: 180, duration: 0.5, ease: "power1.inOut", delay: 7,}
);
gsap.to(
    '.info__details',
    {rotateY: 180, duration: 0.5, ease: "power1.inOut", delay: 6,
    }
);
let dl = gsap.timeline()
dl.to('body', { duration: 0.4, backgroundColor: '#000000' }).to('body',
    {duration: 0.4, backgroundColor: '#80 0000',}
)
document.addEventListener("mousedown", function() {
    const audio = document.querySelector("audio");
    audio.play();
});
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
let ww = gsap.timeline({ repeat:-1 })
ww.to('body', {
    background: `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`,
    duration: 1,
    ease: "none"
})
ww.to('body', {
    background: `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`,
    duration: 1,
    ease: "none"
})
ww.to('body', {
    background: `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`,
    duration: 1,
    ease: "none"
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let ct = gsap.timeline({ repeat: -1 });
const centerX = 100;
const centerY = 100;
const radius = 50;
let angle = 0;
gsap.to(".info__gif-1" , {
    duration: 5,
    repeat: -1,
    ease: "none",
    onUpdate: () => {
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        gsap.set(".info__gif-1", { x: x, y: y });
        angle += 0.05
    }
})
gsap.to(".info__gif-2", {
    duration: 1,
    repeat: -1,
    ease: "none",
    onUpdate: () => {
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        gsap.set(".info__gif-2", { x: x, y: y });
        angle += 0.05;
    }
});