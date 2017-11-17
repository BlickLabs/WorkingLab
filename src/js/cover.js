(function(){
  var coverTitle = document.getElementsByClassName('homepage-hero__title');
  var coverWrapper = document.getElementsByClassName('homepage-hero_wrapper');
  var video = document.getElementById('cover-video');

  video.oncanplay= function () {
    setTimeout(function(){
      coverTitle[0].classList.add('title-translate');
      coverWrapper[0].classList.add('wrapper-translate');
      setTimeout(function(){
        coverTitle[0].classList.remove('title-translate');
        coverWrapper[0].classList.remove('wrapper-translate');
      }, 21000);
    }, 7500);
  };
})();
