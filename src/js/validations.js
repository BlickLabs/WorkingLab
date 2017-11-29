(function () {
  $('#homepage-newsletter').validate();

    $('#free-day-form').validate({
      errorPlacement: function (error, element) {
        element.closest('.input-wrapper').append(error);
      }
    });

    /*$('#work-with-us-form').validate({
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
      submitHandler: function (form, ev) {
        $.ajax({
          url: 'http://integrations.blick.mx/workinglabs/appointment/',
          type: 'POST',
          data: $('#work-with-us-form').serialize()
        }).done(function(data) {
          if (parseInt(data) === 1) {
            alert("Tu datos se han enviado correctamente");
            $('form[name="work-with-us-form"]')[0].reset();
          }
        });
      }
    });*/

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
    $('#work-with-us-form').submit(function (ev) {
      var valid;
      ev.preventDefault();
      validateForm();
      if(valid){
        $.ajax({
          url: 'http://integrations.blick.mx/workinglabs/appointment/',
          type: 'POST',
          data: $('#work-with-us-form').serialize(),
          success: function () {
            alert("Tu datos se han enviado correctamente");
            $('#work-with-us-form')[0].reset();
          },
          error: function () {
            alert("Ha ocurrido un error, intentalo de nuevo");
            $('#work-with-us-form')[0].reset();
          }
        });
      }
      return false;
    });
    function validateForm(){
      var spans = document.getElementsByClassName('input-error');
      while(spans.length > 0)	{
        spans[0].parentElement.removeChild(spans[0]);
      }

      var name, people, phone, date, time;
      name = document.getElementById('name-complete').value;
      people = document.getElementById('number-people').value;
      phone = document.getElementById('phone-number').value;
      date = document.getElementById('date').value;
      time = document.getElementById('time').value;

      function validar(value,mensaje,div_index,validation){
        if (validation){
          valid = false;
          var span = document.createElement('span');
          span.innerHTML = mensaje;
          span.className = 'input-error';
          document.getElementsByClassName('us-input-wrapper')[div_index].appendChild(span);
          return false;
        } else {
          valid = true;
        }
        return true;
      }
      if (phone !== '') {/*/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/*/
        validar(phone,'Escriba un teléfono de 10 dígitos',2,!(/^\d{10}$/).test (phone));
      }
      validar(name,'Campo requerido',0,name == '');
      validar(people,'Elija una opción',1,people == '');
      validar(phone,'Campo requerido',2,phone == '');
      validar(date,'Elija una fecha',3,date == '');
      validar(time,'Elija un horario',4,time == '');
    }
})();