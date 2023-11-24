import {
  OrderLineItems,
  Product,
  avaibleProducts,
  costumers,
  mockOrderLineItems,
  mockProduct1,
  mockProduct2,
} from './data.js'
import { diFilippo, render } from './helper.js'

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
]

// Funzione per aggiungere un prodotto
function addSelectedProduct(product: Product, quantity: number): void {
  const lineItemId = selectedProducts.length + 1
  const orderLineItem: OrderLineItems = {
    id: lineItemId,
    product,
    amount: product.price * quantity,
    quantity,
  }
  selectedProducts.push(orderLineItem)
}

function removeSelectedProduct(lineItemId: number): void {
  selectedProducts = selectedProducts.filter((item) => item.id !== lineItemId)
}

function updateSelectedProductQuantity(
  lineItemId: number,
  quantity: number
): void {
  selectedProducts = selectedProducts.map((item) => {
    if (item.id === lineItemId) {
      item.quantity = quantity
      item.amount = item.product.price * quantity
    }
    return item
  })
}

const listSelectedItemsHTML = document.getElementById('selected-items-list')

function displaySelectedProducts(): void {
  // listSelectedItemsHTML?.innerHTML = "";
  selectedProducts.forEach((item) => {
    const li = document.createElement('li')
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
    `
    listSelectedItemsHTML?.appendChild(li)
  })
}

displaySelectedProducts()

render(avaibleProducts, document.getElementById('avaiableItems')!) // the ! is a non-null assertion operator

//* js da matteo
const nextButton = document.getElementById('nextButton')
nextButton.addEventListener('click', function () {
  diFilippo(selectedProducts)
})
