(function () {
  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.form-message')
      .removeClass(form.hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      var $form = $(form).serialize(),
        fields = $(form).find('select, input, textarea, button').not('[disabled]'),
        formMessage = $(form).find('.form-message'),
        successMessage = $('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),
        newsletterMessage = $('<i class="fa fa-check-circle"></i><span>Suscripción realizada con éxito</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),
        setMessage = function (success, newsletter) {
          var message = success ? (newsletter ? newsletterMessage : successMessage) : errorMessage;
          fields.removeAttr('disabled');
          formMessage.removeClass(success ? 'error' : 'success');
          formMessage.addClass(success ? 'success' : 'error');
          formMessage.html(message);
        };

      fields.attr('disabled', 'disabled');
      formMessage.html('');
      if (!$(form).find('.button-wrapper .loader').length) {
        $(form).find('.button-wrapper').addClass('disabled');
      }
      $.ajax({
        url: $(form).attr('action'),
        method: 'POST',
        data: $form
      })
        .done(function (data) {
          var newsletter = typeof data === 'object',
            condition = newsletter ? data.status === 'subscribed' : parseInt(data) === 1;
          setMessage(condition, newsletter);
          form.reset();
        })
        .fail(function () {
          setMessage(false);
        })
        .always(function () {
          fields.removeAttr('disabled');
          $(form).find('.button-wrapper').removeClass('disabled');
        });
    }
  });

  //MOBILE MENU
    var mobile = window.matchMedia('(max-width: 810px)');

    function detectTouch(e) {
      if (!$(e.target).is('nav .menu-trigger') && !$(e.target).is('nav .menu-container') && !$(e.target).closest('nav .menu-container').length && $('nav .menu-container').hasClass('show-menu')) {
        e.preventDefault();
        $('nav .menu-container').removeClass('show-menu');
        $('body').removeClass('noscroll');
      }
    }

    function detectClick() {
      if ($('nav .menu-container').hasClass('show-menu')) {
        $('nav .menu-container').removeClass('show-menu');
        $('body').removeClass('noscroll');
      } else {
        $('nav .menu-container').addClass('show-menu');
        $('body').addClass('noscroll');
      }
    }

    if (mobile.matches) {
      $('body')[0].addEventListener('touchstart', detectTouch, {passive: false});
      $('nav .menu-trigger').click(detectClick);
    } else {
      $('body')[0].removeEventListener('touchstart', detectTouch, {passive: false});
      $('nav .menu-trigger').off('click');
      $('body').removeClass('noscroll');
    }

    $(window).resize(function () {
      $('body')[0].removeEventListener('touchmove', detectTouch, {passive: false});
      $('nav .menu-trigger').off('click');
      $('body').removeClass('noscroll');
      $('nav .menu-container').removeClass('show-menu');

      if (mobile.matches) {
        $('body')[0].addEventListener('touchmove', detectTouch, {passive: false});
        $('nav .menu-trigger').click(detectClick);
      }
    });

    if (!$('nav').hasClass('sections-nav')) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
          $('nav').addClass('fixed');
        } else {
          $('nav').removeClass('fixed');
        }
      });
    }
})();