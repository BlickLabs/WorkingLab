(function () {
  function attachMouse(e) {
    if(!$(e.target).is('.prices__item-icon') && !$(e.target).is('.prices__item-title')) {
      $('.prices__item-icon').removeClass('hover');
      $(window).off('mousemove');
    }
  }

  $('.prices__item-title').mouseenter(function () {
    $(this).parent().siblings('.prices__item-icon').addClass('hover');
    $(window).mousemove(attachMouse);
  });
})();