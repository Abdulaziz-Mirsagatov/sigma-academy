let profileList = document.querySelectorAll(".profile");

// width of profiles-container
const width = 40;
let currentSlide = 0;
slide()

const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");

function slide(){
    let i = currentSlide;
    for(profile of profileList){
        let left = width*i;
        left = left.toString() + "em";
        profile.style.left = left;
        i += 1;
    };
};

rightButton.addEventListener("click", () => {
    if (currentSlide*-1 < (profileList.length - 1))
        currentSlide -= 1;
    else
        currentSlide = 0;
    slide();
});

leftButton.addEventListener("click", () => {
    if (currentSlide < 0)
        currentSlide += 1;
    else
        currentSlide = 1 - profileList.length;
    slide();
})