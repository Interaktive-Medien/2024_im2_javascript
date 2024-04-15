/*
* 05.b - Anonym
* Du arbeitest bei einer Online-Zeitung. Eure publizistischen
* Leitlinien sehen vor, dass in Berichten in denen es um
* mutmassliche Straftäter:innen geht, alle Namen anonymisiert
* werden müssen. Leider halten sich nicht alle Kolleg:innen
* an diese Regeln. In einem Artikel auf der Webseite kommt
* der Name eines Verbrechers, Horst Freibier, einige Male vor.
* Du hast nun die Aufgabe, überall wo der Name im Lead und im Text
* vorkommt, diesen zu schwärzen (im CSS auf Zeilen 34 - 36 ist
* schon etwas dafür vorbereitet).
*
* Quelle Text: Bing CoPilot
* */

const name = 'Horst Freibier'
const leadCt = document.querySelector('#lead');
const contentCt = document.querySelector('#content');

let lead = leadCt.innerHTML;
lead = lead.replaceAll(name, `<span class="black">${name}</span>`);
leadCt.innerHTML = lead;

let content = contentCt.innerHTML;
content = content.replaceAll(name, `<span class="black">${name}</span>`);
contentCt.innerHTML = content;
