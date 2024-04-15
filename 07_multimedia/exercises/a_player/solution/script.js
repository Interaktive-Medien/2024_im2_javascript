/*
* 07.a - Player
* Du hast eine wichtige Kundenpräsentation, in der du ein Video
* zeigen möchtest. Leider sehen alle Videoplayer, die du dir angeschaut hast,
* nicht genau so aus wie du das willst. Du baust dir deshalb
* einen eigenen Videoplayer. Folgendes soll er können:
* - Wenn das Video pausiert ist, soll der Hintergrund rot (#ff0327) sein.
* - Wenn das Video spielt, soll der Hintergrund grün (#66f600) sein.
* - Das Video soll nur über die Space-Taste gesteuert, bzw. gestartet
*   oder pausiert werden können.
* */


const background = document.querySelector('#background');
const video = document.querySelector('#video');

window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
})
video.addEventListener('playing', function (e) {
    background.classList.add('active')
})
video.addEventListener('pause', function (e) {
    background.classList.remove('active')
})
