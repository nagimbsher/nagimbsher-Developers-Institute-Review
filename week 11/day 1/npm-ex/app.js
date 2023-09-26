// const { getData } = require("./modules/data.js");
// //CommenJs
// //install axios
// //use axios to fetch https(https://jsonplaceholder.typicode.com/users)


//getData("https://jsonplaceholder.typicode.com/users").then ((data) => 
//console.log(data));


// const slugify = require("slugify");

//const { default: axios } = require("axios")

// const link = slugify('about page','');
// console.log(link);




 const axios  = require("axios");
                                                //users
                                                //albums
axios.get("https://jsonplaceholder.typicode.com/albums")
.then(resp => 
        {if(resp.status === 200){
            console.log(resp)};
            }
    );




// const axios  = require("axios");
// const getData = async(url) => {
//     try{
//         const res = await axios.get(url);
//         return res.data;
//     }catch (error){
//         console.log(error);
//     }
// };
// getData("https://jsonplaceholder.typicode.com/users");

// module.exports = {
//     getData,
// }