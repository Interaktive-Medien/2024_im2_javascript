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
x = x * a;
x = x + a;
x = x + '1';
x = double(x);
x = x.toString();
if (a + b >= 200 || typeof x === 'string') {
    x = 'Hallo';
} else {
    x = 'Tschüssli';
}
x = x.length > 5 ? x.toUpperCase() : x.toLowerCase();
x = `${x} ${c}`;
x = x.length;
x = x / (b * a);
x = Math.round(x);
x = add(x);
x = add(x, a);
if (add(x,x) >= double(x)) {
    x = x / 10;
} else {
    x = 3;
}
x = x > Math.PI ? 'Haus Tomate' : 'Butter Haus Minze';
x = x.replace('Haus', 'JavaScript');
x = x + ' ' + c;
x = x.split(' ').length;
x = `Nur noch ${x} Tage JavaScript diese Woche.`;
