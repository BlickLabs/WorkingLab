(function(){
  var coverTitle = document.getElementsByClassName('homepage-hero__title');
  var coverWrapper = document.getElementsByClassName('homepage-hero_wrapper');
  var video = document.getElementById('cover-video');
  var play = document.getElementById('play-btn');
  console.log('jojojojo', screen.width);
    if(screen.width > 767){
      console.log('entro', screen.width);
      video.oncanplay = function () {
        setTimeout(function(){
          coverTitle[0].classList.add('title-translate');
          coverWrapper[0].classList.add('wrapper-translate');
          setTimeout(function(){
            coverTitle[0].classList.remove('title-translate');
            coverWrapper[0].classList.remove('wrapper-translate');
          }, 21000);
        }, 7500);
      };
    }else if(screen.width < 767){
      console.log('mobil');
      play.classList.remove('hide');
      video.oncanplay = function () {
        play.addEventListener('touchstart', function (e) {
          console.log(e);
          e.preventDefault();
          video.play();
          play.classList.add('hide');
        }, {passive: false});
      };
    }
})();
