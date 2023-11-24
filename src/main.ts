import {
  OrderLineItems,
  Product,
  avaibleProducts,
  costumers,
  selectedProducts,
} from './data'

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

function removeSelectedProduct(lineItemId: number): OrderLineItems[] {
  const newSelectedProducts = selectedProducts.filter(
    (item) => item.id !== lineItemId
  )
  return newSelectedProducts
}

function updateSelectedProductQuantity(
  lineItemId: number,
  quantity: number
): OrderLineItems[] {
  const newSelectedProducts = selectedProducts.map((item) => {
    if (item.id === lineItemId) {
      item.quantity = quantity
      item.amount = item.product.price * quantity
    }
    return item
  })
  return newSelectedProducts
}
