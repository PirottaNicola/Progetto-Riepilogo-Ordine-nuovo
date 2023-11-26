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
export function addSelectedProduct(product, quantity) {
    // se il prodotto è già stato aggiunto all'ordine, aggiorna la quantità
    const existingProduct = selectedProducts.find((item) => item.product.code === product.code);
    if (existingProduct) {
        updateSelectedProductQuantity(existingProduct.id, quantity);
        return;
    }
    const lineItemId = selectedProducts.length + 1;
    const orderLineItem = {
        id: lineItemId,
        product,
        amount: product.price * quantity,
        quantity,
    };
    selectedProducts.push(orderLineItem);
    displaySelectedProducts();
}
function removeSelectedProduct(lineItemId) {
    const itemToRemove = selectedProducts.find((item) => item.id === lineItemId);
    selectedProducts = selectedProducts.filter((item) => item.id !== lineItemId);
    const checkbox = document.getElementById(`defaultCheckProduct${itemToRemove === null || itemToRemove === void 0 ? void 0 : itemToRemove.product.code}`);
    checkbox.checked = false;
    displaySelectedProducts();
}
function checkSelectedItems() {
    for (let index = 0; index < avaibleProducts.length; index++) {
        const checkbox = document.getElementById(`defaultCheckProduct${avaibleProducts[index].code}`);
        const isInSelected = selectedProducts.find((item) => item.product == avaibleProducts[index])
            ? true
            : false;
        checkbox.checked = isInSelected;
    }
}
function updateSelectedProductQuantity(lineItemId, quantity) {
    selectedProducts = selectedProducts.map((item) => {
        if (item.id === lineItemId) {
            item.quantity = quantity;
            item.amount = item.product.price * quantity;
        }
        return item;
    });
    displaySelectedProducts();
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
    class="list-group-item d-flex justify-content-between align-items-center w-auto my-2"
  >
    <justify-content-left>
      <span class="badge badge-light">${item.quantity} x </span>
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
function addEventListenerToCheckbox() {
    for (let index = 0; index < avaibleProducts.length; index++) {
        const checkbox = document.getElementById(`defaultCheckProduct${avaibleProducts[index].code}`);
        const number = document.getElementById(`quantityProduct${avaibleProducts[index].code}`);
        checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener("click", () => {
            handlerCheck(avaibleProducts[index], checkbox.checked, number === null || number === void 0 ? void 0 : number.value);
        });
    }
}
function handlerCheck(product, isChecked, quantity) {
    if (isChecked) {
        // Checkbox is checked, add the product to the selectedProducts array
        addSelectedProduct(product, quantity);
    }
    else {
        // Checkbox is unchecked, remove the product from the selectedProducts array
        const orderLineItemToRemove = selectedProducts.find((item) => item.product.code === product.code);
        if (orderLineItemToRemove)
            removeSelectedProduct(orderLineItemToRemove === null || orderLineItemToRemove === void 0 ? void 0 : orderLineItemToRemove.id);
    }
}
displaySelectedProducts();
render(avaibleProducts, document.getElementById("avaiableItems")); // the ! is a non-null assertion operator
addEventListenerToCheckbox();
checkSelectedItems();
//* js da matteo
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function () {
    diFilippo(selectedProducts);
});
