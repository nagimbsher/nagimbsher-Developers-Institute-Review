//nodejs module system
//modules create by ourselves
//npm modules
//bulilt in modules
//> 18 - fetch - axios, node-thttp


const a = require ("./greeting.js")
console.log("greeting=>",a);
a("Nagim")


const name = 'John Jon'
const greeting = (name) =>{
console.log(`hello${name}, welcome to nodejs `);
};
 greeting(name);