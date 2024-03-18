const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(express.urlencoded({ extends: false }))
app.use(express.json())
app.use(cors());

app.use(require('./routes/books.routes'))

module.exports = app