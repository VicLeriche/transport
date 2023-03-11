


window.onresize = function(){
  if (window.matchMedia('screen and (max-width: 660px)').matches) {
    checkMobile()
  }
}

(function(){
  checkMobile()
})()

function swiper() {
  return new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 300,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    }
  });
}
function checkMobile (){
  if (window.matchMedia('screen and (max-width: 660px)').matches) {
    swiper()
  }
}