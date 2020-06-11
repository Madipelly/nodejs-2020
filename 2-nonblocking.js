var fs = require("fs"); 

// non blocking i/o 
fs.readFile( 'dummy.txt', ( err, data ) => { 
    // with error first callback using arrow fn
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
});

//the following line will get executed first while fs is reading the file
console.log("=====Program Ended======");