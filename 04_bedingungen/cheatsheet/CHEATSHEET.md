# Cheatsheet `Bedingungen`
Bedingungen sind dazu da zu steuern, wann etwas ausgeführt wird. Das heisst, dass Bedingungen prüfen ob ein Zustand wahr ist und führen dann etwas aus. 

## Bedingungen
Bedingungen können wahr (`true`) oder unwahr (`false`) sein.
```javascript
const x = 1;
const y = 2;
console.log(x === y) // is equal to | returns false
console.log(x !== y) // is NOT equal to | returns true
console.log(x < y) // is smaller than | returns true
console.log(x <= y) // is smaller than or same as | returns true
console.log(x > y) // is bigger than | returns false
console.log(x >= y) // is bigger than or same as | returns false
```

### Bedingungen verknüpfen
```javascript
const x = 1;
const y = 2;
console.log(x >= 1 && y <= 2) // both conditions have to be true for the statement to be true | returns true
console.log(x === 1 || y === 1) // one of the conditions has to be true | returns true
```

## Conditionals / Conditional Statements
### if
```javascript
const x = 10;
if (x > 10) {
    console.log('do etwas wenn x grösser als 10 ist')
}
```
### if / else
```javascript
const x = 10;
if (x > 10) {
    console.log('do etwas wenn x grösser als 10 ist')
} else {
    console.log('mach etwas wenn die bedingung nicht eintritt')
}
```
### if / else if / else
```javascript
const x = 10;
if (x > 10) {
    console.log('do etwas wenn x grösser als 10 ist')
} else if (x === 10) {
    console.log('mach etwas wenn x gleich 10 ist')
} else {
    console.log('mach etwas wenn keine bedingung eintritt')
}
```

### switch | case
```javascript
const x = 10;
switch (x) {
    case 20:
        console.log('mach etwas wenn x 20 ist');
        break;
    case 10:
        console.log('mach etwas wenn x 10 ist');
        break;
    default:
        console.log('mach etwas wenn kein case eintritt');
        break;
}
```

### ternary
```javascript
const x = 10;
// condition ? if condition true : if condition false 
console.log(x > 10 ? 'mach etwas wenn x grösser als 10 ist' : 'mach etwas wenn das nicht so ist')
```

### Quellen
- [Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [If...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [switch/case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
