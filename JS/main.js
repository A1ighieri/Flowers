$(document).ready(function () {
const flowersSlider = new Swiper('.flowers-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,


 

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }

});
  const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,


  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'img/reviews/R1/r1-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'img/reviews/R1/r1-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});

$("#review-2").on('click', function() {

  $.fancybox.open([
    {
      src  : 'img/reviews/R2/r2-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'img/reviews/R2/r2-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});



});