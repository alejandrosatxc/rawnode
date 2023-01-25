const http = require('http')
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('About')
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found')
            break
    }
})

server.listen(PORT, () => console.log(`Rawnode is listening on port:${PORT}`))