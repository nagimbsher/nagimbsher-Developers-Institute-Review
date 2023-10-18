const { db } = require("../config/products.js");

const _getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

const _getProduct = (id) => {
  return db("products").select("id", "name", "price").where({ id });
};

const _updateProduct = (id, name, price) => {
  return db("products")
    .update({ name, price }, ["id", "name", "price"])
    .where({ id });
  // .returning(["id", "name", "price"]);
};

const _insertProduct = (name, price) => {
  return db("products").insert({ name, price }, ["id", "name", "price"]);
  //   .returning(["id", "name", "price"]);
};

const _deleteProduct = (id) => {
  return db("products").where({ id }).del().returning(["id", "name", "price"]);
};

module.exports = {
  _getAllProducts,
  _getProduct,
  _updateProduct,
  _insertProduct,
  _deleteProduct,
};
