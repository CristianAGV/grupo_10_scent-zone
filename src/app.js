const express = require("express")
const path = require("path")
const app = express()
const mainRoutes = require('./routes')

app.use(express.static(path.resolve(__dirname, '../public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))

app.use('/', mainRoutes)

module.exports = app
