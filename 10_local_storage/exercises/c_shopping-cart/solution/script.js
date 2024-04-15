/*
* 10.c - Shopping Cart
* Du betreibst einen eigenen Hofladen und führst eine
* Online-Bestell-Plattform ein. Du möchtest, dass für alle
* deine Produkte, die du im Sortiment hast, ein Button im
* Container #optionsCt erscheint. Wenn einer dieser Buttons
* geklickt wird, soll das Produkt im Warenkorb (cart) gespeichert
* werden. Dieser cart soll im LocalStorage gespeichert werden.
*
* Wenn man auf ein Element im Warenkorb klickt, soll dieses
* Entfernt werden (und natürlich im LocalStorage angepasst
* werden).
*
* DOM-Element: In den Warenkorb hinzufügen.
* <button>Produktname</button>
*
* DOM-Element: Anzeige im Warenkorb
* <div>Produktname</div>
* */

const cartCt = document.querySelector('#cart');
const optionsCt = document.querySelector('#options');
const assortment = ['Birne', 'Apfel', 'Zwetschgen', 'Weiden-Honig'];

let cart = localStorage.getItem('cart');
if (!cart) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
} else {
    cart = JSON.parse(cart);
}

function loadCart() {
    cartCt.innerText = '';
    cart.forEach(product => {
        const item = document.createElement('div');
        item.innerText = product;
        item.addEventListener('click', function (e) {
            const index = cart.indexOf(product);
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        })
        cartCt.appendChild(item);
    })
}
loadCart();

function initOptions () {
    assortment.forEach(product => {
        const btn = document.createElement('button');
        btn.innerText = `${product} hinzufügen`;
        btn.addEventListener('click',function (e) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        })
        optionsCt.appendChild(btn)
    })
}
initOptions();
