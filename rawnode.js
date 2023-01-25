const http = require('http') //node core module
const fs = require('fs') //node core module
const PORT = process.env.PORT || 3000 //use env variable for port, use 3000 if it is not defined

//helper function that reads a file specified from a path, then sends it to the user if valid
function serveStaticFiles(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-type': 'text/plain'})
            return res.end('500 - Internal Error')
        }

        res.writeHead(responseCode, {'Content-Type' : contentType})
        res.end(data)
    })
}
//use node core module: 'http' to create a http server
const server = http.createServer((req, res) => {

    //parse the req.url
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()

    //basic routing implementation
    switch(path) {
        case '':
            serveStaticFiles(res, '/public/home.html', 'text/html')
            break
        case '/about':
            serveStaticFiles(res, '/public/about.html', 'text/html')
            break
        case '/img/dog.png':
            serveStaticFiles(res, '/public/img/dog.png', 'image/png')
            break
        default:
            serveStaticFiles(res, '/public/404.html', 'text/html', 404)
            break
    }
})

//start the server
server.listen(PORT, () => console.log(`Rawnode is listening on port:${PORT}`))