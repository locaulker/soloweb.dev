/*
1. Preloader: (Animated Gif: https://loading.io)
2. Portfolio: using isotope plugin
3. Owl-Carousel: Team Members
4. Progress Bars Skillsets triggered by Waypoints Plugin
5. jQuery Responsive Tabs
6. Magnifier: Magnific-Popup
*/

/* ****************************************************
Window on load methods
**************************************************** */
$(window).on('load', function(){
  /* *********************************************
  1. Preloader: (Animated Gif: https://loading.io)
  ********************************************* */
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');


  /* ****************************************************
  2. Portfolio: using isotope plugin
  **************************************************** */
  // Initialize isotope
  $("#isotope-container").isotope({
    // options
  });

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function(){
    // get filter value
    var filterValue = $(this).attr('data-filter');
    
    // filter portfolio items
    $("#isotope-container").isotope({
      // options
      filter: filterValue
    });

    // active class button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');

  });


});


// document on load functions
$(function(){
  /* *********************************************
  3. Owl-Carousel: Team Members
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
  4. Progress Bars Skillsets triggered by Waypoints Plugin
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


  /* ****************************************************
  5. jQuery Responsive Tabs
  **************************************************** */
  $("#services-tabs").responsiveTabs({
    animation: 'slide', // The panels will slide up and down
    // duration: 1000
  });

  /* ****************************************************
  6. Magnifier: Magnific-Popup
  **************************************************** */
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a', // child items selector, clicking opens a popup
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });



});


