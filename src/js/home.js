(function () {
  $('#homepage-hero-carousel').slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    autoplay: true,
    pauseOnFocus: false,
    autoplaySpeed: 5500
  });

  $('#homepage-testimonials-carousel').slick({
    prevArrow: '<button class="fa fa-angle-left slick-prev"></button>',
    nextArrow: '<button class="fa fa-angle-right slick-next"></button>',
    adaptiveHeight: true,
    dots: true
  });
})();

var homeLocationsCarousel = $('.our-location-carousel');

homeLocationsCarousel.owlCarousel ({
 loop: false,
 nav: true,
 dots: false,
 margin: 20,
 items: 1,
 autoHeight: true
});

$(function(){
 $('a[data-modal]').click(function(event) {
   $(this).modal();
   return false;
 });
});