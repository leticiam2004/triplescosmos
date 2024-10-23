window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicators button');
let currentIndex = 0;
let interval;

function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
}

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
