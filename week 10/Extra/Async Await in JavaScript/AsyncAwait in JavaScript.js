const  loaodData = async () =>{

try{
const url = `https://v6.exchangerate-api.com/v6/6da4d3cdc657da50182b0fd5/latest/USD`
const res = await fetch ( url);
const data = await res .json();
console.log(data);
}catch(err){
console.error,(err)
}
};
loaodData();


