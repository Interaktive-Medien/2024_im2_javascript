/*
* 09.c - Double
* Du bis wieder zurück bei der Bank. Nebst dem Zinsrechner
* aus Übung a möchtest du den Kund:innen nun ein Tool
* anbieten, welches herausfindet, innert wie vielen Jahren
* sich ihr Kapital verdoppelt bei einem fixen Jahreszins.
* Wenn jemand kein Kapital oder kein Zinssatz eingibt,
* soll die Funktion nicht ausgeführt werden.
*
* Benutze für die Berechnung eine while-Schlaufe. Wichtig hier:
* While-Schlaufen können, wenn nicht korrekt angewendet,
* den Browser zum Abstürzen bringen (wenn die End-Bedingung
* nie eintritt). Plane hier deshalb deine Berechnung sehr gut
* und auf Papier, bevor du die Schleife schreibst.
* */

const moneyInput = document.querySelector('#money');
const interestInput = document.querySelector('#interest');
const evaluateBtn = document.querySelector('#evaluate');
const resultCt = document.querySelector('#result');
const yearsCt = resultCt.querySelector('#years');

evaluateBtn.addEventListener('click', function (e) {
    console.log(e)
})
