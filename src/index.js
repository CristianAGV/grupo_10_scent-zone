const express = require('express');
require('dotenv').config();
const app = require('./app.js')
const port = process.env.PORT || 3003

app.listen(port, () => console.log("Servidor corriendo en el puerto", port))