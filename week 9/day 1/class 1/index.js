// const  frm = document. forms.form1;
// const email = frm.elements.email;

// console.log ("email=>",email);

// email.addEventListener("input", function (event){
//     if(email.validity.typeMismatch){
//         email.setCustomValidity("I am expecting an e-mail address!");
//     }else{
//         email.setCustomValidity("");
//     }
    
// });




function validateFrom (e){
    e.preventDefault();
const usernamevalue= e.target.elements.username.value;
if(username.trim ().length > 0){
}else{
    alert("expectin a username ");
    return;
}
e .target.submit()
}





// function hello (){
//     console,log("before");
//     try{
//         a;
//     } catch(e){
//         console.log("errors=>",e.stack);
//     }
//     console.log("after");
// }
// hello();