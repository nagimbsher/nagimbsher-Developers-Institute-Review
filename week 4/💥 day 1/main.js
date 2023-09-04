
// function printage(){
//     console.log()
// }
// myAge()
// //   let
//  function showMessage(name) {
//     // alert('hello')
//     let hey = 'hello'
//     console.log(hello +", "+ name);


//  }
//  console.log(hey);

//  showMessage(" jon");




// let name = getFullName("John", "Due", "Tel Aviv");
// console.log('name=>',name);

// function getFullName(firstName, lastName) {
// //   console.log(firstName);
//  /// address
// //  let arr = []
// //  arr.push(firstName + " " + lastName)
// //  arr.push(address)
// let myAddress = getAddress()

// let obj = {
//     fullName: firstName + " " + lastName,
//     addres:myAddress
// }
//  return obj;
// }

// function getAddress() {
//     return 1 + 2
// }




/*
1. create a function to get mum age,
2. create a function to get dad age,
3. create a function to get my age, 
and log mum an dad age
*/

function getMumAge(age){
    return age * 2;
}

function getDadAge(age){
    let mum = getMumAge(age);
    return mum * 1.2;
}

function getMumDad(age) {
    let mum = getMumAge(age);
    let dad = getDadAge(age);
    console.log(mum, dad)
}
getMumDad(24)


//1 prompt the user for her / his age
//2 creat a function  that get the age as parameter 
// and 
//return ture if age >= 18 
//return false age< 18
//3. call this function after getting the user promt
//and log access granted if trye 
//else access denied
function checkAge(age){
    if (age >= 18){
     return true;

    }else{
return false;

    }
}
let userAge = prompt('How old are uou?');
 
let isAge = checkAge(userAge);

if (isAge){
    console.log ('Access denied')
}



















