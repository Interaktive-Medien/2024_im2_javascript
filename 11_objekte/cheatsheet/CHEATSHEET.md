# Cheatsheet `Objekte`
Ein Objekt ist ein weiterer Datentyp in JavaScript - vergleichbar mit einem Array. Es lassen sich in einem Objekt jedoch nicht-gleichförmige Daten speichern. 

## Syntax
In einem Objekt lassen sich alle möglichen Datentypen speichern - String, Arrays, Number, Booleans oder weitere Objekte.
```javascript
const product = {
    name: 'T-Shirt',
    price: 40,
    availableSizes: ['xs','s','m','l','xl'],
    washingDetails: {
        maxDegrees: 40,
        tumblingAllowed: true
    }
}
```
Einen "Eintrag" in einem Objekt nennt man `Prop`, kurz für Property. Ein `Prop` besteht jeweils aus einem Key/Value Paar. Der Key wäre beispielsweise **name**, die Value **T-Shirt**.

## Props auslesen
```javascript
// Dot Notation
console.log(product.price); // returns 40
// Bracket Notation
console.log(product['price']) // not recomended, but also possible
// Accessing nested Props
console.log(product.washinDetails.tumblingAllowed); // returns true
```

## Props bearbeiten
```javascript
product.price = 50; // changed price to 50
product.availableSizes.push('xxl'); // adds xxl to sizes
```

## Methoden in Objekten
Ein Objekt kann auch Methoden (ein anderes Wort für Funktionen) besitzen. 
```javascript
const animal = {
    name: 'Henry',
    species: 'Chinchilla',
    saysHello: function () {
        // with the keyword this, props in object can be accessed
        return `Hi, I am ${this.name} the ${this.species}.`
    }
};
console.log(animal.saysHello()); // returns 'Hi, I am Henry the Chinchilla.'
```

## Array mit Objekten
In einem Array können mehrere Objekte gespeichert werden.
```javascript
const zoo = [
    {
        name: 'Henry',
        species: 'Chinchilla',
        age: 3.3
    },
    {
        name: 'Chiara',
        species: 'Greyhound',
        age: 11.0
    },
    {
        name: 'Merlin',
        species: 'Elephant',
        age: 1.1
    },
    {
        name: 'Fiona',
        species: 'Chinchilla',
        age: 0.5
    }
]
```
In so einem Konstrukt lassen sich Array-Methoden wie `find`, `filter` oder `map` sehr gut anwenden.
```javascript
const babyAnimals = zoo.filter(animal => {
    return animal.age < 2;
}); // returns an array with only the animals under 2 years of age
```


### Quellen
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object?retiredLocale=de)
- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?retiredLocale=de)
