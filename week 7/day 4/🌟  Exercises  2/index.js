// function convertKilogramsToGrams(sum){
// return sum * 1000;
// }
const convertKilogramsToGrams = function(num){
    console.log("num*1000:",num*1000);
    return num *1000;
}

const result = convertKilogramsToGrams(3);
console.log ("result:",result);

[1,2,4].forEach(convertKilogramsToGrams);

// In a function declaration , the function has a name 
//In a function expression the function is annoymous.
//You can use it in a callback put in inside a variable 
//Be carfufull !! this menans that fuction indide a variable do not get hoisted

//const convertKilogramsToGrams = (num) => num * 1000; 