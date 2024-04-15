/*
* 07.d - Trees
* Du arbeitest für Greenpeace. Um für den Schutz
* von Wäldern zu sensibilisieren, ist es deine Aufgabe
* auf der Webseite von Greenpeace eine Bildergallerie
* mit Bildern von Bäumen zu erstellen.
*
* Du hast 5 Bilder. Es soll jeweils ein Bild angezeigt werden.
* Es soll einerseits über die Controls (#back, #front) gesteuert
* werden können, aber auch über die Tastatur. Wenn das letzte Bild
* erreicht worden ist, soll die Gallerie wieder vorne beginnen.
* Genau gleich soll das verhalten sein, wenn man #back klickt
* und das erste Bild erreicht hat, dann soll die Gallerie
* wieder von hinten beginnen. Das Bild, dass aktuell im HTML
* in der Gallerie platziert ist kannst du löschen, das soll
* alles dynamisch über JavaScript geladen werden.
* */

const image_count = 5;
const gallery = document.querySelector('#gallery');
const back = document.querySelector('#back');
const front = document.querySelector('#front');

let current_id = 1;
