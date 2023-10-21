const express = require("express");
const {
  getAllUsers,
  searchUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller.js");
const users_router = express.Router();

// CRUD - READ - GET - get all users
users_router.get("/", getAllUsers);

//CRUD -READ -GET - search for user name - using query
users_router.get("/search", searchUsers);

//CRUD -READ  -GET - get one user - using params
users_router.get("/:id", getUser);

//http://example.com/api/users- create a new user - POST
//CRUD - CREATE -POST - create new user - using body
users_router.post("/", createUser);

//CRUD - UPDATE  -PUT - update a user - using params & body
users_router.put("/:id", updateUser);

//http://example.com/api/users - delete - DELETE
users_router.delete("/:id", deleteUser);

module.exports = { users_router };
