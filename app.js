const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './public/')))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/registro.html"))
})

app.get("/historial", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/historial.html"))
})



app.listen(port, () => console.log("Servidor corriendo en el puerto", port))