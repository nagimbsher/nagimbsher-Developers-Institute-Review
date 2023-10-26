// 🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax
// Instructions
// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

// Export this array using the Common JS syntax.

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.

const products = [
  { name: "Product 1", price: 10, category: "Category A" },
  { name: "Product 2", price: 20, category: "Category B" },
  { name: "Product 3", price: 30, category: "Category A" },
  { name: "Product 4", price: 40, category: "Category C" },
];

module.exports = products;
