// /🌟 Exercise 2: Advanced Module Usage Using ES6 Module Syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.





import U,{printName as printName, printAge} from"./data.js"
   const user = new U ('Nagim', 34)
   console.log(user)
   printName(user)
   printAge(user)

   const people = [
    { fName: 'Ashish', age: 23 },
    { fName: 'Ajay', age: 21 },
    { fName: 'Arvind', age: 26 },
    { fName: 'Mahesh', age: 28 },
    { fName: 'Jay', age: 19 },
 ];
 const findAverageAge = (arr = []) => {
    const { sum, count } = arr.reduce((acc, val) => {
       let { sum, count } = acc;
       sum += val.age;
       count++;
       return { sum, count };
       }, {
          sum: 0, count: 0
    });
    return (sum / (count || 1));
 };
 console.log(findAverageAge(people));