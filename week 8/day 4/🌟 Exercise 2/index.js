//Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

//destructuring


function displayStudentInfo(objUser){
    const{first,last} = objUser
    return `your first name ${first} and your last name is ${last}`;
}

const sentence = displayStudentInfo({first: 'Adam', last:'David'});
console.log("sentence:",sentence);

