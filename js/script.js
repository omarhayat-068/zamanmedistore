const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');
let currentIndex = 0;

function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 3000);

// Animate feature images on scroll
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature-img');
    features.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            img.classList.add('animate');
        }
    });
});

// Add fade-in class to body on page load
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

console.log("Zaman Medical Store Script Loaded");
