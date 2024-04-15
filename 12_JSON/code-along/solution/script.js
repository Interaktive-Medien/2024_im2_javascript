const file = '../data/kantone.json';
async function loadCantons () {
    try {
        const cantonsResponse = await fetch(file);
        return await cantonsResponse.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

const cantons = await loadCantons();

const selects = document.querySelectorAll('#selects>select');
const select1 = selects[0];
const select2 = selects[1];
const comparisonCt = document.querySelector('#comparison');
const compareBtn = document.querySelector('#compare');
const againBtn = document.querySelector('#again');

function createSelects() {
    [...selects].forEach(select => {
        const default_option = document.createElement('option');
        default_option.innerText = '---Kanton wähle---';
        default_option.value = '';
        default_option.selected = true;
        select.appendChild(default_option);
        cantons.forEach(canton => {
            const option = document.createElement('option');
            option.innerText = canton.name;
            option.value = canton.name;
            select.appendChild(option);
        });
    })
}
createSelects();

function createComparison() {
    comparisonCt.innerHTML = '';
    const cantonsToCompare = cantons.filter(canton => {
        return canton.name === select1.value || canton.name === select2.value;
    })
    cantonsToCompare.forEach(canton => {
        const otherCanton = cantonsToCompare.find(otherCanton => otherCanton.name !== canton.name);
        const item = document.createElement('div');
        const name = document.createElement('h2');
        name.innerText = canton.name;
        item.appendChild(name);
        const capital = document.createElement('p');
        capital.innerHTML = `Hauptort: <span>${canton.hauptort}</span>`;
        item.appendChild(capital);
        const surface = document.createElement('p');
        surface.innerHTML = `Fläche: <span data-win="${canton.flaeche > otherCanton.flaeche}">${canton.flaeche.toLocaleString('de-CH', {})} km2</span>`;
        item.appendChild(surface);
        const population = document.createElement('p');
        population.innerHTML = `Einwohner:innen: <span data-win="${canton.einwohner > otherCanton.einwohner}">${canton.einwohner.toLocaleString('de-CH', {})} Personen</span>`;
        item.appendChild(population);
        comparisonCt.appendChild(item)
    })
}


compareBtn.addEventListener('click', function (e) {
    if (!select1.value || !select2.value) return;
    if (select1.value === select2.value) return;
    createComparison();
});
againBtn.addEventListener('click', function (e) {
    [...selects].forEach(select => {
        select.value = '';
    })
    comparisonCt.innerHTML = '';
})
