/*
* 12.b - Dog
* Kannst du dich noch an Übung 07d erinnern? Wenn schon, dann
* hast du jetzt Glück 🥳 Ziel dieser Übung ist nämlich, den Code
* von Übung 07d als Grundlage zu nehmen und anzupassen.
*
* Wir setzen wie auch dort schon ein Bildergallerie um. Dieses
* mal sind aber einerseits die Bilder herziger, aber auch der
* Aufbau etwas anders. Und zwar findest du im Ordner data die
* Datei gallery.json. Dort ist die Struktur deiner Gallerie
* abgelegt, jeweils auch zusätzlich mit einer Bildbeschreibung.
*
* Nimm dir den Code auf Übung 07d als Vorlage und passe diesen
* so weit an, dass die Gallerie wieder funktioniert. Lade dafür
* das JSON mit einer asynchronen Funktion.
*
* Wichtig: Du musst an einigen Orten etwas anpassen. Falls es
* dir einfacher fällt, kannst du den Code natürlich auch komplett
* neu Schreiben.
* */

const galleryCt = document.querySelector('#gallery');
const backBtn = document.querySelector('#back');
const frontBtn = document.querySelector('#front');

async function loadGallery() {
    const file = '../data/gallery.json';
    try {
        const galleryResponse = await fetch(file);
        return galleryResponse.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}
const gallery = await loadGallery();
let current_id = 0;
const image_count = gallery.length;

function loadImage (id) {
    if (id > image_count || id < 0) return;
    const galleryItem = gallery[id];
    galleryCt.innerHTML = '';
    const image = document.createElement('img');
    image.src = `../data/${galleryItem.src}`;
    image.setAttribute('alt', 'Bild Baum');
    galleryCt.appendChild(image);
    const caption = document.createElement('p');
    caption.innerText = galleryItem.caption;
    galleryCt.appendChild(caption);
}
loadImage(current_id);

function navigate (direction) {
    if (direction === 'front') {
        if (current_id < image_count - 1) {
            current_id++;
        } else {
            current_id = 0;
        }
        loadImage(current_id)
    }
    if (direction === 'back') {
        if (current_id > 0) {
            current_id--;
        } else {
            current_id = image_count - 1;
        }
        loadImage(current_id);
    }
}

frontBtn.addEventListener('click', (e) => {
    navigate('front');
})
backBtn.addEventListener('click', (e) => {
    navigate('back');
})
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        navigate('front');
    }
    if (e.key === 'ArrowLeft') {
        navigate('back');
    }
})
