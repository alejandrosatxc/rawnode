const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.type('text/html')
    res.status(200)
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/about', (req, res) => {
    res.type('text/html')
    res.status(200)
    res.sendFile(__dirname + '/public/about.html')
})

app.get('/img/dog.png', (req, res) => {
    res.type('img/png')
    res.status(200)
    res.sendFile(__dirname + '/public/img/dog.png')})

app.use((req, res) => {
    res.type('text/html')
    res.status(404)
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(PORT, () => {
    console.log(`Rawnode is running with express on port: ${PORT}`)
})