// Подключить слайдер из библиотеки.

// https://swiperjs.com/

// Слайдер должен автоматически воспроизводиться, один слайд проигрывается 5 секунд.

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 5000,
  },
});
