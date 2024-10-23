const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicators button');
let currentIndex = 0;
let interval;

// Function to update the slide and indicator
function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Function to move to the next slide automatically
function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlide(currentIndex);
    resetAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
    resetAutoSlide();
});

// Event listeners for indicators
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        updateSlide(currentIndex);
        resetAutoSlide();
    });
});

// Function to start auto-slide
function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

// Function to reset auto-slide timer
function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

// Initialize first slide and start auto-slide
updateSlide(currentIndex);
startAutoSlide();
