let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger_active');

    menu.classList.toggle('header__nav_active');

    document.body.classList.toggle('stop_scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger_active');

    menu.classList.remove('header__nav_active');

    document.body.classList.remove('stop_scroll');

  });
});

const btnMore = document.querySelector('.article-more');
const articlesItems = document.querySelectorAll('.articles-item');

btnMore.addEventListener('click', () => {
  articlesItems.forEach(el => { el.classList.add('articles-item--visible')});
  btnMore.closest('.article-center').classList.add('articles-item--hidden');
})
