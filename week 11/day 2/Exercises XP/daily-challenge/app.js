// const greeting = require("./greeting.js");

// const name = "Mike Taylor";

// greeting(name);

// const person = require('./ person.js')

// console.log(person.name, person.car);


// const { name, car } = require("./ person.js");

// console.log(name, car);

const chalk = require("chalk");
 
function error(...args) { console.log(chalk.bold.red(...args)); } 
function warn(...args) { console.log(chalk.keyword("orange")(...args)); } 
function log(...args) { console.log(chalk.grey(...args)); } 
function info(...args) { console.log(chalk.blue(...args)); } 

module.exports = { warn, error, info, log };

