import { costumers, avaibleProducts, OrderLineItems, Product } from "./data";

let selectedProducts: OrderLineItems[] = [];

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
