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
    {
      id: 1,
      name: "Brown Shirt",
      description: "Brown T-Shirt for Women",
      price: 16.99,
      gender: "women",
      type: "shirt",
      category: "clothes"
    },
    {
      id: 2,
      name: "Light Brown Shirt",
      description: "Light Brown Shirt for Women",
      price: 4.99,
      gender: "women",
      type: "shirt",
      category: "clothes"
    },
    
  ];
  
  //console.log(f.constructor);

  products.map((value) => {
	for(let property in value) {
  	console.log(`${property}: ${value[property]}`);
  }
});
  
  
module.exports = products;


