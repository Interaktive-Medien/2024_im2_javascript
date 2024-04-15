# Cheatsheet `Funktionen`
Funktionen in JavaScript sind dazu da, ein Code-Schnipsel ausführen zu können. 

## Einfache Funktion ohne Parameter
```js
// Deklaration der Funktion
function check () {
    console.log('I am working!')
}
// Aufruf der Funktion
check() // returns "I am working!"
```

## Einfache Funktion mit Parameter
```js
// Deklaration der Funktion
function doubler (x) {
    console.log(x * 2)
}
// Aufruf der Funktion
doubler(332) // returns 664
```

## Einfache Funktion mit Parameter und Fallback
```js
// Deklaration der Funktion
function multiply (x, y = 2) {
    console.log(x * y)
}
// Aufruf der Funktion
multiply(10) // returns 20
multiply(2,5) // returns 10
```

## Funktion mit Parameter und Return
```javascript
// Deklaration der Funktion
function removeP (string) {
    return string.replace('p', '')
}
let message = 'propositionen und prädikate'
// Aufruf der Funktion
let message_manipulated = removeP(message)
console.log(message_manipulated) // returns "roositionen und rädikate"
```

### Quellen
- [Grundlagen: Javascript function – Funktionen](https://www.mediaevent.de/javascript/Javascript-Funktionen-Grundlagen.html)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?retiredLocale=de)
