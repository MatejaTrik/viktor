const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our HOME page')
    }
    if (req.url === '/about') {
        res.end('here is out shor history')
    }

    res.end(`<h1>Ooops!</h1>`)
});

server.listen(5000);
