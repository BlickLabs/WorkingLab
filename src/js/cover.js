(function () {
  var coverTitle = document.getElementsByClassName('homepage-hero__title');
  var coverWrapper = document.getElementsByClassName('homepage-hero_wrapper');
  var video = document.getElementById('video');
  var play = document.getElementById('play-btn');
  var playCover = document.getElementById('video-cover');
  if (screen.width > 767) {
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
  } else if (screen.width < 767) {
    play.classList.remove('hide');
    video.removeAttribute('autoplay');
    video.removeAttribute('loop');
    video.oncanplay = function () {
      play.addEventListener('touchstart', function () {
        video.play();
        play.classList.add('hide');
      });
      playCover.addEventListener('touchstart', function () {
        video.play();
        play.classList.add('hide');
      });
      play.addEventListener('click', function () {
        video.play();
        play.classList.add('hide');
      });
      playCover.addEventListener('click', function () {
        video.play();
        play.classList.add('hide');
      });
    };
    video.onended = function () {
      play.classList.remove('hide');
    };
    video.paused = function () {
      play.classList.remove('hide');
    };
  };
})();