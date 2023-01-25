const http = require('http')
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('Hello world!')
})

server.listen(PORT, () => console.log(`Rawnode is listening on port:${PORT}`))