// -> controls
const controlBtn = document.querySelector('#controls');
const controlText = controlBtn.querySelector('p');

// -> track container
const track01 = document.querySelector('#track_01');
const track02 = document.querySelector('#track_02');

// -> constants
const lowestSongNumber = 1;
const highestSongNumber = 24;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
