import { OrderLineItems, Product, avaibleProducts, costumers } from './data.js'
import { render } from './helper.js'

let selectedProducts: OrderLineItems[] = []

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

render(avaibleProducts, document.getElementById('avaiableItems')!) // the ! is a non-null assertion operator
