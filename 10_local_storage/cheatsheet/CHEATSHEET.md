# Cheatsheet `Local Storage`
Mithilfe des Local Storage können Daten im Browser gespeichert werden. So können Daten gespeichert werden, auch wenn der User die Seite verlässt und wieder aufruft.

## Einfügen
In den Local Storage können nur Inhalte vom Typ `string` gespeichert werden. Daten, die keine Strings sind, müssen deshalb umgewandelt werden.
```javascript
// insert a string
localStorage.setItem('name', 'Lea');
// insert other types
const numbers = [2, 4, 99, 180];
localStorage.setItem('numbers', JSON.stringify(numbers));
```

## Auslesen
Da im Local Storage nur Strings gespeichert werden können, müssen andere Daten beim Auslesen wieder in ihr Ursprungsformat umgewandelt werden. 
```javascript
// load a string
const name = localStorage.getItem('name'); 
console.log(name); // returns 'Lea'
// load other data types
const numbersString = localStorage.getItem('numbers');
const numbers = JSON.parse(numbersString);
console.log(numbers) // returns [2, 4, 99, 180]
```

## Entfernen
```javascript
localStorage.removeItem('name'); // removes name
localStorage.clear(); // removes all stored items
```

## Browser
Im Browser kann man den Local Storage ansehen. In den Browser Entwicklertools unter **Application** > **Local Storage** kann eingesehen werden, was im Local Storage gespeichert ist.. 

## Session Storage
Nebst dem Local Storage gibt es auch einen Session Storage. Dieser speichert Daten jedoch nur so lange, bis der User den Browsertab schliesst. Der Local Storage speichert die Daten unlimitiert lange. Die Funktionalität ist aber genau dieselbe.

### Quellen
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
