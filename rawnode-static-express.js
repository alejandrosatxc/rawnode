const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => {
    console.log(`Rawnode is running with express, using expres.static middleware on port: ${PORT}`)
})