const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const PORT = process.env.PORT || 8000

app.get('/', (req,res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))
app.use((req, res) => {
    res.status(404)
    res.render('404')
})
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})
app.listen(PORT, () => {
    console.log(`Rawnode is running with express, using handlebars as a view engine on port: ${PORT}`)
})
