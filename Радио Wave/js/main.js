const btnMore = document.querySelector('.podcasts__btn_more');
const articlesItems = document.querySelectorAll('.podcasts__colum');

btnMore.addEventListener('click', () => {
  articlesItems.forEach(el => { el.classList.add('podcasts__colum--visible') });
  btnMore.closest('.podcasts__btn_wrapper').classList.add('podcasts__btn--hidden');
});

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');

  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggel)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggel() {
    this.parentElement.classList.toggle('is_active');
  };

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is_active')
  }
};

select();

new Accordion('.accordion-container');
new Accordion('.accordion_ether');

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target='${path}']`).classList.add('tabs-item--active');
  });
});

var swiper_btn = new Swiper(".swiper_btn", {
  slidesPerView: "auto",
  spaceBetween: 15,
});


let mySwiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

function valiudation(form) {

  function removeError(input) {
    const parnt = input.parentNode;

    if (parnt.classList.contains('error')) {
      parnt.classList.remove('error')
    }
  }
  function createError(input, text) {
    const parnt = input.parentNode;
    parnt.classList.add('error')
  }

  let result = true;

  form.querySelectorAll('input').forEach(input => {

    removeError(input)
    if (input.value == "") {
      console.log('error')
      createError(input)
      result = false
    }

  })

  return result

};


document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()

  if (valiudation(this) == true) {
    alert('Сообщение отправлено')
  }

});



document.querySelectorAll('.header__btn_enter').forEach( function(element){
  element.addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open');
  });
});


document.querySelector('.btn__closed').addEventListener('click', function () {
  document.getElementById('my-modal').classList.remove('open');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('my-modal').classList.remove('open')
  };
});

document.querySelector('#my-modal .modal__box').addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById('my-modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

document.querySelector('.header__btn_search').addEventListener('click', function () {
  document.querySelector('.header__seaech_form').classList.add('open__search');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.querySelector('.header__seaech_form').classList.remove('open__search')
  };
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.header__seaech_form').classList.remove('open__search')
  };
});


document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.header').classList.toggle('open')
  document.querySelector('.page').classList.toggle('lock')
});

document.querySelectorAll('.nav__link').forEach( function (element) {
  element.addEventListener('click', function () {
    document.querySelector('.header').classList.remove('open')
    document.querySelector('.page').classList.remove('lock')
  })
});

document.querySelectorAll('.btn__genre').forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector('.btn__genre').classList.toggle('btn__genre_active')
  })
});