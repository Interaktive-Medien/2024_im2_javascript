/*
* 06.d - Timer
* Und nun ab zu den Uhrmacher:innen. Wir stellen
* einen Timer her. Folgendes sollte beachtet werden.
* - Mit Klick auf #start wird der Timer begonnen
* - Wenn der Timer läuft, ist der Button #start disabled
* - Mit Klick auf #reset wird der Timer zurückgesetzt
* - Wenn der Timer nicht läuft, ist der Button #reset disabled
* - Arbeite mit einem Interval
* - Der Interval soll entfernt werden, wenn der Timer fertig ist
* */

const minutesCt = document.querySelector('#minutes');
const secondsCt = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

const timerDurationInSeconds = 61;
let minutes = 0;
let seconds = 0;

function updateDOM() {
    minutesCt.innerText = minutes < 10 ? `0${minutes}` : minutes;
    secondsCt.innerText = seconds < 10 ? `0${seconds}` : seconds;
}
function initTimer() {
    resetBtn.disabled = true;
    startBtn.disabled = false;
    minutes = Math.floor(timerDurationInSeconds / 60)
    seconds = timerDurationInSeconds % 60;
    updateDOM();
}
initTimer();

let interval;
startBtn.addEventListener('click', function (e) {
    resetBtn.disabled = false;
    startBtn.disabled = true;
    interval = setInterval(timer, 1000);
    function timer () {
        if (seconds !== 0) {
            seconds--;
        } else {
            if (minutes !== 0) {
                minutes--;
                seconds = 59;
            } else {
                clearInterval(interval);
                return;
            }
        }
        updateDOM();
    }
})
resetBtn.addEventListener('click', function (e) {
    clearInterval(interval)
    initTimer();
})
