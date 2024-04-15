// -> controls
const controlBtn = document.querySelector('#controls');
const controlText = controlBtn.querySelector('p');

// -> track container
const track01 = document.querySelector('#track_01');
const track02 = document.querySelector('#track_02');

// -> audio
const audio01 = track01.querySelector('audio');
const audio02 = track02.querySelector('audio');

// -> song
const song01 = track01.querySelector('.song');
const song02 = track02.querySelector('.song');

// -> constants
const lowestSongNumber = 1;
const highestSongNumber = 24;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let audioIsPlaying = false;
controlBtn.addEventListener('click', function (e) {
    if (controlText.innerText === 'play') {
        audioIsPlaying = true;
        let songId01 = randomNumber(lowestSongNumber, highestSongNumber);
        let songId02 = randomNumber(lowestSongNumber, highestSongNumber);
        audio01.src = `../sound/${songId01}.mp3`;
        audio02.src = `../sound/${songId02}.mp3`;
        audio01.play();
        audio02.play();
        song01.textContent = `Song No. ${songId01}`;
        song02.textContent = `Song No. ${songId02}`;
        controlText.innerText = 'stop'
    } else {
        audioIsPlaying = false;
        audio01.src = "";
        audio02.src = "";
        audio01.pause();
        audio02.pause();
        song01.textContent = "";
        song02.textContent = "";
        controlText.innerText = 'play';
    }
})

const browserWindowWidth = window.innerWidth;
document.addEventListener('mousemove', function (e) {
    if (audioIsPlaying) {
        const mousePositionX = e.clientX;
        if (browserWindowWidth / 2 >= mousePositionX) {
            audio01.volume = 1;
            const volumeAudio2 = (mousePositionX / (browserWindowWidth / 2));
            audio02.volume = volumeAudio2;
        } else {
            audio02.volume = 1
            const volumeAudio1 = ((mousePositionX - (browserWindowWidth/2)) / (browserWindowWidth - (browserWindowWidth / 2))) * ((0 - 1)) + 1;
            audio01.volume = volumeAudio1;
        }
    }
})
