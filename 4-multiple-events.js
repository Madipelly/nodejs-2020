let events = require('events');

let eventEmitter= new events.EventEmitter();

eventEmitter.on("onLoadingDashboard", ()=>{
    console.log("Pls wait while loading Dashboard");
});

eventEmitter.on("onLoginSuccessful", () => {
    console.log("Logged in Successfully");
    
    eventEmitter.emit("onLoadingDashboard");
});

eventEmitter.emit("onLoginSuccessful");
