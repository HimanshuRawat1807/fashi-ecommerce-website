const slides = document.querySelectorAll('.single_hero')

let slideCount = 0
slideShow()
function slideShow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    if (slideCount > 1) (slideCount = 0)
    slides[slideCount].style.display = "block"
    slideCount++
    setTimeout(slideShow, 5000);
}
