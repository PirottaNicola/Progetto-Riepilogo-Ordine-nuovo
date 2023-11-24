import { avaibleProducts } from "./data.js";
import { render } from "./helper.js";
import { mockProduct1, mockProduct2 } from "./data.js"; // to remove
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
const listSelectedItemsHTML = document.getElementById("selected-items-list");
function displaySelectedProducts() {
    // listSelectedItemsHTML?.innerHTML = "";
    selectedProducts.forEach((item) => {
        const li = document.createElement("li");
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
render(avaibleProducts, document.getElementById("avaiableItems")); // the ! is a non-null assertion operator

const cancelButton = document.getElementById('cancelButton');
const selectedItemsList = document.getElementById('selectedItemsList');

cancelButton.addEventListener('click', function() {
    const selectedItems = selectedItemsList.querySelectorAll('.list-group-item');
  
    if (selectedItems.length > 0) {
        
        const lastSelectedItem = selectedItems[selectedItems.length - 1];
        lastSelectedItem.remove();
    } 
});


