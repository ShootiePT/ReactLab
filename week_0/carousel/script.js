const images = [
    'resources/1.jpg',
    'resources/2.jpg',
    'resources/3.jpg',
    'resources/4.jpg'
];

let currentIndex = 0;

const carouselImage = document.getElementById('carousel-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

function updateImage() {
    carouselImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

updateImage();
