$(document).ready(function(){
    
    //aos
    AOS.init();
    
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
    
    //navigation toggle
    $('.btn_nav').click(function(){
        $('.nav').animate({right : '0'})
        $('body').css({overflow : 'hidden'})
    })
    $('.close').click(function(){
        $('.nav').animate({right : '-100%'})
        $('body').css({overflow : 'auto'})
    })
    //navigation sub menu toggle
    $('.tit_menu li').click(function(){
        $(this).children('.sub_menu').slideToggle();
    })
    //navigation global type toggle
    $('.nav_global button').click(function(){
        $('.nav_global_type').slideToggle();
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
        spaceBetween: 0,
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
        spaceBetween: 20,
        observer: true,
        observeParents: true,
    });
    
    
    //event slide
    var mySwiper = new Swiper('.main_event .swiper-container', {
      loop: true,
        spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_event .swiper-pagination',
      },
      navigation: {
        nextEl: '.main_event .swiper-button-next',
        prevEl: '.main_event .swiper-button-prev',
      },
    })
    
    //category
    $(window).scroll(function(){
        if($(document).scrollTop()+800 >= $('.cat01').offset().top){
            $('.cat01 span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
        if($(document).scrollTop()+800 >= $('.cat02').offset().top){
            $('.cat02 span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
        if($(document).scrollTop()+800 >= $('.cat03').offset().top){
            $('.cat03 span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
        if($(document).scrollTop()+800 >= $('.cat04').offset().top){
            $('.cat04 span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
        if($(document).scrollTop()+800 >= $('.cat05').offset().top){
            $('.cat05 span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
        if($(document).scrollTop()+800 >= $('.cat06').offset().top){
            $('.cat06 span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
    })
    
    //main_brand txt moving
    var controller = new ScrollMagic.Controller();

    //brand_story
    var tween1 = TweenMax.to('.brand_story h3', 0.5, {
        left: 130
    });
    var scene = new ScrollMagic.Scene({
        triggerElement: ".brand_story",
        duration: "100%",
        offset : -200,
        })
        .setTween(tween1)
        .addTo(controller)
    //    .addIndicators({
    //        name: "1"
    //    }) 

    //brand_visual
    var tween2 = TweenMax.to('.brand_visual h3', 0.5, {
        right: 130
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".brand_visual",
        duration: "100%",
        offset : -200,
        })
        .setTween(tween2)
        .addTo(controller)
    //    .addIndicators({
    //        name: "1"
    //    })

})