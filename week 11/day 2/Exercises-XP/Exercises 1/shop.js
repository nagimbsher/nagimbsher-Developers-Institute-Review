// shop.js
const products = require('./products.js');

// Function to search for a product by name
function findProductByName(productName) {
  const product = products.find((p) => p.name === productName);
  return product;
}

// Call the function with different product names and print the details
const product1 = findProductByName("Product 1");
const product2 = findProductByName("Product 3");

console.log("Product 1:", product1);
console.log("Product 3:", product2);
