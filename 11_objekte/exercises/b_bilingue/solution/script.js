/*
* 11.b - Bilingue
* Die Schweiz ist ja, wie wir alle wissen, viersprachig
* (vergesst Rätoromanisch nicht!). Es gibt sogar Städte,
* in welchen es mehrere Amtssprachen gibt (z.B. Biel).
*
* Und genau für diese Stadt, Biel, arbeitest du in dieser
* Übung. Die Verwaltung möchte, dass User:innen der Gemeinde,
* Webseite auf der Sprache begrüsst werden, welche Sie sprechen.
*
* Lese dafür die eingestellte Browser-Sprache aus und gib die
* Begrüssung in der entsprechenden Sprache aus. Verwende als
* Fallback Französisch. Stelle ausserdem einen Sprach-Wechsler
* zur Verfügung.
*
* Baue das ganze so dynamisch wie möglich auf :) Wenn eine neue
* Sprache hinzugefügt wird im Inhalt, wäre es toll wenn alles
* trotzdem noch funktioniert.
* */

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const main = document.querySelector('main');

const content = {
    de: {
        name: 'Deutsch',
        title: 'Willkommen in Biel',
        description: 'Schön hast du den Weg in unsere wunderschöne Stadt gefunden'
    },
    fr: {
        name: 'Français',
        title: 'Bienvenue à Bienne',
        description: 'Nous sommes heureux que vous ayez trouvé le chemin de notre magnifique ville'
    }
};
const availableLanguages = Object.keys(content);

let browserLanguage = navigator.language.slice(0,2);
if (!availableLanguages.includes(browserLanguage)) {
    browserLanguage = 'fr';
}

function loadContent (language) {
    title.innerText = content[language].title;
    description.innerText = content[language].description;
}
loadContent(browserLanguage);

const select = document.createElement('select');
availableLanguages.forEach(language => {
    const option = document.createElement('option');
    option.innerText = content[language].name;
    option.value = language;
    if (language === browserLanguage) {
        option.selected = true;
    }
    select.appendChild(option);
})
select.addEventListener('input', (e) => {
    loadContent(e.target.value);
})
main.appendChild(select);
