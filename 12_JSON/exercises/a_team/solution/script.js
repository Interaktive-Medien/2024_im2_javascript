/*
* 12.a - Team
* Du arbeitest in einem kleinen Unternehmen. Für die Webseite
* will deine Chefin nun eine Team-Übersicht. Sie hat dir für
* alle Personen ein separates JSON mit den Angaben zu den
* Personen zur Verfügung gestellt.
*
* Erstelle zuerst für alle Teammitglieder einen Button im
* container buttonsCt. Bei einem Klick auf diesen Button, sollen die
* Personendaten geladen werden und das HTML befüllt werden. Du hast
* für jede Information schon ein DOM-Element zum Befüllen.
*
* Erstelle für's dynamische Laden des JSON's eine Funktion,
* welche dir die Personen-Angaben aus dem JSON zurückgibt. Lasse
* dich dafür vom Code Along inspirieren.
*
* Wichtig: Der Container personCt hat die Klasse hidden, damit
* die Box initial nicht angezeigt wird. Vergiss nicht, beim
* anzeigen einer Person diese Klasse zu entfernen. Sonst wird die
* Box nie sichtbar werden.
*
* Wenn du Lust hast, kannst du in dieser Übung noch ergänzen,
* dass der Button einer aktuell angezeigten Person einen
* active-State hat, sprich anders aussieht.
* */

const buttonsCt = document.querySelector('#buttons');
const personCt = document.querySelector('#person');
const nameCt = personCt.querySelector('#name');
const jobCt = personCt.querySelector('#job');
const linkedinCt = personCt.querySelector('#linkedin');
const instagramCt = personCt.querySelector('#instagram');

const team = ['Alena Hugentobler', 'Anna Meier', 'Fiona Karic', 'Kevin Stierli'];
team.forEach(person => {
    const button = document.createElement('button');
    button.innerText = person;
    button.addEventListener('click', async () => {
        const data = await loadPerson(person);
        if (data) {
            nameCt.innerText = data.name;
            jobCt.innerText = data.job;
            linkedinCt.href = data.linkedin;
            instagramCt.href = data.instagram;
        }
        personCt.classList.remove('hidden');
    });
    buttonsCt.appendChild(button);
})

async function loadPerson (name) {
    name = name.toLowerCase();
    name = name.replace(' ', '-');
    const file = `../data/${name}.json`;
    try {
        const personResponse = await fetch(file);
        return await personResponse.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
