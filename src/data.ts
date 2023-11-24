interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  phone: number;
  locale: string;
  billingAddress: Address;
  shippingAddress: Address;
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: number;
}

interface Order {
  orderNumber: string;
  orderDate: Date;
  totalAmount: number;
  OrderLineItems: OrderLineItems[];
}

interface OrderLineItems {
  id: number;
  product: Product;
  amount: number;
  quantity: number;
}

interface Product {
  code: string;
  name: string;
  variants: string[];
  description: string;
  price: number;
  retailer: string;
}

const costumers: Customer[] = [
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

const avaibleProducts: Product[] = [
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

export { costumers, avaibleProducts };
export type { Customer, Address, Order, OrderLineItems, Product };