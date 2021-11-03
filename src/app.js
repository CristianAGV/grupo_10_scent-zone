const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000
const mainRoutes = require('./routes/main.routes')

app.use(express.static(path.join(__dirname, '../public/')))
app.set('view engine', 'ejs')
app.use('/', mainRoutes)
app.set('views', path.resolve(__dirname, './views'))


app.get("/login", (req,res) => {
  res.sendFile(path.join(__dirname,"./views/login.html"))
})

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/registro.html"))
})

app.get("/historial", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/history.html"))
})

app.get("/product-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/product-detail.html"))
})


app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/categories.html"))
})


app.listen(port, () => console.log("Servidor corriendo en el puerto", port))
