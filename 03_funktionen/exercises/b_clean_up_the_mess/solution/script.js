/*
* 03.b - Clean up the mess!
* Du arbeitest immer noch in derselben Firma wie in
* Übung a. Einem Mitarbeiter wurde gekündigt, an seinem letzten
* Arbeitstag hat er die Inhalte von Funktionen gelöscht. Du weisst aber noch,
* was die Resultate der Funktionen sein müssen. Bitte
* räume die Funktionen auf und schreibe sie neu.
* */

function doSomeStuff(x) {
    return x * 2;
}
console.log(doSomeStuff(52)); // Konsole: 104
console.log(doSomeStuff(11)); // Konsole: 22
console.log(doSomeStuff(-10)); // Konsole: -20

function doOtherStuff(x,y) {
    console.log(Math.floor(x / y));
}
doOtherStuff(22,3); // Konsole: 7
doOtherStuff(100,50); // Konsole: 2
doOtherStuff(328,22); // Konsole: 14

function doEvenMoreStuff(x) {
    return x.trim().toLowerCase().replaceAll(' ', '');
}
console.log(doEvenMoreStuff('   Hoi ')); // Konsole: 'hoi'
console.log(doEvenMoreStuff('Keine Ahnung')); // Konsole: 'keineahnung'
console.log(doEvenMoreStuff(' 2 2 2 2 x')); // Konsole: '2222x'
