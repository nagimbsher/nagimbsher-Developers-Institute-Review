// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

const isLastElement = (array,index,) => index === array.length - 1;
function makeJuice(size){
    let sentence = `The client wants a ${size} drink containing`;
    const ingredients = [];
    addIngredients("rhum","whiskey","coke");
    addIngredients("water","lime","sugar");
    addIngredients("lemon","pepsi","icetea");
    console.log("ingredient:",ingredients);
    displaySentence(ingredients);

 function addIngredients(first,second,third){
        ingredients.push(first,second,third);
 }
 function displaySentence(ingredients){
    ingredients.forEach((ingredient,i) => {
  const commaOrFullStop = isLastElement(ingredients,i)?".":",";
  const word = `${ingredient}${commaOrFullStop}`;
  sentence += word;
    });
    const p = document.createElement("p");
    p.innerText = sentence;
    p.classList.add("h1","text-primary");
    document.body.appendChild(p);
 }
    }
makeJuice("big"); 


// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
