// using http module 
const http = require('http');

//creating a server 
http.createServer( ( req, res) => {
    console.log('Request is hitting the server');
    // handling req
    console.log(req.url);
    if(req.url == '/'){
        console.log('Inside home page req');
        res.writeHead(200, {'Content-Type': 'text/html'});  
        res.write('Welcome to Home page');
        res.end();
    }
}).listen(3000, ( ) => {  
    console.log('Server started');
});

