import { avaibleProducts } from './data.js';
import { render } from './helper.js';
let selectedProducts = [];
// Funzione per aggiungere un prodotto
function addSelectedProduct(product, quantity) {
    const lineItemId = selectedProducts.length + 1;
    const orderLineItem = {
        id: lineItemId,
        product,
        amount: product.price * quantity,
        quantity,
    };
    selectedProducts.push(orderLineItem);
}
function removeSelectedProduct(lineItemId) {
    selectedProducts = selectedProducts.filter((item) => item.id !== lineItemId);
}
function updateSelectedProductQuantity(lineItemId, quantity) {
    selectedProducts = selectedProducts.map((item) => {
        if (item.id === lineItemId) {
            item.quantity = quantity;
            item.amount = item.product.price * quantity;
        }
        return item;
    });
}
render(avaibleProducts, document.getElementById('avaiableItems')); // the ! is a non-null assertion operator
//* js da matteo
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', function () {
    const prodottiSelezionati = document.querySelectorAll('.form-check-input:checked');
    const prodSelected = [];
    prodottiSelezionati.forEach((prodotto) => {
        const card = prodotto.closest('.card');
        const titolo = card.querySelector('.card-title').innerText;
        const select = card.querySelector('.form-control');
        const quantita = select.value;
        prodSelected.push({
            titolo: titolo,
            quantita: quantita,
        });
    });
    if (prodSelected.length === 0) {
        alert('Nessun prodotto selezionato!');
        return;
    }
    console.log('Elementi selezionati:', prodSelected);
    const newButton = document.createElement('button');
    newButton.id = 'nextButton';
    newButton.textContent = 'Next';
    newButton.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
    document.body.appendChild(newButton);
});
