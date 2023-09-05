let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const displayGroceries = (obj) =>{
    const fruits = obj.fruits;
    fruits.forEach(fruits => console.log(fruits));
};


const cloneGroceries = () =>{
    let  user = client;
    user = "Betty";
    const shopping = groceries;
     shopping.totalPrice = "$34";
     shopping.other.paid = false
     
}

displayGroceries(groceries);
