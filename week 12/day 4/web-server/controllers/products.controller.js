const { products } = require("../config/products.js");
const {
  _getAllProducts,
  _getProduct,
  _updateProduct,
  _insertProduct,
  _deleteProduct,
} = require("../models/products.model.js");

const getAllProducts = async (req, res) => {
  // res.json(products);
  try {
    const data = await _getAllProducts();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Not Found" });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  // const product = products.find((item) => item.id == id);
  // if (!product) return res.status(404).json({ msg: "not found" });
  // res.json(product);

  try {
    const data = await _getProduct(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Not Found" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const data = await _updateProduct(id, name, price);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Not Found" });
  }

  // const indx = products.findIndex((item) => item.id == id);
  // if (indx === -1) return res.status(404).json({ msg: "not found" });

  // products[indx].name = name;
  // products[indx].price = price;

  // res.json(products);
};

const insertProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const data = await _insertProduct(name, price);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Not Found" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _deleteProduct(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "Not Found" });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  updateProduct,
  insertProduct,
  deleteProduct
};
