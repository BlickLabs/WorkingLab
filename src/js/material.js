(function () {
  $(".site-input--material").focus(function(){
    $(this).parent().addClass("is-active is-completed");
  });

  $(".site-input--material").focusout(function(){
    if($(this).val() === "") {
      $(this).parent().removeClass("is-completed");
    }
    $(this).parent().removeClass("is-active");
  });
})();