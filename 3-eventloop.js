// Import events module
let events = require('events'); 

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter(); 

eventEmitter.on("onReportGenerated", (  ) => {
    console.log('Inside on Report Generated');
});

console.log("Before last line");

eventEmitter.emit("onReportGenerated");

console.log("Program Ended.");