const express = require("express")
const path = require("path")
const app = express()
const mainRoutes = require('./routes')
const methodOverride =  require('method-override');

app.use(express.static(path.join(__dirname, '../public/')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/', mainRoutes)
app.set('views', path.resolve(__dirname, './views'))


module.exports = app