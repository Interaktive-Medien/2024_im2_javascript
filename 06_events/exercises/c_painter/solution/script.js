/*
* 06.c - Painter
* Und schon wieder ein Berufswechsel :) Du gehst
* jetzt unter die Maler:innen. Die leere Wand (#wall)
* soll bemalt werden. Und zwar je nachdem, wo auf
* dem Display geklickt wird. Nimm Dir die Skizze (scribble.png)
* dazu als Hilfe. Es soll jeweils die ganze Wand bemalt werden.
*
* Wichtig: Wenn die Grösse des Browserfensters sich verändert,
* soll das bemalen immer noch funktionieren.
* */

const colorTopLeft = '#FFCB47';
const colorTopRight = '#8AA1B1';
const colorBottomLeft = '#F9564F';
const colorBottomRight = '#0C0A3E';

let wallWidth = 0;
let wallHeight = 0;
function getWallDimensions() {
    wallWidth = window.innerWidth;
    wallHeight = window.innerHeight;
    console.log(wallWidth,wallHeight);
}
getWallDimensions();
window.addEventListener('resize', function (e) {
    getWallDimensions();
})
const wall = document.querySelector('#wall');
wall.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    if (x <= wallWidth / 2 && y <= wallHeight / 2) {
        wall.style.backgroundColor = colorTopLeft;
    } else if (x > wallWidth / 2 && y <= wallHeight / 2) {
        wall.style.backgroundColor = colorTopRight
    } else if(x <= wallWidth / 2 && y > wallHeight / 2) {
        wall.style.backgroundColor = colorBottomLeft;
    } else if (x > wallWidth / 2 && y > wallHeight / 2) {
        wall.style.backgroundColor = colorBottomRight;
    }
})
