// -> constants
const lebenserwartung_m = 81.0; // in jahren
const lebenserwartung_w = 85.1; // in jahren
const schokolade_pro_jahr = 11; // in kg

// -> clean up
const container = document.querySelector('#container');

const elementToRemove = container.querySelector('p');
elementToRemove.remove();

// -> data
const name = prompt('Was ist dein Name?');
const gender = prompt('Mit welchem Geschlecht identifizierst du dich? (w/m/d)');
const age = prompt('Wie alt bist du?');
let years_to_live;
switch (gender) {
    case 'w':
        years_to_live = lebenserwartung_w - age;
        break;
    case 'm':
        years_to_live = lebenserwartung_m - age;
        break;
    default:
        years_to_live = (lebenserwartung_w + lebenserwartung_m) / 2 - age;
        break;
}
let chocolate_until_end_of_live = years_to_live * schokolade_pro_jahr; // in kg

// -> dom
const list = document.createElement('ul');
const nameItem = document.createElement('li');
nameItem.innerText = `Name: ${name}`;
list.appendChild(nameItem);
const ageItem = document.createElement('li');
ageItem.innerText = `Alter: ${age}`;
ageItem.style.color = 'red';
list.appendChild(ageItem)
const yearsItem = document.createElement('li');
yearsItem.innerText = `Jahre zu leben: ${Math.round(years_to_live)} Jahre`;
list.appendChild(yearsItem);
const chocolateItem = document.createElement('li');
chocolateItem.innerText = `Schokolade bis ans Lebensende: ${Math.round(chocolate_until_end_of_live)}kg`;
list.appendChild(chocolateItem)
container.appendChild(list);
