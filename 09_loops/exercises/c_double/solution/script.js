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
    const startguthaben = parseFloat(moneyInput.value);
    const zins = parseFloat(interestInput.value);
    if (!startguthaben || !zins) return;
    let jahre = 0;
    let profit = 0;
    let geld_auf_konto = startguthaben;
    while(geld_auf_konto <= 2 * startguthaben) {
        const plus = geld_auf_konto * (zins / 100);
        profit += plus;
        geld_auf_konto += plus;
        jahre++;
        console.log(`Im Jahr ${jahre} beträgt dein Kapital ${Math.round(geld_auf_konto)}`)
    }
    yearsCt.innerText = jahre;
    resultCt.classList.remove('hidden')
})
