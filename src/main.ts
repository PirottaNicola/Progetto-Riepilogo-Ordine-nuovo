import { OrderLineItems, Product, avaibleProducts, costumers } from "./data.js";
import { render } from "./helper.js";
import { mockOrderLineItems, mockProduct1, mockProduct2 } from "./data.js"; // to remove

let selectedProducts: OrderLineItems[] = [
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
function addSelectedProduct(product: Product, quantity: number): void {
  const lineItemId = selectedProducts.length + 1;
  const orderLineItem: OrderLineItems = {
    id: lineItemId,
    product,
    amount: product.price * quantity,
    quantity,
  };
  selectedProducts.push(orderLineItem);
}

function removeSelectedProduct(lineItemId: number): void {
  selectedProducts = selectedProducts.filter((item) => item.id !== lineItemId);
  displaySelectedProducts();
}

function updateSelectedProductQuantity(
  lineItemId: number,
  quantity: number
): void {
  selectedProducts = selectedProducts.map((item) => {
    if (item.id === lineItemId) {
      item.quantity = quantity;
      item.amount = item.product.price * quantity;
    }
    return item;
  });
}

const listSelectedItemsHTML = document.getElementById("selected-items-list");

function displaySelectedProducts(): void {
  listSelectedItemsHTML!.innerHTML = ""; // clear the list before adding new item
  selectedProducts.length >= 1
    ? selectedProducts.forEach((item) => {
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
        listSelectedItemsHTML?.appendChild(li);
        li.lastElementChild?.lastElementChild?.addEventListener("click", () =>
          removeSelectedProduct(item.id)
        );
      })
    : (listSelectedItemsHTML!.innerHTML = `
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

render(avaibleProducts, document.getElementById("avaiableItems")!); // the ! is a non-null assertion operator
