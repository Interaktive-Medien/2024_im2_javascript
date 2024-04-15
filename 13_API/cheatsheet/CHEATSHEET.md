# Cheatsheet `API`
API steht für `Application Programming Interface`. Mit einer API kann man ähnliches machen wie mit einer JSON-Datei - der grosse Unterschied ist aber, dass man nicht auf eine lokale Datei zugreift, sondern auf eine URL, wo jemand Daten zur Verfügung stellt. 

## Auf eine API zugreifen
In den Beispielen hier wird mit einer API gearbeitet, welche auf den Live SBB Fahrplan zugreift.
```javascript
const url = 'https://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève';
```

### async/await
> ⚠️ **Wichtig:** Um mit async/await arbeiten zu können, muss das script.js im HTML etwas anders eingebunden werden. Es muss `type="module"` hinzugefügt werden.

```javascript
const url = 'https://api.com';
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // returns data from API
} catch (e) {
    console.error(e)
}
```

### async/await in einer Funktion
```javascript
const url = 'https://api.com';
async function loadTimetable() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
const timetable = await loadTimetable();
console.log(timetable); // returns timetable or false
```

### fetch
Diese Methode ist veraltet und wird nicht mehr benötigt. Da ihr diese aber "in der freien Wildbahn" trotzdem noch antreffen könntet, wird sie hier gezeigt.
```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.error(e)
    })
```

### Quellen
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [async/await](https://javascript.info/async-await)
