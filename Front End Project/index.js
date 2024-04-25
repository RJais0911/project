let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextSlide = () => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(nextSlide, 3000);