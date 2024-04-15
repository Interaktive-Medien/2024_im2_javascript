/*
* 09.b - Bart Simpsons
* Kennt ihr die Simpsons. Wenn ja, dann könnt ihr euch sicher daran
* erinnern, dass Bart Simpson sehr oft als Strafarbeit einen
* Satz X mal auf eine Wandtafel schreiben musste. Wir bauen Bart nun
* ein Hilfstool, mit dem er das schneller erledigen kann.
*
* Befülle zuerst die Select-Auswahl (#saying) mittels eines Loops mit allen
* vorhandenen Sprüchen aus dem Array sayings. Verbinden dann diesen
* Select plus die Anzahl-Eingabe (#count) mit dem Schreiben-Button (#write).
*
* Sobald dieser Button geklickt wird, soll der gewählte Spruch so viel
* mal wie eingegeben auf der Wandtafel erscheinen. Die Maximal-Anzahl
* ist 42, für mehr hat's keinen Platz - baue in deiner Funktion dafür einen
* Mechanismus ein.
*
* Versuche ausserdem, wenn du Lust hast, zu programmieren, dass wenn auf
* den Button geklickt wird, die Sprüche versetzt erscheinen. Dafür kannst
* du mit einer Timeout-Funktion arbeiten.
*
* Link: https://diesimpsons.de/die-simpsons/listen/barts-tafelsprueche/
* */

const blackboard = document.querySelector('#blackboard');
const sayingSelect = document.querySelector('#saying');
const countInput = document.querySelector('#count');
const writeBtn = document.querySelector('#write');

const sayings = [
    'Garlic gum is not funny.',
    'I will not sell school property.',
    'I will not make flatuent noises in class.',
    'I will not sleep through my education.',
    'I will not bring sheep to class.',
    'Coffee is not for kids.',
    'I am not a lean mean spitting machine.',
    'I am not the new Dalai Lama.',
    'Grammar is not a time of waste.'
]

function initSelect() {
    sayings.forEach(saying => {
        const option = document.createElement('option');
        option.innerText = saying;
        sayingSelect.appendChild(option);
    })
}
initSelect();

writeBtn.addEventListener('click', function (e) {
    blackboard.innerHTML = '';
    const saying = sayingSelect.value;
    const count = parseInt(countInput.value);
    if (!saying || !count || count > 42) return;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('p');
        p.innerText = saying;
        blackboard.appendChild(p);
        /* optionale ergänzung mit delay
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerText = saying;
            blackboard.appendChild(p);
        }, i * 30)*/
    }
})
