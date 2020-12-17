const responsive = {
  320: {
    items: 1
  }
}

$(document).ready(function() {
  
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /* Click event on toggle menu */
  $toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
  });

  // Owl-Carousel for Blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
  });

  // click to scroll top
  $('.move-up span').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  });

});