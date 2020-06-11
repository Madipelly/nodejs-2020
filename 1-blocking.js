// Blocking or Sync 
const fs = require("fs"); //importing filesystem

//read file synchronously - so it is blocking i/o
const data = fs.readFileSync('dummy.txt'); // blocking i/o

//will be printed first
console.log(data.toString()); 

//will be printed at last as the program runs 
// line by line and char by char
console.log("========Program Ended=========="); 
