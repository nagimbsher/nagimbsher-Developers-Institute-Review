// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

function add_json_str(){
    const name = document.getElementById("user_name").value;
    const surname = document.getElementById("user_surname").value;
    const data = {
        name: name,
        surname: surname
    };
    document.getElementById("json_str_res").innerText = JSON.stringify(data);
    

}