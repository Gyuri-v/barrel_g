$(document).ready(function(){
    
    //header scroll event
    var headerOffset = $('.header').offset();
    
    $(window).scroll(function(){
        if($(document).scrollTop() > headerOffset.top){
            $('.header').addClass('on');
        }
        else{
            $('.header').removeClass('on');
        }
    })
    
    
    //main_vis 슬라이드
    var mySwiper = new Swiper('.main_vis .swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_vis .swiper-pagination',
      },
      navigation: {
        nextEl: '.main_vis .swiper-button-next',
        prevEl: '.main_vis .swiper-button-prev',
      },
    })
    
    //best slide-nav
     var swiper = new Swiper('.main_best .slide_nav .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });
    
    //best_con slide
     var swiper = new Swiper('.main_best .best_con .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
    });

})