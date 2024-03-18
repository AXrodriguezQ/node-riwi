const express = require('express')

const app = express()

app.set('port', process.env.PORT)

app.use(express.urlencoded({ extends: true }))

app.use(require('./routes/notas.routes'))

module.exports = app