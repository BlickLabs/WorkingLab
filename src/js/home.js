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
    prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
    nextArrow: '<span class="fa fa-angle-right slick-next"></span>'
  });
})();