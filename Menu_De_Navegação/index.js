const menuHambButton = document.querySelector(".menu-hamb-button")
const navBarLinks = document.querySelector(".navbar-links")
const menuOverlay = document.querySelector(".menu-overlay")

menuHambButton.addEventListener("click", () => {
    navBarLinks.classList.toggle("show")
    menuHambButton.classList.toggle("isOpen")
    menuOverlay.classList.toggle("show")
})

menuOverlay.addEventListener("click", () => {
    navBarLinks.classList.remove("show")
    menuHambButton.classList.remove("isOpen")
    menuOverlay.classList.remove("show")
})