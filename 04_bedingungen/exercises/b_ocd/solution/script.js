/*
* 04.b - OCD
* Deine Mitarbeiterin hat eine leichte Form von OCD und
* hat Angst vor ungeraden Zahlen. Baue ihr eine Funktion,
* die ihr eine Warnung in der Konsole zurückgibt, wenn die
* Zahl ungerade ist. Wichtig: Zahlen mit Kommastellen solle in
* Ganz-Zahlen umgewandelt werden.
*
* Was ist OCD: https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder
* */

function isOdd(number) {
    number = parseInt(number);
    if (number % 2 !== 0) {
        console.log('⚠️ Achtung, die Zahl ist ungerade.', number)
    }
}
isOdd(221);
isOdd(-12);
isOdd(12.22);
