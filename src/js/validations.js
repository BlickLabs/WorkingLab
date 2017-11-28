(function () {
  $('#homepage-newsletter').validate();

    $('#free-day-form').validate({
      errorPlacement: function (error, element) {
        element.closest('.input-wrapper').append(error);
      }
    });

    $('#work-with-us-form').validate({
      rules: {
        time: "required", // field name not #id and has class="required
        date: "required",
        telnumber: "required",
        peopleteam: "required",
        completename: "required"
      },
      errorPlacement: function (error, element) {
        element.closest('.input-wrapper').append(error);
      },
      submitHandler: function (form) {
        console.log('sdasdas', form);
        var data = $('form[name="work-with-us-form"]').serialize();
        $.ajax({
          url: 'http://integrations.blick.mx/workinglabs/appointment/',
          method: 'POST',
          data: data
        }).done(function(data) {
          if (parseInt(data) === 1) {
            alert("Tu datos se han enviado correctamente");
            $('form[name="work-with-us-form"]')[0].reset();
          }
        });
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




    /*$(form).validate({ // or form #id
      rules: {
        field: "required" // field name not #id and has class="required
      },
      submitHandler: function (form) {
        alert('data submitted');
        return false;
      }
    });*/


})();