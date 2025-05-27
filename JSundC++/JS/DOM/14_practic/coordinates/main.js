const block = document.getElementById("block");

block.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const x_coord = document.getElementById("x");
    const y_coord = document.getElementById("y");

    x_coord.textContent="X: " + x;
    y_coord.textContent="Y: " + y;
})

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
})

block.addEventListener("mousedown", function(event) {
    const mouseButton = document.getElementById("mouse");
    if (event.button === 0) {
        mouseButton.textContent = "Левая кнопка мыши";
    } else if (event.button === 2) {
        mouseButton.textContent = "Правая кнопка мыши";
    }
})