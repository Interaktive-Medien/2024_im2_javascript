// -> FUNKTIONEN
function double (number) {
    return number * 2;
}
function add (base, plus = 20) {
    return base + plus;
}

// -> KONSTANTEN
const a = 10;
const b = 100;
const c = 'Brot'

// -> STARTWERT
let x = 0;

// -> ABLAUF
x = x * a; // 0 | number
x = x + a; // 10 | number
x = x + '1'; // 101 | string
x = double(x) // 202 | number
x = x.toString(); // 202 | string
if (a + b >= 200 || typeof x === 'string') {
    x = 'Hallo'; // Hallo | string
} else {
    x = 'Tschüssli'
}
x = x.length > 5 ? x.toUpperCase() : x.toLowerCase(); // hallo | string
x = `${x} ${c}`; // hallo Brot | string
x = x.length; // 10 | number
x = x / (b * a); // 0.01 | float
x = Math.round(x) // 0 | int
x = add(x); // 20 | int
x = add(x, a) // 30 | int
if (add(x,x) >= double(x)) {
    x = x / 10; // 3 | number
} else {
    x = 3;
}
x = x > Math.PI ? 'Haus Tomate' : 'Butter Haus Minze'; // Butter Haus Minze | string
x = x.replace('Haus', 'JavaScript') // Butter JavaScript Minze | string
x = x + ' ' + c // Butter JavaScript Minze Brot | string
x = x.split(' ').length // 4 | number
x = `Nur noch ${x} Tage JavaScript diese Woche.` // Nur noch 4 Tage JavaScript diese Woche. | string

// -> LÖSUNG
console.log(x)
