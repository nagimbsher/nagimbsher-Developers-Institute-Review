// function start(){
//     for (var i = 0; i <5; i++)
//     console.log(i);
    
//     console.log(i);
// }
//start();

// var => crearts function -scoped
// befor es6 var was the only way to  declar a variable and constants
//Es6 (ES2015): key words  let, const => block-scoped


// function start(){
// for (var i = 0; i < 5; i++){
//     if (true) {
//         var color = 'red';
//     }
// }
    
//     console.log(color);
// 'red'
// }
// start();



function start(){
    for (var i = 0; i < 5; i++){
        if (true) {
            let color = 'red';
        }
    }
        
        console.log(color);
    }
    start();
//if we replace var with let . we got an error because coler is not accessible
//this is the first proplem with var keyword
//the second issue is with global varibles 

var color = 'red'
//window.color 'red'

//if we use var outside of a function this cteates a globle variable and 
//attaches that global variable to the window object in browser so 

let age = 30;
//window.age undefined

// in contrast when we use the let keyword to define a global varible that 
//global variable is not attached to the window object


// why is it bad to attach a variable to the window objects well
// because window object is something central there is one instance of 
//the window object 


















