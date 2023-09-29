const id_s = [`first_name`,`last_name`,`email`,`username`,`password`];
const divs = id_s.map( id => document.getElementById(id));
const submit_btn = document.getElementById(`submit`);
const form = document.getElementById("form");
const message_box = document.getElementById("message_box");

// ⬇️⬇️ submit button enabler ⬇️⬇️
divs.forEach(div => div.addEventListener("input", submit_bttn_enabler))
function submit_bttn_enabler(e){
        submit_btn.disabled = any_field_empty(); 
}
function any_field_empty(){
    return divs.some(div => div.value ==="");
}
// ⬆️⬆️ submit button enabler ⬆️⬆️


form.addEventListener("submit", handle_submit)

async function handle_submit(e){
    e.preventDefault()
    const first_name = divs[0].value;
    const last_name = divs[1].value;
    const email = divs[2].value;
    const username = divs[3].value;
    const password = divs[4].value;
    const body = {first_name,last_name,email,username,password}
    try {
        const response = await fetch("http://localhost:3000/registerform", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        });
        const data = await response.json();
        const message = document.createElement("p");
        message.innerText = data.message
        message_box.innerHTML = "";
        message_box.appendChild(message);
      } 
      catch (error) {
        console.error("Error:", error);
      }
}