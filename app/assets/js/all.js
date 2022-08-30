$(function() {
  console.log('Hello Bootstrap5');
});

// swiper

var swiper = new Swiper(".swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
