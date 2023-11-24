import { avaibleProducts } from "./data.js";
import { diFilippo, render } from "./helper.js";
let selectedProducts = [
    {
        id: 1,
        product: avaibleProducts[0],
        amount: 999.99,
        quantity: 2,
    },
    {
        id: 2,
        product: avaibleProducts[1],
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
    displaySelectedProducts();
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
    listSelectedItemsHTML.innerHTML = ""; // clear the list before adding new item
    selectedProducts.length >= 1
        ? selectedProducts.forEach((item) => {
            var _a, _b;
            const li = document.createElement("li");
            // li.addEventListener("click", () => removeSelectedProduct(item.id));
            li.innerHTML = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <justify-content-left>
      <span class="badge badge-light">${item.quantity}</span>
      ${item.product.name}
    </justify-content-left>
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true" id="btn-remove-selected-item">&times;</span>
    </button>
  </li>
    `;
            listSelectedItemsHTML === null || listSelectedItemsHTML === void 0 ? void 0 : listSelectedItemsHTML.appendChild(li);
            (_b = (_a = li.lastElementChild) === null || _a === void 0 ? void 0 : _a.lastElementChild) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => removeSelectedProduct(item.id));
        })
        : (listSelectedItemsHTML.innerHTML = `
  <li
  class="list-group-item d-flex justify-content-between align-items-center"
  >
    <justify-content-center>
      No products selected
    </justify-content-center>
  </li>
  `);
}
displaySelectedProducts();
render(avaibleProducts, document.getElementById("avaiableItems")); // the ! is a non-null assertion operator
//* js da matteo
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function () {
    diFilippo(selectedProducts);
});
