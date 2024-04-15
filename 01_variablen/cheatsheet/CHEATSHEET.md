# Cheatsheet `Variablen`

## Was sind Variablen

Variablen sind Container, in denen verschiedene Arten von Inhalten gespeichert werden können.

## Regeln Variablen-Namen

> Hier definierte optionale Regeln sind nicht verbindlich oder technisch notwendig. Sie helfen jedoch enorm in der lesbarkeit des Codes und tragen zu einer besseren Code-Qualität bei. 

- Keine Abstände
- Kleingeschrieben _(optional)_
- Ohne Sonderzeichen _(optional)_
- Immer in derselben Sprache, präferiert in Englisch _(optional)_
- Konsequent immer Snake-Case (`my_variable`) oder Camel-Case (`myVariable`) _(optional)_

## Arten von Variablen

```javascript
let age = 23 // veränderbare Variable
age = 24
```
```javascript
const name = 'Wolfgang' // nicht veränderbare Variable
name = 'Anja' // ergibt einen Fehler, da nicht veränderbar
```

### Quellen
- [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
