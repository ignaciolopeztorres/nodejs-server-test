const http = require("http");
const port = 3006;
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.error("Error del servidor: ", err);
                res.end('Server Error');
            } else {
                const html = data.toString();
                //console.log(data.toString());
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(html);
            }
        });
    }
});

server.listen(port, () => {
    console.log('server listening on: http://localhost:%s', port);
});