// 1-Create a function called compareToTen(num) that takes a number as an argument.
//2- The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))





function compareToTen(num){
    return new Promise((resolve,reject) =>{
if (num <10){
    resolve("Number is small then 10 .All good");
}else{
reject("Number is too hight.try again");
}
    });
}
compareToTen(15)
.then((res) => console.log(res))
.catch((err) =>console.error(err));