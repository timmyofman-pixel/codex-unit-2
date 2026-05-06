// Level 08 — Nested object access and extraction
// TODO: Given a nested object, assign 5 depth-1 and 5 depth-2 properties to descriptive variables.

const order = {
  id: 1023,
  status: "processing",
  placedAt: "May 4, 2026",
  isGift: false,
  shippingMethod: "ground",
  customer: {
    name: "Ava Morales",
    contact: {
      email: "ava.morales@example.com",
      phone: "555-0123",
    },
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
    },
  },
  items: [
    { id: "p1", name: "T-shirt", qty: 2, price: 19.99 },
    { id: "p2", name: "Coffee Mug", qty: 1, price: 9.5 },
    { id: "p3", name: "Sticker Pack", qty: 3, price: 2.5 },
  ],
  totals: {
    subtotal: 74.97,
    tax: 6.0,
    total: 80.97,
  },
};

const id = order.id;
const status = order.status;
const name = order.customer.name;
const tax = order.totals.tax;
const email = order.customer.contact.email;
const phone = order.customer.contact.phone;
const street = order.customer.address.street;
const city = order.customer.address.city;
const state = order.customer.address.state;
const shippingMethod = order.shippingMethod;
const isGift = order.isGift;
const placedAt = order.placedAt;
const items = order.items;
const subtotal = order.totals.subtotal;
const total = order.totals.total;

export default tax;