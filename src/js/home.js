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

  $('.locations-carousel').slick({
    prevArrow: '<button class="fa fa-angle-left slick-prev"></button>',
    nextArrow: '<button class="fa fa-angle-right slick-next"></button>',
    adaptiveHeight: true
  });

  $(document).on('opening', '.locations-modal', function () {
    $(this).children('.locations-carousel').slick('resize');
  });
})();