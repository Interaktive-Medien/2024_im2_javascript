/*
* 01.a - Heat
* Du liest eine amerikanische Zeitung und siehst dort, dass
* es letzten Sommer in LA 104 Fahrenheit warm war. Damit kannst
* du nichts anfangen. Schreibe eine Berechnung, die dir das umrechnet.
* Schreibe auch noch eine Berechnung, die dir das umgekehrte macht, also die
* 33 Grad die es hier in St. Gallen war, in Fahrenheit umrechnet.
*
* Quelle: https://www.fahrenheit-umrechnen.de/
* */

const fahrenheit_in_la = 104;
const degrees_in_la = (fahrenheit_in_la - 32) * 5/9;
console.log(`In LA war es ${degrees_in_la} °C warm.`);

const degrees_in_stgallen = 33;
const fahrenheit_in_stgallen = (degrees_in_stgallen * 1.8) + 32;
console.log(`In St. Gallen war es ${fahrenheit_in_stgallen} Fahrenheit warm.`);
