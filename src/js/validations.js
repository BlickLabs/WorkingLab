(function () {
  $('#homepage-newsletter').validate();
  $('#free-day-form').validate({
    errorPlacement: function (error, element) {
      element.closest('.input-wrapper').append(error);
    }
  });
  $('#work-with-us-form').validate({
    errorPlacement: function (error, element) {
      element.closest('.input-wrapper').append(error);
    }
  });
  $('#contact-form, #partnership-form').validate({
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