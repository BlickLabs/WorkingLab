(function () {
  var coverTitle = document.getElementsByClassName('homepage-hero__title');
  var coverWrapper = document.getElementsByClassName('homepage-hero_wrapper');
  var video = document.getElementById('video');
  var play = document.getElementById('play-btn');
  var playCover = document.getElementById('video-cover');
  if (screen.width > 767 && video) {
    video.oncanplay = function () {
      setTimeout(function () {
        coverTitle[0].classList.add('title-translate');
        coverWrapper[0].classList.add('wrapper-translate');
        setTimeout(function () {
          coverTitle[0].classList.remove('title-translate');
          coverWrapper[0].classList.remove('wrapper-translate');
        }, 21000);
      }, 7500);
    };
  } else if (screen.width < 930 && video) {
    play.classList.remove('hide');
    video.removeAttribute('autoplay');
    video.removeAttribute('loop');
    video.oncanplay = function () {
      play.classList.add('show');
      document.getElementById('homepage-header').addEventListener('touchstart', function (ev) {
        ev.preventDefault();
        if(ev.target === play || ev.target === playCover) {
          video.play();
          play.classList.remove('show');
        }
      });
    };
  }
})();