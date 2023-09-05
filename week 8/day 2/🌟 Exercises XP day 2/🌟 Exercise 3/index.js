// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const sentence = epic.reduce((total,current) => (total += current + ""), "");
const sentenceWithJoin = epic.join(" ");
console.log("sentenceWithJoin:", sentenceWithJoin);