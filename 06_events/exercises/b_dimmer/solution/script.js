/*
* 06.b - Dimmer
* Du hast keine Lust mehr auf MMP und gehst mit einer
* Freundin in Ihr Geschäft mit und schnupperst bei Ihr
* als Elektro-Installateurin. Als Tages-Auftrag musst du
* einen Dimmer bauen.
*
* Du hast einen Dimmer (#dimmer), der Werte von 0 - 50 annehmen kann.
* Ausserdem hast du eine Lampenhalterung (#light).
* Bei 0 soll darin keine Glühbirne angezeigt werden.
* Zwischen 1 und 10 soll 1 Lampe angezeigt werden: 💡
* Zwischen 11 und 20 sollen 2 Lampen angezeigt werden: 💡💡
* Zwischen 21 und 30 sollen 3 Lampen angezeigt werden: 💡💡💡
* Zwischen 31 und 40 sollen 4 Lampen angezeigt werden: 💡💡💡💡
* Zwischen 41 und 50 sollen 5 Lampen angezeigt werden: 💡💡💡💡💡
* */

const light = document.querySelector('#light');
const dimmer = document.querySelector('#dimmer');
const bulb = '💡';
dimmer.addEventListener('input', function (e) {
    let value =  parseInt(e.target.value);
    const count = Math.ceil(value / 10);
    light.innerText = bulb.repeat(count);

    /* Alternative Lösung
    if (value === 0) {
        light.innerText = '';
    } else if (value > 0 && value <= 10) {
        light.innerText = bulb.repeat(1);
    } else if (value > 10 && value <= 20) {
        light.innerText = bulb.repeat(2);
    } else if (value > 20 && value <= 30) {
        light.innerText = bulb.repeat(3);
    } else if (value > 30 && value <= 40) {
        light.innerText = bulb.repeat(4);
    } else if (value > 40 && value <= 50) {
        light.innerText = bulb.repeat(5);
    }*/
})
