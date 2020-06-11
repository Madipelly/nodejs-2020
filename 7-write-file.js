const fs = require('fs');

const content = 'Welcome to File System APIs';

fs.writeFile('sample.txt', content, (err) => {
    if(!err){
        console.log('File writing over');
    }else{
        console.log(err);
    }
});

console.log("======Program Ended======");