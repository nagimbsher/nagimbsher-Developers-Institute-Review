const { model } = require("mongoose");
const { users } = require("../config/users.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const searchUsers = (req, res) => {
  const { name } = req.query;
  const filtered_users = users.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  if (filtered_users.length === 0)
    return res.status(404).json({ msg: "users not found" });
  res.json(filtered_users);
};

const getUser = (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.json(user);
};

const createUser = (req, res) => {
  console.log("body=>", req.body);
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.json(users);
} 

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const index = users.findIndex((item) => item.id == id);

  if (index === -1) return res.status(404).json({ msg: "user not found" });

  users[index].name = name;
  users[index].email = email;

  res.json(users);
}

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) return res.status(404).json({ msg: "user not found" });
  users.splice(index, 1);
  res.json(users);
}

module.exports = {
  getAllUsers,
  searchUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
