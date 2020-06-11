const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const content = 'NodeJS is awesome';

eventEmitter.on('onFileWritingSuccess', () => {
    fs.readFile('example.txt', (err, data ) => {
        if(!err){
            console.log(data.toString());
        }
    });
});

fs.writeFile('example.txt', content, (err) => {
    if(!err){
        console.log('File writing over');
        // emit the custom event 
        eventEmitter.emit('onFileWritingSuccess');
    }else{
        console.log(err);
    }
});

console.log("======Program Ended======");