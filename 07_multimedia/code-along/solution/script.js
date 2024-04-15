const video = document.querySelector('#video');
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector('#pause');
const btnMute = document.querySelector('#mute');
const btnUnmute = document.querySelector('#unmute');
const time = document.querySelector('#time');

function formattedTime (seconds) {
    seconds = Math.round(seconds)
    let minutes = 0;
    if (seconds >= 60) {
        minutes = seconds / 60;
        seconds = seconds % 60;
    }
    minutes = minutes <= 9 ? `0${minutes}` : minutes;
    seconds = seconds <= 9 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`
}

btnPause.classList.add('hidden');
btnMute.classList.add('hidden');
btnUnmute.classList.add('hidden');

video.addEventListener('loadeddata', function (e) {
    time.innerText = formattedTime(video.duration);
})

btnPlay.addEventListener('click', function (e) {
    video.play();
    btnPlay.classList.add('hidden');
    btnPause.classList.remove('hidden');
    btnMute.classList.remove('hidden')
})

btnPause.addEventListener('click', function (e) {
    video.pause();
    btnPlay.classList.remove('hidden');
    btnPause.classList.add('hidden');
})

btnMute.addEventListener('click', function (e) {
    video.muted = true;
    btnMute.classList.add('hidden');
    btnUnmute.classList.remove('hidden');
})

btnUnmute.addEventListener('click', function (e) {
    video.muted = false;
    btnUnmute.classList.add('hidden');
    btnMute.classList.remove('hidden');
})

video.addEventListener('timeupdate', function (e) {
    const currentTime = e.target.currentTime;
    const totalTime = video.duration;
    time.innerText = formattedTime(totalTime - currentTime)
})
