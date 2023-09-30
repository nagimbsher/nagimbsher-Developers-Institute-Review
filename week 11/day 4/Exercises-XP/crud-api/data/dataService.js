const axios  = require("axios");
//users
//albums
axios.get("https://jsonplaceholder.typicode.com/albums")
.then(resp => 
{if(resp.status === 200){
console.log(resp)};
}
);

module.exports = {
    app,
  };