'use strict'

// SLIDERS

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("myslide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";    

    let slidesLic = document.getElementsByClassName("licens__myslide");
    if (n > slidesLic.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesLic.length;
    }
 
    for (let slide of slidesLic) {
        slide.style.display = "none";
    }
    slidesLic[slideIndex - 1].style.display = "flex";  
}

let timer = 0;
makeTimer(); //Создаем интервал 
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },5000);
}

// ===========================
// Burger
const BtnBMenu = document.querySelector('.nav__menu_burger');
const header = document.querySelector('.header__up__nav')
const headerLogo = document.querySelector('.nav__logo')


BtnBMenu.addEventListener("click", () => {
    const burger = document.querySelector('.nav__menu_burger_menu')
    if (burger == null){
        createBurger()
    } else {
        deleteBurger()
    }
})

function createBurger(){
    headerLogo.insertAdjacentHTML('afterend',
    `
    <ul class="nav__menu_burger_menu">
        <li class="nav__menu_burger__li">
            <a href="/index.html" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">ГЛАВНАЯ</p>
            </a>
        </li>
        <li class="nav__menu_burger__li">
            <a href="" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">ОТДЕЛЕНИЯ СТАЦИОНАРА</p>
            </a>
        </li>
        <li class="nav__menu_burger__li">
            <a href="" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">ДИСПАНСЕРЫ</p>
            </a>
        </li>
        <li class="nav__menu_burger__li">
            <a href="" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">АСПЭ</p>
            </a>
        </li>
        <li class="nav__menu_burger__li">
            <a href="" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">ПАЦИЕНТАМ</p>
            </a>
        </li>
        <li class="nav__menu_burger__li">
            <a href="" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">КОНТАКТЫ</p>
            </a>
        </li>
        <li class="nav__menu_burger__li">
            <a href="" class="nav__menu_burger__link">
                <p class="nav__menu_burger__title">ПЛАТНЫЕ УСЛУГИ</p>
            </a>
        </li>
    </ul>
    `
    )
    BtnBMenu.style.transform = "rotate(-90deg)"
    BtnBMenu.style.transition =  "0.5s"
}
function deleteBurger (){
    const burger = document.querySelector('.nav__menu_burger_menu')
    burger.remove()
    BtnBMenu.style.transform = "rotate(0deg)"
    BtnBMenu.style.transition =  "0.5s" 
}

// Yandex MAP
ymaps.ready(init);
function init() {
    var map = new ymaps.Map('map', {
        center: [56.234851832432916, 37.96807911306271],
        zoom: 17,
        controls: ['zoomControl'],
        behaviors: ['drag'] 
    });
};