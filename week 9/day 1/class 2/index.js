
// form

//const frm = document.forms.form1;

// function addOption() {
//   const select = frm.elements.fruits;
//   // const opt = document.createElement("option");
//   // opt.value = 4;
//   // opt.innerText = "Kiwi";
//   const opt = new Option("Melon", "5");
//   select.appendChild(opt);
// }

// // console.log("forms=>", frm);

// // const email = document.getElementById('email').value; -- wrong

// // const select = frm.elements.fruits;
// // console.log("select=>", select);

// // select.value = 2;
// // select.options[3].selected = true;
// // select.selectedIndex = 1;

// function validateForm(e) {
//   e.preventDefault();
//   //   const email = document.getElementById('email');
//   //   const email = e.target.elements.email;
//   // const email = e.target.elements[0];

//   //   const pass = document.getElementById('password').value;
//   //   const pass = e.target.elements.password.value;
//   // const pass = e.target.elements[1].value;

//   // const txt = e.target.elements.text;

//   //   console.log("forms=>", e.target);

//   const fruit = e.target.elements.fruits;

//   const options = Array.from(fruit.options);

//   console.log("options=>", options);

//   const selected = options
//     .filter((item) => item.selected)
//     .map((item) => item.value);

//   console.log("selected=>", selected);

//   // console.log("inputs=>", email.value, pass, txt.value);
//   console.log("fruit=>", fruit.value);
// }

// function getOptionValue(e) {
//   // const val = e.target.value;
//   const options = e.target.options;
//   // console.log("options=>", options);
// }