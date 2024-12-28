const images = [
    'images/Screenshot 2024-12-26 at 5.44.23 PM.png'
];

let currentIndex = 0;
const displayedImage = document.getElementById('displayed-image');

// Set initial image
displayedImage.src = images[currentIndex];

// Add swipe functionality
let startX = 0;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
        // Swipe right
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else if (deltaX < -50) {
        // Swipe left
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Update displayed image
    displayedImage.src = images[currentIndex];
});
