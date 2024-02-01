const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.caro-btn');
let currentSlide = 0;
let carouselInterval;

// Function for manual navigation
const manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual;

    // Pause the carousel when manually navigating
    clearInterval(carouselInterval);

    // Resume the carousel after 10 seconds
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        manualNav(currentSlide);
    }, 10000);
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
    });
});

// Set the first slide and button as active on page load
manualNav(0);

// Start the automatic carousel
carouselInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    manualNav(currentSlide);
}, 10000);

