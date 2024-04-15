# Cheatsheet `Events`
Events sind eines der wichtigsten Programmierkonstrukte in JavaScript. Damit können Seiten interaktiv gemacht werden. 

## Events erstellen
```javascript
const button = document.querySelector('button');
// -> create directly
button.addEventListener('click', function (e) {
    console.log(e);
})
// -> append function
function logData (e) {
    consol.log(e)
}
button.addEventListener('click', logData);
```

## Event Callback
Jeder Event gibt und ein Callback zurück. Der Callback ist das `e`, welches als Parameter der Funktion definiert ist. Dieses Objekt sieht bei jedem EventTyp etwas anders aus.

```javascript
// -> simplified callback `e` of a click event (PointerEvent)
const callback = {
    layerX: 47,
    layerY: 89, // coorinates where click happend
    target: "element", // returns the clicked element
    type: "click" // type of event
}
```

## Arten von Events

### Mouse Events
- `click` ➡️ Klick auf das Element
- `dblclick` ➡️ Doppelklick auf das Element
- `mousemove` ➡️ Maus bewegt sich über dem Element
- `mouseenter` ➡️ Maus fahrt in das Element rein
- `mouseleave` ➡️ Maus verlässt das Element

### Keyboard Events
- `keydown` ➡️ Taste auf Tastatur runtergedrückt
- `keyup` ➡️ Taste auf Tastatur losgelassen
```javascript
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // e.key is a value that only exists on callbacks of keyboard events
        console.log('close element')
    }
})
```

### Form Events
- `input` ➡️ Eingabe in einem Input-Feld
- `submit` ➡️ Kicken eines `submit`-Buttons in einem Formular.
```javascript
const firstname = document.querySelector('#firstname');
firstname.addEventListener('input', function (e) {
    console.log(`new value: ${e.target.value}`)
})
```

### Window / Document Events
Diese Events beziehen sich nicht auf einzelne Elemente im DOM, sondern auch die ganze Webseite.
- `scroll` ➡️ Wenn die Seite im Browser gescrollt wird
- `load` ➡️ Wenn die Seite geladen ist
- `resize` ➡️ Wenn sich die grösse des Browser-Fensters verändert
```javascript
window.addEventListener('scroll', function (e) {
    console.log(window.scrollY)
})
```

## Timeout
Wenn man auf ein Timeout hört, hört man nicht aus einen expliziten Event, sondern führt etwas erst nach einer gewissen Zeit aus. Man hört als auf eine Zeit die abläuft.
```javascript
setTimeout(function() {
    console.log('do stuff after 3000 ms')
}, 3000)
```

## Interval
Ein Interval ist vergleichbar mit einem Timeout, es wird jedoch etwas repetitiv ausgeführt. Ein Interval lässt sich auch wieder beenden.
```javascript
const interval = setInterval(function () {
    console.log('do stuff every 1000 ms')
}, 1000)
// clearInterval(interval); -> end interval live this
```

### Quellen
- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Mouse Events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent?retiredLocale=de)
- [Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent?retiredLocale=de)
- [All Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
- [Timeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [Interval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
