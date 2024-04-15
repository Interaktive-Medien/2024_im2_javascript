/*
* 10.b - Newsletter
* Du betreibst einen Web-Shop. Eines deiner Ziele ist es,
* dass sich Webseiten-Nutzer:innen für deinen Newsletter
* anmelden. Deshalb erstellst du ein Pop-Up, mit welchem
* sich Personen für deinen Newsletter anmelden können.
*
* Da solche Pop-Ups oft störend sind, möchtest du dass es
* nur neuen Nutzer:innen deiner Seite (nach 3 Sekunden)
* angezeigt wird. Sobald jemand schon mal auf deiner Seite war,
* soll das Pop-Up nicht mehr angezeigt werden. Arbeite dafür
* mit dem LocalStorage.
*
* Mit dem Schliessen-Button soll das Pop-Up ausserdem
* geschlossen werden können.
*
* Wichtig: aktuell ist das Newsletter-Anmelde-Pop-Up mit der
* Klasse 'hidden' versehen, und wird deshalb nicht angezeigt.
* Nutze für die Umsetzung diese Klasse zum ein- und ausblenden.
* */

const newsletterCt = document.querySelector('#newsletter');
const closeBtn = newsletterCt.querySelector('#close');

const nlBoxAlreadyShown = localStorage.getItem('nl_box_already_shown');
if (!nlBoxAlreadyShown) {
    setTimeout(() => {
        newsletterCt.classList.remove('hidden');
        localStorage.setItem('nl_box_already_shown', JSON.stringify(true));
    }, 3000)
}

closeBtn.addEventListener('click', function (e) {
    newsletterCt.classList.add('hidden');
});
