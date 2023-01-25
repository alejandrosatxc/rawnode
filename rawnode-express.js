const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/about', (req, res) => {
    res.send("About")
})

app.get('/img/dog.png', (req, res) => {
    res.send("dog")
})

app.use((req, res) => {
    res.send("not found")
})

app.listen(PORT, () => {
    console.log("Rawnode is running with express on port" + PORT)
})