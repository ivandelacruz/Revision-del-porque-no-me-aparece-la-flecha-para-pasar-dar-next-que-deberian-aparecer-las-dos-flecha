/* Activador de jQuery */
$(document).ready(function(){ 
     // Activador de slick slider
    $('.slick-banner').slick({
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplayspeed: 2000,
      speed: 300
      infinite: true,
      arrows: true
    }); 
});     
   