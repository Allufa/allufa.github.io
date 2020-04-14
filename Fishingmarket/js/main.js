$(document).ready(function(){
     $('.mainsection__slider').slick({
         arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        swipe: true,
        //cssEase:"ease",
        //fade:true,
       
      });
});



$(document).ready(function(){
  $('.slider-hit').slick({
      
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 5000,
     dots: false,
     swipe: true,
     //cssEase:"ease",
     //fade:true,
     arrows:true,
     nextArrow: $('.hit-slider-right'),
     prevArrow: $('.hit-slider-left'),
   });
});



$(document).ready(function(){
  $('.slider-newproducts').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    swipe: true,
    //cssEase:"ease",
    //fade:true,
    arrows:true,
     nextArrow: $('.newproducts-slider-right'),
     prevArrow: $('.newproducts-slider-left'),
   });
});



$(document).ready(function(){
  $('.slider-news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    swipe: true,
    //cssEase:"ease",
    //fade:true,
    arrows:true,
     nextArrow: $('.news-slider-right'),
     prevArrow: $('.news-slider-left'),
   });
});


$(document).ready(function(){
  $('.sidemenu__item').hover(function(){
    $(this).children('.sidemenu-submenu').toggleClass("activesubmenu");



   });
});

$(document).ready(function(){
  $('.catalog').hover(function(){
    $(this).children('.catalog-submenu').toggleClass("active-catalog-submenu");



   });
});