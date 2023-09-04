//Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

//Create a function called myBill() that takes no parameters.

//The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//The item must be in stock. (Hint : check out if .. in)
//If the item is in stock find out the price in the prices object.

//Call the myBill() function.

//Bonus: If the item is in stock, decrease the item’s stock by 1

const shoppingList =["banana","orange","apple",]
function myBill(){
  const item = shoppingList[0] // banana

  const quantityInstock = stock[item]

  if(quantityInstock> 0){

    const price = price[item]

    console.log('the price of',item, "is" ,price)
  }else{
    console.log("there is no ",item, "in stock")
  }

}
myBill()


//Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false



function changeEnough(itemPrice,amountOfChange){
    console.log("the item price is",itemPrice)
    const sum = calculateSum (amountOfChange)
    return (sum > itemPrice)
}

//[1,2,3,]
//changeEnough(25, 20, 5, 0])
function calculateSum(arr){
    let sum = 0 

for (let i = 0;i < arr.length;i++){
    let coinValue 
    const numberOfCoins = arry[i]
    if(i === 0){ coinValue = 0.25}
    if(i === 1){ coinValue = 0.10}
    if(i ===2){coinValue = 0.05}
    if(i===3){ coinValue = 0.01}
    console.log("we have",numberOfCoins,"coins that have a value of ",coinValue)


    sum = sum + numberOfCoins * coinValue
}
   console.log (" you own ",sum)

   return sum 
}

changeEnough(25,20,5,0)



// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true





// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(numberOfNights){

    const constPerNight = 140
    const totalPrice = Number (numberOfNights) * constPerNight
    return totalPrice
}



function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*/)
    return regex.test(str)
}

function includesNumbers(str){
    const regex = new RegExp(/\d/)
    return regex.test(str)
}



// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

    function planeRideCost(destination){
     if (destination === "London")return 183
     if (destination === "Paris")return 220
      return 300
    }   

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

    function rentalCarCost(carAnswer){
const dailyPrice = 40
const numberOfDays = Number(carAnswer)

let discount = 0
if ( numberOfDays >= 10)discount = 0.05

const totalPric = dailyPrice * numberOfDays * (1 - discount)
return totalPric
}



// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car crost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the 

function totalVacationCost(){
    let hotelAnswer 
    let carAnswer 
    let destination = ""

    while (! isOnlyNumbers(hotelAnswer)){
        hotelAnswer = prompt("How many nights would you like to stay ")
    }

    while (!isOnlyNumbers(carAnswer)){
        carAnswer = prompt ("How many days would you like to rent the car ")
    }

    while(destination == ""|| includesNumbers(destination)){
    destination = prompt("where are you going ?")
}

    const carPrice = rentalCarCost(carAnswer)
    const hotelPrice = hotelCost(hotelAnswer)
    const planePrice = planeRideCost(destination)

     console.log('hotelPrice:', hotelPrice)
     console.log('carPrice:', carPrice)
     console.log('planPrice:', planePrice)

     const totalPric = carPrice + hotelPrice + planePrice
     console.log("total Price ", totalPric)
}
totalVacationCost()