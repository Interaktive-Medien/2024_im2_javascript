# Cheatsheet `DOM`
> Der DOM repräsentiert die HTML-Struktur einer Webseite. Wenn man auf den DOM zugreifen kann, kann man mit JavaScript das Aussehen einer Webseite steuern. 

## DOM-Elemente laden
```html
<h1>Hallo</h1>
<p class="subtitle">Ich bin ein Text</p>
<mark id="note">Ich bin eine Notiz</mark>
<input id="name" type="text">
```
### querySelector
```javascript
// loads the first item with the tag h1
const title = document.querySelector('h1');
// loads the first item with the class subtitle
const subtitle = document.querySelector('.subtitle');
// loads the first item with the id note
const note = document.querySelector('#note');
```

### querySelectorAll
```javascript
// loads all items with the h1 tag
const titles = document.querySelectorAll('h1');
// loads all items with the class subtitle
const subtitles = document.querySelectorAll('.subtitle');
```

### querySelector & querySelectorAll in kleinerem Scope
Bis jetzt wurden DOM-Elemente immer im `document` gesucht und geladen. DOM-Elemente können jedoch auch aus schon bestehenden DOM-Elementen geladen werden.

```html
<p>Hallo Welt</p>
<div id="container">
    <p>Hallo</p>
    <p>Welt</p>
</div>
```

```javascript
const container = document.querySelector('#container');
const text = container.querySelectorAll('p');
// alle p's im container werden geladen, alle anderen nicht
```

## Inhalte aus DOM-Elementen auslesen

### Titel auslesen
```javascript
const title = document.querySelector('h1');
console.log(title.innerText); // returns 'Hallo'
```

### Wert eines Input-Felds auslesen
```javascript
const inputName = document.querySelector('#name');
console.log(inputName.value); // returns the value that the input field has
```

## DOM-Elemente verändern

### Titel ändern
```javascript
const title = document.querySelector('h1');
title.innerText = 'Neuer Titel'; 
// alternatively title.innerHTML could be used
```

### Style verändern
```javascript
const title = document.querySelector('h1');
title.style.color = 'red'; 
title.style.transform = 'translateY(100px)'; 
title.style.backgroundColor = 'orange';
```

### Klassen verändern
```javascript
const subtitle = document.querySelector('.subtitle');
subtitle.classList.add('subtitle-large'); // adds a class
subtitle.classList.remove('subtitle'); // removes a class
subtitle.classList.toggle('active'); // adds class if not extstent, removes it if it exists
```

### Attribute verändern
```javascript
const inputName = document.querySelector('#name');
inputName.setAttribute('type', 'number'); // change the type of the form fiels
inputName.setAttribute('required', 'true'); // make input field required
```

## Neue DOM-Elemente erstellen & auf der Webseite anzeigen

### Elemente erstellen (offizieller Weg)
```javascript
const image = document.createElement('img');
image.setAttribute('src', 'image.png');
image.setAttribute('alt', 'Bild eines Brotes')
```

### Elemente erstellen (einfacher Weg)
```javascript
const image = `<img src='image.png' alt='Bild eines Brotes' />`;
```

### Elemente auf die Seite laden (offizieller Weg)
```javascript
// load a container, where you want to append the item to
const body = document.querySelector('body');
// load created item into container
body.appendChild(image)
```

### Elemente auf die Seite laden (einfacher Weg)
```javascript
// load container
const body = document.querySelector('body');
// append created element
body += image;
```

### Quellen
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Query Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector?retiredLocale=de)
- [Query Selector All](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [Append Child](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
