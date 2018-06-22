/* *********************************************
Preloader:                 
(Animated Gif: https://loading.io)
********************************************* */
$(window).on('load', function(){
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut();
});