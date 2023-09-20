// const axios = require("axios")
const {getData} = require("./app.js");
// getData("https://jsonplaceholder.typicode.com/posts").then((data) => console.log(data))

const axios  = require("axios");
axios.get("https://jsonplaceholder.typicode.com/users")
.then(resp => 
        {if(resp.status === 200){
            console.log(resp)};
            }
    );
