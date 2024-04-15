/*
* BERECHNUNGSGRUNDLAGE "lineare Interpolation"
* Ich habe eine Range und einen Wert in dieser Range.
* Ich möchte anhand von diesem Wert, den Wert einer anderen Range (mit anderem Start- und Zielwert) erhalten.
*
* Formel -> result = ((value - a) / (b - a)) * ((d - c)) + c
*
* Beispiel Range 1: a = 0 | b = 1000
* Beispiel Range 2: c = 30 | d = 70
* Beispiel Wert: 400
* result = (400 / 1000) * (70 - 30) + 30
* result = 46
* */
