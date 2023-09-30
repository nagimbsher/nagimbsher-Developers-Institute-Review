
const chalk = require("chalk");
 
function error(...args) { console.log(chalk.bold.red(...args)); } 
function warn(...args) { console.log(chalk.keyword("orange")(...args)); } 
function log(...args) { console.log(chalk.grey(...args)); } 
function info(...args) { console.log(chalk.blue(...args)); } 

module.exports = { warn, error, info, log };

