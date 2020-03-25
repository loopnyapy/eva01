const sliderContainer = document.querySelector('.slider-container__slides');
const sliderImages = document.querySelectorAll('.slider-container__slides img');
const dots = document.querySelectorAll('.slider-container__dots div');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
let size;
let trans = 'all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000)';

function slideWidth(){
    size = sliderImages[0].clientWidth;
}
slideWidth();

function sliderTransition(){
    slideWidth();
    sliderContainer.style.transform = 'translateX('+ (-size * counter) +'px)';
    dots.forEach((i)=>{i.style.background = '#555'; i.style.opacity = .7});
    //если счетчик уходит за количество точек на слайдере
    let dotIndex;
    counter - 1 < 0 ?
    dotIndex = sliderImages.length - 4 :
    counter - 1 > sliderImages.length - 4 ?
    dotIndex = 0 :
    dotIndex = counter - 1;

    dots[dotIndex].style.background = '#191919';
    dots[dotIndex].style.opacity = 1;
}
sliderTransition();

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    sliderContainer.style.transition = trans;
    counter--;
    sliderTransition();
});

nextBtn.addEventListener('click', ()=>{
    if(counter >= sliderImages.length - 2) return;
    sliderContainer.style.transition = trans;
    counter++;
    sliderTransition();
});

sliderContainer.addEventListener('transitionend', ()=> {
    if (sliderImages[counter].id == 'lastClone') {
        sliderContainer.style.transition = 'none';
        counter = sliderImages.length - 3;//-3 пушто не ебанулись слайды img, последний не пашет но считается .-.
        sliderTransition();
    }
    else if (sliderImages[counter].id == 'firstClone') {
        sliderContainer.style.transition = 'none';
        counter = 1;
        sliderTransition();
    }
})
//При нажатии на точки слайдера
dots.forEach((e, i)=>{
    e.addEventListener('click', ()=>{
        sliderContainer.style.transition = trans;
        counter = i + 1;
        sliderTransition();
    })
});
//При растяжении пиздец.-. адаптивность подправить

//Тригерим изменения isSticky меню----------
var observer = new IntersectionObserver(function(entries) {
	// no intersection with screen
	if(entries[0].intersectionRatio === 0)
        document.querySelector(".navbar").classList.add("navbar-isSticky");
	// fully intersects with screen
	else if(entries[0].intersectionRatio > 0)
		document.querySelector(".navbar").classList.remove("navbar-isSticky");
}, { threshold: [0, 1] });

observer.observe(document.querySelector(".header__logo"));


let i = 0;
function hanoi(n, a, b, t){
    if(n == 1){
        console.log(`Move 1 from ${a} to ${b}`)
    }
    else{
        hanoi(n - 1, a, t, b);
        console.log(`Move ${n} from ${a} to ${b}`);
        hanoi(n - 1, t, b, a);
    }
}
// hanoi(3, 1, 2, 3);
let res = 1;
function f(n){
    if(n == 1) return 1;
    else return f(n - 1) * n;
}

// console.log(f(5));





