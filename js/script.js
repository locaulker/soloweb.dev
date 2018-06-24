/* *********************************************
Preloader:                 
(Animated Gif: https://loading.io)
********************************************* */
$(window).on('load', function(){
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});


/* *********************************************
Owl-Carousel: Team Members
********************************************* */
$(function(){
  // $(".owl-carousel").owlCarousel();
  $("#team-members").owlCarousel({
    items: 2,
    margin: 10,
    // loop: true,
    rewind: true,
    autoplay: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // navText: ['&larr;','&rarr;'],
    navText: ['<i class="fa fa-angle-left fa-3x"></i>','<i class="fa fa-angle-right fa-3x"></i>']
  });
});