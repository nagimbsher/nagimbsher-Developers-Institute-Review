const express = require("express");
// const bp = require("body-parser");
const { users } = require("./config/users.js");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.listen(3001, () => {
  console.log("run on port 3001");
});

// CRUD - READ - GET - get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

//CRUD -READ -GET - search for user name - using query
app.get("/api/users/search", (req, res) => {
  const { name } = req.query;
  const filtered_users = users.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  if (filtered_users.length === 0)
    return res.status(404).json({ msg: "users not found" });
  res.json(filtered_users);
});

//CRUD -READ  -GET - get one user - using params
app.get("/api/users/:id", (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.json(user);
});

//http://example.com/api/users- create a new user - POST
//CRUD - CREATE -POST - create new user - using body
app.post("/api/users", (req, res) => {
  console.log("body=>", req.body);
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.json(users);
});

//CRUD - UPDATE  -PUT - update a user - using params & body
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const index = users.findIndex((item) => item.id == id);

  if (index === -1) return res.status(404).json({ msg: "user not found" });

  users[index].name = name;
  users[index].email = email;

  res.json(users);
});

//http://example.com/api/users - delete - DELETE
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.status(404).json({ msg: "user not found" });
  users.splice(index, 1);
  res.json(users);
});


/*
server
con





*/