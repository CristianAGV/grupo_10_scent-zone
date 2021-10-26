const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './public/')))

/* En este caso aca se serviria el home */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})


app.get("/login", (req,res) => {
  res.sendFile(path.join(__dirname,"./views/login.html"))
})


app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/categories.html"))
})

app.listen(port, () => console.log("Servidor corriendo en el puerto", port))