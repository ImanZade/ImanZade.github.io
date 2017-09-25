$(window).scroll(function(){
    if($(document).scrollTop() > 50){
      $('nav').addClass('scroll');
    } else {
      $('nav').removeClass('scroll');
    }
});


$(window).scroll(function(){
    if($(document).scrollTop() > 100){
      $('#ads').addClass('ads');
    } else {
      $('#ads').removeClass('ads');
    }
});
