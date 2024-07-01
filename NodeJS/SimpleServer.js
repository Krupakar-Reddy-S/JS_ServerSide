const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html> <head> <title>Node JS Class</title> </head> <body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body> </html>');

    res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server is running at http://${host}:${port}`);
});
