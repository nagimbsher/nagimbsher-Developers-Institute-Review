const id_s = [`username`,`password`];
const divs = id_s.map( id => document.getElementById(id));
const submit_btn = document.getElementById(`submit`);
const form = document.getElementById("form")
const message_box = document.getElementById("message_box");

// ⬇️⬇️ submit button enabler ⬇️⬇️
divs.forEach(div => div.addEventListener("input", submit_bttn_enabler))
function submit_bttn_enabler(e){
        submit_btn.disabled = any_field_empty(); 
        // console.log(submit_btn);
}
function any_field_empty(){
    return divs.some(div => div.value ==="");
}
// ⬆️⬆️ submit button enabler ⬆️⬆️

form.addEventListener("submit", login);

async function login(e){
    e.preventDefault()
    const message = document.createElement("p");
    const username = divs[0].value.toLowerCase();
    const password = divs[1].value;
    try {
        const response = await fetch(`http://localhost:3000/loginform?username=${username}&password=${password}`);
        const data = await response.json();
        message.innerText = data.message;
        console.log(data);
      } 
    catch (error) {
        console.log(error);
      } 
    
    message_box.innerHTML="";
    message_box.appendChild(message);
}
