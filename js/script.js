/* *********************************************
Preloader:                 
(Animated Gif: https://loading.io)
********************************************* */
$(window).on('load', function(){
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});


$(function(){
  /* *********************************************
  Owl-Carousel: Team Members
  ********************************************* */
  // $(".owl-carousel").owlCarousel(); OR
  $("#team-members").owlCarousel({
    items: 2,
    // margin: 10,
    // loop: true,
    rewind: true,
    autoplay: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    // navText: ['&larr;','&rarr;'],
    // navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });


  /* ****************************************************
  Progress Bars Skillsets triggered by Waypoints Plugin
  **************************************************** */
  
  $("#progress-elements").waypoint(function() {

    $(".progress-bar").each(function(){
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
    });

    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });




});


