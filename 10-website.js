var http = require('http');

function getTemplate(param) {
    return `<html>
        <head>
            <title>Trying NodeJS Http</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contacts</a></li>
            <li><a href='/service'>Services</a></li>
            <li><a href='/product'>Products</a></li>
        </ul>
        <h1>Welcome to ${param} page</h1>
        </body>
    </html>`;
 
}

//creating a server
http.createServer((req, res) => {
    console.log('Request is hitting the server');
    //handling req
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case '/':
            res.write(getTemplate('home'));
            break;
        case '/about':
            res.write(getTemplate('about'));
            break;
        case '/contact':
            res.write(getTemplate('contacts'));
            break;
        case '/service':
            res.write(getTemplate('services'));
            break;
        case '/product':
            res.write(getTemplate('products'));
            break;
    }
    res.end();
}).listen(3001, () => {
    console.log("Server started on port 3001. Goto this url in browser: http://localhost:3001");
});