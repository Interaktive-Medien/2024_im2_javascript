/*
* 08.a - Head of Household
* Du wohnst in einer grossen WG (array wg). Da ihr so viele seid,
* braucht es jede Woche eine Person, die Hauptverantwortlich ist.
* Das lost ihr jeweils aus. Folgende Regeln gelten:
* - Es darf niemand, der nicht mehr in der WG ist,
*   wochenverantwortlich sein (array not_in_wg_anymore)
* - Es darf niemand, der in den letzten 3 Wochen schon
*   wochenverantwortlich war nochmal sein (array history_bosses)
*
* Erstelle eine Funktion, welche dir zufällig eine:n
* Wochenverantwortliche:n rausspuckt und im DOM ausgibt (#boss),
* wenn auf den entsprechenden Button geklickt wird (#shuffle).
* Wichtig: Du darfst den Ursprungsarray wg nicht verändern.
* */

const shuffle = document.querySelector('#shuffle');
const boss = document.querySelector('#boss');

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const wg = ['Anna','Florian','Marija','Joe','Antonia','Cyrill','Pia','Nina','Milica','Etan'];
const not_in_wg_anymore = ['Joe','Anna'];
const history_bosses = ['Anna','Pia','Joe','Antonia','Cyrill','Florian','Anna'];

function loadBoss() {
    const not_allowed = [
        ...not_in_wg_anymore,
        history_bosses[history_bosses.length - 3],
        history_bosses[history_bosses.length - 2],
        history_bosses[history_bosses.length - 1],
    ]
    const allowed_people = wg.filter(member => {
        return !not_allowed.includes(member);
    });
    boss.textContent = allowed_people[randomNumber(0, allowed_people.length - 1)];
}
shuffle.addEventListener('click', loadBoss)
