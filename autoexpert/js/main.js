$('#inputLbl, #input').click(function() {
    $('#inputLbl').addClass('top');
    $('#input').focus();
  });
  
  $('#input').focusout(function() {
    if ($(this).val().trim() == '') {
      $('#inputLbl').removeClass('top');
    }
  });

  $('#inputLbl2, #input2').click(function() {
    $('#inputLbl2').addClass('top');
    $('#input2').focus();
  });
  
  $('#input2').focusout(function() {
    if ($(this).val().trim() == '') {
      $('#inputLbl2').removeClass('top');
    }
  });
  $('#inputLbl3, #input3').click(function() {
    $('#inputLbl3').addClass('top');
    $('#input3').focus();
  });
  
  $('#input3').focusout(function() {
    if ($(this).val().trim() == '') {
      $('#inputLbl3').removeClass('top');
    }
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var owl=$(".owl-carousel");
	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
	$(".next").click(function(){
		owl.trigger("prev.owl.carousel");
	});
	$(".prev").click(function(){
		owl.trigger("next.owl.carousel");
  });

 // $('.popup, .background__layer').hide();

  $('.btn').click(function(){
      $('.popup, .background__layer').fadeIn();
  });

  $('.close__popup').click(function(){
    $('.popup, .background__layer').fadeOut();
});


  $('.header__burger').click(function() {
  $('.header__burger,.header-menu,.header-menu__link').toggleClass('active');
  $('body').toggleClass('lock');
 
});
 $('.header-menu__link').click(function() {
  $('.header__burger,.header-menu').removeClass('active');
});