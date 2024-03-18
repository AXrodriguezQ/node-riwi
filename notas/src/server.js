const express = require('express')

const app = express()

app.set('port', process.env.PORT)

app.use(express.urlencoded({ extends: true }))

module.exports = app

app.use(require('./routes/notas.routes'))