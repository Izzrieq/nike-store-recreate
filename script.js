const slides = document.getElementsByClassName('mySlides')
let i 
let slideIndex = 0

showSlide();

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 5000)
}
