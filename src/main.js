let selectedProducts;
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
export {};
