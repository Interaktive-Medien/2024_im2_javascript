# Cheatsheet `Arrays`
Ein Array ist ein Datentyp in JavaScript. Er ist dazu da, viel gleichartige Daten gemeinsam (z.B. in einer Variabel) speichern zu können.

## Erstellen eines Arrays
Ein Array sollte, wenn möglich, nur aus Werten des gleichen Types bestehen. Alle Typen sind möglich - ein Array kann auch weitere Arrays beinhalten.
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
const haus = [['Barbie', 'Ken', 'Allan'], ['Superman', 'Spiderman']];
const zahlen = [221, 4, 11889, -3, 0.5];
```

## Auslesen aus einem Array
Die Indexierung in einem Array beginnt bei `0`. Das erste Element in einem Array hat demnach den Index `0`, das zweite den Index `1`, usw.
```javascript
console.log(wg[0]) // returns 'Barbie'
console.log(haus[1]) // returns ['Superman', 'Spiderman']
```

## Anzahl Einträge in einem Array
```javascript
console.log(wg.length) // returns 3
```

## Array manipulieren

### Inhalte hinzufügen
```javascript
wg.push('President Barbie'); // adds an item at the end
wg.unshift('President Barbie') // adds an item at the beginning
wg[3] = 'President Barbie' // not recomended, adds item at the end
```

### Inhalte entfernen
```javascript
wg.pop(); // removes last item
wg.shift(); // removes first item
```

### Inhalte ersetzen
```javascript
wg[0] = 'President Barbie' // replaces first 'Barbie' with 'President Barbie'
```

### Splice - die Super-Methode
Splice kann alle oben genannten Dinge gleichzeitig und ist deshalb sehr mächtig. Folgende Parameter hat die Funktion. 

**array.splice(start, deleteCount, itemToAdd1, ...)**
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
wg.splice(0,2); // removes 'Barbie' and 'Ken'
wg.splice(1,1,'President Barbie'); // removes 'Ken' and adds 'President Barbie' at that place
wg.splice(2,0,'Spiderman', 'Superman'); // adds 'Spiderman' and 'Superman' between 'Ken' and 'Allan'
```

### Arrays zusammenfügen
```javascript
const wg_bern = ['Barbie', 'Ken', 'Allan'];
const wg_chur = ['Superman', 'Spiderman'];
const wgs = wg_bern.concat(wg_chur) // adds wg_chur to wg_bern;
const wgs = [...wg_bern, ...wg_chur]; // does the same thing
```

## Weitere Array Methoden
### sort
Wird gebraucht, um Arrays zu sortieren.
```javascript
const numbers = [4, 5 -10, 100, 31];
numbers.sort((a, b) => a - b) // sorts numbers from lowest to highest
numbers.sort((a, b) => b - a) // sorts numbers from highest to lowest
const food = ['Toast','Bread','Banana','Ananas'];
food.sort() // sorts strings alphabetically
```

### map
Wird gebraucht, um für jeden Array-Eintrag etwas zu machen.
```javascript
const numbers = [14, 33, 107];
const numbersPlusTen = numbers.map(number => {
    return number + 10
}) // adds 10 to every number
```

### find
Wird gebraucht, um in einem Array ein Element zu finden.
```javascript
const wg_bern = ['Barbie', 'Ken', 'Allan'];
const wgMemberFiveLetters = wg_bern.find(member => {
    return member.length === 5
}); 
// returns the first wg member found with 5 letters. 
// if no match, undefined is returned
```

### filter
Wird gebraucht, um einen Array zu filtern.
```javascript
const numbers = [10, 31, -2, 11, -109];
const positiveNumbers = numbers.filter(number => {
    return number >= 0;
})
```

## Quellen
- [Everything about Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?retiredLocale=de)
- [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?retiredLocale=de)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=de)
