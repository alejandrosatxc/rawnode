const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000

app.use((req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log("Rawnode is running with express on port" + PORT)
})