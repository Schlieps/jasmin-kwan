$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){
    
    //navbar toggler
    $('.navbar-toggler').click(function(){
      $('.navbar-toggler').toggleClass('change')
    });
    
    
     //window scroll

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 550) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top');
      $('.navbar').removeClass('navbar-initial');

    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
      $('.navbar').addClass('navbar-initial');
    }
  })
    
});
