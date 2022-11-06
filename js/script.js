const headerburger = document.querySelector(".header__burger");
const headerbody = document.querySelector(".header__body");

headerburger.addEventListener("click", () => {
    headerburger.classList.toggle("active");
    headerbody.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    headerburger.classList.remove("active")
    headerbody.classList.remove("active")
}))
