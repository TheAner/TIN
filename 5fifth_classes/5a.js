var http = require('http');
const crypto = require('crypto');

var server = http.createServer(function (req, res) {
    let randomString = crypto.randomBytes(4).toString('hex');

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello world, ' + randomString);
        res.end();
    }
    else if (req.url == "/url") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Response from /url, ' + randomString);
        res.end();
    }
    else if (req.url == "/funny") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Response from /funny, ' + randomString);
        res.end();

    }
    else
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Wrong path! ' + randomString);

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')