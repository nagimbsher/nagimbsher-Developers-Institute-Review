// const axios = require("axios")
import axios from "axios";
export const getData = async (url) =>{
    try{
        const res = await axios.get(url);
        return res .data;
    }catch(error) {
        console.log(error)
     }
    };
    // export default getData
    // module.exports =getData;


