const sliderContainer = document.querySelector('.slider-container__slides');
const sliderImages = document.querySelectorAll(".slider-container__slides img");

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document. querySelector('#nextBtn');

//Counter
let counter = 1;
// const size = sliderImages[0].clientWidth;

sliderContainer.style.transform = 'translateX('+ (-size * counter) +'px)';


