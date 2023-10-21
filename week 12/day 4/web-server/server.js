const express = require("express");
// const bp = require("body-parser");

const { users_router } = require("./routes/users.route.js");
const { products_router } = require("./routes/products.route.js");

const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// request => midlleware => response
// const logger = (req, res, next) => {
//   console.log("url=>", req.url, "method=>", req.method);
//   console.log("params=>", req.params);
//   console.log("query=>", req.query);
//   console.log("body=>", req.body);
//   next();
// };

// const auth = (req, res, next) => {
//   const { name } = req.query;
//   console.log(req.query);
//   if (name != "admin") {
//     res.json({ msg: "not authirized to see this product" });
//   } else {
//     next();
//   }
// };

// app.use(auth);
// app.use("/api/users", auth);

app.use("/", express.static(__dirname + "/public"));

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use("/api/users", users_router);
app.use("/api/products", products_router);

/*
server
  |_ config
  |_ models * - querie to database
  |_ controllers - 
  |_ routes - 
  |_ midllewares *
*/
