$(document).ready(function(){
    //parallax
    $('.parallax-window').parallax({imageSrc: 'img/bg/bg_cat01.jpg'});
    
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
    
    
    $('.main_best .swiper-slide').click(function(){
        $(this).addClass('on');
        $(this).siblings('div').removeClass('on');
        
        idx = $(this).index() + 1;
        $('.slide1, .slide2, .slide3, .slide4, .slide5, .slide6').removeClass('on');
        $('.slide' + idx).addClass('on');
    })
    
    //best_con slide
     var swiper = new Swiper('.main_best .best_con .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        observer: true,
        observeParents: true,
    });
    
    
    //event slide
    var mySwiper = new Swiper('.main_event .swiper-container', {
      loop: true,
        spaceBetween: 30,
//      autoplay: {
//        delay: 2000,
//        disableOnInteraction: false,
//      },
      pagination: {
        el: '.main_event .swiper-pagination',
      },
      navigation: {
        nextEl: '.main_event .swiper-button-next',
        prevEl: '.main_event .swiper-button-prev',
      },
    })
    
    
    //brand txt moving
//	var storyOffset = $('.brand_story').offset();
//    $(window).scroll(function(){
//        if( $(document).scrollTop() > storyOffset.top - 500 ){
//            $('.brand_story h3').animate({left : '25px'},700);
//        }
//    })

})