/*
* 04.c - Schaltjahr
* Die kleine Fiona ist am 29. Februar 2024 zur Welt
* gekommen - einem Tag, den es nur in Schaltjahren gibt.
*
* Wir wollen für Fiona zwei kleine Tools bauen, die ihr
* helfen, mit diesem speziellen Geburtstag umzugehen.
* */

/*
* 1. Baue eine Funktion, die eine Jahreszahl als
* Parameter hat und ein Boolean zurückgibt, ob
* es sich um ein Schaltjahr handelt.
* * Quelle Berechnung: https://www.t-online.de/leben/familie/familie-und-beruf/id_76711412/drei-regeln-wie-sie-schaltjahre-schnell-berechnen-koennen.html
* */
function isSchaltjahr(year) {
    const teilbar_durch_vier = year % 4 === 0;
    const teilbar_durch_hundert = year % 100 === 0;
    const teilbar_durch_vierhundert = year % 400 === 0;
    if (teilbar_durch_vier) {
        if (teilbar_durch_hundert) {
            if (teilbar_durch_vierhundert) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}
console.log(isSchaltjahr(2000));
console.log(isSchaltjahr(2100));
console.log(isSchaltjahr(2024));
console.log(isSchaltjahr(3118));


/*
* 2. Baue eine Funktion, welche für Personen wie Fiona, die am
* 29. Februar Geburtstag haben, ausrechnet, wie viele Geburtstage
* sie schon hatten / bzw. in einem bestimmten Jahr gehabt haben werden.
*
* parameter 1: birthdayYear (prüfe, ob es ein Schaltjahr ist, gib sonst
* einen Fehler zurück).
* parameter 2: otherYear (prüfe, ob das Jahr vor dem birthdayYear
* liegt, gib sonst einen Fehler zurück).
* */
function countBirthdays(birthdayYear,otherYear) {
    if (otherYear - birthdayYear < 0) {
        return 'Das futureYear liegt nicht vor dem birthdayYear.'
    }
    if (!isSchaltjahr(birthdayYear)) {
        return `Dein Geburtstag liegt nicht in einem Schaltjahr.`
    } else {
        const birthdayCount = Math.floor((otherYear - birthdayYear) / 4);
        return `Du wirst im Jahr ${otherYear} schon ${birthdayCount} mal Geburtstag gehabt haben.`
    }
}
console.log(countBirthdays(2024, 2100));
console.log(countBirthdays(2021, 2100));
console.log(countBirthdays(2024, 1997));
