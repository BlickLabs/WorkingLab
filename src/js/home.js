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

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
var scrollLink = $('a.go-section');
scrollLink.bind(clickHandler, function(e) {
  var targetDiv = $(this).attr('href');
  console.log(targetDiv);
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 100
  }, 800);
});

$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();
  
  scrollLink.each(function() {
    
    var sectionOffset = $(this.hash).offset().top - 500;
    
    if ( sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });  
});