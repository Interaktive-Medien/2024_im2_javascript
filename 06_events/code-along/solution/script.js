/*
* BERECHNUNGSGRUNDLAGE "lineare Interpolation"
* Ich habe eine Range und einen Wert in dieser Range.
* Ich möchte anhand von diesem Wert, den Wert einer anderen Range (mit anderem Start- und Zielwert) erhalten.
*
* Formel -> result = ((value - a) / (b - a)) * ((d - c)) + c
*
* Beispiel Range 1: a = 0 | b = 1000
* Beispiel Range 2: c = 30 | d = 70
* Beispiel Wert: 400
* result = (400 / 1000) * (70 - 30) + 30
* result = 46
* */


const eye = document.querySelector('#eye');
const pupil = document.querySelector('#pupil');

eye.addEventListener('click', function (e) {
    eye.classList.toggle('bloody')
})

const browserWindowWidth = window.innerWidth;
const browserWindowHeight = window.innerHeight;
const rangeLowest = 30;
const rangeHighest = 70;

document.addEventListener('mousemove', function (e) {
    const mousePositionX = e.clientX;
    const mousePositionY = e.clientY;

    const pupilLeft = mousePositionX / browserWindowWidth * (rangeHighest - rangeLowest) + rangeLowest;
    const pupilTop = mousePositionY / browserWindowHeight * (rangeHighest - rangeLowest) + rangeLowest;

    pupil.style.left = `${pupilLeft}%`;
    pupil.style.top =`${pupilTop}%`;
})

const body = document.querySelector('body');
const websiteHeight = body.scrollHeight;
const maxScrollPosition = websiteHeight - browserWindowHeight;

window.addEventListener('scroll', function (e) {
    const scrollPosition = window.scrollY;
    const rgbValue = scrollPosition / maxScrollPosition * (0 - 255) + 255;
    body.style.backgroundColor = `rgb(255,255,${rgbValue})`;
})
