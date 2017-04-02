(function () {
  $(document).on('closed', '.free-day-modal', function (e) {
    var validator = $('#free-day-form').data('validator');
    $('#free-day-form')[0].reset();
    validator.resetForm();
    $('#free-day-form .material-div').removeClass('is-completed').removeClass('is-active');
  });
})();