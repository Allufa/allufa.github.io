$(document).ready(function(){
    $('.ru').on('click',function(){
        $(this).addClass('active');
        $('.eng').removeClass('active');
    });
    $('.eng').on('click',function(){
        $(this).addClass('active');
        $('.ru').removeClass('active');
    });
    $('.header__burger').on('click',function(){
        $('.menu').toggleClass('menu__active');
        $('.header__burger').toggleClass('burger__active');
    })



});