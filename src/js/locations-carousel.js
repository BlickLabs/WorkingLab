var locationsCarousel = $('.chapultepec-carousel');

locationsCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="locations-carousel-arrow" src="img/icons/flecha-izquierda.png" />', '<img class="locations-carousel-arrow" src="img/icons/flecha-derecha.png" />'],
  dots: true,
  autoWidth: true,
  margin: 38,
  items: 1,
  responsive:{
    720:{
      autoWidth: false,
      margin: 10
    }
  }
});