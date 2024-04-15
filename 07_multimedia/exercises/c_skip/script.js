/*
* 07.c - Skip
* Jetzt hast du wieder ein Video. Dieser läuft in einer
* Endlosschleife und fängt automatisch an zu spielen. Das
* soll auch so sein. Man soll aber spulen können, bzw. auf dem
* Skipbar (#skipbar) an ine Position klicken und der Video soll
* dann so weit vor- oder zurückspulen.
*
* Der aktuelle Fortschritt des Videos soll natürlich auch
* angezeigt werden. Hier kannst du dir auch Codeschnipsel
* aus Übung 07b kopieren.
* */

const video = document.querySelector('#video');
const skipbar = document.querySelector('#skipbar');
const progress = document.querySelector('#progress');

let currentTime = 0;
let videoDuration = 0;
