// hamburger menu button
const hamburger = document.querySelector(".hamburger");

// triggered when hamburger is pressed
hamburger.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})