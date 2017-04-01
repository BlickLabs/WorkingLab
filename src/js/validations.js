(function () {
  $('#homepage-newsletter').validate();
  $('#contact-form').validate({
    errorPlacement: function (error, element) {
      element.closest('.input-wrapper').append(error);
    },
    rules: {
      phone: {
        number: true
      }
    }
  });
})();