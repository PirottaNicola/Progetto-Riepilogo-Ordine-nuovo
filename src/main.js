import { avaibleProducts, mockProduct1, mockProduct2, } from './data.js';
import { render } from './helper.js';
let selectedProducts = [
    {
        id: 1,
        product: mockProduct1,
        amount: 999.99,
        quantity: 2,
    },
    {
        id: 2,
        product: mockProduct2,
        amount: 499.99,
        quantity: 3,
    },
];
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
const listSelectedItemsHTML = document.getElementById('selected-items-list');
function displaySelectedProducts() {
    // listSelectedItemsHTML?.innerHTML = "";
    selectedProducts.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <justify-content-left>
      <span class="badge badge-light">${item.quantity}</span>
      ${item.product.name}
    </justify-content-left>
    <button type="button" class="close" aria-label="Close" onclick="removeSelectedProduct(${item.id})">
      <span aria-hidden="true">&times;</span>
    </button>
  </li>
    `;
        listSelectedItemsHTML === null || listSelectedItemsHTML === void 0 ? void 0 : listSelectedItemsHTML.appendChild(li);
    });
}
displaySelectedProducts();
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
