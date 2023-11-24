import { selectedProducts, } from "./data";
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
    const newSelectedProducts = selectedProducts.filter((item) => item.id !== lineItemId);
    return newSelectedProducts;
}
function updateSelectedProductQuantity(lineItemId, quantity) {
    const newSelectedProducts = selectedProducts.map((item) => {
        if (item.id === lineItemId) {
            item.quantity = quantity;
            item.amount = item.product.price * quantity;
        }
        return item;
    });
    return newSelectedProducts;
}
