// Create 2 HTML files: one for the Login form and the other for the Register form 
// (when the inputs are empty the submit button should be disabled). 
// Those 2 files should be served by the routes 
// /registerForm and /loginForm.


// Link both those files to script.js. 
// In this file you should fetch the routes /register and /login 
// as soon as the user submits the relevant form. 
// As soon as the server sends back the data, you should append it on the DOM.(see below)

const cors = require("cors")
const express = require(`express`);
const app = express();
const json = require('body-parser');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
let users = [];

app.listen(3000, ()=>{
    console.log("runs on 3000");
});

app.get('/loginform', login)
app.post(`/registerform`,create_user) 

function check_user_exists(new_user){
    let user_exists = false;
    users.map(user =>{
        if (user.username === new_user.username){
            user_exists = true;
            console.log("Sorry, this username is registered already");
            return user_exists
        }
        else if (user.email === new_user.email){
            user_exists = true;
            console.log("Sorry, this email is registered already")
            return user_exists
        }
    })
    return user_exists
        
}

function create_user(req,res){
    console.log(`POST request recieved`);
    const new_user = {
                id: users.length+1,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email.toLowerCase(),
                username: req.body.username.toLowerCase(),
                password: req.body.password
                };
    if (!check_user_exists(new_user)){
        users.push(new_user);
        res.json({new_user_created:true, message:`Hello, ${new_user.username}! Your account is created`})
    }
    else{
        res.json({new_user_created:false, message:"Sorry, user already exists"})
    }
}

function login(req,res){
    console.log(users);
    let valid_user = false;
    const login_username = req.query.username
    const login_password = req.query.password
    for (user of users){
        if (login_username == user.username && login_password == user.password){
            console.log("user exists");
            valid_user = true;
            res.json({login_success:valid_user, message:`Welcome, ${user.username}`})            
        }
    }
    res.json({login_success:valid_user, message:"Sorry, username or password are incorrect"})
}