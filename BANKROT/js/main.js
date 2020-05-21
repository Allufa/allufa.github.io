$(document).ready(function(){
    
     
        
   
    $('.animationbutton').mouseenter(function(){
    function timer(start) {
        setTimeout(function () { //The timer
         // console.log(start);
           $(".animationbutton").css("background", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + (100-start) +"%, #f75830 " + (100-start) + "%, #f75830 100%");
        }, 3*start); //needs the "start*" or else all the timers will run at 3000ms
    }
    for(let start = 100; start >= 0; start--) {
        timer(start);
    }
});
    $('.animationbutton').mouseleave(function(){
        function timer(start) {
            setTimeout(function () { //The timer
             // console.log(start);
               $(".animationbutton").css("background", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + start +"%, #f75830 " + start + "%, #f75830 100%");
            }, 3*start); //needs the "start*" or else all the timers will run at 3000ms
        }
        for( let start = 100; start >= 0; start--) {
            timer(start);
        }
    
   
});



$('.topslider__button-link').mouseenter(function(){
    function timer(start) {
        setTimeout(function () { //The timer
          console.log(start);
           $(".topslider__button-link").css("background", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + (100-start) +"%, #f75830 " + (100-start) + "%, #f75830 100%");
        }, 3*start); //needs the "start*" or else all the timers will run at 3000ms
    }
    for(let start = 100; start >= 0; start--) {
        timer(start);
    }
});
    $('.topslider__button-link').mouseleave(function(){
        function timer(start) {
            setTimeout(function () { //The timer
              console.log(start);
               $(".topslider__button-link").css("background", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + start +"%, #f75830 " + start + "%, #f75830 100%");
            }, 3*start); //needs the "start*" or else all the timers will run at 3000ms
        }
        for( let start = 100; start >= 0; start--) {
            timer(start);
        }
    
   
});



$('.consulting__button').mouseenter(function(){
    function timer(start) {
        setTimeout(function () { //The timer
          console.log(start);
           $(".consulting__button").css("background", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + (100-start) +"%, #f75830 " + (100-start) + "%, #f75830 100%");
        }, 3*start); //needs the "start*" or else all the timers will run at 3000ms
    }
    for(let start = 100; start >= 0; start--) {
        timer(start);
    }
});
    $('.consulting__button').mouseleave(function(){
        function timer(start) {
            setTimeout(function () { //The timer
              console.log(start);
               $(".consulting__button").css("background", "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + start +"%, #f75830 " + start + "%, #f75830 100%");
            }, 3*start); //needs the "start*" or else all the timers will run at 3000ms
        }
        for( let start = 100; start >= 0; start--) {
            timer(start);
        }
    
   
});




    $('.topslider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed:5000,
    
    });
    
    
    $('.freeclients-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed:8000,
    
    });
    
    $('.burger').click(function(){
        $(this).toggleClass('active');
        $(".header-left__menu-mobile").toggleClass('active');
    })

    $('.header-left__menu').clone().appendTo('.header-left__menu-mobile')
    wow2 = new WOW(
        {
        boxClass:     'wow2',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow2.init();
    $(".topslider__item").bind("DOMSubtreeModified", function() {
        if ( $(".topslider__item").hasClass('slick-active') ) {
            wow2 = new WOW(
                {
                boxClass:     'wow2',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
              }
              )
              wow2.init();


        }
        
    });

    $('.servises-contacts,.servises-about,.servises-article').hide()
    $('.menu-contacts').click(function(){
        $('.wrapper').children().hide(); 
        $('.servises-contacts,footer').show(); 
        $(document).scrollTop('.servises-contacts');
        $(".header-left__menu-mobile").removeClass('active');
        
    })
    $('.menu-about').click(function(){
        $('.wrapper').children().hide(); 
        $('.servises-about,footer').show(); 
        $(document).scrollTop('.servises-about');
        $(".header-left__menu-mobile").removeClass('active');
        
    })
    $('.menu-article').click(function(){
        $('.wrapper').children().hide();
        $('.servises-article,footer').show();
        $(document).scrollTop('.servises-article');
        $(".header-left__menu-mobile").removeClass('active');
    })

    $('.menu-main').click(function(){
         
        $('.wrapper').children().show(); 
        $('.servises-contacts').hide(); 
        $('.servises-about').hide(); 
        $('.servises-article').hide();
        $(".header-left__menu-mobile").removeClass('active');
    })
    



    $('.quanda__text').slideToggle();
    $('.qanda__subtitle').click(function(){
        $(this).next().slideToggle();
        $(this).find('.fa-angle-down').toggleClass('rotated');
        
    });
    
    $(".topslider__button").click(function() { // ID откуда кливаем
        $('html, body').animate({
            scrollTop: $(".consulting").offset().top  // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });

});