//Prompt the user for a number to begin conuting down bottles
let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput(){
    const answer = prompt("How many beers?");
    if (answer =="") return alert("Please enter something");
    const number = Number(answer);
    if (Number.isNaN(number)) return alert ("Please enter a number");
    return number;
}
 
while(numberOfBeers > 0 ){
    const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
    console.log(stanza);
    numberOfBeers -= numberOfBeersToTakeAway;
    numberOfBeersToTakeAway++; 
}
function makeStanza(num, counter){
    const bottlesOrBottles = getBottleOrBottles(num);
    const bottlesToTakeAway = getSmallerNumber(counter, num);
    const remainigBottles = getBiggerNumber(num - counter, 0);

const stanza = `${num} ${bottlesOrBottles} of beer on the wall
${num} ${bottlesOrBottles} of beer
Take ${bottlesToTakeAway} down, pass it around
${remainigBottles} ${getBottleOrBottles(remainigBottles)} of beer
on the wall`;
return stanza;
}
function getBiggerNumber(a,b){
return a > b? a : b;
}
 function getSmallerNumber(a, b){
return a < b ? a :b;
 }
 function isPlural(num){
    return num > 1;
 }

 function getBottleOrBottles(num){
   return isPlural (num)?"bottles" :"bottle"; 
 }