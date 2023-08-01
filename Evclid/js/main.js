new Accordion('.accordion-container');

let btnHidden = document.querySelector('.btn__hidden');
let form = document.querySelector('.header__form');
let btnCloce = document.querySelector('.btn__cloce');

btnHidden.addEventListener('click',

  function () {

    btnHidden.classList.toggle('btn__search_hidden');

    form.classList.add('form__search_active');
    
  });

  btnCloce.addEventListener('click',
  
  function (e) {
    e.preventDefault();

    btnHidden.classList.remove('btn__search_hidden');

    form.classList.remove('form__search_active');

  });


let burger = document.querySelector('.btn__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('btn__burger_active');

    menu.classList.toggle('header__nav_active');

    document.body.classList.toggle('stop_scroll');

    
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('btn__burger_active');

    menu.classList.remove('header__nav_active');

    document.body.classList.remove('stop_scroll');

  });
});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(a){ a.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

