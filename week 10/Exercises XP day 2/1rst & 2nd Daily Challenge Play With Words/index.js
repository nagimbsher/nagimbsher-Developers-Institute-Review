// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
//Test:

//in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))
// Output:





// function makeAllCaps(words){
//     return new Promise ((resolve,reject) =>{
//         if (words.every(isString)){
//             resolve(words.map((word) => word.toUpperCase()));
//         }else{
//             reject("Sorry,all valuse should be strings");
//         }
//     });
// }

// function sortWords(words){
//     return new Promise((resolve,reject) => {
//         if(words.length >= 4){
// resolve(words.sort());
//         }else{
//             reject("Sorry array too short");
//         }
//     });
// }
// sortWords(["Good","morning","hi","friends"]).then(console.log)
// .catch(console.error);
// const words = ["hello","people","how","are","you"];
// makeAllCaps(words)
// .then((res) =>sortWords(res))
// .then((res) =>console.log(res))
// .catch((err) =>console.error(err));


// function isString(arg){
//     return typeof  arg === "string";
// }





// 2nd Daily Challenge
// const morse = `{
//   "0": "-----",
//   "1": ".----",
//   "2": "..---",
//   "3": "...--",
//   "4": "....-",
//   "5": ".....",
//   "6": "-....",
//   "7": "--...",
//   "8": "---..",
//   "9": "----.",
//   "a": ".-",
//   "b": "-...",
//   "c": "-.-.",
//   "d": "-..",
//   "e": ".",
//   "f": "..-.",
//   "g": "--.",
//   "h": "....",
//   "i": "..",
//   "j": ".---",
//   "k": "-.-",
//   "l": ".-..",
//   "m": "--",
//   "n": "-.",
//   "o": "---",
//   "p": ".--.",
//   "q": "--.-",
//   "r": ".-.",
//   "s": "...",
//   "t": "-",
//   "u": "..-",
//   "v": "...-",
//   "w": ".--",
//   "x": "-..-",
//   "y": "-.--",
//   "z": "--..",
//   ".": ".-.-.-",
//   ",": "--..--",
//   "?": "..--..",
//   "!": "-.-.--",
//   "-": "-....-",
//   "/": "-..-.",
//   "@": ".--.-.",
//   "(": "-.--.",
//   ")": "-.--.-"
// }`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
function getMorseDictionary(){
    return new Promise((resolve,reject) =>{
     if(morse.length === 0){
        reject("Morse string is empty");
         }else{
         const morsObject = JSON.parse(morse);
         resolve(morsObject);
    }
});
}


function isWordOkay(word,possibleLetters){
    const userLetters = word.split("");//['h','i']
    return userLetters.every((letter) =>possibleLetters.includes
    (letter));
    }

function translateUserInput(morseJS){
    const word = prompt("Enter a word");
    return new Promise((resolve,reject) =>{
        const possibleLetters = Object.keys(morseJS);
        if(!isWordOkay(word,possibleLetters)){
            reject("please type lowercase characters");
        }else{
            const result = {word:word,morse: convertWordToMorse(word,
                morseJS)};
                resolve(result);
        }

    });

} 

function convertWordToMorse(word,morseJS){
    const letters = word.split("");
    return letters.map((letter) => morseJS[letter]);
}
function joinwords({word,morse}){
    document.getElementById("word").innerText = word,
    morse.forEach((sign,i) => {
        const p = document.createElement("p")
        p.innerText = word[i] + "=" + sign;
        document.getElementById("morse").appendChild(p);
    });
}
getMorseDictionary()
.then((morseObj) =>translateUserInput(morseObj))
.then((wordAndTranslation) =>joinwords(wordAndTranslation))
.catch((err) => console.error(err));

