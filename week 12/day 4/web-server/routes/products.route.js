const express = require("express");
const {
  getAllProducts,
  getProduct,
  updateProduct,
  insertProduct,
  deleteProduct,
} = require("../controllers/products.controller.js");

const { auth } = require("../middlewares/auth.js");

const products_router = express.Router();

products_router.get("/", auth, getAllProducts);

// get one product by id - params - GET
products_router.get("/:id", getProduct);

// update a product - PUT
products_router.put("/:id", updateProduct);

// insert a product - POST
products_router.post("/", insertProduct);

// delete - DELETE
products_router.delete("/:id", deleteProduct);

module.exports = { products_router };
