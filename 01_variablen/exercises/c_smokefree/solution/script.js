/*
* 01.c - Smokefree
* Dein bester Freund Amir hat lange geraucht, hat jetzt aber aufgehört.
* Er benutzt eine App, die zeigt wie viele Sekunden er schon
* rauchfrei ist. Aktuell steht bei ihm dort 5'654'290. Du
* willst nun herausfinden, wie viele Tage, Stunden, Minuten und Sekunden
* das sind.
*
* Schreibe eine Berechnung dazu und gib das Resultat in der Konsole aus,
* */

const seconds_smokefree = 5654290;
const seconds_per_minute = 60;
const seconds_per_hour = seconds_per_minute * 60;
const seconds_per_day = seconds_per_hour * 24;

const days = Math.floor(seconds_smokefree / seconds_per_day)
const remaining_seconds_after_day = seconds_smokefree % seconds_per_day;

const hours = Math.floor(remaining_seconds_after_day / seconds_per_hour);
const remaining_seconds_after_hour = remaining_seconds_after_day % seconds_per_hour;

const minutes = Math.floor(remaining_seconds_after_hour / seconds_per_minute);
const seconds = remaining_seconds_after_hour % seconds_per_minute;

console.log(`Amir ist seit ${days} Tagen, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden rauchfrei 🥳`)
