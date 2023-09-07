// // You are tasked with writing a function `solution` that takes a string `S` as input. 
// // The string consists of 'a' and/or 'b' characters. 
// // The function should return `true` if all occurrences 
// // of the letter 'a' appear before all occurrences 
// // of the letter 'b' in the string `S`. 
// // If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
// // the function should also return `true`. 
// // Otherwise, it should return `false`.

// // function solution(S) {
// //     // Your code here
// //     return true or false
// // }
// // aabb - true
// // bbaa - flase
// // aaa - true
// // bbb - true
// // ababa - flase
// function testSolution() {
//     const testCases = [
//       { input: 'aabbb', output: true },
//       { input: 'ba', output: false },
//       { input: 'aaa', output: true },
//       { input: 'b', output: true },
//       { input: 'abba', output: false },
//       { input: 'a', output: true },
//       { input: 'bbaa', output: false },
//       { input: 'bbba', output: false },
//       { input: 'aabb', output: true },
//       { input: 'bababab', output: false },
//       { input: 'babababa', output: false },
//       { input: 'aabababb', output: false },
//       { input: 'baaab', output: false },
//       { input: 'bbabbabbababbab', output: false },
//       { input: 'babaabaaab', output: false },
//       { input: 'ab', output: true },
  
  
//     ];
  
//     for (let i = 0; i < testCases.length; i++) {
//       const { input, output } = testCases[i];
//       const result = solution(input);
//       console.log(`Input: "${input}", Output: ${result}, Expected Output: ${output}`);
//     }
//   }
  
//   testSolution();
// function solution(S) {
//     let len = S.length;
  
//     let lastAIndex = -1;
//     let lastBIndex = -1;
    
//     for (let i = 0; i < len; i++) {
//       if (S[i] === "a") {
//         lastAIndex = i;
//       } else if (S[i] === "b") {
//         lastBIndex = i;
//       }
//       if (lastBIndex < lastAIndex && lastBIndex !== -1 && lastAIndex !== -1) {
//         return false;
//       }
//     }
//     return true;
//   }



/*
Json javaseript object Notation

*/

let object=[
{
name:"Dan",
age:"25",
},
{
name:"Nagim",
age:"30"
},
];
 const jsonobj = JSON.stringify(object)
 console.log("json=>",jsonobj);

 let json =`{"name":"Mary","age":"56"}`;

 const newObj = JSON.parse(json)

 console.log("newObj=>",newObj);

 
{/* <obj>
<user>

</user>
    
</obj> */}




//synchronous and Asynchronous

let a = 1
let b = 2
setTimeout(function(){
  console.log('Async')
},100)

setTimeout(function(){
  console.log('Timeput:'+ a )

},100)
a = 10

fetch('/').then(function(){
  console.log('Fetch')
})

console.log('synchronous')
console.log(a)
console.log(b)

// function a (){
//     setTimeout
//     console.log('a function');

// }

// function b (){
//     console.log('b function');

// }
// a()
   






//XMLHTTpRqeuest

// let xhr = new XMLHttpRequest();
// console.log('xhr=>',xhr);
// xhr .open('GET','https://jsonplaceholder.typicode.com/users')

// xhr .send();
// xhr .onload =()=>{
//     if (xhr.status === 200)
//     console.log(JSON.parse(xhr.response));
//     else console.log(`&{xhr.status}`)
// }
// xhr.onerrr


// const reder = (arr) => {
//  console.log(arr);
//  const html = arr.map (item =>{
//     return`<div>
//     img src =`
//  })
// }





let xhr = new XMLHttpRequest();

// console.log("xhr=>", xhr);

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.open("GET", ",'https://jsonplaceholder.typicode.com/users'");

// xhr.timeout = 10000;
// type
// ""
// text
// json
// document
// xhr.responseType = "document"

xhr.send();

xhr.onload = () => {
  if (xhr.status === 200)
    console.log(xhr.response); //zivuch(xhr.response);//render(xhr.response);
  else console.log(`${xhr.status} : ${xhr.statusText} `);
};

xhr.onerror = () => {
  console.log("Request failed");
};

xhr.onprogress = (event) => {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

const render = (arr) => {
  console.log(arr);
  const html = arr.map((item) => {
    return `<div style="display:inline-block;margin:20px;border:1px solid cyan;padding:20px;text-align:center;">
      <img src=https://robohash.org/${item.id}?size=150x150 />
      <h2>${item.name}</h2>
      <p>${item.username}</p>
      <p>${item.email}</p>
    </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
  console.log(html);
};

function zivuch(xmlDoc) {
  var cd = xmlDoc.getElementsByTagName("email");
  for (let i = 0; i < cd.length; i++) {
    console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
    console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
  }
}











// // XMLHttpRequest

// let xhr = new XMLHttpRequest();

// // console.log("xhr=>", xhr);

// // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.open("GET", "https://zivuch.github.io/load?999999");

// // xhr.timeout = 10000;
// // type
// // ""
// // text
// // json
// // document
// // xhr.responseType = "document"

// xhr.send();

// xhr.onload = () => {
//   if (xhr.status === 200)
//     console.log(xhr.response); //zivuch(xhr.response);//render(xhr.response);
//   else console.log(`${xhr.status} : ${xhr.statusText} `);
// };

// xhr.onerror = () => {
//   console.log("Request failed");
// };

// xhr.onprogress = (event) => {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
//   }
// };

// const render = (arr) => {
//   console.log(arr);
//   const html = arr.map((item) => {
//     return `<div style="display:inline-block;margin:20px;border:1px solid cyan;padding:20px;text-align:center;">
//       <img src=https://robohash.org/${item.id}?size=150x150 />
//       <h2>${item.name}</h2>
//       <p>${item.username}</p>
//       <p>${item.email}</p>
//     </div>`;
//   });
//   document.getElementById("root").innerHTML = html.join("");
//   console.log(html);
// };

// function zivuch(xmlDoc) {
//   var cd = xmlDoc.getElementsByTagName("email");
//   for (let i = 0; i < cd.length; i++) {
//     console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
//     console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
//   }
// }


// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(JSON.parse(this.responseText));
// 	}
// });

// xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13');
// xhr.setRequestHeader('X-RapidAPI-Key', '');
// xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

// xhr.send(data);

// function loadXml(xmlDoc) {
//     var cd = xmlDoc.getElementsByTagName("email");
//     for (let i = 0; i < cd.length; i++) {
//         console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
//         console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
//     }
//   }






