let burger = document.querySelector('.burger');
let burgerActive = document.querySelector('.burger-active');
let item1 = document.querySelector('.header__item-1');
let item3 = document.querySelector('.header__item-3');


burger.addEventListener('click', f1);
burger.addEventListener('click', f2);

function f1() {
   if (item1.style.display === 'block') {
      item1.style.display = 'none';
  } else {
      item1.style.display = 'block';
  }
}

function f2() {
   if (item3.style.display === 'block') {
      item3.style.display = 'none';
  } else {
      item3.style.display = 'block';
  }
}


// добавление и удоление класса 

burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})


// =====  jQuery =====
// =====  jQuery =====
// =====  jQuery =====


$('.slyder-block').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
