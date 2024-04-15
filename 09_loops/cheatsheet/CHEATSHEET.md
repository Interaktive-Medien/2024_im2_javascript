# Cheatsheet `Loops`
Loops, auf deutsch Schleifen, sind ein extrem relevantes Tool um in JavaScript mit Array arbeiten zu können.

## For-Each Schlaufe
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
wg.forEach((member,index) => {
    console.log(`${member} lives here on array index ${index}`);
})
// does a console log for every member of the wg
```

## For-Schlaufe
Die for-Schlaufe ist ein grundlegendes Programmierkonzept, welches in eigentlich allen Programmiersprachen vorkommt. In JavaScript kann die `forEach` Schlaufe genau das, was die `for`-Schlaufe auch kann, deshalb wird sie sehr selten benötigt. Dennoch ist es wichtig, sie zu verstehen.
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
for(let i = 0; i < wg.length; i++) {
    console.log(`${wg[i]} lives here on array index ${i}`);
}
```
For-Loops können auch unabhängig von Array gebraucht werden, um Dinge x-Fach zu machen.
```javascript
for (let i = 0; i < 10; i++) {
    console.log(`Do this the ${i + 1} time`)
}
```
Die Parameter der for-Schlaufe sind folgende
- `1` Start-Index
- `2` Wann aufgehört werden soll
- `3` Was nach jedem Durchlauf passieren soll

## While-Schlaufe
> ⚠️ **Achtung**: Wenn eine While-Schlaufe falsch angewendet wird, kann sie den Browser zum Abstürzen bringen. Deshalb: Vorsichtig sein damit.

Auch eine While-Schlaufe ist ein grundlegendes Programmierkonzept und deshalb wichtig zu kennen. Eine While-Schlaufe führt etwas so lange aus, bis eine Bedingung eintritt, welche die Schlaufe stoppt,
```javascript
let i = 0
while (i < 10) {
    console.log(`Do this the ${i + 1} time`);
    i++;
}
```
Diese While-Schlaufe macht genau dasselbe, wie die for-Schlaufe oben.

### Quellen
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?retiredLocale=de)
- [for Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for?retiredLocale=de)
- [while Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while?retiredLocale=de)
