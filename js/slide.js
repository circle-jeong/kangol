$( function () {
  var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
} );

$( function () {
  var swiper = new Swiper('.swiper-container2', {

    effect : 'fade',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    
  });


  var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

} );

$( function () {
  var swiper = new Swiper('.swiper-container4', {
    direction: 'vertical',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
} );