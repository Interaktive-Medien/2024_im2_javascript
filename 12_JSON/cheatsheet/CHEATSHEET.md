# Cheatsheet `JSON`
JSON steht für `JavaScript Object Notation`, es ist ein eigenes Dateiformat mit der Endung `.json`. Dieses standardisierte Dateiformat ist dazu da, Daten zwischen Anwendungen auszutauschen. 

## Syntax
JSON sieht sehr ähnlich aus wie ein JavaScript-Objekt. Es gibt in der Syntax jedoch etwas strengere Regeln. 
```json
{
  "name": "T-Shirt",
  "price": 40,
  "availableSizes": ["xs","s","m","l","xl"],
  "washingDetails": {
    "maxDegrees": 40,
    "tumblingAllowed": true
  }
}
```
Die unterschiede zwischen JSON und einem JavaScript Objekt sind. 
 - Keys müssen mit doppelten Anführungszeichen versehen werden.
 - Strings müssen immer in doppelten Anführungszeichen geschrieben werden.

## Arbeiten mit JSON
JSON wird nie direkt in einem JavaScript File geschrieben, es befindet sich immer in einem separaten File mit der Endung `.json`. Im JavaScript wird eine .json-Datei mit einer fetch-Funktion geladen, in ein JavaScript-Objekt oder Array umgewandelt und dann verarbeitet. 

> Hier eine Kopiervorlage für das Laden einer JSON Datei. Genauer auf das darunterliegende Konzept (fetch/async/await) wird im nächsten Thema [API](../../13_API/cheatsheet/CHEATSHEET.md) genauer eingegangen.

### Direktes laden von JSON
```javascript
try {
    const productResponse = await fetch(file);
    const product = await productResponse.json();
    console.log(product); // returns content of JSON-File in JavaScript readable form
} catch (e) {
    console.error(e)
}
```

### Laden von JSON mittels einer Funktion
```javascript
async function loadProducts() {
    try {
        const productResponse = await fetch(file);
        return await productResponse.json();
    } catch (e) {
        console.error(e);
        return false;
    }
}
const products = await loadProducts(); // products will be either content of JSON or false
```

> ⚠️ **Wichtig:** Um mit async/await (was hier gemacht wird) arbeiten zu können, muss das script.js im HTML etwas anders eingebunden werden. Es muss `type="module"` hinzugefügt werden.

### Quellen
- [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
