let btnCloseMenu = document.getElementById('page-close');
let offcanvasMenu = document.getElementById('offcanvasNavbar');

btnCloseMenu.addEventListener('click', function () {
    offcanvasMenu.classList.remove('show');
    let offcanvasBackDrop = document.querySelector('.offcanvas-backdrop');
    offcanvasBackDrop.remove();
});


let slides = document.querySelectorAll('.slide');
console.log(slides);
const auto = true;
const intervalTime = 4000;

const nextSlide = () => {
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active');
    }
    else {
        slides[0].classList.add('active');
    }
}
function autoSlide() {
    nextSlide();
}
setInterval(autoSlide, intervalTime);
