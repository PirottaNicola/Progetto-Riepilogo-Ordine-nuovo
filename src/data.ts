interface Customer {
  id: number
  firstname: string
  lastname: string
  age: number
  email: string
  phone: number
  locale: string
  billingAddress: Address
  shippingAddress: Address
}

interface Address {
  street: string
  city: string
  state: string
  postalCode: number
}

interface Order {
  orderNumber: string
  orderDate: Date
  totalAmount: number
  OrderLineItems: OrderLineItems[]
}

interface OrderLineItems {
  id: number
  product: Product
  amount: number
  quantity: number
}

interface Product {
  code: string
  name: string
  variants: string[]
  description: string
  price: number
  retailer: string
  img: string
  type: 'Product'
}

const costumers: Customer[] = [
  {
    id: 100312,
    firstname: 'Mario',
    lastname: 'Rossi',
    age: 27,
    email: 'Mario.Rossi@gmail.com',
    phone: 3245522654,
    locale: 'Italia',
    billingAddress: {
      street: 'Via dei Tulipani',
      city: 'Milano',
      state: 'Italia',
      postalCode: 20019,
    },
    shippingAddress: {
      street: 'Via dei Tulipani',
      city: 'Milano',
      state: 'Italia',
      postalCode: 20019,
    },
  },
  {
    id: 214122,
    firstname: 'Antonio',
    lastname: 'Verdi',
    age: 47,
    email: 'Antonio.Verdi@gmail.com',
    phone: 3285643876,
    locale: 'Italia',
    billingAddress: {
      street: 'Via delle Rose',
      city: 'Torino',
      state: 'Italia',
      postalCode: 58741,
    },
    shippingAddress: {
      street: 'Via delle Rose',
      city: 'Torino',
      state: 'Italia',
      postalCode: 58741,
    },
  },
]

const avaibleProducts: Product[] = [
  {
    code: 'A1',
    name: 'Prodotto 1',
    variants: ['Variante 1', 'Variante 2'],
    description: 'Prodotto 1 ........',
    price: 100,
    retailer: 'Retailer 1',
    img: 'padella.jpg',
    type: 'Product',
  },
  {
    code: 'A2',
    name: 'Prodotto 2',
    variants: ['Variante 1', 'Variante 2', 'Variante 3'],
    description: 'Prodotto 2 ........',
    price: 120,
    retailer: 'Retailer 2',
    img: 'sedia.jpg',
    type: 'Product',
  },
  {
    code: 'A3',
    name: 'Prodotto 3',
    variants: ['Variante 1'],
    description: 'Prodotto 3 ........',
    price: 60,
    retailer: 'Retailer 3',
    img: 'sedia.jpg',
    type: 'Product',
  },
  {
    code: 'A4',
    name: 'Prodotto 4',
    variants: ['Variante 1', 'Variante 2', 'Variante 3', 'Variante 4'],
    description: 'Prodotto 4 ........',
    price: 40,
    retailer: 'Retailer 4',
    img: 'sedia.jpg',
    type: 'Product',
  },
  {
    code: 'A5',
    name: 'Prodotto 5',
    variants: ['Variante 1'],
    description: 'Prodotto 5 ........',
    price: 21,
    retailer: 'Retailer 5',
    img: 'sedia.jpg',
    type: 'Product',
  },
]

// Mock data for Product interface
const mockProduct1: Product = {
  code: 'P001',
  name: 'Laptop',
  variants: ['8GB RAM', '256GB SSD'],
  description: 'Powerful laptop for multitasking',
  price: 999.99,
  retailer: 'Tech Store',
}

const mockProduct2: Product = {
  code: 'P002',
  name: 'Smartphone',
  variants: ['64GB Storage', '5G Capability'],
  description: 'High-performance smartphone',
  price: 499.99,
  retailer: 'Mobile Shop',
}

// Mock data for OrderLineItems interface
const mockOrderLineItems: OrderLineItems[] = [
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

// map object type to template
const OBJECT_TO_TEMPLATE = new Map<string, string>([
  [
    /*   Customer: customerTemplate,
  Address: addressTemplate,
  Order: orderTemplate,
  OrderLineItems: orderLineItemsTemplate, */
    'Product',
    `<div class="card p-1 mb-4" style="max-width: 300px">
          <div class="card-header">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Add to cart
              </label>
            </div>
          </div>
          <div class="card-body bg-light">
            <img
              src="../src/static/###img"
              class="img-fluid mb-4"
              alt="Responsive image"
            />
            <h4 class="card-title">###name</h4>
            <!--price-->
            <h2 class="card-title text-success">###price</h2>
            <select id="options" class="form-control mb-4">
            ###options
            </select>
            <h6 class="card-title">Select quantity</h6>
            <input
              type="number"
              class="form-control"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              value="1"
              onkeydown="return false"
              style="caret-color: transparent"
            />
          </div>
        </div>`,
  ],
])

export { OBJECT_TO_TEMPLATE, avaibleProducts, costumers }
export type { Address, Customer, Order, OrderLineItems, Product }
