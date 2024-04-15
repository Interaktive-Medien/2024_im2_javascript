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

const timerDurationInSeconds = 70;
