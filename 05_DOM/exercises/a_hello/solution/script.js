/*
* 05.a - Hello
* Du baust deine eigene Webseite. Auf der Startseite
* willst du das Nutzer:innen begrüsst werden, und zwar
* mit Ihrem eigenen Namen. Frage mit einem Prompt den
* Namen der Person ab und schreibe diesen in den Container
* mit der ID "name".
*
* Wenn jemand keinen Namen eingibt, soll anstatt der
* gesamte DOM geleert werden.
* */

const name = prompt('Wie heisst du?');
if (name) {
    const nameCt = document.querySelector('#name');
    nameCt.innerText = name;
} else {
    const firstP = document.querySelector('p:first-of-type');
    const secondP = document.querySelector('p:last-of-type');
    firstP.remove()
    secondP.remove()
}
