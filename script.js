const slides = document.getElementsByClassName('mySlides');
let slideIndex = 0;
let currentIndex = 0;

showSlide();

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlide, 5000);
}

function plusSlides(direction) {
    const display = document.getElementsByClassName('featured-display')[0];
    const items = document.querySelectorAll('.featured-item');
    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginLeft) + parseInt(window.getComputedStyle(items[0]).marginRight);

    currentIndex += direction;

    // Ensure currentIndex stays within bounds
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > items.length - 3) { // Adjust to limit based on visible items (4 in this case)
        currentIndex = items.length - 4;
    }

    // Scroll to the new position
    display.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}
