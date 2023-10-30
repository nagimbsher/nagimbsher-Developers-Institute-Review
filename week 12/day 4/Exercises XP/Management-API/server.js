// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const db = require('../models'); // You will need to configure your database connection here

// POST /register: Allow users to register by providing a username and password.
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user in the database
    const user = await db.users.create({ username, password: hashedPassword });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// POST /login: Allow users to login by providing their username and password.
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await db.users.findOne({ where: { username } });

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  // Compare the hashed password from the database with the provided password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

// GET /users: Retrieve a list of all registered users from the database.
router.get('/users', async (req, res) => {
  const users = await db.users.findAll();
  res.json(users);
});

// GET /users/:id: Retrieve a specific user by ID from the database.
router.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await db.users.findByPk(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// PUT /users/:id: Update a user's information by ID in the database.
router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;

  // Find the user by ID
  const user = await db.users.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update the user's information
  user.username = username;
  user.password = await bcrypt.hash(password, 10);
  await user.save();

  res.json(user);
});

module.exports = router;



// // Server.js 

// // Imports // 
// const express = require("express"); 
// const passport = require("passport"); 
// const User = require("./models.js"); 
// const localStrategy = require("./passp.js"); 
// const controllers = require("./controllers.js"); 
// const cookieParser = require("cookie-parser"); 
// const connectDB = require("./db"); 
// const ejs = require("ejs"); 
// const bodyParser = require("body-parser"); 
// const routes = require("./pages.js"); 
// const session = require("express-session"); 

// // Main Server // 
// const app = express(); 
// connectDB(); 
// app.use( 
// 	session({ 
// 		secret: "GFGLogin346", 
// 		resave: false, 
// 		saveUninitialized: false, 
// 	}) 
// ); 
// app.use(cookieParser()); 
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(passport.initialize()); 
// app.use(passport.session()); 
// app.set("view engine", "ejs"); 

// // Serialize and deserialize user objects to maintain user sessions 
// passport.serializeUser((user, done) => done(null, user.id)); 
// passport.deserializeUser((id, done) => { 
// 	User.findById(id, (err, user) => done(err, user)); 
// }); 
// // Use the routes 
// app.use("/api/", controllers); // Path to your authentication routes file 
// app.use("/", routes); 

// // Start the server 
// const port = 3000; // Replace with your desired port number 
// app.listen(port, () => { 
// 	console.log(`Server started on port ${port}`); 
// }); 
