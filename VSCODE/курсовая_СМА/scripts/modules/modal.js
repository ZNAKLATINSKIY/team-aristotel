const navOpen = document.getElementById("modal__open");
const navClose = document.getElementById("modal__close");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function openModal() {
    modal.style.right = "-5px";
    modal.style.visibility = "visible";
    overlay.style.display = "block";
    setTimeout(() => overlay.style.opacity = "1", 10);
    document.body.classList.add("no__scroll");
}

function closeModal() {
    modal.style.right = "-1000px";
    modal.style.visibility = "hidden";
    overlay.style.opacity = "0"
    setTimeout(() => {
        overlay.style.display = "none"
        document.body.classList.remove("no__scroll")
    }, 500);
}

navOpen.onclick = openModal;
navClose.onclick = closeModal;
overlay.onclick = closeModal;
