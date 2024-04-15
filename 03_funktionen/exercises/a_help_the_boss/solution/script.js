/*
* 03.a - Help The Boss
* Du arbeitest in einer Entwickler-Firma als JavaScript
* Profi. Deine Chefin möchte von dir, dass du vier Funktionen
* für sie vorbereitest, die sie für ein Projekt braucht.
* Folge ihren Anweisungen.
* */


/*
* 1. Schreibe mir eine Funktion, die drei Zahlen als Parameter hat
* und diese miteinander addiert und das Ergebnis zurückgibt.
* Teste die Funktion mit folgenden Wertegruppen und gib das
* Ergebnis in der Konsole aus.
* 1, 4, 10
* 332.2, 55, -40
* */
function add(x,y,z) {
    return x + y + z;
}
console.log(add(1,4,10));
console.log(add(332.2,55,-40));

/*
* 2. Schreibe mir eine Funktion, die den eingegebenen Parameter
* Name in der Konsole ausgibt. Teste das bitte mit folgenden Werten:
* Lena
* Annalena
* */
function sayName(name) {
    console.log(name)
}
sayName('Lena');
sayName('Annalena');

/*
* 3. Schreibe mir eine Funktion, die eine zufällige Zahl zwischen
* 33 und 44 retourniert. Teste das ganze 3 Mal.
* */
function randomNumber() {
    let min = 33;
    let max = 44;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

/*
* 4. Schreibe mir eine Funktion, die mir den als Parameter
* mitgegebenen Text wie folgt bearbeitet:
* - Der Buchstabe 'e', bzw. 'E' soll entfernt werden
* - Das Wort 'Holz' soll das erste Mal, wenn es vorkommt, durch 'Baum ersetzt werden'
* - Alles in Grossbuchstaben
* Das Resultat soll zurückgegeben werden. Teste die Funktion mit folgenden Texten:
* -> Er verbrachte den Nachmittag damit, Holz für das abendliche Lagerfeuer zu sammeln
* -> Der alte Schreiner stand in der Morgendämmerung in seiner Werkstatt und blickte auf das frische Holz, das er kürzlich geholt hatte. Mit sorgfältiger Handarbeit begann er, das Holz in wunderschöne Möbelstücke zu verwandeln. Für ihn war jedes Stück Holz ein ungeschriebenes Buch seiner Erzählung.
* */
function editText(text) {
    text = text.toUpperCase();
    text = text.replaceAll('E', '');
    text = text.replace('Holz', 'Baum')
    return text;
}
console.log(editText('Er verbrachte den Nachmittag damit, Holz für das abendliche Lagerfeuer zu sammeln'));
console.log(editText('Der alte Schreiner stand in der Morgendämmerung in seiner Werkstatt und blickte auf das frische Holz, das er kürzlich geholt hatte. Mit sorgfältiger Handarbeit begann er, das Holz in wunderschöne Möbelstücke zu verwandeln. Für ihn war jedes Stück Holz ein ungeschriebenes Buch seiner Erzählung.'))
