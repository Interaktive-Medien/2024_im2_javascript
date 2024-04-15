/*
* 04.d - Bank
* Du besitzt eine Bank (also eine Geld-Bank, keine Sitz-Bank).
* Als einzige Währungen arbeitest du mit dem Euro, dem Schweizer
* Franken und der schwedischen Krone. Da die drei Währungen
* unterschiedlich formatiert werden müssen, brauchst du eine
* Funktion, die dir das erledigt. Und zwar egal, welcher Wert
* eingegeben wird.
*
* Hier die Formatierungs-Regeln pro Währung.
* (CHF) Schweizer Franken: CHF xx.xx -> Beträge auf zwei Stellen und .05 gerundet
* (EUR) Euro: xx.xx EUR -> Beträge auf 2 Stellen gerundet
* (SEK) Schwedische Krone: xx SEK -> Ohne Nachkomma-Stellen
* */

function formatMoney(amount,currency) {
    let vorKomma = Math.floor(amount);
    let nachKomma = amount - vorKomma;
    switch (currency) {
        case 'CHF':
            nachKomma = Math.round(nachKomma * 20) / 20;
            nachKomma = nachKomma * 100;
            if (nachKomma <= 9) {
                nachKomma = `${nachKomma}0`;
            }
            return `${currency} ${vorKomma}.${nachKomma}`;
        case 'EUR':
            nachKomma = nachKomma.toFixed(2);
            nachKomma = nachKomma * 100;
            if (nachKomma <= 9) {
                nachKomma = `${nachKomma}0`;
            }
            return `${vorKomma}.${nachKomma} ${currency}`;
        case 'SEK':
            return `${vorKomma} ${currency}`;
        default:
            return 'Diese Währung gibt es in dieser Bank nicht.'
    }
}

console.log(formatMoney(1213412,'CHF'));
console.log(formatMoney(1212.2693,'CHF'));
console.log(formatMoney(12.2,'CHF'));

console.log(formatMoney(1213412,'EUR'));
console.log(formatMoney(1212.2693,'EUR'));
console.log(formatMoney(12.2,'EUR'));

console.log(formatMoney(1213412,'SEK'));
console.log(formatMoney(1212.2693,'SEK'));
console.log(formatMoney(12.2,'SEK'));
