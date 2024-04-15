const listCt = document.querySelector('#list');
const knownProductsCt = document.querySelector('#known-products');
const addInput = document.querySelector('#add');

// -> initialize list
let list = localStorage.getItem('list');
if (list) {
    list = JSON.parse(list);
} else {
    list = [];
    localStorage.setItem('list', JSON.stringify(list));
}

// -> initialize knownProducts
let knownProducts = localStorage.getItem('known-products');
if (knownProducts) {
    knownProducts = JSON.parse(knownProducts);
} else {
    knownProducts = [];
    localStorage.setItem('known-products', JSON.stringify(knownProducts))
}
