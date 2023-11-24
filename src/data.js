const costumers = [
    {
        id: 100312,
        firstname: "Mario",
        lastname: "Rossi",
        age: 27,
        email: "Mario.Rossi@gmail.com",
        phone: 3245522654,
        locale: "Italia",
        billingAddress: {
            street: "Via dei Tulipani",
            city: "Milano",
            state: "Italia",
            postalCode: 20019,
        },
        shippingAddress: {
            street: "Via dei Tulipani",
            city: "Milano",
            state: "Italia",
            postalCode: 20019,
        },
    },
    {
        id: 214122,
        firstname: "Antonio",
        lastname: "Verdi",
        age: 47,
        email: "Antonio.Verdi@gmail.com",
        phone: 3285643876,
        locale: "Italia",
        billingAddress: {
            street: "Via delle Rose",
            city: "Torino",
            state: "Italia",
            postalCode: 58741,
        },
        shippingAddress: {
            street: "Via delle Rose",
            city: "Torino",
            state: "Italia",
            postalCode: 58741,
        },
    },
];
const avaibleProducts = [
    {
        code: "A1",
        name: "Prodotto 1",
        variants: ["Variante 1", "Variante 2"],
        description: "Prodotto 1 ........",
        price: 100,
        retailer: "Retailer 1",
    },
    {
        code: "A2",
        name: "Prodotto 2",
        variants: ["Variante 1", "Variante 2", "Variante 3"],
        description: "Prodotto 2 ........",
        price: 120,
        retailer: "Retailer 2",
    },
    {
        code: "A3",
        name: "Prodotto 3",
        variants: ["Variante 1"],
        description: "Prodotto 3 ........",
        price: 60,
        retailer: "Retailer 3",
    },
    {
        code: "A4",
        name: "Prodotto 4",
        variants: ["Variante 1", "Variante 2", "Variante 3", "Variante 4"],
        description: "Prodotto 4 ........",
        price: 40,
        retailer: "Retailer 4",
    },
    {
        code: "A5",
        name: "Prodotto 5",
        variants: ["Variante 1"],
        description: "Prodotto 5 ........",
        price: 21,
        retailer: "Retailer 5",
    },
];
// Mock data for Product interface
const mockProduct1 = {
    code: "P001",
    name: "Laptop",
    variants: ["8GB RAM", "256GB SSD"],
    description: "Powerful laptop for multitasking",
    price: 999.99,
    retailer: "Tech Store",
};
const mockProduct2 = {
    code: "P002",
    name: "Smartphone",
    variants: ["64GB Storage", "5G Capability"],
    description: "High-performance smartphone",
    price: 499.99,
    retailer: "Mobile Shop",
};
// Mock data for OrderLineItems interface
const mockOrderLineItems = [
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
export { avaibleProducts, costumers, mockOrderLineItems, mockProduct1, mockProduct2, };
