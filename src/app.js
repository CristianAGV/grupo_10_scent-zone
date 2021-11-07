const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000
const mainRoutes = require('./routes/main.routes')

app.use(express.static(path.join(__dirname, '../public/')))
app.set('view engine', 'ejs')
app.use('/', mainRoutes)
app.set('views', path.resolve(__dirname, './views'))


app.listen(port, () => console.log("Servidor corriendo en el puerto", port))
